import{r as a,s as t,g as n}from"./index-M6l4noiw.js";let o,s,e;function r(){return e??(e=a(!1)),s??(s={doesExist:e,isOpen:n(()=>e.value?o.isOpen.value:!1),open(){if(!s.doesExist.value)return console.warn("useMobileSidebar.ts: cannot use mobile sidebar api as sidebar doesn't exist");o.open()},close(){if(!s.doesExist.value)return console.warn("useMobileSidebar.ts: cannot use mobile sidebar api as sidebar doesn't exist");o.close()},toggle(){if(!s.doesExist.value)return console.warn("useMobileSidebar.ts: cannot use mobile sidebar api as sidebar doesn't exist");o.toggle()}}),s}function u(i){o=i,e??(e=a(!1)),e.value=!0,t(()=>{e.value=!1})}export{u as p,r as u};
