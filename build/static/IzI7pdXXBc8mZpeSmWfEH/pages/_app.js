(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+oT+":function(e,t,n){var r=n("eVuF");function o(e,t,n,o,i,u,a){try{var c=e[u](a),s=c.value}catch(f){return void n(f)}c.done?t(s):r.resolve(s).then(o,i)}e.exports=function(e){return function(){var t=this,n=arguments;return new r((function(r,i){var u=e.apply(t,n);function a(e){o(u,r,i,a,c,"next",e)}function c(e){o(u,r,i,a,c,"throw",e)}a(void 0)}))}}},"/MKj":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("17x9"),u=n.n(i),a=o.a.createContext(null);var c=function(e){e()},s=function(){return c},f=null,p={notify:function(){}};var l=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=p,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=s(),t=[],n=[];return{clear:function(){n=f,t=f},notify:function(){var r=t=n;e((function(){for(var e=0;e<r.length;e++)r[e]()}))},get:function(){return n},subscribe:function(e){var r=!0;return n===t&&(n=t.slice()),n.push(e),function(){r&&t!==f&&(r=!1,n===t&&(n=t.slice()),n.splice(n.indexOf(e),1))}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=p)},e}();function d(e){var t=e.store,n=e.context,i=e.children,u=Object(r.useMemo)((function(){var e=new l(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),c=Object(r.useMemo)((function(){return t.getState()}),[t]);Object(r.useEffect)((function(){var e=u.subscription;return e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[u,c]);var s=n||a;return o.a.createElement(s.Provider,{value:u},i)}d.propTypes={store:u.a.shape({subscribe:u.a.func.isRequired,dispatch:u.a.func.isRequired,getState:u.a.func.isRequired}),context:u.a.object,children:u.a.any};var y=d;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var v=n("2mql"),m=n.n(v),w=n("QLaP"),g=n.n(w),O=n("0vxD"),P="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect,S=[],E=[null,null];function x(e,t){var n=e[1];return[t.payload,n+1]}var j=function(){return[null,0]};function C(e,t){void 0===t&&(t={});var n=t,i=n.getDisplayName,u=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,c=n.methodName,s=void 0===c?"connectAdvanced":c,f=n.renderCountProp,p=void 0===f?void 0:f,d=n.shouldHandleStateChanges,y=void 0===d||d,v=n.storeKey,w=void 0===v?"store":v,C=n.withRef,_=void 0!==C&&C,T=n.forwardRef,N=void 0!==T&&T,M=n.context,R=void 0===M?a:M,D=b(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);g()(void 0===p,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),g()(!_,"withRef is removed. To access the wrapped instance, use a ref on the connected component");g()("store"===w,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var A=R;return function(t){var n=t.displayName||t.name||"Component",i=u(n),a=h({},D,{getDisplayName:u,methodName:s,renderCountProp:p,shouldHandleStateChanges:y,storeKey:w,displayName:i,wrappedComponentName:n,WrappedComponent:t}),c=D.pure;var f=c?r.useMemo:function(e){return e()};function d(n){var u=Object(r.useMemo)((function(){var e=n.forwardedRef,t=b(n,["forwardedRef"]);return[n.context,e,t]}),[n]),c=u[0],s=u[1],p=u[2],d=Object(r.useMemo)((function(){return c&&c.Consumer&&Object(O.isContextConsumer)(o.a.createElement(c.Consumer,null))?c:A}),[c,A]),v=Object(r.useContext)(d),m=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch),w=Boolean(v)&&Boolean(v.store);g()(m||w,'Could not find "store" in the context of "'+i+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+i+" in connect options.");var C=m?n.store:v.store,_=Object(r.useMemo)((function(){return function(t){return e(t.dispatch,a)}(C)}),[C]),T=Object(r.useMemo)((function(){if(!y)return E;var e=new l(C,m?null:v.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[C,m,v]),N=T[0],M=T[1],R=Object(r.useMemo)((function(){return m?v:h({},v,{subscription:N})}),[m,v,N]),D=Object(r.useReducer)(x,S,j),I=D[0][0],$=D[1];if(I&&I.error)throw I.error;var k=Object(r.useRef)(),q=Object(r.useRef)(p),W=Object(r.useRef)(),U=Object(r.useRef)(!1),X=f((function(){return W.current&&p===q.current?W.current:_(C.getState(),p)}),[C,I,p]);P((function(){q.current=p,k.current=X,U.current=!1,W.current&&(W.current=null,M())})),P((function(){if(y){var e=!1,t=null,n=function(){if(!e){var n,r,o=C.getState();try{n=_(o,q.current)}catch(i){r=i,t=i}r||(t=null),n===k.current?U.current||M():(k.current=n,W.current=n,U.current=!0,$({type:"STORE_UPDATED",payload:{error:r}}))}};N.onStateChange=n,N.trySubscribe(),n();return function(){if(e=!0,N.tryUnsubscribe(),N.onStateChange=null,t)throw t}}}),[C,N,_]);var F=Object(r.useMemo)((function(){return o.a.createElement(t,h({},X,{ref:s}))}),[s,t,X]);return Object(r.useMemo)((function(){return y?o.a.createElement(d.Provider,{value:R},F):F}),[d,F,R])}var v=c?o.a.memo(d):d;if(v.WrappedComponent=t,v.displayName=i,N){var C=o.a.forwardRef((function(e,t){return o.a.createElement(v,h({},e,{forwardedRef:t}))}));return C.displayName=i,C.WrappedComponent=t,m()(C,t)}return m()(v,t)}}var _=Object.prototype.hasOwnProperty;function T(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function N(e,t){if(T(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!_.call(t,n[o])||!T(e[n[o]],t[n[o]]))return!1;return!0}var M=n("ANjH");function R(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function D(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function A(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=D(e);var o=r(t,n);return"function"===typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=D(o),o=r(t,n)),o},r}}var I=[function(e){return"function"===typeof e?A(e):void 0},function(e){return e?void 0:R((function(e){return{dispatch:e}}))},function(e){return e&&"object"===typeof e?R((function(t){return Object(M.bindActionCreators)(e,t)})):void 0}];var $=[function(e){return"function"===typeof e?A(e):void 0},function(e){return e?void 0:R((function(){return{}}))}];function k(e,t,n){return h({},n,{},e,{},t)}var q=[function(e){return"function"===typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,i=n.areMergedPropsEqual,u=!1;return function(t,n,a){var c=e(t,n,a);return u?o&&i(c,r)||(r=c):(u=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return k}}];function W(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function U(e,t,n,r,o){var i,u,a,c,s,f=o.areStatesEqual,p=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1;function y(o,d){var y=!p(d,u),h=!f(o,i);return i=o,u=d,y&&h?(a=e(i,u),t.dependsOnOwnProps&&(c=t(r,u)),s=n(a,c,u)):y?(e.dependsOnOwnProps&&(a=e(i,u)),t.dependsOnOwnProps&&(c=t(r,u)),s=n(a,c,u)):h?function(){var t=e(i,u),r=!l(t,a);return a=t,r&&(s=n(a,c,u)),s}():s}return function(o,f){return d?y(o,f):(a=e(i=o,u=f),c=t(r,u),s=n(a,c,u),d=!0,s)}}function X(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=b(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),u=n(e,i),a=r(e,i),c=o(e,i);return(i.pure?U:W)(u,a,c,e,i)}function F(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function K(e,t){return e===t}var L=function(e){var t=void 0===e?{}:e,n=t.connectHOC,r=void 0===n?C:n,o=t.mapStateToPropsFactories,i=void 0===o?$:o,u=t.mapDispatchToPropsFactories,a=void 0===u?I:u,c=t.mergePropsFactories,s=void 0===c?q:c,f=t.selectorFactory,p=void 0===f?X:f;return function(e,t,n,o){void 0===o&&(o={});var u=o,c=u.pure,f=void 0===c||c,l=u.areStatesEqual,d=void 0===l?K:l,y=u.areOwnPropsEqual,v=void 0===y?N:y,m=u.areStatePropsEqual,w=void 0===m?N:m,g=u.areMergedPropsEqual,O=void 0===g?N:g,P=b(u,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),S=F(e,i,"mapStateToProps"),E=F(t,a,"mapDispatchToProps"),x=F(n,s,"mergeProps");return r(p,h({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:S,initMapDispatchToProps:E,initMergeProps:x,pure:f,areStatesEqual:d,areOwnPropsEqual:v,areStatePropsEqual:w,areMergedPropsEqual:O},P))}}();function z(){var e=Object(r.useContext)(a);return g()(e,"could not find react-redux context value; please ensure the component is wrapped in a <Provider>"),e}function B(e){void 0===e&&(e=a);var t=e===a?z:function(){return Object(r.useContext)(e)};return function(){return t().store}}var H=B();!function(e){void 0===e&&(e=a);var t=e===a?H:B(e)}();var G=function(e,t){return e===t};!function(e){void 0===e&&(e=a);var t=e===a?z:function(){return Object(r.useContext)(e)}}();var Y,V=n("i8i4");n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return L})),Y=V.unstable_batchedUpdates,c=Y},"0vxD":function(e,t,n){"use strict";e.exports=n("DUzY")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r);var i=n("hfKm"),u=n.n(i);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),u()(e,r.key,r)}}var c=n("XVgq"),s=n.n(c),f=n("Z7t5"),p=n.n(f);function l(e){return(l="function"===typeof p.a&&"symbol"===typeof s.a?function(e){return typeof e}:function(e){return e&&"function"===typeof p.a&&e.constructor===p.a&&e!==p.a.prototype?"symbol":typeof e})(e)}function d(e){return(d="function"===typeof p.a&&"symbol"===l(s.a)?function(e){return l(e)}:function(e){return e&&"function"===typeof p.a&&e.constructor===p.a&&e!==p.a.prototype?"symbol":l(e)})(e)}function y(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var h=n("Bhuq"),b=n.n(h),v=n("TRZx"),m=n.n(v);function w(e){return(w=m.a?b.a:function(e){return e.__proto__||b()(e)})(e)}var g=n("SqZg"),O=n.n(g);function P(e,t){return(P=m.a||function(e,t){return e.__proto__=t,e})(e,t)}var S=n("q1tI"),E=n.n(S),x=n("8Bbg"),j=n.n(x),C=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},T=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},N=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},R={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(e){return e},deserializeState:function(e){return e}},D=n("/MKj"),A=n("zrn3"),I=n("41Zh"),$=(n("RDVA"),n("gWZt"),n("6RvG"),E.a.createElement),k=function(e,t){t=_(_({},R),t);var n="undefined"===typeof window,r=function(r){var o=r.initialState,i=r.ctx,u=t.storeKey,a=function(){return e(t.deserializeState(o),_(_(_({},i),t),{isServer:n}))};return n?a():(u in window||(window[u]=a()),window[u])};return function(e){var o;return(o=function(n){function o(e,o){var i=n.call(this,e,o)||this,u=e.initialState;return t.debug&&console.log("4. WrappedApp.render created new store with initialState",u),i.store=r({initialState:u}),i}return C(o,n),o.prototype.render=function(){var t=this.props,n=t.initialProps,r=(t.initialState,M(t,["initialProps","initialState"]));return E.a.createElement(e,_({},r,n,{store:this.store}))},o}(S.Component)).displayName="withRedux("+(e.displayName||e.name||"App")+")",o.getInitialProps=function(o){return T(void 0,void 0,void 0,(function(){var i,u;return N(this,(function(a){switch(a.label){case 0:if(!o)throw new Error("No app context");if(!o.ctx)throw new Error("No page context");return i=r({ctx:o.ctx}),t.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",i.getState()),o.ctx.store=i,o.ctx.isServer=n,u={},"getInitialProps"in e?[4,e.getInitialProps.call(e,o)]:[3,2];case 1:u=a.sent(),a.label=2;case 2:return t.debug&&console.log("3. WrappedApp.getInitialProps has store state",i.getState()),[2,{isServer:n,initialState:n?t.serializeState(i.getState()):i.getState(),initialProps:u}]}}))}))},o}}(A.default)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,w(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=O()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,i=[{key:"getInitialProps",value:function(e){var t,n,r;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.Component,n=e.ctx,i.next=3,o.a.awrap(Object(I.a)(n.req));case 3:if(r=i.sent,!t.getInitialProps){i.next=10;break}return i.next=7,o.a.awrap(t.getInitialProps(n,r));case 7:i.t0=i.sent,i.next=11;break;case 10:i.t0={};case 11:return i.t1=i.t0,i.abrupt("return",{pageProps:i.t1});case 13:case"end":return i.stop()}}))}}],(r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.store;return $(D.a,{store:r},$(t,n))}}])&&a(n.prototype,r),i&&a(n,i),t}(j.a));t.default=k},"2Eek":function(e,t,n){e.exports=n("W7oM")},"2mql":function(e,t,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(e){return r.isMemo(e)?u:a[e.$$typeof]||o}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=u;var s=Object.defineProperty,f=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(y){var o=d(n);o&&o!==y&&e(t,o,r)}var u=f(n);p&&(u=u.concat(p(n)));for(var a=c(t),h=c(n),b=0;b<u.length;++b){var v=u[b];if(!i[v]&&(!r||!r[v])&&(!h||!h[v])&&(!a||!a[v])){var m=l(n,v);try{s(t,v,m)}catch(w){}}}}return t}},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"41Zh":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){var t,n=(t=navigator.userAgent).match(/(Mobile)/g),r=t.match(/(Android)/g),o=t.match(/(iPad)/g),i=Boolean(n)&&!o,u=!n&&Boolean(r)||Boolean(o);return!i&&!u||u?"desktop":"mobile"}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"5HXA":function(e,t,n){"use strict";var r=n("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var r=n("Y7ZC"),o=n("uplh"),i=n("NsO/"),u=n("vwuL"),a=n("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),c=u.f,s=o(r),f={},p=0;s.length>p;)void 0!==(n=c(r,t=s[p++]))&&a(f,t,n);return f}})},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},ANjH:function(e,t,n){"use strict";n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return b})),n.d(t,"bindActionCreators",(function(){return p})),n.d(t,"combineReducers",(function(){return s})),n.d(t,"compose",(function(){return h})),n.d(t,"createStore",(function(){return a}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var c=e,s=t,f=[],p=f,l=!1;function d(){p===f&&(p=f.slice())}function y(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function h(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return d(),p.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,d();var n=p.indexOf(e);p.splice(n,1),f=null}}}function b(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,s=c(s,e)}finally{l=!1}for(var t=f=p,n=0;n<t.length;n++){(0,t[n])()}return e}return b({type:i.INIT}),(o={dispatch:b,subscribe:h,getState:y,replaceReducer:function(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,b({type:i.REPLACE})}})[r.a]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(y())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var u,a=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(s){u=s}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var r=!1,o={},i=0;i<a.length;i++){var s=a[i],f=n[s],p=e[s],l=f(p,t);if("undefined"===typeof l){var d=c(s,t);throw new Error(d)}o[s]=l,r=r||l!==p}return(r=r||a.length!==Object.keys(e).length)?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function p(e,t){if("function"===typeof e)return f(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=f(o,t))}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return y({},n,{dispatch:r=h.apply(void 0,i)(n.dispatch)})}}}},B5Ud:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),u=n("/+P4"),a=n("N9n2"),c=n("ln6h"),s=n("KI45");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=v,t.default=void 0;var f=s(n("htGi")),p=s(n("+oT+")),l=s(n("q1tI")),d=n("g/15");function y(e){return h.apply(this,arguments)}function h(){return(h=(0,p.default)(c.mark((function e(t){var n,r,o;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,n("nOHt");var b=function(e){function t(){return r(this,t),i(this,u(t).apply(this,arguments))}return a(t,e),o(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=v(t);return l.default.createElement(n,(0,f.default)({},r,{url:o}))}}]),t}(l.default.Component);function v(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=b,b.origGetInitialProps=y,b.getInitialProps=y},"DH+K":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c}));var r="GET_NEWS",o="SET_LOADING",i="NEWS_ERROR",u="ADD_TEMPLATE",a="GET_CONFIG",c="GET_OTHERNEWS"},DUzY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case l:case u:case c:case a:case y:return e;default:switch(e=e&&e.$$typeof){case f:case d:case v:case b:case s:return e;default:return t}}case i:return t}}}function P(e){return O(e)===l}t.typeOf=O,t.AsyncMode=p,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=s,t.Element=o,t.ForwardRef=d,t.Fragment=u,t.Lazy=v,t.Memo=b,t.Portal=i,t.Profiler=c,t.StrictMode=a,t.Suspense=y,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===l||e===c||e===a||e===y||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===s||e.$$typeof===f||e.$$typeof===d||e.$$typeof===m||e.$$typeof===w||e.$$typeof===g)},t.isAsyncMode=function(e){return P(e)||O(e)===p},t.isConcurrentMode=P,t.isContextConsumer=function(e){return O(e)===f},t.isContextProvider=function(e){return O(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return O(e)===d},t.isFragment=function(e){return O(e)===u},t.isLazy=function(e){return O(e)===v},t.isMemo=function(e){return O(e)===b},t.isPortal=function(e){return O(e)===i},t.isProfiler=function(e){return O(e)===c},t.isStrictMode=function(e){return O(e)===a},t.isSuspense=function(e){return O(e)===y}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,u,a){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,u,a],f=0;(c=new Error(t.replace(/%s/g,(function(){return s[f++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},W7oM:function(e,t,n){n("nZgG");var r=n("WEpk").Object;e.exports=function(e,t){return r.defineProperties(e,t)}},XoMD:function(e,t,n){e.exports=n("hYAz")},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var u=Object(i.a)(o);t.a=u}).call(this,n("yLpj"),n("3UD+")(e))},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},nZgG:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},qT12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116;function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case l:case u:case c:case a:case y:return e;default:switch(e=e&&e.$$typeof){case f:case d:case s:return e;default:return t}}case b:case h:case i:return t}}}function m(e){return v(e)===l}t.typeOf=v,t.AsyncMode=p,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=s,t.Element=o,t.ForwardRef=d,t.Fragment=u,t.Lazy=b,t.Memo=h,t.Portal=i,t.Profiler=c,t.StrictMode=a,t.Suspense=y,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===l||e===c||e===a||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===s||e.$$typeof===f||e.$$typeof===d)},t.isAsyncMode=function(e){return m(e)||v(e)===p},t.isConcurrentMode=m,t.isContextConsumer=function(e){return v(e)===f},t.isContextProvider=function(e){return v(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===u},t.isLazy=function(e){return v(e)===b},t.isMemo=function(e){return v(e)===h},t.isPortal=function(e){return v(e)===i},t.isProfiler=function(e){return v(e)===c},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===y}},uplh:function(e,t,n){var r=n("ar/p"),o=n("mqlF"),i=n("5K7Z"),u=n("5T2Y").Reflect;e.exports=u&&u.ownKeys||function(e){var t=r.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},vYYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("hfKm"),o=n.n(r);function i(e,t,n){return t in e?o()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},zrn3:function(e,t,n){"use strict";n.r(t);var r=n("ANjH"),o=n("5HXA");function i(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var u=i();u.withExtraArgument=i;var a,c=u,s=n("hfKm"),f=n.n(s),p=n("2Eek"),l=n.n(p),d=n("XoMD"),y=n.n(d),h=n("Jo+v"),b=n.n(h),v=n("4mXO"),m=n.n(v),w=n("pLtp"),g=n.n(w),O=n("Qetd"),P=n.n(O),S=n("vYYK"),E=n("DH+K");function x(e,t){var n=g()(e);if(m.a){var r=m()(e);t&&(r=r.filter((function(t){return b()(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(S.a)(e,t,n[t])})):y.a?l()(e,y()(n)):x(Object(n)).forEach((function(t){f()(e,t,b()(n,t))}))}return e}var C=(a={agent:null,config:null,news:null,templates:null,template:null,templateName:null,front:null,loading:!1},Object(S.a)(a,"agent",null),Object(S.a)(a,"error",null),Object(S.a)(a,"topNews",null),Object(S.a)(a,"moreNews",null),a),_=Object(r.combineReducers)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.c:return j({},e,{news:t.payload.news,templateName:t.payload.templateName,template:t.payload.template,error:!1,loading:!1});case E.e:return j({},e,{error:t.payload});case E.f:return j({},e,{loading:!0});case E.b:return j({},e,{config:t.payload.config,templates:t.payload.templates,agent:t.payload.agent});case E.a:return j({},e,{templates:P()(e.templates,t.payload.template)});case E.d:return j({},e,{topNews:t.payload.topNews,moreNews:t.payload.moreNews});default:return e}}});t.default=function(e){return Object(r.createStore)(_,e,Object(o.composeWithDevTools)(Object(r.applyMiddleware)(c)))}}},[["GcxT",1,0,30]]]);