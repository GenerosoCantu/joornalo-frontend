(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"lnm/":function(t,n,a){"use strict";a.r(n);var c=a("q1tI"),o=a.n(c),e=a("M94t"),r=o.a.createElement;n.default=function t(n){var a=n.grid,c=n.data;return a&&c?a.rows.map((function(n,a){return r("div",{className:"row",key:"row-".concat(a)},n.column.map((function(n,a){return n.component?r("div",{className:"".concat(n.width),key:"col-".concat(a)},r(e.default,{component:n.component,data:c,text:n.text})):n.rows?r("div",{className:"".concat(n.width),key:"col-".concat(a)},r(t,{grid:n,data:c})):void 0})))})):r("div",null)}}}]);