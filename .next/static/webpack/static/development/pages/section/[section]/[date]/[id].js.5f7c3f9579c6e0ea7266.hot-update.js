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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redirect */ "./node_modules/next-redirect/index.js");
/* harmony import */ var next_redirect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redirect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Template_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Template.js */ "./components/Template.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_config_configContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../context/config/configContext */ "./context/config/configContext.js");

var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\pages\\section\\[section]\\[date]\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import { useRouter } from 'next/router'







 // url ===> http://localhost:3000/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977

var News = function News(props) {
  var configContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_config_configContext__WEBPACK_IMPORTED_MODULE_8__["default"]);
  var agent = configContext.agent,
      setAgent = configContext.setAgent;

  if (!agent && props.agent) {
    console.log('Set Agent  ************************');
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      setAgent(props.agent); // eslint-disable-next-line
    }, []);
  }

  if (props.notFound) {
    // const router = useRouter();
    // router.replace('/notfound');
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_7___default.a, {
      statusCode: "404",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "News story"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "uuid:: ", props.uuid), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "title:: ", props.data.title), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c9ZZ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Bad link"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Good link"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world-europe/2020-01-11/harry-meghan-drop-royal-duties-4c50e545-539e-4893-b505-1edc2de3c988",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Good link"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: "/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c999",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Good link")))), __jsx(_components_Template_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    grid: props.template,
    data: props.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
};

News.getInitialProps = function _callee(context) {
  var _context$query, section, date, id, uuid, url, path, initialAgent, res, data, agent, tmpl, templateUrl, res2, template;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context$query = context.query, section = _context$query.section, date = _context$query.date, id = _context$query.id;
          uuid = id.slice(-36);
          url = "/section/".concat(section, "/").concat(date, "/").concat(id);
          path = "https://data.joornalo.com/news/".concat(uuid.charAt(0), "/").concat(uuid.charAt(1), "/").concat(uuid, ".json");
          console.log(uuid);

          initialAgent = function initialAgent() {
            var userAgent;

            if (true) {
              userAgent = navigator.userAgent;
            } else {}

            var mobilex = userAgent.match(/(Mobile)/g);
            var android = userAgent.match(/(Android)/g);
            var iPad = userAgent.match(/(iPad)/g);
            var mobile = Boolean(mobilex) && !iPad;
            var tablet = !mobilex && Boolean(android) || Boolean(iPad);
            var desktop = !mobile && !tablet;
            return desktop || tablet ? 'desktop' : 'mobile';
          };

          _context.prev = 6;
          _context.next = 9;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(path));

        case 9:
          res = _context.sent;
          _context.next = 12;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 12:
          data = _context.sent;

          if (!(url !== data['url'])) {
            _context.next = 16;
            break;
          }

          console.log("Bad URL...redirected");
          return _context.abrupt("return", next_redirect__WEBPACK_IMPORTED_MODULE_5___default()(context, data['url'], 308));

        case 16:
          agent = initialAgent();
          tmpl = agent + '-' + data['template'];
          templateUrl = "https://data.joornalo.com/templates/news/".concat(tmpl, ".json");
          _context.next = 21;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(templateUrl));

        case 21:
          res2 = _context.sent;
          _context.next = 24;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res2.json());

        case 24:
          template = _context.sent;
          return _context.abrupt("return", {
            uuid: uuid,
            data: data,
            agent: agent,
            template: template
          });

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](6);
          console.log("Page not found");
          console.log(_context.t0);
          return _context.abrupt("return", next_redirect__WEBPACK_IMPORTED_MODULE_5___default()(context, '/notfound', 302));

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 28]]);
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=[id].js.5f7c3f9579c6e0ea7266.hot-update.js.map