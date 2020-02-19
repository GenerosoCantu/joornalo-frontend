webpackHotUpdate(17,{

/***/ "./components/most-viewed1.js":
/*!************************************!*\
  !*** ./components/most-viewed1.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\most-viewed1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var MostViewed1 = function MostViewed1(_ref) {
  var topNews = _ref.topNews;
  if (!topNews) return null;
  return __jsx("div", {
    className: "most-viewed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Most Viewed"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, topNews.map(function (news, index) {
    return __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      news: news,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }) // <Link href={news.url} key={index}>
    //   <li>
    //     <img src={imageUrl(news.image)} />
    //     <a>{news.title}</a>
    //   </li>
    // </Link>
    ;
  })));
};

var imageUrl = function imageUrl(url) {
  return 'https://data.joornalo.com' + url;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    topNews: state.news.topNews
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MostViewed1));

/***/ })

})
//# sourceMappingURL=17.10d3b7533e964c1d022f.hot-update.js.map