exports.ids = [7];
exports.modules = {

/***/ "./components/block-front2.js":
/*!************************************!*\
  !*** ./components/block-front2.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Front2 = ({
  data
}) => {
  return __jsx("div", {
    className: "front2 block"
  }, __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[1],
    displayDesc: false
  }), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[2],
    displayDesc: false
  }), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[3],
    displayDesc: false
  }), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.frontNews[4],
    displayDesc: false
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Front2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLWZyb250Mi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld3NCbG9jay5qcyJdLCJuYW1lcyI6WyJGcm9udDIiLCJkYXRhIiwiZnJvbnROZXdzIiwiTmV3c0Jsb2NrIiwibmV3cyIsImRpYXBsYXlJbWFnZSIsImRpc3BsYXlEZXNjIiwiaW1hZ2UiLCJkZXNjIiwiaW1nIiwidXJsIiwidGl0bGUiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDM0IsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyxxREFBRDtBQUFXLFFBQUksRUFBRUEsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBZixDQUFqQjtBQUFvQyxlQUFXLEVBQUU7QUFBakQsSUFERixFQUVFLE1BQUMscURBQUQ7QUFBVyxRQUFJLEVBQUVELElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQWYsQ0FBakI7QUFBb0MsZUFBVyxFQUFFO0FBQWpELElBRkYsRUFHRSxNQUFDLHFEQUFEO0FBQVcsUUFBSSxFQUFFRCxJQUFJLENBQUNDLFNBQUwsQ0FBZSxDQUFmLENBQWpCO0FBQW9DLGVBQVcsRUFBRTtBQUFqRCxJQUhGLEVBSUUsTUFBQyxxREFBRDtBQUFXLFFBQUksRUFBRUQsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBZixDQUFqQjtBQUFvQyxlQUFXLEVBQUU7QUFBakQsSUFKRixDQURGO0FBUUQsQ0FURDs7QUFXZUYscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7QUFFQSxNQUFNRyxTQUFTLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDLGNBQVI7QUFBc0JDO0FBQXRCLENBQUQsS0FBeUM7QUFFekQsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFBQSxNQUNFQyxJQUFJLEdBQUcsRUFEVDs7QUFHQSxNQUFLLE9BQU9ILFlBQVAsS0FBd0IsV0FBekIsSUFBeUNBLFlBQTdDLEVBQTJEO0FBQ3pERSxTQUFLLEdBQUc7QUFBSyxTQUFHLEVBQUVILElBQUksQ0FBQ0s7QUFBZixNQUFSO0FBQ0Q7O0FBQ0QsTUFBSyxPQUFPSCxXQUFQLEtBQXVCLFdBQXhCLElBQXdDQSxXQUE1QyxFQUF5RDtBQUN2REUsUUFBSSxHQUFHLG1CQUFNSixJQUFJLENBQUNJLElBQVgsQ0FBUDtBQUNEOztBQUNELFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0NBQVg7QUFBNEMsTUFBRSxFQUFFSixJQUFJLENBQUNNO0FBQXJELEtBQ0UsaUJBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHSCxLQURILENBREYsRUFJRSxrQkFBS0gsSUFBSSxDQUFDTyxLQUFWLENBSkYsRUFLRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dILElBREgsQ0FMRixDQURGLENBREYsQ0FERjtBQWVELENBMUJEOztBQTRCQSxNQUFNSSxRQUFRLEdBQUlGLEdBQUQsSUFBUztBQUN4QixTQUFPLDhCQUE4QkEsR0FBckM7QUFDRCxDQUZEOztBQUllUCx3RUFBZixFIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdzQmxvY2sgZnJvbSBcIi4vbmV3c0Jsb2NrLmpzXCI7XHJcblxyXG5jb25zdCBGcm9udDIgPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udDIgYmxvY2tcIj5cclxuICAgICAgPE5ld3NCbG9jayBuZXdzPXtkYXRhLmZyb250TmV3c1sxXX0gZGlzcGxheURlc2M9e2ZhbHNlfT48L05ld3NCbG9jaz5cclxuICAgICAgPE5ld3NCbG9jayBuZXdzPXtkYXRhLmZyb250TmV3c1syXX0gZGlzcGxheURlc2M9e2ZhbHNlfT48L05ld3NCbG9jaz5cclxuICAgICAgPE5ld3NCbG9jayBuZXdzPXtkYXRhLmZyb250TmV3c1szXX0gZGlzcGxheURlc2M9e2ZhbHNlfT48L05ld3NCbG9jaz5cclxuICAgICAgPE5ld3NCbG9jayBuZXdzPXtkYXRhLmZyb250TmV3c1s0XX0gZGlzcGxheURlc2M9e2ZhbHNlfT48L05ld3NCbG9jaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJvbnQyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTmV3c0Jsb2NrID0gKHsgbmV3cywgZGlhcGxheUltYWdlLCBkaXNwbGF5RGVzYyB9KSA9PiB7XHJcblxyXG4gIGxldCBpbWFnZSA9ICcnLFxyXG4gICAgZGVzYyA9ICcnO1xyXG5cclxuICBpZiAoKHR5cGVvZiBkaWFwbGF5SW1hZ2UgPT09ICd1bmRlZmluZWQnKSB8fCBkaWFwbGF5SW1hZ2UpIHtcclxuICAgIGltYWdlID0gPGltZyBzcmM9e25ld3MuaW1nfSAvPjtcclxuICB9XHJcbiAgaWYgKCh0eXBlb2YgZGlzcGxheURlc2MgPT09ICd1bmRlZmluZWQnKSB8fCBkaXNwbGF5RGVzYykge1xyXG4gICAgZGVzYyA9IDxkaXY+e25ld3MuZGVzY308L2Rpdj47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld3NCbG9ja1wiPlxyXG4gICAgICA8TGluayBocmVmPVwiL3NlY3Rpb24vW3NlY3Rpb25dL1tkYXRlXS9baWRdXCIgYXM9e25ld3MudXJsfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgIHtpbWFnZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyPntuZXdzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICAgICAge2Rlc2N9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgaW1hZ2VVcmwgPSAodXJsKSA9PiB7XHJcbiAgcmV0dXJuICdodHRwczovL2RhdGEuam9vcm5hbG8uY29tJyArIHVybDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0Jsb2NrOyJdLCJzb3VyY2VSb290IjoiIn0=