webpackHotUpdate_N_E("pages/index",{

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
            console.log(templateUrl);
            _context.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(templateUrl);

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
    }, _callee, null, [[0, 11]]);
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
              console.log(moreUrl);
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(moreUrl);

            case 6:
              res = _context2.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["GET_OTHERNEWS"],
                payload: {
                  topNews: res.data.topNews,
                  moreNews: res.data.moreNews
                }
              });
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["NEWS_ERROR"],
                payload: 'NotFound'
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
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
              console.log(path);
              _context3.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(path);

            case 6:
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
                _context3.next = 16;
                break;
              }

              _context3.next = 14;
              return getTemplate(req, res.data['template'], getState().news.agent);

            case 14:
              template = _context3.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["ADD_TEMPLATE"],
                payload: {
                  template: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, tmpl, template)
                }
              });

            case 16:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["GET_NEWS"],
                payload: {
                  news: res.data,
                  templateName: 'template-' + res.data['template'],
                  template: template
                }
              });
              _context3.next = 22;
              break;

            case 19:
              _context3.prev = 19;
              _context3.t0 = _context3["catch"](0);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["NEWS_ERROR"],
                payload: 'NotFound'
              });

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 19]]);
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
              console.log(path);
              _context4.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(path);

            case 6:
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
                _context4.next = 15;
                break;
              }

              _context4.next = 13;
              return getTemplate(req, res.data['template'], getState().news.agent);

            case 13:
              template = _context4.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["ADD_TEMPLATE"],
                payload: {
                  template: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, tmpl, template)
                }
              });

            case 15:
              //console.log(res.data)
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["GET_FRONT"],
                payload: {
                  front: res.data,
                  templateName: 'template-' + res.data['template'],
                  template: template
                }
              });
              _context4.next = 23;
              break;

            case 18:
              _context4.prev = 18;
              _context4.t0 = _context4["catch"](0);
              console.log('FRONT_ERROR--------------------');
              console.log(_context4.t0);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["FRONT_ERROR"],
                payload: 'NotFound'
              });

            case 23:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 18]]);
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
              console.log(configUrl);
              console.log(templatesUrl);
              _context5.next = 7;
              return Promise.all([axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(configUrl), axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(templatesUrl), Object(_services_configService__WEBPACK_IMPORTED_MODULE_6__["initAgent"])(req)]);

            case 7:
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
              _context5.next = 17;
              break;

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](0);

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 15]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9uZXdzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRUZW1wbGF0ZSIsInJlcSIsInRlbXBsYXRlIiwiYWdlbnQiLCJzZXRMb2FkaW5nIiwidG1wbCIsInRlbXBsYXRlVXJsIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSIsImRpc3BhdGNoIiwidHlwZSIsIk5FV1NfRVJST1IiLCJwYXlsb2FkIiwic3RhdHVzVGV4dCIsImdldE90aGVyTmV3cyIsInNlY3Rpb24iLCJnZXRTdGF0ZSIsIm1vcmVVcmwiLCJHRVRfT1RIRVJORVdTIiwidG9wTmV3cyIsIm1vcmVOZXdzIiwiZ2V0TmV3cyIsImRhdGUiLCJ1dWlkIiwidXJsIiwicGF0aCIsImNoYXJBdCIsIm5ld3MiLCJ0ZW1wbGF0ZXMiLCJBRERfVEVNUExBVEUiLCJHRVRfTkVXUyIsInRlbXBsYXRlTmFtZSIsImdldEZyb250IiwiR0VUX0ZST05UIiwiZnJvbnQiLCJGUk9OVF9FUlJPUiIsIlNFVF9MT0FESU5HIiwiZ2V0Q29uZmlnIiwiY29uZmlnVXJsIiwidGVtcGxhdGVzVXJsIiwiUHJvbWlzZSIsImFsbCIsImluaXRBZ2VudCIsImNvbmZpZyIsIkdFVF9DT05GSUciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxXQUFXO0FBQUEsOExBQUcsaUJBQU9DLEdBQVAsRUFBWUMsUUFBWixFQUFzQkMsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEJDLHNCQUFVO0FBRUpDLGdCQUpVLEdBSUhGLEtBQUssR0FBRyxHQUFSLEdBQWNELFFBSlg7QUFLVkksdUJBTFUsc0RBS2dERCxJQUxoRDtBQU9oQkUsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaO0FBUGdCO0FBQUEsbUJBUUVHLDRDQUFLLENBQUND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Q0FtRFA7O0FBQ08sSUFBTVosVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUM5QixTQUFPO0FBQ0xVLFFBQUksRUFBRTBCLGtEQUFXQTtBQURaLEdBQVA7QUFHRCxDQUpNO0FBT0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3hDLEdBQUQ7QUFBQTtBQUFBLGlNQUFTLGtCQUFNWSxRQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV4QjZCLHVCQUZ3QjtBQUd4QkMsMEJBSHdCO0FBSTlCcEMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZa0MsU0FBWjtBQUNBbkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZbUMsWUFBWjtBQUw4QjtBQUFBLHFCQU1XQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNuRHBDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVWdDLFNBQVYsQ0FEbUQsRUFFbkRqQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVpQyxZQUFWLENBRm1ELEVBR25ERyx5RUFBUyxDQUFDN0MsR0FBRCxDQUgwQyxDQUFaLENBTlg7O0FBQUE7QUFBQTtBQUFBO0FBTXZCOEMsb0JBTnVCO0FBTWZmLHVCQU5lO0FBTUo3QixtQkFOSTtBQVk5QlUsc0JBQVEsQ0FBQztBQUNQQyxvQkFBSSxFQUFFa0MsaURBREM7QUFFUGhDLHVCQUFPLEVBQUU7QUFDUCtCLHdCQUFNLEVBQUVBLE1BQU0sQ0FBQ25DLElBRFI7QUFFUG9CLDJCQUFTLEVBQUVBLFNBQVMsQ0FBQ3BCLElBRmQ7QUFHUFQsdUJBQUssRUFBRUE7QUFIQTtBQUZGLGVBQUQsQ0FBUjtBQVo4QjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTZhNDI3M2EwZjJlOWI1YTcxMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9wYWdlcy9zdG9yZSc7XHJcbmltcG9ydCB7IEdFVF9ORVdTLCBTRVRfTE9BRElORywgQUREX1RFTVBMQVRFLCBORVdTX0VSUk9SLCBJTklUX0FHRU5ULCBHRVRfQ09ORklHLCBHRVRfT1RIRVJORVdTLCBGUk9OVF9FUlJPUiwgR0VUX0ZST05UIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBpbml0QWdlbnQsIHRlc3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWdTZXJ2aWNlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFBhcnNlciBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XHJcblxyXG5cclxuY29uc3QgZ2V0VGVtcGxhdGUgPSBhc3luYyAocmVxLCB0ZW1wbGF0ZSwgYWdlbnQpID0+IHtcclxuICB0cnkge1xyXG4gICAgc2V0TG9hZGluZygpO1xyXG5cclxuICAgIGNvbnN0IHRtcGwgPSBhZ2VudCArICctJyArIHRlbXBsYXRlO1xyXG4gICAgY29uc3QgdGVtcGxhdGVVcmwgPSBgaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS90ZW1wbGF0ZXMvbmV3cy8ke3RtcGx9Lmpzb25gO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRlbXBsYXRlVXJsKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHRlbXBsYXRlVXJsKTtcclxuXHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coJyoqKioqKioqKioqVGVtcGxhdGUgRXJyb3InKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTkVXU19FUlJPUixcclxuICAgICAgcGF5bG9hZDogZXJyLnN0YXR1c1RleHRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T3RoZXJOZXdzID0gKHNlY3Rpb24pID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICB0cnkge1xyXG4gICAgc2V0TG9hZGluZygpO1xyXG5cclxuICAgIGNvbnN0IG1vcmVVcmwgPSBgaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9uZXdzLyR7c2VjdGlvbn0tbW9yZS1uZXdzLmpzb25gO1xyXG4gICAgY29uc29sZS5sb2cobW9yZVVybCk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQobW9yZVVybCk7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBHRVRfT1RIRVJORVdTLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdG9wTmV3czogcmVzLmRhdGEudG9wTmV3cyxcclxuICAgICAgICBtb3JlTmV3czogcmVzLmRhdGEubW9yZU5ld3MsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTkVXU19FUlJPUixcclxuICAgICAgcGF5bG9hZDogJ05vdEZvdW5kJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5ld3MgPSAoc2VjdGlvbiwgZGF0ZSwgdXVpZCwgdXJsLCByZXEpID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICB0cnkge1xyXG4gICAgc2V0TG9hZGluZygpO1xyXG5cclxuICAgIGNvbnN0IHBhdGggPSBgaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9uZXdzLyR7dXVpZC5jaGFyQXQoMCl9LyR7dXVpZC5jaGFyQXQoMSl9LyR7dXVpZH0uanNvbmBcclxuICAgIGNvbnNvbGUubG9nKHBhdGgpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHBhdGgpO1xyXG5cclxuICAgIGlmICh1cmwgIT09IHJlcy5kYXRhWyd1cmwnXSkge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTkVXU19FUlJPUixcclxuICAgICAgICBwYXlsb2FkOiBgUmVkaXJlY3Q6ICR7cmVzLmRhdGFbJ3VybCddfWBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWdlbnQgPSBnZXRTdGF0ZSgpLm5ld3MuYWdlbnQ7XHJcbiAgICBjb25zdCB0bXBsID0gYWdlbnQgKyAnLScgKyByZXMuZGF0YVsndGVtcGxhdGUnXTtcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSBnZXRTdGF0ZSgpLm5ld3MudGVtcGxhdGVzW3RtcGxdO1xyXG5cclxuICAgIGlmICghdGVtcGxhdGUpIHtcclxuICAgICAgdGVtcGxhdGUgPSBhd2FpdCBnZXRUZW1wbGF0ZShyZXEsIHJlcy5kYXRhWyd0ZW1wbGF0ZSddLCBnZXRTdGF0ZSgpLm5ld3MuYWdlbnQpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQUREX1RFTVBMQVRFLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRlbXBsYXRlOiB7IFt0bXBsXTogdGVtcGxhdGUgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBHRVRfTkVXUyxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIG5ld3M6IHJlcy5kYXRhLFxyXG4gICAgICAgIHRlbXBsYXRlTmFtZTogJ3RlbXBsYXRlLScgKyByZXMuZGF0YVsndGVtcGxhdGUnXSxcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBORVdTX0VSUk9SLFxyXG4gICAgICBwYXlsb2FkOiAnTm90Rm91bmQnXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZyb250ID0gKHNlY3Rpb24sIHJlcSkgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBzZXRMb2FkaW5nKCk7XHJcblxyXG4gICAgY29uc3QgcGF0aCA9IGBodHRwczovL2RhdGEuam9vcm5hbG8uY29tL3NlY3Rpb25zL2xhdGVzdC8ke3NlY3Rpb259Lmpzb25gXHJcbiAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChwYXRoKTtcclxuXHJcbiAgICAvLyBpZiAodXJsICE9PSByZXMuZGF0YVsndXJsJ10pIHtcclxuICAgIC8vICAgZGlzcGF0Y2goe1xyXG4gICAgLy8gICAgIHR5cGU6IEZST05UX0VSUk9SLFxyXG4gICAgLy8gICAgIHBheWxvYWQ6IGBSZWRpcmVjdDogJHtyZXMuZGF0YVsndXJsJ119YFxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBhZ2VudCA9IGdldFN0YXRlKCkubmV3cy5hZ2VudDtcclxuICAgIGNvbnN0IHRtcGwgPSBhZ2VudCArICctJyArIHJlcy5kYXRhWyd0ZW1wbGF0ZSddO1xyXG5cclxuICAgIGxldCB0ZW1wbGF0ZSA9IGdldFN0YXRlKCkubmV3cy50ZW1wbGF0ZXNbdG1wbF07XHJcblxyXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xyXG4gICAgICB0ZW1wbGF0ZSA9IGF3YWl0IGdldFRlbXBsYXRlKHJlcSwgcmVzLmRhdGFbJ3RlbXBsYXRlJ10sIGdldFN0YXRlKCkubmV3cy5hZ2VudCk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBBRERfVEVNUExBVEUsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdGVtcGxhdGU6IHsgW3RtcGxdOiB0ZW1wbGF0ZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogR0VUX0ZST05ULFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgZnJvbnQ6IHJlcy5kYXRhLFxyXG4gICAgICAgIHRlbXBsYXRlTmFtZTogJ3RlbXBsYXRlLScgKyByZXMuZGF0YVsndGVtcGxhdGUnXSxcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coJ0ZST05UX0VSUk9SLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEZST05UX0VSUk9SLFxyXG4gICAgICBwYXlsb2FkOiAnTm90Rm91bmQnXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBTZXQgbG9hZGluZyB0byB0cnVlXHJcbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRVRfTE9BRElOR1xyXG4gIH07XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZyA9IChyZXEpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29uZmlnVXJsID0gYGh0dHBzOi8vZGF0YS5qb29ybmFsby5jb20vY29uZmlnLmpzb25gXHJcbiAgICBjb25zdCB0ZW1wbGF0ZXNVcmwgPSBgaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS90ZW1wbGF0ZXMvbmV3cy90ZW1wbGF0ZXMuanNvbmA7XHJcbiAgICBjb25zb2xlLmxvZyhjb25maWdVcmwpO1xyXG4gICAgY29uc29sZS5sb2codGVtcGxhdGVzVXJsKTtcclxuICAgIGNvbnN0IFtjb25maWcsIHRlbXBsYXRlcywgYWdlbnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBheGlvcy5nZXQoY29uZmlnVXJsKSxcclxuICAgICAgYXhpb3MuZ2V0KHRlbXBsYXRlc1VybCksXHJcbiAgICAgIGluaXRBZ2VudChyZXEpXHJcbiAgICBdKTtcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEdFVF9DT05GSUcsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBjb25maWc6IGNvbmZpZy5kYXRhLFxyXG4gICAgICAgIHRlbXBsYXRlczogdGVtcGxhdGVzLmRhdGEsXHJcbiAgICAgICAgYWdlbnQ6IGFnZW50XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vIGRpc3BhdGNoKHtcclxuICAgIC8vICAgdHlwZTogTkVXU19FUlJPUixcclxuICAgIC8vICAgcGF5bG9hZDogJ05vdEZvdW5kJ1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=