exports.ids = [11];
exports.modules = {

/***/ "./components/advOK.js":
/*!*****************************!*\
  !*** ./components/advOK.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\advOK.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Adv = context => {
  let loaded = false;
  let isIntersecting = false;
  const id = 'adv' + Math.round(Math.random() * 100000);
  let msg = '---';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const div = document.getElementById(id);

    if (div) {
      const contentWidth = div.offsetWidth;
      console.log(id, '::::', contentWidth);

      try {
        let observer = new IntersectionObserver((entries, observerChild) => {
          if (!loaded && entries[0].isIntersecting) {
            loaded = true;
            isIntersecting = true;
            observerChild.unobserve(entries[0].target);
            preLoad();
          }
        });
        observer.observe(div);
      } catch (err) {
        safariIssue();
      }
    }
  });

  const safariIssue = () => {
    if (!loaded) {
      loaded = true;
      isIntersecting = true;
      preLoad();
    }
  };

  const preLoad = () => {
    if (isIntersecting) {
      console.log('Ready to load...............................');
      msg = 'Loaded';
    }
  };

  return __jsx("div", {
    className: "adv",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Advertising ", msg);
};

/* harmony default export */ __webpack_exports__["default"] = (Adv);

/***/ })

};;
//# sourceMappingURL=11.js.map