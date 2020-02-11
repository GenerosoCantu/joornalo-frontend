webpackHotUpdate("static\\development\\pages\\section\\[section]\\[date]\\[id].js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
false,

/***/ "./node_modules/core-js/library/fn/parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
false,

/***/ "./store/actions/newsActions.js":
/*!**************************************!*\
  !*** ./store/actions/newsActions.js ***!
  \**************************************/
/*! exports provided: getOtherNews, getNews, setLoading, getConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOtherNews", function() { return getOtherNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
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
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(templateUrl));

        case 6:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log('***********Template Error');
          dispatch({
            type: _types__WEBPACK_IMPORTED_MODULE_5__["NEWS_ERROR"],
            payload: _context.t0.statusText
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
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
            // let tmp = unescape(res.data.text);
            // let find = tmp.split('<embed id="');
            // for (let i = find.length - 1; i--;) {
            //   let mediaNum = parseInt(find[i + 1].charAt(0));
            //   if (res.data.media[mediaNum - 1]) {
            //     find[i + 1] = '<div class="embed">' + res.data.media[mediaNum - 1].embed + '</div>' + find[i + 1].substring(5);
            //   } else {
            //     find[i + 1] = find[i + 1].substring(5);
            //   }
            // }
            // tmp = find.join('');
            // find = tmp.split('<image id="');
            // for (let i = find.length - 1; i--;) {
            //   let imageNum = parseInt(find[i + 1].charAt(0));
            //   if (res.data.images[imageNum - 1]) {
            //     find[i + 1] = '<img src="https://data.joornalo.com/news/4/c/' + res.data.images[imageNum - 1].url + '" />' + find[i + 1].substring(5);
            //   } else {
            //     find[i + 1] = find[i + 1].substring(5);
            //   }
            // }
            // res.data.modText = Parser(find.join(''));
            // res.data.mainImgUrl = 'https://data.joornalo.com/news/4/c/' + res.data.images[0].url;
            //console.log(data);
            dispatch({
              type: _types__WEBPACK_IMPORTED_MODULE_5__["GET_NEWS"],
              payload: {
                news: res.data,
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
}; // Set loading to true

var setLoading = function setLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_5__["SET_LOADING"]
  };
};
var getConfig = function getConfig(req) {
  return function _callee3(dispatch) {
    var configUrl, templatesUrl, _ref, _ref2, config, templates, agent;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            configUrl = "https://data.joornalo.com/config.json";
            templatesUrl = "https://data.joornalo.com/templates/news/templates.json";
            _context4.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all([axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(configUrl), axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(templatesUrl), Object(_services_configService__WEBPACK_IMPORTED_MODULE_6__["initAgent"])(req)]));

          case 5:
            _ref = _context4.sent;
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
            _context4.next = 15;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };
};

/***/ })

})
//# sourceMappingURL=[id].js.afc103060a38b29de0e2.hot-update.js.map