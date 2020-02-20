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
  console.log(data.sectionNews[0].section);
  return __jsx("div", {
    className: "sections1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Sections 1"), data.sectionNews.map(function (section, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "blockheader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, section.section)), section.news.map(function (news, index0) {
      return __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        news: news,
        displayDesc: false,
        key: index0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sections1);

/***/ })

})
//# sourceMappingURL=25.92a86eed8f591af75f7b.hot-update.js.map