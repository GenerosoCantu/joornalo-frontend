(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./components/block-adv.js":
/*!*********************************!*\
  !*** ./components/block-adv.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Adv = function Adv(context) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('---'),
      msg = _useState[0],
      setMsg = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      id = _useState2[0],
      setId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      first = _useState3[0],
      setFirst = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      adsrc = _useState4[0],
      setAdsrc = _useState4[1]; // const [contentWidth, setContentWidth] = useState(0)


  var loaded = false;
  var isIntersecting = false; // let banner = ''
  // if (context.params) {
  //   banner = context.params.size;
  // }

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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!id) {
      setId('adv' + Math.round(Math.random() * 100000));
    }

    if (!first && id) {
      setFirst(true);
      var div = document.getElementById(id);

      if (div) {
        // setContentWidth(div.offsetWidth)
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
    }
  });

  var safariIssue = function safariIssue() {
    if (!loaded) {
      loaded = true;
      isIntersecting = true;
      preLoad();
    }
  };
  /*
  300x250 - Medium Rectangle - 40%
  728x90 - Leaderboard - 25%
  160x600 - Wide Skyscraper - 12%
  300x600 - Half Page - 5%
  120x600 - Skyscraper
    970x250 - Billboard - 1%
  */


  var preLoad = function preLoad() {
    //console.log('Ready to load...............................', id)
    if (isIntersecting) {
      setMsg('Loaded');
      var num = Math.floor(Math.random() * 4);
      var bb = ['a', 'b', 'c', 'd'];
      setAdsrc('https://data.joornalo.com/ads/' + context.params.size + bb[num] + '.jpg');
    }
  };

  return __jsx("div", {
    className: "adv eureka",
    id: id
  }, __jsx("img", {
    src: adsrc
  }));
};

{
  /* Ad {banner} ({contentWidth}): {msg} */
}
/* harmony default export */ __webpack_exports__["default"] = (Adv);

/***/ }),

/***/ "./components/block-header1.js":
/*!*************************************!*\
  !*** ./components/block-header1.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_menu1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-menu1 */ "./components/block-menu1.js");
/* harmony import */ var _block_adv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-adv */ "./components/block-adv.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var headerStyle = {
  background: '#f01818'
};
var linkStyle = {
  marginRight: 15
};
var AdParams = {
  size: '728x90'
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
      className: "header"
    }, __jsx("div", {
      className: "container-fluid desktop"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-250"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/"
    }, __jsx("a", null, "Joornalo")))), __jsx("div", {
      className: "col-auto headerBanner"
    }, __jsx(_block_adv__WEBPACK_IMPORTED_MODULE_4__["default"], {
      params: AdParams
    })), __jsx("div", {
      className: "col-250"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("div", {
      className: "search-box"
    }, __jsx("input", {
      id: "search",
      placeholder: "Search",
      type: "text"
    })))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("div", {
      className: "date"
    }, date()))))))), __jsx("div", {
      className: "stripe"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx(_block_menu1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: menu
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

/***/ "./components/block-menu1.js":
/*!***********************************!*\
  !*** ./components/block-menu1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Menu = function Menu(_ref) {
  var items = _ref.items;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row menu"
  }, __jsx("div", {
    className: "col"
  }, __jsx("ul", null, items.map(function (item, index) {
    return __jsx("li", {
      key: index
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "{item.link}"
    }, __jsx("a", null, item.text)), __jsx("div", {
      hidden: !item.sub,
      className: "bg"
    }), __jsx("ol", {
      hidden: !item.sub
    }, item.sub.map(function (sub, index0) {
      return __jsx("li", {
        key: index0
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "{sub.link}"
      }, __jsx("a", null, sub.text)));
    })));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

}]);
//# sourceMappingURL=4.js.map