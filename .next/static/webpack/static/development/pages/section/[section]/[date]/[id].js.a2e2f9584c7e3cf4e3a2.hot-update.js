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
/* harmony import */ var _news1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news1 */ "./components/news1.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar */ "./components/bar.js");
/* harmony import */ var _boo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boo */ "./components/boo.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
// https://www.storyblok.com/tp/react-dynamic-component-from-json





var ComponentsList = {
  news1: _news1__WEBPACK_IMPORTED_MODULE_1__["default"],
  bar: _bar__WEBPACK_IMPORTED_MODULE_2__["default"],
  boo: _boo__WEBPACK_IMPORTED_MODULE_3__["default"]
}; // https://nextjs.org/docs/advanced-features/dynamic-import
// import dynamic from 'next/dynamic'
// const DynamicComponent = dynamic(() => import('../components/hello'))
// search for dynamic imports

var blockList = [_news1__WEBPACK_IMPORTED_MODULE_1__["default"], _bar__WEBPACK_IMPORTED_MODULE_2__["default"], _boo__WEBPACK_IMPORTED_MODULE_3__["default"]];
var dynamicList = {}; // const DynamicComponent = dynamic(() => import('./boo'));

blockList.forEach(function (block, index) {
  console.log(block);
  dynamicList[block] = index;
}); //console.log(dynamicList);

var Components = function Components(_ref) {
  var component = _ref.component,
      data = _ref.data,
      text = _ref.text;
  var key = Math.floor(Math.random() * 100000); //if (typeof ComponentsList[block.component] !== "undefined") {
  // return (<div>x</div>)

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentsList[component], {
    key: key,
    component: component,
    data: data,
    text: text
  }); // } else {
  //   console.log("+++++++++++++++")
  // }
};

/* harmony default export */ __webpack_exports__["default"] = (Components);

/***/ })

})
//# sourceMappingURL=[id].js.a2e2f9584c7e3cf4e3a2.hot-update.js.map