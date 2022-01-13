<template>
  <div class="app-page">
    <a-card title="Auto code" :bordered="false" style="width: 1200px">
      <div class="tags" style="margin: 20px 6px">
        <span>数据库公共字段：</span>
        <a-tag
          v-for="(item, index) in commonKey"
          :key="item"
          v-clipboard="item"
          v-clipboard:success="onSuccess"
          v-clipboard:error="onError"
          style="margin: 0 6px 0 5px"
          color="#108ee9"
        >{{ item }}</a-tag>
      </div>
      <ImpExcel dateFormat="YYYY-MM-DD" @success="loadDataSuccess">
        <a-button class="m-3">导入字段</a-button>
      </ImpExcel>

      <div class="tags" style="margin: 20px 6px">
        <a-tag
          v-for="(item, index) in tableKey"
          :key="item.value"
          v-clipboard="item.value"
          v-clipboard:success="onSuccess"
          v-clipboard:error="onError"
          style="margin: 0 6px 0 5px"
          color="#108ee9"
        >{{ item.value }}</a-tag>
        <a-tag color="#f50" @click="handleCheckAll">
          <template #icon>
            <twitter-outlined />
          </template>
          一键全选
        </a-tag>
      </div>
      <a-from>
        <div class="raido">
          <a-form-item label="">
            <a-switch v-model:checked="isCheckToken" checked-children="是" un-checked-children="否" /><span>是否校验token</span> 
          </a-form-item>
          <a-form-item label="">
            <a-switch v-model:checked="isGetNowTime" checked-children="是" un-checked-children="否" /><span>是否获取当前时间</span> 
          </a-form-item>
          <a-form-item label="">
            <a-switch v-model:checked="isGetMonTime" checked-children="是" un-checked-children="否" /><span>是否获取本月开始和结束时间</span> 
          </a-form-item>
          <a-form-item label="">
            <a-switch v-model:checked="isGetDayTime" checked-children="是" un-checked-children="否" /><span>是否获取今天开始和结束时间</span> 
          </a-form-item>
        </div>
      </a-from>
      <a-form :labelCol="{ span: 4, offset: 0 }">
        <a-form-item label="sql">
          <a-radio-group v-model:value="mode">
            <a-radio-button value="add">增</a-radio-button>
            <a-radio-button value="delete">删</a-radio-button>
            <a-radio-button value="update">改</a-radio-button>
            <a-radio-button value="select">查</a-radio-button>
            <a-radio-button value="importData">导入数据</a-radio-button>
            <a-radio-button value="backLogin">后台登录</a-radio-button>
            <a-radio-button value="frontLogin">前台验证码登录</a-radio-button>
            <a-radio-button value="onkeyLogin">一键登录</a-radio-button>
            <a-radio-button value="luckyDraw">抽奖</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item v-if="mode !== 'luckyDraw'" label="关联表名">
          <a-input v-model:value="tableName" placeholder="请输入表名" />
        </a-form-item>

        <a-form-item v-for="(item, index) in configState[mode]" :key="index" :label="item.label">
          <a-select
            v-if="item.component === 'select'"
            v-model:value="item.value"
            mode="tags"
            style="width: 100%"
            placeholder="Tags Mode"
            :options="tableKey"
            @change="handleChange"
          />
          <a-input
            v-if="item.component === 'input'"
            v-model:value="item.value"
            placeholder="请输入表名"
          />
        </a-form-item>
        <a-form-item style="text-align: center">
          <a-button type="primary" @click="handleCreateCode">生成代码</a-button>
        </a-form-item>
      </a-form>
      <div class="code">
        <CopyOutlined
          v-clipboard="code"
          v-clipboard:success="onSuccess"
          v-clipboard:error="onError"
          :style="{ fontSize: '20px', color: '#fff' }"
        />
        <pre v-if="code" v-highlightjs><code class="go">{{ code }}</code></pre>
      </div>
    </a-card>
    <!-- <vue-live2d :modelPath="modelPath"></vue-live2d> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed, toRaw, toRaw } from 'vue'

