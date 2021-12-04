(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./components/block-adv.js":
/*!*********************************!*\
  !*** ./components/block-adv.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Adv = function Adv(context) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('---'),
      msg = _useState[0],
      setMsg = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      id = _useState2[0],
      setId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      first = _useState3[0],
      setFirst = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      adsrc = _useState4[0],
      setAdsrc = _useState4[1]; // const [contentWidth, setContentWidth] = useState(0)


  var loaded = false;
  var isIntersecting = false; // let banner = ''
  // if (context.params) {
  //   banner = context.params.size;
  // }

  /*
  300x250 - Medium Rectangle - 40%
  728x90 - Leaderboard - 25%
  160x600 - Wide Skyscraper - 12%
  300x600 - Half Page - 5%
  970x250 - Billboard - 1%
  120x600 - Skyscraper
    320x50 - Mobile Leaderboard - 12%
  320x320 - Mobile Full Page Flex - 1%
  320x100 - Large Mobile
  */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!id) {
      setId('adv' + Math.round(Math.random() * 100000));
    }

    if (!first && id) {
      setFirst(true);
      var div = document.getElementById(id);

      if (div) {
        // setContentWidth(div.offsetWidth)
        try {
          var observer = new IntersectionObserver(function (entries, observerChild) {
            if (!loaded && entries[0].isIntersecting) {
              loaded = true;
              isIntersecting = true;
              observerChild.unobserve(entries[0].target);
              preLoad();
            }
          });
          observer.observe(div);
        } catch (err) {
          safariIssue();
        }
      }
    }
  });

  var safariIssue = function safariIssue() {
    if (!loaded) {
      loaded = true;
      isIntersecting = true;
      preLoad();
    }
  };
  /*
  300x250 - Medium Rectangle - 40%
  728x90 - Leaderboard - 25%
  160x600 - Wide Skyscraper - 12%
  300x600 - Half Page - 5%
  120x600 - Skyscraper
    970x250 - Billboard - 1%
  */


  var preLoad = function preLoad() {
    //console.log('Ready to load...............................', id)
    if (isIntersecting) {
      setMsg('Loaded');
      var num = Math.floor(Math.random() * 4);
      var bb = ['a', 'b', 'c', 'd'];
      setAdsrc('https://data.joornalo.com/ads/' + context.params.size + bb[num] + '.jpg');
    }
  };

  return __jsx("div", {
    className: "adv eureka",
    id: id
  }, __jsx("img", {
    src: adsrc
  }));
};

_s(Adv, "xSuUNrfbBm8PWPvU7OaIpzXTgrU=");

_c = Adv;
{
  /* Ad {banner} ({contentWidth}): {msg} */
}
/* harmony default export */ __webpack_exports__["default"] = (Adv);

var _c;

$RefreshReg$(_c, "Adv");

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

/***/ "./components/block-header1.js":
/*!*************************************!*\
  !*** ./components/block-header1.js ***!
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
/* harmony import */ var _block_adv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-adv */ "./components/block-adv.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var headerStyle = {
  background: '#f01818'
};
var linkStyle = {
  marginRight: 15
};
var AdParams = {
  size: '728x90'
};

var date = function date() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      date = new Date();
  var displayDate = days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  return displayDate;
};

var Header1 = function Header1(_ref) {
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
      className: "col-auto headerBanner"
    }, __jsx(_block_adv__WEBPACK_IMPORTED_MODULE_4__["default"], {
      params: AdParams
    })), __jsx("div", {
      className: "col-250"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("div", {
      className: "search-box"
    }, __jsx("input", {
      id: "search",
      placeholder: "Search",
      type: "text"
    })))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("div", {
      className: "date"
    }, date()))))))), __jsx("div", {
      className: "stripe"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx(_block_menu1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: menu
    }))))
  );
};

_c = Header1;

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.news.config['menu-header']
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Header1));

var _c;

