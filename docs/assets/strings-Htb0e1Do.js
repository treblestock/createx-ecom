const c=(e,o)=>{e=e.toLowerCase(),o=o.toLowerCase();const r=o.split(" ").filter(n=>n!=" "&&n!="").reduce((n,s)=>n+=`(${s}.*)`,".*");return new RegExp(r).exec(e)};function d(e){return e.split(" ").map(o=>o.toLowerCase()).join("-")}function i(e){return e[0].toUpperCase()+e.slice(1)}export{i as c,c as d,d as h};
