import{Q as H}from"./QIcon.89b2ae27.js";import{R as Be}from"./QBtn.c3151272.js";import{a as $e,c as N,h as de,e as xe}from"./render.04c64b32.js";import{l as Me,m as Z,aj as be,r as w,s as v,b as he,a as De,C as Qe,h as b,M as ve,I as Ee,F as Fe,g as te,ai as We,w as z,q as je,R as Ke,S as Ve}from"./index.abf366c9.js";import{u as Oe}from"./focus-manager.8e1b27e8.js";import{Q as ze}from"./QResizeObserver.cad93c08.js";import{m as ee,g as fe}from"./format.921e47b3.js";import{r as He}from"./QSelect.2543a518.js";import{u as Ne,a as Ue,b as Ge,c as Xe}from"./use-panel.87459ffc.js";import{u as pe,a as Je}from"./use-dark.f54a1a29.js";let Ye=0;const Ze=["click","keydown"],et={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ye++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function tt(e,q,m,c){const o=Me(be,Z);if(o===Z)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Z;const{proxy:Q}=te(),L=w(null),B=w(null),F=w(null),U=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),$=v(()=>o.currentModel.value===e.name),G=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+($.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),I=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=v(()=>e.disable===!0||o.hasFocus.value===!0||$.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function y(l,h){if(h!==!0&&L.value!==null&&L.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&ve(l);return}if(c===void 0){o.updateModel({name:e.name}),m("click",l);return}if(c.hasRouterLink.value===!0){const T=(f={})=>{let C;const P=f.to===void 0||We(f.to,e.to)===!0?o.avoidRouteWatcher=Oe():null;return c.navigateToRouterLink(l,{...f,returnRouterError:!0}).catch(A=>{C=A}).then(A=>{if(P===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,C===void 0&&(A===void 0||A.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),f.returnRouterError===!0)return C!==void 0?Promise.reject(C):A})};m("click",l,T),l.defaultPrevented!==!0&&T();return}m("click",l)}function R(l){Ee(l,[13,32])?y(l,!0):Fe(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&o.onKbdNavigate(l.keyCode,Q.$el)===!0&&ve(l),m("keydown",l)}function E(){const l=o.tabProps.value.narrowIndicator,h=[],T=b("div",{ref:F,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&h.push(b(H,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&h.push(b("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&h.push(e.alertIcon!==void 0?b(H,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):b("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&h.push(T);const f=[b("div",{class:"q-focus-helper",tabindex:-1,ref:L}),b("div",{class:I.value},$e(q.default,h))];return l===!1&&f.push(T),f}const x={name:v(()=>e.name),rootRef:B,tabIndicatorRef:F,routeData:c};he(()=>{o.unregisterTab(x)}),De(()=>{o.registerTab(x)});function W(l,h){const T={ref:B,class:G.value,tabindex:g.value,role:"tab","aria-selected":$.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:y,onKeydown:R,...h};return Qe(b(l,T,E()),[[Be,U.value]])}return{renderTab:W,$tabs:o}}var bt=N({name:"QTab",props:et,emits:Ze,setup(e,{slots:q,emit:m}){const{renderTab:c}=tt(e,q,m);return()=>c("div")}});function at(e,q,m){const c=m===!0?["left","right"]:["top","bottom"];return`absolute-${q===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const nt=["left","center","right","justify"];var ht=N({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>nt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:q,emit:m}){const{proxy:c}=te(),{$q:o}=c,{registerTick:Q}=ee(),{registerTick:L}=ee(),{registerTick:B}=ee(),{registerTimeout:F,removeTimeout:U}=fe(),{registerTimeout:$,removeTimeout:G}=fe(),I=w(null),g=w(null),y=w(e.modelValue),R=w(!1),E=w(!0),x=w(!1),W=w(!1),l=[],h=w(0),T=w(!1);let f=null,C=null,P;const A=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:at(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),me=v(()=>{const t=h.value,a=y.value;for(let n=0;n<t;n++)if(l[n].name.value===a)return!0;return!1}),ge=v(()=>`q-tabs__content--align-${R.value===!0?"left":W.value===!0?"justify":e.align}`),Te=v(()=>`q-tabs row no-wrap items-center q-tabs--${R.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),we=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),j=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),K=v(()=>e.vertical!==!0&&o.lang.rtl===!0),X=v(()=>He===!1&&K.value===!0);z(K,D),z(()=>e.modelValue,t=>{p({name:t,setCurrent:!0,skipEmit:!0})}),z(()=>e.outsideArrows,V);function p({name:t,setCurrent:a,skipEmit:n}){y.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&m("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(qe(y.value,t),y.value=t))}function V(){Q(()=>{ae({width:I.value.offsetWidth,height:I.value.offsetHeight})})}function ae(t){if(j.value===void 0||g.value===null)return;const a=t[j.value.container],n=Math.min(g.value[j.value.scroll],Array.prototype.reduce.call(g.value.children,(u,i)=>u+(i[j.value.content]||0),0)),s=a>0&&n>a;R.value=s,s===!0&&L(D),W.value=a<parseInt(e.breakpoint,10)}function qe(t,a){const n=t!=null&&t!==""?l.find(u=>u.name.value===t):null,s=a!=null&&a!==""?l.find(u=>u.name.value===a):null;if(n&&s){const u=n.tabIndicatorRef.value,i=s.tabIndicatorRef.value;f!==null&&(clearTimeout(f),f=null),u.style.transition="none",u.style.transform="none",i.style.transition="none",i.style.transform="none";const r=u.getBoundingClientRect(),d=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${r.top-d.top}px,0) scale3d(1,${d.height?r.height/d.height:1},1)`:`translate3d(${r.left-d.left}px,0,0) scale3d(${d.width?r.width/d.width:1},1,1)`,B(()=>{f=setTimeout(()=>{f=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}s&&R.value===!0&&M(s.rootRef.value)}function M(t){const{left:a,width:n,top:s,height:u}=g.value.getBoundingClientRect(),i=t.getBoundingClientRect();let r=e.vertical===!0?i.top-s:i.left-a;if(r<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(r),D();return}r+=e.vertical===!0?i.height-u:i.width-n,r>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(r),D())}function D(){const t=g.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);K.value===!0?(E.value=Math.ceil(n+a.width)<t.scrollWidth-1,x.value=n>0):(E.value=n>0,x.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function ne(t){C!==null&&clearInterval(C),C=setInterval(()=>{Pe(t)===!0&&k()},5)}function le(){ne(X.value===!0?Number.MAX_SAFE_INTEGER:0)}function re(){ne(X.value===!0?0:Number.MAX_SAFE_INTEGER)}function k(){C!==null&&(clearInterval(C),C=null)}function Ce(t,a){const n=Array.prototype.filter.call(g.value.children,d=>d===a||d.matches&&d.matches(".q-tab.q-focusable")===!0),s=n.length;if(s===0)return;if(t===36)return M(n[0]),n[0].focus(),!0;if(t===35)return M(n[s-1]),n[s-1].focus(),!0;const u=t===(e.vertical===!0?38:37),i=t===(e.vertical===!0?40:39),r=u===!0?-1:i===!0?1:void 0;if(r!==void 0){const d=K.value===!0?-1:1,_=n.indexOf(a)+r*d;return _>=0&&_<s&&(M(n[_]),n[_].focus({preventScroll:!0})),!0}}const ye=v(()=>X.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Pe(t){const a=g.value,{get:n,set:s}=ye.value;let u=!1,i=n(a);const r=t<i?-1:1;return i+=r*5,i<0?(u=!0,i=0):(r===-1&&i<=t||r===1&&i>=t)&&(u=!0,i=t),s(a,i),D(),u}function oe(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function _e(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=l.filter(r=>r.routeData!==void 0&&r.routeData.hasRouterLink.value===!0),{hash:s,query:u}=c.$route,i=Object.keys(u).length;for(const r of n){const d=r.routeData.exact.value===!0;if(r.routeData[d===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:_,query:J,matched:Ie,href:Ae}=r.routeData.resolvedLink.value,Y=Object.keys(J).length;if(d===!0){if(_!==s||Y!==i||oe(u,J)===!1)continue;t=r.name.value;break}if(_!==""&&_!==s||Y!==0&&oe(J,u)===!1)continue;const S={matchedLen:Ie.length,queryDiff:i-Y,hrefLen:Ae.length-_.length};if(S.matchedLen>a.matchedLen){t=r.name.value,a=S;continue}else if(S.matchedLen!==a.matchedLen)continue;if(S.queryDiff<a.queryDiff)t=r.name.value,a=S;else if(S.queryDiff!==a.queryDiff)continue;S.hrefLen>a.hrefLen&&(t=r.name.value,a=S)}t===null&&l.some(r=>r.routeData===void 0&&r.name.value===y.value)===!0||p({name:t,setCurrent:!0})}function Re(t){if(U(),T.value!==!0&&I.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&I.value.contains(a)===!0&&(T.value=!0,R.value===!0&&M(a))}}function ke(){F(()=>{T.value=!1},30)}function O(){se.avoidRouteWatcher===!1?$(_e):G()}function ie(){if(P===void 0){const t=z(()=>c.$route.fullPath,O);P=()=>{t(),P=void 0}}}function Se(t){l.push(t),h.value++,V(),t.routeData===void 0||c.$route===void 0?$(()=>{if(R.value===!0){const a=y.value,n=a!=null&&a!==""?l.find(s=>s.name.value===a):null;n&&M(n.rootRef.value)}}):(ie(),t.routeData.hasRouterLink.value===!0&&O())}function Le(t){l.splice(l.indexOf(t),1),h.value--,V(),P!==void 0&&t.routeData!==void 0&&(l.every(a=>a.routeData===void 0)===!0&&P(),O())}const se={currentModel:y,tabProps:A,hasFocus:T,hasActiveTab:me,registerTab:Se,unregisterTab:Le,verifyRouteModel:O,updateModel:p,onKbdNavigate:Ce,avoidRouteWatcher:!1};je(be,se);function ue(){f!==null&&clearTimeout(f),k(),P!==void 0&&P()}let ce;return he(ue),Ke(()=>{ce=P!==void 0,ue()}),Ve(()=>{ce===!0&&ie(),V()}),()=>b("div",{ref:I,class:Te.value,role:"tablist",onFocusin:Re,onFocusout:ke},[b(ze,{onResize:ae}),b("div",{ref:g,class:we.value,onScroll:D},de(q.default)),b(H,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:le,onTouchstartPassive:le,onMouseupPassive:k,onMouseleavePassive:k,onTouchendPassive:k}),b(H,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(x.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:re,onTouchstartPassive:re,onMouseupPassive:k,onMouseleavePassive:k,onTouchendPassive:k})])}}),mt=N({name:"QTabPanel",props:Ne,setup(e,{slots:q}){return()=>b("div",{class:"q-tab-panel",role:"tabpanel"},de(q.default))}}),gt=N({name:"QTabPanels",props:{...Ue,...pe},emits:Ge,setup(e,{slots:q}){const m=te(),c=Je(e,m.proxy.$q),{updatePanelsList:o,getPanelContent:Q,panelDirectives:L}=Xe(),B=v(()=>"q-tab-panels q-panel-parent"+(c.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(q),xe("div",{class:B.value},Q(),"pan",e.swipeable,()=>L.value))}});export{ht as Q,gt as a,bt as b,mt as c};