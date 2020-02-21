exports.ids = [7,23];
exports.modules = {

/***/ "Bdxt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k5hG");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Front2 = ({
  data
}) => {
  return __jsx("div", {
    className: "front2 block"
  }, __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[1],
    displayDesc: false
  }), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[2],
    displayDesc: false
  }), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[3],
    displayDesc: false
  }), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[4],
    displayDesc: false
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Front2);

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
  }, __jsx("a", null, image, __jsx("h2", null, news.title), desc)));
};

const imageUrl = url => {
  return 'https://data.joornalo.com' + url;
};

/* harmony default export */ __webpack_exports__["default"] = (NewsBlock);

/***/ })

};;