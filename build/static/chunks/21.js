(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[21],{

/***/ "./components/block-other-news1.js":
/*!*****************************************!*\
  !*** ./components/block-other-news1.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var OtherNews1 = function OtherNews1(_ref) {
  var moreNews = _ref.moreNews;
  if (!moreNews) return null;
  return __jsx("div", {
    className: "other-news block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Other News")), __jsx("ul", null, moreNews.map(function (news, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: news.url,
      key: index
    }, __jsx("li", null, __jsx("a", null, __jsx("img", {
      src: imageUrl(news.image)
    }), __jsx("div", null, news.title))));
  })));
};

_c = OtherNews1;

var imageUrl = function imageUrl(url) {
  return 'https://data.joornalo.com' + url;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    moreNews: state.news.moreNews
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(OtherNews1));

var _c;

$RefreshReg$(_c, "OtherNews1");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1vdGhlci1uZXdzMS5qcyJdLCJuYW1lcyI6WyJPdGhlck5ld3MxIiwibW9yZU5ld3MiLCJtYXAiLCJuZXdzIiwiaW5kZXgiLCJ1cmwiLCJpbWFnZVVybCIsImltYWdlIiwidGl0bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBRW5DLE1BQUksQ0FBQ0EsUUFBTCxFQUFlLE9BQU8sSUFBUDtBQUNmLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBNkIsaUNBQTdCLENBREYsRUFFRSxrQkFDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDWixNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFJLENBQUNFLEdBQWpCO0FBQXNCLFNBQUcsRUFBRUQ7QUFBM0IsT0FDRSxrQkFDRSxpQkFDRTtBQUFLLFNBQUcsRUFBRUUsUUFBUSxDQUFDSCxJQUFJLENBQUNJLEtBQU47QUFBbEIsTUFERixFQUVFLG1CQUFNSixJQUFJLENBQUNLLEtBQVgsQ0FGRixDQURGLENBREYsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQUZGLENBREY7QUFpQkQsQ0FwQkQ7O0tBQU1SLFU7O0FBc0JOLElBQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNELEdBQUQsRUFBUztBQUN4QixTQUFPLDhCQUE4QkEsR0FBckM7QUFDRCxDQUZEOztBQUlBLElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDaENULFlBQVEsRUFBRVMsS0FBSyxDQUFDUCxJQUFOLENBQVdGO0FBRFcsR0FBTDtBQUFBLENBQTdCOztBQUllVSwwSEFBTyxDQUNwQkYsZUFEb0IsQ0FBUCxDQUViVCxVQUZhLENBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgT3RoZXJOZXdzMSA9ICh7IG1vcmVOZXdzIH0pID0+IHtcclxuXHJcbiAgaWYgKCFtb3JlTmV3cykgcmV0dXJuIG51bGxcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlci1uZXdzIGJsb2NrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2toZWFkZXJcIj48c3Bhbj5PdGhlciBOZXdzPC9zcGFuPjwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge21vcmVOZXdzLm1hcCgobmV3cywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e25ld3MudXJsfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsKG5ld3MuaW1hZ2UpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57bmV3cy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2RpdiA+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBpbWFnZVVybCA9ICh1cmwpID0+IHtcclxuICByZXR1cm4gJ2h0dHBzOi8vZGF0YS5qb29ybmFsby5jb20nICsgdXJsO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gIG1vcmVOZXdzOiBzdGF0ZS5uZXdzLm1vcmVOZXdzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzXHJcbikoT3RoZXJOZXdzMSk7Il0sInNvdXJjZVJvb3QiOiIifQ==