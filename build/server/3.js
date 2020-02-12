exports.ids = [3];
exports.modules = {

/***/ "./components/adv.js":
/*!***************************!*\
  !*** ./components/adv.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\adv.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Adv = context => {
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('---');
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  let loaded = false;
  let isIntersecting = false;
  /*
  300x250 - Medium Rectangle - 40%
  728x90 - Leaderboard - 25%
  160x600 - Wide Skyscraper - 12%
  300x600 - Half Page - 5%
  970x250 - Billboard - 1%
  120x600 - Skyscraper
    320x50 - Mobile Leaderboard - 12%
  320x320 - Mobile Full Page Flex - 1%
  320x100 - Large Mobile
  */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!id) {
      setId('adv' + Math.round(Math.random() * 100000));
    }

    const div = document.getElementById(id);

    if (div) {
      const contentWidth = div.offsetWidth;

      try {
        let observer = new IntersectionObserver((entries, observerChild) => {
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

  const safariIssue = () => {
    if (!loaded) {
      loaded = true;
      isIntersecting = true;
      preLoad();
    }
  };

  const preLoad = () => {
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
      lineNumber: 64
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu1 */ "./components/menu1.js");
/* harmony import */ var _adv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adv */ "./components/adv.js");
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\header1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const headerStyle = {
  background: '#f01818'
};
const linkStyle = {
  marginRight: 15
};

const date = () => {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      date = new Date();
  const displayDate = days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  return displayDate;
};

const Header1 = ({
  menu
}) => {
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
      __self: undefined
    }, __jsx("div", {
      className: "container-fluid desktop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, __jsx("div", {
      className: "col-250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, __jsx("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, "Joornalo")))), __jsx("div", {
      className: "col-auto headerBanner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, __jsx(_adv__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    })), __jsx("div", {
      className: "col-250",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }, __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, __jsx("div", {
      className: "search-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, __jsx("input", {
      id: "search",
      placeholder: "Search",
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    })))), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }, __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }, __jsx("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }, date()))))))), __jsx("div", {
      className: "stripe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }, __jsx("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }, __jsx(_menu1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: menu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }))))
  );
};

const mapStateToProps = state => ({
  menu: state.news.config['menu-header']
});

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Projects\\DEVELOPMENT\\joornalo-frontend\\front.joornalo\\components\\menu1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Menu = ({
  items
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, items.map((item, index) => __jsx("li", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "{item.link}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, item.text)), __jsx("div", {
    hidden: !item.sub,
    className: "bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("ol", {
    hidden: !item.sub,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, item.sub.map((sub, index0) => __jsx("li", {
    key: index0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "{sub.link}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, sub.text)))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

};;
//# sourceMappingURL=3.js.map