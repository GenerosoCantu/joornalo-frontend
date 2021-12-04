(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[12],{

/***/ "./components/block-multimedia1.js":
/*!*****************************************!*\
  !*** ./components/block-multimedia1.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Multimedia1 = function Multimedia1(_ref) {
  var data = _ref.data,
      text = _ref.text;
  return __jsx("div", {
    className: "multimedia1 block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Multimedia")), __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    news: data.multimedia[0],
    displayDesc: false
  }));
};

_c = Multimedia1;
/* harmony default export */ __webpack_exports__["default"] = (Multimedia1);

var _c;

$RefreshReg$(_c, "Multimedia1");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1tdWx0aW1lZGlhMS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzQmxvY2suanMiXSwibmFtZXMiOlsiTXVsdGltZWRpYTEiLCJkYXRhIiwidGV4dCIsIm11bHRpbWVkaWEiLCJOZXdzQmxvY2siLCJuZXdzIiwiZGlhcGxheUltYWdlIiwiZGlzcGxheURlc2MiLCJpbWFnZSIsImRlc2MiLCJpbWciLCJ1cmwiLCJ0aXRsZSIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW9CO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN0QyxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQTZCLGlDQUE3QixDQURGLEVBRUUsTUFBQyxxREFBRDtBQUFXLFFBQUksRUFBRUQsSUFBSSxDQUFDRSxVQUFMLENBQWdCLENBQWhCLENBQWpCO0FBQXFDLGVBQVcsRUFBRTtBQUFsRCxJQUZGLENBREY7QUFTRCxDQVZEOztLQUFNSCxXO0FBWVNBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF5QztBQUFBLE1BQXRDQyxJQUFzQyxRQUF0Q0EsSUFBc0M7QUFBQSxNQUFoQ0MsWUFBZ0MsUUFBaENBLFlBQWdDO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUV6RCxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUFBLE1BQ0VDLElBQUksR0FBRyxFQURUOztBQUdBLE1BQUssT0FBT0gsWUFBUCxLQUF3QixXQUF6QixJQUF5Q0EsWUFBN0MsRUFBMkQ7QUFDekRFLFNBQUssR0FBRztBQUFLLFNBQUcsRUFBRUgsSUFBSSxDQUFDSztBQUFmLE1BQVI7QUFDRDs7QUFDRCxNQUFLLE9BQU9ILFdBQVAsS0FBdUIsV0FBeEIsSUFBd0NBLFdBQTVDLEVBQXlEO0FBQ3ZERSxRQUFJLEdBQUcsbUJBQU1KLElBQUksQ0FBQ0ksSUFBWCxDQUFQO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQ0FBWDtBQUE0QyxNQUFFLEVBQUVKLElBQUksQ0FBQ007QUFBckQsS0FDRSxpQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dILEtBREgsQ0FERixFQUlFLGtCQUFLSCxJQUFJLENBQUNPLEtBQVYsQ0FKRixFQUtFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0gsSUFESCxDQUxGLENBREYsQ0FERixDQURGO0FBZUQsQ0ExQkQ7O0tBQU1MLFM7O0FBNEJOLElBQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNGLEdBQUQsRUFBUztBQUN4QixTQUFPLDhCQUE4QkEsR0FBckM7QUFDRCxDQUZEOztBQUllUCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV3c0Jsb2NrIGZyb20gXCIuL25ld3NCbG9jay5qc1wiO1xyXG5cclxuY29uc3QgTXVsdGltZWRpYTEgPSAoeyBkYXRhLCB0ZXh0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdWx0aW1lZGlhMSBibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NraGVhZGVyXCI+PHNwYW4+TXVsdGltZWRpYTwvc3Bhbj48L2Rpdj5cclxuICAgICAgPE5ld3NCbG9jayBuZXdzPXtkYXRhLm11bHRpbWVkaWFbMF19IGRpc3BsYXlEZXNjPXtmYWxzZX0+PC9OZXdzQmxvY2s+XHJcbiAgICAgIHsvKiB7ZGF0YS5tdWx0aW1lZGlhLm1hcCgobmV3cywgaW5kZXgpID0+IChcclxuICAgICAgICA8TmV3c0Jsb2NrIG5ld3M9e25ld3N9IGRpc3BsYXlEZXNjPXtmYWxzZX0ga2V5PXtpbmRleH0+PC9OZXdzQmxvY2s+XHJcbiAgICAgICkpfSAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVsdGltZWRpYTE7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBOZXdzQmxvY2sgPSAoeyBuZXdzLCBkaWFwbGF5SW1hZ2UsIGRpc3BsYXlEZXNjIH0pID0+IHtcclxuXHJcbiAgbGV0IGltYWdlID0gJycsXHJcbiAgICBkZXNjID0gJyc7XHJcblxyXG4gIGlmICgodHlwZW9mIGRpYXBsYXlJbWFnZSA9PT0gJ3VuZGVmaW5lZCcpIHx8IGRpYXBsYXlJbWFnZSkge1xyXG4gICAgaW1hZ2UgPSA8aW1nIHNyYz17bmV3cy5pbWd9IC8+O1xyXG4gIH1cclxuICBpZiAoKHR5cGVvZiBkaXNwbGF5RGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHx8IGRpc3BsYXlEZXNjKSB7XHJcbiAgICBkZXNjID0gPGRpdj57bmV3cy5kZXNjfTwvZGl2PjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3c0Jsb2NrXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VjdGlvbi9bc2VjdGlvbl0vW2RhdGVdL1tpZF1cIiBhcz17bmV3cy51cmx9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAge2ltYWdlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDI+e25ld3MudGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgICAgICB7ZGVzY31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBpbWFnZVVybCA9ICh1cmwpID0+IHtcclxuICByZXR1cm4gJ2h0dHBzOi8vZGF0YS5qb29ybmFsby5jb20nICsgdXJsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzQmxvY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==