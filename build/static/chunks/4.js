(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

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

/***/ "./components/block-news2.js":
/*!***********************************!*\
  !*** ./components/block-news2.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_adv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-adv */ "./components/block-adv.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var news2 = function news2(_ref) {
  _s();

  var data = _ref.data;
  var AdParams = {
    size: '160x600'
  }; // componentDidMount(() => {
  //   console.log('componentDidMount')
  // });

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', updateImageWidths);
    updateImageWidths();
  }, []);
  var tmp = unescape(data.text);
  var find;
  find = tmp.split('<embed id="');

  for (var i = find.length - 1; i--;) {
    var mediaNum = parseInt(find[i + 1].charAt(0));

    if (data.media[mediaNum - 1]) {
      find[i + 1] = '<div class="embed">' + data.media[mediaNum - 1].embed + '</div>' + find[i + 1].substring(5);
    } else {
      find[i + 1] = find[i + 1].substring(5);
    }
  }

  tmp = find.join('');
  find = tmp.split('<image id="');

  for (var _i = find.length - 1; _i--;) {
    var imageNum = parseInt(find[_i + 1].charAt(0));

    if (data.images[imageNum - 1]) {
      find[_i + 1] = '<img src="https://data.joornalo.com/news/4/c/' + data.images[imageNum - 1].url + '" />' + find[_i + 1].substring(5);
    } else {
      find[_i + 1] = find[_i + 1].substring(5);
    }
  }

  var modText = html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(find.join(''));
  var mainImgUrl = 'https://data.joornalo.com/news/4/c/' + data.images[0].url;

  var updateImageWidths = function updateImageWidths() {
    try {
      //console.log('updateImageWidths********')
      var contentWidth = document.querySelector(".newsContent div").offsetWidth; //console.log(contentWidth);

      var embed = document.querySelectorAll('.newsContent .embed iframe');

      for (var x = 0; x < embed.length; x++) {
        embed[x].width = contentWidth; //embed[x].height = contentWidth * .5625;
      }

      embed = document.querySelectorAll('.newsContent .embed .twitter-tweet'); //console.log(embed)

      for (var _x = 0; _x < embed.length; _x++) {
        embed[_x].style["width"] = "100%";
      }
    } catch (er) {
      window.removeEventListener('resize', updateImageWidths, false);
    }
  };

  return __jsx("div", {
    className: "news"
  }, __jsx("h2", null, data.title), __jsx("div", {
    className: "row row-m-column"
  }, __jsx("div", {
    className: "col-220 col-m-full"
  }, __jsx("div", {
    className: "details"
  }, "Details"), __jsx(_block_adv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    params: AdParams
  })), __jsx("div", {
    className: "newsContent col-full-220 col-m-auto"
  }, __jsx("img", {
    src: mainImgUrl
  }), __jsx("div", {
    suppressHydrationWarning: true
  }, modText))));
};

