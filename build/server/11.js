exports.ids = [11];
exports.modules = {

/***/ "./components/block-multimedia1.js":
/*!*****************************************!*\
  !*** ./components/block-multimedia1.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Multimedia1 = ({
  data,
  text
}) => {
  return __jsx("div", {
    className: "multimedia1 block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Multimedia")), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.multimedia[0],
    displayDesc: false
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Multimedia1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLW11bHRpbWVkaWExLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3c0Jsb2NrLmpzIl0sIm5hbWVzIjpbIk11bHRpbWVkaWExIiwiZGF0YSIsInRleHQiLCJtdWx0aW1lZGlhIiwiTmV3c0Jsb2NrIiwibmV3cyIsImRpYXBsYXlJbWFnZSIsImRpc3BsYXlEZXNjIiwiaW1hZ2UiLCJkZXNjIiwiaW1nIiwidXJsIiwidGl0bGUiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBb0I7QUFDdEMsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUE2QixpQ0FBN0IsQ0FERixFQUVFLE1BQUMscURBQUQ7QUFBVyxRQUFJLEVBQUVELElBQUksQ0FBQ0UsVUFBTCxDQUFnQixDQUFoQixDQUFqQjtBQUFxQyxlQUFXLEVBQUU7QUFBbEQsSUFGRixDQURGO0FBU0QsQ0FWRDs7QUFZZUgsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQSxNQUFNSSxTQUFTLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDLGNBQVI7QUFBc0JDO0FBQXRCLENBQUQsS0FBeUM7QUFFekQsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFBQSxNQUNFQyxJQUFJLEdBQUcsRUFEVDs7QUFHQSxNQUFLLE9BQU9ILFlBQVAsS0FBd0IsV0FBekIsSUFBeUNBLFlBQTdDLEVBQTJEO0FBQ3pERSxTQUFLLEdBQUc7QUFBSyxTQUFHLEVBQUVILElBQUksQ0FBQ0s7QUFBZixNQUFSO0FBQ0Q7O0FBQ0QsTUFBSyxPQUFPSCxXQUFQLEtBQXVCLFdBQXhCLElBQXdDQSxXQUE1QyxFQUF5RDtBQUN2REUsUUFBSSxHQUFHLG1CQUFNSixJQUFJLENBQUNJLElBQVgsQ0FBUDtBQUNEOztBQUNELFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0NBQVg7QUFBNEMsTUFBRSxFQUFFSixJQUFJLENBQUNNO0FBQXJELEtBQ0UsaUJBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHSCxLQURILENBREYsRUFJRSxrQkFBS0gsSUFBSSxDQUFDTyxLQUFWLENBSkYsRUFLRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dILElBREgsQ0FMRixDQURGLENBREYsQ0FERjtBQWVELENBMUJEOztBQTRCQSxNQUFNSSxRQUFRLEdBQUlGLEdBQUQsSUFBUztBQUN4QixTQUFPLDhCQUE4QkEsR0FBckM7QUFDRCxDQUZEOztBQUllUCx3RUFBZixFIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV3c0Jsb2NrIGZyb20gXCIuL25ld3NCbG9jay5qc1wiO1xyXG5cclxuY29uc3QgTXVsdGltZWRpYTEgPSAoeyBkYXRhLCB0ZXh0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdWx0aW1lZGlhMSBibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NraGVhZGVyXCI+PHNwYW4+TXVsdGltZWRpYTwvc3Bhbj48L2Rpdj5cclxuICAgICAgPE5ld3NCbG9jayBuZXdzPXtkYXRhLm11bHRpbWVkaWFbMF19IGRpc3BsYXlEZXNjPXtmYWxzZX0+PC9OZXdzQmxvY2s+XHJcbiAgICAgIHsvKiB7ZGF0YS5tdWx0aW1lZGlhLm1hcCgobmV3cywgaW5kZXgpID0+IChcclxuICAgICAgICA8TmV3c0Jsb2NrIG5ld3M9e25ld3N9IGRpc3BsYXlEZXNjPXtmYWxzZX0ga2V5PXtpbmRleH0+PC9OZXdzQmxvY2s+XHJcbiAgICAgICkpfSAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVsdGltZWRpYTE7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBOZXdzQmxvY2sgPSAoeyBuZXdzLCBkaWFwbGF5SW1hZ2UsIGRpc3BsYXlEZXNjIH0pID0+IHtcclxuXHJcbiAgbGV0IGltYWdlID0gJycsXHJcbiAgICBkZXNjID0gJyc7XHJcblxyXG4gIGlmICgodHlwZW9mIGRpYXBsYXlJbWFnZSA9PT0gJ3VuZGVmaW5lZCcpIHx8IGRpYXBsYXlJbWFnZSkge1xyXG4gICAgaW1hZ2UgPSA8aW1nIHNyYz17bmV3cy5pbWd9IC8+O1xyXG4gIH1cclxuICBpZiAoKHR5cGVvZiBkaXNwbGF5RGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHx8IGRpc3BsYXlEZXNjKSB7XHJcbiAgICBkZXNjID0gPGRpdj57bmV3cy5kZXNjfTwvZGl2PjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3c0Jsb2NrXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VjdGlvbi9bc2VjdGlvbl0vW2RhdGVdL1tpZF1cIiBhcz17bmV3cy51cmx9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAge2ltYWdlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDI+e25ld3MudGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgICAgICB7ZGVzY31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBpbWFnZVVybCA9ICh1cmwpID0+IHtcclxuICByZXR1cm4gJ2h0dHBzOi8vZGF0YS5qb29ybmFsby5jb20nICsgdXJsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzQmxvY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==