import{Q}from"./QIcon.89b2ae27.js";import{Q as c}from"./QBtn.c3151272.js";import{Q as h,a as m}from"./QCard.71daa90d.js";import{Q as A}from"./QTooltip.952a721d.js";import{Q as D}from"./QInput.7f82834f.js";import{Q as P,a as C,b as S,c as R}from"./QTable.6b434b44.js";import{Q as k}from"./QSeparator.7c3dded0.js";import{Q as O}from"./QSelect.2543a518.js";import{Q as B,a as H}from"./QItemLabel.1d4ddb5b.js";import{Q as I,C as x}from"./ClosePopup.d0c84cf0.js";import{Q as M}from"./QCardActions.f7b10c9a.js";import{Q as E}from"./format.921e47b3.js";import{Q as N,a as q,b as F,c as W}from"./QTabPanels.205421ac.js";import{Q as z}from"./QMarkupTable.ac2e9cf3.js";import{_ as $,aa as J,f as n,$ as u,E as e,k as o,j as l,a1 as p,i as d,Y as w,C as V,X as g,ab as Y,a0 as b,a2 as K,Z as v}from"./index.abf366c9.js";import{V as j,a as G}from"./visitation-plan-table.07ee6146.js";import{S as y}from"./sweetalert2.all.12e75dcd.js";import"./render.04c64b32.js";import"./dom.17ea84af.js";import"./use-router-link.43533fdf.js";import"./use-dark.f54a1a29.js";import"./scroll.4aa12ad6.js";import"./use-key-composition.4fd64cc0.js";import"./focus-manager.8e1b27e8.js";import"./QList.b4b939b3.js";import"./QResizeObserver.cad93c08.js";import"./use-panel.87459ffc.js";import"./touch.3df10340.js";const X={data:()=>({btnRoles:["PMO","ED","CHAIRPERSON","DIRECTOR","OIC"],userRole:localStorage.getItem("role"),openHistoryDialog:!1,podTypeOptions:["City Jail","District Jail","Municipal Jail ","Sub-Provincial Jail","Provincial Jail","National Penitentiary","PNP Custodial Facility","NBI Detention Center","PDEA Detention Center","Bureau of Immigration Detention Center","Military Camp","Mental Health Institution","Bahay Pag-Asa Facility","Regional Rehabilitation Center for the Youth","Other Facilities"],agencyOptions:["AFP","BI","BJMP","BUCOR","DOH","DSWD","LGU","NBI","PDEA","PNP","PRIVATE"],showAddPodDialog:!1,showCollatedDialog:!1,regionOptions:["Region 1","Region 2","Region 3","Region 4"],region:"",tblPodColumns:[{name:"pod",label:"Place of Deprivation to be visited",align:"left",sortable:!1},{name:"pod_type",label:"Type of POD",align:"left",sortable:!1},{name:"agency",label:"Agency",align:"left",sortable:!1},{name:"target_date",label:"Target Date of visit (Week and Month)",align:"left",sortable:!1},{name:"action",label:"Action",align:"center",sortable:!1}],tblPodRows:[{pod:null,pod_type:null,agency:null,target_date:null}],tblPodListCols:[...j],tblPodListRows:[{region:"Region 3",pod_address:"Sample",pod_type:"Sample",agency:"Sample",date_created:"February 29, 2024",status:"Endorse"},{region:"Region 2",pod_address:"Sample",pod_type:"Sample",agency:"Sample",date_created:"February 29, 2024",status:"Endorse"},{region:"Region 1",pod_address:"Sample",pod_type:"Sample",agency:"Sample",date_created:"February 29, 2024",status:"Endorse"}],buttonLabel:"",collatedData:[],collatedTab:"0",vcBtn:!0,tblCollatedCols:[...G],tblCollatedRows:[{no:1,pod:"Clinic of the Holy Spirit, Quezon City",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"},{no:2,pod:"Plainview Custodial Home, Mandaluyong City",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"},{no:3,pod:"Divine Mercy Facility, Boni",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"},{no:4,pod:"JM Home Care Clinic, Taguig City",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"},{no:5,pod:"Holy Spirit Psychiatric and Custodial Care, Marikina City",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"},{no:6,pod:"National Center for Mental Health",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"}]}),computed:{},watch:{},methods:{async initApp(){localStorage.getItem("role")=="FOCAL"?(this.buttonLabel="Submit",console.log("BUTTON => ",this.buttonLabel)):localStorage.getItem("role")=="RD"?this.buttonLabel="For Endoresement":localStorage.getItem("role")=="DIRECTOR"?this.buttonLabel="Endorese":localStorage.getItem("role")=="OIC"?this.buttonLabel="Collate":localStorage.getItem("role")=="CHAIRPERSON"&&(this.buttonLabel="Approve")},addRow(){const t={pod:null,pod_type:null,agency:null,target_date:null};this.tblPodRows.push({...t})},onCreatePod(){this.showAddPodDialog=!0},onSubmit(){console.log(this.tblPodRows),this.tblPodRows.forEach(t=>{}),y.fire({title:"Success!",text:"POD Plan has been added.",icon:"success"}).then(t=>{this.podStatus="Endorsed"})},onSelectItem(){this.$router.push({name:"view-visitation-plan"})},showHistory(){this.openHistoryDialog=!0,console.log("this.collatedData",this.collatedData)},onCollate(t){console.log(t),console.log(t.id,this.tblPodListRows),this.collatedData.push(t),this.vcBtn=!1},onViewCollated(){this.showCollatedDialog=!0,console.log("this.collatedData",this.collatedData)},onSaveCollated(){},async revert(){let t="Are you sure you want to REVERT this data?";(await y.fire({title:"Confirmation Action",text:t,showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{title:"con-label",content:"con-label"}})).isConfirmed&&(this.loading("Submitting data..."),y.close(),await y.fire({title:"Success!",text:"Your data has been REVERTED.",icon:"success",timer:3e3,timerProgressBar:!0,showConfirmButton:!1}))},async endorse(t,s){let T="Are you sure you want to move this data to "+s.toUpperCase()+" status?";(await y.fire({title:"Confirmation Action",text:T,showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{title:"con-label",content:"con-label"}})).isConfirmed&&(this.loading("Submitting data..."),y.close(),await y.fire({title:"Success!",text:"Your data has been move to "+s.toUpperCase()+".",icon:"success",timer:3e3,timerProgressBar:!0,showConfirmButton:!1}))}},mounted(){this.initApp()}},Z={class:"form-main"},ee={class:"text-h6"},te=e("span",{class:"card-header-label"}," Regional POD Visitation Plan ",-1),oe={class:"absolute-bottom-right q-pr-md",style:{transform:"translateY(50%)","z-index":"100"}},le={class:"row q-col-gutter-md"},ae={class:"col-lg-5 col-md-5 col-sm-5 col-xs-12"},se={key:0,class:"col-lg-7 col-md-7 col-sm-7 col-xs-12 text-right"},ne={key:0,style:{"min-width":"92px",padding:"0"}},re=e("div",{class:"text-h6 flex"}," Create Regional Visitation Plan ",-1),ie={class:"row q-col-gutter-md"},de={class:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},ce={class:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},ue={class:"q-gutter-sm q-pa-sm"},me=e("div",{class:"text-h6 flex"}," Collated POD ",-1),pe={class:"row q-col-gutter-md"},ge={class:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},fe={key:0,class:"q-gutter-sm q-pa-sm"},be=e("div",{class:"text-h6 flex"}," History Logs ",-1),ye={class:"row q-col-gutter-md"},he={class:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},Ce=e("thead",null,[e("tr",null,[e("th",{class:"text-center text-bold"},"Processed By"),e("th",{class:"text-center text-bold"},"Status"),e("th",{class:"text-center text-bold"},"Processed On")])],-1),we=e("tbody",null,[e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"OIC - Visitation Division"),e("td",{class:"text-center"}," Transmitted by OIC "),e("td",{class:"text-center"}," March 19, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"Chairperson"),e("td",{class:"text-center"}," Approved by Chairperson "),e("td",{class:"text-center"}," March 18, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"Executive Director"),e("td",{class:"text-center"}," Approved by ED "),e("td",{class:"text-center"}," March 18, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"PMO"),e("td",{class:"text-center"}," Approved by PMO "),e("td",{class:"text-center"}," March 18, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"OIC - Visitation Division"),e("td",{class:"text-center"}," Endorsed by OIC "),e("td",{class:"text-center"}," March 16, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"OIC - Visitation Division"),e("td",{class:"text-center"}," Collated by OIC "),e("td",{class:"text-center"}," March 16, 2024 ")]),e("tr",{class:"bg-blue-3"},[e("td",{class:"text-left"},"Director"),e("td",{class:"text-center"}," Updated and Endorsed by Director "),e("td",{class:"text-center"}," March 15, 2024 ")]),e("tr",{class:"bg-red-3"},[e("td",{class:"text-left"},"OIC - Visitation Division"),e("td",{class:"text-center"}," Reverted by OIC "),e("td",{class:"text-center"}," March 15, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"Director"),e("td",{class:"text-center"}," Endorsed by Director "),e("td",{class:"text-center"}," March 15, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"Regional Director"),e("td",{class:"text-center"}," Reviewed POD Plan "),e("td",{class:"text-center"}," March 13, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"Focal Person"),e("td",{class:"text-center"}," Created POD Plan "),e("td",{class:"text-center"}," March 11, 2024 ")])],-1),_e={class:"q-gutter-sm q-pa-sm"};function ve(t,s,T,L,Ve,f){const U=J("uppercase");return n(),u(p,null,[e("div",null,[e("div",Z,[o(h,null,{default:l(()=>[o(m,{class:"bg-amber-7"},{default:l(()=>[e("div",ee,[o(Q,{name:"menu_book",size:"sm"}),te]),e("div",oe,[t.userRole=="FOCAL"?(n(),d(c,{key:0,fab:"",icon:"add",color:"green-5",onClick:f.onCreatePod},null,8,["onClick"])):w("",!0)])]),_:1}),o(m,{style:{"padding-top":"0","padding-bottom":"0"}}),o(m,null,{default:l(()=>[e("div",le,[e("div",ae,[V((n(),d(D,{"bottom-slots":"",label:"Search",modelValue:t.search,"onUpdate:modelValue":s[1]||(s[1]=a=>t.search=a),onKeypress:s[2]||(s[2]=Y(a=>t.onSearch("search"),["enter"])),dense:""},{append:l(()=>[o(c,{icon:"search",color:"primary",flat:"",round:"",onClick:s[0]||(s[0]=a=>t.onSearch("search"))},{default:l(()=>[o(A,null,{default:l(()=>[g("Click to search")]),_:1})]),_:1}),o(c,{icon:"autorenew",color:"red",flat:"",round:"",onClick:t.onRefresh},{default:l(()=>[o(A,null,{default:l(()=>[g("Click to refresh")]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue"])),[[U]])]),t.userRole=="OIC"?(n(),u("div",se,[o(c,{color:"green",label:"View Collated",onClick:s[3]||(s[3]=a=>f.onViewCollated()),disable:t.vcBtn},null,8,["disable"])])):w("",!0)]),e("div",null,[o(P,{title:"",rows:t.tblPodListRows,columns:t.tblPodListCols,"row-key":"name",pagination:t.pagination,"onUpdate:pagination":s[5]||(s[5]=a=>t.pagination=a),"rows-per-page-options":t.rowPerPageOptions,loading:t.fetchLoading,onRequest:t.onFetchData},{header:l(a=>[o(C,{props:a,style:{"margin-top":"10px"}},{default:l(()=>[(n(!0),u(p,null,b(a.cols,r=>(n(),d(S,{key:r.name,props:a,onClick:i=>t.toggleSort(r.name),class:K({sortable:r.sortable})},{default:l(()=>[g(v(r.label)+" ",1),o(Q,{name:r.name===t.sortKey&&t.sortOrder===1?"arrow_upward":"arrow_downward",class:"q-ml-md"},null,8,["name"])]),_:2},1032,["props","onClick","class"]))),128))]),_:2},1032,["props"])]),body:l(a=>[o(C,{props:a,class:"hoverable"},{default:l(()=>[(n(!0),u(p,null,b(a.cols,r=>(n(),d(R,{key:r.name,props:a,class:"text-wrap-normal"},{default:l(()=>[g(v(r.name==="action"?"":r.value)+" ",1),r.name==="action"?(n(),u("div",ne,[o(c,{icon:"open_in_new",flat:"",color:"primary",size:"sm",label:"View",onClick:s[4]||(s[4]=i=>f.onSelectItem())}),t.userRole=="OIC"?(n(),d(c,{key:0,icon:"list",flat:"",color:"green",size:"sm",label:"Collate",onClick:i=>f.onCollate(a.row)},null,8,["onClick"])):w("",!0),o(c,{icon:"history",flat:"",color:"red",size:"sm",label:"History",onClick:i=>f.showHistory(a.row)},null,8,["onClick"])])):w("",!0)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","rows-per-page-options","loading","onRequest"])])]),_:1})]),_:1})])]),o(E,{modelValue:t.showAddPodDialog,"onUpdate:modelValue":s[9]||(s[9]=a=>t.showAddPodDialog=a)},{default:l(()=>[o(h,{style:{width:"900px","max-width":"80vw"}},{default:l(()=>[o(I,{ref:"form",onValidationError:t.onValidationError,greedy:""},{default:l(()=>[e("div",null,[o(m,null,{default:l(()=>[re]),_:1}),o(k,{class:"mb-5",style:{"margin-bottom":"15px"}}),o(m,{class:"q-pt-none"},{default:l(()=>[e("div",ie,[e("div",de,[o(O,{modelValue:t.region,"onUpdate:modelValue":s[6]||(s[6]=a=>t.region=a),options:t.regionOptions,label:"Region"},null,8,["modelValue","options"])]),e("div",ce,[o(P,{rows:t.tblPodRows,columns:t.tblPodColumns,"row-key":"name"},{header:l(a=>[o(C,{props:a,style:{"margin-top":"10px"}},{default:l(()=>[(n(!0),u(p,null,b(a.cols,r=>(n(),d(S,{key:r.name,props:a,class:"text-wrap-normal"},{default:l(()=>[g(v(r.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:l(a=>[o(C,{props:a,class:"hoverable"},{default:l(()=>[(n(!0),u(p,null,b(a.cols,r=>(n(),d(R,{key:r.name,props:a},{default:l(()=>[r.name==="action"?(n(),d(c,{key:0,round:"",color:"green",icon:"add",size:"sm",onClick:s[7]||(s[7]=i=>f.addRow())})):r.name==="target_date"?(n(),d(D,{key:1,type:"date",outlined:"",modelValue:a.row.target_date,"onUpdate:modelValue":i=>a.row.target_date=i,dense:"",mask:"MMM W",format24h:!0,"no-calendar-button":!0},null,8,["modelValue","onUpdate:modelValue"])):r.name==="pod_type"?(n(),d(O,{key:2,dense:"",outlined:"","input-debounce":"0",options:t.podTypeOptions,modelValue:a.row.pod_type,"onUpdate:modelValue":i=>a.row.pod_type=i},{"no-option":l(()=>[o(B,null,{default:l(()=>[o(H,{class:"text-italic text-grey"},{default:l(()=>[g(" No data available ")]),_:1})]),_:1})]),_:2},1032,["options","modelValue","onUpdate:modelValue"])):r.name==="agency"?(n(),d(O,{key:3,dense:"",outlined:"","input-debounce":"0",options:t.agencyOptions,modelValue:a.row.agency,"onUpdate:modelValue":i=>a.row.agency=i},{"no-option":l(()=>[o(B,null,{default:l(()=>[o(H,{class:"text-italic text-grey"},{default:l(()=>[g(" No data available ")]),_:1})]),_:1})]),_:2},1032,["options","modelValue","onUpdate:modelValue"])):(n(),d(D,{key:4,outlined:"",modelValue:a.row.pod,"onUpdate:modelValue":i=>a.row.pod=i,dense:""},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns"])])])]),_:1})])]),_:1},8,["onValidationError"]),o(M,{align:"right",class:"bg-white text-teal"},{default:l(()=>[e("div",ue,[o(c,{icon:"send",color:"green-7",label:"Submit",onClick:s[8]||(s[8]=a=>f.onSubmit())}),V(o(c,{icon:"close",color:"red",label:"Close"},null,512),[[x]])])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(E,{modelValue:t.showCollatedDialog,"onUpdate:modelValue":s[13]||(s[13]=a=>t.showCollatedDialog=a)},{default:l(()=>[o(h,{style:{width:"800px","max-width":"80vw"}},{default:l(()=>[o(I,{ref:"form",onValidationError:t.onValidationError,greedy:""},{default:l(()=>[e("div",null,[o(m,null,{default:l(()=>[me]),_:1}),o(k,{class:"mb-5",style:{"margin-bottom":"15px"}}),o(m,{class:"q-pt-none"},{default:l(()=>[e("div",pe,[e("div",ge,[o(h,null,{default:l(()=>[o(N,{modelValue:t.collatedTab,"onUpdate:modelValue":s[10]||(s[10]=a=>t.collatedTab=a),dense:"",align:"left",class:"shadow-2",breakpoint:0},{default:l(()=>[(n(!0),u(p,null,b(t.collatedData,(a,r)=>(n(),d(F,{key:r,name:String(r),label:a.region},null,8,["name","label"]))),128))]),_:1},8,["modelValue"]),o(q,{modelValue:t.collatedTab,"onUpdate:modelValue":s[11]||(s[11]=a=>t.collatedTab=a),animated:""},{default:l(()=>[(n(!0),u(p,null,b(t.collatedData,(a,r)=>(n(),d(W,{key:r,name:String(r)},{default:l(()=>[o(P,{separator:"cell",rows:t.tblCollatedRows,columns:t.tblCollatedCols,"row-key":"name",pagination:!1,"hide-pagination":"","rows-per-page-options":[0],loading:t.fetchLoading},{header:l(i=>[o(C,{props:i,style:{"margin-top":"10px"}},{default:l(()=>[(n(!0),u(p,null,b(i.cols,_=>(n(),d(S,{key:_.name,props:i},{default:l(()=>[g(v(_.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:l(i=>[o(C,{props:i,class:"hoverable"},{default:l(()=>[(n(!0),u(p,null,b(i.cols,_=>(n(),d(R,{key:_.name,props:i,class:"text-wrap-normal"},{default:l(()=>[g(v(_.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),_:1})])])]),_:1})])]),_:1},8,["onValidationError"]),o(M,{align:"right",class:"bg-white text-teal"},{default:l(()=>[t.podStatus!="Endorsed"?(n(),u("div",fe,[t.btnRoles.includes(t.userRole)?V((n(),d(c,{key:0,label:"Save",icon:"save",color:"green",onClick:s[12]||(s[12]=a=>f.onSaveCollated())},null,512)),[[x]]):w("",!0)])):w("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(E,{modelValue:t.openHistoryDialog,"onUpdate:modelValue":s[14]||(s[14]=a=>t.openHistoryDialog=a)},{default:l(()=>[o(h,{style:{width:"800px","max-width":"80vw"}},{default:l(()=>[o(I,{ref:"form",onValidationError:t.onValidationError,greedy:""},{default:l(()=>[e("div",null,[o(m,null,{default:l(()=>[be]),_:1}),o(k,{class:"mb-5",style:{"margin-bottom":"15px"}}),o(m,{class:"q-pt-none"},{default:l(()=>[e("div",ye,[e("div",he,[o(h,null,{default:l(()=>[o(z,{separator:"cell","wrap-cells":""},{default:l(()=>[Ce,we]),_:1})]),_:1})])])]),_:1})])]),_:1},8,["onValidationError"]),o(M,{align:"right",class:"bg-white text-teal"},{default:l(()=>[e("div",_e,[V(o(c,{flat:"",label:"Close",icon:"close",color:"red"},null,512),[[x]])])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var Xe=$(X,[["render",ve]]);export{Xe as default};