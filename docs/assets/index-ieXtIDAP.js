import{u as S,M as C}from"./useViewPort-WceNZfIV.js";import{_ as p,a as f,o as a,h as m,b as o,w as n,l as c,d as w,g as x,r as A,e as V,u as i,c as _}from"./index-M6l4noiw.js";import"./useMobileSidebar-H43qyYrh.js";const h={},B={class:"account-sidebar"};function g(k,l){const t=f("AppLink");return a(),m("div",B,[o(t,{class:"link h3",to:{name:"contactsFeedback"}},{default:n(()=>[c("Contact Us")]),_:1}),o(t,{class:"link h3",to:{name:"contactsStores"}},{default:n(()=>[c("Outlet Stores")]),_:1}),o(t,{class:"link h3",to:{name:"contactsFAQ"}},{default:n(()=>[c("FAQ")]),_:1})])}const u=p(h,[["render",g],["__scopeId","data-v-23374a32"]]),L={class:"contacts"},$={class:"container"},E=767,I=w({__name:"index",setup(k){const{vw:l}=S(),t=x(()=>l.value<=E),s=A(!1);function v(b){!!(event==null?void 0:event.target).closest(".link")&&(s.value=!1)}return(b,e)=>{const r=f("RouterView");return a(),m("div",L,[V("div",$,[i(t)?(a(),_(C,{key:1,isShown:i(s),onOpen:e[0]||(e[0]=d=>s.value=!0),onClose:e[1]||(e[1]=d=>s.value=!1),onToggle:e[2]||(e[2]=d=>s.value=!i(s))},{default:n(()=>[o(u,{class:"mobile-sidebar",onClick:v})]),_:1},8,["isShown"])):(a(),_(u,{key:0,class:"sidebar"})),o(r,{class:"subpage"})])])}}}),R=p(I,[["__scopeId","data-v-4b24aaa8"]]);export{R as default};