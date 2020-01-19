webpackHotUpdate("static\\development\\pages\\section\\[section]\\[date]\\[id].js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\news1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var news1 = function news1(_ref) {
  var data = _ref.data;
  // const modText = Parser(data.text, {
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

    find[i + 1] = '<div className="embed">' + data.media[mediaNum - 1].embed + '</div>' + find[i + 1].substring(5);
  }

  tmp = find.join();
  find = tmp.split('<image id="');

  for (var _i = find.length - 1; _i--;) {
    var imageNum = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(find[_i + 1].charAt(0));

    console.log('-------------------------------------1: ', imageNum);
    console.log(find[_i + 1]);
    console.log('-------------------------------------2'); // console.log(data.media[imageNum - 1]);

    find[_i + 1] = '<img src="https://data.joornalo.com/news/4/c/' + data.images[imageNum - 1].url + ' />' + find[_i + 1].substring(5);
    console.log(find[_i + 1]);
  } //<div className="embed">{Parser(data.media[domNode.attribs.id - 1].embed)}</div>
  // const modText = Parser(data.text, {
  //   replace: (domNode) => {
  //     if (domNode.name === 'image') {
  //       return <img src={('https://data.joornalo.com/news/4/c/' + data.images[domNode.attribs.id - 1].url)} />
  //     }
  //   }
  // });
  //const modText = Parser(data.text);


  var modText = html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(find.join());
  return __jsx("div", {
    className: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, data.title), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, modText));
};

/* harmony default export */ __webpack_exports__["default"] = (news1);

/***/ })

})
//# sourceMappingURL=[id].js.1a0359f5dd76dcb69fc8.hot-update.js.map