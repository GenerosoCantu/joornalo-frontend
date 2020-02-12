webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/html-dom-parser/lib/constants.js":
false,

/***/ "./node_modules/html-dom-parser/lib/domparser.js":
false,

/***/ "./node_modules/html-dom-parser/lib/html-to-dom-client.js":
false,

/***/ "./node_modules/html-dom-parser/lib/utilities.js":
false,

/***/ "./node_modules/html-react-parser/index.js":
false,

/***/ "./node_modules/html-react-parser/lib/attributes-to-props.js":
false,

/***/ "./node_modules/html-react-parser/lib/dom-to-react.js":
false,

/***/ "./node_modules/html-react-parser/lib/utilities.js":
false,

/***/ "./node_modules/inline-style-parser/index.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/react-property/index.js":
false,

/***/ "./node_modules/react-property/lib/HTMLDOMPropertyConfig.js":
false,

/***/ "./node_modules/react-property/lib/SVGDOMPropertyConfig.js":
false,

/***/ "./node_modules/react-property/lib/injection.js":
false,

/***/ "./node_modules/style-to-object/index.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./pages/store.js");
/* harmony import */ var _services_configService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/configService */ "./services/configService.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/header.css */ "./styles/header.css");
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_news_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/news.css */ "./styles/news.css");
/* harmony import */ var _styles_news_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_news_css__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



 // import { getConfig } from '../store/actions/newsActions';






var _Joornalo = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__["default"])(_store__WEBPACK_IMPORTED_MODULE_11__["default"])(
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_Joornalo, _App);

  function _Joornalo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _Joornalo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_Joornalo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_Joornalo, [{
    key: "render",
    // componentDidMount() {
    //   const jssStyles = document.querySelector('#jss-server-side')
    //   if (jssStyles && jssStyles.parentNode) {
    //     jssStyles.parentNode.removeChild(jssStyles)
    //   }
    // }
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return __jsx("div", {
        className: "agent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var Component, ctx, eureka, agent;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Component = _ref.Component, ctx = _ref.ctx;
              eureka = 'Eureka'; //console.log('+++++++++++++++++++2');
              //await store().dispatch(getConfig());
              //console.log(store().getState());

              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_configService__WEBPACK_IMPORTED_MODULE_12__["initAgent"])(ctx.req));

            case 4:
              agent = _context.sent;

              if (!Component.getInitialProps) {
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx, eureka));

            case 8:
              _context.t0 = _context.sent;
              _context.next = 12;
              break;

            case 11:
              _context.t0 = {};

            case 12:
              _context.t1 = _context.t0;
              return _context.abrupt("return", {
                pageProps: _context.t1
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return _Joornalo;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a));

/* harmony default export */ __webpack_exports__["default"] = (_Joornalo);

/***/ }),

/***/ "./store/actions/newsActions.js":
false

})
//# sourceMappingURL=_app.js.5c10ebdc1e130907b107.hot-update.js.map