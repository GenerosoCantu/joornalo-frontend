exports.ids = [20];
exports.modules = {

/***/ "./components/block-other-news1.js":
/*!*****************************************!*\
  !*** ./components/block-other-news1.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const OtherNews1 = ({
  moreNews
}) => {
  if (!moreNews) return null;
  return __jsx("div", {
    className: "other-news block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Other News")), __jsx("ul", null, moreNews.map((news, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: news.url,
    key: index
  }, __jsx("li", null, __jsx("a", null, __jsx("img", {
    src: imageUrl(news.image)
  }), __jsx("div", null, news.title)))))));
};

const imageUrl = url => {
  return 'https://data.joornalo.com' + url;
};

const mapStateToProps = state => ({
  moreNews: state.news.moreNews
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(OtherNews1));

/***/ })

};;
//# sourceMappingURL=20.js.map