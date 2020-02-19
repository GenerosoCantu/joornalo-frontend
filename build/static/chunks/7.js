(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./components/TemplateOLD.js":
/*!***********************************!*\
  !*** ./components/TemplateOLD.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ "./components/components.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\TemplateOLD.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Template = function Template(_ref) {
  var grid = _ref.grid,
      data = _ref.data;
  if (!grid || !data) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
  return grid.rows.map(function (row, index) {
    return __jsx("div", {
      className: "row",
      key: "row-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, row.column.map(function (col, index) {
      if (col.component) {
        return __jsx("div", {
          className: "".concat(col.width),
          key: "col-".concat(index),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, __jsx(_components_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          component: col.component,
          data: data,
          text: col.text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }));
      } else {
        if (col.rows) {
          return __jsx("div", {
            className: "".concat(col.width),
            key: "col-".concat(index),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }, __jsx(Template, {
            grid: col,
            data: data,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
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

}]);
//# sourceMappingURL=7.js.map