$RefreshReg$(_c, "Header1");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1hZHYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmxvY2staGVhZGVyMS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1tZW51MS5qcyJdLCJuYW1lcyI6WyJBZHYiLCJjb250ZXh0IiwidXNlU3RhdGUiLCJtc2ciLCJzZXRNc2ciLCJpZCIsInNldElkIiwiZmlyc3QiLCJzZXRGaXJzdCIsImFkc3JjIiwic2V0QWRzcmMiLCJsb2FkZWQiLCJpc0ludGVyc2VjdGluZyIsInVzZUVmZmVjdCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImRpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9ic2VydmVyQ2hpbGQiLCJ1bm9ic2VydmUiLCJ0YXJnZXQiLCJwcmVMb2FkIiwib2JzZXJ2ZSIsImVyciIsInNhZmFyaUlzc3VlIiwibnVtIiwiZmxvb3IiLCJiYiIsInBhcmFtcyIsInNpemUiLCJoZWFkZXJTdHlsZSIsImJhY2tncm91bmQiLCJsaW5rU3R5bGUiLCJtYXJnaW5SaWdodCIsIkFkUGFyYW1zIiwiZGF0ZSIsImRheXMiLCJtb250aHMiLCJEYXRlIiwiZGlzcGxheURhdGUiLCJnZXREYXkiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsIkhlYWRlcjEiLCJtZW51IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuZXdzIiwiY29uZmlnIiwiY29ubmVjdCIsIk1lbnUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRleHQiLCJzdWIiLCJpbmRleDAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxPQUFELEVBQWE7QUFBQTs7QUFDdkIsa0JBQXNCQyxzREFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckhBOztBQUVBLElBQU1PLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFFMUIsU0FFRSxtRUFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUVFLGtCQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUVUO0FBQUksU0FBRyxFQUFFQTtBQUFULE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQztBQUFYLE9BQXlCLGlCQUFJRCxJQUFJLENBQUNFLElBQVQsQ0FBekIsQ0FERixFQUdFO0FBQUssWUFBTSxFQUFFLENBQUNGLElBQUksQ0FBQ0csR0FBbkI7QUFBd0IsZUFBUyxFQUFDO0FBQWxDLE1BSEYsRUFLRTtBQUFJLFlBQU0sRUFBRSxDQUFDSCxJQUFJLENBQUNHO0FBQWxCLE9BRUdILElBQUksQ0FBQ0csR0FBTCxDQUFTSixHQUFULENBQWEsVUFBQ0ksR0FBRCxFQUFNQyxNQUFOO0FBQUEsYUFDWjtBQUFJLFdBQUcsRUFBRUE7QUFBVCxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWCxTQUF3QixpQkFBSUQsR0FBRyxDQUFDRCxJQUFSLENBQXhCLENBREYsQ0FEWTtBQUFBLEtBQWIsQ0FGSCxDQUxGLENBRlM7QUFBQSxHQUFWLENBREgsQ0FGRixDQURGLENBREYsQ0FGRjtBQWtDRCxDQXBDRDs7S0FBTUwsSTtBQXVDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFkdiA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKCctLS0nKVxyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZmlyc3QsIHNldEZpcnN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Fkc3JjLCBzZXRBZHNyY10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIC8vIGNvbnN0IFtjb250ZW50V2lkdGgsIHNldENvbnRlbnRXaWR0aF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBsZXQgbG9hZGVkID0gZmFsc2U7XHJcbiAgbGV0IGlzSW50ZXJzZWN0aW5nID0gZmFsc2U7XHJcbiAgLy8gbGV0IGJhbm5lciA9ICcnXHJcblxyXG4gIC8vIGlmIChjb250ZXh0LnBhcmFtcykge1xyXG4gIC8vICAgYmFubmVyID0gY29udGV4dC5wYXJhbXMuc2l6ZTtcclxuICAvLyB9XHJcblxyXG4gIC8qXHJcbiAgMzAweDI1MCAtIE1lZGl1bSBSZWN0YW5nbGUgLSA0MCVcclxuICA3Mjh4OTAgLSBMZWFkZXJib2FyZCAtIDI1JVxyXG4gIDE2MHg2MDAgLSBXaWRlIFNreXNjcmFwZXIgLSAxMiVcclxuICAzMDB4NjAwIC0gSGFsZiBQYWdlIC0gNSVcclxuICA5NzB4MjUwIC0gQmlsbGJvYXJkIC0gMSVcclxuICAxMjB4NjAwIC0gU2t5c2NyYXBlclxyXG5cclxuICAzMjB4NTAgLSBNb2JpbGUgTGVhZGVyYm9hcmQgLSAxMiVcclxuICAzMjB4MzIwIC0gTW9iaWxlIEZ1bGwgUGFnZSBGbGV4IC0gMSVcclxuICAzMjB4MTAwIC0gTGFyZ2UgTW9iaWxlXHJcbiAgKi9cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgc2V0SWQoJ2FkdicgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKVxyXG4gICAgfVxyXG4gICAgaWYgKCFmaXJzdCAmJiBpZCkge1xyXG4gICAgICBzZXRGaXJzdCh0cnVlKVxyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgIGlmIChkaXYpIHtcclxuICAgICAgICAvLyBzZXRDb250ZW50V2lkdGgoZGl2Lm9mZnNldFdpZHRoKVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlckNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbG9hZGVkICYmIGVudHJpZXNbMF0uaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGlzSW50ZXJzZWN0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBvYnNlcnZlckNoaWxkLnVub2JzZXJ2ZShlbnRyaWVzWzBdLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgcHJlTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZGl2KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHNhZmFyaUlzc3VlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzYWZhcmlJc3N1ZSA9ICgpID0+IHtcclxuICAgIGlmICghbG9hZGVkKSB7XHJcbiAgICAgIGxvYWRlZCA9IHRydWU7XHJcbiAgICAgIGlzSW50ZXJzZWN0aW5nID0gdHJ1ZTtcclxuICAgICAgcHJlTG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuIDMwMHgyNTAgLSBNZWRpdW0gUmVjdGFuZ2xlIC0gNDAlXHJcbiA3Mjh4OTAgLSBMZWFkZXJib2FyZCAtIDI1JVxyXG4gMTYweDYwMCAtIFdpZGUgU2t5c2NyYXBlciAtIDEyJVxyXG4gMzAweDYwMCAtIEhhbGYgUGFnZSAtIDUlXHJcbiAxMjB4NjAwIC0gU2t5c2NyYXBlclxyXG5cclxuICA5NzB4MjUwIC0gQmlsbGJvYXJkIC0gMSVcclxuICovXHJcblxyXG4gIGNvbnN0IHByZUxvYWQgPSAoKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdSZWFkeSB0byBsb2FkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLicsIGlkKVxyXG4gICAgaWYgKGlzSW50ZXJzZWN0aW5nKSB7XHJcblxyXG4gICAgICBzZXRNc2coJ0xvYWRlZCcpXHJcbiAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KVxyXG4gICAgICBsZXQgYmIgPSBbJ2EnLCAnYicsICdjJywgJ2QnXVxyXG4gICAgICBzZXRBZHNyYygnaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9hZHMvJyArIGNvbnRleHQucGFyYW1zLnNpemUgKyBiYltudW1dICsgJy5qcGcnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdhZHYgZXVyZWthJyBpZD17aWR9PlxyXG4gICAgICA8aW1nIHNyYz17YWRzcmN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuey8qIEFkIHtiYW5uZXJ9ICh7Y29udGVudFdpZHRofSk6IHttc2d9ICovIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkdjsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBNZW51IGZyb20gJy4vYmxvY2stbWVudTEnXHJcbmltcG9ydCBBZHYgZnJvbSAnLi9ibG9jay1hZHYnXHJcblxyXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcclxuICBiYWNrZ3JvdW5kOiAnI2YwMTgxOCdcclxufVxyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIG1hcmdpblJpZ2h0OiAxNVxyXG59XHJcblxyXG5jb25zdCBBZFBhcmFtcyA9IHtcclxuICBzaXplOiAnNzI4eDkwJ1xyXG59XHJcblxyXG5jb25zdCBkYXRlID0gKCkgPT4ge1xyXG5cclxuICBsZXQgZGF5cyA9IFtcclxuICAgICdTdW5kYXknLFxyXG4gICAgJ01vbmRheScsXHJcbiAgICAnVHVlc2RheScsXHJcbiAgICAnV2VkbmVzZGF5JyxcclxuICAgICdUaHVyc2RheScsXHJcbiAgICAnRnJpZGF5JyxcclxuICAgICdTYXR1cmRheSdcclxuICBdLFxyXG4gICAgbW9udGhzID0gW1xyXG4gICAgICAnSmFudWFyeScsXHJcbiAgICAgICdGZWJydWFyeScsXHJcbiAgICAgICdNYXJjaCcsXHJcbiAgICAgICdBcHJpbCcsXHJcbiAgICAgICdNYXknLFxyXG4gICAgICAnSnVuZScsXHJcbiAgICAgICdKdWx5JyxcclxuICAgICAgJ0F1Z3VzdCcsXHJcbiAgICAgICdTZXB0ZW1iZXInLFxyXG4gICAgICAnT2N0b2JlcicsXHJcbiAgICAgICdOb3ZlbWJlcicsXHJcbiAgICAgICdEZWNlbWJlcidcclxuICAgIF0sXHJcbiAgICBkYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgY29uc3QgZGlzcGxheURhdGUgPVxyXG4gICAgZGF5c1tkYXRlLmdldERheSgpXSArXHJcbiAgICAnLCAnICtcclxuICAgIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldICtcclxuICAgICcgJyArXHJcbiAgICBkYXRlLmdldERhdGUoKSArXHJcbiAgICAnLCAnICtcclxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIGRpc3BsYXlEYXRlO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXIxID0gKHsgbWVudSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cclxuICAgIC8vICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgIC8vICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Ib21lPC9hPlxyXG4gICAgLy8gICA8L0xpbms+XHJcbiAgICAvLyAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgIC8vICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cclxuICAgIC8vICAgPC9MaW5rPlxyXG4gICAgLy8gPC9kaXY+XHJcblxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBkZXNrdG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yNTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+Sm9vcm5hbG88L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gaGVhZGVyQmFubmVyXCI+XHJcbiAgICAgICAgICAgICAgPEFkdiBwYXJhbXM9e0FkUGFyYW1zfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTI1MFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IGlkPVwic2VhcmNoXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiIHR5cGU9XCJ0ZXh0XCIgb25LZXlkb3duPVwiX2tleWRvd25cIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBvbi10YXA9XCJfc3VibWl0XCIgY2xhc3M9XCJzZWFyY2gtaWNvblwiPjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPntkYXRlKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmlwZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8TWVudSBpdGVtcz17bWVudX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcblxyXG4gIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICBtZW51OiBzdGF0ZS5uZXdzLmNvbmZpZ1snbWVudS1oZWFkZXInXSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wc1xyXG4pKEhlYWRlcjEpO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTWVudSA9ICh7IGl0ZW1zIH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtZW51XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuXHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJ7aXRlbS5saW5rfVwiPjxhPntpdGVtLnRleHR9PC9hPjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGhpZGRlbj17IWl0ZW0uc3VifSBjbGFzc05hbWU9XCJiZ1wiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxvbCBoaWRkZW49eyFpdGVtLnN1Yn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5zdWIubWFwKChzdWIsIGluZGV4MCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwie3N1Yi5saW5rfVwiPjxhPntzdWIudGV4dH08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcblxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51OyJdLCJzb3VyY2VSb290IjoiIn0=