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
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\components.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // https://www.storyblok.com/tp/react-dynamic-component-from-json
// https://nextjs.org/docs/advanced-features/dynamic-import
// this should come from Config.json

var blockList = ['adv', 'adv2', 'header1', 'header-mobile1', 'news1', 'news2', 'news-mobile1', 'news-header1', 'other-news1', 'related-news1', 'most-viewed1', 'featured1', 'footer1', 'footer-mobile1', 'front1', 'front2', 'opinion1', 'multimedia1', 'weather1', 'latest1', 'sections1'];
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
      params = _ref.params;
  var key = Math.floor(Math.random() * 100000);

  if (typeof ComponentsList[component] !== "undefined") {
    //console.log("+++++++++++++++ Component: ", component)
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentsList[component], {
      key: key,
      component: component,
      data: data,
      params: params
    });
  } else {
    console.log("+++++++++++++++ Component not found!!!");
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Component not found!!!");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Components);

/***/ })

})
//# sourceMappingURL=[id].js.8444462cfce9ecb99387.hot-update.js.map