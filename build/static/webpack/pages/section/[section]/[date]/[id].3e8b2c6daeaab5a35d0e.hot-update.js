webpackHotUpdate_N_E("pages/section/[section]/[date]/[id]",{

/***/ "./store/actions/newsActions.js":
/*!**************************************!*\
  !*** ./store/actions/newsActions.js ***!
  \**************************************/
/*! exports provided: getOtherNews, getNews, getFront, setLoading, getConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOtherNews", function() { return getOtherNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFront", function() { return getFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _pages_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/store */ "./pages/store.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var _services_configService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/configService */ "./services/configService.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_8__);










var getTemplate = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(req, template, agent) {
    var tmpl, templateUrl, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading();
            tmpl = agent + '-' + template;
            templateUrl = "https://data.joornalo.com/templates/news/".concat(tmpl, ".json");
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(templateUrl);

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
    }, _callee, null, [[0, 10]]);
  }));

  return function getTemplate(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var getOtherNews = function getOtherNews(section) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(dispatch, getState) {
      var moreUrl, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setLoading();
              moreUrl = "https://data.joornalo.com/news/".concat(section, "-more-news.json");
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(moreUrl);

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
      }, _callee2, null, [[0, 9]]);
    }));

    return function (_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getNews = function getNews(section, date, uuid, url, req) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(dispatch, getState) {
      var path, res, agent, tmpl, template;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setLoading();
              path = "https://data.joornalo.com/news/".concat(uuid.charAt(0), "/").concat(uuid.charAt(1), "/").concat(uuid, ".json");
              _context3.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(path);

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
              return getTemplate(req, res.data['template'], getState().news.agent);

            case 13:
              template = _context3.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["ADD_TEMPLATE"],
                payload: {
                  template: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, tmpl, template)
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
      }, _callee3, null, [[0, 18]]);
    }));

    return function (_x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var getFront = function getFront(section, req) {
  return /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(dispatch, getState) {
      var path, res, agent, tmpl, template;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setLoading();
              path = "https://data.joornalo.com/sections/latest/".concat(section, ".json");
              _context4.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(path);

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
              return getTemplate(req, res.data['template'], getState().news.agent);

            case 12:
              template = _context4.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["ADD_TEMPLATE"],
                payload: {
                  template: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, tmpl, template)
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
              _context4.next = 22;
              break;

            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](0);
              console.log('FRONT_ERROR--------------------');
              console.log(_context4.t0);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["FRONT_ERROR"],
                payload: 'NotFound'
              });

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 17]]);
    }));

    return function (_x8, _x9) {
      return _ref4.apply(this, arguments);
    };
  }();
}; // Set loading to true

