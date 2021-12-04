exports.ids = [23];
exports.modules = {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld3NCbG9jay5qcyJdLCJuYW1lcyI6WyJOZXdzQmxvY2siLCJuZXdzIiwiZGlhcGxheUltYWdlIiwiZGlzcGxheURlc2MiLCJpbWFnZSIsImRlc2MiLCJpbWciLCJ1cmwiLCJ0aXRsZSIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxjQUFSO0FBQXNCQztBQUF0QixDQUFELEtBQXlDO0FBRXpELE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQUEsTUFDRUMsSUFBSSxHQUFHLEVBRFQ7O0FBR0EsTUFBSyxPQUFPSCxZQUFQLEtBQXdCLFdBQXpCLElBQXlDQSxZQUE3QyxFQUEyRDtBQUN6REUsU0FBSyxHQUFHO0FBQUssU0FBRyxFQUFFSCxJQUFJLENBQUNLO0FBQWYsTUFBUjtBQUNEOztBQUNELE1BQUssT0FBT0gsV0FBUCxLQUF1QixXQUF4QixJQUF3Q0EsV0FBNUMsRUFBeUQ7QUFDdkRFLFFBQUksR0FBRyxtQkFBTUosSUFBSSxDQUFDSSxJQUFYLENBQVA7QUFDRDs7QUFDRCxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGdDQUFYO0FBQTRDLE1BQUUsRUFBRUosSUFBSSxDQUFDTTtBQUFyRCxLQUNFLGlCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0gsS0FESCxDQURGLEVBSUUsa0JBQUtILElBQUksQ0FBQ08sS0FBVixDQUpGLEVBS0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHSCxJQURILENBTEYsQ0FERixDQURGLENBREY7QUFlRCxDQTFCRDs7QUE0QkEsTUFBTUksUUFBUSxHQUFJRixHQUFELElBQVM7QUFDeEIsU0FBTyw4QkFBOEJBLEdBQXJDO0FBQ0QsQ0FGRDs7QUFJZVAsd0VBQWYsRSIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTmV3c0Jsb2NrID0gKHsgbmV3cywgZGlhcGxheUltYWdlLCBkaXNwbGF5RGVzYyB9KSA9PiB7XHJcblxyXG4gIGxldCBpbWFnZSA9ICcnLFxyXG4gICAgZGVzYyA9ICcnO1xyXG5cclxuICBpZiAoKHR5cGVvZiBkaWFwbGF5SW1hZ2UgPT09ICd1bmRlZmluZWQnKSB8fCBkaWFwbGF5SW1hZ2UpIHtcclxuICAgIGltYWdlID0gPGltZyBzcmM9e25ld3MuaW1nfSAvPjtcclxuICB9XHJcbiAgaWYgKCh0eXBlb2YgZGlzcGxheURlc2MgPT09ICd1bmRlZmluZWQnKSB8fCBkaXNwbGF5RGVzYykge1xyXG4gICAgZGVzYyA9IDxkaXY+e25ld3MuZGVzY308L2Rpdj47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld3NCbG9ja1wiPlxyXG4gICAgICA8TGluayBocmVmPVwiL3NlY3Rpb24vW3NlY3Rpb25dL1tkYXRlXS9baWRdXCIgYXM9e25ld3MudXJsfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgIHtpbWFnZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyPntuZXdzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICAgICAge2Rlc2N9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgaW1hZ2VVcmwgPSAodXJsKSA9PiB7XHJcbiAgcmV0dXJuICdodHRwczovL2RhdGEuam9vcm5hbG8uY29tJyArIHVybDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0Jsb2NrOyJdLCJzb3VyY2VSb290IjoiIn0=