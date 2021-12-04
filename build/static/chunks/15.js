(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[15],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1hZHYuanMiXSwibmFtZXMiOlsiQWR2IiwiY29udGV4dCIsInVzZVN0YXRlIiwibXNnIiwic2V0TXNnIiwiaWQiLCJzZXRJZCIsImZpcnN0Iiwic2V0Rmlyc3QiLCJhZHNyYyIsInNldEFkc3JjIiwibG9hZGVkIiwiaXNJbnRlcnNlY3RpbmciLCJ1c2VFZmZlY3QiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJkaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnNlcnZlckNoaWxkIiwidW5vYnNlcnZlIiwidGFyZ2V0IiwicHJlTG9hZCIsIm9ic2VydmUiLCJlcnIiLCJzYWZhcmlJc3N1ZSIsIm51bSIsImZsb29yIiwiYmIiLCJwYXJhbXMiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsT0FBRCxFQUFhO0FBQUE7O0FBQ3ZCLGtCQUFzQkMsc0RBQVEsQ0FBQyxLQUFELENBQTlCO0FBQUEsTUFBT0MsR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBQ0EsbUJBQW9CRixzREFBUSxDQUFDLElBQUQsQ0FBNUI7QUFBQSxNQUFPRyxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBMEJKLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUFBLE1BQU9LLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUEwQk4sc0RBQVEsQ0FBQyxJQUFELENBQWxDO0FBQUEsTUFBT08sS0FBUDtBQUFBLE1BQWNDLFFBQWQsaUJBSnVCLENBS3ZCOzs7QUFFQSxNQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUlDLGNBQWMsR0FBRyxLQUFyQixDQVJ1QixDQVN2QjtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNSLEVBQUwsRUFBUztBQUNQQyxXQUFLLENBQUMsUUFBUVEsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixNQUEzQixDQUFULENBQUw7QUFDRDs7QUFDRCxRQUFJLENBQUNULEtBQUQsSUFBVUYsRUFBZCxFQUFrQjtBQUNoQkcsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNBLFVBQU1TLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCZCxFQUF4QixDQUFaOztBQUNBLFVBQUlZLEdBQUosRUFBUztBQUNQO0FBRUEsWUFBSTtBQUNGLGNBQUlHLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQVVDLGFBQVYsRUFBNEI7QUFDbEUsZ0JBQUksQ0FBQ1osTUFBRCxJQUFXVyxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdWLGNBQTFCLEVBQTBDO0FBQ3hDRCxvQkFBTSxHQUFHLElBQVQ7QUFDQUMsNEJBQWMsR0FBRyxJQUFqQjtBQUNBVywyQkFBYSxDQUFDQyxTQUFkLENBQXdCRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLE1BQW5DO0FBQ0FDLHFCQUFPO0FBQ1I7QUFDRixXQVBjLENBQWY7QUFRQU4sa0JBQVEsQ0FBQ08sT0FBVCxDQUFpQlYsR0FBakI7QUFDRCxTQVZELENBVUUsT0FBT1csR0FBUCxFQUFZO0FBQ1pDLHFCQUFXO0FBQ1o7QUFDRjtBQUNGO0FBRUYsR0ExQlEsQ0FBVDs7QUE0QkEsTUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJLENBQUNsQixNQUFMLEVBQWE7QUFDWEEsWUFBTSxHQUFHLElBQVQ7QUFDQUMsb0JBQWMsR0FBRyxJQUFqQjtBQUNBYyxhQUFPO0FBQ1I7QUFDRixHQU5EO0FBUUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0UsTUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQjtBQUNBLFFBQUlkLGNBQUosRUFBb0I7QUFFbEJSLFlBQU0sQ0FBQyxRQUFELENBQU47QUFDQSxVQUFJMEIsR0FBRyxHQUFHaEIsSUFBSSxDQUFDaUIsS0FBTCxDQUFXakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQVY7QUFDQSxVQUFJZ0IsRUFBRSxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQVQ7QUFDQXRCLGNBQVEsQ0FBQyxtQ0FBbUNULE9BQU8sQ0FBQ2dDLE1BQVIsQ0FBZUMsSUFBbEQsR0FBeURGLEVBQUUsQ0FBQ0YsR0FBRCxDQUEzRCxHQUFtRSxNQUFwRSxDQUFSO0FBQ0Q7QUFDRixHQVREOztBQVdBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixNQUFFLEVBQUV6QjtBQUFoQyxLQUNFO0FBQUssT0FBRyxFQUFFSTtBQUFWLElBREYsQ0FERjtBQUtELENBMUZEOztHQUFNVCxHOztLQUFBQSxHO0FBMkZOO0FBQUM7QUFBMkM7QUFFN0JBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQWR2ID0gKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoJy0tLScpXHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtmaXJzdCwgc2V0Rmlyc3RdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbYWRzcmMsIHNldEFkc3JjXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgLy8gY29uc3QgW2NvbnRlbnRXaWR0aCwgc2V0Q29udGVudFdpZHRoXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGxldCBsb2FkZWQgPSBmYWxzZTtcclxuICBsZXQgaXNJbnRlcnNlY3RpbmcgPSBmYWxzZTtcclxuICAvLyBsZXQgYmFubmVyID0gJydcclxuXHJcbiAgLy8gaWYgKGNvbnRleHQucGFyYW1zKSB7XHJcbiAgLy8gICBiYW5uZXIgPSBjb250ZXh0LnBhcmFtcy5zaXplO1xyXG4gIC8vIH1cclxuXHJcbiAgLypcclxuICAzMDB4MjUwIC0gTWVkaXVtIFJlY3RhbmdsZSAtIDQwJVxyXG4gIDcyOHg5MCAtIExlYWRlcmJvYXJkIC0gMjUlXHJcbiAgMTYweDYwMCAtIFdpZGUgU2t5c2NyYXBlciAtIDEyJVxyXG4gIDMwMHg2MDAgLSBIYWxmIFBhZ2UgLSA1JVxyXG4gIDk3MHgyNTAgLSBCaWxsYm9hcmQgLSAxJVxyXG4gIDEyMHg2MDAgLSBTa3lzY3JhcGVyXHJcblxyXG4gIDMyMHg1MCAtIE1vYmlsZSBMZWFkZXJib2FyZCAtIDEyJVxyXG4gIDMyMHgzMjAgLSBNb2JpbGUgRnVsbCBQYWdlIEZsZXggLSAxJVxyXG4gIDMyMHgxMDAgLSBMYXJnZSBNb2JpbGVcclxuICAqL1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICBzZXRJZCgnYWR2JyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpXHJcbiAgICB9XHJcbiAgICBpZiAoIWZpcnN0ICYmIGlkKSB7XHJcbiAgICAgIHNldEZpcnN0KHRydWUpXHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgaWYgKGRpdikge1xyXG4gICAgICAgIC8vIHNldENvbnRlbnRXaWR0aChkaXYub2Zmc2V0V2lkdGgpXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyQ2hpbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFsb2FkZWQgJiYgZW50cmllc1swXS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgIGxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgaXNJbnRlcnNlY3RpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIG9ic2VydmVyQ2hpbGQudW5vYnNlcnZlKGVudHJpZXNbMF0udGFyZ2V0KTtcclxuICAgICAgICAgICAgICBwcmVMb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkaXYpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgc2FmYXJpSXNzdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNhZmFyaUlzc3VlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkZWQpIHtcclxuICAgICAgbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgaXNJbnRlcnNlY3RpbmcgPSB0cnVlO1xyXG4gICAgICBwcmVMb2FkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gMzAweDI1MCAtIE1lZGl1bSBSZWN0YW5nbGUgLSA0MCVcclxuIDcyOHg5MCAtIExlYWRlcmJvYXJkIC0gMjUlXHJcbiAxNjB4NjAwIC0gV2lkZSBTa3lzY3JhcGVyIC0gMTIlXHJcbiAzMDB4NjAwIC0gSGFsZiBQYWdlIC0gNSVcclxuIDEyMHg2MDAgLSBTa3lzY3JhcGVyXHJcblxyXG4gIDk3MHgyNTAgLSBCaWxsYm9hcmQgLSAxJVxyXG4gKi9cclxuXHJcbiAgY29uc3QgcHJlTG9hZCA9ICgpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coJ1JlYWR5IHRvIGxvYWQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uJywgaWQpXHJcbiAgICBpZiAoaXNJbnRlcnNlY3RpbmcpIHtcclxuXHJcbiAgICAgIHNldE1zZygnTG9hZGVkJylcclxuICAgICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXHJcbiAgICAgIGxldCBiYiA9IFsnYScsICdiJywgJ2MnLCAnZCddXHJcbiAgICAgIHNldEFkc3JjKCdodHRwczovL2RhdGEuam9vcm5hbG8uY29tL2Fkcy8nICsgY29udGV4dC5wYXJhbXMuc2l6ZSArIGJiW251bV0gKyAnLmpwZycpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2FkdiBldXJla2EnIGlkPXtpZH0+XHJcbiAgICAgIDxpbWcgc3JjPXthZHNyY30gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG57LyogQWQge2Jhbm5lcn0gKHtjb250ZW50V2lkdGh9KToge21zZ30gKi8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWR2OyJdLCJzb3VyY2VSb290IjoiIn0=