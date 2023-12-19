import{u as N,M as O}from"./useViewPort-WceNZfIV.js";import{u as D,P as A}from"./usePagination-Zxwumez8.js";import{d as R}from"./date-510oiu0I.js";import{I as W}from"./Chat-PedUoVcj.js";import{d as P,a as B,o,h as c,e as s,b,t as h,u as t,l as C,w as L,_ as k,M as q,N as z,O as U,Q as H,K as M,A as K,r as f,n as Q,g as $,q as j,s as G,v as V,F as I,x as S,c as y,y as J,R as X,p as E,m as x}from"./index-M6l4noiw.js";import{B as Y}from"./BlogPostCardSmall-ETozQD0S.js";import{u as F}from"./blogPosts-JSX4yczX.js";import{u as Z}from"./useFetch-3JQEh6Nq.js";import{d as ss}from"./strings-Htb0e1Do.js";import"./useMobileSidebar-H43qyYrh.js";import"./Arrow-NfIOB5oo.js";import"./Clock-43xSX5Y_.js";import"./different-YukEj1iR.js";const es={class:"post"},ts={class:"img"},os={class:"post-body"},as={class:"labels"},ls={class:"test_s"},ns={class:"test_s"},ds={class:"test_s with-icon"},is={class:"description"},rs=P({__name:"BlogPostCardLarge",props:{id:{},img:{},title:{},date:{},category:{},description:{},commentsIds:{}},setup(l){return(e,a)=>{const n=B("Img"),u=B("AppLink");return o(),c("div",es,[s("div",ts,[b(n,{src:e.img},null,8,["src"])]),s("div",os,[s("div",as,[s("div",ls,h(e.category[0]),1),s("div",ns,h(t(R)(e.date,"long")),1),s("div",ds,[b(t(W)),C(" "+h(e.commentsIds.length)+" comment(-s) ",1)])]),b(u,{class:"post-title text-xl-b",to:{name:"blogPost",params:{id:e.id}}},{default:L(()=>[C(h(e.title),1)]),_:1},8,["to"]),s("div",is,h(e.description),1)])])}}}),cs=k(rs,[["__scopeId","data-v-1865d4d8"]]),us=["type","value","name"],ps={class:"tag"},_s=P({__name:"Tag",props:q({value:{},name:{},classWrapper:{},type:{}},{modelValue:{}}),emits:["update:modelValue"],setup(l){const e=z(l,"modelValue");return(a,n)=>(o(),c("label",{class:K(["text-s-b",a.classWrapper])},[U(s("input",M({class:"input _hidden-smart",type:a.type,"onUpdate:modelValue":n[0]||(n[0]=u=>e.value=u)},a.$attrs,{value:a.value,name:a.name}),null,16,us),[[H,e.value]]),s("div",ps,h(a.value),1)],2))}}),ms=k(_s,[["__scopeId","data-v-6afcbbc4"]]),vs={class:"search-blog-posts"},gs={key:0,class:"popover"},hs=P({__name:"SearchBlogPost",setup(l){const e=f(""),{data:a}=Z(Q.getBlogPosts,[]),n=$(()=>e.value===""?[]:a.value.filter(r=>ss(r.title,e.value))),u=f();function i(){setTimeout(()=>e.value="",200)}return j(()=>{var r;return(r=u.value)==null?void 0:r.$el.addEventListener("blur",i)}),G(()=>{var r;return(r=u.value)==null?void 0:r.$el.removeEventListener("blur",i)}),(r,p)=>{const v=B("Input"),d=B("AppLink");return o(),c("div",vs,[b(v,{class:"search-input",ref_key:"searchInput",ref:u,placeholder:"Search for blog post...",modelValue:t(e),"onUpdate:modelValue":p[0]||(p[0]=_=>V(e)?e.value=_:null)},null,8,["modelValue"]),t(n).length?(o(),c("div",gs,[(o(!0),c(I,null,S(t(n),_=>(o(),y(d,{class:"search-record link-idle",key:_.id,to:{name:"blogPost",params:{id:_.id}}},{default:L(()=>[C(h(_.title),1)]),_:2},1032,["to"]))),128))])):J("",!0)])}}}),bs=k(hs,[["__scopeId","data-v-ce9e6484"]]),w=l=>(E("data-v-788c3e99"),l=l(),x(),l),fs={class:"sidebar"},$s={class:"search-blog sidebar-row"},ys={class:"blog-categories sidebar-row"},Is=w(()=>s("div",{class:"title h4"},"Blog Categories",-1)),Ss=["value"],Vs={class:"category-name text-b"},Ps=w(()=>s("div",{class:"category-count"},"23",-1)),ks={class:"sidebar-row"},Bs=w(()=>s("div",{class:"title h4"},"Featured posts",-1)),ws={class:"featured-posts"},Cs={class:"sidebar-row"},Ls=w(()=>s("div",{class:"title h4"},"tags",-1)),Ms={class:"sidebar-tags"},As=P({__name:"BlogSidebar",setup(l){const e=F(),a=$(()=>e.tags),n=f(new Set),u=$(()=>e.categories),i=f(new Set),r=$(()=>e.blogPosts.slice(0,3));return(p,v)=>(o(),c("div",fs,[s("div",$s,[b(bs,{class:"search-input"})]),s("div",ys,[Is,(o(!0),c(I,null,S(t(u),d=>(o(),c("label",{class:"blog-category",key:d},[U(s("input",{class:"category-checkbox _hidden-smart",type:"checkbox","onUpdate:modelValue":v[0]||(v[0]=_=>V(i)?i.value=_:null),value:d},null,8,Ss),[[X,t(i)]]),s("div",Vs,h(d),1),Ps]))),128))]),s("div",ks,[Bs,s("div",ws,[(o(!0),c(I,null,S(t(r),d=>(o(),y(Y,M({class:"featured-post",key:d.id},d),null,16))),128))])]),s("div",Cs,[Ls,s("div",Ms,[(o(!0),c(I,null,S(t(a),d=>(o(),y(ms,{class:"sidebar-tag",key:d,modelValue:t(n),"onUpdate:modelValue":v[1]||(v[1]=_=>V(n)?n.value=_:null),value:d,type:"checkbox",name:"selectedTages"},null,8,["modelValue","value"]))),128))])])]))}}),T=k(As,[["__scopeId","data-v-788c3e99"]]),Ts=l=>(E("data-v-d9fdcd01"),l=l(),x(),l),Us={class:"page"},Es={class:"container"},xs={class:"posts"},Fs={class:"row"},Ns=Ts(()=>s("div",{class:"title h1"},"Fashion blog",-1)),Os=767,Ds=P({__name:"blog",setup(l){const e=F(),a=$(()=>e.blogPosts),{vw:n}=N(),u=$(()=>n.value<=Os),i=f(!1),r=f(5),p=f(1),{pages:v,currentInds:d}=D({limit:r,currentPage:p,items:a});return(_,m)=>(o(),c("div",Us,[s("div",Es,[t(u)?(o(),y(O,{key:1,isShown:t(i),onOpen:m[0]||(m[0]=g=>i.value=!0),onClose:m[1]||(m[1]=g=>i.value=!1),onToggle:m[2]||(m[2]=g=>i.value=!t(i))},{default:L(()=>[b(T,{class:"mobile-sidebar"})]),_:1},8,["isShown"])):(o(),y(T,{key:0,class:"sidebar"})),s("div",xs,[s("div",Fs,[Ns,b(A,{class:"pagination",modelValue:t(p),"onUpdate:modelValue":m[3]||(m[3]=g=>V(p)?p.value=g:null),pages:t(v)},null,8,["modelValue","pages"])]),(o(!0),c(I,null,S(t(d),g=>(o(),y(cs,M({class:"blog-post-card",key:t(a)[g].id},t(a)[g]),null,16))),128)),b(A,{class:"pagination",modelValue:t(p),"onUpdate:modelValue":m[4]||(m[4]=g=>V(p)?p.value=g:null),pages:t(v)},null,8,["modelValue","pages"])])])]))}}),se=k(Ds,[["__scopeId","data-v-d9fdcd01"]]);export{se as default};