(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/adv.js":
/*!***************************!*\
  !*** ./components/adv.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\adv.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Adv = function Adv(context) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('---'),
      msg = _useState[0],
      setMsg = _useState[1];

  var loaded = false;
  var isIntersecting = false;
  var id = 'adv' + Math.round(Math.random() * 100000);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var div = document.getElementById(id);

    if (div) {
      var contentWidth = div.offsetWidth; // console.log(id, '::::', contentWidth)

      try {
        var observer = new IntersectionObserver(function (entries, observerChild) {
          if (!loaded && entries[0].isIntersecting) {
            loaded = true;
            isIntersecting = true;
            observerChild.unobserve(entries[0].target);
            preLoad();
          }
        });
        observer.observe(div);
      } catch (err) {
        safariIssue();
      }
    }
  });

  var safariIssue = function safariIssue() {
    if (!loaded) {
      loaded = true;
      isIntersecting = true;
      preLoad();
    }
  };

  var preLoad = function preLoad() {
    if (isIntersecting) {
      console.log('Ready to load...............................');
      setMsg('Loaded');
    }
  };

  return __jsx("div", {
    className: "adv",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Ad: ", msg);
};

/* harmony default export */ __webpack_exports__["default"] = (Adv);

/***/ }),

/***/ "./components/header1.js":
/*!*******************************!*\
  !*** ./components/header1.js ***!
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
/* harmony import */ var _adv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adv */ "./components/adv.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\header1.js";

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

var Header1 = function Header1(_ref) {
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
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "container-fluid desktop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Joornalo")))), __jsx("div", {
      className: "col-xl-6 col-lg-5 col-md-5 headerBanner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_adv__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })), __jsx("div", {
      className: "col-lg-3 col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("div", {
      className: "search-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("input", {
      id: "search",
      placeholder: "Search",
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    })))), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, date()))))))), __jsx("div", {
      className: "stripe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(_menu1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: menu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Header1));

/***/ }),

/***/ "./components/menu1.js":
/*!*****************************!*\
  !*** ./components/menu1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\menu1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Menu = function Menu(_ref) {
  var items = _ref.items;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, items.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "{item.link}",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, item.text)), __jsx("div", {
      hidden: !item.sub,
      className: "bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx("ol", {
      hidden: !item.sub,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, item.sub.map(function (sub, index0) {
      return __jsx("li", {
        key: index0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "{sub.link}",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, sub.text)));
    })));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

}]);
//# sourceMappingURL=2.js.map