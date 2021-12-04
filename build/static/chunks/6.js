(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./components/block-footer1.js":
/*!*************************************!*\
  !*** ./components/block-footer1.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_menu1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-menu1 */ "./components/block-menu1.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var headerStyle = {
  background: '#f01818'
};
var linkStyle = {
  marginRight: 15
};

var date = function date() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      date = new Date();
  var displayDate = days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  return displayDate;
};

var Footer1 = function Footer1(_ref) {
  var menu = _ref.menu;
  return (// <div style={headerStyle}>
    //   <Link href="/">
    //     <a style={linkStyle}>Home</a>
    //   </Link>
    //   <Link href="/about">
    //     <a style={linkStyle}>About</a>
    //   </Link>
    // </div>
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "header"
    }, __jsx("div", {
      className: "container-fluid desktop"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-250"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/"
    }, __jsx("a", null, "Joornalo")))), __jsx("div", {
      className: "col-auto"
    }), __jsx("div", {
      className: "col-250"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("div", {
      className: "search-box"
    }))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("div", {
      className: "date"
    }, date()))))))))
  );
};

_c = Footer1;

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.news.config['menu-header']
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Footer1));

var _c;

$RefreshReg$(_c, "Footer1");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1mb290ZXIxLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jsb2NrLW1lbnUxLmpzIl0sIm5hbWVzIjpbImhlYWRlclN0eWxlIiwiYmFja2dyb3VuZCIsImxpbmtTdHlsZSIsIm1hcmdpblJpZ2h0IiwiZGF0ZSIsImRheXMiLCJtb250aHMiLCJEYXRlIiwiZGlzcGxheURhdGUiLCJnZXREYXkiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsIkZvb3RlcjEiLCJtZW51IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuZXdzIiwiY29uZmlnIiwiY29ubmVjdCIsIk1lbnUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRleHQiLCJzdWIiLCJpbmRleDAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEJDLFlBQVUsRUFBRTtBQURNLENBQXBCO0FBSUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxhQUFXLEVBQUU7QUFERyxDQUFsQjs7QUFJQSxJQUFNQyxJQUFJLEdBQUcsZ0JBQU07QUFFakIsTUFBSUMsSUFBSSxHQUFHLENBQ1QsUUFEUyxFQUVULFFBRlMsRUFHVCxTQUhTLEVBSVQsV0FKUyxFQUtULFVBTFMsRUFNVCxRQU5TLEVBT1QsVUFQUyxDQUFYO0FBQUEsTUFTRUMsTUFBTSxHQUFHLENBQ1AsU0FETyxFQUVQLFVBRk8sRUFHUCxPQUhPLEVBSVAsT0FKTyxFQUtQLEtBTE8sRUFNUCxNQU5PLEVBT1AsTUFQTyxFQVFQLFFBUk8sRUFTUCxXQVRPLEVBVVAsU0FWTyxFQVdQLFVBWE8sRUFZUCxVQVpPLENBVFg7QUFBQSxNQXVCRUYsSUFBSSxHQUFHLElBQUlHLElBQUosRUF2QlQ7QUF5QkEsTUFBTUMsV0FBVyxHQUNmSCxJQUFJLENBQUNELElBQUksQ0FBQ0ssTUFBTCxFQUFELENBQUosR0FDQSxJQURBLEdBRUFILE1BQU0sQ0FBQ0YsSUFBSSxDQUFDTSxRQUFMLEVBQUQsQ0FGTixHQUdBLEdBSEEsR0FJQU4sSUFBSSxDQUFDTyxPQUFMLEVBSkEsR0FLQSxJQUxBLEdBTUFQLElBQUksQ0FBQ1EsV0FBTCxFQVBGO0FBU0EsU0FBT0osV0FBUDtBQUNELENBckNEOztBQXVDQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRTVCLFNBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHVFQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQztBQUFYLE9BQWUsNEJBQWYsQ0FERixDQURGLENBREYsRUFPRTtBQUFLLGVBQVMsRUFBQztBQUFmLE1BUEYsRUFXRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE1BREYsQ0FERixDQURGLEVBVUU7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQXVCVixJQUFJLEVBQTNCLENBREYsQ0FERixDQVZGLENBWEYsQ0FERixDQURGLENBREY7QUFWRjtBQXFERCxDQXZERDs7S0FBTVMsTzs7QUF5RE4sSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQ0YsUUFBSSxFQUFFRSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsTUFBWCxDQUFrQixhQUFsQjtBQUQwQixHQUFMO0FBQUEsQ0FBN0I7O0FBSWVDLDBIQUFPLENBQ3BCSixlQURvQixDQUFQLENBRWJGLE9BRmEsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEE7O0FBRUEsSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUUxQixTQUVFLG1FQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBRUUsa0JBQ0dBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBRVQ7QUFBSSxTQUFHLEVBQUVBO0FBQVQsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVgsT0FBeUIsaUJBQUlELElBQUksQ0FBQ0UsSUFBVCxDQUF6QixDQURGLEVBR0U7QUFBSyxZQUFNLEVBQUUsQ0FBQ0YsSUFBSSxDQUFDRyxHQUFuQjtBQUF3QixlQUFTLEVBQUM7QUFBbEMsTUFIRixFQUtFO0FBQUksWUFBTSxFQUFFLENBQUNILElBQUksQ0FBQ0c7QUFBbEIsT0FFR0gsSUFBSSxDQUFDRyxHQUFMLENBQVNKLEdBQVQsQ0FBYSxVQUFDSSxHQUFELEVBQU1DLE1BQU47QUFBQSxhQUNaO0FBQUksV0FBRyxFQUFFQTtBQUFULFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQztBQUFYLFNBQXdCLGlCQUFJRCxHQUFHLENBQUNELElBQVIsQ0FBeEIsQ0FERixDQURZO0FBQUEsS0FBYixDQUZILENBTEYsQ0FGUztBQUFBLEdBQVYsQ0FESCxDQUZGLENBREYsQ0FERixDQUZGO0FBa0NELENBcENEOztLQUFNTCxJO0FBdUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBNZW51IGZyb20gJy4vYmxvY2stbWVudTEnXHJcblxyXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcclxuICBiYWNrZ3JvdW5kOiAnI2YwMTgxOCdcclxufVxyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIG1hcmdpblJpZ2h0OiAxNVxyXG59XHJcblxyXG5jb25zdCBkYXRlID0gKCkgPT4ge1xyXG5cclxuICBsZXQgZGF5cyA9IFtcclxuICAgICdTdW5kYXknLFxyXG4gICAgJ01vbmRheScsXHJcbiAgICAnVHVlc2RheScsXHJcbiAgICAnV2VkbmVzZGF5JyxcclxuICAgICdUaHVyc2RheScsXHJcbiAgICAnRnJpZGF5JyxcclxuICAgICdTYXR1cmRheSdcclxuICBdLFxyXG4gICAgbW9udGhzID0gW1xyXG4gICAgICAnSmFudWFyeScsXHJcbiAgICAgICdGZWJydWFyeScsXHJcbiAgICAgICdNYXJjaCcsXHJcbiAgICAgICdBcHJpbCcsXHJcbiAgICAgICdNYXknLFxyXG4gICAgICAnSnVuZScsXHJcbiAgICAgICdKdWx5JyxcclxuICAgICAgJ0F1Z3VzdCcsXHJcbiAgICAgICdTZXB0ZW1iZXInLFxyXG4gICAgICAnT2N0b2JlcicsXHJcbiAgICAgICdOb3ZlbWJlcicsXHJcbiAgICAgICdEZWNlbWJlcidcclxuICAgIF0sXHJcbiAgICBkYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgY29uc3QgZGlzcGxheURhdGUgPVxyXG4gICAgZGF5c1tkYXRlLmdldERheSgpXSArXHJcbiAgICAnLCAnICtcclxuICAgIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldICtcclxuICAgICcgJyArXHJcbiAgICBkYXRlLmdldERhdGUoKSArXHJcbiAgICAnLCAnICtcclxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIGRpc3BsYXlEYXRlO1xyXG59XHJcblxyXG5jb25zdCBGb290ZXIxID0gKHsgbWVudSB9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XHJcbiAgICAvLyAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAvLyAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cclxuICAgIC8vICAgPC9MaW5rPlxyXG4gICAgLy8gICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAvLyAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XHJcbiAgICAvLyAgIDwvTGluaz5cclxuICAgIC8vIDwvZGl2PlxyXG5cclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgZGVza3RvcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMjUwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkpvb3JuYWxvPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTI1MFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IGlkPVwic2VhcmNoXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiIHR5cGU9XCJ0ZXh0XCIgb25LZXlkb3duPVwiX2tleWRvd25cIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBvbi10YXA9XCJfc3VibWl0XCIgY2xhc3M9XCJzZWFyY2gtaWNvblwiPjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPntkYXRlKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzdHJpcGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgPE1lbnUgaXRlbXM9e21lbnV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICA8Lz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gIG1lbnU6IHN0YXRlLm5ld3MuY29uZmlnWydtZW51LWhlYWRlciddLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzXHJcbikoRm9vdGVyMSk7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBNZW51ID0gKHsgaXRlbXMgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1lbnVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIntpdGVtLmxpbmt9XCI+PGE+e2l0ZW0udGV4dH08L2E+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaGlkZGVuPXshaXRlbS5zdWJ9IGNsYXNzTmFtZT1cImJnXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPG9sIGhpZGRlbj17IWl0ZW0uc3VifT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnN1Yi5tYXAoKHN1YiwgaW5kZXgwKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXgwfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJ7c3ViLmxpbmt9XCI+PGE+e3N1Yi50ZXh0fTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9vbD5cclxuXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==