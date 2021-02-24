(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./components/block-other-news1.js":
/*!*****************************************!*\
  !*** ./components/block-other-news1.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var OtherNews1 = function OtherNews1(_ref) {
  var moreNews = _ref.moreNews;
  if (!moreNews) return null;
  return __jsx("div", {
    className: "other-news block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Other News")), __jsx("ul", null, moreNews.map(function (news, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: news.url,
      key: index
    }, __jsx("li", null, __jsx("a", null, __jsx("img", {
      src: imageUrl(news.image)
    }), __jsx("div", null, news.title))));
  })));
};

var imageUrl = function imageUrl(url) {
  return 'https://data.joornalo.com' + url;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    moreNews: state.news.moreNews
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(OtherNews1));

/***/ })

}]);
//# sourceMappingURL=21.js.map