exports.ids = [4];
exports.modules = {

/***/ "./components/block-featured1.js":
/*!***************************************!*\
  !*** ./components/block-featured1.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Featured1 = ({
  data
}) => {
  return __jsx("div", {
    className: "featured1 block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Featured")), data.featured.map((news, index) => __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: news,
    displayDesc: false,
    key: index
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Featured1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLWZlYXR1cmVkMS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld3NCbG9jay5qcyJdLCJuYW1lcyI6WyJGZWF0dXJlZDEiLCJkYXRhIiwiZmVhdHVyZWQiLCJtYXAiLCJuZXdzIiwiaW5kZXgiLCJOZXdzQmxvY2siLCJkaWFwbGF5SW1hZ2UiLCJkaXNwbGF5RGVzYyIsImltYWdlIiwiZGVzYyIsImltZyIsInVybCIsInRpdGxlIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQzlCLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBNkIsK0JBQTdCLENBREYsRUFFR0EsSUFBSSxDQUFDQyxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ2pCLE1BQUMscURBQUQ7QUFBVyxRQUFJLEVBQUVELElBQWpCO0FBQXVCLGVBQVcsRUFBRSxLQUFwQztBQUEyQyxPQUFHLEVBQUVDO0FBQWhELElBREQsQ0FGSCxDQURGO0FBUUQsQ0FURDs7QUFXZUwsd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7QUFFQSxNQUFNTSxTQUFTLEdBQUcsQ0FBQztBQUFFRixNQUFGO0FBQVFHLGNBQVI7QUFBc0JDO0FBQXRCLENBQUQsS0FBeUM7QUFFekQsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFBQSxNQUNFQyxJQUFJLEdBQUcsRUFEVDs7QUFHQSxNQUFLLE9BQU9ILFlBQVAsS0FBd0IsV0FBekIsSUFBeUNBLFlBQTdDLEVBQTJEO0FBQ3pERSxTQUFLLEdBQUc7QUFBSyxTQUFHLEVBQUVMLElBQUksQ0FBQ087QUFBZixNQUFSO0FBQ0Q7O0FBQ0QsTUFBSyxPQUFPSCxXQUFQLEtBQXVCLFdBQXhCLElBQXdDQSxXQUE1QyxFQUF5RDtBQUN2REUsUUFBSSxHQUFHLG1CQUFNTixJQUFJLENBQUNNLElBQVgsQ0FBUDtBQUNEOztBQUNELFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0NBQVg7QUFBNEMsTUFBRSxFQUFFTixJQUFJLENBQUNRO0FBQXJELEtBQ0UsaUJBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHSCxLQURILENBREYsRUFJRSxrQkFBS0wsSUFBSSxDQUFDUyxLQUFWLENBSkYsRUFLRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dILElBREgsQ0FMRixDQURGLENBREYsQ0FERjtBQWVELENBMUJEOztBQTRCQSxNQUFNSSxRQUFRLEdBQUlGLEdBQUQsSUFBUztBQUN4QixTQUFPLDhCQUE4QkEsR0FBckM7QUFDRCxDQUZEOztBQUllTix3RUFBZixFIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdzQmxvY2sgZnJvbSBcIi4vbmV3c0Jsb2NrLmpzXCI7XHJcblxyXG5jb25zdCBGZWF0dXJlZDEgPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZDEgYmxvY2tcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja2hlYWRlclwiPjxzcGFuPkZlYXR1cmVkPC9zcGFuPjwvZGl2PlxyXG4gICAgICB7ZGF0YS5mZWF0dXJlZC5tYXAoKG5ld3MsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPE5ld3NCbG9jayBuZXdzPXtuZXdzfSBkaXNwbGF5RGVzYz17ZmFsc2V9IGtleT17aW5kZXh9PjwvTmV3c0Jsb2NrPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWQxOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTmV3c0Jsb2NrID0gKHsgbmV3cywgZGlhcGxheUltYWdlLCBkaXNwbGF5RGVzYyB9KSA9PiB7XHJcblxyXG4gIGxldCBpbWFnZSA9ICcnLFxyXG4gICAgZGVzYyA9ICcnO1xyXG5cclxuICBpZiAoKHR5cGVvZiBkaWFwbGF5SW1hZ2UgPT09ICd1bmRlZmluZWQnKSB8fCBkaWFwbGF5SW1hZ2UpIHtcclxuICAgIGltYWdlID0gPGltZyBzcmM9e25ld3MuaW1nfSAvPjtcclxuICB9XHJcbiAgaWYgKCh0eXBlb2YgZGlzcGxheURlc2MgPT09ICd1bmRlZmluZWQnKSB8fCBkaXNwbGF5RGVzYykge1xyXG4gICAgZGVzYyA9IDxkaXY+e25ld3MuZGVzY308L2Rpdj47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld3NCbG9ja1wiPlxyXG4gICAgICA8TGluayBocmVmPVwiL3NlY3Rpb24vW3NlY3Rpb25dL1tkYXRlXS9baWRdXCIgYXM9e25ld3MudXJsfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgIHtpbWFnZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyPntuZXdzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICAgICAge2Rlc2N9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgaW1hZ2VVcmwgPSAodXJsKSA9PiB7XHJcbiAgcmV0dXJuICdodHRwczovL2RhdGEuam9vcm5hbG8uY29tJyArIHVybDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0Jsb2NrOyJdLCJzb3VyY2VSb290IjoiIn0=