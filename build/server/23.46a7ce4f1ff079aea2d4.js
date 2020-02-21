exports.ids = [23];
exports.modules = {

/***/ "WAbn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Opinion1 = ({
  data
}) => {
  return __jsx("div", {
    className: "opinion1 block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Opinion")), __jsx("ol", null, data.opinion.map((news, index) => __jsx("li", {
    key: index
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: news.url
  }, __jsx("a", null, __jsx("h5", null, news.column), __jsx("h6", null, news.author), __jsx("h5", {
    className: "title"
  }, news.title)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Opinion1);

/***/ })

};;