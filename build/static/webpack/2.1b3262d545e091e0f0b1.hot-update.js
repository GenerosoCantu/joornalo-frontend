webpackHotUpdate(2,{

/***/ "./components/adv.js":
/*!***************************!*\
  !*** ./components/adv.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\adv.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Adv = function Adv(context) {
  var loaded = false;
  var isIntersecting = false;
  var id = 'adv' + Math.round(Math.random() * 100000);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var div = document.getElementById(id);

    if (div) {
      var contentWidth = div.offsetWidth;
      console.log(id, '::::', contentWidth);

      try {
        var observer = new IntersectionObserver(function (entries, observer) {
          console.log(entries[0].isIntersecting);

          if (!loaded && entries[0].isIntersecting) {
            loaded = true;
            isIntersecting = true;
            preLoad();
          }
        });
        observer.observe(div);
      } catch (err) {
        safariIssue();
      }
    }
  });

  var handler = function handler(entries, observer) {
    console.log(entries);
    console.log(entries[0]);

    if (!loaded && entries[0].isIntersecting) {
      loaded = true;
      isIntersecting = true;
      preLoad();
    }
  };

  var safariIssue = function safariIssue() {
    if (!loaded) {
      loaded = true;
      isIntersecting = true;
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
      lineNumber: 56
    },
    __self: this
  }, "Advertising");
};

/* harmony default export */ __webpack_exports__["default"] = (Adv);

/***/ })

})
//# sourceMappingURL=2.1b3262d545e091e0f0b1.hot-update.js.map