(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./components/block-opinion1.js":
/*!**************************************!*\
  !*** ./components/block-opinion1.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Opinion1 = function Opinion1(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "opinion1 block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Opinion")), __jsx("ol", null, data.opinion.map(function (news, index) {
    return __jsx("li", {
      key: index
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: news.url
    }, __jsx("a", null, __jsx("h5", null, news.column), __jsx("h6", null, news.author), __jsx("h5", {
      className: "title"
    }, news.title))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Opinion1);

/***/ })

}]);
//# sourceMappingURL=20.js.map