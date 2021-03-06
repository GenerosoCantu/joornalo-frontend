exports.ids = [16];
exports.modules = {

/***/ "./components/block-header-mobile1.js":
/*!********************************************!*\
  !*** ./components/block-header-mobile1.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const headerMobile = ({
  data
}) => {
  function mobileMenu() {
    console.log('Click!');
  }

  return __jsx("div", {
    className: "mobileHeader"
  }, __jsx("div", {
    className: "menu",
    onClick: mobileMenu
  }), __jsx("div", {
    className: "logo"
  }, __jsx("a", {
    href: "/"
  })), __jsx("a", {
    className: "search",
    href: "search"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (headerMobile);

/***/ })

};;
//# sourceMappingURL=16.js.map