exports.ids = [21];
exports.modules = {

/***/ "./components/block-related-news1.js":
/*!*******************************************!*\
  !*** ./components/block-related-news1.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const RelatedNews1 = ({
  topNews
}) => {
  if (!topNews) return null;
  let topNews4 = topNews.slice(0, 4);
  return __jsx("div", {
    className: "related-news block"
  }, __jsx("h2", null, "Related Stories"), __jsx("div", {
    className: "row"
  }, topNews4.map((news, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: news.url,
    key: index
  }, __jsx("div", {
    className: "col-auto"
  }, __jsx("img", {
    src: imageUrl(news.image)
  }), __jsx("a", null, news.title))))));
};

const imageUrl = url => {
  return 'https://data.joornalo.com' + url;
};

const mapStateToProps = state => ({
  topNews: state.news.topNews
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(RelatedNews1));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLXJlbGF0ZWQtbmV3czEuanMiXSwibmFtZXMiOlsiUmVsYXRlZE5ld3MxIiwidG9wTmV3cyIsInRvcE5ld3M0Iiwic2xpY2UiLCJtYXAiLCJuZXdzIiwiaW5kZXgiLCJ1cmwiLCJpbWFnZVVybCIsImltYWdlIiwidGl0bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQ3BDLE1BQUksQ0FBQ0EsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUVkLE1BQUlDLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxLQUFSLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUFmO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0Usb0NBREYsRUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUNaLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELElBQUksQ0FBQ0UsR0FBakI7QUFBc0IsT0FBRyxFQUFFRDtBQUEzQixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLE9BQUcsRUFBRUUsUUFBUSxDQUFDSCxJQUFJLENBQUNJLEtBQU47QUFBbEIsSUFERixFQUVFLGlCQUFJSixJQUFJLENBQUNLLEtBQVQsQ0FGRixDQURGLENBREQsQ0FESCxDQUZGLENBREY7QUFlRCxDQXBCRDs7QUFzQkEsTUFBTUYsUUFBUSxHQUFJRCxHQUFELElBQVM7QUFDeEIsU0FBTyw4QkFBOEJBLEdBQXJDO0FBQ0QsQ0FGRDs7QUFJQSxNQUFNSSxlQUFlLEdBQUdDLEtBQUssS0FBSztBQUNoQ1gsU0FBTyxFQUFFVyxLQUFLLENBQUNQLElBQU4sQ0FBV0o7QUFEWSxDQUFMLENBQTdCOztBQUllWSwwSEFBTyxDQUNwQkYsZUFEb0IsQ0FBUCxDQUViWCxZQUZhLENBQWYsRSIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUmVsYXRlZE5ld3MxID0gKHsgdG9wTmV3cyB9KSA9PiB7XHJcbiAgaWYgKCF0b3BOZXdzKSByZXR1cm4gbnVsbFxyXG5cclxuICBsZXQgdG9wTmV3czQgPSB0b3BOZXdzLnNsaWNlKDAsIDQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtbmV3cyBibG9ja1wiPlxyXG4gICAgICA8aDI+UmVsYXRlZCBTdG9yaWVzPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7dG9wTmV3czQubWFwKChuZXdzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17bmV3cy51cmx9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsKG5ld3MuaW1hZ2UpfSAvPlxyXG4gICAgICAgICAgICAgIDxhPntuZXdzLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXYgPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgaW1hZ2VVcmwgPSAodXJsKSA9PiB7XHJcbiAgcmV0dXJuICdodHRwczovL2RhdGEuam9vcm5hbG8uY29tJyArIHVybDtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICB0b3BOZXdzOiBzdGF0ZS5uZXdzLnRvcE5ld3MsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHNcclxuKShSZWxhdGVkTmV3czEpOyJdLCJzb3VyY2VSb290IjoiIn0=