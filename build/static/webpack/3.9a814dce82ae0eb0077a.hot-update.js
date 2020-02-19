webpackHotUpdate(3,{

/***/ "./components/news2.js":
/*!*****************************!*\
  !*** ./components/news2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv */ "./components/adv.js");

var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\news2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var news2 = function news2(_ref) {
  var data = _ref.data;
  var AdParams = {
    size: '160x600'
  }; // componentDidMount(() => {
  //   console.log('componentDidMount')
  // });

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('resize', updateImageWidths);
    updateImageWidths();
  }, []);
  var tmp = unescape(data.text);
  var find;
  find = tmp.split('<embed id="');

  for (var i = find.length - 1; i--;) {
    var mediaNum = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(find[i + 1].charAt(0));

    if (data.media[mediaNum - 1]) {
      find[i + 1] = '<div class="embed">' + data.media[mediaNum - 1].embed + '</div>' + find[i + 1].substring(5);
    } else {
      find[i + 1] = find[i + 1].substring(5);
    }
  }

  tmp = find.join('');
  find = tmp.split('<image id="');

  for (var _i = find.length - 1; _i--;) {
    var imageNum = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(find[_i + 1].charAt(0));

    if (data.images[imageNum - 1]) {
      find[_i + 1] = '<img src="https://data.joornalo.com/news/4/c/' + data.images[imageNum - 1].url + '" />' + find[_i + 1].substring(5);
    } else {
      find[_i + 1] = find[_i + 1].substring(5);
    }
  }

  var modText = html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(find.join(''));
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
    className: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, data.title), __jsx("div", {
    className: "row row-m-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "col-220 col-m-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Details"), __jsx(_adv__WEBPACK_IMPORTED_MODULE_3__["default"], {
    params: AdParams,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("div", {
    className: "newsContent col-full-220 col-m-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("img", {
    src: mainImgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    suppressHydrationWarning: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, modText))));
};

/* harmony default export */ __webpack_exports__["default"] = (news2);

/***/ })

})
//# sourceMappingURL=3.9a814dce82ae0eb0077a.hot-update.js.map