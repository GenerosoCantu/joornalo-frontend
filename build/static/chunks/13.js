(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[13],{

/***/ "./components/block-sections1.js":
/*!***************************************!*\
  !*** ./components/block-sections1.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Sections1 = function Sections1(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "sections1 block"
  }, data.sectionNews.map(function (section, index) {
    return __jsx("div", {
      key: index
    }, __jsx("div", {
      className: "blockheader"
    }, __jsx("span", null, section.section)), __jsx("div", {
      className: "row"
    }, section.news.map(function (news, index0) {
      return __jsx(_newsBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        news: news,
        displayDesc: false,
        key: index0
      });
    })));
  }));
};

_c = Sections1;
/* harmony default export */ __webpack_exports__["default"] = (Sections1);

var _c;

$RefreshReg$(_c, "Sections1");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1zZWN0aW9uczEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmV3c0Jsb2NrLmpzIl0sIm5hbWVzIjpbIlNlY3Rpb25zMSIsImRhdGEiLCJzZWN0aW9uTmV3cyIsIm1hcCIsInNlY3Rpb24iLCJpbmRleCIsIm5ld3MiLCJpbmRleDAiLCJOZXdzQmxvY2siLCJkaWFwbGF5SW1hZ2UiLCJkaXNwbGF5RGVzYyIsImltYWdlIiwiZGVzYyIsImltZyIsInVybCIsInRpdGxlIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5QixTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0EsSUFBSSxDQUFDQyxXQUFMLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSxXQUNwQjtBQUFLLFNBQUcsRUFBRUE7QUFBVixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FBNkIsb0JBQU9ELE9BQU8sQ0FBQ0EsT0FBZixDQUE3QixDQURGLEVBRUU7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNHQSxPQUFPLENBQUNFLElBQVIsQ0FBYUgsR0FBYixDQUFpQixVQUFDRyxJQUFELEVBQU9DLE1BQVA7QUFBQSxhQUNoQixNQUFDLHFEQUFEO0FBQVcsWUFBSSxFQUFFRCxJQUFqQjtBQUF1QixtQkFBVyxFQUFFLEtBQXBDO0FBQTJDLFdBQUcsRUFBRUM7QUFBaEQsUUFEZ0I7QUFBQSxLQUFqQixDQURILENBRkYsQ0FEb0I7QUFBQSxHQUFyQixDQURILENBREY7QUFjRCxDQWZEOztLQUFNUCxTO0FBaUJTQSx3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOztBQUVBLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXlDO0FBQUEsTUFBdENGLElBQXNDLFFBQXRDQSxJQUFzQztBQUFBLE1BQWhDRyxZQUFnQyxRQUFoQ0EsWUFBZ0M7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBRXpELE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQUEsTUFDRUMsSUFBSSxHQUFHLEVBRFQ7O0FBR0EsTUFBSyxPQUFPSCxZQUFQLEtBQXdCLFdBQXpCLElBQXlDQSxZQUE3QyxFQUEyRDtBQUN6REUsU0FBSyxHQUFHO0FBQUssU0FBRyxFQUFFTCxJQUFJLENBQUNPO0FBQWYsTUFBUjtBQUNEOztBQUNELE1BQUssT0FBT0gsV0FBUCxLQUF1QixXQUF4QixJQUF3Q0EsV0FBNUMsRUFBeUQ7QUFDdkRFLFFBQUksR0FBRyxtQkFBTU4sSUFBSSxDQUFDTSxJQUFYLENBQVA7QUFDRDs7QUFDRCxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGdDQUFYO0FBQTRDLE1BQUUsRUFBRU4sSUFBSSxDQUFDUTtBQUFyRCxLQUNFLGlCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0gsS0FESCxDQURGLEVBSUUsa0JBQUtMLElBQUksQ0FBQ1MsS0FBVixDQUpGLEVBS0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHSCxJQURILENBTEYsQ0FERixDQURGLENBREY7QUFlRCxDQTFCRDs7S0FBTUosUzs7QUE0Qk4sSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsR0FBRCxFQUFTO0FBQ3hCLFNBQU8sOEJBQThCQSxHQUFyQztBQUNELENBRkQ7O0FBSWVOLHdFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXdzQmxvY2sgZnJvbSBcIi4vbmV3c0Jsb2NrLmpzXCI7XHJcblxyXG5jb25zdCBTZWN0aW9uczEgPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uczEgYmxvY2tcIj5cclxuICAgICAge2RhdGEuc2VjdGlvbk5ld3MubWFwKChzZWN0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NraGVhZGVyXCI+PHNwYW4+e3NlY3Rpb24uc2VjdGlvbn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7c2VjdGlvbi5uZXdzLm1hcCgobmV3cywgaW5kZXgwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE5ld3NCbG9jayBuZXdzPXtuZXdzfSBkaXNwbGF5RGVzYz17ZmFsc2V9IGtleT17aW5kZXgwfT48L05ld3NCbG9jaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zMTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IE5ld3NCbG9jayA9ICh7IG5ld3MsIGRpYXBsYXlJbWFnZSwgZGlzcGxheURlc2MgfSkgPT4ge1xyXG5cclxuICBsZXQgaW1hZ2UgPSAnJyxcclxuICAgIGRlc2MgPSAnJztcclxuXHJcbiAgaWYgKCh0eXBlb2YgZGlhcGxheUltYWdlID09PSAndW5kZWZpbmVkJykgfHwgZGlhcGxheUltYWdlKSB7XHJcbiAgICBpbWFnZSA9IDxpbWcgc3JjPXtuZXdzLmltZ30gLz47XHJcbiAgfVxyXG4gIGlmICgodHlwZW9mIGRpc3BsYXlEZXNjID09PSAndW5kZWZpbmVkJykgfHwgZGlzcGxheURlc2MpIHtcclxuICAgIGRlc2MgPSA8ZGl2PntuZXdzLmRlc2N9PC9kaXY+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJOZXdzQmxvY2tcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9zZWN0aW9uL1tzZWN0aW9uXS9bZGF0ZV0vW2lkXVwiIGFzPXtuZXdzLnVybH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgICB7aW1hZ2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMj57bmV3cy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgICAgIHtkZXNjfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGltYWdlVXJsID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiAnaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbScgKyB1cmw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NCbG9jazsiXSwic291cmNlUm9vdCI6IiJ9