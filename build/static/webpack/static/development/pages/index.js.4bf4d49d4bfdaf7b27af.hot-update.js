webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Template.js":
/*!********************************!*\
  !*** ./components/Template.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ "./components/components.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\Template.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Template = function Template(_ref) {
  var grid = _ref.grid,
      data = _ref.data;
  console.log("Template-------");
  if (!grid || !data) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
  return grid.rows.map(function (row, index) {
    return __jsx("div", {
      className: "row",
      key: "row-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, row.column.map(function (col, indexy) {
      if (col.components) {
        return __jsx("div", {
          className: "".concat(col.width),
          key: "".concat(indexy),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, col.components.map(function (component, indexz) {
          return __jsx(_components_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
            component: component.id,
            data: data,
            params: component,
            key: "".concat(indexz),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          });
        }));
      } else {
        if (col.rows) {
          return __jsx("div", {
            className: "".concat(col.width),
            key: "col-".concat(index),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, __jsx(Template, {
            grid: col,
            data: data,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }));
        }
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ })

})
//# sourceMappingURL=index.js.4bf4d49d4bfdaf7b27af.hot-update.js.map