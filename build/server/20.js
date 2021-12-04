exports.ids = [20];
exports.modules = {

/***/ "./components/block-other-news1.js":
/*!*****************************************!*\
  !*** ./components/block-other-news1.js ***!
  \*****************************************/
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




const OtherNews1 = ({
  moreNews
}) => {
  if (!moreNews) return null;
  return __jsx("div", {
    className: "other-news block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Other News")), __jsx("ul", null, moreNews.map((news, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: news.url,
    key: index
  }, __jsx("li", null, __jsx("a", null, __jsx("img", {
    src: imageUrl(news.image)
  }), __jsx("div", null, news.title)))))));
};

const imageUrl = url => {
  return 'https://data.joornalo.com' + url;
};

const mapStateToProps = state => ({
  moreNews: state.news.moreNews
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(OtherNews1));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLW90aGVyLW5ld3MxLmpzIl0sIm5hbWVzIjpbIk90aGVyTmV3czEiLCJtb3JlTmV3cyIsIm1hcCIsIm5ld3MiLCJpbmRleCIsInVybCIsImltYWdlVXJsIiwiaW1hZ2UiLCJ0aXRsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFFbkMsTUFBSSxDQUFDQSxRQUFMLEVBQWUsT0FBTyxJQUFQO0FBQ2YsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUE2QixpQ0FBN0IsQ0FERixFQUVFLGtCQUNHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FDWixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFRCxJQUFJLENBQUNFLEdBQWpCO0FBQXNCLE9BQUcsRUFBRUQ7QUFBM0IsS0FDRSxrQkFDRSxpQkFDRTtBQUFLLE9BQUcsRUFBRUUsUUFBUSxDQUFDSCxJQUFJLENBQUNJLEtBQU47QUFBbEIsSUFERixFQUVFLG1CQUFNSixJQUFJLENBQUNLLEtBQVgsQ0FGRixDQURGLENBREYsQ0FERCxDQURILENBRkYsQ0FERjtBQWlCRCxDQXBCRDs7QUFzQkEsTUFBTUYsUUFBUSxHQUFJRCxHQUFELElBQVM7QUFDeEIsU0FBTyw4QkFBOEJBLEdBQXJDO0FBQ0QsQ0FGRDs7QUFJQSxNQUFNSSxlQUFlLEdBQUdDLEtBQUssS0FBSztBQUNoQ1QsVUFBUSxFQUFFUyxLQUFLLENBQUNQLElBQU4sQ0FBV0Y7QUFEVyxDQUFMLENBQTdCOztBQUllVSwwSEFBTyxDQUNwQkYsZUFEb0IsQ0FBUCxDQUViVCxVQUZhLENBQWYsRSIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgT3RoZXJOZXdzMSA9ICh7IG1vcmVOZXdzIH0pID0+IHtcclxuXHJcbiAgaWYgKCFtb3JlTmV3cykgcmV0dXJuIG51bGxcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlci1uZXdzIGJsb2NrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2toZWFkZXJcIj48c3Bhbj5PdGhlciBOZXdzPC9zcGFuPjwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge21vcmVOZXdzLm1hcCgobmV3cywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e25ld3MudXJsfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsKG5ld3MuaW1hZ2UpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57bmV3cy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2RpdiA+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBpbWFnZVVybCA9ICh1cmwpID0+IHtcclxuICByZXR1cm4gJ2h0dHBzOi8vZGF0YS5qb29ybmFsby5jb20nICsgdXJsO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gIG1vcmVOZXdzOiBzdGF0ZS5uZXdzLm1vcmVOZXdzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzXHJcbikoT3RoZXJOZXdzMSk7Il0sInNvdXJjZVJvb3QiOiIifQ==