exports.ids = [8];
exports.modules = {

/***/ "./components/block-galleries1.js":
/*!****************************************!*\
  !*** ./components/block-galleries1.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Galleries1 = ({
  data
}) => {
  return __jsx("div", {
    className: "galleries1 block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Galleries")), data.galleries.map((news, index) => __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: news,
    displayDesc: false,
    key: index
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Galleries1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLWdhbGxlcmllczEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdzQmxvY2suanMiXSwibmFtZXMiOlsiR2FsbGVyaWVzMSIsImRhdGEiLCJnYWxsZXJpZXMiLCJtYXAiLCJuZXdzIiwiaW5kZXgiLCJOZXdzQmxvY2siLCJkaWFwbGF5SW1hZ2UiLCJkaXNwbGF5RGVzYyIsImltYWdlIiwiZGVzYyIsImltZyIsInVybCIsInRpdGxlIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQy9CLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBNkIsZ0NBQTdCLENBREYsRUFFR0EsSUFBSSxDQUFDQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ2xCLE1BQUMscURBQUQ7QUFBVyxRQUFJLEVBQUVELElBQWpCO0FBQXVCLGVBQVcsRUFBRSxLQUFwQztBQUEyQyxPQUFHLEVBQUVDO0FBQWhELElBREQsQ0FGSCxDQURGO0FBUUQsQ0FURDs7QUFXZUwseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7QUFFQSxNQUFNTSxTQUFTLEdBQUcsQ0FBQztBQUFFRixNQUFGO0FBQVFHLGNBQVI7QUFBc0JDO0FBQXRCLENBQUQsS0FBeUM7QUFFekQsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFBQSxNQUNFQyxJQUFJLEdBQUcsRUFEVDs7QUFHQSxNQUFLLE9BQU9ILFlBQVAsS0FBd0IsV0FBekIsSUFBeUNBLFlBQTdDLEVBQTJEO0FBQ3pERSxTQUFLLEdBQUc7QUFBSyxTQUFHLEVBQUVMLElBQUksQ0FBQ087QUFBZixNQUFSO0FBQ0Q7O0FBQ0QsTUFBSyxPQUFPSCxXQUFQLEtBQXVCLFdBQXhCLElBQXdDQSxXQUE1QyxFQUF5RDtBQUN2REUsUUFBSSxHQUFHLG1CQUFNTixJQUFJLENBQUNNLElBQVgsQ0FBUDtBQUNEOztBQUNELFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0NBQVg7QUFBNEMsTUFBRSxFQUFFTixJQUFJLENBQUNRO0FBQXJELEtBQ0UsaUJBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHSCxLQURILENBREYsRUFJRSxrQkFBS0wsSUFBSSxDQUFDUyxLQUFWLENBSkYsRUFLRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dILElBREgsQ0FMRixDQURGLENBREYsQ0FERjtBQWVELENBMUJEOztBQTRCQSxNQUFNSSxRQUFRLEdBQUlGLEdBQUQsSUFBUztBQUN4QixTQUFPLDhCQUE4QkEsR0FBckM7QUFDRCxDQUZEOztBQUllTix3RUFBZixFIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdzQmxvY2sgZnJvbSBcIi4vbmV3c0Jsb2NrLmpzXCI7XHJcblxyXG5jb25zdCBHYWxsZXJpZXMxID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyaWVzMSBibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NraGVhZGVyXCI+PHNwYW4+R2FsbGVyaWVzPC9zcGFuPjwvZGl2PlxyXG4gICAgICB7ZGF0YS5nYWxsZXJpZXMubWFwKChuZXdzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxOZXdzQmxvY2sgbmV3cz17bmV3c30gZGlzcGxheURlc2M9e2ZhbHNlfSBrZXk9e2luZGV4fT48L05ld3NCbG9jaz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcmllczE7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBOZXdzQmxvY2sgPSAoeyBuZXdzLCBkaWFwbGF5SW1hZ2UsIGRpc3BsYXlEZXNjIH0pID0+IHtcclxuXHJcbiAgbGV0IGltYWdlID0gJycsXHJcbiAgICBkZXNjID0gJyc7XHJcblxyXG4gIGlmICgodHlwZW9mIGRpYXBsYXlJbWFnZSA9PT0gJ3VuZGVmaW5lZCcpIHx8IGRpYXBsYXlJbWFnZSkge1xyXG4gICAgaW1hZ2UgPSA8aW1nIHNyYz17bmV3cy5pbWd9IC8+O1xyXG4gIH1cclxuICBpZiAoKHR5cGVvZiBkaXNwbGF5RGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHx8IGRpc3BsYXlEZXNjKSB7XHJcbiAgICBkZXNjID0gPGRpdj57bmV3cy5kZXNjfTwvZGl2PjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3c0Jsb2NrXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VjdGlvbi9bc2VjdGlvbl0vW2RhdGVdL1tpZF1cIiBhcz17bmV3cy51cmx9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAge2ltYWdlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDI+e25ld3MudGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgICAgICB7ZGVzY31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBpbWFnZVVybCA9ICh1cmwpID0+IHtcclxuICByZXR1cm4gJ2h0dHBzOi8vZGF0YS5qb29ybmFsby5jb20nICsgdXJsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzQmxvY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==