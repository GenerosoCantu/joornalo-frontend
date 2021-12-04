(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[18],{

/***/ "./components/block-menu1.js":
/*!***********************************!*\
  !*** ./components/block-menu1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Menu = function Menu(_ref) {
  var items = _ref.items;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row menu"
  }, __jsx("div", {
    className: "col"
  }, __jsx("ul", null, items.map(function (item, index) {
    return __jsx("li", {
      key: index
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "{item.link}"
    }, __jsx("a", null, item.text)), __jsx("div", {
      hidden: !item.sub,
      className: "bg"
    }), __jsx("ol", {
      hidden: !item.sub
    }, item.sub.map(function (sub, index0) {
      return __jsx("li", {
        key: index0
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "{sub.link}"
      }, __jsx("a", null, sub.text)));
    })));
  })))));
};

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1tZW51MS5qcyJdLCJuYW1lcyI6WyJNZW51IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0ZXh0Iiwic3ViIiwiaW5kZXgwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFFMUIsU0FFRSxtRUFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUVFLGtCQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUVUO0FBQUksU0FBRyxFQUFFQTtBQUFULE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQztBQUFYLE9BQXlCLGlCQUFJRCxJQUFJLENBQUNFLElBQVQsQ0FBekIsQ0FERixFQUdFO0FBQUssWUFBTSxFQUFFLENBQUNGLElBQUksQ0FBQ0csR0FBbkI7QUFBd0IsZUFBUyxFQUFDO0FBQWxDLE1BSEYsRUFLRTtBQUFJLFlBQU0sRUFBRSxDQUFDSCxJQUFJLENBQUNHO0FBQWxCLE9BRUdILElBQUksQ0FBQ0csR0FBTCxDQUFTSixHQUFULENBQWEsVUFBQ0ksR0FBRCxFQUFNQyxNQUFOO0FBQUEsYUFDWjtBQUFJLFdBQUcsRUFBRUE7QUFBVCxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWCxTQUF3QixpQkFBSUQsR0FBRyxDQUFDRCxJQUFSLENBQXhCLENBREYsQ0FEWTtBQUFBLEtBQWIsQ0FGSCxDQUxGLENBRlM7QUFBQSxHQUFWLENBREgsQ0FGRixDQURGLENBREYsQ0FGRjtBQWtDRCxDQXBDRDs7S0FBTUwsSTtBQXVDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBNZW51ID0gKHsgaXRlbXMgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1lbnVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIntpdGVtLmxpbmt9XCI+PGE+e2l0ZW0udGV4dH08L2E+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaGlkZGVuPXshaXRlbS5zdWJ9IGNsYXNzTmFtZT1cImJnXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPG9sIGhpZGRlbj17IWl0ZW0uc3VifT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnN1Yi5tYXAoKHN1YiwgaW5kZXgwKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXgwfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJ7c3ViLmxpbmt9XCI+PGE+e3N1Yi50ZXh0fTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9vbD5cclxuXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==