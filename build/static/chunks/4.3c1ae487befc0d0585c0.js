(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5pKv":function(e,t){e.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(e,t,n){e.exports=n("uekQ")},XWtR:function(e,t,n){var r=n("5T2Y").parseInt,s=n("oc46").trim,i=n("5pKv"),a=/^[-+]?0[xX]/;e.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(e,t){var n=s(String(e),3);return r(n,t>>>0||(a.test(n)?16:10))}:r},dEVD:function(e,t,n){var r=n("Y7ZC"),s=n("XWtR");r(r.G+r.F*(parseInt!=s),{parseInt:s})},oc46:function(e,t,n){var r=n("Y7ZC"),s=n("Jes0"),i=n("KUxP"),a=n("5pKv"),o="["+a+"]",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),l=function(e,t,n){var s={},o=i((function(){return!!a[e]()||"\u200b\x85"!="\u200b\x85"[e]()})),c=s[e]=o?t(d):a[e];n&&(s[n]=c),r(r.P+r.F*o,"String",s)},d=l.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=l},"u/HS":function(e,t,n){"use strict";n.r(t);var r=n("6BQ9"),s=n.n(r),i=n("q1tI"),a=n.n(i),o=n("76ZC"),c=n.n(o),u=n("ORIc"),l=a.a.createElement;t.default=function(e){var t=e.data;Object(i.useEffect)((function(){window.addEventListener("resize",v),v()}),[]);for(var n,r=unescape(t.text),a=(n=r.split('<embed id="')).length-1;a--;){var o=s()(n[a+1].charAt(0));t.media[o-1]?n[a+1]='<div class="embed">'+t.media[o-1].embed+"</div>"+n[a+1].substring(5):n[a+1]=n[a+1].substring(5)}r=n.join("");for(var d=(n=r.split('<image id="')).length-1;d--;){var f=s()(n[d+1].charAt(0));t.images[f-1]?n[d+1]='<img src="https://data.joornalo.com/news/4/c/'+t.images[f-1].url+'" />'+n[d+1].substring(5):n[d+1]=n[d+1].substring(5)}var m=c()(n.join("")),p="https://data.joornalo.com/news/4/c/"+t.images[0].url,v=function(){for(var e=document.querySelector(".newsContent div").offsetWidth,t=document.querySelectorAll(".newsContent .embed iframe"),n=0;n<t.length;n++)t[n].width=e;t=document.querySelectorAll(".newsContent .embed .twitter-tweet");for(var r=0;r<t.length;r++)t[r].style.width="100%"};return l("div",{className:"news"},l("h1",null,t.title),l("div",{className:"row row-m-column"},l("div",{className:"col-220 col-m-full"},l("div",{className:"details"},"Details"),l(u.default,null)),l("div",{className:"newsContent col-full-220 col-m-auto"},l("img",{src:p}),l("div",{suppressHydrationWarning:!0},m))))}},uekQ:function(e,t,n){n("dEVD"),e.exports=n("WEpk").parseInt}}]);