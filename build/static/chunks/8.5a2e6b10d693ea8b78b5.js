(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{xFHW:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),a=o.n(n).a.createElement;t.default=function(e){console.log("Adv****************");var t=Object(n.useState)("---"),o=(t[0],t[1]),c=Object(n.useState)(null),s=c[0],r=c[1],l=Object(n.useState)(null),u=l[0],d=l[1],i=Object(n.useState)(null),f=i[0],v=i[1],b=!1,g=!1;Object(n.useEffect)((function(){if(console.log("useEffect...............................",s),s||(r("adv"+Math.round(1e5*Math.random())),console.log("setId...............................",s)),!u&&s){console.log("first****************************",s),d(!0);var e=document.getElementById(s);if(e)try{new IntersectionObserver((function(e,t){!b&&e[0].isIntersecting&&(b=!0,g=!0,t.unobserve(e[0].target),p())})).observe(e)}catch(t){m()}}}));var m=function(){b||(b=!0,g=!0,p())},p=function(){if(console.log("Ready to load...............................",s),g){o("Loaded");var t=Math.floor(4*Math.random());v("https://data.joornalo.com/ads/"+e.params.size+["a","b","c","d"][t]+".jpg")}};return a("div",{className:"adv eureka",id:s},a("img",{src:f}))}}}]);