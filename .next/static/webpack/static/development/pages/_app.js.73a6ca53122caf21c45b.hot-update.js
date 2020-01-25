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
      setAgent: setAgent
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ConfigState);

/***/ })

})
//# sourceMappingURL=_app.js.73a6ca53122caf21c45b.hot-update.js.map