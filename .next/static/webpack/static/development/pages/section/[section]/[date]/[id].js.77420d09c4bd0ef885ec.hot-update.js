webpackHotUpdate("static\\development\\pages\\section\\[section]\\[date]\\[id].js",{

/***/ "./components/components.js":
/*!**********************************!*\
  !*** ./components/components.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Foo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Foo */ "./components/Foo.js");
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bar */ "./components/Bar.js");
/* harmony import */ var _Boo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Boo */ "./components/Boo.js");
// https://www.storyblok.com/tp/react-dynamic-component-from-json




var ComponentsList = {
  foo: _Foo__WEBPACK_IMPORTED_MODULE_1__["default"],
  bar: _Bar__WEBPACK_IMPORTED_MODULE_2__["default"],
  boo: _Boo__WEBPACK_IMPORTED_MODULE_3__["default"]
};

var Components = function Components(props) {
  var block = props.block;
  var key = Math.floor(Math.random() * 100000); //if (typeof ComponentsList[block.component] !== "undefined") {

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentsList[block.component], {
    key: key,
    block: block,
    data: props.data
  }); // } else {
  //   console.log("+++++++++++++++")
  // }
};

/* harmony default export */ __webpack_exports__["default"] = (Components);

/***/ })

})
//# sourceMappingURL=[id].js.77420d09c4bd0ef885ec.hot-update.js.map