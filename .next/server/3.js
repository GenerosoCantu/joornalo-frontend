exports.ids = [3];
exports.modules = {

/***/ "./components/news1.js":
/*!*****************************!*\
  !*** ./components/news1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\news1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const news1 = ({
  data
}) => {
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
  let tmp = unescape(data.text);
  let find = tmp.split('<embed id="');

  for (let i = find.length - 1; i--;) {
    let mediaNum = parseInt(find[i + 1].charAt(0));

    if (data.media[mediaNum - 1]) {
      find[i + 1] = '<div class="embed">' + data.media[mediaNum - 1].embed + '</div>' + find[i + 1].substring(5);
    } else {
      find[i + 1] = find[i + 1].substring(5);
    }
  }

  tmp = find.join();
  find = tmp.split('<image id="');

  for (let i = find.length - 1; i--;) {
    let imageNum = parseInt(find[i + 1].charAt(0));

    if (data.images[imageNum - 1]) {
      find[i + 1] = '<img src="https://data.joornalo.com/news/4/c/' + data.images[imageNum - 1].url + '" />' + find[i + 1].substring(5);
    } else {
      find[i + 1] = find[i + 1].substring(5);
    }
  }

  const modText = html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(find.join());
  return __jsx("div", {
    className: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, data.title), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, modText));
};

/* harmony default export */ __webpack_exports__["default"] = (news1);

/***/ })

};;
//# sourceMappingURL=3.js.map