_s(news2, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (news2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1hZHYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmxvY2stbmV3czIuanMiXSwibmFtZXMiOlsiQWR2IiwiY29udGV4dCIsInVzZVN0YXRlIiwibXNnIiwic2V0TXNnIiwiaWQiLCJzZXRJZCIsImZpcnN0Iiwic2V0Rmlyc3QiLCJhZHNyYyIsInNldEFkc3JjIiwibG9hZGVkIiwiaXNJbnRlcnNlY3RpbmciLCJ1c2VFZmZlY3QiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJkaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnNlcnZlckNoaWxkIiwidW5vYnNlcnZlIiwidGFyZ2V0IiwicHJlTG9hZCIsIm9ic2VydmUiLCJlcnIiLCJzYWZhcmlJc3N1ZSIsIm51bSIsImZsb29yIiwiYmIiLCJwYXJhbXMiLCJzaXplIiwibmV3czIiLCJkYXRhIiwiQWRQYXJhbXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlSW1hZ2VXaWR0aHMiLCJ0bXAiLCJ1bmVzY2FwZSIsInRleHQiLCJmaW5kIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwibWVkaWFOdW0iLCJwYXJzZUludCIsImNoYXJBdCIsIm1lZGlhIiwiZW1iZWQiLCJzdWJzdHJpbmciLCJqb2luIiwiaW1hZ2VOdW0iLCJpbWFnZXMiLCJ1cmwiLCJtb2RUZXh0IiwiUGFyc2VyIiwibWFpbkltZ1VybCIsImNvbnRlbnRXaWR0aCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRXaWR0aCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ4Iiwid2lkdGgiLCJzdHlsZSIsImVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdB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Q0FERixFQU9FO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLE9BQUcsRUFBRXVCO0FBQVYsSUFERixFQUVFO0FBQUssNEJBQXdCLEVBQUU7QUFBL0IsS0FBc0NGLE9BQXRDLENBRkYsQ0FQRixDQUZGLENBREY7QUFpQkQsQ0FoRkQ7O0dBQU12QixLOztBQWtGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy80LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFkdiA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKCctLS0nKVxyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZmlyc3QsIHNldEZpcnN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Fkc3JjLCBzZXRBZHNyY10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIC8vIGNvbnN0IFtjb250ZW50V2lkdGgsIHNldENvbnRlbnRXaWR0aF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBsZXQgbG9hZGVkID0gZmFsc2U7XHJcbiAgbGV0IGlzSW50ZXJzZWN0aW5nID0gZmFsc2U7XHJcbiAgLy8gbGV0IGJhbm5lciA9ICcnXHJcblxyXG4gIC8vIGlmIChjb250ZXh0LnBhcmFtcykge1xyXG4gIC8vICAgYmFubmVyID0gY29udGV4dC5wYXJhbXMuc2l6ZTtcclxuICAvLyB9XHJcblxyXG4gIC8qXHJcbiAgMzAweDI1MCAtIE1lZGl1bSBSZWN0YW5nbGUgLSA0MCVcclxuICA3Mjh4OTAgLSBMZWFkZXJib2FyZCAtIDI1JVxyXG4gIDE2MHg2MDAgLSBXaWRlIFNreXNjcmFwZXIgLSAxMiVcclxuICAzMDB4NjAwIC0gSGFsZiBQYWdlIC0gNSVcclxuICA5NzB4MjUwIC0gQmlsbGJvYXJkIC0gMSVcclxuICAxMjB4NjAwIC0gU2t5c2NyYXBlclxyXG5cclxuICAzMjB4NTAgLSBNb2JpbGUgTGVhZGVyYm9hcmQgLSAxMiVcclxuICAzMjB4MzIwIC0gTW9iaWxlIEZ1bGwgUGFnZSBGbGV4IC0gMSVcclxuICAzMjB4MTAwIC0gTGFyZ2UgTW9iaWxlXHJcbiAgKi9cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgc2V0SWQoJ2FkdicgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKVxyXG4gICAgfVxyXG4gICAgaWYgKCFmaXJzdCAmJiBpZCkge1xyXG4gICAgICBzZXRGaXJzdCh0cnVlKVxyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgIGlmIChkaXYpIHtcclxuICAgICAgICAvLyBzZXRDb250ZW50V2lkdGgoZGl2Lm9mZnNldFdpZHRoKVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlckNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbG9hZGVkICYmIGVudHJpZXNbMF0uaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGlzSW50ZXJzZWN0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBvYnNlcnZlckNoaWxkLnVub2JzZXJ2ZShlbnRyaWVzWzBdLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgcHJlTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZGl2KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHNhZmFyaUlzc3VlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzYWZhcmlJc3N1ZSA9ICgpID0+IHtcclxuICAgIGlmICghbG9hZGVkKSB7XHJcbiAgICAgIGxvYWRlZCA9IHRydWU7XHJcbiAgICAgIGlzSW50ZXJzZWN0aW5nID0gdHJ1ZTtcclxuICAgICAgcHJlTG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuIDMwMHgyNTAgLSBNZWRpdW0gUmVjdGFuZ2xlIC0gNDAlXHJcbiA3Mjh4OTAgLSBMZWFkZXJib2FyZCAtIDI1JVxyXG4gMTYweDYwMCAtIFdpZGUgU2t5c2NyYXBlciAtIDEyJVxyXG4gMzAweDYwMCAtIEhhbGYgUGFnZSAtIDUlXHJcbiAxMjB4NjAwIC0gU2t5c2NyYXBlclxyXG5cclxuICA5NzB4MjUwIC0gQmlsbGJvYXJkIC0gMSVcclxuICovXHJcblxyXG4gIGNvbnN0IHByZUxvYWQgPSAoKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdSZWFkeSB0byBsb2FkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLicsIGlkKVxyXG4gICAgaWYgKGlzSW50ZXJzZWN0aW5nKSB7XHJcblxyXG4gICAgICBzZXRNc2coJ0xvYWRlZCcpXHJcbiAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KVxyXG4gICAgICBsZXQgYmIgPSBbJ2EnLCAnYicsICdjJywgJ2QnXVxyXG4gICAgICBzZXRBZHNyYygnaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9hZHMvJyArIGNvbnRleHQucGFyYW1zLnNpemUgKyBiYltudW1dICsgJy5qcGcnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdhZHYgZXVyZWthJyBpZD17aWR9PlxyXG4gICAgICA8aW1nIHNyYz17YWRzcmN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuey8qIEFkIHtiYW5uZXJ9ICh7Y29udGVudFdpZHRofSk6IHttc2d9ICovIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkdjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXJzZXIsIHsgZG9tVG9SZWFjdCwgaHRtbFRvRE9NIH0gZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xyXG5pbXBvcnQgQWR2IGZyb20gJy4vYmxvY2stYWR2J1xyXG5cclxuY29uc3QgbmV3czIgPSAoeyBkYXRhIH0pID0+IHtcclxuXHJcbiAgY29uc3QgQWRQYXJhbXMgPSB7XHJcbiAgICBzaXplOiAnMTYweDYwMCdcclxuICB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCgpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdjb21wb25lbnREaWRNb3VudCcpXHJcbiAgLy8gfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlSW1hZ2VXaWR0aHMpO1xyXG4gICAgdXBkYXRlSW1hZ2VXaWR0aHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGxldCB0bXAgPSB1bmVzY2FwZShkYXRhLnRleHQpO1xyXG4gIGxldCBmaW5kO1xyXG4gIGZpbmQgPSB0bXAuc3BsaXQoJzxlbWJlZCBpZD1cIicpO1xyXG5cclxuICBmb3IgKGxldCBpID0gZmluZC5sZW5ndGggLSAxOyBpLS07KSB7XHJcbiAgICBsZXQgbWVkaWFOdW0gPSBwYXJzZUludChmaW5kW2kgKyAxXS5jaGFyQXQoMCkpO1xyXG4gICAgaWYgKGRhdGEubWVkaWFbbWVkaWFOdW0gLSAxXSkge1xyXG4gICAgICBmaW5kW2kgKyAxXSA9ICc8ZGl2IGNsYXNzPVwiZW1iZWRcIj4nICsgZGF0YS5tZWRpYVttZWRpYU51bSAtIDFdLmVtYmVkICsgJzwvZGl2PicgKyBmaW5kW2kgKyAxXS5zdWJzdHJpbmcoNSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaW5kW2kgKyAxXSA9IGZpbmRbaSArIDFdLnN1YnN0cmluZyg1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRtcCA9IGZpbmQuam9pbignJyk7XHJcbiAgZmluZCA9IHRtcC5zcGxpdCgnPGltYWdlIGlkPVwiJyk7XHJcbiAgZm9yIChsZXQgaSA9IGZpbmQubGVuZ3RoIC0gMTsgaS0tOykge1xyXG4gICAgbGV0IGltYWdlTnVtID0gcGFyc2VJbnQoZmluZFtpICsgMV0uY2hhckF0KDApKTtcclxuICAgIGlmIChkYXRhLmltYWdlc1tpbWFnZU51bSAtIDFdKSB7XHJcbiAgICAgIGZpbmRbaSArIDFdID0gJzxpbWcgc3JjPVwiaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9uZXdzLzQvYy8nICsgZGF0YS5pbWFnZXNbaW1hZ2VOdW0gLSAxXS51cmwgKyAnXCIgLz4nICsgZmluZFtpICsgMV0uc3Vic3RyaW5nKDUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmluZFtpICsgMV0gPSBmaW5kW2kgKyAxXS5zdWJzdHJpbmcoNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgbW9kVGV4dCA9IFBhcnNlcihmaW5kLmpvaW4oJycpKTtcclxuXHJcbiAgY29uc3QgbWFpbkltZ1VybCA9ICdodHRwczovL2RhdGEuam9vcm5hbG8uY29tL25ld3MvNC9jLycgKyBkYXRhLmltYWdlc1swXS51cmw7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUltYWdlV2lkdGhzID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy9jb25zb2xlLmxvZygndXBkYXRlSW1hZ2VXaWR0aHMqKioqKioqKicpXHJcbiAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3c0NvbnRlbnQgZGl2XCIpLm9mZnNldFdpZHRoO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGNvbnRlbnRXaWR0aCk7XHJcbiAgICAgIGxldCBlbWJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdzQ29udGVudCAuZW1iZWQgaWZyYW1lJylcclxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBlbWJlZC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgIGVtYmVkW3hdLndpZHRoID0gY29udGVudFdpZHRoO1xyXG4gICAgICAgIC8vZW1iZWRbeF0uaGVpZ2h0ID0gY29udGVudFdpZHRoICogLjU2MjU7XHJcbiAgICAgIH1cclxuICAgICAgZW1iZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3c0NvbnRlbnQgLmVtYmVkIC50d2l0dGVyLXR3ZWV0JylcclxuICAgICAgLy9jb25zb2xlLmxvZyhlbWJlZClcclxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBlbWJlZC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgIGVtYmVkW3hdLnN0eWxlW1wid2lkdGhcIl0gPSBcIjEwMCVcIjtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXIpIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUltYWdlV2lkdGhzLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCI+XHJcbiAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctbS1jb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yMjAgY29sLW0tZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIERldGFpbHNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEFkdiBwYXJhbXM9e0FkUGFyYW1zfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c0NvbnRlbnQgY29sLWZ1bGwtMjIwIGNvbC1tLWF1dG9cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXttYWluSW1nVXJsfSAvPlxyXG4gICAgICAgICAgPGRpdiBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc9e3RydWV9Pnttb2RUZXh0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld3MyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9