import{Q as C}from"./QIcon.89b2ae27.js";import{a as y,Q as O}from"./QCard.71daa90d.js";import{Q as d}from"./QInput.7f82834f.js";import{Q as i}from"./QSeparator.7c3dded0.js";import{Q as g}from"./QBtn.c3151272.js";import{Q as u}from"./QExpansionItem.2c085922.js";import{Q as I}from"./QMarkupTable.ac2e9cf3.js";import{Q as T,a as P}from"./QItemLabel.1d4ddb5b.js";import{Q as x}from"./QSelect.2543a518.js";import{Q as w}from"./QList.b4b939b3.js";import{Q as k}from"./QCardActions.f7b10c9a.js";import{S as A}from"./sweetalert2.all.12e75dcd.js";import{_ as D,f as m,$ as c,E as e,k as l,j as n,a1 as f,a0 as h,Z as V,X as b,am as q,an as S,d as L,e as E}from"./index.abf366c9.js";import"./render.04c64b32.js";import"./use-dark.f54a1a29.js";import"./use-key-composition.4fd64cc0.js";import"./focus-manager.8e1b27e8.js";import"./dom.17ea84af.js";import"./use-router-link.43533fdf.js";import"./QSlideTransition.4305d1c5.js";import"./format.921e47b3.js";import"./scroll.4aa12ad6.js";const M={data:()=>({btnRoles:["PMO","ED","CHAIRPERSON","DIRECTOR","OIC"],userRole:localStorage.getItem("role"),teamComposition:[{member_name:null,member_position:null},{member_name:null,member_position:null},{member_name:null,member_position:null}],pod_male:null,pod_female:null,pod_total:null,pod_personnel_total:null,pod_custodial:null,pod_admin:null,pod_medical:null,special_categories_pdl:[{categ:"Older Persons (60 years old and above)",vmodel:"older_person_"},{categ:"Minors (below 18 years of age)",vmodel:"minor_person_"},{categ:"Terminally Ill",vmodel:"ill_person_"},{categ:"Persons with Disability",vmodel:"pwd_person_"},{categ:"Persons with Mental Health Condition",vmodel:"mental_person_"},{categ:"Pregnant Women",vmodel:"pregnant_person_"},{categ:"Victims of Gender Based Violence",vmodel:"victim_person_"},{categ:"Indigenous People",vmodel:"indigenous_person_"},{categ:"Alleged Political  Prisoner",vmodel:"political_person_"},{categ:"Tagged as Terrorist Individuals as defined under RA 11479",vmodel:"terrorist_person_"}],findings_observation:[{categ:"1. Congestion Issue/s (causes of congestion)",vmodel:"vmodel"},{categ:"2. Accommodation",vmodel:"vmodel"},{categ:"3. File Management / Records",vmodel:"vmodel"},{categ:"4. Physical Environment",vmodel:"vmodel"},{categ:"5. Clothing and Bedding",vmodel:"vmodel"},{categ:"6. Separation of Categories",vmodel:"vmodel"},{categ:"7. Personal Hygiene",vmodel:"vmodel"},{categ:"8. Food and Drinking Water",vmodel:"vmodel"},{categ:"9. Exercise, Sports and Recreation",vmodel:"vmodel"},{categ:"10. Healthcare Services",vmodel:"vmodel"},{categ:"11. Restrictions, discipline and sanctions",vmodel:"vmodel"},{categ:"12. Searches of PDL and cells",vmodel:"vmodel"},{categ:"13. Information to PDL on facility\u2019s regulation, rights and obligations",vmodel:"vmodel"},{categ:"14. Requests or complaints by the PDL",vmodel:"vmodel"},{categ:"15. Contact with the outside world",vmodel:"vmodel"},{categ:"16. Notification of Death, Illness and Transfer",vmodel:"vmodel"},{categ:"17. Exercise of religion",vmodel:"vmodel"},{categ:"18. Work and livelihood",vmodel:"vmodel"},{categ:"19. Education and Books",vmodel:"vmodel"},{categ:"20. Retention of PDL\u2019s Property",vmodel:"vmodel"},{categ:"21. Investigation on Custodial Death, Disappearance, Serious Injury, Torture or other Cruel, Inhuman or Degrading Treatment or Punishment (CIDTP) of CDL",vmodel:"vmodel"},{categ:"22. Removal and Transport of PDL",vmodel:"vmodel"},{categ:"23. Grant of Time Allowances and Release of PDL",vmodel:"vmodel"},{categ:"24. Institutional Personnel",vmodel:"vmodel"},{categ:"25. Others",vmodel:"vmodel"}],incidences_reported:[{categ:"Death/s in custody",vmodel:"vmodel"},{categ:"Torture incident/s",vmodel:"vmodel"},{categ:"Riots",vmodel:"vmodel"},{categ:"Escape",vmodel:"vmodel"},{categ:"Suicide",vmodel:"vmodel"},{categ:"Gender-based violence",vmodel:"vmodel"},{categ:"A PDL is detained without Warrant of Arrest beyond the period of 14 calendar days under Section 29 of RA 11479",vmodel:"vmodel"}],genderMoniToolOptions:["Male","Female"],moniToolsOptions:["Monitoring Tool for Jails and Prison Facilities","Interview Tool for PDL - Jails and Prison  Facilities","Monitoring Tool for PNP, PDEA, and  other  Detention Facilities","Interview Tool for PDL - PNP, PDEA  and other Detention  Facilities","Monitoring Tool for Child-Caring  Facilities","FGD Tool for Children Deprived of  their Liberty (CDL)","Monitoring Tool for Mental Health Facility","Service User Interview Form"],genderTools:null,monitoringTools:null,monitotingToolsUsed:[{genderTools:null,monitoringTools:null}]}),computed:{},watch:{pod_male(o){console.log(o);var s=this.pod_female!=null?this.pod_female:0;this.pod_total=parseInt(o)+parseInt(s)},pod_female(o){console.log(o);var s=this.pod_male!=null?this.pod_male:0;this.pod_total=parseInt(o)+parseInt(s)},pod_custodial(o){var s=this.pod_admin!=null?this.pod_admin:0,_=this.pod_medical!=null?this.pod_medical:0;this.pod_personnel_total=parseInt(o)+parseInt(s)+parseInt(_)},pod_admin(o){var s=this.pod_custodial!=null?this.pod_custodial:0,_=this.pod_medical!=null?this.pod_medical:0;this.pod_personnel_total=parseInt(o)+parseInt(s)+parseInt(_)},pod_medical(o){var s=this.pod_admin!=null?this.pod_admin:0,_=this.pod_custodial!=null?this.pod_custodial:0;this.pod_personnel_total=parseInt(o)+parseInt(s)+parseInt(_)}},methods:{async initApp(){},onAddRow(){this.teamComposition.push({member_name:null,member_position:null})},onAddMonitoringTool(){this.monitotingToolsUsed.push({genderTools:null,monitoringTools:null})},onBack(){let o=window.location.href;console.log("checkUrl",o),this.$router.push({name:"pod-visitation-report"})},onSave(){A.fire({title:"Success!",text:"POD Visitation Report has been successfully saved.",icon:"success"}).then(o=>{location.reload()})}},mounted(){this.user_role=localStorage.getItem("role"),this.initApp()}},r=o=>(q("data-v-02ff6df8"),o=o(),S(),o),Q={class:"form-main"},F={class:"text-h6"},N=r(()=>e("span",{class:"card-header-label"}," Create POD Visitation Report ",-1)),B={class:"row text-bold"},G=r(()=>e("div",{class:"col-md-12 col-sm-12 col-xs-12"}," MONITORING OF THE HUMAN RIGHTS ",-1)),H=r(()=>e("div",{class:"col-md-12 col-sm-12 col-xs-12"}," SITUATION OF PERSONS DEPRIVED OF ",-1)),$={class:"row col-md-12 col-sm-12 col-xs-12"},z=r(()=>e("div",{class:"col-md-1",style:{display:"flex","align-items":"center"}}," LIBERTY IN ",-1)),W={class:"col-md-5"},Y={class:"row col-md-12 col-sm-12 col-xs-12"},j=r(()=>e("div",{class:"col-md-2",style:{display:"flex","align-items":"center"}}," CONDUCTED ON ",-1)),J={class:"col-md-4"},K=r(()=>e("div",{class:"row col-md-12 col-sm-12 col-xs-12"}," x--------------------------------------------------------------x ",-1)),X={class:"row text-bold"},Z=r(()=>e("div",{class:"col-md-12 col-sm-12 col-xs-12 text-center q-mb-md",style:{"text-decoration":"underline"}}," POD VISITATION REPORT ",-1)),ee={class:"col-md-12 col-sm-12 col-xs-12"},oe={class:"col-md-12 col-sm-12 col-xs-12 q-pa-md"},le={class:"col-md-1 q-ml-md",style:{display:"flex","align-items":"center"}},se={class:"col-lg-5 col-md-5 col-sm-12 col-xs-12 q-ml-none"},te={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},de={class:"col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center"},ae={class:"col-md-12 col-sm-12 col-xs-12 q-pa-md"},ne={class:"row col-md-12 col-sm-12 col-xs-12"},ie=r(()=>e("div",{class:"col-md-1 q-ml-md",style:{display:"flex","align-items":"center"}}," 1. ",-1)),re={class:"col-md-10"},me={class:"row col-md-12 col-sm-12 col-xs-12"},ce=r(()=>e("div",{class:"col-md-1 q-ml-md",style:{display:"flex","align-items":"center"}}," 2. ",-1)),pe={class:"col-md-10"},ue={class:"row col-md-12 col-sm-12 col-xs-12"},_e=r(()=>e("div",{class:"col-md-1 q-ml-md",style:{display:"flex","align-items":"center"}}," 3. ",-1)),ve={class:"col-md-10"},ge={class:"row col-md-12 col-sm-12 col-xs-12"},fe=r(()=>e("div",{class:"col-md-1 q-ml-md",style:{display:"flex","align-items":"center"}}," 4. ",-1)),he={class:"col-md-10"},Ve=r(()=>e("div",{class:"row col-md-12 col-sm-12 col-xs-12 q-mt-sm"},[e("div",{class:"col-md-1 q-ml-md",style:{display:"flex","align-items":"center"}}," 5. "),e("div",{class:"col-md-10"}," Total Number of persons deprived of liberty (PDL)/Actual Capacity ")],-1)),be={class:"row q-gutter-md col-md-12 col-sm-12 col-xs-12"},ye=r(()=>e("div",{class:"col-md-1 q-ml-md",style:{display:"flex","align-items":"center"}},null,-1)),Ie={class:"col-md-2"},Te={class:"col-md-2"},Pe={class:"col-md-2"},xe={class:"row col-md-12 col-sm-12 col-xs-12"},De=r(()=>e("div",{class:"col-md-1 q-ml-md",style:{display:"flex","align-items":"center"}}," 6. ",-1)),Ue={class:"col-md-5"},Re={class:"row col-md-12 col-sm-12 col-xs-12 q-mt-sm"},Ce=r(()=>e("div",{class:"col-md-1 q-ml-md",style:{display:"flex","align-items":"center"}}," 7. ",-1)),Oe={class:"col-md-5"},we={class:"row q-gutter-md col-md-12 col-sm-12 col-xs-12"},ke=r(()=>e("div",{class:"col-md-1 q-ml-md",style:{display:"flex","align-items":"center"}},null,-1)),Ae={class:"col-md-2"},qe={class:"col-md-2"},Se={class:"col-md-2"},Le={class:"col-md-12 col-sm-12 col-xs-12 q-pa-md"},Ee=r(()=>e("thead",null,[e("tr",null,[e("th",{class:"text-center",rowspan:"2"},"CATEGORY"),e("th",{class:"text-center",colspan:"4"},"NUMBER OF PDL"),e("th",{class:"text-center",rowspan:"2"},[b(" REMARKS"),e("br"),e("span",{class:"text-caption"}," (also state incident/s of discrimination or different treatment by facility personnel / co-PDLs, if any) ")])]),e("tr",null,[e("th",{class:"text-center"},"MALE / BOY"),e("th",{class:"text-center"},"FEMALE / GIRL"),e("th",{class:"text-center"},"LGBTQ+"),e("th",{class:"text-center"},"TOTAL")])],-1)),Me={class:"text-left"},Qe={class:"text-right"},Fe={class:"text-right"},Ne={class:"text-right"},Be={class:"text-right"},Ge={class:"text-right"},He={class:"col-md-12 col-sm-12 col-xs-12 q-pa-md"},$e=r(()=>e("thead",null,[e("tr",null,[e("th",{class:"text-center"},"CATEGORY"),e("th",{class:"text-center"},"Findings / Observations"),e("th",{class:"text-center"},"Recommendations")])],-1)),ze={class:"text-left"},We={class:"text-right"},Ye={class:"text-right"},je={class:"text-right"},Je={class:"col-md-12 col-sm-12 col-xs-12 q-pa-md"},Ke={class:"col-md-12 col-sm-12 col-xs-12 q-pa-md"},Xe=r(()=>e("thead",null,[e("tr",null,[e("th",{class:"text-center",rowspan:"2"}),e("th",{class:"text-center",colspan:"2"},"Number of cases reported"),e("th",{class:"text-center",rowspan:"2"},[b(" REMARKS"),e("br"),e("span",{class:"text-caption"}," (causes/updates) ")])]),e("tr",null,[e("th",{class:"text-center"},"During the year of visit"),e("th",{class:"text-center"},"During previous year")])],-1)),Ze={class:"text-left"},eo={class:"text-right"},oo={class:"text-right"},lo={class:"text-right"},so={class:"col-md-12 col-sm-12 col-xs-12 q-pa-md"},to={class:"col-md-12 col-sm-12 col-xs-12 q-pa-md"},ao={class:"col-md-12 col-sm-12 col-xs-12 q-pa-md"},no={class:"col-md-12 col-sm-12 col-xs-12 q-pa-md"},io={class:"col-md-4 col-sm-4 col-xs-12 q-pa-md"},ro={class:"col-md-7 col-sm-7 col-xs-12 q-pa-md"},mo={class:"col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center"},co={class:"row col-md-12"},po={class:"col-md-6 col-sm-6 col-xs-12"},uo={class:"col-md-6 col-sm-6 col-xs-12 text-right"},_o={class:"q-gutter-sm"};function vo(o,s,_,U,R,v){return m(),c("div",null,[e("div",Q,[l(O,null,{default:n(()=>[l(y,{class:"bg-amber-7"},{default:n(()=>[e("div",F,[l(C,{name:"edit_square",size:"sm"}),N])]),_:1}),l(y,null,{default:n(()=>[e("div",B,[G,H,e("div",$,[z,e("div",W,[l(d,{dense:"",modelValue:o.liberty_in,"onUpdate:modelValue":s[0]||(s[0]=t=>o.liberty_in=t)},null,8,["modelValue"])])]),e("div",Y,[j,e("div",J,[l(d,{type:"date",dense:"",modelValue:o.date_conducted,"onUpdate:modelValue":s[1]||(s[1]=t=>o.date_conducted=t)},null,8,["modelValue"])])]),K]),e("div",X,[Z,e("div",ee,[l(w,{bordered:"",class:"rounded-borders"},{default:n(()=>[l(u,{"expand-separator":"",label:"I.    Composition of the CHR Visiting Team: (Name and designation)"},{default:n(()=>[l(i),e("div",oe,[(m(!0),c(f,null,h(o.teamComposition,(t,p)=>(m(),c("div",{class:"row q-col-gutter-sm",key:p},[e("div",le,V(p+1)+". ",1),e("div",se,[l(d,{type:"text",dense:"",label:"Member Name",modelValue:t.member_name,"onUpdate:modelValue":a=>t.member_name=a},null,8,["modelValue","onUpdate:modelValue"])]),e("div",te,[l(d,{type:"text",dense:"",label:"Position",modelValue:t.member_position,"onUpdate:modelValue":a=>t.member_position=a},null,8,["modelValue","onUpdate:modelValue"])]),e("div",de,[l(g,{round:"",color:"green-7",icon:"add",size:"xs",onClick:v.onAddRow},null,8,["onClick"])])]))),128))])]),_:1}),l(i),l(u,{"expand-separator":"",label:"II.     Profile of the Place of Deprivation of Liberty (POD):"},{default:n(()=>[l(i),e("div",ae,[e("div",ne,[ie,e("div",re,[l(d,{dense:"",modelValue:o.pod_address,"onUpdate:modelValue":s[2]||(s[2]=t=>o.pod_address=t),label:"Address of the POD:"},null,8,["modelValue"])])]),e("div",me,[ce,e("div",pe,[l(d,{dense:"",modelValue:o.pod_address,"onUpdate:modelValue":s[3]||(s[3]=t=>o.pod_address=t),label:"Contact Information:"},null,8,["modelValue"])])]),e("div",ue,[_e,e("div",ve,[l(d,{dense:"",modelValue:o.pod_address,"onUpdate:modelValue":s[4]||(s[4]=t=>o.pod_address=t),label:"Name of the Head of POD:"},null,8,["modelValue"])])]),e("div",ge,[fe,e("div",he,[l(d,{dense:"",modelValue:o.pod_address,"onUpdate:modelValue":s[5]||(s[5]=t=>o.pod_address=t),label:"Ideal Capacity:"},null,8,["modelValue"])])]),Ve,e("div",be,[ye,e("div",Ie,[l(d,{type:"number",dense:"",modelValue:o.pod_male,"onUpdate:modelValue":s[6]||(s[6]=t=>o.pod_male=t),label:"Male/Boy:"},null,8,["modelValue"])]),e("div",Te,[l(d,{type:"number",dense:"",modelValue:o.pod_female,"onUpdate:modelValue":s[7]||(s[7]=t=>o.pod_female=t),label:"Female/Girl:"},null,8,["modelValue"])]),e("div",Pe,[l(d,{dense:"",modelValue:o.pod_total,"onUpdate:modelValue":s[8]||(s[8]=t=>o.pod_total=t),label:"TOTAL",disable:""},null,8,["modelValue"])])]),e("div",xe,[De,e("div",Ue,[l(d,{type:"number",dense:"",modelValue:o.pod_lgbtq,"onUpdate:modelValue":s[9]||(s[9]=t=>o.pod_lgbtq=t),label:"No. of PDL who identified themselves as LGBTQ+:"},null,8,["modelValue"])])]),e("div",Re,[Ce,e("div",Oe,[l(d,{type:"number",dense:"",modelValue:o.pod_personnel_total,"onUpdate:modelValue":s[10]||(s[10]=t=>o.pod_personnel_total=t),label:"Total number of POD personnel:",disable:""},null,8,["modelValue"])])]),e("div",we,[ke,e("div",Ae,[l(d,{type:"number",dense:"",modelValue:o.pod_custodial,"onUpdate:modelValue":s[11]||(s[11]=t=>o.pod_custodial=t),label:"Custodial personnel:"},null,8,["modelValue"])]),e("div",qe,[l(d,{type:"number",dense:"",modelValue:o.pod_admin,"onUpdate:modelValue":s[12]||(s[12]=t=>o.pod_admin=t),label:"Administrative personnel:"},null,8,["modelValue"])]),e("div",Se,[l(d,{type:"number",dense:"",modelValue:o.pod_medical,"onUpdate:modelValue":s[13]||(s[13]=t=>o.pod_medical=t),label:"Medical/health personnel:"},null,8,["modelValue"])])])])]),_:1}),l(i),l(u,{"expand-separator":"",label:"III.     Special Categories of the Persons Deprived of Liberty:"},{default:n(()=>[l(i),e("div",Le,[l(I,{separator:"cell","wrap-cells":""},{default:n(()=>[Ee,e("tbody",null,[(m(!0),c(f,null,h(o.special_categories_pdl,(t,p)=>(m(),c("tr",{key:p},[e("td",Me,V(t.categ),1),e("td",Qe,[l(d,{outlined:"",type:"number",modelValue:o.older_person_m,"onUpdate:modelValue":s[14]||(s[14]=a=>o.older_person_m=a),dense:"",min:"0"},null,8,["modelValue"])]),e("td",Fe,[l(d,{outlined:"",type:"number",modelValue:o.older_person_f,"onUpdate:modelValue":s[15]||(s[15]=a=>o.older_person_f=a),dense:"",min:"0"},null,8,["modelValue"])]),e("td",Ne,[l(d,{outlined:"",type:"number",modelValue:o.older_person_l,"onUpdate:modelValue":s[16]||(s[16]=a=>o.older_person_l=a),dense:"",min:"0"},null,8,["modelValue"])]),e("td",Be,[l(d,{outlined:"",type:"number",modelValue:o.older_person_t,"onUpdate:modelValue":s[17]||(s[17]=a=>o.older_person_t=a),dense:"",min:"0"},null,8,["modelValue"])]),e("td",Ge,[l(d,{outlined:"",modelValue:o.older_person_remarks,"onUpdate:modelValue":s[18]||(s[18]=a=>o.older_person_remarks=a),dense:""},null,8,["modelValue"])])]))),128))])]),_:1})])]),_:1}),l(i),l(u,{"expand-separator":"",label:"IV.     Findings/Observations:",caption:`(Organize categories based on Situation Report / Mandela Rules)\r
`},{default:n(()=>[l(i),e("div",He,[l(I,{separator:"cell","wrap-cells":""},{default:n(()=>[$e,e("tbody",null,[(m(!0),c(f,null,h(o.findings_observation,(t,p)=>(m(),c("tr",{key:p},[e("td",ze,V(t.categ),1),e("td",We,[l(d,{outlined:"",modelValue:o.older_person_remarks,"onUpdate:modelValue":s[19]||(s[19]=a=>o.older_person_remarks=a),dense:""},null,8,["modelValue"])]),e("td",Ye,[l(d,{outlined:"",modelValue:o.older_person_remarks,"onUpdate:modelValue":s[20]||(s[20]=a=>o.older_person_remarks=a),dense:""},null,8,["modelValue"])]),e("td",je,[l(d,{outlined:"",modelValue:o.older_person_remarks,"onUpdate:modelValue":s[21]||(s[21]=a=>o.older_person_remarks=a),dense:""},null,8,["modelValue"])])]))),128))])]),_:1})])]),_:1}),l(i),l(u,{"expand-separator":"",label:"V.  Programs and Services for PDLs",caption:"(legal, social welfare, psychosocial, livelihood, etc.)"},{default:n(()=>[l(i),e("div",Je,[l(d,{type:"textarea",outlined:"",modelValue:o.programs_services,"onUpdate:modelValue":s[22]||(s[22]=t=>o.programs_services=t),dense:""},null,8,["modelValue"])])]),_:1}),l(i),l(u,{"expand-separator":"",label:"VI.      Incidences reported / monitored, if any",caption:"(perpetrated by POD personnel or other PDL)"},{default:n(()=>[l(i),e("div",Ke,[l(I,{separator:"cell","wrap-cells":""},{default:n(()=>[Xe,e("tbody",null,[(m(!0),c(f,null,h(o.incidences_reported,(t,p)=>(m(),c("tr",{key:p},[e("td",Ze,V(t.categ),1),e("td",eo,[l(d,{outlined:"",type:"number",modelValue:o.older_person_m,"onUpdate:modelValue":s[23]||(s[23]=a=>o.older_person_m=a),dense:"",min:"0"},null,8,["modelValue"])]),e("td",oo,[l(d,{outlined:"",type:"number",modelValue:o.older_person_f,"onUpdate:modelValue":s[24]||(s[24]=a=>o.older_person_f=a),dense:"",min:"0"},null,8,["modelValue"])]),e("td",lo,[l(d,{outlined:"",modelValue:o.older_person_remarks,"onUpdate:modelValue":s[25]||(s[25]=a=>o.older_person_remarks=a),dense:""},null,8,["modelValue"])])]))),128))])]),_:1})])]),_:1}),l(i),l(u,{"expand-separator":"",label:"VII. Actions taken by the POD personnel"},{default:n(()=>[l(i),e("div",so,[l(d,{type:"textarea",outlined:"",modelValue:o.programs_services,"onUpdate:modelValue":s[26]||(s[26]=t=>o.programs_services=t),dense:""},null,8,["modelValue"])])]),_:1}),l(i),l(u,{"expand-separator":"",label:"VIII. Actions taken by the CHR visiting team"},{default:n(()=>[l(i),e("div",to,[l(d,{type:"textarea",outlined:"",modelValue:o.programs_services,"onUpdate:modelValue":s[27]||(s[27]=t=>o.programs_services=t),dense:""},null,8,["modelValue"])])]),_:1}),l(i),l(u,{"expand-separator":"",label:"IX.   Recommendations / Actions to be taken"},{default:n(()=>[l(i),e("div",ao,[l(d,{type:"textarea",outlined:"",modelValue:o.programs_services,"onUpdate:modelValue":s[28]||(s[28]=t=>o.programs_services=t),dense:""},null,8,["modelValue"])])]),_:1}),l(i),l(u,{"expand-separator":"",label:"Monitoring Tools Used"},{default:n(()=>[l(i),e("div",no,[(m(!0),c(f,null,h(o.monitotingToolsUsed,(t,p)=>(m(),c("div",{class:"row q-col-gutter-sm",key:p},[e("div",io,[l(x,{dense:"",outlined:"","input-debounce":"0",options:o.genderMoniToolOptions,modelValue:t.genderTools,"onUpdate:modelValue":a=>t.genderTools=a},{"no-option":n(()=>[l(T,null,{default:n(()=>[l(P,{class:"text-italic text-grey"},{default:n(()=>[b(" No data available ")]),_:1})]),_:1})]),_:2},1032,["options","modelValue","onUpdate:modelValue"])]),e("div",ro,[l(x,{dense:"",outlined:"","input-debounce":"0",options:o.moniToolsOptions,modelValue:t.monitoringTools,"onUpdate:modelValue":a=>t.monitoringTools=a},{"no-option":n(()=>[l(T,null,{default:n(()=>[l(P,{class:"text-italic text-grey"},{default:n(()=>[b(" No data available ")]),_:1})]),_:1})]),_:2},1032,["options","modelValue","onUpdate:modelValue"])]),e("div",mo,[l(g,{round:"",color:"green-7",icon:"add",size:"xs",onClick:v.onAddMonitoringTool},null,8,["onClick"])])]))),128))])]),_:1})]),_:1})])])]),_:1}),l(y,null,{default:n(()=>[l(k,null,{default:n(()=>[e("div",co,[e("div",po,[l(g,{label:"Back",icon:"arrow_back",color:"red",flat:"",onClick:s[29]||(s[29]=t=>v.onBack())})]),e("div",uo,[e("div",_o,[l(g,{label:"Save",icon:"save",color:"green",onClick:s[30]||(s[30]=t=>v.onSave())}),l(g,{label:"Cancel",icon:"close",color:"red"})])])])]),_:1})]),_:1})]),_:1})])])}var go=D(M,[["render",vo],["__scopeId","data-v-02ff6df8"]]);const fo=L({components:{VisitationReportForm:go},data:()=>({search:""}),computed:{},methods:{initApp(){}},mounted(){this.initApp()}}),ho={class:"form-main"};function Vo(o,s,_,U,R,v){const t=E("VisitationReportForm");return m(),c("div",null,[e("div",ho,[l(t)])])}var Bo=D(fo,[["render",Vo]]);export{Bo as default};
