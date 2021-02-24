(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./components/block-related-news1.js":
/*!*******************************************!*\
  !*** ./components/block-related-news1.js ***!
  \*******************************************/
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




var RelatedNews1 = function RelatedNews1(_ref) {
  var topNews = _ref.topNews;
  if (!topNews) return null;
  var topNews4 = topNews.slice(0, 4);
  return __jsx("div", {
    className: "related-news block"
  }, __jsx("h2", null, "Related Stories"), __jsx("div", {
    className: "row"
  }, topNews4.map(function (news, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: news.url,
      key: index
    }, __jsx("div", {
      className: "col-auto"
    }, __jsx("img", {
      src: imageUrl(news.image)
    }), __jsx("a", null, news.title)));
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(RelatedNews1));

/***/ })

}]);
//# sourceMappingURL=22.js.map