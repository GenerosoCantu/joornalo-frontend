webpackHotUpdate(17,{

/***/ "./components/latest1.js":
/*!*******************************!*\
  !*** ./components/latest1.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\latest1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Latest1 = function Latest1(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "sections1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, data.sectionNews.map(function (section, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "blockheader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, section.section)), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, section.news.map(function (news, index0) {
      return __jsx(NewsBlock, {
        news: news,
        displayDesc: false,
        key: index0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      });
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Latest1);

/***/ })

})
//# sourceMappingURL=17.f3e8362198411f6e3189.hot-update.js.map