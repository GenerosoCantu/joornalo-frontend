(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[20],{

/***/ "./components/block-opinion1.js":
/*!**************************************!*\
  !*** ./components/block-opinion1.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Opinion1 = function Opinion1(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "opinion1 block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Opinion")), __jsx("ol", null, data.opinion.map(function (news, index) {
    return __jsx("li", {
      key: index
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: news.url
    }, __jsx("a", null, __jsx("h5", null, news.column), __jsx("h6", null, news.author), __jsx("h5", {
      className: "title"
    }, news.title))));
  })));
};

_c = Opinion1;
/* harmony default export */ __webpack_exports__["default"] = (Opinion1);

var _c;

$RefreshReg$(_c, "Opinion1");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1vcGluaW9uMS5qcyJdLCJuYW1lcyI6WyJPcGluaW9uMSIsImRhdGEiLCJvcGluaW9uIiwibWFwIiwibmV3cyIsImluZGV4IiwidXJsIiwiY29sdW1uIiwiYXV0aG9yIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0IsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUE2Qiw4QkFBN0IsQ0FERixFQUdFLGtCQUNHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNoQjtBQUFJLFNBQUcsRUFBRUE7QUFBVCxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVELElBQUksQ0FBQ0U7QUFBakIsT0FDRSxpQkFDRSxrQkFBS0YsSUFBSSxDQUFDRyxNQUFWLENBREYsRUFFRSxrQkFBS0gsSUFBSSxDQUFDSSxNQUFWLENBRkYsRUFHRTtBQUFJLGVBQVMsRUFBQztBQUFkLE9BQXVCSixJQUFJLENBQUNLLEtBQTVCLENBSEYsQ0FERixDQURGLENBRGdCO0FBQUEsR0FBakIsQ0FESCxDQUhGLENBREY7QUFvQkQsQ0FyQkQ7O0tBQU1ULFE7QUF1QlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IE9waW5pb24xID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3BpbmlvbjEgYmxvY2tcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja2hlYWRlclwiPjxzcGFuPk9waW5pb248L3NwYW4+PC9kaXY+XHJcblxyXG4gICAgICA8b2w+XHJcbiAgICAgICAge2RhdGEub3Bpbmlvbi5tYXAoKG5ld3MsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e25ld3MudXJsfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxoNT57bmV3cy5jb2x1bW59PC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNj57bmV3cy5hdXRob3J9PC9oNj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0aXRsZVwiPntuZXdzLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L29sPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BpbmlvbjE7Il0sInNvdXJjZVJvb3QiOiIifQ==