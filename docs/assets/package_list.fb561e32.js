var h=(f,s,a)=>new Promise((d,p)=>{var m=n=>{try{i(a.next(n))}catch(c){p(c)}},g=n=>{try{i(a.throw(n))}catch(c){p(c)}},i=n=>n.done?d(n.value):Promise.resolve(n.value).then(m,g);i((a=a.apply(f,s)).next())});import{B as S,T as q}from"./TableAction.d65c08e5.js";import{u as y,B as C}from"./useForm.a78b5dee.js";import{d as U,Q as V,f as D,o as M,c as W,V as o,X as l,u as t,ah as E,N as A,bN as k,bY as $,bh as v,h as z,a2 as G,b3 as O}from"./vendor.b23ac7e6.js";import{_ as Q}from"./index.47bca9f6.js";import"./useDesignSetting.222c9fbf.js";import"./index.esm.f571281f.js";const X={class:"package-manage"},Y=v(" \u65B0\u589E "),j=v(" \u5BFC\u5165 "),H=U({setup(f){V();let s=D(!1);const a=[{title:"id",key:"packageId"},{title:"\u5957\u9910\u540D\u79F0",key:"name"},{title:"\u5546\u54C1\u7F16\u7801",key:"code",width:100},{title:"\u4EA7\u54C1\u7F16\u7801",key:"codeId"},{title:"\u6D41\u91CF",key:"count"},{title:"\u901A\u8BDD\u65F6\u957F",key:"time"},{title:"\u8D60\u9001\u4FE1\u606F",key:"endTime"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createTime"},{title:"\u64CD\u4F5C",key:"create_date",render(u){return z(q,{style:"button",actions:[{label:"\u7F16\u8F91",onClick:I.bind(null,u),ifShow:()=>!0,auth:["basic_list"]},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:c.bind(null,u),ifShow:()=>!0,auth:["basic_list"]}]})}}],d=[{field:"name",component:"NInput",label:"\u5957\u9910\u540D\u79F0",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5957\u9910\u540D\u79F0",onInput:u=>{console.log("update \u5957\u9910\u540D\u79F0 :"+u)}}}],p=[{field:"name",component:"NInput",label:"\u5957\u9910\u540D\u79F0",style:"grid-column: span 2 / span 1;",componentProps:{placeholder:"\u8BF7\u8F93\u5165ecop\u4E2D\u914D\u7F6E\u7684\u5BF9\u5E94\u540D\u79F0\uFF0C\u5426\u5219\u65E0\u6CD5\u5339\u914D",onInput:u=>{console.log("\u5957\u9910\u540D\u79F0\uFF1A"+u)}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5957\u9910\u540D\u79F0",trigger:["blur"]}]},{field:"product_code",component:"NInput",label:"\u5546\u54C1\u7F16\u7801",style:"grid-column: span 2 / span 1;",componentProps:{placeholder:"\u8BF7\u8F93\u5165ecop\u4E2D\u5BF9\u5E94\u7684\u5546\u54C1\u7F16\u7801",onInput:u=>{console.log("\u5546\u54C1\u7F16\u7801\uFF1A"+u)}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u7F16\u7801",trigger:["blur"]}]},{field:"package_code",component:"NInput",label:"\u4EA7\u54C1\u7F16\u7801",style:"grid-column: span 2 / span 1;",componentProps:{placeholder:"\u5957\u9910\u529E\u7406\u7684\u4EA7\u54C1\u7F16\u7801\uFF0C\u591A\u4E2A\u8BF7\u7528\u82F1\u6587\u9017\u53F7\u9694\u5F00",onInput:u=>{console.log("\u4EA7\u54C1\u7F16\u7801\uFF1A"+u)}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u7F16\u7801",trigger:["blur"]}]},{field:"price",component:"NInput",label:"\u4EF7\u683C\uFF08\u5143\uFF09",style:"grid-column: span 2 / span 1;",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4EF7\u683C\uFF08\u5143\uFF09",onInput:u=>{console.log("\u4EF7\u683C\uFF08\u5143\uFF09\uFF1A"+u)}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C\uFF08\u5143\uFF09",trigger:["blur"]}]},{field:"liuliang",component:"NInput",label:"\u6D41\u91CF",style:"width: 120%;",componentProps:{placeholder:"\u6D41\u91CF",onInput:u=>{console.log("\u6D41\u91CF\uFF1A"+u)}}},{field:"type",component:"NSelect",label:"",style:"width: 70%; margin-left: 30%;",componentProps:{placeholder:"\u8BF7\u9009\u62E9\u5355\u4EF7",options:[{label:"MB",value:"0"},{label:"GB",value:"1"}],onInput:u=>{console.log("\u4EA7\u54C1\u7C7B\u578B\uFF1A"+u)}}},{field:"time",component:"NInput",label:"\u901A\u8BDD\u65F6\u957F",style:"grid-column: span 2 / span 1;",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u901A\u8BDD\u65F6\u957F",onInput:u=>{console.log("\u901A\u8BDD\u65F6\u957F\uFF1A"+u)}}},{field:"zengsong",component:"NInput",label:"\u8D60\u9001\u4FE1\u606F",style:"grid-column: span 2 / span 1;",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8D60\u9001\u4FE1\u606F",onInput:u=>{console.log("\u8D60\u9001\u4FE1\u606F\uFF1A"+u)}}}],[m,{}]=y({gridProps:{cols:"1 s:1 m:2 l:3 xl:4 2xl:4"},labelWidth:80,schemas:d}),[g,{}]=y({gridProps:{cols:"2"},labelWidth:100,layout:"block",submitButtonText:"\u786E\u8BA4",resetButtonText:"\u5173\u95ED",schemas:p});let i=D();function n(){i.value.reload()}function c(){console.log("\u5220\u9664")}function I(){console.log("\u7F16\u8F91")}const w=u=>h(this,null,function*(){}),b=u=>{console.log(u===1?"\u65B0\u589E":"\u5BFC\u5165"),u===1&&(s.value=!0)};function x(u){console.log(u),n()}function N(u){console.log(u)}function P(u){console.log(u),n()}function R(u){console.log(u),s.value=!1}return(u,r)=>{const B=G,T=O;return M(),W("div",X,[o(t(C),{onRegister:t(m),onSubmit:x,onReset:N},{statusSlot:l(({model:e,field:F})=>[o(B,{value:e[F],"onUpdate:value":_=>e[F]=_},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister"]),o(t(S),{columns:a,request:w,"row-key":e=>e.id,ref_key:"actionRef",ref:i,"scroll-x":1090},{tableTitle:l(()=>[o(t(E),{type:"primary",onClick:r[0]||(r[0]=e=>b(1))},{icon:l(()=>[o(t(A),null,{default:l(()=>[o(t(k))]),_:1})]),default:l(()=>[Y]),_:1}),o(t(E),{type:"primary",onClick:r[1]||(r[1]=e=>b(2)),style:{"margin-left":"12px"}},{icon:l(()=>[o(t(A),null,{default:l(()=>[o(t(k))]),_:1})]),default:l(()=>[j]),_:1})]),_:1},8,["row-key"]),o(T,{show:t(s),"onUpdate:show":r[2]||(r[2]=e=>$(s)?s.value=e:s=e),"show-icon":!1,preset:"dialog",title:"\u6DFB\u52A0\u5957\u9910",class:"custom-card",style:{width:"700px"}},{default:l(()=>[o(t(C),{onRegister:t(g),onSubmit:P,onReset:R,style:{padding:"30px 100px"}},{statusSlot:l(({model:e,field:F})=>[o(B,{value:e[F],"onUpdate:value":_=>e[F]=_},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister"])]),_:1},8,["show"])])}}});var tu=Q(H,[["__scopeId","data-v-26dd72f2"]]);export{tu as default};