(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

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

/***/ "./components/block-news-mobile1.js":
/*!******************************************!*\
  !*** ./components/block-news-mobile1.js ***!
  \******************************************/
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




var news1 = function news1(_ref) {
  _s();

  var data = _ref.data;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    updateImageWidths();
    window.addEventListener('resize', updateImageWidths);
  });
  var AdParams = {
    size: '320x50'
  }; // const modText = Parser(data.text, {
  //   replace: (domNode) => {
  //     if (domNode.name === 'embed') {
  //       return <div className="embed">{Parser(data.media[domNode.attribs.id - 1].embed)}</div>;
  //     }
  //     if (domNode.name === 'image') {
  //       return <img src={Parser('https://data.joornalo.com/news/4/c/' + data.images[domNode.attribs.id - 1].url)} />
  //     }
  //   }
  // });

  var tmp = unescape(data.text);
  var find = tmp.split('<embed id="');

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
    var contentWidth = document.querySelector(".newsContent div").offsetWidth; //console.log(contentWidth);

    var embed = document.querySelectorAll('.newsContent .embed iframe');

    for (var x = 0; x < embed.length; x++) {
      embed[x].width = contentWidth;
      embed[x].height = contentWidth * .5625;
    }
  };

  return __jsx("div", {
    className: "news"
  }, __jsx("h2", null, data.title), __jsx("img", {
    src: mainImgUrl
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("div", {
    className: "details"
  }, "Details"), __jsx(_block_adv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    params: AdParams
  })), __jsx("div", {
    className: "newsContent col-12"
  }, __jsx("div", null, modText))));
};

