import{d as _,M as k,N as I,h as u,O as i,a3 as r,e as o,b as p,t as d,F as C,x as w,y as V,p as M,m as P,o as c,A as S,_ as y,g as v}from"./index-M6l4noiw.js";import{A as g}from"./Arrow-NfIOB5oo.js";const h=s=>(M("data-v-eb47c90d"),s=s(),P(),s),A={key:0,class:"pagination"},N={class:"pagination-item"},b=h(()=>o("span",null,"...",-1)),B=["onClick"],$=h(()=>o("span",null,"...",-1)),D={class:"pagination-item"},F=_({__name:"Pagination",props:k({pages:{}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(s){const a=I(s,"modelValue");return(e,n)=>e.pages.length>1?(c(),u("div",A,[i(o("div",{class:"slide",onClick:n[0]||(n[0]=t=>a.value--)},[p(g,{class:"icon-arrow",direction:"left"})],512),[[r,a.value!==e.pages[0]]]),i(o("template",null,[o("div",N,d(e.pages[0]),1),b],512),[[r,a.value>3]]),(c(!0),u(C,null,w(e.pages,t=>(c(),u("div",{class:S(["pagination-item",t===a.value?"_active":""]),key:t,onClick:l=>a.value=t},d(t),11,B))),128)),i(o("template",null,[$,o("div",D,d(e.pages[0]),1)],512),[[r,a.value<e.pages[e.pages.length]-3]]),i(o("div",{class:"slide",onClick:n[1]||(n[1]=t=>a.value++)},[p(g,{class:"icon-arrow",direction:"right"})],512),[[r,a.value!==e.pages[e.pages.length-1]]])])):V("",!0)}}),E=y(F,[["__scopeId","data-v-eb47c90d"]]);function m(s,a){const e=[];for(let n=s;n<=a;n++)e.push(n);return e}function L({items:s,limit:a,currentPage:e}){const n=v(()=>{if(!s.value.length)return[];const l=Math.ceil(s.value.length/a.value);return m(1,l)}),t=v(()=>{if(!s.value.length)return[];const l=a.value*(e.value-1),f=Math.min(a.value*e.value-1,s.value.length-1);return m(l,f)});return{pages:n,currentInds:t}}export{E as P,L as u};
