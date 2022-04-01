var K=Object.defineProperty;var U=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var w=(t,e,u)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u,M=(t,e)=>{for(var u in e||(e={}))x.call(e,u)&&w(t,u,e[u]);if(U)for(var u of U(e))Y.call(e,u)&&w(t,u,e[u]);return t};var T=(t,e,u)=>(w(t,typeof e!="symbol"?e+"":e,u),u);import{d as j,r as $,u as G,o as D,c as _,w as b,a as C,b as Z,x as R,v as W,C as Q,T as X,e as A,t as ee,f as te,m as H,g as N,h as L,i as s,j as c,k as ue,F as P,l as z,n as E,p as q,q as O,s as F,_ as ae,B as re,y as oe,z as se,A as ne,D as le,I as ie,E as ce,G as de,H as me,J as pe,V as he}from"./vendor.d981abdc.js";const fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function u(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=u(r);fetch(r.href,l)}};fe();var V=(t,e)=>{const u=t.__vccOpts||t;for(const[a,r]of e)u[a]=r;return u};const ve=j({name:"ImportExcel",props:{dateFormat:{type:String},timeZone:{type:Number,default:8}},emits:["success","error"],setup(t,{emit:e}){const u=$(null),a=$(!1);function r(p){if(!p||!p["!ref"])return[];const v=[],n=R.utils.decode_range(p["!ref"]),y=n.s.r;for(let k=n.s.c;k<=n.e.c;++k){const f=p[R.utils.encode_cell({c:k,r:y})];let h="UNKNOWN "+k;f&&f.t&&(h=R.utils.format_cell(f)),v.push(h)}return v}function l(p){const v=[],{dateFormat:n,timeZone:y}=t;for(const k of p.SheetNames){const f=p.Sheets[k],h=r(f);let S=R.utils.sheet_to_json(f,{raw:!0,dateNF:n});S=S.map(o=>{for(let B in o)o[B]instanceof Date&&y===8&&o[B].setSeconds(o[B].getSeconds()+43);return o}),v.push({header:h,results:S,meta:{sheetName:k}})}return v}function d(p){return a.value=!0,new Promise((v,n)=>{const y=new FileReader;y.onload=async k=>{try{const f=k.target&&k.target.result,h=R.read(f,{type:"array",cellDates:!0}),S=l(h);e("success",S),v("")}catch(f){n(f),e("error")}finally{a.value=!1}},y.readAsArrayBuffer(p)})}async function i(p){const v=G(u);v&&(v.value=""),await d(p)}function m(p){const v=p&&p.target.files,n=v&&v[0];!n||i(n)}function g(){const p=G(u);p&&p.click()}return{handleUpload:g,handleInputClick:m,inputRef:u}}});function ge(t,e,u,a,r,l){return D(),_("div",null,[b(C("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:e[0]||(e[0]=(...d)=>t.handleInputClick&&t.handleInputClick(...d))},null,544),[[W,!1]]),C("div",{onClick:e[1]||(e[1]=(...d)=>t.handleUpload&&t.handleUpload(...d))},[Z(t.$slots,"default")])])}var ke=V(ve,[["render",ge]]);const ye=(t,e)=>{const u=t;return u.install=a=>{a.component(u.name||u.displayName,t),e&&(a.config.globalProperties[e]=t)},t},Fe=ye(ke);class Ce{constructor(e){T(this,"tableName");T(this,"isCheckToken");T(this,"isGetNowTime");T(this,"isBackground");T(this,"isGetMonTime");T(this,"isGetDayTime");this.tableName=e.tableName,this.isCheckToken=e.isCheckToken,this.isBackground=e.isBackground,this.isGetNowTime=e.isGetNowTime,this.isGetMonTime=e.isGetMonTime,this.isGetDayTime=e.isGetDayTime}handleTime(){let e={isGetNowTime:()=>this.getNowTime(),isGetDayTime:()=>this.getTodayStartTimeAndEndTime(),isGetMonTime:()=>this.getMonthStartTimeAndEndTime()},u="";return Object.keys(e).map(a=>{this[a]&&(u+=e[a]()+`
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
    `}add(e,u){console.log("%c \u{1F376} noEmptyArr: ","font-size:20px;background-color: #42b983;color:#fff;",u),console.log("%c \u{1F956} addArr: ","font-size:20px;background-color: #FFDD4D;color:#fff;",e);let a='var addSql = "insert into '+this.tableName+" (",r="",l="(";const d=`
    var nArr= ${JSON.stringify(u)}

    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return  JsResult.result=createRes('00007', nArr[i] + '\u4E0D\u80FD\u4E3A\u7A7A')
      }
    }`;for(let m=0;m<e.length;m++){const g=e[m];r+=g+(m<e.length-1?",":")"),l+="#{"+g+"}"+(m<e.length-1?",":")")}a+=r+" values "+l+'"';const i=d+`
`+a+`
var orgResult = CustomizeUtil.abilitySql(addSql, Params)
    JsResult.result = orgResult`;return this.handleTime()+this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+i+`
`+this.commonFooter()}delete(){const e='var delSql = "update '+this.tableName+' set deleteFlag = 1 where id=#{id}"',a=`
    if(!Params.id){
     return JsResult.result=createRes('0007','id\u4E0D\u80FD\u4E3A\u7A7A')
    }
    `+`
`+e+`
var orgResult = CustomizeUtil.abilitySql(delSql, Params)
    JsResult.result = orgResult`;return this.handleTime()+this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+a+`
`+this.commonFooter()}select(e,u){const a=`
    var current = Params.current ? Params.current : 1
    var limit = Params.limit ? Params.limit : 10
    var limitSize = (current - 1) * limit // \u9700\u8981\u8DF3\u8FC7\u7684\u6570\u636E
    var timeStr=''
    var timeObj = {
      startTime: function () { return ' and createTime >= #{startTime}'},
      endTime: function () { return ' and createTime =< #{endTime}'}
    }
    timeStr=(Params.startTime?timeObj.createTime():'')+(Params.endTime?timeObj.endTime():'')
    `;let r='var queryTotalSql = "select id from '+this.tableName+' where status = 1"',l='var queryDataSql= "select * from '+this.tableName+' where status = 1"',d="";e.map(m=>{d+=`+(Params['${m}']?" and ${m} = #{${m}}":"")`}),u.map(m=>{d+=`+(Params['${m}']?(" and ${m} like '%"+Params['${m}']+"%'"):"")`}),r+=d+'+timeStr+" order by createTime desc"',l+=d+'+timeStr+" order by createTime desc limit "+limitSize+", "+ limit';const i=`
    var totalResult = CustomizeUtil.abilitySql(queryTotalSql,Params)
    var totalRes = JSON.parse(totalResult)
    var queryResult = CustomizeUtil.abilitySql(queryDataSql,Params)
    var queryDataRes = JSON.parse(queryResult)
    `;return this.handleTime()+this.commonHead()+`
`+a+`
`+(this.isCheckToken?this.checkToken():"")+`
`+r+`
`+l+`
`+i+`
JsResult.result =JSON.stringify({
        data: {
        total: totalRes.data.count,
        current:current,
        limit:limit,
        data:queryDataRes.data.results
        } 
      })
      
`+this.commonFooter()}update(e,u,a){let r='var updateSql = "update '+this.tableName+" set ";const l=`
    var nArr= ${JSON.stringify(u)}

    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return createRes('00007', nArr[i] + '\u4E0D\u80FD\u4E3A\u7A7A')
      }
    }`;for(let i=0;i<e.length;i++){const m=e[i];r+=m+"=#{"+m+"}"+(i<e.length-1?",":"")}r+=" where ";for(let i=0;i<a.length;i++){const m=a[i];r+=m+"=#{"+m+"}"+(i<a.length-1?" and ":"")}r+='"';const d=l+`
`+r+`
var orgResult = CustomizeUtil.abilitySql(updateSql, Params)
    JsResult.result = orgResult`;return this.handleTime()+this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+d+`
`+this.commonFooter()}importData(e){let u='     var sql = "insert into '+this.tableName+" (";e.map((r,l)=>{u+=(l!=0?",":"")+r}),u+=') values "';let a=`
    var tempArr='${e}';
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
`+this.commonFooter()}checkToken(){let e=`
    try {
      var redisRes = JSON.parse(CustomizeUtil.redisGet({ key: Params.token }))
      if (!redisRes.data.value) {
        JsResult.result = createRes('00008', 'token\u8FC7\u671F\u6216token\u4E0D\u80FD\u4E3A\u7A7A')
        return
      }
      var resData = JSON.parse(redisRes.data.value)
      Params.phone = resData.userphone
      `;return this.isBackground&&(e+=`
      if(!resData.adminUser){
      JsResult.result = createRes('00005', '\u8BE5\u624B\u673A\u53F7\u7801\u65E0\u6743\u9650\u767B\u5F55')
      return
      }
      `),e+=`
    } catch (error) {
      return JsResult.result = createRes('00008', 'token\u8FC7\u671F\u6216token\u4E0D\u80FD\u4E3A\u7A7A')
    }
    `}onkeyLogin(){const e=`
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
`+e+`
`+this.commonFooter()}backLogin(){const e=`
    var phone = Params.phone
    var smsCode = Params.smsCode
  
    if (!phone || !smsCode) {
      return (JsResult.result = createRes('00002', '\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801'))
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
`+e+`
`+this.commonFooter()}frontLogin(){const e=`
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
`+e+`
`+this.commonFooter()}luckyDraw(e,u,a,r){const l=`var prizeResultTableName = "${e}"//\u5956\u54C1\u8BB0\u5F55\u8868
var prizeConfigTableName= "${u}" //\u5956\u54C1\u914D\u7F6E\u8868 `,d=`//\u4E00\u4E2A\u6708\u53EA\u80FD\u4E2D\u4E00\u6B21\u5956
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
    `;let i='var addSql = "insert into '+e+" (",m="",g="(";for(let n=0;n<a.length;n++){const y=a[n];m+=y+(n<a.length-1?",":")"),g+="#{"+y+"}"+(n<a.length-1?",":")")}i+=m+" values "+g+'"';const p=`
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
    `;return this.handleTime()+l+`
`+this.commonHead()+`
`+(this.isCheckToken?this.checkToken():"")+`
`+d+`
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
    `}}const De=j({components:{ImpExcel:Fe,CopyOutlined:Q,TwitterOutlined:X},setup(){let t=A({mode:"add",code:"",isCheckToken:!0,isGetNowTime:!0,isBackground:!0,isGetMonTime:!1,isGetDayTime:!1,tableName:"",adminTable:"",tableKey:[],commonKey:["status","createTime","updateTime","deleteFlag","reserved1","reserved2"],dataSource:[],columns:[]}),e=localStorage.getItem("tableKeys")||"";e&&(t=A(JSON.parse(e)));const u=A({});let a=A({add:[{label:"\u9700\u8981\u6DFB\u52A0\u7684\u5B57\u6BB5",value:[],key:"addArr",component:"select"},{label:"\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u6BB5",value:[],key:"noEmptyArr",component:"select"}],delete:[],update:[{label:"\u66F4\u65B0\u5B57\u6BB5",value:[],key:"updateArr",component:"select"},{label:"\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u6BB5",value:[],key:"noEmptyArr",component:"select"},{label:"\u66F4\u65B0\u5B57\u6BB5\u6761\u4EF6",value:[],key:"conditionArr",component:"select"}],select:[{label:"\u7CBE\u51C6\u67E5\u8BE2\u5B57\u6BB5",value:[],key:"accurateArr",component:"select"},{label:"\u6A21\u7CCA\u67E5\u8BE2\u5B57\u6BB5",value:[],key:"dimArr",component:"select"}],importData:[{label:"\u5BFC\u5165\u7684\u5B57\u6BB5",value:[],key:"importArr",component:"select"}],backLogin:[],frontLogin:[],onkeyLogin:[],luckyDraw:[{label:"\u62BD\u5956\u7ED3\u679C\u8868\u8868\u540D",value:"",key:"prizeResultTableName",component:"input"},{label:"\u5956\u54C1\u914D\u7F6E\u8868\u8868\u540D",value:"",key:"prizeConfigTableName",component:"input"},{label:"\u5956\u54C1\u7ED3\u679C\u8868\u66F4\u65B0\u5B57\u6BB5",value:[],key:"prArr",component:"select"},{label:"\u5956\u54C1\u914D\u7F6E\u8868\u66F4\u65B0\u5E93\u5B58\u5B57\u6BB5",value:[],key:"pcArr",component:"select"}]}),r=localStorage.getItem("configState")||"";r&&(a=A(JSON.parse(r)));const l=n=>{console.log(`selected ${n}`)},d=n=>{console.log(`selected ${n}`)},i=()=>{localStorage.setItem("tableKeys",JSON.stringify(t)),localStorage.setItem("configState",JSON.stringify(a));let n=[];a[t.mode].forEach(h=>{n.push(te(h.value))}),console.log("%c \u{1F980} arr: ","font-size:20px;background-color: #E41A6A;color:#fff;",n);let k=new Ce(t);t.code=k[t.mode](...n);let f=[];t.tableKey.map(h=>{f.push(h.value)}),f.includes("status")||(console.log("\u4E0D\u5B58\u5728status"),t.code=t.code.replace(/status = 1/g,"1 = 1"))},m=()=>{H.success("\u590D\u5236\u6210\u529F")},g=()=>{H.error("\u590D\u5236\u5931\u8D25")},p=()=>{a[t.mode][0].value instanceof Array&&(a[t.mode][0].value=[],t.tableKey.map(n=>{a[t.mode][0].value.push(n.value)}))};function v(n){console.log("%c \u{1F35D} excelDataList: ","font-size:20px;background-color: #2EAFB0;color:#fff;",n);const{header:y,results:k}=n[0];t.tableKey=[],a.add[0].value=[],a.importData[0].value=[],y.map(f=>{t.tableKey.push({value:f.trim()}),t.mode==="add"&&!["id","status","updateTime","deleteFlag"].includes(f.trim())&&a.add[0].value.push(f.trim()),a.importData[0].value.push(f.trim())}),t.columns=[],k.forEach((f,h)=>{let S={key:h};y.forEach((o,B)=>{S[o]=f[o],h===0&&t.columns.push({title:o,dataIndex:o,key:o})}),t.dataSource.push(S)}),console.log("%c \u{1F362}  state.dataSource: ","font-size:20px;background-color: #EA7E5C;color:#fff;",t.dataSource),console.log("%c \u{1F966} state: ","font-size:20px;background-color: #EA7E5C;color:#fff;",t)}return M({handleCheckAll:p,onSuccess:m,onError:g,handleCopy:d,handleCreateCode:i,configState:a,handleChange:l,formState:u,loadDataSuccess:v},ee(t))}}),Se={class:"app-page"},Be={class:"tags",style:{margin:"20px 6px"}},Te=C("span",null,"\u6570\u636E\u5E93\u516C\u5171\u5B57\u6BB5\uFF1A",-1),_e=F("\u5BFC\u5165\u5B57\u6BB5"),Ee={class:"tags",style:{margin:"20px 6px"}},be=F(" \u4E00\u952E\u5168\u9009 "),Re={class:"raido"},Ae=C("span",null,"\u662F\u5426\u6821\u9A8Ctoken",-1),Ne=C("span",null,"\u662F\u5426\u540E\u53F0\u63A5\u53E3",-1),qe=C("span",null,"\u662F\u5426\u83B7\u53D6\u5F53\u524D\u65F6\u95F4",-1),Je=C("span",null,"\u662F\u5426\u83B7\u53D6\u672C\u6708\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u95F4",-1),we=C("span",null,"\u662F\u5426\u83B7\u53D6\u4ECA\u5929\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u95F4",-1),Pe=F("\u589E"),ze=F("\u5220"),Oe=F("\u6539"),Ie=F("\u67E5"),Ue=F("\u5BFC\u5165\u6570\u636E"),Me=F("\u540E\u53F0\u767B\u5F55"),je=F("\u524D\u53F0\u9A8C\u8BC1\u7801\u767B\u5F55"),$e=F("\u4E00\u952E\u767B\u5F55"),Ge=F("\u62BD\u5956"),He=F("\u751F\u6210\u4EE3\u7801"),Le={class:"code"},Ve={key:0},Ke={class:"go"};function xe(t,e){const u=ae,a=re,r=N("ImpExcel"),l=N("twitter-outlined"),d=oe,i=se,m=N("a-from"),g=ne,p=le,v=ie,n=de,y=ce,k=N("CopyOutlined"),f=ue,h=L("clipboard"),S=L("highlightjs");return D(),_("div",Se,[s(f,{title:"Auto code",bordered:!1,style:{width:"1200px"}},{default:c(()=>[C("div",Be,[Te,(D(!0),_(P,null,z(t.commonKey,(o,B)=>b((D(),E(u,{key:o,style:{margin:"0 6px 0 5px"},color:"#108ee9"},{default:c(()=>[F(O(o),1)]),_:2},1536)),[[h,o],[h,t.onSuccess,"success"],[h,t.onError,"error"]])),128))]),s(r,{dateFormat:"YYYY-MM-DD",onSuccess:t.loadDataSuccess},{default:c(()=>[s(a,{class:"m-3"},{default:c(()=>[_e]),_:1})]),_:1},8,["onSuccess"]),C("div",Ee,[(D(!0),_(P,null,z(t.tableKey,(o,B)=>b((D(),E(u,{key:o.value,style:{margin:"0 6px 0 5px"},color:"#108ee9"},{default:c(()=>[F(O(o.value),1)]),_:2},1536)),[[h,o.value],[h,t.onSuccess,"success"],[h,t.onError,"error"]])),128)),s(u,{color:"#f50",onClick:t.handleCheckAll},{icon:c(()=>[s(l)]),default:c(()=>[be]),_:1},8,["onClick"])]),s(m,null,{default:c(()=>[C("div",Re,[s(i,{label:""},{default:c(()=>[s(d,{checked:t.isCheckToken,"onUpdate:checked":e[0]||(e[0]=o=>t.isCheckToken=o),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"]),Ae]),_:1}),s(i,{label:""},{default:c(()=>[s(d,{checked:t.isBackground,"onUpdate:checked":e[1]||(e[1]=o=>t.isBackground=o),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"]),Ne]),_:1}),s(i,{label:""},{default:c(()=>[s(d,{checked:t.isGetNowTime,"onUpdate:checked":e[2]||(e[2]=o=>t.isGetNowTime=o),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"]),qe]),_:1}),s(i,{label:""},{default:c(()=>[s(d,{checked:t.isGetMonTime,"onUpdate:checked":e[3]||(e[3]=o=>t.isGetMonTime=o),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"]),Je]),_:1}),s(i,{label:""},{default:c(()=>[s(d,{checked:t.isGetDayTime,"onUpdate:checked":e[4]||(e[4]=o=>t.isGetDayTime=o),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"]),we]),_:1})])]),_:1}),s(y,{labelCol:{span:4,offset:0}},{default:c(()=>[s(i,{label:"sql"},{default:c(()=>[s(p,{value:t.mode,"onUpdate:value":e[5]||(e[5]=o=>t.mode=o)},{default:c(()=>[s(g,{value:"add"},{default:c(()=>[Pe]),_:1}),s(g,{value:"delete"},{default:c(()=>[ze]),_:1}),s(g,{value:"update"},{default:c(()=>[Oe]),_:1}),s(g,{value:"select"},{default:c(()=>[Ie]),_:1}),s(g,{value:"importData"},{default:c(()=>[Ue]),_:1}),s(g,{value:"backLogin"},{default:c(()=>[Me]),_:1}),s(g,{value:"frontLogin"},{default:c(()=>[je]),_:1}),s(g,{value:"onkeyLogin"},{default:c(()=>[$e]),_:1}),s(g,{value:"luckyDraw"},{default:c(()=>[Ge]),_:1})]),_:1},8,["value"])]),_:1}),t.mode!=="luckyDraw"?(D(),E(i,{key:0,label:"\u5173\u8054\u8868\u540D"},{default:c(()=>[s(v,{value:t.tableName,"onUpdate:value":e[6]||(e[6]=o=>t.tableName=o),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D"},null,8,["value"])]),_:1})):q("",!0),(D(!0),_(P,null,z(t.configState[t.mode],(o,B)=>(D(),E(i,{key:B,label:o.label},{default:c(()=>[o.component==="select"?(D(),E(n,{key:0,value:o.value,"onUpdate:value":J=>o.value=J,mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",options:t.tableKey,onChange:t.handleChange},null,8,["value","onUpdate:value","options","onChange"])):q("",!0),o.component==="input"?(D(),E(v,{key:1,value:o.value,"onUpdate:value":J=>o.value=J,placeholder:"\u8BF7\u8F93\u5165\u8868\u540D"},null,8,["value","onUpdate:value"])):q("",!0)]),_:2},1032,["label"]))),128)),s(i,{style:{"text-align":"center"}},{default:c(()=>[s(a,{type:"primary",onClick:t.handleCreateCode},{default:c(()=>[He]),_:1},8,["onClick"])]),_:1})]),_:1}),C("div",Le,[b(s(k,{style:{fontSize:"20px",color:"#fff"}},null,512),[[h,t.code],[h,t.onSuccess,"success"],[h,t.onError,"error"]]),t.code?b((D(),_("pre",Ve,[C("code",Ke,O(t.code),1)],512)),[[S]]):q("",!0)])]),_:1})])}var Ye=V(De,[["render",xe]]);const I=me(Ye);I.use(pe);I.use(he);I.mount("#app");