var setLoading = function setLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_5__["SET_LOADING"]
  };
};
var getConfig = function getConfig(req) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(dispatch) {
      var configUrl, templatesUrl, _yield$Promise$all, _yield$Promise$all2, config, templates, agent;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              configUrl = "https://data.joornalo.com/config.json";
              templatesUrl = "https://data.joornalo.com/templates/news/templates.json";
              _context5.next = 5;
              return Promise.all([axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(configUrl), axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(templatesUrl), Object(_services_configService__WEBPACK_IMPORTED_MODULE_6__["initAgent"])(req)]);

            case 5:
              _yield$Promise$all = _context5.sent;
              _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all, 3);
              config = _yield$Promise$all2[0];
              templates = _yield$Promise$all2[1];
              agent = _yield$Promise$all2[2];
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
      }, _callee5, null, [[0, 13]]);
    }));

    return function (_x10) {
      return _ref5.apply(this, arguments);
    };
  }();
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9uZXdzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRUZW1wbGF0ZSIsInJlcSIsInRlbXBsYXRlIiwiYWdlbnQiLCJzZXRMb2FkaW5nIiwidG1wbCIsInRlbXBsYXRlVXJsIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidHlwZSIsIk5FV1NfRVJST1IiLCJwYXlsb2FkIiwic3RhdHVzVGV4dCIsImdldE90aGVyTmV3cyIsInNlY3Rpb24iLCJnZXRTdGF0ZSIsIm1vcmVVcmwiLCJHRVRfT1RIRVJORVdTIiwidG9wTmV3cyIsIm1vcmVOZXdzIiwiZ2V0TmV3cyIsImRhdGUiLCJ1dWlkIiwidXJsIiwicGF0aCIsImNoYXJBdCIsIm5ld3MiLCJ0ZW1wbGF0ZXMiLCJBRERfVEVNUExBVEUiLCJHRVRfTkVXUyIsInRlbXBsYXRlTmFtZSIsImdldEZyb250IiwiR0VUX0ZST05UIiwiZnJvbnQiLCJGUk9OVF9FUlJPUiIsIlNFVF9MT0FESU5HIiwiZ2V0Q29uZmlnIiwiY29uZmlnVXJsIiwidGVtcGxhdGVzVXJsIiwiUHJvbWlzZSIsImFsbCIsImluaXRBZ2VudCIsImNvbmZpZyIsIkdFVF9DT05GSUciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxXQUFXO0FBQUEsOExBQUcsaUJBQU9DLEdBQVAsRUFBWUMsUUFBWixFQUFzQkMsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEJDLHNCQUFVO0FBRUpDLGdCQUpVLEdBSUhGLEtBQUssR0FBRyxHQUFSLEdBQWNELFFBSlg7QUFLVkksdUJBTFUsc0RBS2dERCxJQUxoRDtBQUFBO0FBQUEsbUJBT0VFLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsV0FBVixDQVBGOztBQUFBO0FBT1ZHLGVB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O0FBQUEsaU1BQVMsa0JBQU1ZLFFBQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXhCNkIsdUJBRndCO0FBR3hCQywwQkFId0I7QUFBQTtBQUFBLHFCQUtXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNuRHRDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVWtDLFNBQVYsQ0FEbUQsRUFFbkRuQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVtQyxZQUFWLENBRm1ELEVBR25ERyx5RUFBUyxDQUFDN0MsR0FBRCxDQUgwQyxDQUFaLENBTFg7O0FBQUE7QUFBQTtBQUFBO0FBS3ZCOEMsb0JBTHVCO0FBS2ZmLHVCQUxlO0FBS0o3QixtQkFMSTtBQVc5QlUsc0JBQVEsQ0FBQztBQUNQQyxvQkFBSSxFQUFFa0MsaURBREM7QUFFUGhDLHVCQUFPLEVBQUU7QUFDUCtCLHdCQUFNLEVBQUVBLE1BQU0sQ0FBQ3JDLElBRFI7QUFFUHNCLDJCQUFTLEVBQUVBLFNBQVMsQ0FBQ3RCLElBRmQ7QUFHUFAsdUJBQUssRUFBRUE7QUFIQTtBQUZGLGVBQUQsQ0FBUjtBQVg4QjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VjdGlvbi9bc2VjdGlvbl0vW2RhdGVdL1tpZF0uM2U4YjJjNmRhZWFhYjVhMzVkMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9wYWdlcy9zdG9yZSc7XHJcbmltcG9ydCB7IEdFVF9ORVdTLCBTRVRfTE9BRElORywgQUREX1RFTVBMQVRFLCBORVdTX0VSUk9SLCBJTklUX0FHRU5ULCBHRVRfQ09ORklHLCBHRVRfT1RIRVJORVdTLCBGUk9OVF9FUlJPUiwgR0VUX0ZST05UIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBpbml0QWdlbnQsIHRlc3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWdTZXJ2aWNlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFBhcnNlciBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XHJcblxyXG5cclxuY29uc3QgZ2V0VGVtcGxhdGUgPSBhc3luYyAocmVxLCB0ZW1wbGF0ZSwgYWdlbnQpID0+IHtcclxuICB0cnkge1xyXG4gICAgc2V0TG9hZGluZygpO1xyXG5cclxuICAgIGNvbnN0IHRtcGwgPSBhZ2VudCArICctJyArIHRlbXBsYXRlO1xyXG4gICAgY29uc3QgdGVtcGxhdGVVcmwgPSBgaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS90ZW1wbGF0ZXMvbmV3cy8ke3RtcGx9Lmpzb25gO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh0ZW1wbGF0ZVVybCk7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKlRlbXBsYXRlIEVycm9yJyk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE5FV1NfRVJST1IsXHJcbiAgICAgIHBheWxvYWQ6IGVyci5zdGF0dXNUZXh0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE90aGVyTmV3cyA9IChzZWN0aW9uKSA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHNldExvYWRpbmcoKTtcclxuXHJcbiAgICBjb25zdCBtb3JlVXJsID0gYGh0dHBzOi8vZGF0YS5qb29ybmFsby5jb20vbmV3cy8ke3NlY3Rpb259LW1vcmUtbmV3cy5qc29uYDtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQobW9yZVVybCk7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBHRVRfT1RIRVJORVdTLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdG9wTmV3czogcmVzLmRhdGEudG9wTmV3cyxcclxuICAgICAgICBtb3JlTmV3czogcmVzLmRhdGEubW9yZU5ld3MsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTkVXU19FUlJPUixcclxuICAgICAgcGF5bG9hZDogJ05vdEZvdW5kJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5ld3MgPSAoc2VjdGlvbiwgZGF0ZSwgdXVpZCwgdXJsLCByZXEpID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICB0cnkge1xyXG4gICAgc2V0TG9hZGluZygpO1xyXG5cclxuICAgIGNvbnN0IHBhdGggPSBgaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9uZXdzLyR7dXVpZC5jaGFyQXQoMCl9LyR7dXVpZC5jaGFyQXQoMSl9LyR7dXVpZH0uanNvbmBcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQocGF0aCk7XHJcblxyXG4gICAgaWYgKHVybCAhPT0gcmVzLmRhdGFbJ3VybCddKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBORVdTX0VSUk9SLFxyXG4gICAgICAgIHBheWxvYWQ6IGBSZWRpcmVjdDogJHtyZXMuZGF0YVsndXJsJ119YFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZ2VudCA9IGdldFN0YXRlKCkubmV3cy5hZ2VudDtcclxuICAgIGNvbnN0IHRtcGwgPSBhZ2VudCArICctJyArIHJlcy5kYXRhWyd0ZW1wbGF0ZSddO1xyXG5cclxuICAgIGxldCB0ZW1wbGF0ZSA9IGdldFN0YXRlKCkubmV3cy50ZW1wbGF0ZXNbdG1wbF07XHJcblxyXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xyXG4gICAgICB0ZW1wbGF0ZSA9IGF3YWl0IGdldFRlbXBsYXRlKHJlcSwgcmVzLmRhdGFbJ3RlbXBsYXRlJ10sIGdldFN0YXRlKCkubmV3cy5hZ2VudCk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBBRERfVEVNUExBVEUsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdGVtcGxhdGU6IHsgW3RtcGxdOiB0ZW1wbGF0ZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEdFVF9ORVdTLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgbmV3czogcmVzLmRhdGEsXHJcbiAgICAgICAgdGVtcGxhdGVOYW1lOiAndGVtcGxhdGUtJyArIHJlcy5kYXRhWyd0ZW1wbGF0ZSddLFxyXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE5FV1NfRVJST1IsXHJcbiAgICAgIHBheWxvYWQ6ICdOb3RGb3VuZCdcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RnJvbnQgPSAoc2VjdGlvbiwgcmVxKSA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHNldExvYWRpbmcoKTtcclxuXHJcbiAgICBjb25zdCBwYXRoID0gYGh0dHBzOi8vZGF0YS5qb29ybmFsby5jb20vc2VjdGlvbnMvbGF0ZXN0LyR7c2VjdGlvbn0uanNvbmBcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQocGF0aCk7XHJcblxyXG4gICAgLy8gaWYgKHVybCAhPT0gcmVzLmRhdGFbJ3VybCddKSB7XHJcbiAgICAvLyAgIGRpc3BhdGNoKHtcclxuICAgIC8vICAgICB0eXBlOiBGUk9OVF9FUlJPUixcclxuICAgIC8vICAgICBwYXlsb2FkOiBgUmVkaXJlY3Q6ICR7cmVzLmRhdGFbJ3VybCddfWBcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgYWdlbnQgPSBnZXRTdGF0ZSgpLm5ld3MuYWdlbnQ7XHJcbiAgICBjb25zdCB0bXBsID0gYWdlbnQgKyAnLScgKyByZXMuZGF0YVsndGVtcGxhdGUnXTtcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSBnZXRTdGF0ZSgpLm5ld3MudGVtcGxhdGVzW3RtcGxdO1xyXG5cclxuICAgIGlmICghdGVtcGxhdGUpIHtcclxuICAgICAgdGVtcGxhdGUgPSBhd2FpdCBnZXRUZW1wbGF0ZShyZXEsIHJlcy5kYXRhWyd0ZW1wbGF0ZSddLCBnZXRTdGF0ZSgpLm5ld3MuYWdlbnQpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQUREX1RFTVBMQVRFLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRlbXBsYXRlOiB7IFt0bXBsXTogdGVtcGxhdGUgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEdFVF9GUk9OVCxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGZyb250OiByZXMuZGF0YSxcclxuICAgICAgICB0ZW1wbGF0ZU5hbWU6ICd0ZW1wbGF0ZS0nICsgcmVzLmRhdGFbJ3RlbXBsYXRlJ10sXHJcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKCdGUk9OVF9FUlJPUi0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBGUk9OVF9FUlJPUixcclxuICAgICAgcGF5bG9hZDogJ05vdEZvdW5kJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gU2V0IGxvYWRpbmcgdG8gdHJ1ZVxyXG5leHBvcnQgY29uc3Qgc2V0TG9hZGluZyA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0VUX0xPQURJTkdcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWcgPSAocmVxKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbmZpZ1VybCA9IGBodHRwczovL2RhdGEuam9vcm5hbG8uY29tL2NvbmZpZy5qc29uYFxyXG4gICAgY29uc3QgdGVtcGxhdGVzVXJsID0gYGh0dHBzOi8vZGF0YS5qb29ybmFsby5jb20vdGVtcGxhdGVzL25ld3MvdGVtcGxhdGVzLmpzb25gO1xyXG5cclxuICAgIGNvbnN0IFtjb25maWcsIHRlbXBsYXRlcywgYWdlbnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBheGlvcy5nZXQoY29uZmlnVXJsKSxcclxuICAgICAgYXhpb3MuZ2V0KHRlbXBsYXRlc1VybCksXHJcbiAgICAgIGluaXRBZ2VudChyZXEpXHJcbiAgICBdKTtcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEdFVF9DT05GSUcsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBjb25maWc6IGNvbmZpZy5kYXRhLFxyXG4gICAgICAgIHRlbXBsYXRlczogdGVtcGxhdGVzLmRhdGEsXHJcbiAgICAgICAgYWdlbnQ6IGFnZW50XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vIGRpc3BhdGNoKHtcclxuICAgIC8vICAgdHlwZTogTkVXU19FUlJPUixcclxuICAgIC8vICAgcGF5bG9hZDogJ05vdEZvdW5kJ1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=