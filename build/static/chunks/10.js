(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[10],{

/***/ "./components/block-latest1.js":
/*!*************************************!*\
  !*** ./components/block-latest1.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Latest1 = function Latest1(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "latest1 block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Latest")), data.latest.map(function (news, index) {
    return __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      news: news,
      displayDesc: false,
      key: index
    });
  }));
};

_c = Latest1;
/* harmony default export */ __webpack_exports__["default"] = (Latest1);

var _c;

$RefreshReg$(_c, "Latest1");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1sYXRlc3QxLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25ld3NCbG9jay5qcyJdLCJuYW1lcyI6WyJMYXRlc3QxIiwiZGF0YSIsImxhdGVzdCIsIm1hcCIsIm5ld3MiLCJpbmRleCIsIk5ld3NCbG9jayIsImRpYXBsYXlJbWFnZSIsImRpc3BsYXlEZXNjIiwiaW1hZ2UiLCJkZXNjIiwiaW1nIiwidXJsIiwidGl0bGUiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzVCLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBNkIsNkJBQTdCLENBREYsRUFFR0EsSUFBSSxDQUFDQyxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDZixNQUFDLHFEQUFEO0FBQVcsVUFBSSxFQUFFRCxJQUFqQjtBQUF1QixpQkFBVyxFQUFFLEtBQXBDO0FBQTJDLFNBQUcsRUFBRUM7QUFBaEQsTUFEZTtBQUFBLEdBQWhCLENBRkgsQ0FERjtBQVFELENBVEQ7O0tBQU1MLE87QUFXU0Esc0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBOztBQUVBLElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXlDO0FBQUEsTUFBdENGLElBQXNDLFFBQXRDQSxJQUFzQztBQUFBLE1BQWhDRyxZQUFnQyxRQUFoQ0EsWUFBZ0M7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBRXpELE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQUEsTUFDRUMsSUFBSSxHQUFHLEVBRFQ7O0FBR0EsTUFBSyxPQUFPSCxZQUFQLEtBQXdCLFdBQXpCLElBQXlDQSxZQUE3QyxFQUEyRDtBQUN6REUsU0FBSyxHQUFHO0FBQUssU0FBRyxFQUFFTCxJQUFJLENBQUNPO0FBQWYsTUFBUjtBQUNEOztBQUNELE1BQUssT0FBT0gsV0FBUCxLQUF1QixXQUF4QixJQUF3Q0EsV0FBNUMsRUFBeUQ7QUFDdkRFLFFBQUksR0FBRyxtQkFBTU4sSUFBSSxDQUFDTSxJQUFYLENBQVA7QUFDRDs7QUFDRCxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGdDQUFYO0FBQTRDLE1BQUUsRUFBRU4sSUFBSSxDQUFDUTtBQUFyRCxLQUNFLGlCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0gsS0FESCxDQURGLEVBSUUsa0JBQUtMLElBQUksQ0FBQ1MsS0FBVixDQUpGLEVBS0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHSCxJQURILENBTEYsQ0FERixDQURGLENBREY7QUFlRCxDQTFCRDs7S0FBTUosUzs7QUE0Qk4sSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsR0FBRCxFQUFTO0FBQ3hCLFNBQU8sOEJBQThCQSxHQUFyQztBQUNELENBRkQ7O0FBSWVOLHdFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdzQmxvY2sgZnJvbSBcIi4vbmV3c0Jsb2NrLmpzXCI7XHJcblxyXG5jb25zdCBMYXRlc3QxID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0MSBibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NraGVhZGVyXCI+PHNwYW4+TGF0ZXN0PC9zcGFuPjwvZGl2PlxyXG4gICAgICB7ZGF0YS5sYXRlc3QubWFwKChuZXdzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxOZXdzQmxvY2sgbmV3cz17bmV3c30gZGlzcGxheURlc2M9e2ZhbHNlfSBrZXk9e2luZGV4fT48L05ld3NCbG9jaz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhdGVzdDE7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBOZXdzQmxvY2sgPSAoeyBuZXdzLCBkaWFwbGF5SW1hZ2UsIGRpc3BsYXlEZXNjIH0pID0+IHtcclxuXHJcbiAgbGV0IGltYWdlID0gJycsXHJcbiAgICBkZXNjID0gJyc7XHJcblxyXG4gIGlmICgodHlwZW9mIGRpYXBsYXlJbWFnZSA9PT0gJ3VuZGVmaW5lZCcpIHx8IGRpYXBsYXlJbWFnZSkge1xyXG4gICAgaW1hZ2UgPSA8aW1nIHNyYz17bmV3cy5pbWd9IC8+O1xyXG4gIH1cclxuICBpZiAoKHR5cGVvZiBkaXNwbGF5RGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHx8IGRpc3BsYXlEZXNjKSB7XHJcbiAgICBkZXNjID0gPGRpdj57bmV3cy5kZXNjfTwvZGl2PjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3c0Jsb2NrXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2VjdGlvbi9bc2VjdGlvbl0vW2RhdGVdL1tpZF1cIiBhcz17bmV3cy51cmx9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAge2ltYWdlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDI+e25ld3MudGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgICAgICB7ZGVzY31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBpbWFnZVVybCA9ICh1cmwpID0+IHtcclxuICByZXR1cm4gJ2h0dHBzOi8vZGF0YS5qb29ybmFsby5jb20nICsgdXJsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzQmxvY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==