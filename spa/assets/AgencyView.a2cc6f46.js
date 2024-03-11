import{Q as y}from"./QIcon.89b2ae27.js";import{Q as i}from"./QBtn.c3151272.js";import{Q as h,a as d}from"./QCard.71daa90d.js";import{Q as w}from"./QTooltip.952a721d.js";import{Q as c}from"./QInput.7f82834f.js";import{Q as k,a as v,b as A,c as S}from"./QTable.6b434b44.js";import{Q as T}from"./QSeparator.7c3dded0.js";import{Q as M,C as D}from"./ClosePopup.d0c84cf0.js";import{Q as L}from"./QCardActions.f7b10c9a.js";import{Q as P}from"./format.921e47b3.js";import{_ as q,aa as $,f as r,$ as m,E as n,k as o,j as l,a1 as u,C,i as g,X as p,ab as N,a0 as _,Z as f,a2 as E,Y as O}from"./index.abf366c9.js";import"./render.04c64b32.js";import"./dom.17ea84af.js";import"./use-router-link.43533fdf.js";import"./use-dark.f54a1a29.js";import"./scroll.4aa12ad6.js";import"./use-key-composition.4fd64cc0.js";import"./focus-manager.8e1b27e8.js";import"./QList.b4b939b3.js";import"./QMarkupTable.ac2e9cf3.js";import"./QSelect.2543a518.js";import"./QItemLabel.1d4ddb5b.js";const U=[{name:"code",label:"Code",align:"left",field:e=>e.code,format:e=>`${e||""}`},{name:"agency",label:"Agency",align:"center",field:e=>e.agency,format:e=>`${e||""}`},{name:"action",label:"ACTION",align:"left",sortable:!1}];const B={data:()=>({showAddPodDialog:!1,teamLeaderOptions:["Team Leader 1","Team Leader 2","Team Leader 3","Team Leader 4"],teamMemberOptions:["Team Member 1","Team Member 2","Team Member 3","Team Member 4"],mission:{leader:null,leader_position:null,member:null,member_position:null,pod:null,date_issued:null,date_visit:null},tblMoCols:[...U],tblMoRows:[{code:"Sample",agency:"Sample",action:"Sample"},{code:"Sample",agency:"Sample",action:"Sample"}],agency:{},viewModal:""}),computed:{},watch:{},methods:{async initApp(){},onCreatePod(){this.agency={},this.viewModal="Create New Agency",this.showAddPodDialog=!0},onSelectItem(){this.agency={code:"sample",agency:"sample"},this.viewModal="Update Agency",this.showAddPodDialog=!0}},mounted(){this.initApp()}},I={class:"form-main"},R={class:"text-h6"},z=n("span",{class:"card-header-label"}," Agency Management ",-1),F={class:"absolute-bottom-right q-pr-md",style:{transform:"translateY(50%)","z-index":"100"}},K={class:"row q-col-gutter-md"},Y={class:"col-lg-5 col-md-5 col-sm-5 col-xs-12"},j={key:0,style:{"min-width":"92px",padding:"0"}},G={class:"text-h6 flex"},X={class:"row q-col-gutter-md"},Z={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},H={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},J={class:"q-gutter-sm q-pa-sm"};function W(e,t,x,ee,oe,b){const Q=$("uppercase");return r(),m(u,null,[n("div",null,[n("div",I,[o(h,null,{default:l(()=>[o(d,{class:"bg-amber-7"},{default:l(()=>[n("div",R,[o(y,{name:"manage_accounts",size:"sm"}),z]),n("div",F,[o(i,{fab:"",icon:"add",color:"green-5",onClick:b.onCreatePod},null,8,["onClick"])])]),_:1}),o(d,{style:{"padding-top":"0","padding-bottom":"0"}}),o(d,null,{default:l(()=>[n("div",K,[n("div",Y,[C((r(),g(c,{"bottom-slots":"",label:"Search",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=a=>e.search=a),onKeypress:t[2]||(t[2]=N(a=>e.onSearch("search"),["enter"])),dense:""},{append:l(()=>[o(i,{icon:"search",color:"primary",flat:"",round:"",onClick:t[0]||(t[0]=a=>e.onSearch("search"))},{default:l(()=>[o(w,null,{default:l(()=>[p("Click to search")]),_:1})]),_:1}),o(i,{icon:"autorenew",color:"red",flat:"",round:"",onClick:e.onRefresh},{default:l(()=>[o(w,null,{default:l(()=>[p("Click to refresh")]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue"])),[[Q]])])]),n("div",null,[o(k,{title:"",rows:e.tblMoRows,columns:e.tblMoCols,"row-key":"name",pagination:e.pagination,"onUpdate:pagination":t[3]||(t[3]=a=>e.pagination=a),"rows-per-page-options":e.rowPerPageOptions,loading:e.fetchLoading,onRequest:e.onFetchData},{header:l(a=>[o(v,{props:a,style:{"margin-top":"10px"}},{default:l(()=>[(r(!0),m(u,null,_(a.cols,s=>(r(),g(A,{key:s.name,props:a,onClick:V=>e.toggleSort(s.name),class:E({sortable:s.sortable})},{default:l(()=>[p(f(s.label)+" ",1),o(y,{name:s.name===e.sortKey&&e.sortOrder===1?"arrow_upward":"arrow_downward",class:"q-ml-md"},null,8,["name"])]),_:2},1032,["props","onClick","class"]))),128))]),_:2},1032,["props"])]),body:l(a=>[o(v,{props:a,class:"hoverable"},{default:l(()=>[(r(!0),m(u,null,_(a.cols,s=>(r(),g(S,{key:s.name,props:a,class:"text-wrap-normal"},{default:l(()=>[p(f(s.name==="action"?"":s.value)+" ",1),s.name==="action"?(r(),m("div",j,[o(i,{icon:"open_in_new",flat:"",color:"primary",size:"sm",label:"View",onClick:V=>b.onSelectItem(a.row.id)},null,8,["onClick"])])):O("",!0)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","rows-per-page-options","loading","onRequest"])])]),_:1})]),_:1})])]),o(P,{modelValue:e.showAddPodDialog,"onUpdate:modelValue":t[6]||(t[6]=a=>e.showAddPodDialog=a)},{default:l(()=>[o(h,{style:{width:"700px","max-width":"80vw"}},{default:l(()=>[o(M,{ref:"form",onValidationError:e.onValidationError,greedy:""},{default:l(()=>[n("div",null,[o(d,null,{default:l(()=>[n("div",G,f(e.viewModal),1)]),_:1}),o(T,{class:"mb-5",style:{"margin-bottom":"15px"}}),o(d,{class:"q-pt-none"},{default:l(()=>[n("div",X,[n("div",Z,[o(c,{outlined:"",dense:"",modelValue:e.agency.code,"onUpdate:modelValue":t[4]||(t[4]=a=>e.agency.code=a),options:e.teamLeaderOptions,label:"Code"},null,8,["modelValue","options"])]),n("div",H,[o(c,{outlined:"",dense:"",modelValue:e.agency.agency,"onUpdate:modelValue":t[5]||(t[5]=a=>e.agency.agency=a),label:"Agency "},null,8,["modelValue"])])])]),_:1})])]),_:1},8,["onValidationError"]),o(L,{align:"right",class:"bg-white text-teal"},{default:l(()=>[n("div",J,[C(o(i,{icon:"close",color:"red",label:"Close"},null,512),[[D]]),o(i,{icon:"send",color:"green-7",label:"Submit",onClick:e.onConfirmSubmission},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var Ve=q(B,[["render",W]]);export{Ve as default};
