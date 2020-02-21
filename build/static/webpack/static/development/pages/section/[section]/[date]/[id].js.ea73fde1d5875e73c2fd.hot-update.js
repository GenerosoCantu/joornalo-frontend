webpackHotUpdate("static\\development\\pages\\section\\[section]\\[date]\\[id].js",{

/***/ "./store/actions/newsActions.js":
/*!**************************************!*\
  !*** ./store/actions/newsActions.js ***!
  \**************************************/
/*! exports provided: getOtherNews, getNews, getFront, setLoading, getConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOtherNews", function() { return getOtherNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFront", function() { return getFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/store */ "./pages/store.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var _services_configService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/configService */ "./services/configService.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_8__);










var getTemplate = function getTemplate(req, template, agent) {
  var tmpl, templateUrl, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function getTemplate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          setLoading();
          tmpl = agent + '-' + template;
          templateUrl = "https://data.joornalo.com/templates/news/".concat(tmpl, ".json");
          console.log(templateUrl);
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(templateUrl));

        case 7:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log('***********Template Error');
          dispatch({
            type: _types__WEBPACK_IMPORTED_MODULE_5__["NEWS_ERROR"],
            payload: _context.t0.statusText
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

var getOtherNews = function getOtherNews(section) {
  return function _callee(dispatch, getState) {
    var moreUrl, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setLoading();
            moreUrl = "https://data.joornalo.com/news/".concat(section, "-more-news.json");
            _context2.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(moreUrl));

          case 5:
            res = _context2.sent;
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["GET_OTHERNEWS"],
              payload: {
                topNews: res.data.topNews,
                moreNews: res.data.moreNews
              }
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["NEWS_ERROR"],
              payload: 'NotFound'
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};
var getNews = function getNews(section, date, uuid, url, req) {
  return function _callee2(dispatch, getState) {
    var path, res, agent, tmpl, template;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setLoading();
            path = "https://data.joornalo.com/news/".concat(uuid.charAt(0), "/").concat(uuid.charAt(1), "/").concat(uuid, ".json");
            _context3.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(path));

          case 5:
            res = _context3.sent;

            if (url !== res.data['url']) {
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["NEWS_ERROR"],
                payload: "Redirect: ".concat(res.data['url'])
              });
            }

            agent = getState().news.agent;
            tmpl = agent + '-' + res.data['template'];
            template = getState().news.templates[tmpl];

            if (template) {
              _context3.next = 15;
              break;
            }

            _context3.next = 13;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(getTemplate(req, res.data['template'], getState().news.agent));

          case 13:
            template = _context3.sent;
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["ADD_TEMPLATE"],
              payload: {
                template: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, tmpl, template)
              }
            });

          case 15:
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["GET_NEWS"],
              payload: {
                news: res.data,
                templateName: 'template-' + res.data['template'],
                template: template
              }
            });
            _context3.next = 21;
            break;

          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](0);
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["NEWS_ERROR"],
              payload: 'NotFound'
            });

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 18]]);
  };
};
var getFront = function getFront(section, req) {
  return function _callee3(dispatch, getState) {
    var path, res, agent, tmpl, template;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setLoading();
            path = "https://data.joornalo.com/sections/latest/".concat(section, ".json");
            _context4.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(path));

          case 5:
            res = _context4.sent;
            // if (url !== res.data['url']) {
            //   dispatch({
            //     type: FRONT_ERROR,
            //     payload: `Redirect: ${res.data['url']}`
            //   });
            // }
            agent = getState().news.agent;
            tmpl = agent + '-' + res.data['template'];
            template = getState().news.templates[tmpl];

            if (template) {
              _context4.next = 14;
              break;
            }

            _context4.next = 12;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(getTemplate(req, res.data['template'], getState().news.agent));

          case 12:
            template = _context4.sent;
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["ADD_TEMPLATE"],
              payload: {
                template: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, tmpl, template)
              }
            });

          case 14:
            //console.log(res.data)
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["GET_FRONT"],
              payload: {
                front: res.data,
                templateName: 'template-' + res.data['template'],
                template: template
              }
            });
            _context4.next = 21;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](0);
            console.log('FRONT_ERROR--------------------');
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["FRONT_ERROR"],
              payload: 'NotFound'
            });

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 17]]);
  };
}; // Set loading to true

var setLoading = function setLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_5__["SET_LOADING"]
  };
};
var getConfig = function getConfig(req) {
  return function _callee4(dispatch) {
    var configUrl, templatesUrl, _ref, _ref2, config, templates, agent;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function _callee4$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            configUrl = "https://data.joornalo.com/config.json";
            templatesUrl = "https://data.joornalo.com/templates/news/templates.json";
            _context5.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all([axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(configUrl), axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(templatesUrl), Object(_services_configService__WEBPACK_IMPORTED_MODULE_6__["initAgent"])(req)]));

          case 5:
            _ref = _context5.sent;
            _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 3);
            config = _ref2[0];
            templates = _ref2[1];
            agent = _ref2[2];
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["GET_CONFIG"],
              payload: {
                config: config.data,
                templates: templates.data,
                agent: agent
              }
            });
            _context5.next = 15;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };
};

/***/ })

})
//# sourceMappingURL=[id].js.ea73fde1d5875e73c2fd.hot-update.js.map