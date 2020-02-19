webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redirect */ "./node_modules/next-redirect/index.js");
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_newsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/newsActions */ "./store/actions/newsActions.js");
/* harmony import */ var _components_Template_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Template.js */ "./components/Template.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");

var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Index = function Index(_ref) {
  var agent = _ref.agent,
      front = _ref.front,
      templateName = _ref.templateName,
      template = _ref.template;
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    agent: agent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: templateName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c988",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "News link")));
};

Index.getInitialProps = function _callee(context, agent) {
  var store;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = context.store;

          if (true) {
            _context.next = 4;
            break;
          }

          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(store.dispatch(Object(_store_actions_newsActions__WEBPACK_IMPORTED_MODULE_6__["getConfig"])(context.req)));

        case 4:
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(store.dispatch(Object(_store_actions_newsActions__WEBPACK_IMPORTED_MODULE_6__["getFront"])('home', context.req)));

        case 6:
          return _context.abrupt("return", {
            agent: agent
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    front: state.news.front,
    templateName: state.news.frontTemplateName,
    template: state.news.frontTemplate,
    loading: state.news.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  getFront: _store_actions_newsActions__WEBPACK_IMPORTED_MODULE_6__["getFront"]
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.d3e7963cc327b907ae2a.hot-update.js.map