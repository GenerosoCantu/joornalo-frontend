exports.ids = [5];
exports.modules = {

/***/ "./components/block-footer1.js":
/*!*************************************!*\
  !*** ./components/block-footer1.js ***!
  \*************************************/
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
/* harmony import */ var _block_menu1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-menu1 */ "./components/block-menu1.js");

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

const Footer1 = ({
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
      className: "col-250"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/"
    }, __jsx("a", null, "Joornalo")))), __jsx("div", {
      className: "col-auto"
    }), __jsx("div", {
      className: "col-250"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("div", {
      className: "search-box"
    }))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("div", {
      className: "date"
    }, date()))))))))
  );
};

const mapStateToProps = state => ({
  menu: state.news.config['menu-header']
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Footer1));

/***/ }),

/***/ "./components/block-menu1.js":
/*!***********************************!*\
  !*** ./components/block-menu1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLWZvb3RlcjEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9jay1tZW51MS5qcyJdLCJuYW1lcyI6WyJoZWFkZXJTdHlsZSIsImJhY2tncm91bmQiLCJsaW5rU3R5bGUiLCJtYXJnaW5SaWdodCIsImRhdGUiLCJkYXlzIiwibW9udGhzIiwiRGF0ZSIsImRpc3BsYXlEYXRlIiwiZ2V0RGF5IiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJGb290ZXIxIiwibWVudSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmV3cyIsImNvbmZpZyIsImNvbm5lY3QiLCJNZW51IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0ZXh0Iiwic3ViIiwiaW5kZXgwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUc7QUFDbEJDLFlBQVUsRUFBRTtBQURNLENBQXBCO0FBSUEsTUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxhQUFXLEVBQUU7QUFERyxDQUFsQjs7QUFJQSxNQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUVqQixNQUFJQyxJQUFJLEdBQUcsQ0FDVCxRQURTLEVBRVQsUUFGUyxFQUdULFNBSFMsRUFJVCxXQUpTLEVBS1QsVUFMUyxFQU1ULFFBTlMsRUFPVCxVQVBTLENBQVg7QUFBQSxNQVNFQyxNQUFNLEdBQUcsQ0FDUCxTQURPLEVBRVAsVUFGTyxFQUdQLE9BSE8sRUFJUCxPQUpPLEVBS1AsS0FMTyxFQU1QLE1BTk8sRUFPUCxNQVBPLEVBUVAsUUFSTyxFQVNQLFdBVE8sRUFVUCxTQVZPLEVBV1AsVUFYTyxFQVlQLFVBWk8sQ0FUWDtBQUFBLE1BdUJFRixJQUFJLEdBQUcsSUFBSUcsSUFBSixFQXZCVDtBQXlCQSxRQUFNQyxXQUFXLEdBQ2ZILElBQUksQ0FBQ0QsSUFBSSxDQUFDSyxNQUFMLEVBQUQsQ0FBSixHQUNBLElBREEsR0FFQUgsTUFBTSxDQUFDRixJQUFJLENBQUNNLFFBQUwsRUFBRCxDQUZOLEdBR0EsR0FIQSxHQUlBTixJQUFJLENBQUNPLE9BQUwsRUFKQSxHQUtBLElBTEEsR0FNQVAsSUFBSSxDQUFDUSxXQUFMLEVBUEY7QUFTQSxTQUFPSixXQUFQO0FBQ0QsQ0FyQ0Q7O0FBdUNBLE1BQU1LLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBRTVCLFNBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHVFQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQztBQUFYLE9BQWUsNEJBQWYsQ0FERixDQURGLENBREYsRUFPRTtBQUFLLGVBQVMsRUFBQztBQUFmLE1BUEYsRUFXRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE1BREYsQ0FERixDQURGLEVBVUU7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQXVCVixJQUFJLEVBQTNCLENBREYsQ0FERixDQVZGLENBWEYsQ0FERixDQURGLENBREY7QUFWRjtBQXFERCxDQXZERDs7QUF5REEsTUFBTVcsZUFBZSxHQUFHQyxLQUFLLEtBQUs7QUFDaENGLE1BQUksRUFBRUUsS0FBSyxDQUFDQyxJQUFOLENBQVdDLE1BQVgsQ0FBa0IsYUFBbEI7QUFEMEIsQ0FBTCxDQUE3Qjs7QUFJZUMsMEhBQU8sQ0FDcEJKLGVBRG9CLENBQVAsQ0FFYkYsT0FGYSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEE7O0FBRUEsTUFBTU8sSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFFMUIsU0FFRSxtRUFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUVFLGtCQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FFVDtBQUFJLE9BQUcsRUFBRUE7QUFBVCxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUF5QixpQkFBSUQsSUFBSSxDQUFDRSxJQUFULENBQXpCLENBREYsRUFHRTtBQUFLLFVBQU0sRUFBRSxDQUFDRixJQUFJLENBQUNHLEdBQW5CO0FBQXdCLGFBQVMsRUFBQztBQUFsQyxJQUhGLEVBS0U7QUFBSSxVQUFNLEVBQUUsQ0FBQ0gsSUFBSSxDQUFDRztBQUFsQixLQUVHSCxJQUFJLENBQUNHLEdBQUwsQ0FBU0osR0FBVCxDQUFhLENBQUNJLEdBQUQsRUFBTUMsTUFBTixLQUNaO0FBQUksT0FBRyxFQUFFQTtBQUFULEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQXdCLGlCQUFJRCxHQUFHLENBQUNELElBQVIsQ0FBeEIsQ0FERixDQURELENBRkgsQ0FMRixDQUZELENBREgsQ0FGRixDQURGLENBREYsQ0FGRjtBQWtDRCxDQXBDRDs7QUF1Q2VMLG1FQUFmLEUiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9ibG9jay1tZW51MSdcclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlID0ge1xyXG4gIGJhY2tncm91bmQ6ICcjZjAxODE4J1xyXG59XHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IDE1XHJcbn1cclxuXHJcbmNvbnN0IGRhdGUgPSAoKSA9PiB7XHJcblxyXG4gIGxldCBkYXlzID0gW1xyXG4gICAgJ1N1bmRheScsXHJcbiAgICAnTW9uZGF5JyxcclxuICAgICdUdWVzZGF5JyxcclxuICAgICdXZWRuZXNkYXknLFxyXG4gICAgJ1RodXJzZGF5JyxcclxuICAgICdGcmlkYXknLFxyXG4gICAgJ1NhdHVyZGF5J1xyXG4gIF0sXHJcbiAgICBtb250aHMgPSBbXHJcbiAgICAgICdKYW51YXJ5JyxcclxuICAgICAgJ0ZlYnJ1YXJ5JyxcclxuICAgICAgJ01hcmNoJyxcclxuICAgICAgJ0FwcmlsJyxcclxuICAgICAgJ01heScsXHJcbiAgICAgICdKdW5lJyxcclxuICAgICAgJ0p1bHknLFxyXG4gICAgICAnQXVndXN0JyxcclxuICAgICAgJ1NlcHRlbWJlcicsXHJcbiAgICAgICdPY3RvYmVyJyxcclxuICAgICAgJ05vdmVtYmVyJyxcclxuICAgICAgJ0RlY2VtYmVyJ1xyXG4gICAgXSxcclxuICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBjb25zdCBkaXNwbGF5RGF0ZSA9XHJcbiAgICBkYXlzW2RhdGUuZ2V0RGF5KCldICtcclxuICAgICcsICcgK1xyXG4gICAgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gK1xyXG4gICAgJyAnICtcclxuICAgIGRhdGUuZ2V0RGF0ZSgpICtcclxuICAgICcsICcgK1xyXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gZGlzcGxheURhdGU7XHJcbn1cclxuXHJcbmNvbnN0IEZvb3RlcjEgPSAoeyBtZW51IH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cclxuICAgIC8vICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgIC8vICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Ib21lPC9hPlxyXG4gICAgLy8gICA8L0xpbms+XHJcbiAgICAvLyAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgIC8vICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cclxuICAgIC8vICAgPC9MaW5rPlxyXG4gICAgLy8gPC9kaXY+XHJcblxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBkZXNrdG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yNTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+Sm9vcm5hbG88L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMjUwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgaWQ9XCJzZWFyY2hcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiQnVzY2FyXCIgdHlwZT1cInRleHRcIiBvbktleWRvd249XCJfa2V5ZG93blwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IG9uLXRhcD1cIl9zdWJtaXRcIiBjbGFzcz1cInNlYXJjaC1pY29uXCI+PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+e2RhdGUoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInN0cmlwZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8TWVudSBpdGVtcz17bWVudX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgIDwvPlxyXG5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgbWVudTogc3RhdGUubmV3cy5jb25maWdbJ21lbnUtaGVhZGVyJ10sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHNcclxuKShGb290ZXIxKTtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IE1lbnUgPSAoeyBpdGVtcyB9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWVudVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcblxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwie2l0ZW0ubGlua31cIj48YT57aXRlbS50ZXh0fTwvYT48L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBoaWRkZW49eyFpdGVtLnN1Yn0gY2xhc3NOYW1lPVwiYmdcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8b2wgaGlkZGVuPXshaXRlbS5zdWJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uc3ViLm1hcCgoc3ViLCBpbmRleDApID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIntzdWIubGlua31cIj48YT57c3ViLnRleHR9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9