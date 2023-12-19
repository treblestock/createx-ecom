import{R as F}from"./Rating-v-HkOq_1.js";import{d as f,z as b,g as v,h as m,F as P,x as $,u as r,o as p,e as n,l as x,t as _,b as u,A as V,_ as h,K as g,p as I,m as y,M as B,N as M,a as R,w as T,Y as D,T as N,r as S,Z as L,v as O,y as q,n as k,c as z}from"./index-M6l4noiw.js";import{I as A}from"./star-ae6Y0R94.js";import{P as H}from"./ProductCard-YNMIkhHa.js";import{P as U}from"./ProductReview-zm_StrL3.js";import{u as C}from"./useFetch-3JQEh6Nq.js";import"./ColorInput-mzUfE1Ij.js";import"./strings-Htb0e1Do.js";import"./share-arrow--7a3DgSC.js";import"./date-510oiu0I.js";const E={class:"ratin-chart"},K={class:"mark"},Y={class:"count"},Z=f({__name:"RatingChart",props:{1:{},2:{},3:{},4:{},5:{}},setup(t){b(a=>({d06d57f8:r(s)[5],d06d5836:r(s)[4],d06d5874:r(s)[3],d06d58b2:r(s)[2],d06d58f0:r(s)[1]}));const e=t,o=v(()=>e[5]+e[4]+e[3]+e[2]+e[1]),s=v(()=>({5:(e[5]/o.value*100).toFixed(0)+"%",4:(e[4]/o.value*100).toFixed(0)+"%",3:(e[3]/o.value*100).toFixed(0)+"%",2:(e[2]/o.value*100).toFixed(0)+"%",1:(e[1]/o.value*100).toFixed(0)+"%"}));return(a,d)=>(p(),m("div",E,[(p(),m(P,null,$(5,i=>n("div",{class:"rating-row",key:6-i},[n("div",K,[x(_(6-i)+" ",1),u(r(A))]),n("div",{class:V(["line",`line-${6-i}`])},null,2),n("div",Y,_(e[6-i]),1)])),64))]))}}),j=h(Z,[["__scopeId","data-v-58108141"]]),G=t=>(I("data-v-fcc7c2c8"),t=t(),y(),t),J={class:"review-stats"},Q={class:"left"},W={class:"reviews-count h2"},X={class:"recomendation-part text-s"},ee=G(()=>n("div",{class:"recomendation-text text-s"},"Customers recommended this product",-1)),te=f({__name:"ProductReviewStats",props:{rating:{},reviews:{}},setup(t){const e=t,o=v(()=>e.reviews.length),s=v(()=>{const i={5:0,4:0,3:0,2:0,1:0};for(const c of e.reviews)i[c.rating]++;return i}),a=v(()=>s.value[4]+s.value[5]),d=v(()=>Math.floor(a.value/o.value*100));return(i,c)=>(p(),m("div",J,[n("div",Q,[n("div",W,_(r(o))+" reviews",1),u(F,{class:"stars",rating:i.rating},null,8,["rating"]),n("div",X,_(r(a))+" out of "+_(r(o))+" ("+_(r(d))+"%) ",1),ee]),u(j,g({class:"right"},r(s)),null,16)]))}}),se=h(te,[["__scopeId","data-v-fcc7c2c8"]]),oe=t=>(I("data-v-061fa8b5"),t=t(),y(),t),re={class:"review-section-header"},ae={class:"review-toolbar"},ne={class:"review-sort"},ie=oe(()=>n("span",{class:"text-b"},"Sort by",-1)),ce=f({__name:"ProductReviewsSectionHeader",props:B({rating:{},reviews:{},sortOptions:{}},{selectedSort:{required:!0}}),emits:["update:selectedSort"],setup(t){const e=M(t,"selectedSort");function o(){D().showPopup("LeaveReview")}return(s,a)=>{const d=R("Btn"),i=R("Select");return p(),m("header",re,[u(se,{class:"review-stats",rating:s.rating,reviews:s.reviews},null,8,["rating","reviews"]),n("div",ae,[u(d,{class:"leave-review",onClick:o},{default:T(()=>[x("Leave a review")]),_:1}),n("div",ne,[ie,u(i,{class:"review-sort-select",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),options:s.sortOptions},null,8,["modelValue","options"])])])])}}}),de=h(ce,[["__scopeId","data-v-061fa8b5"]]);N("productReviews",()=>{const t=S(L),e=S(!1);function o(a){return t.value[a-1]}function s(a){return a.map(d=>t.value[d-1])}return{reviews:t,isLoaded:e,findProduct:o,findProducts:s}});const le={key:0,class:"product-review-page"},ue={class:"right"},ve={class:"left"},pe={class:"reviews"},_e=f({__name:"reviews",props:{id:{}},setup(t){const e=t,{data:o}=C(()=>k.findProductById(e.id),null),{data:s}=C(()=>k.getProductReviews(e.id),[]),a={none:void 0,newest:(c,l)=>new Date(l.date).getTime()-new Date(c.date).getTime(),oldest:(c,l)=>new Date(c.date).getTime()-new Date(l.date).getTime(),likes:(c,l)=>l.likes-c.likes,dislikes:(c,l)=>l.dislikes-c.dislikes},d=S(a.none),i=v(()=>typeof d.value!="function"?s.value:s.value.toSorted(d.value));return(c,l)=>r(o)?(p(),m("div",le,[n("div",ue,[u(H,g({class:"product-card"},r(o)),null,16)]),n("div",ve,[u(de,{class:"reviews-header",rating:r(o).rating,reviews:r(s),selectedSort:r(d),"onUpdate:selectedSort":l[0]||(l[0]=w=>O(d)?d.value=w:null),sortOptions:a},null,8,["rating","reviews","selectedSort"]),n("div",pe,[(p(!0),m(P,null,$(r(i),w=>(p(),z(U,g({class:"review",key:w.id},w),null,16))),128))])])])):q("",!0)}}),$e=h(_e,[["__scopeId","data-v-ef2e2759"]]);export{$e as default};
