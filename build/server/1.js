exports.ids = [1];
exports.modules = {

/***/ "./components/adv.js":
/*!***************************!*\
  !*** ./components/adv.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\adv.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Adv = context => {
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('---');
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: first,
    1: setFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: adsrc,
    1: setAdsrc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); // const [contentWidth, setContentWidth] = useState(0)

  let loaded = false;
  let isIntersecting = false; // let banner = ''
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!id) {
      setId('adv' + Math.round(Math.random() * 100000));
    }

    if (!first && id) {
      setFirst(true);
      const div = document.getElementById(id);

      if (div) {
        // setContentWidth(div.offsetWidth)
        try {
          let observer = new IntersectionObserver((entries, observerChild) => {
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

  const safariIssue = () => {
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


  const preLoad = () => {
    //console.log('Ready to load...............................', id)
    if (isIntersecting) {
      setMsg('Loaded');
      let num = Math.floor(Math.random() * 4);
      let bb = ['a', 'b', 'c', 'd'];
      setAdsrc('https://data.joornalo.com/ads/' + context.params.size + bb[num] + '.jpg');
    }
  };

  return __jsx("div", {
    className: "adv eureka",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("img", {
    src: adsrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }));
};

{
  /* Ad {banner} ({contentWidth}): {msg} */
}
/* harmony default export */ __webpack_exports__["default"] = (Adv);

/***/ }),

/***/ "./components/news1.js":
/*!*****************************!*\
  !*** ./components/news1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv */ "./components/adv.js");

var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\news1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const news1 = ({
  data
}) => {
  const AdParams = {
    size: '160x600'
  }; // componentDidMount(() => {
  //   console.log('componentDidMount')
  // });

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('resize', updateImageWidths);
    updateImageWidths();
  }, []);
  let tmp = unescape(data.text);
  let find;
  find = tmp.split('<embed id="');

  for (let i = find.length - 1; i--;) {
    let mediaNum = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(find[i + 1].charAt(0));

    if (data.media[mediaNum - 1]) {
      find[i + 1] = '<div class="embed">' + data.media[mediaNum - 1].embed + '</div>' + find[i + 1].substring(5);
    } else {
      find[i + 1] = find[i + 1].substring(5);
    }
  }

  tmp = find.join('');
  find = tmp.split('<image id="');

  for (let i = find.length - 1; i--;) {
    let imageNum = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(find[i + 1].charAt(0));

    if (data.images[imageNum - 1]) {
      find[i + 1] = '<img src="https://data.joornalo.com/news/4/c/' + data.images[imageNum - 1].url + '" />' + find[i + 1].substring(5);
    } else {
      find[i + 1] = find[i + 1].substring(5);
    }
  }

  let modText = html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(find.join(''));
  const mainImgUrl = 'https://data.joornalo.com/news/4/c/' + data.images[0].url;

  const updateImageWidths = () => {
    try {
      //console.log('updateImageWidths********')
      const contentWidth = document.querySelector(".newsContent div").offsetWidth; //console.log(contentWidth);

      let embed = document.querySelectorAll('.newsContent .embed iframe');

      for (let x = 0; x < embed.length; x++) {
        embed[x].width = contentWidth; //embed[x].height = contentWidth * .5625;
      }

      embed = document.querySelectorAll('.newsContent .embed .twitter-tweet'); //console.log(embed)

      for (let x = 0; x < embed.length; x++) {
        embed[x].style["width"] = "100%";
      }
    } catch (er) {
      window.removeEventListener('resize', updateImageWidths, false);
    }
  };

  return __jsx("div", {
    className: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, data.title), __jsx("img", {
    src: mainImgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx("div", {
    className: "row row-m-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-220 col-m-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Details"), __jsx(_adv__WEBPACK_IMPORTED_MODULE_3__["default"], {
    params: AdParams,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  })), __jsx("div", {
    className: "newsContent col-full-220 col-m-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("div", {
    suppressHydrationWarning: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, modText))));
};

/* harmony default export */ __webpack_exports__["default"] = (news1);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ })

};;
//# sourceMappingURL=1.js.map