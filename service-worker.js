if(!self.define){let o,e={};const n=(n,c)=>(n=new URL(n+".js",c).href,e[n]||new Promise((e=>{if("document"in self){const o=document.createElement("script");o.src=n,o.onload=e,document.head.appendChild(o)}else o=n,importScripts(n),e()})).then((()=>{let o=e[n];if(!o)throw new Error(`Module ${n} didn’t register its module`);return o})));self.define=(c,s)=>{const t=o||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let i={};const r=o=>n(o,t),l={module:{uri:t},exports:i,require:r};e[t]=Promise.all(c.map((o=>l[o]||r(o)))).then((o=>(s(...o),i)))}}define(["./workbox-db5fc017"],(function(o){"use strict";o.setCacheNameDetails({prefix:"contact-book"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/contact-book/css/214.971b3b11.css",revision:null},{url:"/contact-book/css/app.25ac0e8e.css",revision:null},{url:"/contact-book/css/chunk-vendors.8bc0b645.css",revision:null},{url:"/contact-book/favicon.png",revision:"5462b19bd611cc4693bf8c1102c8dd49"},{url:"/contact-book/index.html",revision:"255533418537e190203c31887917ca4b"},{url:"/contact-book/js/214.0b4bb24c.js",revision:null},{url:"/contact-book/js/app.1a1588dc.js",revision:null},{url:"/contact-book/js/chunk-vendors.a1884493.js",revision:null},{url:"/contact-book/manifest.json",revision:"7f21ba7b2f78a9b6ee566f8615053dff"}],{})}));
//# sourceMappingURL=service-worker.js.map