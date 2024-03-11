import{Q as V}from"./QIcon.89b2ae27.js";import{Q as r}from"./QBtn.c3151272.js";import{Q as b,a as m}from"./QCard.71daa90d.js";import{Q as v}from"./QTooltip.952a721d.js";import{Q as d}from"./QInput.7f82834f.js";import{Q as R,a as h,b as P,c as A}from"./QTable.6b434b44.js";import{Q as M}from"./QSeparator.7c3dded0.js";import{Q as U,C as T}from"./ClosePopup.d0c84cf0.js";import{Q as D}from"./QCardActions.f7b10c9a.js";import{Q as S}from"./format.921e47b3.js";import{_ as q,aa as F,f as i,$ as u,E as t,k as l,j as s,a1 as c,Y as _,C as y,i as f,X as p,ab as I,a0 as w,a2 as L,Z as C}from"./index.abf366c9.js";import{V as O}from"./visitation-report-table.88271429.js";import"./render.04c64b32.js";import"./dom.17ea84af.js";import"./use-router-link.43533fdf.js";import"./use-dark.f54a1a29.js";import"./scroll.4aa12ad6.js";import"./use-key-composition.4fd64cc0.js";import"./focus-manager.8e1b27e8.js";import"./QList.b4b939b3.js";import"./QMarkupTable.ac2e9cf3.js";import"./QSelect.2543a518.js";import"./QItemLabel.1d4ddb5b.js";const $={data:()=>({userRole:localStorage.getItem("role"),showAddPodDialog:!1,regionOptions:["Region 1","Region 2","Region 3","Region 4"],region:"",tblMhfColumns:[...O],tblMhfRows:[{report_id:"MHF0003",date_conducted:"April 14, 2024",actual_capacity:200,total_pod_personnel:100,status:"Approved"},{report_id:"MHF0002",date_conducted:"March 9, 2024",actual_capacity:150,total_pod_personnel:30,status:"Approved"},{report_id:"MHF0001",date_conducted:"May 24, 2024",actual_capacity:100,total_pod_personnel:50,status:"Approved"}]}),computed:{},watch:{},methods:{async initApp(){},onCreatePod(){this.$router.push({name:"create-mhf-visitation-report"})},onViewReport(){this.$router.push({name:"view-mhf-visitation-report"})}},mounted(){this.initApp()}},B={class:"form-main"},N={class:"text-h6"},E=t("span",{class:"card-header-label"}," MHF Visitation Report ",-1),H={key:0,class:"absolute-bottom-right q-pr-md",style:{transform:"translateY(50%)","z-index":"100"}},z={class:"row q-col-gutter-md"},K={class:"col-lg-5 col-md-5 col-sm-5 col-xs-12"},G={key:0,style:{"min-width":"92px",padding:"0"}},Y=t("div",{class:"text-h6 flex"}," Create Visitation Report ",-1),j={class:"row q-col-gutter-md"},X={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},Z={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},J=t("div",{class:"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-bold"}," Profile of the Place of Deprivation of Liberty ",-1),W={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},x={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},oo=t("div",{class:"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-bold"}," Total Number of persons deproved of liberty (PDL) / Actual Capacity ",-1),eo={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},lo={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},ao={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},to=t("div",{class:"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-bold"}," Total Number of POD Peronnel ",-1),so={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},no={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},io={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},ro={class:"q-gutter-sm q-pa-sm"};function mo(o,a,uo,po,co,g){const Q=F("uppercase");return i(),u(c,null,[t("div",null,[t("div",B,[l(b,null,{default:s(()=>[l(m,{class:"bg-amber-7"},{default:s(()=>[t("div",N,[l(V,{name:"psychology",size:"sm"}),E]),["FOCAL"].includes(o.userRole)?(i(),u("div",H,[l(r,{fab:"",icon:"add",color:"green-5",onClick:g.onCreatePod},null,8,["onClick"])])):_("",!0)]),_:1}),l(m,{style:{"padding-top":"0","padding-bottom":"0"}}),l(m,null,{default:s(()=>[t("div",z,[t("div",K,[y((i(),f(d,{"bottom-slots":"",label:"Search",modelValue:o.search,"onUpdate:modelValue":a[1]||(a[1]=e=>o.search=e),onKeypress:a[2]||(a[2]=I(e=>o.onSearch("search"),["enter"])),dense:""},{append:s(()=>[l(r,{icon:"search",color:"primary",flat:"",round:"",onClick:a[0]||(a[0]=e=>o.onSearch("search"))},{default:s(()=>[l(v,null,{default:s(()=>[p("Click to search")]),_:1})]),_:1}),l(r,{icon:"autorenew",color:"red",flat:"",round:"",onClick:o.onRefresh},{default:s(()=>[l(v,null,{default:s(()=>[p("Click to refresh")]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue"])),[[Q]])])]),t("div",null,[l(R,{title:"",rows:o.tblMhfRows,columns:o.tblMhfColumns,"row-key":"name",pagination:o.pagination,"onUpdate:pagination":a[3]||(a[3]=e=>o.pagination=e),"rows-per-page-options":o.rowPerPageOptions,loading:o.fetchLoading,onRequest:o.onFetchData},{header:s(e=>[l(h,{props:e,style:{"margin-top":"10px"}},{default:s(()=>[(i(!0),u(c,null,w(e.cols,n=>(i(),f(P,{key:n.name,props:e,onClick:k=>o.toggleSort(n.name),class:L({sortable:n.sortable})},{default:s(()=>[p(C(n.label)+" ",1),l(V,{name:n.name===o.sortKey&&o.sortOrder===1?"arrow_upward":"arrow_downward",class:"q-ml-md"},null,8,["name"])]),_:2},1032,["props","onClick","class"]))),128))]),_:2},1032,["props"])]),body:s(e=>[l(h,{props:e,class:"hoverable"},{default:s(()=>[(i(!0),u(c,null,w(e.cols,n=>(i(),f(A,{key:n.name,props:e,class:"text-wrap-normal"},{default:s(()=>[p(C(n.name==="action"?"":n.value)+" ",1),n.name==="action"?(i(),u("div",G,[l(r,{icon:"open_in_new",flat:"",color:"primary",size:"sm",label:"View",onClick:k=>g.onViewReport(e.row.id)},null,8,["onClick"])])):_("",!0)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","rows-per-page-options","loading","onRequest"])])]),_:1})]),_:1})])]),l(S,{modelValue:o.showAddPodDialog,"onUpdate:modelValue":a[14]||(a[14]=e=>o.showAddPodDialog=e)},{default:s(()=>[l(b,{style:{width:"700px","max-width":"80vw"}},{default:s(()=>[l(U,{ref:"form",onValidationError:o.onValidationError,greedy:""},{default:s(()=>[t("div",null,[l(m,null,{default:s(()=>[Y]),_:1}),l(M,{class:"mb-5",style:{"margin-bottom":"15px"}}),l(m,{class:"q-pt-none"},{default:s(()=>[t("div",j,[t("div",X,[l(d,{outlined:"",dense:"",modelValue:o.liberty_in,"onUpdate:modelValue":a[4]||(a[4]=e=>o.liberty_in=e),label:"Liberty In"},null,8,["modelValue"])]),t("div",Z,[l(d,{type:"date",outlined:"",dense:"",modelValue:o.conducted_on,"onUpdate:modelValue":a[5]||(a[5]=e=>o.conducted_on=e),label:"Conducted on"},null,8,["modelValue"])]),J,t("div",W,[l(d,{outlined:"",dense:"",modelValue:o.pod_address,"onUpdate:modelValue":a[6]||(a[6]=e=>o.pod_address=e),label:"Addres of POD"},null,8,["modelValue"])]),t("div",x,[l(d,{outlined:"",dense:"",modelValue:o.contact_info,"onUpdate:modelValue":a[7]||(a[7]=e=>o.contact_info=e),label:"Contact Information"},null,8,["modelValue"])]),oo,t("div",eo,[l(d,{outlined:"",dense:"",modelValue:o.male,"onUpdate:modelValue":a[8]||(a[8]=e=>o.male=e),label:"Male/Boy"},null,8,["modelValue"])]),t("div",lo,[l(d,{outlined:"",dense:"",modelValue:o.female,"onUpdate:modelValue":a[9]||(a[9]=e=>o.female=e),label:"Female/Girl"},null,8,["modelValue"])]),t("div",ao,[l(d,{outlined:"",dense:"",modelValue:o.lgbtq,"onUpdate:modelValue":a[10]||(a[10]=e=>o.lgbtq=e),label:"Identified as LGBTQ+"},null,8,["modelValue"])]),to,t("div",so,[l(d,{outlined:"",dense:"",modelValue:o.custodial,"onUpdate:modelValue":a[11]||(a[11]=e=>o.custodial=e),label:"Custodial Personnel"},null,8,["modelValue"])]),t("div",no,[l(d,{outlined:"",dense:"",modelValue:o.administrative,"onUpdate:modelValue":a[12]||(a[12]=e=>o.administrative=e),label:"Administrative Personnel"},null,8,["modelValue"])]),t("div",io,[l(d,{outlined:"",dense:"",modelValue:o.medical,"onUpdate:modelValue":a[13]||(a[13]=e=>o.medical=e),label:"Medical/Health Personnel"},null,8,["modelValue"])])])]),_:1})])]),_:1},8,["onValidationError"]),l(D,{align:"right",class:"bg-white text-teal"},{default:s(()=>[t("div",ro,[y(l(r,{icon:"close",color:"red",label:"Close"},null,512),[[T]]),l(r,{icon:"send",color:"green-7",label:"Submit",onClick:o.onConfirmSubmission},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var Lo=q($,[["render",mo]]);export{Lo as default};