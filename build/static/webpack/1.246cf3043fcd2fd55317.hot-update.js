webpackHotUpdate(1,{

/***/ "./components/block-news-mobile1.js":
/*!******************************************!*\
  !*** ./components/block-news-mobile1.js ***!
  \******************************************/
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
/* harmony import */ var _block_adv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-adv */ "./components/block-adv.js");

var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\block-news-mobile1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var news1 = function news1(_ref) {
  var data = _ref.data;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
    var contentWidth = document.querySelector(".newsContent div").offsetWidth; //console.log(contentWidth);

    var embed = document.querySelectorAll('.newsContent .embed iframe');

    for (var x = 0; x < embed.length; x++) {
      embed[x].width = contentWidth;
      embed[x].height = contentWidth * .5625;
    }
  };

  return __jsx("div", {
    className: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, data.title), __jsx("img", {
    src: mainImgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Details"), __jsx(_block_adv__WEBPACK_IMPORTED_MODULE_3__["default"], {
    params: AdParams,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx("div", {
    className: "newsContent col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, modText))));
};

/* harmony default export */ __webpack_exports__["default"] = (news1);

/***/ })

})
//# sourceMappingURL=1.246cf3043fcd2fd55317.hot-update.js.map