webpackHotUpdate(25,{

/***/ "./components/sections1.js":
/*!*********************************!*\
  !*** ./components/sections1.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\sections1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Sections1 = function Sections1(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "sections1 block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.sectionNews.map(function (section, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "blockheader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, section.section)), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, section.news.map(function (news, index0) {
      return __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        news: news,
        displayDesc: false,
        key: index0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sections1);

/***/ })

})
//# sourceMappingURL=25.ce958d93aa9eeeea86d5.hot-update.js.map