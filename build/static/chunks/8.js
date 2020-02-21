(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./components/block-front2.js":
/*!************************************!*\
  !*** ./components/block-front2.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\block-front2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Front2 = function Front2(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "front2 block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[1],
    displayDesc: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[2],
    displayDesc: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[3],
    displayDesc: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[4],
    displayDesc: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Front2);

/***/ }),

/***/ "./components/newsBlock.js":
/*!*********************************!*\
  !*** ./components/newsBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\newsBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var NewsBlock = function NewsBlock(_ref) {
  var news = _ref.news,
      diaplayImage = _ref.diaplayImage,
      displayDesc = _ref.displayDesc;
  var image = '',
      desc = '';

  if (typeof diaplayImage === 'undefined' || diaplayImage) {
    image = __jsx("img", {
      src: news.img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }

  if (typeof displayDesc === 'undefined' || displayDesc) {
    desc = __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, news.desc);
  }

  return __jsx("div", {
    className: "NewsBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: news.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, image, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, news.title), desc)));
};

var imageUrl = function imageUrl(url) {
  return 'https://data.joornalo.com' + url;
};

/* harmony default export */ __webpack_exports__["default"] = (NewsBlock);

/***/ })

}]);
//# sourceMappingURL=8.js.map