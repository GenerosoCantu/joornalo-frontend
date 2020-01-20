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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);

 // https://www.storyblok.com/tp/react-dynamic-component-from-json
// https://nextjs.org/docs/advanced-features/dynamic-import
// this should come from Config.json

var blockList = ['news1', 'bar', 'boo'];
var ComponentsList = {};
blockList.forEach(function (block, index) {
  ComponentsList[block] = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
    return __webpack_require__("./components lazy recursive ^\\.\\/.*$")("./".concat(block));
  }, {
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(__webpack_require__("./components weak recursive ^\\.\\/.*$").resolve("./".concat(block)))];
      },
      modules: ["./".concat(block)]
    }
  });
});

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
//# sourceMappingURL=[id].js.d3d7b5db380a6a8d8253.hot-update.js.map