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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLW1lbnUxLmpzIl0sIm5hbWVzIjpbIk1lbnUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRleHQiLCJzdWIiLCJpbmRleDAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBRTFCLFNBRUUsbUVBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FFRSxrQkFDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBRVQ7QUFBSSxPQUFHLEVBQUVBO0FBQVQsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FBeUIsaUJBQUlELElBQUksQ0FBQ0UsSUFBVCxDQUF6QixDQURGLEVBR0U7QUFBSyxVQUFNLEVBQUUsQ0FBQ0YsSUFBSSxDQUFDRyxHQUFuQjtBQUF3QixhQUFTLEVBQUM7QUFBbEMsSUFIRixFQUtFO0FBQUksVUFBTSxFQUFFLENBQUNILElBQUksQ0FBQ0c7QUFBbEIsS0FFR0gsSUFBSSxDQUFDRyxHQUFMLENBQVNKLEdBQVQsQ0FBYSxDQUFDSSxHQUFELEVBQU1DLE1BQU4sS0FDWjtBQUFJLE9BQUcsRUFBRUE7QUFBVCxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUF3QixpQkFBSUQsR0FBRyxDQUFDRCxJQUFSLENBQXhCLENBREYsQ0FERCxDQUZILENBTEYsQ0FGRCxDQURILENBRkYsQ0FERixDQURGLENBRkY7QUFrQ0QsQ0FwQ0Q7O0FBdUNlTCxtRUFBZixFIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IE1lbnUgPSAoeyBpdGVtcyB9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWVudVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcblxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwie2l0ZW0ubGlua31cIj48YT57aXRlbS50ZXh0fTwvYT48L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBoaWRkZW49eyFpdGVtLnN1Yn0gY2xhc3NOYW1lPVwiYmdcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8b2wgaGlkZGVuPXshaXRlbS5zdWJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uc3ViLm1hcCgoc3ViLCBpbmRleDApID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIntzdWIubGlua31cIj48YT57c3ViLnRleHR9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9