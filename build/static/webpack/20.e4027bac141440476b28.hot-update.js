webpackHotUpdate(20,{

/***/ "./components/multimedia1.js":
/*!***********************************!*\
  !*** ./components/multimedia1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\multimedia1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Multimedia1 = function Multimedia1(_ref) {
  var data = _ref.data,
      text = _ref.text;
  return __jsx("div", {
    className: "multimedia1 block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "blockheader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Multimedia")), data.multimedia.map(function (news, index) {
    return __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      news: news,
      displayDesc: false,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Multimedia1);

/***/ })

})
//# sourceMappingURL=20.e4027bac141440476b28.hot-update.js.map