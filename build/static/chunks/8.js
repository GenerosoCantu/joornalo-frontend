(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[8],{

/***/ "./components/block-front2.js":
/*!************************************!*\
  !*** ./components/block-front2.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Front2 = function Front2(_ref) {
  var data = _ref.data;
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

_c = Front2;
/* harmony default export */ __webpack_exports__["default"] = (Front2);

var _c;

$RefreshReg$(_c, "Front2");

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

/***/ }),

/***/ "./components/newsBlock.js":
/*!*********************************!*\
  !*** ./components/newsBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var NewsBlock = function NewsBlock(_ref) {
  var news = _ref.news,
      diaplayImage = _ref.diaplayImage,
      displayDesc = _ref.displayDesc;
  var image = '',
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

_c = NewsBlock;

var imageUrl = function imageUrl(url) {
  return 'https://data.joornalo.com' + url;
};

/* harmony default export */ __webpack_exports__["default"] = (NewsBlock);

var _c;

$RefreshReg$(_c, "NewsBlock");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1mcm9udDIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmV3c0Jsb2NrLmpzIl0sIm5hbWVzIjpbIkZyb250MiIsImRhdGEiLCJmcm9udE5ld3MiLCJOZXdzQmxvY2siLCJuZXdzIiwiZGlhcGxheUltYWdlIiwiZGlzcGxheURlc2MiLCJpbWFnZSIsImRlc2MiLCJpbWciLCJ1cmwiLCJ0aXRsZSIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDM0IsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyxxREFBRDtBQUFXLFFBQUksRUFBRUEsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBZixDQUFqQjtBQUFvQyxlQUFXLEVBQUU7QUFBakQsSUFERixFQUVFLE1BQUMscURBQUQ7QUFBVyxRQUFJLEVBQUVELElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQWYsQ0FBakI7QUFBb0MsZUFBVyxFQUFFO0FBQWpELElBRkYsRUFHRSxNQUFDLHFEQUFEO0FBQVcsUUFBSSxFQUFFRCxJQUFJLENBQUNDLFNBQUwsQ0FBZSxDQUFmLENBQWpCO0FBQW9DLGVBQVcsRUFBRTtBQUFqRCxJQUhGLEVBSUUsTUFBQyxxREFBRDtBQUFXLFFBQUksRUFBRUQsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBZixDQUFqQjtBQUFvQyxlQUFXLEVBQUU7QUFBakQsSUFKRixDQURGO0FBUUQsQ0FURDs7S0FBTUYsTTtBQVdTQSxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7O0FBRUEsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBeUM7QUFBQSxNQUF0Q0MsSUFBc0MsUUFBdENBLElBQXNDO0FBQUEsTUFBaENDLFlBQWdDLFFBQWhDQSxZQUFnQztBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFFekQsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFBQSxNQUNFQyxJQUFJLEdBQUcsRUFEVDs7QUFHQSxNQUFLLE9BQU9ILFlBQVAsS0FBd0IsV0FBekIsSUFBeUNBLFlBQTdDLEVBQTJEO0FBQ3pERSxTQUFLLEdBQUc7QUFBSyxTQUFHLEVBQUVILElBQUksQ0FBQ0s7QUFBZixNQUFSO0FBQ0Q7O0FBQ0QsTUFBSyxPQUFPSCxXQUFQLEtBQXVCLFdBQXhCLElBQXdDQSxXQUE1QyxFQUF5RDtBQUN2REUsUUFBSSxHQUFHLG1CQUFNSixJQUFJLENBQUNJLElBQVgsQ0FBUDtBQUNEOztBQUNELFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0NBQVg7QUFBNEMsTUFBRSxFQUFFSixJQUFJLENBQUNNO0FBQXJELEtBQ0UsaUJBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHSCxLQURILENBREYsRUFJRSxrQkFBS0gsSUFBSSxDQUFDTyxLQUFWLENBSkYsRUFLRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dILElBREgsQ0FMRixDQURGLENBREYsQ0FERjtBQWVELENBMUJEOztLQUFNTCxTOztBQTRCTixJQUFNUyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRixHQUFELEVBQVM7QUFDeEIsU0FBTyw4QkFBOEJBLEdBQXJDO0FBQ0QsQ0FGRDs7QUFJZVAsd0VBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy84LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV3c0Jsb2NrIGZyb20gXCIuL25ld3NCbG9jay5qc1wiO1xyXG5cclxuY29uc3QgRnJvbnQyID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJvbnQyIGJsb2NrXCI+XHJcbiAgICAgIDxOZXdzQmxvY2sgbmV3cz17ZGF0YS5mcm9udE5ld3NbMV19IGRpc3BsYXlEZXNjPXtmYWxzZX0+PC9OZXdzQmxvY2s+XHJcbiAgICAgIDxOZXdzQmxvY2sgbmV3cz17ZGF0YS5mcm9udE5ld3NbMl19IGRpc3BsYXlEZXNjPXtmYWxzZX0+PC9OZXdzQmxvY2s+XHJcbiAgICAgIDxOZXdzQmxvY2sgbmV3cz17ZGF0YS5mcm9udE5ld3NbM119IGRpc3BsYXlEZXNjPXtmYWxzZX0+PC9OZXdzQmxvY2s+XHJcbiAgICAgIDxOZXdzQmxvY2sgbmV3cz17ZGF0YS5mcm9udE5ld3NbNF19IGRpc3BsYXlEZXNjPXtmYWxzZX0+PC9OZXdzQmxvY2s+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyb250MjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IE5ld3NCbG9jayA9ICh7IG5ld3MsIGRpYXBsYXlJbWFnZSwgZGlzcGxheURlc2MgfSkgPT4ge1xyXG5cclxuICBsZXQgaW1hZ2UgPSAnJyxcclxuICAgIGRlc2MgPSAnJztcclxuXHJcbiAgaWYgKCh0eXBlb2YgZGlhcGxheUltYWdlID09PSAndW5kZWZpbmVkJykgfHwgZGlhcGxheUltYWdlKSB7XHJcbiAgICBpbWFnZSA9IDxpbWcgc3JjPXtuZXdzLmltZ30gLz47XHJcbiAgfVxyXG4gIGlmICgodHlwZW9mIGRpc3BsYXlEZXNjID09PSAndW5kZWZpbmVkJykgfHwgZGlzcGxheURlc2MpIHtcclxuICAgIGRlc2MgPSA8ZGl2PntuZXdzLmRlc2N9PC9kaXY+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJOZXdzQmxvY2tcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9zZWN0aW9uL1tzZWN0aW9uXS9bZGF0ZV0vW2lkXVwiIGFzPXtuZXdzLnVybH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgICB7aW1hZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMj57bmV3cy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgICAgIHtkZXNjfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGltYWdlVXJsID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiAnaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbScgKyB1cmw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NCbG9jazsiXSwic291cmNlUm9vdCI6IiJ9