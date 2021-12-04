module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./pages/store.js");
/* harmony import */ var _services_configService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/configService */ "./services/configService.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/header.css */ "./styles/header.css");
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_news_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/news.css */ "./styles/news.css");
/* harmony import */ var _styles_news_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_news_css__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import { getConfig } from '../store/actions/newsActions';






const _Joornalo = next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(_store__WEBPACK_IMPORTED_MODULE_4__["default"])(class _Joornalo extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    //console.log('+++++++++++++++++++2');
    //await store().dispatch(getConfig());
    //console.log(store().getState());
    const agent = await Object(_services_configService__WEBPACK_IMPORTED_MODULE_5__["initAgent"])(ctx.req);
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx, agent) : {}
    };
  } // componentDidMount() {
  //   const jssStyles = document.querySelector('#jss-server-side')
  //   if (jssStyles && jssStyles.parentNode) {
  //     jssStyles.parentNode.removeChild(jssStyles)
  //   }
  // }


  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: store
    }, __jsx(Component, pageProps));
  }

});

/* harmony default export */ __webpack_exports__["default"] = (_Joornalo);

/***/ }),

/***/ "./pages/store.js":
/*!************************!*\
  !*** ./pages/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers */ "./store/reducers/index.js");





const store = initialState => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_store_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./services/configService.js":
/*!***********************************!*\
  !*** ./services/configService.js ***!
  \***********************************/
