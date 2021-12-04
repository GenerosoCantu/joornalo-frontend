exports.ids = [12];
exports.modules = {

/***/ "./components/block-sections1.js":
/*!***************************************!*\
  !*** ./components/block-sections1.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Sections1 = ({
  data
}) => {
  return __jsx("div", {
    className: "sections1 block"
  }, data.sectionNews.map((section, index) => __jsx("div", {
    key: index
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, section.section)), __jsx("div", {
    className: "row"
  }, section.news.map((news, index0) => __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: news,
    displayDesc: false,
    key: index0
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sections1);

/***/ }),

/***/ "./components/newsBlock.js":
/*!*********************************!*\
  !*** ./components/newsBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NewsBlock = ({
  news,
  diaplayImage,
  displayDesc
}) => {
  let image = '',
      desc = '';

  if (typeof diaplayImage === 'undefined' || diaplayImage) {
    image = __jsx("img", {
      src: news.img
    });
  }

  if (typeof displayDesc === 'undefined' || displayDesc) {
    desc = __jsx("div", null, news.desc);
  }

  return __jsx("div", {
    className: "NewsBlock"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: news.url
  }, __jsx("a", null, __jsx("div", {
    className: "img"
  }, image), __jsx("h2", null, news.title), __jsx("div", {
    className: "desc"
  }, desc))));
};

const imageUrl = url => {
  return 'https://data.joornalo.com' + url;
};

/* harmony default export */ __webpack_exports__["default"] = (NewsBlock);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLXNlY3Rpb25zMS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld3NCbG9jay5qcyJdLCJuYW1lcyI6WyJTZWN0aW9uczEiLCJkYXRhIiwic2VjdGlvbk5ld3MiLCJtYXAiLCJzZWN0aW9uIiwiaW5kZXgiLCJuZXdzIiwiaW5kZXgwIiwiTmV3c0Jsb2NrIiwiZGlhcGxheUltYWdlIiwiZGlzcGxheURlc2MiLCJpbWFnZSIsImRlc2MiLCJpbWciLCJ1cmwiLCJ0aXRsZSIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUM5QixTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0EsSUFBSSxDQUFDQyxXQUFMLENBQWlCQyxHQUFqQixDQUFxQixDQUFDQyxPQUFELEVBQVVDLEtBQVYsS0FDcEI7QUFBSyxPQUFHLEVBQUVBO0FBQVYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQTZCLG9CQUFPRCxPQUFPLENBQUNBLE9BQWYsQ0FBN0IsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0EsT0FBTyxDQUFDRSxJQUFSLENBQWFILEdBQWIsQ0FBaUIsQ0FBQ0csSUFBRCxFQUFPQyxNQUFQLEtBQ2hCLE1BQUMscURBQUQ7QUFBVyxRQUFJLEVBQUVELElBQWpCO0FBQXVCLGVBQVcsRUFBRSxLQUFwQztBQUEyQyxPQUFHLEVBQUVDO0FBQWhELElBREQsQ0FESCxDQUZGLENBREQsQ0FESCxDQURGO0FBY0QsQ0FmRDs7QUFpQmVQLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOztBQUVBLE1BQU1RLFNBQVMsR0FBRyxDQUFDO0FBQUVGLE1BQUY7QUFBUUcsY0FBUjtBQUFzQkM7QUFBdEIsQ0FBRCxLQUF5QztBQUV6RCxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUFBLE1BQ0VDLElBQUksR0FBRyxFQURUOztBQUdBLE1BQUssT0FBT0gsWUFBUCxLQUF3QixXQUF6QixJQUF5Q0EsWUFBN0MsRUFBMkQ7QUFDekRFLFNBQUssR0FBRztBQUFLLFNBQUcsRUFBRUwsSUFBSSxDQUFDTztBQUFmLE1BQVI7QUFDRDs7QUFDRCxNQUFLLE9BQU9ILFdBQVAsS0FBdUIsV0FBeEIsSUFBd0NBLFdBQTVDLEVBQXlEO0FBQ3ZERSxRQUFJLEdBQUcsbUJBQU1OLElBQUksQ0FBQ00sSUFBWCxDQUFQO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQ0FBWDtBQUE0QyxNQUFFLEVBQUVOLElBQUksQ0FBQ1E7QUFBckQsS0FDRSxpQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dILEtBREgsQ0FERixFQUlFLGtCQUFLTCxJQUFJLENBQUNTLEtBQVYsQ0FKRixFQUtFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0gsSUFESCxDQUxGLENBREYsQ0FERixDQURGO0FBZUQsQ0ExQkQ7O0FBNEJBLE1BQU1JLFFBQVEsR0FBSUYsR0FBRCxJQUFTO0FBQ3hCLFNBQU8sOEJBQThCQSxHQUFyQztBQUNELENBRkQ7O0FBSWVOLHdFQUFmLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdzQmxvY2sgZnJvbSBcIi4vbmV3c0Jsb2NrLmpzXCI7XHJcblxyXG5jb25zdCBTZWN0aW9uczEgPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uczEgYmxvY2tcIj5cclxuICAgICAge2RhdGEuc2VjdGlvbk5ld3MubWFwKChzZWN0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NraGVhZGVyXCI+PHNwYW4+e3NlY3Rpb24uc2VjdGlvbn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7c2VjdGlvbi5uZXdzLm1hcCgobmV3cywgaW5kZXgwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE5ld3NCbG9jayBuZXdzPXtuZXdzfSBkaXNwbGF5RGVzYz17ZmFsc2V9IGtleT17aW5kZXgwfT48L05ld3NCbG9jaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zMTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IE5ld3NCbG9jayA9ICh7IG5ld3MsIGRpYXBsYXlJbWFnZSwgZGlzcGxheURlc2MgfSkgPT4ge1xyXG5cclxuICBsZXQgaW1hZ2UgPSAnJyxcclxuICAgIGRlc2MgPSAnJztcclxuXHJcbiAgaWYgKCh0eXBlb2YgZGlhcGxheUltYWdlID09PSAndW5kZWZpbmVkJykgfHwgZGlhcGxheUltYWdlKSB7XHJcbiAgICBpbWFnZSA9IDxpbWcgc3JjPXtuZXdzLmltZ30gLz47XHJcbiAgfVxyXG4gIGlmICgodHlwZW9mIGRpc3BsYXlEZXNjID09PSAndW5kZWZpbmVkJykgfHwgZGlzcGxheURlc2MpIHtcclxuICAgIGRlc2MgPSA8ZGl2PntuZXdzLmRlc2N9PC9kaXY+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJOZXdzQmxvY2tcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9zZWN0aW9uL1tzZWN0aW9uXS9bZGF0ZV0vW2lkXVwiIGFzPXtuZXdzLnVybH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgICB7aW1hZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMj57bmV3cy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgICAgIHtkZXNjfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGltYWdlVXJsID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiAnaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbScgKyB1cmw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NCbG9jazsiXSwic291cmNlUm9vdCI6IiJ9