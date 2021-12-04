(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[17],{

/***/ "./components/block-header-mobile1.js":
/*!********************************************!*\
  !*** ./components/block-header-mobile1.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var headerMobile = function headerMobile(_ref) {
  var data = _ref.data;

  function mobileMenu() {
    console.log('Click!');
  }

  return __jsx("div", {
    className: "mobileHeader"
  }, __jsx("div", {
    className: "menu",
    onClick: mobileMenu
  }), __jsx("div", {
    className: "logo"
  }, __jsx("a", {
    href: "/"
  })), __jsx("a", {
    className: "search",
    href: "search"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (headerMobile);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1oZWFkZXItbW9iaWxlMS5qcyJdLCJuYW1lcyI6WyJoZWFkZXJNb2JpbGUiLCJkYXRhIiwibW9iaWxlTWVudSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFFakMsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNEOztBQUVELFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUVFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBTyxFQUFFRjtBQUEvQixJQUZGLEVBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUcsUUFBSSxFQUFDO0FBQVIsSUFERixDQUpGLEVBUUU7QUFBRyxhQUFTLEVBQUMsUUFBYjtBQUFzQixRQUFJLEVBQUM7QUFBM0IsSUFSRixDQURGO0FBZUQsQ0FyQkQ7O0FBdUJlRiwyRUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgaGVhZGVyTW9iaWxlID0gKHsgZGF0YSB9KSA9PiB7XHJcblxyXG4gIGZ1bmN0aW9uIG1vYmlsZU1lbnUoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQ2xpY2shJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGVIZWFkZXJcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiIG9uQ2xpY2s9e21vYmlsZU1lbnV9PjwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9cIj48L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwic2VhcmNoXCIgaHJlZj1cInNlYXJjaFwiPjwvYT5cclxuXHJcbiAgICAgIHsvKiA8YmxvY2stbWVudS1tb2JpbGUgc2hvdz1cInt7IHNob3dNZW51IH19XCIgbWVudT1cIltbbWVudV1dXCI+PC9ibG9jay1tZW51LW1vYmlsZT4gKi99XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJNb2JpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==