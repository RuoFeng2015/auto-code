var H=Object.defineProperty;var I=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var N=(e,t,u)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,U=(e,t)=>{for(var u in t||(t={}))M.call(t,u)&&N(e,u,t[u]);if(I)for(var u of I(t))Y.call(t,u)&&N(e,u,t[u]);return e};var J=(e,t,u)=>(N(e,typeof t!="symbol"?t+"":t,u),u);import{d as w,r as $,u as j,o as F,c as _,w as R,a as B,b as G,x as E,v as Z,C as W,e as b,t as Q,f as X,m as L,g as x,h as V,i as v,j as f,k as ee,F as T,l as z,n as D,p as A,q as O,s as C,B as te,_ as ue,y as re,z as ae,A as oe,I as se,D as ne,E as le,G as ie,H as ce,J as de,V as me}from"./vendor.17c3f8f1.js";const pe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function u(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=u(r);fetch(r.href,n)}};pe();var K=(e,t)=>{const u=e.__vccOpts||e;for(const[a,r]of t)u[a]=r;return u};const fe=w({name:"ImportExcel",props:{dateFormat:{type:String},timeZone:{type:Number,default:8}},emits:["success","error"],setup(e,{emit:t}){const u=$(null),a=$(!1);function r(d){if(!d||!d["!ref"])return[];const i=[],p=E.utils.decode_range(d["!ref"]),y=p.s.r;for(let l=p.s.c;l<=p.e.c;++l){const k=d[E.utils.encode_cell({c:l,r:y})];let s="UNKNOWN "+l;k&&k.t&&(s=E.utils.format_cell(k)),i.push(s)}return i}function n(d){const i=[],{dateFormat:p,timeZone:y}=e;for(const l of d.SheetNames){const k=d.Sheets[l],s=r(k);let g=E.utils.sheet_to_json(k,{raw:!0,dateNF:p});g=g.map(S=>{for(let q in S)S[q]instanceof Date&&y===8&&S[q].setSeconds(S[q].getSeconds()+43);return S}),i.push({header:s,results:g,meta:{sheetName:l}})}return i}function c(d){return a.value=!0,new Promise((i,p)=>{const y=new FileReader;y.onload=async l=>{try{const k=l.target&&l.target.result,s=E.read(k,{type:"array",cellDates:!0}),g=n(s);t("success",g),i("")}catch(k){p(k),t("error")}finally{a.value=!1}},y.readAsArrayBuffer(d)})}async function o(d){const i=j(u);i&&(i.value=""),await c(d)}function m(d){const i=d&&d.target.files,p=i&&i[0];!p||o(p)}function h(){const d=j(u);d&&d.click()}return{handleUpload:h,handleInputClick:m,inputRef:u}}});function ve(e,t,u,a,r,n){return F(),_("div",null,[R(B("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:t[0]||(t[0]=(...c)=>e.handleInputClick&&e.handleInputClick(...c))},null,544),[[Z,!1]]),B("div",{onClick:t[1]||(t[1]=(...c)=>e.handleUpload&&e.handleUpload(...c))},[G(e.$slots,"default")])])}var he=K(fe,[["render",ve]]);const ke=(e,t)=>{const u=e;return u.install=a=>{a.component(u.name||u.displayName,e),t&&(a.config.globalProperties[t]=e)},e},ye=ke(he);class ge{constructor(t,u){J(this,"tableName");J(this,"isCheckToken");this.tableName=t,this.isCheckToken=u}add(t,u){console.log("%c \u{1F376} noEmptyArr: ","font-size:20px;background-color: #42b983;color:#fff;",u),console.log("%c \u{1F956} addArr: ","font-size:20px;background-color: #FFDD4D;color:#fff;",t);let a='var addSql = "insert into '+this.tableName+" (",r="",n="(";const c=`
    var nArr= ${JSON.stringify(u)}

    for (var i = 0; i <nArr.length; i++) {
      if (!Params[nArr[i]]) {
        return  JsResult.result=createRes('00007', nArr[i] + '\u4E0D\u80FD\u4E3A\u7A7A')
      }
    }`;for(let m=0;m<t.length;m++){const h=t[m];r+=h+(m<t.length-1?",":")"),n+="#{"+h+"}"+(m<t.length-1?",":")")}a+=r+" values "+n+'"';const o=c+`
`+a+`
var orgResult = CustomizeUtil.abilitySql(addSql, Params)
    JsResult.result = orgResult`;return this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+o+`
`+this.commonFooter()}delete(){const t='var delSql = "update '+this.tableName+' set deleteFlag = 1 where id=#{id}"',a=`
    if(!Params.id){
     return JsResult.result=createRes('0007','id\u4E0D\u80FD\u4E3A\u7A7A')
    }
    `+`
`+t+`
var orgResult = CustomizeUtil.abilitySql(delSql, Params)
    JsResult.result = orgResult`;return this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+a+`
`+this.commonFooter()}select(t,u,a){const r=`
    var current = Params.current ? Params.current : 1
    var limit = Params.limit ? Params.limit : 10
    var limitSize = (current - 1) * limit // \u9700\u8981\u8DF3\u8FC7\u7684\u6570\u636E
    var timeStr=''
    var timeObj = {
      createTime: function () { return ' and createTime >= #{startTime}'},
      endTime: function () { return ' and createTime >= #{endTime}'}
    }
    timeStr=(Params.createTime?timeObj.createTime():'')+(Params.endTime?timeObj.endTime():'')
    `;let n='var queryTotalSql = "select id from '+this.tableName+' where status = 1"',c='var queryDataSql= "select * from '+this.tableName+' where status = 1"',o="";t.map(h=>{o+=`+(Params['${h}']?" and ${h} = #{${h}}":"")`}),u.map(h=>{o+=`+(Params['${h}']?(" and ${h} like '%"+Params['${h}']+"%'"):"")`}),n+=o+'+timeStr+" order by createTime desc"',c+=o+'+timeStr+" order by createTime desc limit "+limitSize+", "+ limit';const m=`
    var totalResult = CustomizeUtil.abilitySql(queryTotalSql,Params)
    var totalRes = JSON.parse(totalResult)
    var queryResult = CustomizeUtil.abilitySql(queryDataSql,Params)
    var queryDataRes = JSON.parse(queryResult)
    `;return this.commonHead()+`
`+r+`
`+(this.isCheckToken?this.checkToken():"")+`
`+n+`
`+c+`
`+m+`
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
    }`;for(let o=0;o<t.length;o++){const m=t[o];r+=m+"=#{"+m+"}"+(o<t.length-1?",":"")}r+=" where ";for(let o=0;o<a.length;o++){const m=a[o];r+=m+"=#{"+m+"}"+(o<a.length-1?" and ":"")}r+='"';const c=n+`
`+r+`
var orgResult = CustomizeUtil.abilitySql(updateSql, Params)
    JsResult.result = orgResult`;return this.commonHead()+(this.isCheckToken?this.checkToken():"")+`
`+c+`
`+this.commonFooter()}importData(t){let u='var sql = "insert into '+this.tableName+" (";t.map((r,n)=>{u+=(n!=0?",":"")+r}),u+=') values "';let a=`
    var tempArr='${t}';
    var importArr=tempArr.split(",");
    var dataArr = JSON.parse(Params.content)
    for (var i = 0; i < dataArr.length; i++) {
      var item = dataArr[i]
      var str = "("
      for (var j = 0; j < importArr.length; j++) {
        str += item[importArr[j]] + (j < importArr.length - 1 ? "," : "");
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
var prizeConfigTableName= "${u}" //\u5956\u54C1\u914D\u7F6E\u8868 `,c=`//\u4E00\u4E2A\u6708\u53EA\u80FD\u4E2D\u4E00\u6B21\u5956
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
    `;let o='var addSql = "insert into '+t+" (",m="",h="(";for(let p=0;p<a.length;p++){const y=a[p];m+=y+(p<a.length-1?",":")"),h+="#{"+y+"}"+(p<a.length-1?",":")")}o+=m+" values "+h+'"';const d=`
      //\u751F\u6210\u4E2D\u5956\u8BB0\u5F55
      function insertData(recordsData) {
        ${o}
        var orgResult = CustomizeUtil.abilitySql(addSql, recordsData)
      }`,i=`
    //\u66F4\u65B0\u5E93\u5B58
      function updateStocks(inventory, productId) {
        var updateSql = 'update ' + prizeConfigTableName + ' set ${r[0]} = #{${r[0]}} where productId = "' + productId+ '"'
        CustomizeUtil.abilitySql(updateSql, { ${r[0]}: inventory })
      }
    `;return n+`
`+this.commonHead()+`
`+(this.isCheckToken?this.checkToken():"")+`
`+c+`
`+this.commonFooter()+`
`+d+`
`+i}commonHead(){return`
    function executeFuntion() {
      function createRes(code, retMsg,other) {
        return JSON.stringify({
          data: { retCode: code, retMsg: retMsg, other: other ? other : '' }
        })
    }`}commonFooter(){return`}
    /* \u6267\u884C\u51FD\u6570 */
    executeFuntion()
    `}}const Ce=w({components:{ImpExcel:ye,CopyOutlined:W},setup(){let e=b({mode:"add",code:"",isCheckToken:!0,tableName:"",tableKey:[],commonKey:["status","createTime","updateTime","deleteFlag","reserved1","reserved2"],dataSource:[],columns:[]}),t=localStorage.getItem("tableKeys")||"";t&&(e=b(JSON.parse(t)));const u=b({});let a=b({add:[{label:"\u9700\u8981\u6DFB\u52A0\u7684\u5B57\u6BB5",value:[],key:"addArr",component:"select"},{label:"\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u6BB5",value:[],key:"noEmptyArr",component:"select"}],delete:[],update:[{label:"\u66F4\u65B0\u5B57\u6BB5",value:[],key:"updateArr",component:"select"},{label:"\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u6BB5",value:[],key:"noEmptyArr",component:"select"},{label:"\u66F4\u65B0\u5B57\u6BB5\u6761\u4EF6",value:[],key:"conditionArr",component:"select"}],select:[{label:"\u7CBE\u51C6\u67E5\u8BE2\u5B57\u6BB5",value:[],key:"accurateArr",component:"select"},{label:"\u6A21\u7CCA\u67E5\u8BE2\u5B57\u6BB5",value:[],key:"dimArr",component:"select"}],importData:[{label:"\u5BFC\u5165\u7684\u5B57\u6BB5",value:[],key:"importArr",component:"select"}],backLogin:[],frontLogin:[],onkeyLogin:[],luckyDraw:[{label:"\u62BD\u5956\u7ED3\u679C\u8868\u8868\u540D",value:"",key:"prizeResultTableName",component:"input"},{label:"\u5956\u54C1\u914D\u7F6E\u8868\u8868\u540D",value:"",key:"prizeConfigTableName",component:"input"},{label:"\u5956\u54C1\u7ED3\u679C\u8868\u66F4\u65B0\u5B57\u6BB5",value:[],key:"prArr",component:"select"},{label:"\u5956\u54C1\u914D\u7F6E\u8868\u66F4\u65B0\u5E93\u5B58\u5B57\u6BB5",value:[],key:"pcArr",component:"select"}]}),r=localStorage.getItem("configState")||"";r&&(a=b(JSON.parse(r)));const n=i=>{console.log(`selected ${i}`)},c=i=>{console.log(`selected ${i}`)},o=()=>{localStorage.setItem("tableKeys",JSON.stringify(e)),localStorage.setItem("configState",JSON.stringify(a));let i=[];a[e.mode].forEach(k=>{i.push(X(k.value))}),console.log("%c \u{1F980} arr: ","font-size:20px;background-color: #E41A6A;color:#fff;",i);let y=new ge(e.tableName,e.isCheckToken);e.code=y[e.mode](...i);let l=[];e.tableKey.map(k=>{l.push(k.value)}),l.includes("status")||(console.log("\u4E0D\u5B58\u5728status"),e.code=e.code.replace(/status = 1/g,"1 = 1"))},m=()=>{L.success("\u590D\u5236\u6210\u529F")},h=()=>{L.error("\u590D\u5236\u5931\u8D25")};function d(i){console.log("%c \u{1F35D} excelDataList: ","font-size:20px;background-color: #2EAFB0;color:#fff;",i);const{header:p,results:y}=i[0];e.tableKey=[],a.add[0].value=[],p.map(l=>{e.tableKey.push({value:l.trim()}),e.mode==="add"&&!["id","status","updateTime","deleteFlag"].includes(l.trim())&&a.add[0].value.push(l.trim())}),e.columns=[],y.forEach((l,k)=>{let s={key:k};p.forEach((g,S)=>{s[g]=l[g],k===0&&e.columns.push({title:g,dataIndex:g,key:g})}),e.dataSource.push(s)}),console.log("%c \u{1F362}  state.dataSource: ","font-size:20px;background-color: #EA7E5C;color:#fff;",e.dataSource),console.log("%c \u{1F966} state: ","font-size:20px;background-color: #EA7E5C;color:#fff;",e)}return U({onSuccess:m,onError:h,handleCopy:c,handleCreateCode:o,configState:a,handleChange:n,formState:u,loadDataSuccess:d},Q(e))}}),Fe={class:"app-page"},Se={class:"tags",style:{margin:"20px 6px"}},Be=B("span",null,"\u6570\u636E\u5E93\u516C\u5171\u5B57\u6BB5\uFF1A",-1),_e=C("\u5BFC\u5165\u5B57\u6BB5"),De={class:"tags",style:{margin:"20px 6px"}},Re=C("\u589E"),Ee=C("\u5220"),be=C("\u6539"),Ae=C("\u67E5"),qe=C("\u5BFC\u5165\u6570\u636E"),Ne=C("\u540E\u53F0\u767B\u5F55"),Je=C("\u524D\u53F0\u9A8C\u8BC1\u7801\u767B\u5F55"),Te=C("\u4E00\u952E\u767B\u5F55"),ze=C("\u62BD\u5956"),Oe=C("\u751F\u6210\u4EE3\u7801"),Pe={class:"code"},Ie={key:0},Ue={class:"go"};function we(e,t){const u=le,a=te,r=x("ImpExcel"),n=ue,c=re,o=ae,m=oe,h=se,d=ie,i=ne,p=x("CopyOutlined"),y=ee,l=V("clipboard"),k=V("highlightjs");return F(),_("div",Fe,[v(y,{title:"Auto code",bordered:!1,style:{width:"1200px"}},{default:f(()=>[B("div",Se,[Be,(F(!0),_(T,null,z(e.commonKey,(s,g)=>R((F(),D(u,{key:s,style:{margin:"0 6px 0 5px"},color:"#108ee9"},{default:f(()=>[C(O(s),1)]),_:2},1536)),[[l,s],[l,e.onSuccess,"success"],[l,e.onError,"error"]])),128))]),v(r,{dateFormat:"YYYY-MM-DD",onSuccess:e.loadDataSuccess},{default:f(()=>[v(a,{class:"m-3"},{default:f(()=>[_e]),_:1})]),_:1},8,["onSuccess"]),B("div",De,[(F(!0),_(T,null,z(e.tableKey,(s,g)=>R((F(),D(u,{key:s.value,style:{margin:"0 6px 0 5px"},color:"#108ee9"},{default:f(()=>[C(O(s.value),1)]),_:2},1536)),[[l,s.value],[l,e.onSuccess,"success"],[l,e.onError,"error"]])),128))]),v(i,{labelCol:{span:4,offset:0}},{default:f(()=>[v(c,{label:"\u662F\u5426\u6821\u9A8Ctoken"},{default:f(()=>[v(n,{checked:e.isCheckToken,"onUpdate:checked":t[0]||(t[0]=s=>e.isCheckToken=s),"checked-children":"\u662F","un-checked-children":"\u5426"},null,8,["checked"])]),_:1}),v(c,{label:"sql"},{default:f(()=>[v(m,{value:e.mode,"onUpdate:value":t[1]||(t[1]=s=>e.mode=s)},{default:f(()=>[v(o,{value:"add"},{default:f(()=>[Re]),_:1}),v(o,{value:"delete"},{default:f(()=>[Ee]),_:1}),v(o,{value:"update"},{default:f(()=>[be]),_:1}),v(o,{value:"select"},{default:f(()=>[Ae]),_:1}),v(o,{value:"importData"},{default:f(()=>[qe]),_:1}),v(o,{value:"backLogin"},{default:f(()=>[Ne]),_:1}),v(o,{value:"frontLogin"},{default:f(()=>[Je]),_:1}),v(o,{value:"onkeyLogin"},{default:f(()=>[Te]),_:1}),v(o,{value:"luckyDraw"},{default:f(()=>[ze]),_:1})]),_:1},8,["value"])]),_:1}),e.mode!=="luckyDraw"?(F(),D(c,{key:0,label:"\u5173\u8054\u8868\u540D"},{default:f(()=>[v(h,{value:e.tableName,"onUpdate:value":t[2]||(t[2]=s=>e.tableName=s),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D"},null,8,["value"])]),_:1})):A("",!0),(F(!0),_(T,null,z(e.configState[e.mode],(s,g)=>(F(),D(c,{key:g,label:s.label},{default:f(()=>[s.component==="select"?(F(),D(d,{key:0,value:s.value,"onUpdate:value":S=>s.value=S,mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",options:e.tableKey,onChange:e.handleChange},null,8,["value","onUpdate:value","options","onChange"])):A("",!0),s.component==="input"?(F(),D(h,{key:1,value:s.value,"onUpdate:value":S=>s.value=S,placeholder:"\u8BF7\u8F93\u5165\u8868\u540D"},null,8,["value","onUpdate:value"])):A("",!0)]),_:2},1032,["label"]))),128)),v(c,{style:{"text-align":"center"}},{default:f(()=>[v(a,{type:"primary",onClick:e.handleCreateCode},{default:f(()=>[Oe]),_:1},8,["onClick"])]),_:1})]),_:1}),B("div",Pe,[R(v(p,{style:{fontSize:"20px",color:"#fff"}},null,512),[[l,e.code],[l,e.onSuccess,"success"],[l,e.onError,"error"]]),e.code?R((F(),_("pre",Ie,[B("code",Ue,O(e.code),1)],512)),[[k]]):A("",!0)])]),_:1})])}var $e=K(Ce,[["render",we]]);const P=ce($e);P.use(de);P.use(me);P.mount("#app");
