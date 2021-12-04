(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[22],{

/***/ "./components/block-related-news1.js":
/*!*******************************************!*\
  !*** ./components/block-related-news1.js ***!
  \*******************************************/
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




var RelatedNews1 = function RelatedNews1(_ref) {
  var topNews = _ref.topNews;
  if (!topNews) return null;
  var topNews4 = topNews.slice(0, 4);
  return __jsx("div", {
    className: "related-news block"
  }, __jsx("h2", null, "Related Stories"), __jsx("div", {
    className: "row"
  }, topNews4.map(function (news, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: news.url,
      key: index
    }, __jsx("div", {
      className: "col-auto"
    }, __jsx("img", {
      src: imageUrl(news.image)
    }), __jsx("a", null, news.title)));
  })));
};

_c = RelatedNews1;

var imageUrl = function imageUrl(url) {
  return 'https://data.joornalo.com' + url;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    topNews: state.news.topNews
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(RelatedNews1));

var _c;

$RefreshReg$(_c, "RelatedNews1");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1yZWxhdGVkLW5ld3MxLmpzIl0sIm5hbWVzIjpbIlJlbGF0ZWROZXdzMSIsInRvcE5ld3MiLCJ0b3BOZXdzNCIsInNsaWNlIiwibWFwIiwibmV3cyIsImluZGV4IiwidXJsIiwiaW1hZ2VVcmwiLCJpbWFnZSIsInRpdGxlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNwQyxNQUFJLENBQUNBLE9BQUwsRUFBYyxPQUFPLElBQVA7QUFFZCxNQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsS0FBUixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBZjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLG9DQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHRCxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNaLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVELElBQUksQ0FBQ0UsR0FBakI7QUFBc0IsU0FBRyxFQUFFRDtBQUEzQixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLFNBQUcsRUFBRUUsUUFBUSxDQUFDSCxJQUFJLENBQUNJLEtBQU47QUFBbEIsTUFERixFQUVFLGlCQUFJSixJQUFJLENBQUNLLEtBQVQsQ0FGRixDQURGLENBRFk7QUFBQSxHQUFiLENBREgsQ0FGRixDQURGO0FBZUQsQ0FwQkQ7O0tBQU1WLFk7O0FBc0JOLElBQU1RLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNELEdBQUQsRUFBUztBQUN4QixTQUFPLDhCQUE4QkEsR0FBckM7QUFDRCxDQUZEOztBQUlBLElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDaENYLFdBQU8sRUFBRVcsS0FBSyxDQUFDUCxJQUFOLENBQVdKO0FBRFksR0FBTDtBQUFBLENBQTdCOztBQUllWSwwSEFBTyxDQUNwQkYsZUFEb0IsQ0FBUCxDQUViWCxZQUZhLENBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUmVsYXRlZE5ld3MxID0gKHsgdG9wTmV3cyB9KSA9PiB7XHJcbiAgaWYgKCF0b3BOZXdzKSByZXR1cm4gbnVsbFxyXG5cclxuICBsZXQgdG9wTmV3czQgPSB0b3BOZXdzLnNsaWNlKDAsIDQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtbmV3cyBibG9ja1wiPlxyXG4gICAgICA8aDI+UmVsYXRlZCBTdG9yaWVzPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7dG9wTmV3czQubWFwKChuZXdzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17bmV3cy51cmx9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsKG5ld3MuaW1hZ2UpfSAvPlxyXG4gICAgICAgICAgICAgIDxhPntuZXdzLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXYgPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgaW1hZ2VVcmwgPSAodXJsKSA9PiB7XHJcbiAgcmV0dXJuICdodHRwczovL2RhdGEuam9vcm5hbG8uY29tJyArIHVybDtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICB0b3BOZXdzOiBzdGF0ZS5uZXdzLnRvcE5ld3MsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHNcclxuKShSZWxhdGVkTmV3czEpOyJdLCJzb3VyY2VSb290IjoiIn0=