import{d as r}from"./date-510oiu0I.js";import{I as l}from"./Chat-PedUoVcj.js";import{d as _,a,o as m,h as p,e as t,b as e,w as h,l as c,t as o,u as i,_ as g}from"./index-M6l4noiw.js";const v={class:"post"},f={class:"img"},u={class:"post-body"},C={class:"labels mobile-scroll"},I={class:"test_s"},b={class:"test_s"},B={class:"test_s _with-icon"},k={class:"description"},y=_({__name:"BlogPostCard",props:{id:{},category:{},commentsIds:{},title:{},date:{},description:{},img:{}},setup(w){return(s,N)=>{const n=a("Img"),d=a("AppLink");return m(),p("div",v,[t("div",f,[e(n,{src:s.img},null,8,["src"])]),t("div",u,[e(d,{class:"product-title text-xl-b",to:{name:"blogPost",params:{id:s.id}}},{default:h(()=>[c(o(s.title),1)]),_:1},8,["to"]),t("div",C,[t("div",I,o(s.category[0]),1),t("div",b,o(i(r)(s.date)),1),t("div",B,[e(i(l),{class:"chat-icon"}),c(" "+o(s.commentsIds.length)+" comments ",1)])]),t("div",k,o(s.description),1)])])}}}),L=g(y,[["__scopeId","data-v-137f671d"]]);export{L as B};