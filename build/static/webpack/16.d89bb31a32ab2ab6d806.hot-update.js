webpackHotUpdate(16,{

/***/ "./components/featured1.js":
/*!*********************************!*\
  !*** ./components/featured1.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\featured1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Featured1 = function Featured1(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "featured1 block",
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
  }, "Featured")), data.featured.map(function (news, index) {
    return __jsx(NewsBlock, {
      news: news,
      displayDesc: false,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Featured1);

/***/ })

})
//# sourceMappingURL=16.d89bb31a32ab2ab6d806.hot-update.js.map