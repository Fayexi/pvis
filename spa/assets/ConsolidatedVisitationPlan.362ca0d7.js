import{Q as y}from"./QIcon.89b2ae27.js";import{Q as m,a as p}from"./QCard.71daa90d.js";import{Q as _}from"./QTooltip.952a721d.js";import{Q as u}from"./QBtn.c3151272.js";import{Q as I}from"./QInput.7f82834f.js";import{Q as M,a as v,b as S,c as k}from"./QTable.6b434b44.js";import{Q as P}from"./QSeparator.7c3dded0.js";import{Q as H}from"./QMarkupTable.ac2e9cf3.js";import{Q,C as E}from"./ClosePopup.d0c84cf0.js";import{Q as R}from"./QCardActions.f7b10c9a.js";import{Q as V}from"./format.921e47b3.js";import{_ as A,aa as L,f as l,$ as i,E as e,k as a,j as o,a1 as d,C as O,i as g,X as c,ab as T,a0 as D,a2 as N,Z as h,Y as w}from"./index.abf366c9.js";import{C as B,a as F}from"./visitation-plan-table.07ee6146.js";import{S as f}from"./sweetalert2.all.12e75dcd.js";import"./render.04c64b32.js";import"./use-dark.f54a1a29.js";import"./scroll.4aa12ad6.js";import"./dom.17ea84af.js";import"./use-router-link.43533fdf.js";import"./use-key-composition.4fd64cc0.js";import"./focus-manager.8e1b27e8.js";import"./QList.b4b939b3.js";import"./QSelect.2543a518.js";import"./QItemLabel.1d4ddb5b.js";const $={data:()=>({btnRoles:["PMO","ED","CHAIRPERSON","DIRECTOR","OIC"],openHistoryDialog:!1,regionOptions:["Region 1","Region 2","Region 3","Region 4"],region:"",userRole:localStorage.getItem("role"),podStatud:"",buttonLabel:"",tblPodListCols:[...B],tblPodListRows:[{id:1,prepared_by:"Juan Dela Cruz",region:"2024",date_collated:"October 1, 2024",status:"For Consolidation"},{id:2,prepared_by:"Juan Dela Cruz",region:"2023",date_collated:"October 1, 2023",status:"Approved"},{id:3,prepared_by:"Juan Dela Cruz",region:"2022",date_collated:"October 1, 2022",status:"Approved"}],collatedData:[],collatedTab:"0",vcBtn:!0,tblCollatedCols:[...F],tblCollatedRows:[{no:1,pod:"Clinic of the Holy Spirit, Quezon City",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"},{no:2,pod:"Plainview Custodial Home, Mandaluyong City",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"},{no:3,pod:"Divine Mercy Facility, Boni",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"},{no:4,pod:"JM Home Care Clinic, Taguig City",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"},{no:5,pod:"Holy Spirit Psychiatric and Custodial Care, Marikina City",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"},{no:6,pod:"National Center for Mental Health",pod_address:"Sample",pod_type:"Mental Health Institution",agency:"DOH",target_date:"March, 1st Week"}]}),computed:{},watch:{},methods:{async initApp(){localStorage.getItem("role")=="OIC"&&(this.buttonLabel="For Endorsement"),localStorage.getItem("role")=="PMO"?this.buttonLabel="Endorse":localStorage.getItem("role")=="ED"?this.buttonLabel="For Approval":localStorage.getItem("role")=="CHAIRPERSON"&&(this.buttonLabel="Approve")},onCreatePod(){this.showAddPodDialog=!0},onSelectItem(t){console.log(t),this.$router.push({path:"collated-pod-plan/view-collated-pod-plan/"+t.status})},onCollate(t){console.log(t),console.log(t.id,this.tblPodListRows),this.collatedData.push(t),this.vcBtn=!1},showHistory(){this.openHistoryDialog=!0,console.log("this.collatedData",this.collatedData)},onEndorse(){f.fire({title:"Success!",text:"Collated POD has been endorsed.",icon:"success"}).then(t=>{this.podStatus="Endorsed"})},loading(t){f.fire({title:t,didOpen(){f.showLoading()},allowOutsideClick:!1,showCancelButton:!1})}},mounted(){this.initApp()}},q={class:"form-main"},z={class:"text-h6"},W=e("span",{class:"card-header-label"}," Consolidated POD Visitation Plan ",-1),U={class:"row q-col-gutter-md"},J={class:"col-lg-5 col-md-5 col-sm-5 col-xs-12"},K={key:0,style:{"min-width":"92px",padding:"0"}},j=e("div",{class:"text-h6 flex"}," History Logs ",-1),X={class:"row q-col-gutter-md"},Y={class:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},Z=e("thead",null,[e("tr",null,[e("th",{class:"text-center text-bold"},"Processed By"),e("th",{class:"text-center text-bold"},"Status"),e("th",{class:"text-center text-bold"},"Processed On")])],-1),G=e("tbody",null,[e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"OIC - Visitation Division"),e("td",{class:"text-center"}," Transmitted by OIC "),e("td",{class:"text-center"}," March 19, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"Chairperson"),e("td",{class:"text-center"}," Approved by Chairperson "),e("td",{class:"text-center"}," March 18, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"Executive Director"),e("td",{class:"text-center"}," Approved by ED "),e("td",{class:"text-center"}," March 18, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"PMO"),e("td",{class:"text-center"}," Approved by PMO "),e("td",{class:"text-center"}," March 18, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"OIC - Visitation Division"),e("td",{class:"text-center"}," Endorsed by OIC "),e("td",{class:"text-center"}," March 16, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"OIC - Visitation Division"),e("td",{class:"text-center"}," Collated by OIC "),e("td",{class:"text-center"}," March 16, 2024 ")]),e("tr",{class:"bg-blue-3"},[e("td",{class:"text-left"},"Director"),e("td",{class:"text-center"}," Updated and Endorsed by Director "),e("td",{class:"text-center"}," March 15, 2024 ")]),e("tr",{class:"bg-red-3"},[e("td",{class:"text-left"},"OIC - Visitation Division"),e("td",{class:"text-center"}," Reverted by OIC "),e("td",{class:"text-center"}," March 15, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"Director"),e("td",{class:"text-center"}," Endorsed by Director "),e("td",{class:"text-center"}," March 15, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"Regional Director"),e("td",{class:"text-center"}," Reviewed POD Plan "),e("td",{class:"text-center"}," March 13, 2024 ")]),e("tr",{class:"bg-green-3"},[e("td",{class:"text-left"},"Focal Person"),e("td",{class:"text-center"}," Created POD Plan "),e("td",{class:"text-center"}," March 11, 2024 ")])],-1),ee={class:"q-gutter-sm q-pa-sm"};function te(t,n,ae,oe,se,C){const x=L("uppercase");return l(),i(d,null,[e("div",null,[e("div",q,[a(m,null,{default:o(()=>[a(p,{class:"bg-amber-7"},{default:o(()=>[e("div",z,[a(y,{name:"account_tree",size:"sm"}),W])]),_:1}),a(p,{style:{"padding-top":"0","padding-bottom":"0"}}),a(p,null,{default:o(()=>[e("div",U,[e("div",J,[O((l(),g(I,{"bottom-slots":"",label:"Search",modelValue:t.search,"onUpdate:modelValue":n[1]||(n[1]=s=>t.search=s),onKeypress:n[2]||(n[2]=T(s=>t.onSearch("search"),["enter"])),dense:""},{append:o(()=>[a(u,{icon:"search",color:"primary",flat:"",round:"",onClick:n[0]||(n[0]=s=>t.onSearch("search"))},{default:o(()=>[a(_,null,{default:o(()=>[c("Click to search")]),_:1})]),_:1}),a(u,{icon:"autorenew",color:"red",flat:"",round:"",onClick:t.onRefresh},{default:o(()=>[a(_,null,{default:o(()=>[c("Click to refresh")]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue"])),[[x]])])]),e("div",null,[a(M,{title:"",rows:t.tblPodListRows,columns:t.tblPodListCols,"row-key":"name",pagination:t.pagination,"onUpdate:pagination":n[3]||(n[3]=s=>t.pagination=s),"rows-per-page-options":t.rowPerPageOptions,loading:t.fetchLoading,onRequest:t.onFetchData},{header:o(s=>[a(v,{props:s,style:{"margin-top":"10px"}},{default:o(()=>[(l(!0),i(d,null,D(s.cols,r=>(l(),g(S,{key:r.name,props:s,onClick:b=>t.toggleSort(r.name),class:N({sortable:r.sortable})},{default:o(()=>[c(h(r.label)+" ",1),a(y,{name:r.name===t.sortKey&&t.sortOrder===1?"arrow_upward":"arrow_downward",class:"q-ml-md"},null,8,["name"])]),_:2},1032,["props","onClick","class"]))),128))]),_:2},1032,["props"])]),body:o(s=>[a(v,{props:s,class:"hoverable"},{default:o(()=>[(l(!0),i(d,null,D(s.cols,r=>(l(),g(k,{key:r.name,props:s,class:"text-wrap-normal"},{default:o(()=>[r.name==="action"?(l(),i("div",K,[a(u,{icon:"open_in_new",flat:"",color:"primary",size:"sm",label:"View",onClick:b=>C.onSelectItem(s.row)},null,8,["onClick"]),a(u,{icon:"history",flat:"",color:"red",size:"sm",label:"History",onClick:b=>C.showHistory(s.row)},null,8,["onClick"])])):r.name==="status"?(l(),i(d,{key:1},[r.value==="For Consolidation"?(l(),i(d,{key:0},[["OIC","ED","PMO","FOCAL"].includes(t.userRole)?(l(),i(d,{key:0},[c(" For Endorse ")],64)):w("",!0),["CHAIRPERSON"].includes(t.userRole)?(l(),i(d,{key:1},[c(" For Approval ")],64)):w("",!0)],64)):(l(),i(d,{key:1},[c(h(r.value),1)],64))],64)):(l(),i(d,{key:2},[c(h(r.value),1)],64))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","rows-per-page-options","loading","onRequest"])])]),_:1})]),_:1})])]),a(V,{modelValue:t.openHistoryDialog,"onUpdate:modelValue":n[4]||(n[4]=s=>t.openHistoryDialog=s)},{default:o(()=>[a(m,{style:{width:"800px","max-width":"80vw"}},{default:o(()=>[a(Q,{ref:"form",onValidationError:t.onValidationError,greedy:""},{default:o(()=>[e("div",null,[a(p,null,{default:o(()=>[j]),_:1}),a(P,{class:"mb-5",style:{"margin-bottom":"15px"}}),a(p,{class:"q-pt-none"},{default:o(()=>[e("div",X,[e("div",Y,[a(m,null,{default:o(()=>[a(H,{separator:"cell","wrap-cells":""},{default:o(()=>[Z,G]),_:1})]),_:1})])])]),_:1})])]),_:1},8,["onValidationError"]),a(R,{align:"right",class:"bg-white text-teal"},{default:o(()=>[e("div",ee,[O(a(u,{flat:"",label:"Close",icon:"close",color:"red"},null,512),[[E]])])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var ke=A($,[["render",te]]);export{ke as default};
