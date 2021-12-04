exports.ids = [14];
exports.modules = {

/***/ "./components/block-adv.js":
/*!*********************************!*\
  !*** ./components/block-adv.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
  const {
    0: first,
    1: setFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: adsrc,
    1: setAdsrc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); // const [contentWidth, setContentWidth] = useState(0)

  let loaded = false;
  let isIntersecting = false; // let banner = ''
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!id) {
      setId('adv' + Math.round(Math.random() * 100000));
    }

    if (!first && id) {
      setFirst(true);
      const div = document.getElementById(id);

      if (div) {
        // setContentWidth(div.offsetWidth)
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
    }
  });

  const safariIssue = () => {
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


  const preLoad = () => {
    //console.log('Ready to load...............................', id)
    if (isIntersecting) {
      setMsg('Loaded');
      let num = Math.floor(Math.random() * 4);
      let bb = ['a', 'b', 'c', 'd'];
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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLWFkdi5qcyJdLCJuYW1lcyI6WyJBZHYiLCJjb250ZXh0IiwibXNnIiwic2V0TXNnIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwiZmlyc3QiLCJzZXRGaXJzdCIsImFkc3JjIiwic2V0QWRzcmMiLCJsb2FkZWQiLCJpc0ludGVyc2VjdGluZyIsInVzZUVmZmVjdCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImRpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9ic2VydmVyQ2hpbGQiLCJ1bm9ic2VydmUiLCJ0YXJnZXQiLCJwcmVMb2FkIiwib2JzZXJ2ZSIsImVyciIsInNhZmFyaUlzc3VlIiwibnVtIiwiZmxvb3IiLCJiYiIsInBhcmFtcyIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLEdBQUcsR0FBSUMsT0FBRCxJQUFhO0FBQ3ZCLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkMsc0RBQVEsQ0FBQyxLQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEVBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWNGLHNEQUFRLENBQUMsSUFBRCxDQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CTixzREFBUSxDQUFDLElBQUQsQ0FBbEMsQ0FKdUIsQ0FLdkI7O0FBRUEsTUFBSU8sTUFBTSxHQUFHLEtBQWI7QUFDQSxNQUFJQyxjQUFjLEdBQUcsS0FBckIsQ0FSdUIsQ0FTdkI7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHRUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSSxDQUFDUixFQUFMLEVBQVM7QUFDUEMsV0FBSyxDQUFDLFFBQVFRLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsTUFBM0IsQ0FBVCxDQUFMO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDVCxLQUFELElBQVVGLEVBQWQsRUFBa0I7QUFDaEJHLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDQSxZQUFNUyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QmQsRUFBeEIsQ0FBWjs7QUFDQSxVQUFJWSxHQUFKLEVBQVM7QUFDUDtBQUVBLFlBQUk7QUFDRixjQUFJRyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUIsQ0FBQ0MsT0FBRCxFQUFVQyxhQUFWLEtBQTRCO0FBQ2xFLGdCQUFJLENBQUNaLE1BQUQsSUFBV1csT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXVixjQUExQixFQUEwQztBQUN4Q0Qsb0JBQU0sR0FBRyxJQUFUO0FBQ0FDLDRCQUFjLEdBQUcsSUFBakI7QUFDQVcsMkJBQWEsQ0FBQ0MsU0FBZCxDQUF3QkYsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxNQUFuQztBQUNBQyxxQkFBTztBQUNSO0FBQ0YsV0FQYyxDQUFmO0FBUUFOLGtCQUFRLENBQUNPLE9BQVQsQ0FBaUJWLEdBQWpCO0FBQ0QsU0FWRCxDQVVFLE9BQU9XLEdBQVAsRUFBWTtBQUNaQyxxQkFBVztBQUNaO0FBQ0Y7QUFDRjtBQUVGLEdBMUJRLENBQVQ7O0FBNEJBLFFBQU1BLFdBQVcsR0FBRyxNQUFNO0FBQ3hCLFFBQUksQ0FBQ2xCLE1BQUwsRUFBYTtBQUNYQSxZQUFNLEdBQUcsSUFBVDtBQUNBQyxvQkFBYyxHQUFHLElBQWpCO0FBQ0FjLGFBQU87QUFDUjtBQUNGLEdBTkQ7QUFRQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRSxRQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNwQjtBQUNBLFFBQUlkLGNBQUosRUFBb0I7QUFFbEJULFlBQU0sQ0FBQyxRQUFELENBQU47QUFDQSxVQUFJMkIsR0FBRyxHQUFHaEIsSUFBSSxDQUFDaUIsS0FBTCxDQUFXakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQVY7QUFDQSxVQUFJZ0IsRUFBRSxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQVQ7QUFDQXRCLGNBQVEsQ0FBQyxtQ0FBbUNULE9BQU8sQ0FBQ2dDLE1BQVIsQ0FBZUMsSUFBbEQsR0FBeURGLEVBQUUsQ0FBQ0YsR0FBRCxDQUEzRCxHQUFtRSxNQUFwRSxDQUFSO0FBQ0Q7QUFDRixHQVREOztBQVdBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixNQUFFLEVBQUV6QjtBQUFoQyxLQUNFO0FBQUssT0FBRyxFQUFFSTtBQUFWLElBREYsQ0FERjtBQUtELENBMUZEOztBQTJGQTtBQUFDO0FBQTJDO0FBRTdCVCxrRUFBZixFIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFkdiA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKCctLS0nKVxyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZmlyc3QsIHNldEZpcnN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Fkc3JjLCBzZXRBZHNyY10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIC8vIGNvbnN0IFtjb250ZW50V2lkdGgsIHNldENvbnRlbnRXaWR0aF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBsZXQgbG9hZGVkID0gZmFsc2U7XHJcbiAgbGV0IGlzSW50ZXJzZWN0aW5nID0gZmFsc2U7XHJcbiAgLy8gbGV0IGJhbm5lciA9ICcnXHJcblxyXG4gIC8vIGlmIChjb250ZXh0LnBhcmFtcykge1xyXG4gIC8vICAgYmFubmVyID0gY29udGV4dC5wYXJhbXMuc2l6ZTtcclxuICAvLyB9XHJcblxyXG4gIC8qXHJcbiAgMzAweDI1MCAtIE1lZGl1bSBSZWN0YW5nbGUgLSA0MCVcclxuICA3Mjh4OTAgLSBMZWFkZXJib2FyZCAtIDI1JVxyXG4gIDE2MHg2MDAgLSBXaWRlIFNreXNjcmFwZXIgLSAxMiVcclxuICAzMDB4NjAwIC0gSGFsZiBQYWdlIC0gNSVcclxuICA5NzB4MjUwIC0gQmlsbGJvYXJkIC0gMSVcclxuICAxMjB4NjAwIC0gU2t5c2NyYXBlclxyXG5cclxuICAzMjB4NTAgLSBNb2JpbGUgTGVhZGVyYm9hcmQgLSAxMiVcclxuICAzMjB4MzIwIC0gTW9iaWxlIEZ1bGwgUGFnZSBGbGV4IC0gMSVcclxuICAzMjB4MTAwIC0gTGFyZ2UgTW9iaWxlXHJcbiAgKi9cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgc2V0SWQoJ2FkdicgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKVxyXG4gICAgfVxyXG4gICAgaWYgKCFmaXJzdCAmJiBpZCkge1xyXG4gICAgICBzZXRGaXJzdCh0cnVlKVxyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgIGlmIChkaXYpIHtcclxuICAgICAgICAvLyBzZXRDb250ZW50V2lkdGgoZGl2Lm9mZnNldFdpZHRoKVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlckNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbG9hZGVkICYmIGVudHJpZXNbMF0uaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGlzSW50ZXJzZWN0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBvYnNlcnZlckNoaWxkLnVub2JzZXJ2ZShlbnRyaWVzWzBdLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgcHJlTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZGl2KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHNhZmFyaUlzc3VlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzYWZhcmlJc3N1ZSA9ICgpID0+IHtcclxuICAgIGlmICghbG9hZGVkKSB7XHJcbiAgICAgIGxvYWRlZCA9IHRydWU7XHJcbiAgICAgIGlzSW50ZXJzZWN0aW5nID0gdHJ1ZTtcclxuICAgICAgcHJlTG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuIDMwMHgyNTAgLSBNZWRpdW0gUmVjdGFuZ2xlIC0gNDAlXHJcbiA3Mjh4OTAgLSBMZWFkZXJib2FyZCAtIDI1JVxyXG4gMTYweDYwMCAtIFdpZGUgU2t5c2NyYXBlciAtIDEyJVxyXG4gMzAweDYwMCAtIEhhbGYgUGFnZSAtIDUlXHJcbiAxMjB4NjAwIC0gU2t5c2NyYXBlclxyXG5cclxuICA5NzB4MjUwIC0gQmlsbGJvYXJkIC0gMSVcclxuICovXHJcblxyXG4gIGNvbnN0IHByZUxvYWQgPSAoKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdSZWFkeSB0byBsb2FkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLicsIGlkKVxyXG4gICAgaWYgKGlzSW50ZXJzZWN0aW5nKSB7XHJcblxyXG4gICAgICBzZXRNc2coJ0xvYWRlZCcpXHJcbiAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KVxyXG4gICAgICBsZXQgYmIgPSBbJ2EnLCAnYicsICdjJywgJ2QnXVxyXG4gICAgICBzZXRBZHNyYygnaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9hZHMvJyArIGNvbnRleHQucGFyYW1zLnNpemUgKyBiYltudW1dICsgJy5qcGcnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdhZHYgZXVyZWthJyBpZD17aWR9PlxyXG4gICAgICA8aW1nIHNyYz17YWRzcmN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuey8qIEFkIHtiYW5uZXJ9ICh7Y29udGVudFdpZHRofSk6IHttc2d9ICovIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkdjsiXSwic291cmNlUm9vdCI6IiJ9