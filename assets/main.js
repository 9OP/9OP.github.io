!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){const n=document.querySelector(".container"),o=document.querySelector(".menu"),r=document.querySelector(".menu-trigger");document.querySelector(".menu__inner--desktop");const i=document.querySelector(".menu__sub-inner-more-trigger"),d=document.querySelector(".menu__sub-inner-more"),c=getComputedStyle(document.body).getPropertyValue("--phoneWidth"),l=()=>window.matchMedia(c).matches;var s=()=>{r&&r.classList.toggle("hidden",!l()),o&&o.classList.toggle("hidden",l()),d&&d.classList.toggle("hidden",!l())};o&&o.addEventListener("click",e=>e.stopPropagation()),d&&d.addEventListener("click",e=>e.stopPropagation()),s(),document.body.addEventListener("click",()=>{l()||!d||d.classList.contains("hidden")?l()&&!o.classList.contains("hidden")&&o.classList.add("hidden"):d.classList.add("hidden")}),window.addEventListener("resize",s),r&&r.addEventListener("click",e=>{e.stopPropagation(),o&&o.classList.toggle("hidden")}),i&&i.addEventListener("click",e=>{e.stopPropagation(),d&&d.classList.toggle("hidden"),d&&d.getBoundingClientRect().right>n.getBoundingClientRect().right&&(d.style.left="auto",d.style.right=0)})},function(e,t){var n=window.localStorage&&window.localStorage.getItem("theme");const o=document.querySelector(".theme-toggle");null!==n&&document.body.classList.toggle("dark-theme","dark"===n),o.addEventListener("click",()=>{document.body.classList.toggle("dark-theme"),window.localStorage&&window.localStorage.setItem("theme",document.body.classList.contains("dark-theme")?"dark":"light")})}]);