(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"2Eek":function(e,t,n){e.exports=n("W7oM")},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"5HXA":function(e,t,n){"use strict";var r=n("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var r=n("Y7ZC"),o=n("uplh"),i=n("NsO/"),u=n("vwuL"),c=n("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),a=u.f,f=o(r),s={},d=0;f.length>d;)void 0!==(n=a(r,t=f[d++]))&&c(s,t,n);return s}})},ANjH:function(e,t,n){"use strict";n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return b})),n.d(t,"bindActionCreators",(function(){return d})),n.d(t,"combineReducers",(function(){return f})),n.d(t,"compose",(function(){return h})),n.d(t,"createStore",(function(){return c}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(c)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var a=e,f=t,s=[],d=s,l=!1;function p(){d===s&&(d=s.slice())}function y(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function h(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),d.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var n=d.indexOf(e);d.splice(n,1),s=null}}}function b(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,f=a(f,e)}finally{l=!1}for(var t=s=d,n=0;n<t.length;n++){(0,t[n])()}return e}return b({type:i.INIT}),(o={dispatch:b,subscribe:h,getState:y,replaceReducer:function(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,b({type:i.REPLACE})}})[r.a]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(y())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function a(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function f(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var u,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(f){u=f}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var r=!1,o={},i=0;i<c.length;i++){var f=c[i],s=n[f],d=e[f],l=s(d,t);if("undefined"===typeof l){var p=a(f,t);throw new Error(p)}o[f]=l,r=r||l!==d}return(r=r||c.length!==Object.keys(e).length)?o:e}}function s(e,t){return function(){return t(e.apply(this,arguments))}}function d(e,t){if("function"===typeof e)return s(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=s(o,t))}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return y({},n,{dispatch:r=h.apply(void 0,i)(n.dispatch)})}}}},"DH+K":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var r="GET_NEWS",o="SET_LOADING",i="NEWS_ERROR",u="ADD_TEMPLATE",c="GET_CONFIG"},MB59:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/store",function(){return n("zrn3")}])},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},W7oM:function(e,t,n){n("nZgG");var r=n("WEpk").Object;e.exports=function(e,t){return r.defineProperties(e,t)}},XoMD:function(e,t,n){e.exports=n("hYAz")},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var u=Object(i.a)(o);t.a=u}).call(this,n("yLpj"),n("3UD+")(e))},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},nZgG:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},uplh:function(e,t,n){var r=n("ar/p"),o=n("mqlF"),i=n("5K7Z"),u=n("5T2Y").Reflect;e.exports=u&&u.ownKeys||function(e){var t=r.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},vYYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("hfKm"),o=n.n(r);function i(e,t,n){return t in e?o()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},zrn3:function(e,t,n){"use strict";n.r(t);var r=n("ANjH"),o=n("5HXA");function i(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var u=i();u.withExtraArgument=i;var c,a=u,f=n("hfKm"),s=n.n(f),d=n("2Eek"),l=n.n(d),p=n("XoMD"),y=n.n(p),h=n("Jo+v"),b=n.n(h),w=n("4mXO"),v=n.n(w),O=n("pLtp"),m=n.n(O),E=n("Qetd"),g=n.n(E),j=n("vYYK"),_=n("DH+K");function T(e,t){var n=m()(e);if(v.a){var r=v()(e);t&&(r=r.filter((function(t){return b()(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(j.a)(e,t,n[t])})):y.a?l()(e,y()(n)):T(Object(n)).forEach((function(t){s()(e,t,b()(n,t))}))}return e}var N=(c={agent:null,config:null,news:null,templates:null,template:null,front:null,loading:!1},Object(j.a)(c,"agent",null),Object(j.a)(c,"error",null),c),S=Object(r.combineReducers)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.c:return P({},e,{news:t.payload.news,template:t.payload.template,error:!1,loading:!1});case _.d:return P({},e,{error:t.payload});case _.e:return P({},e,{loading:!0});case _.b:return P({},e,{config:t.payload.config,templates:t.payload.templates,agent:t.payload.agent});case _.a:return P({},e,{templates:g()(e.templates,t.payload.template)});default:return e}}});t.default=function(e){return Object(r.createStore)(S,e,Object(o.composeWithDevTools)(Object(r.applyMiddleware)(a)))}}},[["MB59",1,0]]]);