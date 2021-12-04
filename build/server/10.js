exports.ids = [10];
exports.modules = {

/***/ "./components/block-most-viewed1.js":
/*!******************************************!*\
  !*** ./components/block-most-viewed1.js ***!
  \******************************************/
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
/* harmony import */ var _newsBlock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsBlock.js */ "./components/newsBlock.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MostViewed1 = ({
  topNews
}) => {
  if (!topNews) return null;
  return __jsx("div", {
    className: "most-viewed block"
  }, __jsx("div", {
    className: "blockheader"
  }, __jsx("span", null, "Most Viewed")), __jsx("ul", null, topNews.map((news, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: news.url,
    key: index
  }, __jsx("li", null, __jsx("span", null, index + 1), __jsx("div", null, index == 0 ? __jsx("img", {
    src: news.img
  }) : null, __jsx("a", null, news.title)))))));
};

const imageUrl = url => {
  return 'https://data.joornalo.com' + url;
};

const mapStateToProps = state => ({
  topNews: state.news.topNews
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MostViewed1));

/***/ }),

/***/ "./components/newsBlock.js":
/*!*********************************!*\
  !*** ./components/newsBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NewsBlock = ({
  news,
  diaplayImage,
  displayDesc
}) => {
  let image = '',
      desc = '';

  if (typeof diaplayImage === 'undefined' || diaplayImage) {
    image = __jsx("img", {
      src: news.img
    });
  }

  if (typeof displayDesc === 'undefined' || displayDesc) {
    desc = __jsx("div", null, news.desc);
  }

  return __jsx("div", {
    className: "NewsBlock"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/section/[section]/[date]/[id]",
    as: news.url
  }, __jsx("a", null, __jsx("div", {
    className: "img"
  }, image), __jsx("h2", null, news.title), __jsx("div", {
    className: "desc"
  }, desc))));
};

const imageUrl = url => {
  return 'https://data.joornalo.com' + url;
};

/* harmony default export */ __webpack_exports__["default"] = (NewsBlock);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLW1vc3Qtdmlld2VkMS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ld3NCbG9jay5qcyJdLCJuYW1lcyI6WyJNb3N0Vmlld2VkMSIsInRvcE5ld3MiLCJtYXAiLCJuZXdzIiwiaW5kZXgiLCJ1cmwiLCJpbWciLCJ0aXRsZSIsImltYWdlVXJsIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0IiwiTmV3c0Jsb2NrIiwiZGlhcGxheUltYWdlIiwiZGlzcGxheURlc2MiLCJpbWFnZSIsImRlc2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQ25DLE1BQUksQ0FBQ0EsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUNkLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBNkIsa0NBQTdCLENBREYsRUFFRSxrQkFDR0EsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ1gsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQ0FBWDtBQUE0QyxNQUFFLEVBQUVELElBQUksQ0FBQ0UsR0FBckQ7QUFBMEQsT0FBRyxFQUFFRDtBQUEvRCxLQUNFLGtCQUNFLG9CQUFPQSxLQUFLLEdBQUcsQ0FBZixDQURGLEVBRUUsbUJBQ0lBLEtBQUssSUFBSSxDQUFWLEdBQWU7QUFBSyxPQUFHLEVBQUVELElBQUksQ0FBQ0c7QUFBZixJQUFmLEdBQXdDLElBRDNDLEVBRUUsaUJBQUlILElBQUksQ0FBQ0ksS0FBVCxDQUZGLENBRkYsQ0FERixDQURELENBREgsQ0FGRixDQURGO0FBa0JELENBcEJEOztBQXNCQSxNQUFNQyxRQUFRLEdBQUlILEdBQUQsSUFBUztBQUN4QixTQUFPLDhCQUE4QkEsR0FBckM7QUFDRCxDQUZEOztBQUlBLE1BQU1JLGVBQWUsR0FBR0MsS0FBSyxLQUFLO0FBQ2hDVCxTQUFPLEVBQUVTLEtBQUssQ0FBQ1AsSUFBTixDQUFXRjtBQURZLENBQUwsQ0FBN0I7O0FBSWVVLDBIQUFPLENBQ3BCRixlQURvQixDQUFQLENBRWJULFdBRmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTs7QUFFQSxNQUFNWSxTQUFTLEdBQUcsQ0FBQztBQUFFVCxNQUFGO0FBQVFVLGNBQVI7QUFBc0JDO0FBQXRCLENBQUQsS0FBeUM7QUFFekQsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFBQSxNQUNFQyxJQUFJLEdBQUcsRUFEVDs7QUFHQSxNQUFLLE9BQU9ILFlBQVAsS0FBd0IsV0FBekIsSUFBeUNBLFlBQTdDLEVBQTJEO0FBQ3pERSxTQUFLLEdBQUc7QUFBSyxTQUFHLEVBQUVaLElBQUksQ0FBQ0c7QUFBZixNQUFSO0FBQ0Q7O0FBQ0QsTUFBSyxPQUFPUSxXQUFQLEtBQXVCLFdBQXhCLElBQXdDQSxXQUE1QyxFQUF5RDtBQUN2REUsUUFBSSxHQUFHLG1CQUFNYixJQUFJLENBQUNhLElBQVgsQ0FBUDtBQUNEOztBQUNELFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0NBQVg7QUFBNEMsTUFBRSxFQUFFYixJQUFJLENBQUNFO0FBQXJELEtBQ0UsaUJBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHVSxLQURILENBREYsRUFJRSxrQkFBS1osSUFBSSxDQUFDSSxLQUFWLENBSkYsRUFLRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dTLElBREgsQ0FMRixDQURGLENBREYsQ0FERjtBQWVELENBMUJEOztBQTRCQSxNQUFNUixRQUFRLEdBQUlILEdBQUQsSUFBUztBQUN4QixTQUFPLDhCQUE4QkEsR0FBckM7QUFDRCxDQUZEOztBQUllTyx3RUFBZixFIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBOZXdzQmxvY2sgZnJvbSBcIi4vbmV3c0Jsb2NrLmpzXCI7XHJcblxyXG5jb25zdCBNb3N0Vmlld2VkMSA9ICh7IHRvcE5ld3MgfSkgPT4ge1xyXG4gIGlmICghdG9wTmV3cykgcmV0dXJuIG51bGxcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3N0LXZpZXdlZCBibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NraGVhZGVyXCI+PHNwYW4+TW9zdCBWaWV3ZWQ8L3NwYW4+PC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dG9wTmV3cy5tYXAoKG5ld3MsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlY3Rpb24vW3NlY3Rpb25dL1tkYXRlXS9baWRdXCIgYXM9e25ld3MudXJsfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntpbmRleCArIDF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7KGluZGV4ID09IDApID8gPGltZyBzcmM9e25ld3MuaW1nfSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8YT57bmV3cy50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGltYWdlVXJsID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiAnaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbScgKyB1cmw7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgdG9wTmV3czogc3RhdGUubmV3cy50b3BOZXdzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzXHJcbikoTW9zdFZpZXdlZDEpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTmV3c0Jsb2NrID0gKHsgbmV3cywgZGlhcGxheUltYWdlLCBkaXNwbGF5RGVzYyB9KSA9PiB7XHJcblxyXG4gIGxldCBpbWFnZSA9ICcnLFxyXG4gICAgZGVzYyA9ICcnO1xyXG5cclxuICBpZiAoKHR5cGVvZiBkaWFwbGF5SW1hZ2UgPT09ICd1bmRlZmluZWQnKSB8fCBkaWFwbGF5SW1hZ2UpIHtcclxuICAgIGltYWdlID0gPGltZyBzcmM9e25ld3MuaW1nfSAvPjtcclxuICB9XHJcbiAgaWYgKCh0eXBlb2YgZGlzcGxheURlc2MgPT09ICd1bmRlZmluZWQnKSB8fCBkaXNwbGF5RGVzYykge1xyXG4gICAgZGVzYyA9IDxkaXY+e25ld3MuZGVzY308L2Rpdj47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld3NCbG9ja1wiPlxyXG4gICAgICA8TGluayBocmVmPVwiL3NlY3Rpb24vW3NlY3Rpb25dL1tkYXRlXS9baWRdXCIgYXM9e25ld3MudXJsfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgIHtpbWFnZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyPntuZXdzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICAgICAge2Rlc2N9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgaW1hZ2VVcmwgPSAodXJsKSA9PiB7XHJcbiAgcmV0dXJuICdodHRwczovL2RhdGEuam9vcm5hbG8uY29tJyArIHVybDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0Jsb2NrOyJdLCJzb3VyY2VSb290IjoiIn0=