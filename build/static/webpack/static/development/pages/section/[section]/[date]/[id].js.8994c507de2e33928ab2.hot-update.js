webpackHotUpdate("static\\development\\pages\\section\\[section]\\[date]\\[id].js",{

/***/ "./pages/section/[section]/[date]/[id].js":
/*!************************************************!*\
  !*** ./pages/section/[section]/[date]/[id].js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redirect */ "./node_modules/next-redirect/index.js");
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Template_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Template.js */ "./components/Template.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actions_newsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store/actions/newsActions */ "./store/actions/newsActions.js");

var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\pages\\section\\[section]\\[date]\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import { useRouter } from 'next/router'







 // url ===> http://localhost:3000/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977

var News = function News(_ref) {
  var id = _ref.id,
      uuid = _ref.uuid,
      news = _ref.news,
      template = _ref.template,
      notFound = _ref.notFound;

  var getTitle = function getTitle(news) {
    return news ? news.title : '';
  };

  if (notFound) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_7___default.a, {
      statusCode: "404",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_Template_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    grid: template,
    data: news,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c9ZZ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Bad link"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world-europe/2020-01-11/harry-meghan-drop-royal-duties-4c50e545-539e-4893-b505-1edc2de3c988",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Link: Megan & Harry"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c999",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Link: Iran Nuclear Deal")))));
};

News.getInitialProps = function _callee(context, eureka) {
  var store, _context$query, section, date, id, uuid, url, notFound, error;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = context.store;
          _context$query = context.query, section = _context$query.section, date = _context$query.date, id = _context$query.id;
          uuid = id.slice(-36);
          url = "/section/".concat(section, "/").concat(date, "/").concat(id);
          notFound = false;
          console.log(eureka);
          _context.prev = 6;

          if (true) {
            _context.next = 10;
            break;
          }

          _context.next = 10;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(store.dispatch(Object(_store_actions_newsActions__WEBPACK_IMPORTED_MODULE_8__["getConfig"])(context.req)));

        case 10:
          _context.next = 12;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(store.dispatch(Object(_store_actions_newsActions__WEBPACK_IMPORTED_MODULE_8__["getNews"])(section, date, uuid, url, context.req)));

        case 12:
          error = store.getState().news.error;

          if (!(error && error.indexOf('Redirect: ') == 0)) {
            _context.next = 15;
            break;
          }

          return _context.abrupt("return", next_redirect__WEBPACK_IMPORTED_MODULE_5___default()(context, error.slice(10), 308));

        case 15:
          if (error == 'NotFound') {
            notFound = true;
          }

          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](6);
          console.log(_context.t0);

        case 21:
          return _context.abrupt("return", {
            id: id,
            uuid: uuid,
            url: url,
            notFound: notFound
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 18]]);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    news: state.news.news,
    template: state.news.template,
    loading: state.news.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getNews: _store_actions_newsActions__WEBPACK_IMPORTED_MODULE_8__["getNews"]
})(News));

/***/ })

})
//# sourceMappingURL=[id].js.8994c507de2e33928ab2.hot-update.js.map