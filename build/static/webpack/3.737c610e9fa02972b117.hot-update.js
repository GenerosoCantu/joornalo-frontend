webpackHotUpdate(3,{

/***/ "./components/footer1.js":
/*!*******************************!*\
  !*** ./components/footer1.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu1 */ "./components/menu1.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\footer1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var headerStyle = {
  background: '#f01818'
};
var linkStyle = {
  marginRight: 15
};

var date = function date() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      date = new Date();
  var displayDate = days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  return displayDate;
};

var Footer1 = function Footer1(_ref) {
  var menu = _ref.menu;
  return (// <div style={headerStyle}>
    //   <Link href="/">
    //     <a style={linkStyle}>Home</a>
    //   </Link>
    //   <Link href="/about">
    //     <a style={linkStyle}>About</a>
    //   </Link>
    // </div>
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "container-fluid desktop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Joornalo")))), __jsx("div", {
      className: "col-xl-6 col-lg-5 col-md-5 headerBanner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Banner"), __jsx("div", {
      className: "col-lg-3 col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("div", {
      className: "search-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, date()))))))), __jsx("div", {
      className: "stripe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx(_menu1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: menu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }))))
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.news.config['menu-header']
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Footer1));

/***/ })

})
//# sourceMappingURL=3.737c610e9fa02972b117.hot-update.js.map