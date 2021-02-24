exports.ids = [17];
exports.modules = {

/***/ "./components/block-menu1.js":
/*!***********************************!*\
  !*** ./components/block-menu1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Menu = ({
  items
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row menu"
  }, __jsx("div", {
    className: "col"
  }, __jsx("ul", null, items.map((item, index) => __jsx("li", {
    key: index
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "{item.link}"
  }, __jsx("a", null, item.text)), __jsx("div", {
    hidden: !item.sub,
    className: "bg"
  }), __jsx("ol", {
    hidden: !item.sub
  }, item.sub.map((sub, index0) => __jsx("li", {
    key: index0
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "{sub.link}"
  }, __jsx("a", null, sub.text)))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

};;
//# sourceMappingURL=17.js.map