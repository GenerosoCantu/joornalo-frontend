webpackHotUpdate(22,{

/***/ "./components/opinion1.js":
/*!********************************!*\
  !*** ./components/opinion1.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\opinion1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Opinion1 = function Opinion1(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "opinion1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "blockheader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Opinion")), data.opinion.map(function (news, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(NewsBlock, {
      news: news,
      displayDesc: false,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Opinion1);

/***/ })

})
//# sourceMappingURL=22.c30e7dc2dd2309269c76.hot-update.js.map