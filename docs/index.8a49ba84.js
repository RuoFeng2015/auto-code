var G=Object.defineProperty;var w=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var z=(e,t,u)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,j=(e,t)=>{for(var u in t||(t={}))Z.call(t,u)&&z(e,u,t[u]);if(w)for(var u of w(t))W.call(t,u)&&z(e,u,t[u]);return e};var P=(e,t,u)=>(z(e,typeof t!="symbol"?t+"":t,u),u);import{d as L,r as x,u as V,o as F,c as B,w as b,a as D,b as Q,x as A,v as X,C as ee,e as N,t as te,f as ue,m as K,g as H,h as M,i as v,j as p,k as oe,F as O,l as I,n as R,p as q,q as U,s as S,B as se,_ as ae,y as re,z as ne,A as le,I as ie,D as ce,E as de,G as me,H as pe,J as fe,V as ve}from"./vendor.17c3f8f1.js";const he=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function u(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=u(o);fetch(o.href,r)}};he();var Y=(e,t)=>{const u=e.__vccOpts||e;for(const[a,o]of t)u[a]=o;return u};const ke=L({name:"ImportExcel",props:{dateFormat:{type:String},timeZone:{type:Number,default:8}},emits:["success","error"],setup(e,{emit:t}){const u=x(null),a=x(!1);function o(n){if(!n||!n["!ref"])return[];const s=[],d=A.utils.decode_range(n["!ref"]),k=d.s.r;for(let f=d.s.c;f<=d.e.c;++f){const g=n[A.utils.encode_cell({c:f,r:k})];let _="UNKNOWN "+f;g&&g.t&&(_=A.utils.format_cell(g)),s.push(_)}return s}function r(n){const s=[],{dateFormat:d,timeZone:k}=e;for(const f of n.SheetNames){const g=n.Sheets[f],_=o(g);let C=A.utils.sheet_to_json(g,{raw:!0,dateNF:d});C=C.map(y=>{for(let E in y)y[E]instanceof Date&&k===8&&y[E].setSeconds(y[E].getSeconds()+43);return y}),s.push({header:_,results:C,meta:{sheetName:f}})}return s}function i(n){return a.value=!0,new Promise((s,d)=>{const k=new FileReader;k.onload=async f=>{try{const g=f.target&&f.target.result,_=A.read(g,{type:"array",cellDates:!0}),C=r(_);t("success",C),s("")}catch(g){d(g),t("error")}finally{a.value=!1}},k.readAsArrayBuffer(n)})}async function l(n){const s=V(u);s&&(s.value=""),await i(n)}function c(n){const s=n&&n.target.files,d=s&&s[0];!d||l(d)}function h(){const n=V(u);n&&n.click()}return{handleUpload:h,handleInputClick:c,inputRef:u}}});function ye(e,t,u,a,o,r){return F(),B("div",null,[b(D("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:t[0]||(t[0]=(...i)=>e.handleInputClick&&e.handleInputClick(...i))},null,544),[[X,!1]]),D("div",{onClick:t[1]||(t[1]=(...i)=>e.handleUpload&&e.handleUpload(...i))},[Q(e.$slots,"default")])])}var ge=Y(ke,[["render",ye]]);const Ce=(e,t)=>{const u=e;return u.install=a=>{a.component(u.name||u.displayName,e),t&&(a.config.globalProperties[t]=e)},e},Fe=Ce(ge);class Se{constructor(t,u){P(this,"tableName");P(this,"isCheckToken");this.tableName=t,this.isCheckToken=u}add(t,u){console.log("%c \u{1F376} noEmptyArr: ","font-size:20px;background-color: #42b983;color:#fff;",u),console.log("%c \u{1F956} addArr: ","font-size:20px;background-color: #FFDD4D;color:#fff;",t);let a='var addSql = "insert into '+this.tableName+" (",o="",r="(";const i=`
    var nArr= ${JSON.stringify(u)}

    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return  JsResult.result=createRes('00007', nArr[i] + '\u4E0D\u80FD\u4E3A\u7A7A')
      }
    }`;for(let c=0;c<t.length;c++){const h=t[c];o+=h+(c<t.length-1?",":")"),r+="#{"+h+"}"+(c<t.length-1?",":")")}a+=o+" values "+r+'"';const l=i+`
`+a+`
var orgResult = CustomizeUtil.abilitySql(addSql, Params)
    JsResult.result = orgResult`;return this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+l+`
`+this.commonFooter()}delete(){const t='var delSql = "update '+this.tableName+' set isDelete = 1 where id=#{id}"',a=`
    if(!Params.id){
     return JsResult.result=createRes('0007','id\u4E0D\u80FD\u4E3A\u7A7A')
    }
    `+`
`+t+`
var orgResult = CustomizeUtil.abilitySql(delSql, Params)
    JsResult.result = orgResult`;return this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+a+`
`+this.commonFooter()}select(t,u,a){const o=`
    var current = Params.current ? Params.current : 1
    var limit = Params.limit ? Params.limit : 10
    var limitSize = (current - 1) * limit // \u9700\u8981\u8DF3\u8FC7\u7684\u6570\u636E
    var timeStr=''
    if (Params.startTime) {
      timeStr = ' and createTime>= ' + Params.startTime + ' and createTime <= ' + Params.endTime
    }
    `;let r='var queryTotalSql = "select id from '+this.tableName+' where status = 1"',i='var queryDataSql= "select * from '+this.tableName+' where status = 1"',l="";t.map(h=>{l+=`+(Params['${h}']?" and ${h} = #{${h}}":"")`}),u.map(h=>{l+=`+(Params['${h}']?(" and ${h} like '%"+Params['${h}']+"%'"):"")`}),r+=l+'+timeStr+" order by createTime desc"',i+=l+'+timeStr+" order by createTime desc limit "+limitSize+", "+ limit';const c=`
    var totalResult = CustomizeUtil.abilitySql(queryTotalSql,Params)
    var totalRes = JSON.parse(totalResult)
    var queryResult = CustomizeUtil.abilitySql(queryDataSql,Params)
    var queryDataRes = JSON.parse(queryResult)
    `;return this.commonHead()+`
`+o+`
`+(this.isCheckToken?this.checkToken():"")+`
`+r+`
`+i+`
`+c+`
JsResult.result =JSON.stringify({
        data: {
        total: totalRes.data.count,
        current:current,
        limit:limit,
        data:queryDataRes.data.results
        } 
      })
      
`+this.commonFooter()}update(t,u,a){let o='var updateSql = "update '+this.tableName+" set ";const r=`
    var nArr= ${JSON.stringify(u)}

    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return createRes('00007', nArr[i] + '\u4E0D\u80FD\u4E3A\u7A7A')
      }
    }`;for(let l=0;l<t.length;l++){const c=t[l];o+=c+"=#{"+c+"}"+(l<t.length-1?",":"")}o+=" where ";for(let l=0;l<a.length;l++){const c=a[l];o+=c+"=#{"+c+"}"+(l<a.length-1?" and ":"")}o+='"';const i=r+`
`+o+`
var orgResult = CustomizeUtil.abilitySql(updateSql, Params)
    JsResult.result = orgResult`;return this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+i+`
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
    `;return this.commonHead()+`
`+t+`
`+this.commonFooter()}luckyDraw(t,u,a,o){const r=`var prizeResultTableName = "${t}"//\u5956\u54C1\u8BB0\u5F55\u8868
var prizeConfigTableName= "${u}" //\u5956\u54C1\u914D\u7F6E\u8868 `,i=`//\u4E00\u4E2A\u6708\u53EA\u80FD\u4E2D\u4E00\u6B21\u5956
    var queryCount = "select count(*) as number from "+prizeResultTableName+" where userPhone ='" + Params.userPhone + "'and busResult = 1 and createTime between '" + Params.startTime + "' and '" + Params.endTime + "'"
    var queryCountResult = CustomizeUtil.abilitySql(queryCount);
    var queryCountData = JSON.parse(queryCountResult)
    if (queryCountData.data.results&&queryCountData.data.results[0].number > 0) {
      return JsResult.result=createRes('00012','\u672C\u6708\u5DF2\u9886\u53D6\u8FC7\u5956')
    }
    //\u751F\u6210\u4E2D\u5956\u5956\u54C1
    var querySql = 'select * from '+prizeConfigTableName+ ' where activityId = ' + Params.activityId
    var queryPrizeRes = CustomizeUtil.abilitySql(querySql);
    var pres = JSON.parse(queryPrizeRes).data.results
    //\u4E2D\u5956\u6570\u636E
    var prizeData = []
    //\u4E2D\u5956\u4FE1\u606F
    var pinfo={}
    var sum=1
    //\u6839\u636E\u5956\u54C1\u5E93\u5B58\u6570 \u751F\u6210\u4E2D\u5956\u533A\u95F4
    for (var i = 0; i < pres.length; i++){
      var item=pres[i]
      if (Number(item.${o[0]}) > 0) {
        item.inventoryArr=[sum,sum+Number(item.${o[0]})]
        prizeData.push(item)
        sum+=Number(item.${o[0]})
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
    `;let l='var addSql = "insert into '+t+" (",c="",h="(";for(let d=0;d<a.length;d++){const k=a[d];c+=k+(d<a.length-1?",":")"),h+="#{"+k+"}"+(d<a.length-1?",":")")}l+=c+" values "+h+'"';const n=`
      //\u751F\u6210\u4E2D\u5956\u8BB0\u5F55
      function insertData(recordsData) {
        ${l}
        var orgResult = CustomizeUtil.abilitySql(addSql, recordsData)
      }`,s=`
    //\u66F4\u65B0\u5E93\u5B58
      function updateStocks(inventory, productId) {
        var updateSql = 'update ' + prizeConfigTableName + ' set ${o[0]} = #{${o[0]}} where productId = "' + productId+ '"'
        CustomizeUtil.abilitySql(updateSql, { ${o[0]}: inventory })
      }
    `;return r+`
`+this.commonHead()+`
`+(this.isCheckToken?this.checkToken():"")+`
`+i+`
`+this.commonFooter()+`
`+n+`
`+s}commonHead(){return`
    function executeFuntion() {
      function createRes(code, retMsg,other) {
        return JSON.stringify({
          data: { retCode: code, retMsg: retMsg, other: other ? other : '' }
        })
    }`}commonFooter(){return`}
    /* \u6267\u884C\u51FD\u6570 */
    executeFuntion()
    `}}const _e=L({components:{ImpExcel:Fe,CopyOutlined:ee},setup(){let e=N({modelPath:[{order:1,path:"/live2d/tororo/tororo.model.json"}],mode:"add",code:"",isCheckToken:!0,tableName:"",tableKey:[],commonKey:["status","createTime","updateTime","isDelete","reserved1","reserved2"],dataSource:[],columns:[]}),t=localStorage.getItem("tableKeys")||"";t&&(e=N(JSON.parse(t)));const u=N({});let a=N({add:[{label:"\u9700\u8981\u6DFB\u52A0\u7684\u5B57\u6BB5",value:[],key:"addArr",component:"select"},{label:"\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u6BB5",value:[],key:"noEmptyArr",component:"select"}],delete:[],update:[{label:"\u66F4\u65B0\u5B57\u6BB5",value:[],key:"updateArr",component:"select"},{label:"\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u6BB5",value:[],key:"noEmptyArr",component:"select"},{label:"\u66F4\u65B0\u5B57\u6BB5\u6761\u4EF6",value:[],key:"conditionArr",component:"select"}],select:[{label:"\u7CBE\u51C6\u67E5\u8BE2\u5B57\u6BB5",value:[],key:"accurateArr",component:"select"},{label:"\u6A21\u7CCA\u67E5\u8BE2\u5B57\u6BB5",value:[],key:"dimArr",component:"select"}],backLogin:[],frontLogin:[],onkeyLogin:[],luckyDraw:[{label:"\u62BD\u5956\u7ED3\u679C\u8868\u8868\u540D",value:"",key:"prizeResultTableName",component:"input"},{label:"\u5956\u54C1\u914D\u7F6E\u8868\u8868\u540D",value:"",key:"prizeConfigTableName",component:"input"},{label:"\u5956\u54C1\u7ED3\u679C\u8868\u66F4\u65B0\u5B57\u6BB5",value:[],key:"prArr",component:"select"},{label:"\u5956\u54C1\u914D\u7F6E\u8868\u66F4\u65B0\u5E93\u5B58\u5B57\u6BB5",value:[],key:"pcArr",component:"select"}]}),o=localStorage.getItem("configState")||"";o&&(a=N(JSON.parse(o)));const r=s=>{console.log(`selected ${s}`)},i=s=>{console.log(`selected ${s}`)},l=()=>{localStorage.setItem("tableKeys",JSON.stringify(e)),localStorage.setItem("configState",JSON.stringify(a));let s=[];a[e.mode].forEach(f=>{s.push(ue(f.value))}),console.log("%c \u{1F980} arr: ","font-size:20px;background-color: #E41A6A;color:#fff;",s);let k=new Se(e.tableName,e.isCheckToken);e.code=k[e.mode](...s),e.tableKey.includes("status")||(e.code=e.code.replace(/status = 1/g,"1 = 1")),console.log("%c \u{1F951} state.code: ","font-size:20px;background-color: #33A5FF;color:#fff;",e.code)},c=()=>{K.success("\u590D\u5236\u6210\u529F")},h=()=>{K.error("\u590D\u5236\u5931\u8D25")};function n(s){console.log("%c \u{1F35D} excelDataList: ","font-size:20px;background-color: #2EAFB0;color:#fff;",s);const{header:d,results:k}=s[0];e.tableKey=[],a.add[0].value=[],d.map(f=>{e.tableKey.push({value:f.trim()}),e.mode==="add"&&!["id","status","updateTime","isDelete"].includes(f.trim())&&a.add[0].value.push(f.trim())}),e.columns=[],k.forEach((f,g)=>{let _={key:g};d.forEach((C,y)=>{_[C]=f[C],g===0&&e.columns.push({title:C,dataIndex:C,key:C})}),e.dataSource.push(_)}),console.log("%c \u{1F362}  state.dataSource: ","font-size:20px;background-color: #EA7E5C;color:#fff;",e.dataSource),console.log("%c \u{1F966} state: ","font-size:20px;background-color: #EA7E5C;color:#fff;",e)}return j({onSuccess:c,onError:h,handleCopy:i,handleCreateCode:l,configState:a,handleChange:r,formState:u,loadDataSuccess:n},te(e))}}),De={class:"app-page"},Be={class:"tags",style:{margin:"20px 6px"}},Re=D("span",null,"\u6570\u636E\u5E93\u516C\u5171\u5B57\u6BB5\uFF1A",-1),Ee=S("\u5BFC\u5165\u5B57\u6BB5"),be={class:"tags",style:{margin:"20px 6px"}},Ae=S("\u589E"),Ne=S("\u5220"),qe=S("\u6539"),Je=S("\u67E5"),Te=S("\u540E\u53F0\u767B\u5F55"),ze=S("\u524D\u53F0\u9A8C\u8BC1\u7801\u767B\u5F55"),Pe=S("\u4E00\u952E\u767B\u5F55"),Oe=S("\u62BD\u5956"),Ie=S("\u751F\u6210\u4EE3\u7801"),Ue={class:"code"},$e={key:0},we={class:"go"};function je(e,t,u,a,o,r){const i=de,l=se,c=H("ImpExcel"),h=ae,n=re,s=ne,d=le,k=ie,f=me,g=ce,_=H("CopyOutlined"),C=oe,y=M("clipboard"),E=M("highlightjs");return F(),B("div",De,[v(C,{title:"Auto code",bordered:!1,style:{width:"1200px"}},{default:p(()=>[D("div",Be,[Re,(F(!0),B(O,null,I(e.commonKey,(m,J)=>b((F(),R(i,{key:m,style:{margin:"0 6px 0 5px"},color:"#108ee9"},{default:p(()=>[S(U(m),1)]),_:2},1536)),[[y,m],[y,e.onSuccess,"success"],[y,e.onError,"error"]])),128))]),v(c,{dateFormat:"YYYY-MM-DD",onSuccess:e.loadDataSuccess},{default:p(()=>[v(l,{class:"m-3"},{default:p(()=>[Ee]),_:1})]),_:1},8,["onSuccess"]),D("div",be,[(F(!0),B(O,null,I(e.tableKey,(m,J)=>b((F(),R(i,{key:m.value,style:{margin:"0 6px 0 5px"},color:"#108ee9"},{default:p(()=>[S(U(m.value),1)]),_:2},1536)),[[y,m.value],[y,e.onSuccess,"success"],[y,e.onError,"error"]])),128))]),v(g,{labelCol:{span:4,offset:0}},{default:p(()=>[v(n,{label:"\u662F\u5426\u6821\u9A8Ctoken"},{default:p(()=>[v(h,{checked:e.isCheckToken,"onUpdate:checked":t[0]||(t[0]=m=>e.isCheckToken=m),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"])]),_:1}),v(n,{label:"sql"},{default:p(()=>[v(d,{value:e.mode,"onUpdate:value":t[1]||(t[1]=m=>e.mode=m)},{default:p(()=>[v(s,{value:"add"},{default:p(()=>[Ae]),_:1}),v(s,{value:"delete"},{default:p(()=>[Ne]),_:1}),v(s,{value:"update"},{default:p(()=>[qe]),_:1}),v(s,{value:"select"},{default:p(()=>[Je]),_:1}),v(s,{value:"backLogin"},{default:p(()=>[Te]),_:1}),v(s,{value:"frontLogin"},{default:p(()=>[ze]),_:1}),v(s,{value:"onkeyLogin"},{default:p(()=>[Pe]),_:1}),v(s,{value:"luckyDraw"},{default:p(()=>[Oe]),_:1})]),_:1},8,["value"])]),_:1}),e.mode!=="luckyDraw"?(F(),R(n,{key:0,label:"\u5173\u8054\u8868\u540D"},{default:p(()=>[v(k,{value:e.tableName,"onUpdate:value":t[2]||(t[2]=m=>e.tableName=m),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D"},null,8,["value"])]),_:1})):q("",!0),(F(!0),B(O,null,I(e.configState[e.mode],(m,J)=>(F(),R(n,{key:J,label:m.label},{default:p(()=>[m.component==="select"?(F(),R(f,{key:0,value:m.value,"onUpdate:value":T=>m.value=T,mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",options:e.tableKey,onChange:e.handleChange},null,8,["value","onUpdate:value","options","onChange"])):q("",!0),m.component==="input"?(F(),R(k,{key:1,value:m.value,"onUpdate:value":T=>m.value=T,placeholder:"\u8BF7\u8F93\u5165\u8868\u540D"},null,8,["value","onUpdate:value"])):q("",!0)]),_:2},1032,["label"]))),128)),v(n,{style:{"text-align":"center"}},{default:p(()=>[v(l,{type:"primary",onClick:e.handleCreateCode},{default:p(()=>[Ie]),_:1},8,["onClick"])]),_:1})]),_:1}),D("div",Ue,[b(v(_,{style:{fontSize:"20px",color:"#fff"}},null,512),[[y,e.code],[y,e.onSuccess,"success"],[y,e.onError,"error"]]),e.code?b((F(),B("pre",$e,[D("code",we,U(e.code),1)],512)),[[E]]):q("",!0)])]),_:1})])}var Le=Y(_e,[["render",je]]);const $=pe(Le);$.use(fe);$.use(ve);$.mount("#app");
