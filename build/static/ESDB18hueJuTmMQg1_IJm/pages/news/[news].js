(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{hOln:function(e,n){e.exports=function(e,n,t){e.res?(e.res.writeHead(t,{Location:n}),e.res.end()):document.location.pathname=n}},iSem:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[news]",function(){return t("yP8y")}])},vcXL:function(e,n,t){"use strict";var s=self.fetch.bind(self);e.exports=s,e.exports.default=e.exports},yP8y:function(e,n,t){"use strict";t.r(n);var s=t("ln6h"),a=t.n(s),o=t("q1tI"),l=t.n(o),r=t("3Hq7"),c=(t("hOln"),t("YFqc")),u=t.n(c),i=t("vcXL"),d=t.n(i),w=(t("nOHt"),l.a.createElement),p=function(e){return w(r.default,null,w("p",null,e.uuid),w("ul",null,w("li",null,w(u.a,{href:"/news/[news]",as:"/news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c9ZZ"},w("a",null,"Bad link"))),w("li",null,w(u.a,{href:"/news/[news]",as:"/news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977"},w("a",null,"Good link"))),w("li",null,w(u.a,{href:"/news/[news]",as:"/news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c988"},w("a",null,"Good link")))))};p.getInitialProps=function(e){var n,t,s,o,l,r;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.query.news,t=n.slice(-36),t.slice(0,n.length-36),s="/news/"+n,o="https://data.joornalo.com/news"+t.charAt(0)+"/"+t.charAt(1)+"/"+t+".json",console.log("---------------------------"),console.log(t),c.prev=7,c.next=10,a.a.awrap(d()(o));case 10:return l=c.sent,c.next=13,a.a.awrap(l.json());case 13:return r=c.sent,s!==r["news-url"]&&console.log("Bad URL...redirected"),c.abrupt("return",{uuid:t,data:r});case 18:c.prev=18,c.t0=c.catch(7),console.log("Page not found");case 21:return console.log("uuid: ".concat(t)),console.log("details: ".concat(details)),c.abrupt("return",{uuid:t,details:details});case 24:case"end":return c.stop()}}),null,null,[[7,18]])},n.default=p}},[["iSem",1,0]]]);