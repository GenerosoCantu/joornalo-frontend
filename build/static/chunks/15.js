(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./components/block-adv.js":
/*!*********************************!*\
  !*** ./components/block-adv.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Adv = function Adv(context) {
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

{
  /* Ad {banner} ({contentWidth}): {msg} */
}
/* harmony default export */ __webpack_exports__["default"] = (Adv);

/***/ })

}]);
//# sourceMappingURL=15.js.map