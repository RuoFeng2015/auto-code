var H=Object.defineProperty;var w=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var N=(e,t,u)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,U=(e,t)=>{for(var u in t||(t={}))M.call(t,u)&&N(e,u,t[u]);if(w)for(var u of w(t))Y.call(t,u)&&N(e,u,t[u]);return e};var J=(e,t,u)=>(N(e,typeof t!="symbol"?t+"":t,u),u);import{d as $,r as j,u as L,o as F,c as D,w as R,a as B,b as G,x as b,v as Z,C as W,T as Q,e as A,t as X,f as ee,m as K,g as T,h as V,i as f,j as p,k as te,F as z,l as O,n as E,p as q,q as P,s as C,_ as ue,B as re,y as ae,z as oe,A as se,D as ne,I as le,E as ie,G as ce,H as de,J as me,V as pe}from"./vendor.d981abdc.js";const fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function u(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=u(r);fetch(r.href,n)}};fe();var x=(e,t)=>{const u=e.__vccOpts||e;for(const[a,r]of t)u[a]=r;return u};const ve=$({name:"ImportExcel",props:{dateFormat:{type:String},timeZone:{type:Number,default:8}},emits:["success","error"],setup(e,{emit:t}){const u=j(null),a=j(!1);function r(m){if(!m||!m["!ref"])return[];const v=[],s=b.utils.decode_range(m["!ref"]),k=s.s.r;for(let h=s.s.c;h<=s.e.c;++h){const l=m[b.utils.encode_cell({c:h,r:k})];let y="UNKNOWN "+h;l&&l.t&&(y=b.utils.format_cell(l)),v.push(y)}return v}function n(m){const v=[],{dateFormat:s,timeZone:k}=e;for(const h of m.SheetNames){const l=m.Sheets[h],y=r(l);let i=b.utils.sheet_to_json(l,{raw:!0,dateNF:s});i=i.map(g=>{for(let _ in g)g[_]instanceof Date&&k===8&&g[_].setSeconds(g[_].getSeconds()+43);return g}),v.push({header:y,results:i,meta:{sheetName:h}})}return v}function d(m){return a.value=!0,new Promise((v,s)=>{const k=new FileReader;k.onload=async h=>{try{const l=h.target&&h.target.result,y=b.read(l,{type:"array",cellDates:!0}),i=n(y);t("success",i),v("")}catch(l){s(l),t("error")}finally{a.value=!1}},k.readAsArrayBuffer(m)})}async function c(m){const v=L(u);v&&(v.value=""),await d(m)}function o(m){const v=m&&m.target.files,s=v&&v[0];!s||c(s)}function S(){const m=L(u);m&&m.click()}return{handleUpload:S,handleInputClick:o,inputRef:u}}});function he(e,t,u,a,r,n){return F(),D("div",null,[R(B("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:t[0]||(t[0]=(...d)=>e.handleInputClick&&e.handleInputClick(...d))},null,544),[[Z,!1]]),B("div",{onClick:t[1]||(t[1]=(...d)=>e.handleUpload&&e.handleUpload(...d))},[G(e.$slots,"default")])])}var ke=x(ve,[["render",he]]);const ye=(e,t)=>{const u=e;return u.install=a=>{a.component(u.name||u.displayName,e),t&&(a.config.globalProperties[t]=e)},e},ge=ye(ke);class Ce{constructor(t,u){J(this,"tableName");J(this,"isCheckToken");this.tableName=t,this.isCheckToken=u}add(t,u){console.log("%c \u{1F376} noEmptyArr: ","font-size:20px;background-color: #42b983;color:#fff;",u),console.log("%c \u{1F956} addArr: ","font-size:20px;background-color: #FFDD4D;color:#fff;",t);let a='var addSql = "insert into '+this.tableName+" (",r="",n="(";const d=`
    var nArr= ${JSON.stringify(u)}

    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return  JsResult.result=createRes('00007', nArr[i] + '\u4E0D\u80FD\u4E3A\u7A7A')
      }
    }`;for(let o=0;o<t.length;o++){const S=t[o];r+=S+(o<t.length-1?",":")"),n+="#{"+S+"}"+(o<t.length-1?",":")")}a+=r+" values "+n+'"';const c=d+`
`+a+`
var orgResult = CustomizeUtil.abilitySql(addSql, Params)
    JsResult.result = orgResult`;return this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+c+`
`+this.commonFooter()}delete(){const t='var delSql = "update '+this.tableName+' set deleteFlag = 1 where id=#{id}"',a=`
    if(!Params.id){
     return JsResult.result=createRes('0007','id\u4E0D\u80FD\u4E3A\u7A7A')
    }
    `+`
`+t+`
var orgResult = CustomizeUtil.abilitySql(delSql, Params)
    JsResult.result = orgResult`;return this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+a+`
`+this.commonFooter()}select(t,u){const a=`
    var current = Params.current ? Params.current : 1
    var limit = Params.limit ? Params.limit : 10
    var limitSize = (current - 1) * limit // \u9700\u8981\u8DF3\u8FC7\u7684\u6570\u636E
    var timeStr=''
    var timeObj = {
      createTime: function () { return ' and createTime >= #{startTime}'},
      endTime: function () { return ' and createTime >= #{endTime}'}
    }
    timeStr=(Params.createTime?timeObj.createTime():'')+(Params.endTime?timeObj.endTime():'')
    `;let r='var queryTotalSql = "select id from '+this.tableName+' where status = 1"',n='var queryDataSql= "select * from '+this.tableName+' where status = 1"',d="";t.map(o=>{d+=`+(Params['${o}']?" and ${o} = #{${o}}":"")`}),u.map(o=>{d+=`+(Params['${o}']?(" and ${o} like '%"+Params['${o}']+"%'"):"")`}),r+=d+'+timeStr+" order by createTime desc"',n+=d+'+timeStr+" order by createTime desc limit "+limitSize+", "+ limit';const c=`
    var totalResult = CustomizeUtil.abilitySql(queryTotalSql,Params)
    var totalRes = JSON.parse(totalResult)
    var queryResult = CustomizeUtil.abilitySql(queryDataSql,Params)
    var queryDataRes = JSON.parse(queryResult)
    `;return this.commonHead()+`
`+a+`
`+(this.isCheckToken?this.checkToken():"")+`
`+r+`
`+n+`
`+c+`
JsResult.result =JSON.stringify({
        data: {
        total: totalRes.data.count,
        current:current,
        limit:limit,
        data:queryDataRes.data.results
        } 
      })
      
`+this.commonFooter()}update(t,u,a){let r='var updateSql = "update '+this.tableName+" set ";const n=`
    var nArr= ${JSON.stringify(u)}

    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return createRes('00007', nArr[i] + '\u4E0D\u80FD\u4E3A\u7A7A')
      }
    }`;for(let c=0;c<t.length;c++){const o=t[c];r+=o+"=#{"+o+"}"+(c<t.length-1?",":"")}r+=" where ";for(let c=0;c<a.length;c++){const o=a[c];r+=o+"=#{"+o+"}"+(c<a.length-1?" and ":"")}r+='"';const d=n+`
`+r+`
var orgResult = CustomizeUtil.abilitySql(updateSql, Params)
    JsResult.result = orgResult`;return this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+d+`
`+this.commonFooter()}importData(t){let u='     var sql = "insert into '+this.tableName+" (";t.map((r,n)=>{u+=(n!=0?",":"")+r}),u+=') values "';let a=`
    var tempArr='${t}';
    var importArr=tempArr.split(",");
    var dataArr = JSON.parse(Params.content)
    for (var i = 0; i < dataArr.length; i++) {
      var item = dataArr[i]
      var str = "("
      for (var j = 0; j < importArr.length; j++) {
        str +="'"+ item[importArr[j]]+"'"+ (j < importArr.length - 1 ? "," : "");
      }
      sql += str + ")" + (i < dataArr.length - 1 ? "," : "");
    }
    var create = CustomizeUtil.abilitySql(sql);
    JsResult.result = create;
    `;return this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+u+`
`+a+`
`+this.commonFooter()}checkToken(){return`
    try {
      var redisRes = JSON.parse(CustomizeUtil.redisGet({ key: Params.token }))
      if (!redisRes.data.value) {
        JsResult.result = createRes('00008', 'token\u8FC7\u671F\u6216token\u4E0D\u80FD\u4E3A\u7A7A')
        return
      }
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
      userInfo.phone = mResponse.mobile
      var tokenparams = { key: token, value: userInfo, overTime: 3 * 24 * 60 * 60 }
      var tokenresult = CustomizeUtil.redisSet(tokenparams) //\u8BBE\u7F6E\u7F13\u5B58
      var jsonTokenResult = JSON.parse(tokenresult)
      if (jsonTokenResult.data.status == '0') {
        JsResult.result = JSON.stringify(userInfo)
      } else {
        JsResult.result = tokenresult
      }
    `;return this.commonHead()+`
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
    `;return this.commonHead()+`
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

    `;return this.commonHead()+`
`+t+`
`+this.commonFooter()}luckyDraw(t,u,a,r){const n=`var prizeResultTableName = "${t}"//\u5956\u54C1\u8BB0\u5F55\u8868
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
    `;let c='var addSql = "insert into '+t+" (",o="",S="(";for(let s=0;s<a.length;s++){const k=a[s];o+=k+(s<a.length-1?",":")"),S+="#{"+k+"}"+(s<a.length-1?",":")")}c+=o+" values "+S+'"';const m=`
      //\u751F\u6210\u4E2D\u5956\u8BB0\u5F55
      function insertData(recordsData) {
        ${c}
        var orgResult = CustomizeUtil.abilitySql(addSql, recordsData)
      }`,v=`
    //\u66F4\u65B0\u5E93\u5B58
      function updateStocks(inventory, productId) {
        var updateSql = 'update ' + prizeConfigTableName + ' set ${r[0]} = #{${r[0]}} where productId = "' + productId+ '"'
        CustomizeUtil.abilitySql(updateSql, { ${r[0]}: inventory })
      }
    `;return n+`
`+this.commonHead()+`
`+(this.isCheckToken?this.checkToken():"")+`
`+d+`
`+this.commonFooter()+`
`+m+`
`+v}commonHead(){return`
    function executeFuntion() {
      function createRes(code, retMsg,other) {
        return JSON.stringify({
          data: { retCode: code, retMsg: retMsg, other: other ? other : '' }
        })
    }`}commonFooter(){return`}
    /* \u6267\u884C\u51FD\u6570 */
    executeFuntion()
    `}}const Fe=$({components:{ImpExcel:ge,CopyOutlined:W,TwitterOutlined:Q},setup(){let e=A({mode:"add",code:"",isCheckToken:!0,tableName:"",tableKey:[],commonKey:["status","createTime","updateTime","deleteFlag","reserved1","reserved2"],dataSource:[],columns:[]}),t=localStorage.getItem("tableKeys")||"";t&&(e=A(JSON.parse(t)));const u=A({});let a=A({add:[{label:"\u9700\u8981\u6DFB\u52A0\u7684\u5B57\u6BB5",value:[],key:"addArr",component:"select"},{label:"\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u6BB5",value:[],key:"noEmptyArr",component:"select"}],delete:[],update:[{label:"\u66F4\u65B0\u5B57\u6BB5",value:[],key:"updateArr",component:"select"},{label:"\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u6BB5",value:[],key:"noEmptyArr",component:"select"},{label:"\u66F4\u65B0\u5B57\u6BB5\u6761\u4EF6",value:[],key:"conditionArr",component:"select"}],select:[{label:"\u7CBE\u51C6\u67E5\u8BE2\u5B57\u6BB5",value:[],key:"accurateArr",component:"select"},{label:"\u6A21\u7CCA\u67E5\u8BE2\u5B57\u6BB5",value:[],key:"dimArr",component:"select"}],importData:[{label:"\u5BFC\u5165\u7684\u5B57\u6BB5",value:[],key:"importArr",component:"select"}],backLogin:[],frontLogin:[],onkeyLogin:[],luckyDraw:[{label:"\u62BD\u5956\u7ED3\u679C\u8868\u8868\u540D",value:"",key:"prizeResultTableName",component:"input"},{label:"\u5956\u54C1\u914D\u7F6E\u8868\u8868\u540D",value:"",key:"prizeConfigTableName",component:"input"},{label:"\u5956\u54C1\u7ED3\u679C\u8868\u66F4\u65B0\u5B57\u6BB5",value:[],key:"prArr",component:"select"},{label:"\u5956\u54C1\u914D\u7F6E\u8868\u66F4\u65B0\u5E93\u5B58\u5B57\u6BB5",value:[],key:"pcArr",component:"select"}]}),r=localStorage.getItem("configState")||"";r&&(a=A(JSON.parse(r)));const n=s=>{console.log(`selected ${s}`)},d=s=>{console.log(`selected ${s}`)},c=()=>{localStorage.setItem("tableKeys",JSON.stringify(e)),localStorage.setItem("configState",JSON.stringify(a));let s=[];a[e.mode].forEach(y=>{s.push(ee(y.value))}),console.log("%c \u{1F980} arr: ","font-size:20px;background-color: #E41A6A;color:#fff;",s);let h=new Ce(e.tableName,e.isCheckToken);e.code=h[e.mode](...s);let l=[];e.tableKey.map(y=>{l.push(y.value)}),l.includes("status")||(console.log("\u4E0D\u5B58\u5728status"),e.code=e.code.replace(/status = 1/g,"1 = 1"))},o=()=>{K.success("\u590D\u5236\u6210\u529F")},S=()=>{K.error("\u590D\u5236\u5931\u8D25")},m=()=>{a[e.mode][0].value instanceof Array&&(a[e.mode][0].value=[],e.tableKey.map(s=>{a[e.mode][0].value.push(s.value)}))};function v(s){console.log("%c \u{1F35D} excelDataList: ","font-size:20px;background-color: #2EAFB0;color:#fff;",s);const{header:k,results:h}=s[0];e.tableKey=[],a.add[0].value=[],a.importData[0].value=[],k.map(l=>{e.tableKey.push({value:l.trim()}),e.mode==="add"&&!["id","status","updateTime","deleteFlag"].includes(l.trim())&&a.add[0].value.push(l.trim()),a.importData[0].value.push(l.trim())}),e.columns=[],h.forEach((l,y)=>{let i={key:y};k.forEach((g,_)=>{i[g]=l[g],y===0&&e.columns.push({title:g,dataIndex:g,key:g})}),e.dataSource.push(i)}),console.log("%c \u{1F362}  state.dataSource: ","font-size:20px;background-color: #EA7E5C;color:#fff;",e.dataSource),console.log("%c \u{1F966} state: ","font-size:20px;background-color: #EA7E5C;color:#fff;",e)}return U({handleCheckAll:m,onSuccess:o,onError:S,handleCopy:d,handleCreateCode:c,configState:a,handleChange:n,formState:u,loadDataSuccess:v},X(e))}}),Se={class:"app-page"},_e={class:"tags",style:{margin:"20px 6px"}},Be=B("span",null,"\u6570\u636E\u5E93\u516C\u5171\u5B57\u6BB5\uFF1A",-1),De=C("\u5BFC\u5165\u5B57\u6BB5"),Ee={class:"tags",style:{margin:"20px 6px"}},Re=C(" \u4E00\u952E\u5168\u9009 "),be=C("\u589E"),Ae=C("\u5220"),qe=C("\u6539"),Ne=C("\u67E5"),Je=C("\u5BFC\u5165\u6570\u636E"),Te=C("\u540E\u53F0\u767B\u5F55"),ze=C("\u524D\u53F0\u9A8C\u8BC1\u7801\u767B\u5F55"),Oe=C("\u4E00\u952E\u767B\u5F55"),Pe=C("\u62BD\u5956"),Ie=C("\u751F\u6210\u4EE3\u7801"),we={class:"code"},Ue={key:0},$e={class:"go"};function je(e,t){const u=ue,a=re,r=T("ImpExcel"),n=T("twitter-outlined"),d=ae,c=oe,o=se,S=ne,m=le,v=ce,s=ie,k=T("CopyOutlined"),h=te,l=V("clipboard"),y=V("highlightjs");return F(),D("div",Se,[f(h,{title:"Auto code",bordered:!1,style:{width:"1200px"}},{default:p(()=>[B("div",_e,[Be,(F(!0),D(z,null,O(e.commonKey,(i,g)=>R((F(),E(u,{key:i,style:{margin:"0 6px 0 5px"},color:"#108ee9"},{default:p(()=>[C(P(i),1)]),_:2},1536)),[[l,i],[l,e.onSuccess,"success"],[l,e.onError,"error"]])),128))]),f(r,{dateFormat:"YYYY-MM-DD",onSuccess:e.loadDataSuccess},{default:p(()=>[f(a,{class:"m-3"},{default:p(()=>[De]),_:1})]),_:1},8,["onSuccess"]),B("div",Ee,[(F(!0),D(z,null,O(e.tableKey,(i,g)=>R((F(),E(u,{key:i.value,style:{margin:"0 6px 0 5px"},color:"#108ee9"},{default:p(()=>[C(P(i.value),1)]),_:2},1536)),[[l,i.value],[l,e.onSuccess,"success"],[l,e.onError,"error"]])),128)),f(u,{color:"#f50",onClick:e.handleCheckAll},{icon:p(()=>[f(n)]),default:p(()=>[Re]),_:1},8,["onClick"])]),f(s,{labelCol:{span:4,offset:0}},{default:p(()=>[f(c,{label:"\u662F\u5426\u6821\u9A8Ctoken"},{default:p(()=>[f(d,{checked:e.isCheckToken,"onUpdate:checked":t[0]||(t[0]=i=>e.isCheckToken=i),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"])]),_:1}),f(c,{label:"sql"},{default:p(()=>[f(S,{value:e.mode,"onUpdate:value":t[1]||(t[1]=i=>e.mode=i)},{default:p(()=>[f(o,{value:"add"},{default:p(()=>[be]),_:1}),f(o,{value:"delete"},{default:p(()=>[Ae]),_:1}),f(o,{value:"update"},{default:p(()=>[qe]),_:1}),f(o,{value:"select"},{default:p(()=>[Ne]),_:1}),f(o,{value:"importData"},{default:p(()=>[Je]),_:1}),f(o,{value:"backLogin"},{default:p(()=>[Te]),_:1}),f(o,{value:"frontLogin"},{default:p(()=>[ze]),_:1}),f(o,{value:"onkeyLogin"},{default:p(()=>[Oe]),_:1}),f(o,{value:"luckyDraw"},{default:p(()=>[Pe]),_:1})]),_:1},8,["value"])]),_:1}),e.mode!=="luckyDraw"?(F(),E(c,{key:0,label:"\u5173\u8054\u8868\u540D"},{default:p(()=>[f(m,{value:e.tableName,"onUpdate:value":t[2]||(t[2]=i=>e.tableName=i),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D"},null,8,["value"])]),_:1})):q("",!0),(F(!0),D(z,null,O(e.configState[e.mode],(i,g)=>(F(),E(c,{key:g,label:i.label},{default:p(()=>[i.component==="select"?(F(),E(v,{key:0,value:i.value,"onUpdate:value":_=>i.value=_,mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",options:e.tableKey,onChange:e.handleChange},null,8,["value","onUpdate:value","options","onChange"])):q("",!0),i.component==="input"?(F(),E(m,{key:1,value:i.value,"onUpdate:value":_=>i.value=_,placeholder:"\u8BF7\u8F93\u5165\u8868\u540D"},null,8,["value","onUpdate:value"])):q("",!0)]),_:2},1032,["label"]))),128)),f(c,{style:{"text-align":"center"}},{default:p(()=>[f(a,{type:"primary",onClick:e.handleCreateCode},{default:p(()=>[Ie]),_:1},8,["onClick"])]),_:1})]),_:1}),B("div",we,[R(f(k,{style:{fontSize:"20px",color:"#fff"}},null,512),[[l,e.code],[l,e.onSuccess,"success"],[l,e.onError,"error"]]),e.code?R((F(),D("pre",Ue,[B("code",$e,P(e.code),1)],512)),[[y]]):q("",!0)])]),_:1})])}var Le=x(Fe,[["render",je]]);const I=de(Le);I.use(me);I.use(pe);I.mount("#app");
