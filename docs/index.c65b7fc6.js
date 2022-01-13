var K=Object.defineProperty;var M=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var w=(e,t,u)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,U=(e,t)=>{for(var u in t||(t={}))x.call(t,u)&&w(e,u,t[u]);if(M)for(var u of M(t))Y.call(t,u)&&w(e,u,t[u]);return e};var T=(e,t,u)=>(w(e,typeof t!="symbol"?t+"":t,u),u);import{d as j,r as $,u as G,o as C,c as _,w as b,a as D,b as Z,x as R,v as W,C as Q,T as X,e as A,t as ee,f as te,m as H,g as N,h as L,i as l,j as d,k as ue,F as P,l as z,n as E,p as q,q as O,s as F,_ as ae,B as re,y as oe,z as ne,A as se,D as le,I as ie,E as ce,G as de,H as me,J as pe,V as he}from"./vendor.d981abdc.js";const fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function u(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=u(r);fetch(r.href,s)}};fe();var V=(e,t)=>{const u=e.__vccOpts||e;for(const[a,r]of t)u[a]=r;return u};const ve=j({name:"ImportExcel",props:{dateFormat:{type:String},timeZone:{type:Number,default:8}},emits:["success","error"],setup(e,{emit:t}){const u=$(null),a=$(!1);function r(p){if(!p||!p["!ref"])return[];const v=[],n=R.utils.decode_range(p["!ref"]),k=n.s.r;for(let g=n.s.c;g<=n.e.c;++g){const f=p[R.utils.encode_cell({c:g,r:k})];let h="UNKNOWN "+g;f&&f.t&&(h=R.utils.format_cell(f)),v.push(h)}return v}function s(p){const v=[],{dateFormat:n,timeZone:k}=e;for(const g of p.SheetNames){const f=p.Sheets[g],h=r(f);let S=R.utils.sheet_to_json(f,{raw:!0,dateNF:n});S=S.map(o=>{for(let B in o)o[B]instanceof Date&&k===8&&o[B].setSeconds(o[B].getSeconds()+43);return o}),v.push({header:h,results:S,meta:{sheetName:g}})}return v}function m(p){return a.value=!0,new Promise((v,n)=>{const k=new FileReader;k.onload=async g=>{try{const f=g.target&&g.target.result,h=R.read(f,{type:"array",cellDates:!0}),S=s(h);t("success",S),v("")}catch(f){n(f),t("error")}finally{a.value=!1}},k.readAsArrayBuffer(p)})}async function i(p){const v=G(u);v&&(v.value=""),await m(p)}function c(p){const v=p&&p.target.files,n=v&&v[0];!n||i(n)}function y(){const p=G(u);p&&p.click()}return{handleUpload:y,handleInputClick:c,inputRef:u}}});function ye(e,t,u,a,r,s){return C(),_("div",null,[b(D("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:t[0]||(t[0]=(...m)=>e.handleInputClick&&e.handleInputClick(...m))},null,544),[[W,!1]]),D("div",{onClick:t[1]||(t[1]=(...m)=>e.handleUpload&&e.handleUpload(...m))},[Z(e.$slots,"default")])])}var ge=V(ve,[["render",ye]]);const ke=(e,t)=>{const u=e;return u.install=a=>{a.component(u.name||u.displayName,e),t&&(a.config.globalProperties[t]=e)},e},Fe=ke(ge);class Ce{constructor(t){T(this,"tableName");T(this,"isCheckToken");T(this,"isGetNowTime");T(this,"isGetMonTime");T(this,"isGetDayTime");this.tableName=t.tableName,this.isCheckToken=t.isCheckToken,this.isGetNowTime=t.isGetNowTime,this.isGetMonTime=t.isGetMonTime,this.isGetDayTime=t.isGetDayTime}handleTime(){let t={isGetNowTime:()=>this.getNowTime(),isGetDayTime:()=>this.getTodayStartTimeAndEndTime(),isGetMonTime:()=>this.getMonthStartTimeAndEndTime()},u="";return Object.keys(t).map(a=>{this[a]&&(u+=t[a]()+`
`)}),u}getNowTime(){return`
    //\u83B7\u53D6\u5F53\u524D\u65F6\u95F4
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
    `}getTodayStartTimeAndEndTime(){return`
    //\u83B7\u53D6\u4ECA\u5929\u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4
    function getTodayStartTimeAndEndTime(time) {
      var time = time ? time : new Date();
      function add0(m) { return m < 10 ? '0' + m : m }
      function format(t) {
        //shijianchuo\u662F\u6574\u6570\uFF0C\u5426\u5219\u8981parseInt\u8F6C\u6362
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
    `}getMonthStartTimeAndEndTime(){return`
    //\u83B7\u53D6\u672C\u6708\u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4
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
    `}add(t,u){console.log("%c \u{1F376} noEmptyArr: ","font-size:20px;background-color: #42b983;color:#fff;",u),console.log("%c \u{1F956} addArr: ","font-size:20px;background-color: #FFDD4D;color:#fff;",t);let a='var addSql = "insert into '+this.tableName+" (",r="",s="(";const m=`
    var nArr= ${JSON.stringify(u)}

    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return  JsResult.result=createRes('00007', nArr[i] + '\u4E0D\u80FD\u4E3A\u7A7A')
      }
    }`;for(let c=0;c<t.length;c++){const y=t[c];r+=y+(c<t.length-1?",":")"),s+="#{"+y+"}"+(c<t.length-1?",":")")}a+=r+" values "+s+'"';const i=m+`
`+a+`
var orgResult = CustomizeUtil.abilitySql(addSql, Params)
    JsResult.result = orgResult`;return this.handleTime()+this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+i+`
`+this.commonFooter()}delete(){const t='var delSql = "update '+this.tableName+' set deleteFlag = 1 where id=#{id}"',a=`
    if(!Params.id){
     return JsResult.result=createRes('0007','id\u4E0D\u80FD\u4E3A\u7A7A')
    }
    `+`
`+t+`
var orgResult = CustomizeUtil.abilitySql(delSql, Params)
    JsResult.result = orgResult`;return this.handleTime()+this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+a+`
`+this.commonFooter()}select(t,u){const a=`
    var current = Params.current ? Params.current : 1
    var limit = Params.limit ? Params.limit : 10
    var limitSize = (current - 1) * limit // \u9700\u8981\u8DF3\u8FC7\u7684\u6570\u636E
    var timeStr=''
    var timeObj = {
      createTime: function () { return ' and createTime >= #{startTime}'},
      endTime: function () { return ' and createTime =< #{endTime}'}
    }
    timeStr=(Params.createTime?timeObj.createTime():'')+(Params.endTime?timeObj.endTime():'')
    `;let r='var queryTotalSql = "select id from '+this.tableName+' where status = 1"',s='var queryDataSql= "select * from '+this.tableName+' where status = 1"',m="";t.map(c=>{m+=`+(Params['${c}']?" and ${c} = #{${c}}":"")`}),u.map(c=>{m+=`+(Params['${c}']?(" and ${c} like '%"+Params['${c}']+"%'"):"")`}),r+=m+'+timeStr+" order by createTime desc"',s+=m+'+timeStr+" order by createTime desc limit "+limitSize+", "+ limit';const i=`
    var totalResult = CustomizeUtil.abilitySql(queryTotalSql,Params)
    var totalRes = JSON.parse(totalResult)
    var queryResult = CustomizeUtil.abilitySql(queryDataSql,Params)
    var queryDataRes = JSON.parse(queryResult)
    `;return this.handleTime()+this.commonHead()+`
`+a+`
`+(this.isCheckToken?this.checkToken():"")+`
`+r+`
`+s+`
`+i+`
JsResult.result =JSON.stringify({
        data: {
        total: totalRes.data.count,
        current:current,
        limit:limit,
        data:queryDataRes.data.results
        } 
      })
      
`+this.commonFooter()}update(t,u,a){let r='var updateSql = "update '+this.tableName+" set ";const s=`
    var nArr= ${JSON.stringify(u)}

    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return createRes('00007', nArr[i] + '\u4E0D\u80FD\u4E3A\u7A7A')
      }
    }`;for(let i=0;i<t.length;i++){const c=t[i];r+=c+"=#{"+c+"}"+(i<t.length-1?",":"")}r+=" where ";for(let i=0;i<a.length;i++){const c=a[i];r+=c+"=#{"+c+"}"+(i<a.length-1?" and ":"")}r+='"';const m=s+`
`+r+`
var orgResult = CustomizeUtil.abilitySql(updateSql, Params)
    JsResult.result = orgResult`;return this.handleTime()+this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+m+`
`+this.commonFooter()}importData(t){let u='     var sql = "insert into '+this.tableName+" (";t.map((r,s)=>{u+=(s!=0?",":"")+r}),u+=') values "';let a=`
    var tempArr='${t}';
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
    `;return this.handleTime()+this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+u+`
`+a+`
`+this.commonFooter()}checkToken(){return`
    try {
      var redisRes = JSON.parse(CustomizeUtil.redisGet({ key: Params.token }))
      if (!redisRes.data.value) {
        JsResult.result = createRes('00008', 'token\u8FC7\u671F\u6216token\u4E0D\u80FD\u4E3A\u7A7A')
        return
      }
      Params.phone = JSON.parse(redisRes.data.value).userphone
    } catch (error) {
      return JsResult.result = createRes('00008', 'token\u8FC7\u671F\u6216token\u4E0D\u80FD\u4E3A\u7A7A')
    }
    `}onkeyLogin(){const t=`
        var result = CustomizeUtil.acquireLogin(Params.msgidKey,'');
      var loginRes = JSON.parse(result)
      var userInfo={}
      // return JsResult.result=createRes('00009','\u767B\u5F55\u5931\u8D25')
      var token = loginRes.data.token
      if (!token) {
        JsResult.result=createRes('00009','\u767B\u5F55\u5931\u8D25')
      }
      //token\u5151\u6362\u624B\u673A\u53F7
      var mres = CustomizeUtil.getMobile(token);
      var mResponse=JSON.parse(mres)
      userInfo.token = token
      userInfo.userphone = mResponse.mobile
      var tokenparams = { key: token, value: userInfo, overTime: 3 * 24 * 60 * 60 }
      var tokenresult = CustomizeUtil.redisSet(tokenparams) //\u8BBE\u7F6E\u7F13\u5B58
      var jsonTokenResult = JSON.parse(tokenresult)
      if (jsonTokenResult.data.status == '0') {
        JsResult.result = JSON.stringify(userInfo)
      } else {
        JsResult.result = tokenresult
      }
    `;return this.handleTime()+this.commonHead()+`
`+t+`
`+this.commonFooter()}backLogin(){const t=`
    var phone = Params.phone
    var smsCode = Params.smsCode
  
    if (!phone || !smsCode) {
      return (JsResult.result = createRes('00002', '\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801'))
    }
    var userInfo = {
      userphone: phone
    }
    var userDetailSql =
      'select * from ${this.tableName} where status=1 and phone=' + phone
    var userResult = CustomizeUtil.abilitySql(userDetailSql)
  
    var userData = JSON.parse(userResult).data
  
    if (!userData.results[0]) {
      // \u6821\u9A8C\u77ED\u4FE1\u9A8C\u8BC1\u7801
      var vacodeResult = CustomizeUtil.acquireValidCode(phone, smsCode, '')
      var jsonVacodeResult = JSON.parse(vacodeResult)
      var rettoken = null
      if (!jsonVacodeResult.hasOwnProperty('data')) {
        JsResult.result = createRes('00004', '\u60A8\u8F93\u5165\u7684\u9A8C\u8BC1\u7801\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165')
        return
      } else {
        rettoken = jsonVacodeResult.data.token
        userInfo.token = rettoken
        var tokenparams = { key: rettoken, value: userInfo, overTime: 3 * 24 * 60 * 60 }
        var tokenresult = CustomizeUtil.redisSet(tokenparams) //\u8BBE\u7F6E\u7F13\u5B58
        var jsonTokenResult = JSON.parse(tokenresult)
        if (jsonTokenResult.data.status == '0') {
          JsResult.result = JSON.stringify(userInfo)
        } else {
          JsResult.result = tokenresult
        }
      }
    } else {
      JsResult.result = createRes('00005', '\u8BE5\u624B\u673A\u53F7\u7801\u65E0\u6743\u9650\u767B\u5F55')
      return
    }
    `;return this.handleTime()+this.commonHead()+`
`+t+`
`+this.commonFooter()}frontLogin(){const t=`
    var phone = Params.phone
  var smsCode = Params.smsCode
  if (!phone || !smsCode) {
    return (JsResult.result = createRes('00002', '\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801'))
  }

  var userInfo = {
    userphone: phone
  }
  // \u6821\u9A8C\u77ED\u4FE1\u9A8C\u8BC1\u7801
  try {
    var vacodeResult = CustomizeUtil.acquireValidCode(phone, smsCode, '')
    var jsonVacodeResult = JSON.parse(vacodeResult)
    var rettoken = null
    if (!jsonVacodeResult.hasOwnProperty('data')) {
      JsResult.result = createRes('00004', '\u60A8\u8F93\u5165\u7684\u9A8C\u8BC1\u7801\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165')
      return
    } else {
      rettoken = jsonVacodeResult.data.token
      userInfo.token = rettoken
      var tokenparams = { key: rettoken, value: userInfo, overTime: 3 * 24 * 60 * 60 }
      var tokenresult = CustomizeUtil.redisSet(tokenparams) //\u8BBE\u7F6E\u7F13\u5B58
      var jsonTokenResult = JSON.parse(tokenresult)
      if (jsonTokenResult.data.status == '0') {
        JsResult.result = JSON.stringify(userInfo)
      } else {
        JsResult.result = tokenresult
      }
    }
  } catch (error) {
    JsResult.result = createRes('99999', '\u7CFB\u7EDF\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5!')
  }

    `;return this.handleTime()+this.commonHead()+`
`+t+`
`+this.commonFooter()}luckyDraw(t,u,a,r){const s=`var prizeResultTableName = "${t}"//\u5956\u54C1\u8BB0\u5F55\u8868
var prizeConfigTableName= "${u}" //\u5956\u54C1\u914D\u7F6E\u8868 `,m=`//\u4E00\u4E2A\u6708\u53EA\u80FD\u4E2D\u4E00\u6B21\u5956
    var queryCount = "select count(*) as number from "+prizeResultTableName+" where userPhone ='" + Params.userPhone + "'and busResult = 1 and createTime between '" + Params.startTime + "' and '" + Params.endTime + "'"
    var queryCountResult = CustomizeUtil.abilitySql(queryCount);
    var queryCountData = JSON.parse(queryCountResult)
    if (queryCountData.data.results&&queryCountData.data.results[0].number > 0) {
      return JsResult.result=createRes('00012','\u672C\u6708\u5DF2\u9886\u53D6\u8FC7\u5956')
    }
    //\u751F\u6210\u4E2D\u5956\u5956\u54C1
    var querySql = 'select * from '+prizeConfigTableName+ ' where activityId = #{activityId}'
    var queryPrizeRes = CustomizeUtil.abilitySql(querySql,Params);
    var pres = JSON.parse(queryPrizeRes).data.results
    //\u4E2D\u5956\u6570\u636E
    var prizeData = []
    //\u4E2D\u5956\u4FE1\u606F
    var pinfo={}
    var sum=1
    //\u6839\u636E\u5956\u54C1\u5E93\u5B58\u6570 \u751F\u6210\u4E2D\u5956\u533A\u95F4
    for (var i = 0; i < pres.length; i++){
      var item=pres[i]
      if (Number(item.${r[0]}) > 0) {
        item.inventoryArr=[sum,sum+Number(item.${r[0]})]
        prizeData.push(item)
        sum+=Number(item.${r[0]})
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
    //\u529E\u7406\u4E1A\u52A1
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
    // \u63D2\u5165\u9886\u5956\u8BB0\u5F55\u6570\u636E  \u8FD9\u91CC\u9700\u8981\u624B\u52A8\u6DFB\u52A0
    insertData({})
    //\u66F4\u65B0\u5E93\u5B58
    updateStocks(Number(pinfo.stocks)- 1, pinfo.productId)
    JsResult.result = createRes('00006', '\u9886\u53D6\u6210\u529F',{ecopName: pinfo.ecopName})
    `;let i='var addSql = "insert into '+t+" (",c="",y="(";for(let n=0;n<a.length;n++){const k=a[n];c+=k+(n<a.length-1?",":")"),y+="#{"+k+"}"+(n<a.length-1?",":")")}i+=c+" values "+y+'"';const p=`
      //\u751F\u6210\u4E2D\u5956\u8BB0\u5F55
      function insertData(recordsData) {
        ${i}
        var orgResult = CustomizeUtil.abilitySql(addSql, recordsData)
      }`,v=`
    //\u66F4\u65B0\u5E93\u5B58
      function updateStocks(inventory, productId) {
        var updateSql = 'update ' + prizeConfigTableName + ' set ${r[0]} = #{${r[0]}} where productId = "' + productId+ '"'
        CustomizeUtil.abilitySql(updateSql, { ${r[0]}: inventory })
      }
    `;return this.handleTime()+s+`
`+this.commonHead()+`
`+(this.isCheckToken?this.checkToken():"")+`
`+m+`
`+this.commonFooter()+`
`+p+`
`+v}commonHead(){return`
    function executeFuntion() {
      function createRes(code, retMsg,other) {
        return JSON.stringify({
          data: { retCode: code, retMsg: retMsg, other: other ? other : '' }
        })
    }`}commonFooter(){return`}
    /* \u6267\u884C\u51FD\u6570 */
    executeFuntion()
    `}}const De=j({components:{ImpExcel:Fe,CopyOutlined:Q,TwitterOutlined:X},setup(){let e=A({mode:"add",code:"",isCheckToken:!0,isGetNowTime:!0,isGetMonTime:!1,isGetDayTime:!1,tableName:"",tableKey:[],commonKey:["status","createTime","updateTime","deleteFlag","reserved1","reserved2"],dataSource:[],columns:[]}),t=localStorage.getItem("tableKeys")||"";t&&(e=A(JSON.parse(t)));const u=A({});let a=A({add:[{label:"\u9700\u8981\u6DFB\u52A0\u7684\u5B57\u6BB5",value:[],key:"addArr",component:"select"},{label:"\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u6BB5",value:[],key:"noEmptyArr",component:"select"}],delete:[],update:[{label:"\u66F4\u65B0\u5B57\u6BB5",value:[],key:"updateArr",component:"select"},{label:"\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u6BB5",value:[],key:"noEmptyArr",component:"select"},{label:"\u66F4\u65B0\u5B57\u6BB5\u6761\u4EF6",value:[],key:"conditionArr",component:"select"}],select:[{label:"\u7CBE\u51C6\u67E5\u8BE2\u5B57\u6BB5",value:[],key:"accurateArr",component:"select"},{label:"\u6A21\u7CCA\u67E5\u8BE2\u5B57\u6BB5",value:[],key:"dimArr",component:"select"}],importData:[{label:"\u5BFC\u5165\u7684\u5B57\u6BB5",value:[],key:"importArr",component:"select"}],backLogin:[],frontLogin:[],onkeyLogin:[],luckyDraw:[{label:"\u62BD\u5956\u7ED3\u679C\u8868\u8868\u540D",value:"",key:"prizeResultTableName",component:"input"},{label:"\u5956\u54C1\u914D\u7F6E\u8868\u8868\u540D",value:"",key:"prizeConfigTableName",component:"input"},{label:"\u5956\u54C1\u7ED3\u679C\u8868\u66F4\u65B0\u5B57\u6BB5",value:[],key:"prArr",component:"select"},{label:"\u5956\u54C1\u914D\u7F6E\u8868\u66F4\u65B0\u5E93\u5B58\u5B57\u6BB5",value:[],key:"pcArr",component:"select"}]}),r=localStorage.getItem("configState")||"";r&&(a=A(JSON.parse(r)));const s=n=>{console.log(`selected ${n}`)},m=n=>{console.log(`selected ${n}`)},i=()=>{localStorage.setItem("tableKeys",JSON.stringify(e)),localStorage.setItem("configState",JSON.stringify(a));let n=[];a[e.mode].forEach(h=>{n.push(te(h.value))}),console.log("%c \u{1F980} arr: ","font-size:20px;background-color: #E41A6A;color:#fff;",n);let g=new Ce(e);e.code=g[e.mode](...n);let f=[];e.tableKey.map(h=>{f.push(h.value)}),f.includes("status")||(console.log("\u4E0D\u5B58\u5728status"),e.code=e.code.replace(/status = 1/g,"1 = 1"))},c=()=>{H.success("\u590D\u5236\u6210\u529F")},y=()=>{H.error("\u590D\u5236\u5931\u8D25")},p=()=>{a[e.mode][0].value instanceof Array&&(a[e.mode][0].value=[],e.tableKey.map(n=>{a[e.mode][0].value.push(n.value)}))};function v(n){console.log("%c \u{1F35D} excelDataList: ","font-size:20px;background-color: #2EAFB0;color:#fff;",n);const{header:k,results:g}=n[0];e.tableKey=[],a.add[0].value=[],a.importData[0].value=[],k.map(f=>{e.tableKey.push({value:f.trim()}),e.mode==="add"&&!["id","status","updateTime","deleteFlag"].includes(f.trim())&&a.add[0].value.push(f.trim()),a.importData[0].value.push(f.trim())}),e.columns=[],g.forEach((f,h)=>{let S={key:h};k.forEach((o,B)=>{S[o]=f[o],h===0&&e.columns.push({title:o,dataIndex:o,key:o})}),e.dataSource.push(S)}),console.log("%c \u{1F362}  state.dataSource: ","font-size:20px;background-color: #EA7E5C;color:#fff;",e.dataSource),console.log("%c \u{1F966} state: ","font-size:20px;background-color: #EA7E5C;color:#fff;",e)}return U({handleCheckAll:p,onSuccess:c,onError:y,handleCopy:m,handleCreateCode:i,configState:a,handleChange:s,formState:u,loadDataSuccess:v},ee(e))}}),Se={class:"app-page"},Be={class:"tags",style:{margin:"20px 6px"}},Te=D("span",null,"\u6570\u636E\u5E93\u516C\u5171\u5B57\u6BB5\uFF1A",-1),_e=F("\u5BFC\u5165\u5B57\u6BB5"),Ee={class:"tags",style:{margin:"20px 6px"}},be=F(" \u4E00\u952E\u5168\u9009 "),Re={class:"raido"},Ae=D("span",null,"\u662F\u5426\u6821\u9A8Ctoken",-1),Ne=D("span",null,"\u662F\u5426\u83B7\u53D6\u5F53\u524D\u65F6\u95F4",-1),qe=D("span",null,"\u662F\u5426\u83B7\u53D6\u672C\u6708\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u95F4",-1),Je=D("span",null,"\u662F\u5426\u83B7\u53D6\u4ECA\u5929\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u95F4",-1),we=F("\u589E"),Pe=F("\u5220"),ze=F("\u6539"),Oe=F("\u67E5"),Ie=F("\u5BFC\u5165\u6570\u636E"),Me=F("\u540E\u53F0\u767B\u5F55"),Ue=F("\u524D\u53F0\u9A8C\u8BC1\u7801\u767B\u5F55"),je=F("\u4E00\u952E\u767B\u5F55"),$e=F("\u62BD\u5956"),Ge=F("\u751F\u6210\u4EE3\u7801"),He={class:"code"},Le={key:0},Ve={class:"go"};function Ke(e,t){const u=ae,a=re,r=N("ImpExcel"),s=N("twitter-outlined"),m=oe,i=ne,c=N("a-from"),y=se,p=le,v=ie,n=de,k=ce,g=N("CopyOutlined"),f=ue,h=L("clipboard"),S=L("highlightjs");return C(),_("div",Se,[l(f,{title:"Auto code",bordered:!1,style:{width:"1200px"}},{default:d(()=>[D("div",Be,[Te,(C(!0),_(P,null,z(e.commonKey,(o,B)=>b((C(),E(u,{key:o,style:{margin:"0 6px 0 5px"},color:"#108ee9"},{default:d(()=>[F(O(o),1)]),_:2},1536)),[[h,o],[h,e.onSuccess,"success"],[h,e.onError,"error"]])),128))]),l(r,{dateFormat:"YYYY-MM-DD",onSuccess:e.loadDataSuccess},{default:d(()=>[l(a,{class:"m-3"},{default:d(()=>[_e]),_:1})]),_:1},8,["onSuccess"]),D("div",Ee,[(C(!0),_(P,null,z(e.tableKey,(o,B)=>b((C(),E(u,{key:o.value,style:{margin:"0 6px 0 5px"},color:"#108ee9"},{default:d(()=>[F(O(o.value),1)]),_:2},1536)),[[h,o.value],[h,e.onSuccess,"success"],[h,e.onError,"error"]])),128)),l(u,{color:"#f50",onClick:e.handleCheckAll},{icon:d(()=>[l(s)]),default:d(()=>[be]),_:1},8,["onClick"])]),l(c,null,{default:d(()=>[D("div",Re,[l(i,{label:""},{default:d(()=>[l(m,{checked:e.isCheckToken,"onUpdate:checked":t[0]||(t[0]=o=>e.isCheckToken=o),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"]),Ae]),_:1}),l(i,{label:""},{default:d(()=>[l(m,{checked:e.isGetNowTime,"onUpdate:checked":t[1]||(t[1]=o=>e.isGetNowTime=o),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"]),Ne]),_:1}),l(i,{label:""},{default:d(()=>[l(m,{checked:e.isGetMonTime,"onUpdate:checked":t[2]||(t[2]=o=>e.isGetMonTime=o),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"]),qe]),_:1}),l(i,{label:""},{default:d(()=>[l(m,{checked:e.isGetDayTime,"onUpdate:checked":t[3]||(t[3]=o=>e.isGetDayTime=o),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"]),Je]),_:1})])]),_:1}),l(k,{labelCol:{span:4,offset:0}},{default:d(()=>[l(i,{label:"sql"},{default:d(()=>[l(p,{value:e.mode,"onUpdate:value":t[4]||(t[4]=o=>e.mode=o)},{default:d(()=>[l(y,{value:"add"},{default:d(()=>[we]),_:1}),l(y,{value:"delete"},{default:d(()=>[Pe]),_:1}),l(y,{value:"update"},{default:d(()=>[ze]),_:1}),l(y,{value:"select"},{default:d(()=>[Oe]),_:1}),l(y,{value:"importData"},{default:d(()=>[Ie]),_:1}),l(y,{value:"backLogin"},{default:d(()=>[Me]),_:1}),l(y,{value:"frontLogin"},{default:d(()=>[Ue]),_:1}),l(y,{value:"onkeyLogin"},{default:d(()=>[je]),_:1}),l(y,{value:"luckyDraw"},{default:d(()=>[$e]),_:1})]),_:1},8,["value"])]),_:1}),e.mode!=="luckyDraw"?(C(),E(i,{key:0,label:"\u5173\u8054\u8868\u540D"},{default:d(()=>[l(v,{value:e.tableName,"onUpdate:value":t[5]||(t[5]=o=>e.tableName=o),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D"},null,8,["value"])]),_:1})):q("",!0),(C(!0),_(P,null,z(e.configState[e.mode],(o,B)=>(C(),E(i,{key:B,label:o.label},{default:d(()=>[o.component==="select"?(C(),E(n,{key:0,value:o.value,"onUpdate:value":J=>o.value=J,mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",options:e.tableKey,onChange:e.handleChange},null,8,["value","onUpdate:value","options","onChange"])):q("",!0),o.component==="input"?(C(),E(v,{key:1,value:o.value,"onUpdate:value":J=>o.value=J,placeholder:"\u8BF7\u8F93\u5165\u8868\u540D"},null,8,["value","onUpdate:value"])):q("",!0)]),_:2},1032,["label"]))),128)),l(i,{style:{"text-align":"center"}},{default:d(()=>[l(a,{type:"primary",onClick:e.handleCreateCode},{default:d(()=>[Ge]),_:1},8,["onClick"])]),_:1})]),_:1}),D("div",He,[b(l(g,{style:{fontSize:"20px",color:"#fff"}},null,512),[[h,e.code],[h,e.onSuccess,"success"],[h,e.onError,"error"]]),e.code?b((C(),_("pre",Le,[D("code",Ve,O(e.code),1)],512)),[[S]]):q("",!0)])]),_:1})])}var xe=V(De,[["render",Ke]]);const I=me(xe);I.use(pe);I.use(he);I.mount("#app");
