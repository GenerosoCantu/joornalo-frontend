webpackHotUpdate("static\\development\\pages\\news\\[news].js",{

/***/ "./node_modules/next-redirect/index.js":
/*!*********************************************!*\
  !*** ./node_modules/next-redirect/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Export `redirect`
 */

module.exports = redirect

/**
 * Redirect
 */

function redirect (ctx, path) {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: path })
    ctx.res.end()
  } else {
    document.location.pathname = path
  }
}

/***/ }),

/***/ "./pages/news/[news].js":
/*!******************************!*\
  !*** ./pages/news/[news].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redirect */ "./node_modules/next-redirect/index.js");
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\test\\pages\\news\\[news].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Post = function Post(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  console.log('-------------------------');
  console.log(props); //console.log(router);
  // if (props.details !== '2020-01-11-world-middleeast-iraq-iran-us-troops-') {
  //   console.log(`Bad URL`);
  //   router.push('/news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977');
  // }
  // console.log(data);

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.uuid));
};

Post.getInitialProps = function _callee(context) {
  var news, uuid, details;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          news = context.query.news;
          uuid = news.slice(-36);
          details = news.slice(0, news.length - 36);

          if (!(details !== '2020-01-11-world-middleeast-iraq-iran-us-troops-')) {
            _context.next = 6;
            break;
          }

          console.log("Bad URL");
          return _context.abrupt("return", next_redirect__WEBPACK_IMPORTED_MODULE_5___default()(context, '/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977'));

        case 6:
          console.log("uuid: ".concat(uuid));
          console.log("details: ".concat(details));
          return _context.abrupt("return", {
            uuid: uuid,
            details: details
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[news].js.1e117a7cb9390c692f5c.hot-update.js.map