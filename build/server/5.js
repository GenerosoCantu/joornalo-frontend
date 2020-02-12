exports.ids = [5];
exports.modules = {

/***/ "./components/TemplateOLD.js":
/*!***********************************!*\
  !*** ./components/TemplateOLD.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ "./components/components.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\TemplateOLD.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Template = ({
  grid,
  data
}) => {
  if (!grid || !data) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  });
  return grid.rows.map((row, index) => {
    return __jsx("div", {
      className: "row",
      key: `row-${index}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: undefined
    }, row.column.map((col, index) => {
      if (col.component) {
        return __jsx("div", {
          className: `${col.width}`,
          key: `col-${index}`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: undefined
        }, __jsx(_components_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          component: col.component,
          data: data,
          text: col.text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: undefined
        }));
      } else {
        if (col.rows) {
          return __jsx("div", {
            className: `${col.width}`,
            key: `col-${index}`,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: undefined
          }, __jsx(Template, {
            grid: col,
            data: data,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: undefined
          }));
        }
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ })

};;
//# sourceMappingURL=5.js.map