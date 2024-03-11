import{Q as c}from"./QIcon.89b2ae27.js";import{Q as f,a as i}from"./QCard.71daa90d.js";import{Q as m}from"./QInput.7f82834f.js";import{Q as d}from"./QBtn.c3151272.js";import{Q as v}from"./QTooltip.952a721d.js";import{Q as k,a as w,b as S,c as M}from"./QTable.6b434b44.js";import{Q as T}from"./QSeparator.7c3dded0.js";import{Q as D,C as R}from"./ClosePopup.d0c84cf0.js";import{Q as L}from"./QCardActions.f7b10c9a.js";import{Q as q}from"./format.921e47b3.js";import{_ as A,aa as O,f as r,$ as p,E as s,k as e,j as l,a1 as g,C,i as h,X as u,ab as P,a0 as V,Z as b,a2 as U,Y as E}from"./index.abf366c9.js";import{R as N}from"./findings-table.2d0ecba0.js";import"./render.04c64b32.js";import"./use-dark.f54a1a29.js";import"./use-key-composition.4fd64cc0.js";import"./focus-manager.8e1b27e8.js";import"./dom.17ea84af.js";import"./use-router-link.43533fdf.js";import"./scroll.4aa12ad6.js";import"./QList.b4b939b3.js";import"./QMarkupTable.ac2e9cf3.js";import"./QSelect.2543a518.js";import"./QItemLabel.1d4ddb5b.js";const $={data:()=>({showAddPodDialog:!1,teamLeaderOptions:["Team Leader 1","Team Leader 2","Team Leader 3","Team Leader 4"],teamMemberOptions:["Team Member 1","Team Member 2","Team Member 3","Team Member 4"],findingsCode:"Sample",findings:"Sample",recom:{},mission:{leader:null,leader_position:null,member:null,member_position:null,pod:null,date_issued:null,date_visit:null},tblMoCols:[...N],tblMoRows:[{code:"Sample",recom:"Sample",action:"Sample"},{code:"Sample",recom:"Sample",action:"Sample"}],viewModal:""}),computed:{},watch:{},methods:{async initApp(){},onCreatePod(){this.recom={},this.viewModal="Create New Recommendation",this.showAddPodDialog=!0},onSelectItem(){this.recom={code:"sample",recomData:"sample"},this.viewModal="Update Recommendation",this.showAddPodDialog=!0}},mounted(){this.initApp()}},z={class:"form-main"},B={class:"text-h6"},F=s("span",{class:"card-header-label"}," Findings ",-1),I=s("div",{class:"absolute-bottom-right q-pr-md",style:{transform:"translateY(50%)","z-index":"100"}},null,-1),K={class:"row q-col-gutter-md"},Y={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},j={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},X={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},Z={style:{"margin-top":"20px"}},G={class:"form-main"},H={class:"text-h6"},J=s("span",{class:"card-header-label"}," Recommendations ",-1),W={class:"absolute-bottom-right q-pr-md",style:{transform:"translateY(50%)","z-index":"100"}},x={class:"row q-col-gutter-md"},ee={class:"col-lg-5 col-md-5 col-sm-5 col-xs-12"},oe={key:0,style:{"min-width":"92px",padding:"0"}},ae={class:"text-h6 flex"},le={class:"row q-col-gutter-md"},se={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},te={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},ne={class:"q-gutter-sm q-pa-sm"};function ie(o,t,de,re,me,_){const y=O("uppercase");return r(),p(g,null,[s("div",null,[s("div",z,[e(f,null,{default:l(()=>[e(i,{class:"bg-amber-7"},{default:l(()=>[s("div",B,[e(c,{name:"manage_accounts",size:"sm"}),F]),I]),_:1}),e(i,{style:{"padding-top":"0","padding-bottom":"0"}}),e(i,null,{default:l(()=>[s("div",K,[s("div",Y,[e(m,{outlined:"",dense:"",modelValue:o.findingsCode,"onUpdate:modelValue":t[0]||(t[0]=a=>o.findingsCode=a),options:o.teamLeaderOptions,label:"Code"},null,8,["modelValue","options"])]),s("div",j,[e(m,{outlined:"",dense:"",modelValue:o.findings,"onUpdate:modelValue":t[1]||(t[1]=a=>o.findings=a),options:o.teamLeaderOptions,label:"Findings"},null,8,["modelValue","options"])]),s("div",X,[e(d,{outlined:"",color:"primary",options:o.teamLeaderOptions,label:"Update info"},null,8,["options"])])])]),_:1})]),_:1})])]),s("div",Z,[s("div",G,[e(f,null,{default:l(()=>[e(i,{class:"bg-amber-7"},{default:l(()=>[s("div",H,[e(c,{name:"manage_accounts",size:"sm"}),J]),s("div",W,[e(d,{fab:"",icon:"add",color:"green-5",onClick:_.onCreatePod},null,8,["onClick"])])]),_:1}),e(i,{style:{"padding-top":"0","padding-bottom":"0"}}),e(i,null,{default:l(()=>[s("div",x,[s("div",ee,[C((r(),h(m,{"bottom-slots":"",label:"Search",modelValue:o.search,"onUpdate:modelValue":t[3]||(t[3]=a=>o.search=a),onKeypress:t[4]||(t[4]=P(a=>o.onSearch("search"),["enter"])),dense:""},{append:l(()=>[e(d,{icon:"search",color:"primary",flat:"",round:"",onClick:t[2]||(t[2]=a=>o.onSearch("search"))},{default:l(()=>[e(v,null,{default:l(()=>[u("Click to search")]),_:1})]),_:1}),e(d,{icon:"autorenew",color:"red",flat:"",round:"",onClick:o.onRefresh},{default:l(()=>[e(v,null,{default:l(()=>[u("Click to refresh")]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue"])),[[y]])])]),s("div",null,[e(k,{title:"",rows:o.tblMoRows,columns:o.tblMoCols,"row-key":"name",pagination:o.pagination,"onUpdate:pagination":t[5]||(t[5]=a=>o.pagination=a),"rows-per-page-options":o.rowPerPageOptions,loading:o.fetchLoading,onRequest:o.onFetchData},{header:l(a=>[e(w,{props:a,style:{"margin-top":"10px"}},{default:l(()=>[(r(!0),p(g,null,V(a.cols,n=>(r(),h(S,{key:n.name,props:a,onClick:Q=>o.toggleSort(n.name),class:U({sortable:n.sortable})},{default:l(()=>[u(b(n.label)+" ",1),e(c,{name:n.name===o.sortKey&&o.sortOrder===1?"arrow_upward":"arrow_downward",class:"q-ml-md"},null,8,["name"])]),_:2},1032,["props","onClick","class"]))),128))]),_:2},1032,["props"])]),body:l(a=>[e(w,{props:a,class:"hoverable"},{default:l(()=>[(r(!0),p(g,null,V(a.cols,n=>(r(),h(M,{key:n.name,props:a,class:"text-wrap-normal"},{default:l(()=>[u(b(n.name==="action"?"":n.value)+" ",1),n.name==="action"?(r(),p("div",oe,[e(d,{icon:"open_in_new",flat:"",color:"primary",size:"sm",label:"View",onClick:Q=>_.onSelectItem(a.row.id)},null,8,["onClick"])])):E("",!0)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","rows-per-page-options","loading","onRequest"])])]),_:1})]),_:1})])]),e(q,{modelValue:o.showAddPodDialog,"onUpdate:modelValue":t[8]||(t[8]=a=>o.showAddPodDialog=a)},{default:l(()=>[e(f,{style:{width:"700px","max-width":"80vw"}},{default:l(()=>[e(D,{ref:"form",onValidationError:o.onValidationError,greedy:""},{default:l(()=>[s("div",null,[e(i,null,{default:l(()=>[s("div",ae,b(o.viewModal),1)]),_:1}),e(T,{class:"mb-5",style:{"margin-bottom":"15px"}}),e(i,{class:"q-pt-none"},{default:l(()=>[s("div",le,[s("div",se,[e(m,{outlined:"",dense:"",modelValue:o.recom.code,"onUpdate:modelValue":t[6]||(t[6]=a=>o.recom.code=a),label:"Code"},null,8,["modelValue"])]),s("div",te,[e(m,{outlined:"",dense:"",modelValue:o.recom.recomData,"onUpdate:modelValue":t[7]||(t[7]=a=>o.recom.recomData=a),label:"Recommendation"},null,8,["modelValue"])])])]),_:1})])]),_:1},8,["onValidationError"]),e(L,{align:"right",class:"bg-white text-teal"},{default:l(()=>[s("div",ne,[C(e(d,{icon:"close",color:"red",label:"Close"},null,512),[[R]]),e(d,{icon:"send",color:"green-7",label:"Submit",onClick:o.onConfirmSubmission},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var Oe=A($,[["render",ie]]);export{Oe as default};
