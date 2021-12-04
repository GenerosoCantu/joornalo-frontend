exports.ids = [6];
exports.modules = {

/***/ "./components/block-front1.js":
/*!************************************!*\
  !*** ./components/block-front1.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Front1 = ({
  data
}) => {
  return __jsx("div", {
    className: "front1 block"
  }, __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[0]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Front1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLWZyb250MS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld3NCbG9jay5qcyJdLCJuYW1lcyI6WyJGcm9udDEiLCJkYXRhIiwiZnJvbnROZXdzIiwiTmV3c0Jsb2NrIiwibmV3cyIsImRpYXBsYXlJbWFnZSIsImRpc3BsYXlEZXNjIiwiaW1hZ2UiLCJkZXNjIiwiaW1nIiwidXJsIiwidGl0bGUiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFFM0IsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyxxREFBRDtBQUFXLFFBQUksRUFBRUEsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBZjtBQUFqQixJQURGLENBREY7QUFLRCxDQVBEOztBQVNlRixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOztBQUVBLE1BQU1HLFNBQVMsR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsY0FBUjtBQUFzQkM7QUFBdEIsQ0FBRCxLQUF5QztBQUV6RCxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUFBLE1BQ0VDLElBQUksR0FBRyxFQURUOztBQUdBLE1BQUssT0FBT0gsWUFBUCxLQUF3QixXQUF6QixJQUF5Q0EsWUFBN0MsRUFBMkQ7QUFDekRFLFNBQUssR0FBRztBQUFLLFNBQUcsRUFBRUgsSUFBSSxDQUFDSztBQUFmLE1BQVI7QUFDRDs7QUFDRCxNQUFLLE9BQU9ILFdBQVAsS0FBdUIsV0FBeEIsSUFBd0NBLFdBQTVDLEVBQXlEO0FBQ3ZERSxRQUFJLEdBQUcsbUJBQU1KLElBQUksQ0FBQ0ksSUFBWCxDQUFQO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQ0FBWDtBQUE0QyxNQUFFLEVBQUVKLElBQUksQ0FBQ007QUFBckQsS0FDRSxpQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dILEtBREgsQ0FERixFQUlFLGtCQUFLSCxJQUFJLENBQUNPLEtBQVYsQ0FKRixFQUtFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0gsSUFESCxDQUxGLENBREYsQ0FERixDQURGO0FBZUQsQ0ExQkQ7O0FBNEJBLE1BQU1JLFFBQVEsR0FBSUYsR0FBRCxJQUFTO0FBQ3hCLFNBQU8sOEJBQThCQSxHQUFyQztBQUNELENBRkQ7O0FBSWVQLHdFQUFmLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5ld3NCbG9jayBmcm9tIFwiLi9uZXdzQmxvY2suanNcIjtcclxuXHJcbmNvbnN0IEZyb250MSA9ICh7IGRhdGEgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udDEgYmxvY2tcIj5cclxuICAgICAgPE5ld3NCbG9jayBuZXdzPXtkYXRhLmZyb250TmV3c1swXX0+PC9OZXdzQmxvY2s+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyb250MTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IE5ld3NCbG9jayA9ICh7IG5ld3MsIGRpYXBsYXlJbWFnZSwgZGlzcGxheURlc2MgfSkgPT4ge1xyXG5cclxuICBsZXQgaW1hZ2UgPSAnJyxcclxuICAgIGRlc2MgPSAnJztcclxuXHJcbiAgaWYgKCh0eXBlb2YgZGlhcGxheUltYWdlID09PSAndW5kZWZpbmVkJykgfHwgZGlhcGxheUltYWdlKSB7XHJcbiAgICBpbWFnZSA9IDxpbWcgc3JjPXtuZXdzLmltZ30gLz47XHJcbiAgfVxyXG4gIGlmICgodHlwZW9mIGRpc3BsYXlEZXNjID09PSAndW5kZWZpbmVkJykgfHwgZGlzcGxheURlc2MpIHtcclxuICAgIGRlc2MgPSA8ZGl2PntuZXdzLmRlc2N9PC9kaXY+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJOZXdzQmxvY2tcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9zZWN0aW9uL1tzZWN0aW9uXS9bZGF0ZV0vW2lkXVwiIGFzPXtuZXdzLnVybH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgICB7aW1hZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMj57bmV3cy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgICAgIHtkZXNjfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGltYWdlVXJsID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiAnaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbScgKyB1cmw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NCbG9jazsiXSwic291cmNlUm9vdCI6IiJ9