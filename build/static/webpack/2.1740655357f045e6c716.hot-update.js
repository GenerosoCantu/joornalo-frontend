webpackHotUpdate(2,{

/***/ "./components/adv.js":
/*!***************************!*\
  !*** ./components/adv.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\adv.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Adv = function Adv(context) {
  var loaded = false;
  var isIntersecting = false;
  var id = 'adv' + Math.round(Math.random() * 100000);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var div = document.getElementById(id);

    if (div) {
      var contentWidth = div.offsetWidth;
      console.log(id, '::::', contentWidth);

      try {
        var observer = new IntersectionObserver(handler());
        observer.observe(div);
      } catch (err) {
        safariIssue();
      }
    }
  });

  var handler = function handler(entries, observer) {
    if (!loaded && entries[0].isIntersecting) {
      loaded = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("loaded"), true);
      isIntersecting = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("isIntersecting"), true);
      preLoad();
    }
  };

  var safariIssue = function safariIssue() {
    if (!loaded) {
      loaded = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("loaded"), true);
      isIntersecting = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("isIntersecting"), true);
      preLoad();
    }
  };

  var preLoad = function preLoad() {
    if (isIntersecting) {
      console.log('Ready to load...............................');
    }
  };

  return __jsx("div", {
    className: "adv",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Advertising");
};

/* harmony default export */ __webpack_exports__["default"] = (Adv);

/***/ })

})
//# sourceMappingURL=2.1740655357f045e6c716.hot-update.js.map