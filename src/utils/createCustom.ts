export class CreateCustomFun {
  tableName: string
  // mode: string
  isCheckToken: Boolean
  isGetNowTime: Boolean
  isBackground: Boolean
  isGetMonTime: Boolean
  isGetDayTime: Boolean
  constructor(state: any) {
    this.tableName = state.tableName
    // this.mode = state.mode
    this.isCheckToken = state.isCheckToken
    this.isBackground = state.isBackground
    this.isGetNowTime = state.isGetNowTime
    this.isGetMonTime = state.isGetMonTime
    this.isGetDayTime = state.isGetDayTime
  }
  handleTime() {
    let configMap = {
      isGetNowTime: () => this.getNowTime(),
      isGetDayTime: () => this.getTodayStartTimeAndEndTime(),
      isGetMonTime: () => this.getMonthStartTimeAndEndTime(),
    }
    let str = ''
    Object.keys(configMap).map((item: String) => {
      if (this[item]) {
        str += configMap[item]() + '\n'
      }
    })
    return str
  }
  getNowTime() {
    return `
    //获取当前时间
    function getNowTime() {
      function add0(m) { return m < 10 ? '0' + m : m }
      function format() {
        var time = new Date();
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
      }
      return format()
    }
    Params.createTime = getNowTime()
    `
  }
  getTodayStartTimeAndEndTime() {
    return `
    //获取今天开始时间和结束时间
    function getTodayStartTimeAndEndTime(time) {
      var time = time ? time : new Date();
      function add0(m) { return m < 10 ? '0' + m : m }
      function format(t) {
        //shijianchuo是整数，否则要parseInt转换
        var time = new Date(t);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
      }
      return [
        format(time.setHours(0, 0, 0, 0)),
        format(time.setHours(23, 59, 59, 999)),
      ]
  
    }
    var tiemArr = getTodayStartTimeAndEndTime()
    Params.startT = tiemArr[0]
    Params.endT = tiemArr[1]
    `
  }
  getMonthStartTimeAndEndTime() {
    return `
    //获取本月开始时间和结束时间
    function getMonthStartTimeAndEndTime() {
      var date = new Date()
      var currentMonth = date.getMonth()
      date.setDate(1)
      var month = date.getMonth() + 1
      var day = date.getDate()
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      var nextMonth = ++currentMonth
      var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1)
      var oneDay = 1000 * 60 * 60 * 24
      var lastTime = new Date(nextMonthFirstDay - oneDay)
      var endMonth = lastTime.getMonth() + 1
      var endDay = lastTime.getDate()
      if (endMonth < 10) {
        endMonth = '0' + endMonth
      }
      if (endDay < 10) {
        endDay = '0' + endDay
      }
      return [date.getFullYear() + '-' + month + '-' + day, date.getFullYear() + '-' + endMonth + '-' + endDay]
    }
    var tiemArr = getMonthStartTimeAndEndTime()
    Params.startT = tiemArr[0]
    Params.endT = tiemArr[1]
    `
  }
  add(addArr: any[], noEmptyArr: any[]) {
    console.log(
      '%c 🍶 noEmptyArr: ',
      'font-size:20px;background-color: #42b983;color:#fff;',
      noEmptyArr
    )
    console.log('%c 🥖 addArr: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', addArr)
    let addSql = 'var addSql = "insert into ' + this.tableName + ' ('
    let keyStr = ''
    let valueStr = '('
    const emptyJudge = `
    var nArr= ${JSON.stringify(noEmptyArr)}\n
    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return  JsResult.result=createRes('00007', nArr[i] + '不能为空')
      }
    }`
    for (let i = 0; i < addArr.length; i++) {
      const key = addArr[i]
      keyStr += key + (i < addArr.length - 1 ? ',' : ')')
      valueStr += '#{' + key + '}' + (i < addArr.length - 1 ? ',' : ')')
    }
    addSql += keyStr + ' values ' + valueStr + '"'
    const carryStr =
      emptyJudge +
      '\n' +
      addSql +
      '\n' +
      `var orgResult = CustomizeUtil.abilitySql(addSql, Params)
    JsResult.result = orgResult`
    return (
      this.handleTime() +
      this.commonHead() +
      (this.isCheckToken ? this.checkToken() : '') +
      '\n' +
      carryStr +
      '\n' +
      this.commonFooter()
    )
  }
  delete() {
    const delSql = 'var delSql = "update ' + this.tableName + ' set deleteFlag = 1 where id=#{id}"'
    const emptyJudge = `
    if(!Params.id){
     return JsResult.result=createRes('0007','id不能为空')
    }
    `
    const carryStr =
      emptyJudge +
      '\n' +
      delSql +
      '\n' +
      `var orgResult = CustomizeUtil.abilitySql(delSql, Params)
    JsResult.result = orgResult`

    return (
      this.handleTime() +
      this.commonHead() +
      (this.isCheckToken ? this.checkToken() : '') +
      '\n' +
      carryStr +
      '\n' +
      this.commonFooter()
    )
  }
  select(accurateArr: any[], dimArr: any[]) {
    const pageStr = `
    var current = Params.current ? Params.current : 1
    var limit = Params.limit ? Params.limit : 10
    var limitSize = (current - 1) * limit // 需要跳过的数据
    var timeStr=''
    var timeObj = {
      startTime: function () { return ' and createTime >= #{startTime}'},
      endTime: function () { return ' and createTime =< #{endTime}'}
    }
    timeStr=(Params.startTime?timeObj.createTime():'')+(Params.endTime?timeObj.endTime():'')
    `
    // 查询总条数
    let queryTotalSql =
      'var queryTotalSql = "select id from ' + this.tableName + ' where status = 1"'
    // 查询数据
    let queryDataSql = 'var queryDataSql= "select * from ' + this.tableName + ' where status = 1"'
    let commonSql = ''
    accurateArr.map((item: any) => {
      commonSql += `+(Params['${item}']?" and ${item} = #{${item}}":"")`
    })
    dimArr.map((item: any) => {
      commonSql += `+(Params['${item}']?(" and ${item} like '%"+Params['${item}']+"%'"):"")`
      // commonSql += `+(Params['${item}']?(" and ${item} like '%"+#{${item}}+"%'"):"")`
      // commonSql += `+" and ${item} like '%#{${item}}%'"`
    })
    // const timeStr = ''
    // if (Params.startTime) {
    //   timeStr = ' and createTime>=' + Params.startTand + 'and createTime <= ' + Params.endTime
    // }
    // commonSql += ` and "+Params.startTime ? +"(and createTime>="+ Params.startTand+ "and createTime <= "+Params.endTime+":)"`

    queryTotalSql += commonSql + '+timeStr+" order by createTime desc"'
    queryDataSql += commonSql + `+timeStr+" order by createTime desc limit "+limitSize+", "+ limit`
    const carryStr = `
    var totalResult = CustomizeUtil.abilitySql(queryTotalSql,Params)
    var totalRes = JSON.parse(totalResult)
    var queryResult = CustomizeUtil.abilitySql(queryDataSql,Params)
    var queryDataRes = JSON.parse(queryResult)
    `
    return (
      this.handleTime() +
      this.commonHead() +
      '\n' +
      pageStr +
      '\n' +
      (this.isCheckToken ? this.checkToken() : '') +
      '\n' +
      queryTotalSql +
      '\n' +
      queryDataSql +
      '\n' +
      carryStr +
      '\n' +
      `JsResult.result =JSON.stringify({
        data: {
        total: totalRes.data.count,
        current:current,
        limit:limit,
        data:queryDataRes.data.results
        } 
      })
      ` +
      '\n' +
      this.commonFooter()
    )
  }
  update(updateArr: any[], noEmptyArr: any[], conditionArr: any[]) {
    let updateSql = 'var updateSql = "update ' + this.tableName + ' set '
    const emptyJudge = `
    var nArr= ${JSON.stringify(noEmptyArr)}\n
    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return createRes('00007', nArr[i] + '不能为空')
      }
    }`
    for (let i = 0; i < updateArr.length; i++) {
      const key = updateArr[i]
      updateSql += key + '=#{' + key + '}' + (i < updateArr.length - 1 ? ',' : '')
    }
    updateSql += ' where '
    for (let i = 0; i < conditionArr.length; i++) {
      const key = conditionArr[i]
      updateSql += key + '=#{' + key + '}' + (i < conditionArr.length - 1 ? ' and ' : '')
    }
    updateSql += '"'
    const carryStr =
      emptyJudge +
      '\n' +
      updateSql +
      '\n' +
      `var orgResult = CustomizeUtil.abilitySql(updateSql, Params)
    JsResult.result = orgResult`
    return (
      this.handleTime() +
      this.commonHead() +
      (this.isCheckToken ? this.checkToken() : '') +
      '\n' +
      carryStr +
      '\n' +
      this.commonFooter()
    )
  }
  importData(importArr: any) {
    let importSql = '     var sql = "insert into ' + this.tableName + ' ('
    importArr.map((item: any, index: number) => {
      importSql += (index != 0 ? ',' : '') + item
    })
    importSql += ') values "'
    let mainStr = `
    var tempArr='${importArr}';
    var importArr=tempArr.split(",");
    var dataArr = Params.content
    for (var i = 0; i < dataArr.length; i++) {
      var item = dataArr[i]
      var str = "("
      for (var j = 0; j < importArr.length; j++) {
        var itemVal=item[importArr[j]]===0?0:(item[importArr[j]]||'')
        str +="'"+itemVal+"'"+ (j < importArr.length - 1 ? "," : "");
      }
      sql += str + ")" + (i < dataArr.length - 1 ? "," : "");
    }
    var create = CustomizeUtil.abilitySql(sql);
    JsResult.result = create;
    `
    return (
      this.handleTime() +
      this.commonHead() +
      (this.isCheckToken ? this.checkToken() : '') +
      '\n' +
      importSql +
      '\n' +
      mainStr +
      '\n' +
      this.commonFooter()
    )

  }
  checkToken() {
    let checkStr = `
    try {
      var redisRes = JSON.parse(CustomizeUtil.redisGet({ key: Params.token }))
      if (!redisRes.data.value) {
        JsResult.result = createRes('00008', 'token过期或token不能为空')
        return
      }
      var resData = JSON.parse(redisRes.data.value)
      Params.phone = resData.userphone
      `
    if (this.isBackground) {
      checkStr += `
      if(!resData.adminUser){
      JsResult.result = createRes('00005', '该手机号码无权限登录')
      return
      }
      `
    }
    return checkStr += `
    } catch (error) {
      return JsResult.result = createRes('00008', 'token过期或token不能为空')
    }
    `
  }
  onkeyLogin() {
    const loginStr = `
        var result = CustomizeUtil.acquireLogin(Params.msgidKey,'');
      var loginRes = JSON.parse(result)
      var userInfo={}
      // return JsResult.result=createRes('00009','登录失败')
      var token = loginRes.data.token
      if (!token) {
        JsResult.result=createRes('00009','登录失败')
      }
      //token兑换手机号
      var mres = CustomizeUtil.getMobile(token);
      var mResponse=JSON.parse(mres)
      userInfo.token = token
      userInfo.userphone = mResponse.mobile
      var tokenparams = { key: token, value: userInfo, overTime: 3 * 24 * 60 * 60 }
      var tokenresult = CustomizeUtil.redisSet(tokenparams) //设置缓存
      var jsonTokenResult = JSON.parse(tokenresult)
      if (jsonTokenResult.data.status == '0') {
        JsResult.result = JSON.stringify(userInfo)
      } else {
        JsResult.result = tokenresult
      }
    `
    return this.handleTime() + this.commonHead() + '\n' + loginStr + '\n' + this.commonFooter()
  }
  backLogin() {
    const loginStr = `
    var phone = Params.phone
    var smsCode = Params.smsCode
  
    if (!phone || !smsCode) {
      return (JsResult.result = createRes('00002', '请输入手机号和验证码'))
    }
    var userInfo = {
      userphone: phone,
      adminUser:1
    }
    var userDetailSql =
      'select * from ${this.tableName} where status=1 and phone=' + phone
    var userResult = CustomizeUtil.abilitySql(userDetailSql)
  
    var userData = JSON.parse(userResult).data
  
    if (!userData.results[0]) {
      // 校验短信验证码
      var vacodeResult = CustomizeUtil.acquireValidCode(phone, smsCode, '')
      var jsonVacodeResult = JSON.parse(vacodeResult)
      var rettoken = null
      if (!jsonVacodeResult.hasOwnProperty('data')) {
        JsResult.result = createRes('00004', '您输入的验证码有误，请重新输入')
        return
      } else {
        rettoken = jsonVacodeResult.data.token
        userInfo.token = rettoken
        var tokenparams = { key: rettoken, value: userInfo, overTime: 3 * 24 * 60 * 60 }
        var tokenresult = CustomizeUtil.redisSet(tokenparams) //设置缓存
        var jsonTokenResult = JSON.parse(tokenresult)
        if (jsonTokenResult.data.status == '0') {
          JsResult.result = JSON.stringify(userInfo)
        } else {
          JsResult.result = tokenresult
        }
      }
    } else {
      JsResult.result = createRes('00005', '该手机号码无权限登录')
      return
    }
    `
    return this.handleTime() + this.commonHead() + '\n' + loginStr + '\n' + this.commonFooter()
  }
  frontLogin() {
    const loginStr = `
    var phone = Params.phone
  var smsCode = Params.smsCode
  if (!phone || !smsCode) {
    return (JsResult.result = createRes('00002', '请输入手机号和验证码'))
  }

  var userInfo = {
    userphone: phone
  }
  // 校验短信验证码
  try {
    var vacodeResult = CustomizeUtil.acquireValidCode(phone, smsCode, '')
    var jsonVacodeResult = JSON.parse(vacodeResult)
    var rettoken = null
    if (!jsonVacodeResult.hasOwnProperty('data')) {
      JsResult.result = createRes('00004', '您输入的验证码有误，请重新输入')
      return
    } else {
      rettoken = jsonVacodeResult.data.token
      userInfo.token = rettoken
      var tokenparams = { key: rettoken, value: userInfo, overTime: 3 * 24 * 60 * 60 }
      var tokenresult = CustomizeUtil.redisSet(tokenparams) //设置缓存
      var jsonTokenResult = JSON.parse(tokenresult)
      if (jsonTokenResult.data.status == '0') {
        JsResult.result = JSON.stringify(userInfo)
      } else {
        JsResult.result = tokenresult
      }
    }
  } catch (error) {
    JsResult.result = createRes('99999', '系统异常，请稍后再试!')
  }

    `
    return this.handleTime() + this.commonHead() + '\n' + loginStr + '\n' + this.commonFooter()
  }
  /**
   * @param {String} prizeResultTableName 奖品记录表
   * @param {String} prizeConfigTableName 奖品配置表
   * @param {prArr} prArr 奖品结果表添加字段
   * @param {pcArr} pcArr 奖品配置表更新库存字段
   *
   */
  //抽奖
  luckyDraw(prizeResultTableName: string, prizeConfigTableName: string, prArr: any[], pcArr: any[]) {
    const pn = `var prizeResultTableName = "${prizeResultTableName}"//奖品记录表\nvar prizeConfigTableName= "${prizeConfigTableName}" //奖品配置表 `
    const drawContent = `//一个月只能中一次奖
    var queryCount = "select count(*) as number from "+prizeResultTableName+" where userPhone ='" + Params.userPhone + "'and busResult = 1 and createTime between '" + Params.startTime + "' and '" + Params.endTime + "'"
    var queryCountResult = CustomizeUtil.abilitySql(queryCount);
    var queryCountData = JSON.parse(queryCountResult)
    if (queryCountData.data.results&&queryCountData.data.results[0].number > 0) {
      return JsResult.result=createRes('00012','本月已领取过奖')
    }
    //生成中奖奖品
    var querySql = 'select * from '+prizeConfigTableName+ ' where activityId = #{activityId}'
    var queryPrizeRes = CustomizeUtil.abilitySql(querySql,Params);
    var pres = JSON.parse(queryPrizeRes).data.results
    //中奖数据
    var prizeData = []
    //中奖信息
    var pinfo={}
    var sum=1
    //根据奖品库存数 生成中奖区间
    for (var i = 0; i < pres.length; i++){
      var item=pres[i]
      if (Number(item.${pcArr[0]}) > 0) {
        item.inventoryArr=[sum,sum+Number(item.${pcArr[0]})]
        prizeData.push(item)
        sum+=Number(item.${pcArr[0]})
      }
    }
    var random = createRadom(sum)
    for (var i = 0; i < prizeData.length; i++){
      var item=prizeData[i]
      var start =item.inventoryArr[0]
      var end = item.inventoryArr[1]
      if (random<end && random >= start) {
        pinfo=item
      }
    }
    // return JsResult.result=JSON.stringify({random:random,p:prizeData,pinfo:pinfo})
    //办理业务
    var res = {};
    // var res = CustomizeUtil.getEcoupon(Params.token, pinfo.productId);
    if (pinfo.prizeType==1) {
      res  = CustomizeUtil.getEcoupon(Params.token,pinfo.productId);
    } else {
      res = CustomizeUtil.productOrder(Params.token, pinfo.productId, "1");
    }
    var response=JSON.parse(res)
    if (!response.data) {
      return JsResult.result=res
    } else if (response.data.status != 0) {
        return JsResult.result=res
    }
    // 插入领奖记录数据  这里需要手动添加
    insertData({})
    //更新库存
    updateStocks(Number(pinfo.stocks)- 1, pinfo.productId)
    JsResult.result = createRes('00006', '领取成功',{ecopName: pinfo.ecopName})
    `
    let addSql = 'var addSql = "insert into ' + prizeResultTableName + ' ('
    let keyStr = ''
    let valueStr = '('
    for (let i = 0; i < prArr.length; i++) {
      const key = prArr[i]
      keyStr += key + (i < prArr.length - 1 ? ',' : ')')
      valueStr += '#{' + key + '}' + (i < prArr.length - 1 ? ',' : ')')
    }
    addSql += keyStr + ' values ' + valueStr + '"'
    const insertStr = `
      //生成中奖记录
      function insertData(recordsData) {
        ${addSql}
        var orgResult = CustomizeUtil.abilitySql(addSql, recordsData)
      }`

    const updateStocksStr = `
    //更新库存
      function updateStocks(inventory, productId) {
        var updateSql = 'update ' + prizeConfigTableName + ' set ${pcArr[0]} = #{${pcArr[0]}} where productId = "' + productId+ '"'
        CustomizeUtil.abilitySql(updateSql, { ${pcArr[0]}: inventory })
      }
    `
    return (
      this.handleTime() +
      pn +
      '\n' +
      this.commonHead() +
      '\n' +
      (this.isCheckToken ? this.checkToken() : '') +
      '\n' +
      drawContent +
      '\n' +
      this.commonFooter() +
      '\n' +
      insertStr +
      '\n' +
      updateStocksStr
    )
  }
  commonHead() {
    let commonStr = `
    function executeFuntion() {
      function createRes(code, retMsg,other) {
        return JSON.stringify({
          data: { retCode: code, retMsg: retMsg, other: other ? other : '' }
        })
    }`
    return commonStr
  }
  commonFooter() {
    return `}
    /* 执行函数 */
    executeFuntion()
    `
  }
}
