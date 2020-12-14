(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./components/block-galleries1.js":
/*!****************************************!*\
  !*** ./components/block-galleries1.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo.12.13.2000\\joornalo-frontend\\components\\block-galleries1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Galleries1 = function Galleries1(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "galleries1 block",
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
  }, "Galleries")), data.galleries.map(function (news, index) {
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

/* harmony default export */ __webpack_exports__["default"] = (Galleries1);

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
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo.12.13.2000\\joornalo-frontend\\components\\newsBlock.js";
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
    href: "/section/[section]/[date]/[id]",
    as: news.url,
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
  }, __jsx("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, image), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, news.title), __jsx("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, desc))));
};

var imageUrl = function imageUrl(url) {
  return 'https://data.joornalo.com' + url;
};

/* harmony default export */ __webpack_exports__["default"] = (NewsBlock);

/***/ })

}]);
//# sourceMappingURL=9.js.map