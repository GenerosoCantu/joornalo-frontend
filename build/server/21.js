exports.ids = [21];
exports.modules = {

/***/ "./components/block-related-news1.js":
/*!*******************************************!*\
  !*** ./components/block-related-news1.js ***!
  \*******************************************/
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




const RelatedNews1 = ({
  topNews
}) => {
  if (!topNews) return null;
  let topNews4 = topNews.slice(0, 4);
  return __jsx("div", {
    className: "related-news block"
  }, __jsx("h2", null, "Related Stories"), __jsx("div", {
    className: "row"
  }, topNews4.map((news, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: news.url,
    key: index
  }, __jsx("div", {
    className: "col-auto"
  }, __jsx("img", {
    src: imageUrl(news.image)
  }), __jsx("a", null, news.title))))));
};

const imageUrl = url => {
  return 'https://data.joornalo.com' + url;
};

const mapStateToProps = state => ({
  topNews: state.news.topNews
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(RelatedNews1));

/***/ })

};;
//# sourceMappingURL=21.js.map