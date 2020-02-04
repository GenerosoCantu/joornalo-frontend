exports.ids = [1,3,7];
exports.modules = {

/***/ "HYzt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MprS");
/* harmony import */ var _adv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ORIc");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const headerStyle = {
  background: '#f01818'
};
const linkStyle = {
  marginRight: 15
};

const date = () => {
  let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
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
      className: "header"
    }, __jsx("div", {
      className: "container-fluid desktop"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-4"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/"
    }, __jsx("a", null, "Joornalo")))), __jsx("div", {
      className: "col-xl-6 col-lg-5 col-md-5 headerBanner"
    }, __jsx(_adv__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx("div", {
      className: "col-lg-3 col-md-3"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("div", {
      className: "search-box"
    }, __jsx("input", {
      id: "search",
      placeholder: "Buscar",
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
    }, __jsx(_menu1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: menu
    }))))
  );
};

const mapStateToProps = state => ({
  menu: state.news.config['menu-header']
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Header1));

/***/ }),

/***/ "MprS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Menu = ({
  items
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row menu"
  }, __jsx("div", {
    className: "col"
  }, __jsx("ul", null, items.map((item, index) => __jsx("li", {
    key: index
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "{item.link}"
  }, __jsx("a", null, item.text)), __jsx("div", {
    hidden: !item.sub,
    className: "bg"
  }), __jsx("ol", {
    hidden: !item.sub
  }, item.sub.map((sub, index0) => __jsx("li", {
    key: index0
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "{sub.link}"
  }, __jsx("a", null, sub.text)))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "ORIc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Adv = context => {
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('---');
  let loaded = false;
  let isIntersecting = false;
  const id = 'adv' + Math.round(Math.random() * 100000);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const div = document.getElementById(id);

    if (div) {
      const contentWidth = div.offsetWidth;
      console.log(id, '::::', contentWidth);

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
    id: id
  }, "Advertising ", msg);
};

/* harmony default export */ __webpack_exports__["default"] = (Adv);

/***/ })

};;