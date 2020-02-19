exports.ids = [8];
exports.modules = {

/***/ "lnm/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M94t");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Template = ({
  grid,
  data
}) => {
  if (!grid || !data) return __jsx("div", null);
  return grid.rows.map((row, index) => {
    return __jsx("div", {
      className: "row",
      key: `row-${index}`
    }, row.column.map((col, index) => {
      if (col.component) {
        return __jsx("div", {
          className: `${col.width}`,
          key: `col-${index}`
        }, __jsx(_components_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          component: col.component,
          data: data,
          text: col.text
        }));
      } else {
        if (col.rows) {
          return __jsx("div", {
            className: `${col.width}`,
            key: `col-${index}`
          }, __jsx(Template, {
            grid: col,
            data: data
          }));
        }
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ })

};;