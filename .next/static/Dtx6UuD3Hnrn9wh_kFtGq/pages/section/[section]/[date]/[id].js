(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Ah1G:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/section/[section]/[date]/[id]",function(){return t("JtTM")}])},JtTM:function(n,e,t){"use strict";t.r(e);var o=t("ln6h"),a=t.n(o),s=t("q1tI"),c=t.n(s),r=(t("nOHt"),t("YFqc")),i=t.n(r),u=t("vcXL"),l=t.n(u),d=t("3Hq7"),h=c.a.createElement,p=function(n){return h(d.a,null,h("h1",null,"uuid: ",n.uuid),h("h1",null,"title: ",n.title),h("h1",null,"section: ",n.section),h("h1",null,"date: ",n.date),h("ul",null,n.shows.map((function(n){return h("li",{key:n.id},h(i.a,{href:"/p/[id]",as:"/p/".concat(n.id)},h("a",null,n.name)))}))))};p.getInitialProps=function(n){var e,t,o,s,c,r,i,u;return a.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return e=n.query,t=e.section,o=e.date,s=e.id,c=s.slice(-36),r=s.slice(0,s.length-36),console.log("section:",t),console.log("date:",o),console.log("uuid:",c),console.log("title:",r),d.next=9,a.a.awrap(l()("https://api.tvmaze.com/search/shows?q=batman"));case 9:return i=d.sent,d.next=12,a.a.awrap(i.json());case 12:if(u=d.sent,console.log("Show data fetched. Count: ".concat(u.length)),"iraq-iran-us-troops-"===r){d.next=17;break}return console.log("Bad URL"),d.abrupt("return",redirect(n,"/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977"));case 17:return d.abrupt("return",{section:t,date:o,uuid:c,title:r,shows:u.map((function(n){return n.show}))});case 18:case"end":return d.stop()}}))},e.default=p}},[["Ah1G",0,1]]]);