/*! exports provided: initAgent, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAgent", function() { return initAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
const initAgent = req => {
  let userAgent;

  if (false) {} else {
    userAgent = req.headers['user-agent'];
  }

  const mobilex = userAgent.match(/(Mobile)/g);
  const android = userAgent.match(/(Android)/g);
  const iPad = userAgent.match(/(iPad)/g);
  const mobile = Boolean(mobilex) && !iPad;
  const tablet = !mobilex && Boolean(android) || Boolean(iPad);
  const desktop = !mobile && !tablet;
  return desktop || tablet ? 'desktop' : 'mobile';
};
const test = () => {
  return 'ok';
}; // export default initAgent;

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsReducer */ "./store/reducers/newsReducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  news: _newsReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./store/reducers/newsReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/newsReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  agent: null,
  config: null,
  news: null,
  templates: null,
  newsTemplate: null,
  newsTemplateName: null,
  front: null,
  frontTemplate: null,
  frontTemplateName: null,
  loading: false,
  agent: null,
  error: null,
  topNews: null,
  moreNews: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_NEWS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        news: action.payload.news,
        newsTemplateName: action.payload.templateName,
        newsTemplate: action.payload.template,
        error: false,
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["NEWS_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_CONFIG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        config: action.payload.config,
        templates: action.payload.templates,
        agent: action.payload.agent
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ADD_TEMPLATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        templates: Object.assign(state.templates, action.payload.template)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_OTHERNEWS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        topNews: action.payload.topNews,
        moreNews: action.payload.moreNews
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_FRONT"]:
      //console.log(action.payload.front)
      return _objectSpread(_objectSpread({}, state), {}, {
        front: action.payload.front,
        frontTemplateName: action.payload.templateName,
        frontTemplate: action.payload.template,
        topNews: action.payload.front.topNews,
        error: false,
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: SET_AGENT, GET_NEWS, SET_LOADING, NEWS_ERROR, INIT_AGENT, ADD_TEMPLATE, GET_CONFIG, GET_OTHERNEWS, FRONT_ERROR, GET_FRONT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AGENT", function() { return SET_AGENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NEWS", function() { return GET_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWS_ERROR", function() { return NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_AGENT", function() { return INIT_AGENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TEMPLATE", function() { return ADD_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONFIG", function() { return GET_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_OTHERNEWS", function() { return GET_OTHERNEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRONT_ERROR", function() { return FRONT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FRONT", function() { return GET_FRONT; });
const SET_AGENT = 'SET_AGENT';
const GET_NEWS = 'GET_NEWS';
const SET_LOADING = 'SET_LOADING';
const NEWS_ERROR = 'NEWS_ERROR';
const INIT_AGENT = 'INIT_AGENT';
const ADD_TEMPLATE = 'ADD_TEMPLATE';
const GET_CONFIG = 'GET_CONFIG';
const GET_OTHERNEWS = 'GET_OTHERNEWS';
const FRONT_ERROR = 'FRONT_ERROR';
const GET_FRONT = 'GET_FRONT';

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/header.css":
/*!***************************!*\
  !*** ./styles/header.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/news.css":
/*!*************************!*\
  !*** ./styles/news.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvY29uZmlnU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9uZXdzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiX0pvb3JuYWxvIiwid2l0aFJlZHV4Iiwic3RvcmUiLCJjdHgiLCJhZ2VudCIsImluaXRBZ2VudCIsInJlcSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJtb2JpbGV4IiwibWF0Y2giLCJhbmRyb2lkIiwiaVBhZCIsIm1vYmlsZSIsIkJvb2xlYW4iLCJ0YWJsZXQiLCJkZXNrdG9wIiwidGVzdCIsImNvbWJpbmVSZWR1Y2VycyIsIm5ld3MiLCJuZXdzUmVkdWNlciIsImNvbmZpZyIsInRlbXBsYXRlcyIsIm5ld3NUZW1wbGF0ZSIsIm5ld3NUZW1wbGF0ZU5hbWUiLCJmcm9udCIsImZyb250VGVtcGxhdGUiLCJmcm9udFRlbXBsYXRlTmFtZSIsImxvYWRpbmciLCJlcnJvciIsInRvcE5ld3MiLCJtb3JlTmV3cyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkdFVF9ORVdTIiwicGF5bG9hZCIsInRlbXBsYXRlTmFtZSIsInRlbXBsYXRlIiwiTkVXU19FUlJPUiIsIlNFVF9MT0FESU5HIiwiR0VUX0NPTkZJRyIsIkFERF9URU1QTEFURSIsIk9iamVjdCIsImFzc2lnbiIsIkdFVF9PVEhFUk5FV1MiLCJHRVRfRlJPTlQiLCJTRVRfQUdFTlQiLCJJTklUX0FHRU5UIiwiRlJPTlRfRVJST1IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RyxZQUFuQjtBQUNBLE1BQU1JLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1JLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1ILFNBQVMsR0FBRyxXQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xyXG4vLyBpbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL25ld3NBY3Rpb25zJztcclxuaW1wb3J0IHsgaW5pdEFnZW50IH0gZnJvbSAnLi4vc2VydmljZXMvY29uZmlnU2VydmljZSc7XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9oZWFkZXIuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9uZXdzLmNzcydcclxuXHJcblxyXG5jb25zdCBfSm9vcm5hbG8gPSB3aXRoUmVkdXgoc3RvcmUpKFxyXG4gIGNsYXNzIF9Kb29ybmFsbyBleHRlbmRzIEFwcCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCcrKysrKysrKysrKysrKysrKysrMicpO1xyXG4gICAgICAvL2F3YWl0IHN0b3JlKCkuZGlzcGF0Y2goZ2V0Q29uZmlnKCkpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHN0b3JlKCkuZ2V0U3RhdGUoKSk7XHJcblxyXG4gICAgICBjb25zdCBhZ2VudCA9IGF3YWl0IGluaXRBZ2VudChjdHgucmVxKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFnZVByb3BzOiBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXHJcbiAgICAgICAgICA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4LCBhZ2VudClcclxuICAgICAgICAgIDoge31cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJylcclxuICAgIC8vICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSkge1xyXG4gICAgLy8gICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcylcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIENvbXBvbmVudCxcclxuICAgICAgICBwYWdlUHJvcHMsXHJcbiAgICAgICAgc3RvcmVcclxuICAgICAgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0pvb3JuYWxvIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9zdG9yZS9yZWR1Y2Vycyc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGluaXRpYWxTdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcm9vdFJlZHVjZXIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJleHBvcnQgY29uc3QgaW5pdEFnZW50ID0gKHJlcSkgPT4ge1xyXG4gIGxldCB1c2VyQWdlbnRcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgfSBlbHNlIHtcclxuICAgIHVzZXJBZ2VudCA9IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J11cclxuICB9XHJcbiAgY29uc3QgbW9iaWxleCA9IHVzZXJBZ2VudC5tYXRjaCgvKE1vYmlsZSkvZyk7XHJcbiAgY29uc3QgYW5kcm9pZCA9IHVzZXJBZ2VudC5tYXRjaCgvKEFuZHJvaWQpL2cpO1xyXG4gIGNvbnN0IGlQYWQgPSB1c2VyQWdlbnQubWF0Y2goLyhpUGFkKS9nKTtcclxuXHJcbiAgY29uc3QgbW9iaWxlID0gQm9vbGVhbihtb2JpbGV4KSAmJiAhaVBhZDtcclxuICBjb25zdCB0YWJsZXQgPSAoIW1vYmlsZXggJiYgQm9vbGVhbihhbmRyb2lkKSkgfHwgQm9vbGVhbihpUGFkKTtcclxuICBjb25zdCBkZXNrdG9wID0gIW1vYmlsZSAmJiAhdGFibGV0O1xyXG4gIHJldHVybiAoKGRlc2t0b3AgfHwgdGFibGV0KSA/ICdkZXNrdG9wJyA6ICdtb2JpbGUnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAnb2snXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGluaXRBZ2VudDsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBuZXdzUmVkdWNlciBmcm9tICcuL25ld3NSZWR1Y2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgbmV3czogbmV3c1JlZHVjZXIsXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBHRVRfTkVXUywgU0VUX0xPQURJTkcsIEFERF9URU1QTEFURSwgTkVXU19FUlJPUiwgR0VUX0NPTkZJRywgR0VUX09USEVSTkVXUywgR0VUX0ZST05ULCBGUk9OVF9FUlJPUiB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhZ2VudDogbnVsbCxcclxuICBjb25maWc6IG51bGwsXHJcbiAgbmV3czogbnVsbCxcclxuICB0ZW1wbGF0ZXM6IG51bGwsXHJcbiAgbmV3c1RlbXBsYXRlOiBudWxsLFxyXG4gIG5ld3NUZW1wbGF0ZU5hbWU6IG51bGwsXHJcbiAgZnJvbnQ6IG51bGwsXHJcbiAgZnJvbnRUZW1wbGF0ZTogbnVsbCxcclxuICBmcm9udFRlbXBsYXRlTmFtZTogbnVsbCxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBhZ2VudDogbnVsbCxcclxuICBlcnJvcjogbnVsbCxcclxuICB0b3BOZXdzOiBudWxsLFxyXG4gIG1vcmVOZXdzOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGFjdGlvbi50eXBlKTtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEdFVF9ORVdTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5ld3M6IGFjdGlvbi5wYXlsb2FkLm5ld3MsXHJcbiAgICAgICAgbmV3c1RlbXBsYXRlTmFtZTogYWN0aW9uLnBheWxvYWQudGVtcGxhdGVOYW1lLFxyXG4gICAgICAgIG5ld3NUZW1wbGF0ZTogYWN0aW9uLnBheWxvYWQudGVtcGxhdGUsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIE5FV1NfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNFVF9MT0FESU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgfTtcclxuICAgIGNhc2UgR0VUX0NPTkZJRzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb25maWc6IGFjdGlvbi5wYXlsb2FkLmNvbmZpZyxcclxuICAgICAgICB0ZW1wbGF0ZXM6IGFjdGlvbi5wYXlsb2FkLnRlbXBsYXRlcyxcclxuICAgICAgICBhZ2VudDogYWN0aW9uLnBheWxvYWQuYWdlbnRcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1RFTVBMQVRFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRlbXBsYXRlczogT2JqZWN0LmFzc2lnbihzdGF0ZS50ZW1wbGF0ZXMsIGFjdGlvbi5wYXlsb2FkLnRlbXBsYXRlKVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBHRVRfT1RIRVJORVdTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRvcE5ld3M6IGFjdGlvbi5wYXlsb2FkLnRvcE5ld3MsXHJcbiAgICAgICAgbW9yZU5ld3M6IGFjdGlvbi5wYXlsb2FkLm1vcmVOZXdzXHJcbiAgICAgIH1cclxuICAgIGNhc2UgR0VUX0ZST05UOlxyXG4gICAgICAvL2NvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkLmZyb250KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZyb250OiBhY3Rpb24ucGF5bG9hZC5mcm9udCxcclxuICAgICAgICBmcm9udFRlbXBsYXRlTmFtZTogYWN0aW9uLnBheWxvYWQudGVtcGxhdGVOYW1lLFxyXG4gICAgICAgIGZyb250VGVtcGxhdGU6IGFjdGlvbi5wYXlsb2FkLnRlbXBsYXRlLFxyXG4gICAgICAgIHRvcE5ld3M6IGFjdGlvbi5wYXlsb2FkLmZyb250LnRvcE5ld3MsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59OyIsImV4cG9ydCBjb25zdCBTRVRfQUdFTlQgPSAnU0VUX0FHRU5UJztcclxuZXhwb3J0IGNvbnN0IEdFVF9ORVdTID0gJ0dFVF9ORVdTJztcclxuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HID0gJ1NFVF9MT0FESU5HJztcclxuZXhwb3J0IGNvbnN0IE5FV1NfRVJST1IgPSAnTkVXU19FUlJPUic7XHJcbmV4cG9ydCBjb25zdCBJTklUX0FHRU5UID0gJ0lOSVRfQUdFTlQnO1xyXG5leHBvcnQgY29uc3QgQUREX1RFTVBMQVRFID0gJ0FERF9URU1QTEFURSc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09ORklHID0gJ0dFVF9DT05GSUcnO1xyXG5leHBvcnQgY29uc3QgR0VUX09USEVSTkVXUyA9ICdHRVRfT1RIRVJORVdTJztcclxuZXhwb3J0IGNvbnN0IEZST05UX0VSUk9SID0gJ0ZST05UX0VSUk9SJztcclxuZXhwb3J0IGNvbnN0IEdFVF9GUk9OVCA9ICdHRVRfRlJPTlQnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9