import { ImpExcel, ExcelData } from './components/Excel'
import type { UnwrapRef } from 'vue'
import { CopyOutlined } from '@ant-design/icons-vue'
import { CreateCustomFun } from '@/utils/createCustom'
import { message } from 'ant-design-vue'
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons-vue';
interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline'
  fieldA: string
  fieldB: string
}
export default defineComponent({
  components: { ImpExcel, CopyOutlined, TwitterOutlined, },

  setup() {
    let state: any = reactive({
      mode: 'add',
      code: '',
      isCheckToken: true,
      isGetNowTime:true,
      isGetMonTime:true,
      isGetDayTime:true,
      tableName: '',
      tableKey: [],
      commonKey: ['status', 'createTime', 'updateTime', 'deleteFlag', 'reserved1', 'reserved2'],
      dataSource: [],
      columns: []
    })
    let cacheData = localStorage.getItem('tableKeys') || ''
    if (cacheData) state = reactive(JSON.parse(cacheData))

    const formState: any = reactive({})
    let configState: any = reactive({
      add: [
        { label: '需要添加的字段', value: [], key: 'addArr', component: 'select' },
        { label: '不能为空字段', value: [], key: 'noEmptyArr', component: 'select' }
      ],
      delete: [],
      update: [
        { label: '更新字段', value: [], key: 'updateArr', component: 'select' },
        { label: '不能为空字段', value: [], key: 'noEmptyArr', component: 'select' },
        { label: '更新字段条件', value: [], key: 'conditionArr', component: 'select' }
      ],
      select: [
        { label: '精准查询字段', value: [], key: 'accurateArr', component: 'select' },
        { label: '模糊查询字段', value: [], key: 'dimArr', component: 'select' }
      ],
      importData: [{ label: '导入的字段', value: [], key: 'importArr', component: 'select' },],
      backLogin: [],
      frontLogin: [],
      onkeyLogin: [],
      luckyDraw: [
        { label: '抽奖结果表表名', value: '', key: 'prizeResultTableName', component: 'input' },
        { label: '奖品配置表表名', value: '', key: 'prizeConfigTableName', component: 'input' },
        { label: '奖品结果表更新字段', value: [], key: 'prArr', component: 'select' },
        { label: '奖品配置表更新库存字段', value: [], key: 'pcArr', component: 'select' }
      ]
    })
    let configData = localStorage.getItem('configState') || ''
    if (configData) configState = reactive(JSON.parse(configData))
    const handleChange = (value: string) => {
      console.log(`selected ${value}`)
    }
    const handleCopy = (value: string) => {
      console.log(`selected ${value}`)
    }
    const handleCreateCode = () => {
      localStorage.setItem('tableKeys', JSON.stringify(state))
      localStorage.setItem('configState', JSON.stringify(configState))
      let arr: any = []
      let configData = configState[state.mode]
      configData.forEach((item: any) => {
        arr.push(toRaw(item.value))
      })
      console.log('%c 🦀 arr: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', arr)
      let reateCustomFun = new CreateCustomFun(state)
      state.code = reateCustomFun[state.mode](...arr)
      let tableArr: any = []
      state.tableKey.map((item: any) => {
        tableArr.push(item.value)
      })
      if (!tableArr.includes('status')) {
        console.log('不存在status')
        state.code = state.code.replace(/status = 1/g, '1 = 1')
      }
    }
    const onSuccess = () => {
      message.success('复制成功')
    }

    const onError = () => {
      message.error('复制失败')
    }
    const handleCheckAll = () => {
      if (!(configState[state.mode][0].value instanceof Array)) return
      configState[state.mode][0].value = []
      state.tableKey.map((item: any) => {
        configState[state.mode][0].value.push(item.value)
      })
    }
    function loadDataSuccess(excelDataList: ExcelData[]) {
      console.log(
        '%c 🍝 excelDataList: ',
        'font-size:20px;background-color: #2EAFB0;color:#fff;',
        excelDataList
      )
      // var escape1 =escape("我的名字是：mosquito~");//编码
      // console.log(escape1);
      // var unescape1 = unescape(escape1); //解码
      // console.log(unescape1);
      const { header, results } = excelDataList[0]
      state.tableKey = []
      configState.add[0].value = []
      configState.importData[0].value = []
      header.map((item) => {

        state.tableKey.push({ value: item.trim() })
        if (
          state.mode === 'add' &&
          !['id', 'status', 'updateTime', 'deleteFlag'].includes(item.trim())
        ) {
          configState.add[0].value.push(item.trim())

        }
        configState.importData[0].value.push(item.trim())
      })
      state.columns = []

      results.forEach((item, index) => {
        let obj = {
          key: index
        }
        header.forEach((hitem, hindex) => {
          obj[hitem] = item[hitem]
          if (index === 0) {
            state.columns.push({ title: hitem, dataIndex: hitem, key: hitem })
          }
        })
        state.dataSource.push(obj)
      })

      console.log(
        '%c 🍢  state.dataSource: ',
        'font-size:20px;background-color: #EA7E5C;color:#fff;',
        state.dataSource
      )
      console.log('%c 🥦 state: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', state)
    }

    return {
      handleCheckAll,
      onSuccess,
      onError,
      handleCopy,
      handleCreateCode,
      configState,
      handleChange,
      formState,
      loadDataSuccess,
      ...toRefs(state)
    }
  }
})
</script>
<style >
.app-page {
  max-width: 1200px;
  margin: 20px auto;
}
.raido {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 180px;
}
.raido > div {
  width: 40%;
}
.raido .ant-form-item-control-input-content {
  display: flex;
  align-items: center;
  
}
.raido .ant-form-item-control-input-content span{
    margin-left: 10px;
}
.ant-tag {
  cursor: pointer;
}

.code {
  position: relative;
}
code {
  min-height: 50px;
}
.anticon-copy {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
}
</style>
