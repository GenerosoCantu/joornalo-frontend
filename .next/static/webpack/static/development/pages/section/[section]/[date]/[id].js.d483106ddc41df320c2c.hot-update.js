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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redirect */ "./node_modules/next-redirect/index.js");
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/components.js */ "./components/components.js");

var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\test\\pages\\section\\[section]\\[date]\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 // import { Responsive, WidthProvider } from "react-grid-layout";
// url ===> http://localhost:3000/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977

var Template = function Template(_ref) {
  var grid = _ref.grid,
      data = _ref.data;
  return grid.rows.map(function (row, index) {
    return __jsx("div", {
      className: "row",
      key: "row-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, row.column.map(function (col, index) {
      return __jsx("div", {
        className: "col-".concat(col.width),
        key: "col-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(_components_components_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        block: col.block,
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }));
  });
};

var News = function News(props) {
  if (props.notFound) {
    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    router.replace('/notfound');
    return;
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "News story"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "uuid:: ", props.uuid), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "title:: ", props.data.title), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c9ZZ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Bad link"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Good link"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c988",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Good link"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c999",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Good link")))), __jsx(Template, {
    grid: props.template,
    data: props.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }));
};

News.getInitialProps = function _callee(context) {
  var _context$query, section, date, id, uuid, url, path, res, data, templateUrl, res2, template;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context$query = context.query, section = _context$query.section, date = _context$query.date, id = _context$query.id;
          uuid = id.slice(-36);
          url = "/section/".concat(section, "/").concat(date, "/").concat(id);
          path = "https://data.joornalo.com/news/".concat(uuid.charAt(0), "/").concat(uuid.charAt(1), "/").concat(uuid, ".json");
          console.log(uuid);
          _context.prev = 5;
          _context.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(path));

        case 8:
          res = _context.sent;
          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 11:
          data = _context.sent;

          if (!(url !== data['url'])) {
            _context.next = 15;
            break;
          }

          console.log("Bad URL...redirected");
          return _context.abrupt("return", next_redirect__WEBPACK_IMPORTED_MODULE_6___default()(context, data['url'], 308));

        case 15:
          templateUrl = "https://data.joornalo.com/templates/news/".concat(data['template'], ".json");
          _context.next = 18;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(templateUrl));

        case 18:
          res2 = _context.sent;
          _context.next = 21;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res2.json());

        case 21:
          template = _context.sent;
          return _context.abrupt("return", {
            uuid: uuid,
            data: data,
            template: template
          });

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](5);
          console.log("Page not found");
          return _context.abrupt("return", next_redirect__WEBPACK_IMPORTED_MODULE_6___default()(context, '/notfound', 302));

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 25]]);
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=[id].js.d483106ddc41df320c2c.hot-update.js.map