_s(news1, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (news1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9jay1hZHYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmxvY2stbmV3cy1tb2JpbGUxLmpzIl0sIm5hbWVzIjpbIkFkdiIsImNvbnRleHQiLCJ1c2VTdGF0ZSIsIm1zZyIsInNldE1zZyIsImlkIiwic2V0SWQiLCJmaXJzdCIsInNldEZpcnN0IiwiYWRzcmMiLCJzZXRBZHNyYyIsImxvYWRlZCIsImlzSW50ZXJzZWN0aW5nIiwidXNlRWZmZWN0IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXJDaGlsZCIsInVub2JzZXJ2ZSIsInRhcmdldCIsInByZUxvYWQiLCJvYnNlcnZlIiwiZXJyIiwic2FmYXJpSXNzdWUiLCJudW0iLCJmbG9vciIsImJiIiwicGFyYW1zIiwic2l6ZSIsIm5ld3MxIiwiZGF0YSIsInVwZGF0ZUltYWdlV2lkdGhzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkFkUGFyYW1zIiwidG1wIiwidW5lc2NhcGUiLCJ0ZXh0IiwiZmluZCIsInNwbGl0IiwiaSIsImxlbmd0aCIsIm1lZGlhTnVtIiwicGFyc2VJbnQiLCJjaGFyQXQiLCJtZWRpYSIsImVtYmVkIiwic3Vic3RyaW5nIiwiam9pbiIsImltYWdlTnVtIiwiaW1hZ2VzIiwidXJsIiwibW9kVGV4dCIsIlBhcnNlciIsIm1haW5JbWdVcmwiLCJjb250ZW50V2lkdGgiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0V2lkdGgiLCJxdWVyeVNlbGVjdG9yQWxsIiwieCIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxPQUFELEVBQWE7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WixFQUFlQyxHQUExRTs7QUFHQSxNQUFNcEIsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLFFBQU13QixZQUFZLEdBQUczQyxRQUFRLENBQUM0QyxhQUFULENBQXVCLGtCQUF2QixFQUEyQ0MsV0FBaEUsQ0FEOEIsQ0FFOUI7O0FBQ0EsUUFBTVgsS0FBSyxHQUFHbEMsUUFBUSxDQUFDOEMsZ0JBQVQsQ0FBMEIsNEJBQTFCLENBQWQ7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYixLQUFLLENBQUNMLE1BQTFCLEVBQWtDa0IsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQ2IsV0FBSyxDQUFDYSxDQUFELENBQUwsQ0FBU0MsS0FBVCxHQUFpQkwsWUFBakI7QUFDQVQsV0FBSyxDQUFDYSxDQUFELENBQUwsQ0FBU0UsTUFBVCxHQUFrQk4sWUFBWSxHQUFHLEtBQWpDO0FBQ0Q7QUFDRixHQVJEOztBQVdBLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLGtCQUFLekIsSUFBSSxDQUFDZ0MsS0FBVixDQURGLEVBRUU7QUFBSyxPQUFHLEVBQUVSO0FBQVYsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixlQURGLEVBSUUsTUFBQyxrREFBRDtBQUFLLFVBQU0sRUFBRXBCO0FBQWIsSUFKRixDQURGLEVBT0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLG1CQUFNa0IsT0FBTixDQURGLENBUEYsQ0FIRixDQURGO0FBa0JELENBL0VEOztHQUFNdkIsSzs7QUFpRlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBZHYgPSAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZSgnLS0tJylcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFthZHNyYywgc2V0QWRzcmNdID0gdXNlU3RhdGUobnVsbClcclxuICAvLyBjb25zdCBbY29udGVudFdpZHRoLCBzZXRDb250ZW50V2lkdGhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgbGV0IGxvYWRlZCA9IGZhbHNlO1xyXG4gIGxldCBpc0ludGVyc2VjdGluZyA9IGZhbHNlO1xyXG4gIC8vIGxldCBiYW5uZXIgPSAnJ1xyXG5cclxuICAvLyBpZiAoY29udGV4dC5wYXJhbXMpIHtcclxuICAvLyAgIGJhbm5lciA9IGNvbnRleHQucGFyYW1zLnNpemU7XHJcbiAgLy8gfVxyXG5cclxuICAvKlxyXG4gIDMwMHgyNTAgLSBNZWRpdW0gUmVjdGFuZ2xlIC0gNDAlXHJcbiAgNzI4eDkwIC0gTGVhZGVyYm9hcmQgLSAyNSVcclxuICAxNjB4NjAwIC0gV2lkZSBTa3lzY3JhcGVyIC0gMTIlXHJcbiAgMzAweDYwMCAtIEhhbGYgUGFnZSAtIDUlXHJcbiAgOTcweDI1MCAtIEJpbGxib2FyZCAtIDElXHJcbiAgMTIweDYwMCAtIFNreXNjcmFwZXJcclxuXHJcbiAgMzIweDUwIC0gTW9iaWxlIExlYWRlcmJvYXJkIC0gMTIlXHJcbiAgMzIweDMyMCAtIE1vYmlsZSBGdWxsIFBhZ2UgRmxleCAtIDElXHJcbiAgMzIweDEwMCAtIExhcmdlIE1vYmlsZVxyXG4gICovXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHNldElkKCdhZHYnICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSlcclxuICAgIH1cclxuICAgIGlmICghZmlyc3QgJiYgaWQpIHtcclxuICAgICAgc2V0Rmlyc3QodHJ1ZSlcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICBpZiAoZGl2KSB7XHJcbiAgICAgICAgLy8gc2V0Q29udGVudFdpZHRoKGRpdi5vZmZzZXRXaWR0aClcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXJDaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWxvYWRlZCAmJiBlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBpc0ludGVyc2VjdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgb2JzZXJ2ZXJDaGlsZC51bm9ic2VydmUoZW50cmllc1swXS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgIHByZUxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRpdik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBzYWZhcmlJc3N1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2FmYXJpSXNzdWUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICBpc0ludGVyc2VjdGluZyA9IHRydWU7XHJcbiAgICAgIHByZUxvYWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qXHJcbiAzMDB4MjUwIC0gTWVkaXVtIFJlY3RhbmdsZSAtIDQwJVxyXG4gNzI4eDkwIC0gTGVhZGVyYm9hcmQgLSAyNSVcclxuIDE2MHg2MDAgLSBXaWRlIFNreXNjcmFwZXIgLSAxMiVcclxuIDMwMHg2MDAgLSBIYWxmIFBhZ2UgLSA1JVxyXG4gMTIweDYwMCAtIFNreXNjcmFwZXJcclxuXHJcbiAgOTcweDI1MCAtIEJpbGxib2FyZCAtIDElXHJcbiAqL1xyXG5cclxuICBjb25zdCBwcmVMb2FkID0gKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZygnUmVhZHkgdG8gbG9hZC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4nLCBpZClcclxuICAgIGlmIChpc0ludGVyc2VjdGluZykge1xyXG5cclxuICAgICAgc2V0TXNnKCdMb2FkZWQnKVxyXG4gICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcclxuICAgICAgbGV0IGJiID0gWydhJywgJ2InLCAnYycsICdkJ11cclxuICAgICAgc2V0QWRzcmMoJ2h0dHBzOi8vZGF0YS5qb29ybmFsby5jb20vYWRzLycgKyBjb250ZXh0LnBhcmFtcy5zaXplICsgYmJbbnVtXSArICcuanBnJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWR2IGV1cmVrYScgaWQ9e2lkfT5cclxuICAgICAgPGltZyBzcmM9e2Fkc3JjfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbnsvKiBBZCB7YmFubmVyfSAoe2NvbnRlbnRXaWR0aH0pOiB7bXNnfSAqLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHY7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcnNlciwgeyBkb21Ub1JlYWN0LCBodG1sVG9ET00gfSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XHJcbmltcG9ydCBBZHYgZnJvbSAnLi9ibG9jay1hZHYnXHJcblxyXG5jb25zdCBuZXdzMSA9ICh7IGRhdGEgfSkgPT4ge1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlSW1hZ2VXaWR0aHMoKVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUltYWdlV2lkdGhzKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgQWRQYXJhbXMgPSB7XHJcbiAgICBzaXplOiAnMzIweDUwJ1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgbW9kVGV4dCA9IFBhcnNlcihkYXRhLnRleHQsIHtcclxuICAvLyAgIHJlcGxhY2U6IChkb21Ob2RlKSA9PiB7XHJcbiAgLy8gICAgIGlmIChkb21Ob2RlLm5hbWUgPT09ICdlbWJlZCcpIHtcclxuICAvLyAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJlbWJlZFwiPntQYXJzZXIoZGF0YS5tZWRpYVtkb21Ob2RlLmF0dHJpYnMuaWQgLSAxXS5lbWJlZCl9PC9kaXY+O1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIGlmIChkb21Ob2RlLm5hbWUgPT09ICdpbWFnZScpIHtcclxuICAvLyAgICAgICByZXR1cm4gPGltZyBzcmM9e1BhcnNlcignaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9uZXdzLzQvYy8nICsgZGF0YS5pbWFnZXNbZG9tTm9kZS5hdHRyaWJzLmlkIC0gMV0udXJsKX0gLz5cclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH0pO1xyXG5cclxuICBsZXQgdG1wID0gdW5lc2NhcGUoZGF0YS50ZXh0KTtcclxuICBsZXQgZmluZCA9IHRtcC5zcGxpdCgnPGVtYmVkIGlkPVwiJyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSBmaW5kLmxlbmd0aCAtIDE7IGktLTspIHtcclxuICAgIGxldCBtZWRpYU51bSA9IHBhcnNlSW50KGZpbmRbaSArIDFdLmNoYXJBdCgwKSk7XHJcbiAgICBpZiAoZGF0YS5tZWRpYVttZWRpYU51bSAtIDFdKSB7XHJcbiAgICAgIGZpbmRbaSArIDFdID0gJzxkaXYgY2xhc3M9XCJlbWJlZFwiPicgKyBkYXRhLm1lZGlhW21lZGlhTnVtIC0gMV0uZW1iZWQgKyAnPC9kaXY+JyArIGZpbmRbaSArIDFdLnN1YnN0cmluZyg1KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbmRbaSArIDFdID0gZmluZFtpICsgMV0uc3Vic3RyaW5nKDUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG1wID0gZmluZC5qb2luKCcnKTtcclxuICBmaW5kID0gdG1wLnNwbGl0KCc8aW1hZ2UgaWQ9XCInKTtcclxuICBmb3IgKGxldCBpID0gZmluZC5sZW5ndGggLSAxOyBpLS07KSB7XHJcbiAgICBsZXQgaW1hZ2VOdW0gPSBwYXJzZUludChmaW5kW2kgKyAxXS5jaGFyQXQoMCkpO1xyXG4gICAgaWYgKGRhdGEuaW1hZ2VzW2ltYWdlTnVtIC0gMV0pIHtcclxuICAgICAgZmluZFtpICsgMV0gPSAnPGltZyBzcmM9XCJodHRwczovL2RhdGEuam9vcm5hbG8uY29tL25ld3MvNC9jLycgKyBkYXRhLmltYWdlc1tpbWFnZU51bSAtIDFdLnVybCArICdcIiAvPicgKyBmaW5kW2kgKyAxXS5zdWJzdHJpbmcoNSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaW5kW2kgKyAxXSA9IGZpbmRbaSArIDFdLnN1YnN0cmluZyg1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG1vZFRleHQgPSBQYXJzZXIoZmluZC5qb2luKCcnKSk7XHJcblxyXG4gIGNvbnN0IG1haW5JbWdVcmwgPSAnaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9uZXdzLzQvYy8nICsgZGF0YS5pbWFnZXNbMF0udXJsO1xyXG5cclxuXHJcbiAgY29uc3QgdXBkYXRlSW1hZ2VXaWR0aHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld3NDb250ZW50IGRpdlwiKS5vZmZzZXRXaWR0aDtcclxuICAgIC8vY29uc29sZS5sb2coY29udGVudFdpZHRoKTtcclxuICAgIGNvbnN0IGVtYmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld3NDb250ZW50IC5lbWJlZCBpZnJhbWUnKVxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBlbWJlZC5sZW5ndGg7IHgrKykge1xyXG4gICAgICBlbWJlZFt4XS53aWR0aCA9IGNvbnRlbnRXaWR0aDtcclxuICAgICAgZW1iZWRbeF0uaGVpZ2h0ID0gY29udGVudFdpZHRoICogLjU2MjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c1wiPlxyXG4gICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgPGltZyBzcmM9e21haW5JbWdVcmx9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICBEZXRhaWxzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxBZHYgcGFyYW1zPXtBZFBhcmFtc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NDb250ZW50IGNvbC0xMlwiPlxyXG4gICAgICAgICAgPGRpdj57bW9kVGV4dH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3czE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=