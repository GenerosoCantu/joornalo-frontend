(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2Eek":function(e,t,n){e.exports=n("W7oM")},"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"5HXA":function(e,t,n){"use strict";var r=n("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var r=n("Y7ZC"),o=n("uplh"),i=n("NsO/"),a=n("vwuL"),u=n("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),c=a.f,s=o(r),f={},l=0;s.length>l;)void 0!==(n=c(r,t=s[l++]))&&u(f,t,n);return f}})},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},ANjH:function(e,t,n){"use strict";n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return m})),n.d(t,"bindActionCreators",(function(){return l})),n.d(t,"combineReducers",(function(){return s})),n.d(t,"compose",(function(){return y})),n.d(t,"createStore",(function(){return u}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function u(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(u)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var c=e,s=t,f=[],l=f,p=!1;function d(){l===f&&(l=f.slice())}function h(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return d(),l.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,d();var n=l.indexOf(e);l.splice(n,1),f=null}}}function m(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=c(s,e)}finally{p=!1}for(var t=f=l,n=0;n<t.length;n++){(0,t[n])()}return e}return m({type:i.INIT}),(o={dispatch:m,subscribe:y,getState:h,replaceReducer:function(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,m({type:i.REPLACE})}})[r.a]=function(){var e,t=y;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var a,u=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(s){a=s}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},i=0;i<u.length;i++){var s=u[i],f=n[s],l=e[s],p=f(l,t);if("undefined"===typeof p){var d=c(s,t);throw new Error(d)}o[s]=p,r=r||p!==l}return(r=r||u.length!==Object.keys(e).length)?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function l(e,t){if("function"===typeof e)return f(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=f(o,t))}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return h({},n,{dispatch:r=y.apply(void 0,i)(n.dispatch)})}}}},CgaS:function(e,t,n){"use strict";var r=n("JEQr"),o=n("xTJ+"),i=n("9rSQ"),a=n("UnBK");function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"===typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}})),o.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}})),e.exports=u},"DH+K":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u}));var r="GET_NEWS",o="SET_LOADING",i="NEWS_ERROR",a="ADD_TEMPLATE",u="GET_CONFIG"},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),o=n("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=n("tQ2B"):"undefined"!==typeof t&&(e=n("tQ2B")),e}(),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(i)})),e.exports=u}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),i=n("q1tI"),a=n.n(i),u=n("3Hq7"),c=n("YFqc"),s=n.n(c),f=(n("vcXL"),n("jo+o"),a.a.createElement),l=function(e){return f(u.default,null,f("h1",null,"Joornalo"),f(s.a,{href:"/section/[section]/[date]/[id]",as:"/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c988"},f("a",null,"News link")))};l.getInitialProps=function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.store,t.next=4;break;case 4:return t.abrupt("return",{});case 5:case"end":return t.stop()}}))},t.default=l},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),i=n("Lmem"),a=n("JEQr"),u=n("2SVd"),c=n("5oMp");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},W7oM:function(e,t,n){n("nZgG");var r=n("WEpk").Object;e.exports=function(e,t){return r.defineProperties(e,t)}},XoMD:function(e,t,n){e.exports=n("hYAz")},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n("yLpj"),n("3UD+")(e))},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===a&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},"jfS+":function(e,t,n){"use strict";var r=n("endd");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},"jo+o":function(e,t,n){"use strict";var r=n("eVuF"),o=n.n(r),i=n("p0XB"),a=n.n(i);var u=n("XXOK"),c=n.n(u),s=n("yLu3"),f=n.n(s);function l(e,t){return function(e){if(a()(e))return e}(e)||function(e,t){if(f()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=c()(e);!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=n("vYYK"),d=n("ln6h"),h=n.n(d),y=(n("zrn3"),n("DH+K")),m=function(e){var t,n=(t=navigator.userAgent).match(/(Mobile)/g),r=t.match(/(Android)/g),o=t.match(/(iPad)/g),i=Boolean(n)&&!o,a=!n&&Boolean(r)||Boolean(o);return!i&&!a||a?"desktop":"mobile"},w=n("vDqi"),v=n.n(w);n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return E}));var b=function(e,t,n){var r,o;return h.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(),r="https://data.joornalo.com/templates/news/".concat(n+"-"+t,".json"),e.next=6,h.a.awrap(v.a.get(r));case 6:return o=e.sent,e.abrupt("return",o.data);case 10:e.prev=10,e.t0=e.catch(0),console.log("***********Template Error"),dispatch({type:y.d,payload:e.t0.statusText});case 14:case"end":return e.stop()}}),null,null,[[0,10]])},g=function(e,t,n,r,o){return function(e,t){var o,i,a,u,c;return h.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,x(),o="https://data.joornalo.com/news/".concat(n.charAt(0),"/").concat(n.charAt(1),"/").concat(n,".json"),s.next=5,h.a.awrap(v.a.get(o));case 5:if(i=s.sent,r!==i.data.url&&e({type:y.d,payload:"Redirect: ".concat(i.data.url)}),a=t().news.agent,u=a+"-"+i.data.template,c=t().news.templates[u]){s.next=15;break}return s.next=13,h.a.awrap(b(0,i.data.template,t().news.agent));case 13:c=s.sent,e({type:y.a,payload:{template:Object(p.a)({},u,c)}});case 15:e({type:y.c,payload:{news:i.data,template:c}}),s.next=21;break;case 18:s.prev=18,s.t0=s.catch(0),e({type:y.d,payload:"NotFound"});case 21:case"end":return s.stop()}}),null,null,[[0,18]])}},x=function(){return{type:y.e}},E=function(e){return function(e){var t,n,r,i,a;return h.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,"https://data.joornalo.com/config.json","https://data.joornalo.com/templates/news/templates.json",u.next=5,h.a.awrap(o.a.all([v.a.get("https://data.joornalo.com/config.json"),v.a.get("https://data.joornalo.com/templates/news/templates.json"),m()]));case 5:t=u.sent,n=l(t,3),r=n[0],i=n[1],a=n[2],e({type:y.b,payload:{config:r.data,templates:i.data,agent:a}}),u.next=15;break;case 13:u.prev=13,u.t0=u.catch(0);case 15:case"end":return u.stop()}}),null,null,[[0,13]])}}},nZgG:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),i=n("MLWZ"),a=n("w0Vi"),u=n("OTTw"),c=n("LYNF");e.exports=function(e){return new Promise((function(t,s){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,s,r),p=null}},p.onerror=function(){s(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){s(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=n("eqyj"),m=(e.withCredentials||u(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;m&&(l[e.xsrfHeaderName]=m)}if("setRequestHeader"in p&&r.forEach(l,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(w){if("json"!==e.responseType)throw w}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),s(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},uplh:function(e,t,n){var r=n("ar/p"),o=n("mqlF"),i=n("5K7Z"),a=n("5T2Y").Reflect;e.exports=a&&a.ownKeys||function(e){var t=r.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},vDqi:function(e,t,n){e.exports=n("zuR4")},vYYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("hfKm"),o=n.n(r);function i(e,t,n){return t in e?o()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),o=n("x86X"),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function u(e){return null!==e&&"object"===typeof e}function c(e){return"[object Function]"===i.call(e)}function s(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:u,isUndefined:function(e){return"undefined"===typeof e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return u(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:s,merge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)s(arguments[r],n);return t},extend:function(e,t,n){return s(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},zrn3:function(e,t,n){"use strict";n.r(t);var r=n("ANjH"),o=n("5HXA");function i(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var a=i();a.withExtraArgument=i;var u,c=a,s=n("hfKm"),f=n.n(s),l=n("2Eek"),p=n.n(l),d=n("XoMD"),h=n.n(d),y=n("Jo+v"),m=n.n(y),w=n("4mXO"),v=n.n(w),b=n("pLtp"),g=n.n(b),x=n("Qetd"),E=n.n(x),O=n("vYYK"),T=n("DH+K");function j(e,t){var n=g()(e);if(v.a){var r=v()(e);t&&(r=r.filter((function(t){return m()(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):h.a?p()(e,h()(n)):j(Object(n)).forEach((function(t){f()(e,t,m()(n,t))}))}return e}var A=(u={agent:null,config:null,news:null,templates:null,template:null,front:null,loading:!1},Object(O.a)(u,"agent",null),Object(O.a)(u,"error",null),u),N=Object(r.combineReducers)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.c:return S({},e,{news:t.payload.news,template:t.payload.template,error:!1,loading:!1});case T.d:return S({},e,{error:t.payload});case T.e:return S({},e,{loading:!0});case T.b:return S({},e,{config:t.payload.config,templates:t.payload.templates,agent:t.payload.agent});case T.a:return S({},e,{templates:E()(e.templates,t.payload.template)});default:return e}}});t.default=function(e){return Object(r.createStore)(N,e,Object(o.composeWithDevTools)(Object(r.applyMiddleware)(c)))}},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),i=n("CgaS"),a=n("JEQr");function u(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=u(a);c.Axios=i,c.create=function(e){return u(r.merge(a,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}},[["vlRD",1,0]]]);