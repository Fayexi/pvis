import{r as O,s as f,w as k,b as C,K as E,J as x,h as H,T as ee,g as te,M as oe}from"./index.abf366c9.js";import{u as ae,e as ne,k as ie,v as q,l as le,f as se,m as re,g as ue,n as ce,o as de,a as fe,h as he,p as ve,r as A,s as me,c as M,q as D,t as ge}from"./format.921e47b3.js";import{c as Te,h as ye}from"./render.04c64b32.js";import{g as pe}from"./scroll.4aa12ad6.js";var Oe=Te({name:"QTooltip",inheritAttrs:!1,props:{...ae,...ne,...ie,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:q},self:{type:String,default:"top middle",validator:q},offset:{type:Array,default:()=>[14,14],validator:le},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...se],setup(e,{slots:j,emit:T,attrs:h}){let i,l;const v=te(),{proxy:{$q:o}}=v,s=O(null),c=O(!1),L=f(()=>D(e.anchor,o.lang.rtl)),Q=f(()=>D(e.self,o.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=re(),{registerTimeout:d}=ue(),{transitionProps:_,transitionStyle:B}=ce(e),{localScrollTarget:y,changeScrollEvent:I,unconfigureScrollTarget:J}=de(e,P),{anchorEl:a,canShow:K,anchorEvents:r}=fe({showing:c,configureAnchorEl:X}),{show:U,hide:m}=he({showing:c,canShow:K,handleShow:$,handleHide:z,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:F,delayHide:G});const{showPortal:p,hidePortal:b,renderPortal:V}=ve(v,s,Z,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&oe(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(g,n=>{(n===!0?ge:A)(t)}),C(()=>{A(t)})}function $(t){p(),N(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=k(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{p(!0),T("show",t)},e.transitionDuration)}function z(t){R(),b(),S(),d(()=>{b(!0),T("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),J(),E(r,"tooltipTemp")}function u(){me({targetEl:s.value,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function F(t){if(o.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const g=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{U(t)},e.delay)}function G(t){o.platform.is.mobile===!0&&(E(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(a.value!==null||e.scrollTarget!==void 0){y.value=pe(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;I(y.value,t)}}function Y(){return c.value===!0?H("div",{...h,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,B.value],role:"tooltip"},ye(j.default)):null}function Z(){return H(ee,_.value,Y)}return C(S),Object.assign(v.proxy,{updatePosition:u}),V}});export{Oe as Q};