webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./context/config/configState.js":
/*!***************************************!*\
  !*** ./context/config/configState.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configContext */ "./context/config/configContext.js");
/* harmony import */ var _configReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configReducer */ "./context/config/configReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./context/types.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\context\\config\\configState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ConfigState = function ConfigState(props) {
  var initialState = {
    agent: null
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_configReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var initialAgent = function initialAgent() {
    var userAgent;

    if (true) {
      userAgent = navigator.userAgent;
    } else {}

    var mobilex = userAgent.match(/(Mobile)/g);
    var android = userAgent.match(/(Android)/g);
    var iPad = userAgent.match(/(iPad)/g);
    var mobile = Boolean(mobilex) && !iPad;
    var tablet = !mobilex && Boolean(android) || Boolean(iPad);
    var desktop = !mobile && !tablet;
    var agent = desktop || tablet ? 'desktop' : 'mobile';
    console.log('agent----------------------');
    console.log(agent);
    return agent;
  };

  var getAgent = function getAgent() {
    dispatch({
      type: GET_AGENT,
      payload: {
        agent: initialAgent()
      }
    });
  };

  var setAgent = function setAgent(agent) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_AGENT"],
      payload: {
        agent: agent
      }
    });
  };

  return __jsx(_configContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      agent: state.agent,
      getAgent: getAgent,
      setAgent: setAgent
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ConfigState);

/***/ }),

/***/ "./context/types.js":
/*!**************************!*\
  !*** ./context/types.js ***!
  \**************************/
/*! exports provided: SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS, SET_LOADING, SET_ALERT, REMOVE_ALERT, SET_AGENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USERS", function() { return SEARCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER", function() { return GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_USERS", function() { return CLEAR_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REPOS", function() { return GET_REPOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALERT", function() { return SET_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALERT", function() { return REMOVE_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AGENT", function() { return SET_AGENT; });
var SEARCH_USERS = 'SEARCH_USERS';
var GET_USER = 'GET_USER';
var CLEAR_USERS = 'CLEAR_USERS';
var GET_REPOS = 'GET_REPOS';
var SET_LOADING = 'SET_LOADING';
var SET_ALERT = 'SET_ALERT';
var REMOVE_ALERT = 'REMOVE_ALERT';
var SET_AGENT = 'SET_AGENT';

/***/ })

})
//# sourceMappingURL=_app.js.9a0134aadbb657146f7f.hot-update.js.map