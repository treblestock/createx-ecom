import{d as H,M as G,N as S,a as z,o as u,h as b,e as h,b as V,w,l as Z,_ as x,F as O,x as q,c as $,t as K,g,r as y,$ as te,u as r,a0 as oe,i as re,n as le,C as se,q as Q,E as ae,A as ne,v as f,y as D,a1 as ie,a2 as de,K as ue,O as ce,a3 as pe}from"./index-M6l4noiw.js";import{P as ve,u as fe}from"./usePagination-Zxwumez8.js";import{P as me}from"./ProductCard-YNMIkhHa.js";import{C as Ce}from"./ColorInput-mzUfE1Ij.js";import{c as ge,d as F}from"./strings-Htb0e1Do.js";import{c as N,a as Ve,s as ye,d as _e,m as he,e as be,f as Se}from"./different-YukEj1iR.js";import{u as Me,M as Pe}from"./useViewPort-WceNZfIV.js";import{u as we}from"./useFetch-3JQEh6Nq.js";import{M as Ue}from"./MailingSubscribtion-beFizzct.js";import"./Arrow-NfIOB5oo.js";import"./Rating-v-HkOq_1.js";import"./useMobileSidebar-H43qyYrh.js";const Te={class:"sort-and-filters"},Fe={class:"toolbar"},$e=H({__name:"ProductsSortAndPagination",props:G({pages:{},sortOptions:{}},{selectedSort:{required:!0},currentPage:{required:!0},limit:{required:!0}}),emits:["update:selectedSort","update:currentPage","update:limit"],setup(s){const t=S(s,"selectedSort"),c=S(s,"currentPage"),p=S(s,"limit");return(v,i)=>{const d=z("SelectGroup"),m=z("InputNumberGroup");return u(),b("div",Te,[h("div",Fe,[V(d,{class:"sort",classSelect:"sort-select",vertical:"",modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=a=>t.value=a),options:v.sortOptions},{default:w(()=>[Z(" Sort by ")]),_:1},8,["modelValue","options"]),V(m,{class:"limit",vertical:"",modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=a=>p.value=a)},{default:w(()=>[Z(" Show ")]),_:1},8,["modelValue"])]),V(ve,{class:"pagination",pages:v.pages,modelValue:c.value,"onUpdate:modelValue":i[2]||(i[2]=a=>c.value=a)},null,8,["pages","modelValue"])])}}}),J=x($e,[["__scopeId","data-v-327cb29a"]]),xe={class:"colors"},ze=H({__name:"ProductColorFilter",props:G({possibleValues:{}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(s){const t=S(s,"modelValue");return(c,p)=>(u(),b("div",xe,[(u(!0),b(O,null,q(c.possibleValues,(v,i)=>(u(),$(Ce,{class:"product-color",key:i,modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=d=>t.value=d),value:v,name:"productColors"},null,8,["modelValue","value"]))),128))]))}}),He=x(ze,[["__scopeId","data-v-2f342788"]]),ke={class:"filter-spoiler-inner"},Ie=H({__name:"ProductCheckboxFilter",props:G({possibleValues:{}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(s){const t=S(s,"modelValue");return(c,p)=>{const v=z("CheckboxGroup");return u(),b("div",ke,[(u(!0),b(O,null,q(c.possibleValues,i=>(u(),$(v,{class:"filter-item",key:i,modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=d=>t.value=d),value:i},{default:w(()=>[Z(K(i),1)]),_:2},1032,["modelValue","value"]))),128))])}}}),Be=x(Ie,[["__scopeId","data-v-15fd87f2"]]),Ze={class:"product-filters"},Oe=H({__name:"ProductFilters",props:{categoryMinorClothType:{required:!0},brand:{required:!0},materials:{required:!0},sizes:{required:!0},colors:{required:!0}},emits:["update:categoryMinorClothType","update:brand","update:materials","update:sizes","update:colors"],setup(s){const t=S(s,"categoryMinorClothType"),c=S(s,"brand"),p=S(s,"materials"),v=S(s,"sizes"),i=S(s,"colors"),d={clothes:g(()=>N.filter(n=>F(n,a.value.clothes))),accessories:g(()=>Ve.filter(n=>F(n,a.value.accessories))),shoes:g(()=>ye.filter(n=>F(n,a.value.shoes))),brand:g(()=>_e.filter(n=>F(n,a.value.brand))),material:g(()=>he.filter(n=>F(n,a.value.material))),color:g(()=>be),size:g(()=>Se.filter(n=>F(n,a.value.size)))},m={clothes:t,accessories:t,shoes:t,brand:c,material:p,color:i,size:v},a=y({clothes:"",accessories:"",shoes:"",brand:"",material:"",size:""}),M={color:He};g(()=>N.filter(n=>F(n,a.value.clothes)));function P(n){return M[n]||Be}function A(n){return d[n].value}return(n,j)=>{const L=z("Input"),I=z("Spoiler");return u(),b("div",Ze,[(u(),b(O,null,q(d,(E,C)=>V(I,{class:"filter-spoiler",maxBodyHeight:"22rem",key:C,innerBorder:""},te({title:w(()=>[Z(K(r(ge)(C)),1)]),default:w(()=>[(u(),$(oe(P(C)),{modelValue:m[C].value,"onUpdate:modelValue":_=>m[C].value=_,possibleValues:A(C)},null,8,["modelValue","onUpdate:modelValue","possibleValues"]))]),_:2},[C in r(a)?{name:"header",fn:w(()=>[V(L,{class:"spoiler _s",modelValue:r(a)[C],"onUpdate:modelValue":_=>r(a)[C]=_,placeholder:"Search for clothes type"},null,8,["modelValue","onUpdate:modelValue"])]),key:"0"}:void 0]),1024)),64))])}}}),X=x(Oe,[["__scopeId","data-v-f01f0f43"]]),qe={},Ae={class:"icon-wrapper"},Le=re('<svg class="icon icon-idle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fe1120e1><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.5C7.05228 9.5 7.5 9.94771 7.5 10.5L7.5 21.75C7.5 22.3023 7.05229 22.75 6.5 22.75C5.94772 22.75 5.5 22.3023 5.5 21.75L5.5 10.5C5.5 9.94771 5.94772 9.5 6.5 9.5Z" fill="currentColor" data-v-fe1120e1></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1.25C7.05228 1.25 7.5 1.69772 7.5 2.25V5.25C7.5 5.80228 7.05228 6.25 6.5 6.25C5.94771 6.25 5.5 5.80228 5.5 5.25V2.25C5.5 1.69772 5.94772 1.25 6.5 1.25Z" fill="currentColor" data-v-fe1120e1></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 7.25C1 5.59315 2.34315 4.25 4 4.25H9C10.6569 4.25 12 5.59315 12 7.25V8.5C12 10.1569 10.6569 11.5 9 11.5H4C2.34315 11.5 1 10.1569 1 8.5V7.25ZM4 6.25C3.44772 6.25 3 6.69772 3 7.25V8.5C3 9.05228 3.44772 9.5 4 9.5H9C9.55228 9.5 10 9.05228 10 8.5V7.25C10 6.69772 9.55228 6.25 9 6.25H4Z" fill="currentColor" data-v-fe1120e1></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 17.75C18.0523 17.75 18.5 18.1977 18.5 18.75V21.75C18.5 22.3023 18.0523 22.75 17.5 22.75C16.9477 22.75 16.5 22.3023 16.5 21.75V18.75C16.5 18.1977 16.9477 17.75 17.5 17.75Z" fill="currentColor" data-v-fe1120e1></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1.25C18.0523 1.25 18.5 1.69772 18.5 2.25V13.5C18.5 14.0523 18.0523 14.5 17.5 14.5C16.9477 14.5 16.5 14.0523 16.5 13.5V2.25C16.5 1.69772 16.9477 1.25 17.5 1.25Z" fill="currentColor" data-v-fe1120e1></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5C12 13.8431 13.3431 12.5 15 12.5H20C21.6569 12.5 23 13.8431 23 15.5V16.75C23 18.4069 21.6569 19.75 20 19.75H15C13.3431 19.75 12 18.4069 12 16.75V15.5ZM15 14.5C14.4477 14.5 14 14.9477 14 15.5V16.75C14 17.3023 14.4477 17.75 15 17.75H20C20.5523 17.75 21 17.3023 21 16.75V15.5C21 14.9477 20.5523 14.5 20 14.5H15Z" fill="currentColor" data-v-fe1120e1></path></svg><svg class="icon icon-active" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fe1120e1><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 9.5C18.0523 9.5 18.5 9.94771 18.5 10.5V21.75C18.5 22.3023 18.0523 22.75 17.5 22.75C16.9477 22.75 16.5 22.3023 16.5 21.75L16.5 10.5C16.5 9.94771 16.9477 9.5 17.5 9.5Z" fill="currentColor" data-v-fe1120e1></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1.25C18.0523 1.25 18.5 1.69772 18.5 2.25V5.25C18.5 5.80228 18.0523 6.25 17.5 6.25C16.9477 6.25 16.5 5.80228 16.5 5.25V2.25C16.5 1.69772 16.9477 1.25 17.5 1.25Z" fill="currentColor" data-v-fe1120e1></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12 5.59315 13.3431 4.25 15 4.25H20C21.6569 4.25 23 5.59315 23 7.25V8.5C23 10.1569 21.6569 11.5 20 11.5H15C13.3431 11.5 12 10.1569 12 8.5V7.25ZM15 6.25C14.4477 6.25 14 6.69772 14 7.25V8.5C14 9.05228 14.4477 9.5 15 9.5H20C20.5523 9.5 21 9.05228 21 8.5V7.25C21 6.69772 20.5523 6.25 20 6.25H15Z" fill="currentColor" data-v-fe1120e1></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 17.75C7.05228 17.75 7.5 18.1977 7.5 18.75V21.75C7.5 22.3023 7.05229 22.75 6.5 22.75C5.94772 22.75 5.5 22.3023 5.5 21.75V18.75C5.5 18.1977 5.94772 17.75 6.5 17.75Z" fill="currentColor" data-v-fe1120e1></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1.25C7.05228 1.25 7.5 1.69772 7.5 2.25V13.5C7.5 14.0523 7.05228 14.5 6.5 14.5C5.94772 14.5 5.5 14.0523 5.5 13.5V2.25C5.5 1.69772 5.94772 1.25 6.5 1.25Z" fill="currentColor" data-v-fe1120e1></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.5C1 13.8431 2.34315 12.5 4 12.5H9C10.6569 12.5 12 13.8431 12 15.5V16.75C12 18.4069 10.6569 19.75 9 19.75H4C2.34315 19.75 1 18.4069 1 16.75V15.5ZM4 14.5C3.44772 14.5 3 14.9477 3 15.5V16.75C3 17.3023 3.44772 17.75 4 17.75H9C9.55228 17.75 10 17.3023 10 16.75V15.5C10 14.9477 9.55228 14.5 9 14.5H4Z" fill="currentColor" data-v-fe1120e1></path></svg>',2),Ee=[Le];function Re(s,t){return u(),b("div",Ae,Ee)}const We=x(qe,[["render",Re],["__scopeId","data-v-fe1120e1"]]);function De(s,t){const c=Array.isArray(s)?s:[s],p=Array.isArray(t)?t:[t];return!!c.find(v=>p.includes(v))}function Ge(s,t,c){const p=t[c].value;return p.size?s.value.filter(v=>{let i=!1;return p.forEach(d=>{i||(i=De(v[c],d))}),i}):s.value}function Ke(s){const t={categorySex:y(new Set),categoryMinorClothType:y(new Set),brand:y(new Set),materials:y(new Set),colors:y(new Set),sizes:y(new Set)};function c(){t.categorySex.value.clear(),t.categoryMinorClothType.value.clear(),t.brand.value.clear(),t.materials.value.clear(),t.colors.value.clear(),t.sizes.value.clear()}return{items:g(()=>Object.keys(t).reduce((i,d)=>g(()=>Ge(i,t,d)),s).value),...t,resetFilters:c}}const je={class:"wrapper"},Qe={class:"products-header"},Ne={class:"toggle-sidebar-text"},Je={class:"sidebar-popuped",ref:"sidebarHtml"},Xe={class:"middle"},Ye={key:0,class:"filters-sidebar"},et={class:"products-main"},tt={class:"products-footer"},ot=840,rt=H({__name:"ProductsGrid",setup(s){const t=y(!0),c=y(null),{data:p}=we(le.getProducts,[]),{items:v,categorySex:i,categoryMinorClothType:d,brand:m,materials:a,sizes:M,colors:P,resetFilters:A}=Ke(p),n=y(!1),j=g(()=>n.value?v.value.filter(l=>l.discount):v.value);function L(){n.value=!1,A()}const I=se();Q(E),ae(I,()=>{L(),E(),U.value=1});function E(){const l=I.query;l.categorySex&&i.value.add(l.categorySex),Object.keys(l).length&&(l.categoryMinorClothType&&d.value.add(l.categoryMinorClothType),l.brand&&m.value.add(l.brand),l.materials&&a.value.add(l.materials),l.sizes&&M.value.add(l.sizes),l.colors&&P.value.add(l.colors),l.sale&&(n.value=!0))}const C={none:void 0,rating:(l,e)=>e.rating-l.rating,"price up":(l,e)=>{const k=l.price*(100-(l.discount||0)),o=e.price*(100-(e.discount||0));return k-o},"price down":(l,e)=>{const k=l.price*(100-(l.discount||0));return e.price*(100-(e.discount||0))-k}},_=y(C.none),B=g(()=>{const l=j.value;return typeof _.value!="function"?l:l.sort(_.value)}),T=y(8),U=y(1),{currentInds:Y,pages:R}=fe({items:B,limit:T,currentPage:U}),{vw:ee}=Me(),W=g(()=>ee.value<ot);return Q(()=>{W.value&&(t.value=!1)}),(l,e)=>{const k=z("Btn");return u(),b("div",je,[h("header",Qe,[V(k,{class:"toggle-sidebar _with-icon btn_l",onClick:e[0]||(e[0]=o=>t.value=!r(t))},{default:w(()=>[V(We,{class:ne({_active:r(t)})},null,8,["class"]),h("span",Ne,K(r(t)?"Hide filters":"Open filters"),1)]),_:1}),V(J,{class:"sorts",selectedSort:r(_),"onUpdate:selectedSort":e[1]||(e[1]=o=>f(_)?_.value=o:null),sortOptions:C,pages:r(R),currentPage:r(U),"onUpdate:currentPage":e[2]||(e[2]=o=>f(U)?U.value=o:null),limit:r(T),"onUpdate:limit":e[3]||(e[3]=o=>f(T)?T.value=o:null)},null,8,["selectedSort","pages","currentPage","limit"])]),r(W)?(u(),$(Pe,{key:0,isShown:r(t),onOpen:e[9]||(e[9]=o=>t.value=!0),onClose:e[10]||(e[10]=o=>t.value=!1),onToggle:e[11]||(e[11]=o=>t.value=!r(t))},{default:w(()=>[h("div",Je,[V(X,{categoryMinorClothType:r(d),"onUpdate:categoryMinorClothType":e[4]||(e[4]=o=>f(d)?d.value=o:null),brand:r(m),"onUpdate:brand":e[5]||(e[5]=o=>f(m)?m.value=o:null),materials:r(a),"onUpdate:materials":e[6]||(e[6]=o=>f(a)?a.value=o:null),sizes:r(M),"onUpdate:sizes":e[7]||(e[7]=o=>f(M)?M.value=o:null),colors:r(P),"onUpdate:colors":e[8]||(e[8]=o=>f(P)?P.value=o:null)},null,8,["categoryMinorClothType","brand","materials","sizes","colors"])],512)]),_:1},8,["isShown"])):D("",!0),h("div",Xe,[r(W)?D("",!0):(u(),$(de,{key:0,name:"shift-right-enter"},{default:w(()=>[(u(),$(ie,null,[r(t)?(u(),b("div",Ye,[V(X,{categoryMinorClothType:r(d),"onUpdate:categoryMinorClothType":e[12]||(e[12]=o=>f(d)?d.value=o:null),brand:r(m),"onUpdate:brand":e[13]||(e[13]=o=>f(m)?m.value=o:null),materials:r(a),"onUpdate:materials":e[14]||(e[14]=o=>f(a)?a.value=o:null),sizes:r(M),"onUpdate:sizes":e[15]||(e[15]=o=>f(M)?M.value=o:null),colors:r(P),"onUpdate:colors":e[16]||(e[16]=o=>f(P)?P.value=o:null)},null,8,["categoryMinorClothType","brand","materials","sizes","colors"])])):D("",!0)],1024))]),_:1})),h("div",et,[h("section",{class:"products-grid grid",ref_key:"productCardsHtml",ref:c},[(u(!0),b(O,null,q(r(Y),o=>(u(),$(me,ue({class:"product-card",key:r(B)[o].id},r(B)[o],{img:r(B)[o].imgs[0]}),null,16,["img"]))),128))],512),h("footer",tt,[ce(V(J,{class:"sorts",selectedSort:r(_),"onUpdate:selectedSort":e[17]||(e[17]=o=>f(_)?_.value=o:null),sortOptions:C,pages:r(R),currentPage:r(U),"onUpdate:currentPage":e[18]||(e[18]=o=>f(U)?U.value=o:null),limit:r(T),"onUpdate:limit":e[19]||(e[19]=o=>f(T)?T.value=o:null)},null,8,["selectedSort","pages","currentPage","limit"]),[[pe,r(R).length>1]])])])])])}}}),lt=x(rt,[["__scopeId","data-v-794c9e27"]]),st={class:"page"},at={class:"section-180"},nt={class:"container"},it={class:"pv-100 bgc-gray-200",id:"subscribe-mailing"},dt={class:"container"},ut=H({__name:"products",setup(s){return(t,c)=>(u(),b("div",st,[h("section",at,[h("div",nt,[V(lt,{class:"products-section"})])]),h("section",it,[h("div",dt,[V(Ue)])])]))}}),St=x(ut,[["__scopeId","data-v-6b46e5f6"]]);export{St as default};