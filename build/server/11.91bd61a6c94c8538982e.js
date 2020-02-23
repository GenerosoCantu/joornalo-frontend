exports.ids = [11,23];
exports.modules = {

/***/ "+DNv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k5hG");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Multimedia1 = ({
  data,
  text
}) => {
  return __jsx("div", {
    className: "multimedia1 block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Multimedia")), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.multimedia[0],
    displayDesc: false
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Multimedia1);

/***/ }),

/***/ "k5hG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NewsBlock = ({
  news,
  diaplayImage,
  displayDesc
}) => {
  let image = '',
      desc = '';

  if (typeof diaplayImage === 'undefined' || diaplayImage) {
    image = __jsx("img", {
      src: news.img
    });
  }

  if (typeof displayDesc === 'undefined' || displayDesc) {
    desc = __jsx("div", null, news.desc);
  }

  return __jsx("div", {
    className: "NewsBlock"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: news.url
  }, __jsx("a", null, __jsx("div", {
    className: "img"
  }, image), __jsx("h2", null, news.title), __jsx("div", {
    className: "desc"
  }, desc))));
};

const imageUrl = url => {
  return 'https://data.joornalo.com' + url;
};

/* harmony default export */ __webpack_exports__["default"] = (NewsBlock);

/***/ })

};;