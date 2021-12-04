exports.ids = [2];
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

/***/ }),

/***/ "./components/block-news1.js":
/*!***********************************!*\
  !*** ./components/block-news1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_adv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-adv */ "./components/block-adv.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const news1 = ({
  data
}) => {
  const AdParams = {
    size: '160x600'
  }; // componentDidMount(() => {
  //   console.log('componentDidMount')
  // });

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', updateImageWidths);
    updateImageWidths();
  }, []);
  let tmp = unescape(data.text);
  let find;
  find = tmp.split('<embed id="');

  for (let i = find.length - 1; i--;) {
    let mediaNum = parseInt(find[i + 1].charAt(0));

    if (data.media[mediaNum - 1]) {
      find[i + 1] = '<div class="embed">' + data.media[mediaNum - 1].embed + '</div>' + find[i + 1].substring(5);
    } else {
      find[i + 1] = find[i + 1].substring(5);
    }
  }

  tmp = find.join('');
  find = tmp.split('<image id="');

  for (let i = find.length - 1; i--;) {
    let imageNum = parseInt(find[i + 1].charAt(0));

    if (data.images[imageNum - 1]) {
      find[i + 1] = '<img src="https://data.joornalo.com/news/4/c/' + data.images[imageNum - 1].url + '" />' + find[i + 1].substring(5);
    } else {
      find[i + 1] = find[i + 1].substring(5);
    }
  }

  let modText = html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(find.join(''));
  const mainImgUrl = 'https://data.joornalo.com/news/4/c/' + data.images[0].url;

  const updateImageWidths = () => {
    try {
      //console.log('updateImageWidths********')
      const contentWidth = document.querySelector(".newsContent div").offsetWidth; //console.log(contentWidth);

      let embed = document.querySelectorAll('.newsContent .embed iframe');

      for (let x = 0; x < embed.length; x++) {
        embed[x].width = contentWidth; //embed[x].height = contentWidth * .5625;
      }

      embed = document.querySelectorAll('.newsContent .embed .twitter-tweet'); //console.log(embed)

      for (let x = 0; x < embed.length; x++) {
        embed[x].style["width"] = "100%";
      }
    } catch (er) {
      window.removeEventListener('resize', updateImageWidths, false);
    }
  };

  return __jsx("div", {
    className: "news"
  }, __jsx("h2", null, data.title), __jsx("img", {
    src: mainImgUrl
  }), __jsx("div", {
    className: "row row-m-column"
  }, __jsx("div", {
    className: "col-220 col-m-full"
  }, __jsx("div", {
    className: "details"
  }, "Details"), __jsx(_block_adv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    params: AdParams
  })), __jsx("div", {
    className: "newsContent col-full-220 col-m-auto"
  }, __jsx("div", {
    suppressHydrationWarning: true
  }, modText))));
};

/* harmony default export */ __webpack_exports__["default"] = (news1);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLWFkdi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLW5ld3MxLmpzIl0sIm5hbWVzIjpbIkFkdiIsImNvbnRleHQiLCJtc2ciLCJzZXRNc2ciLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJmaXJzdCIsInNldEZpcnN0IiwiYWRzcmMiLCJzZXRBZHNyYyIsImxvYWRlZCIsImlzSW50ZXJzZWN0aW5nIiwidXNlRWZmZWN0IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXJDaGlsZCIsInVub2JzZXJ2ZSIsInRhcmdldCIsInByZUxvYWQiLCJvYnNlcnZlIiwiZXJyIiwic2FmYXJpSXNzdWUiLCJudW0iLCJmbG9vciIsImJiIiwicGFyYW1zIiwic2l6ZSIsIm5ld3MxIiwiZGF0YSIsIkFkUGFyYW1zIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZUltYWdlV2lkdGhzIiwidG1wIiwidW5lc2NhcGUiLCJ0ZXh0IiwiZmluZCIsInNwbGl0IiwiaSIsImxlbmd0aCIsIm1lZGlhTnVtIiwicGFyc2VJbnQiLCJjaGFyQXQiLCJtZWRpYSIsImVtYmVkIiwic3Vic3RyaW5nIiwiam9pbiIsImltYWdlTnVtIiwiaW1hZ2VzIiwidXJsIiwibW9kVGV4dCIsIlBhcnNlciIsIm1haW5JbWdVcmwiLCJjb250ZW50V2lkdGgiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0V2lkdGgiLCJxdWVyeVNlbGVjdG9yQWxsIiwieCIsIndpZHRoIiwic3R5bGUiLCJlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsR0FBRyxHQUFJQyxPQUFELElBQWE7QUFDdkIs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IjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBZHYgPSAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZSgnLS0tJylcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFthZHNyYywgc2V0QWRzcmNdID0gdXNlU3RhdGUobnVsbClcclxuICAvLyBjb25zdCBbY29udGVudFdpZHRoLCBzZXRDb250ZW50V2lkdGhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgbGV0IGxvYWRlZCA9IGZhbHNlO1xyXG4gIGxldCBpc0ludGVyc2VjdGluZyA9IGZhbHNlO1xyXG4gIC8vIGxldCBiYW5uZXIgPSAnJ1xyXG5cclxuICAvLyBpZiAoY29udGV4dC5wYXJhbXMpIHtcclxuICAvLyAgIGJhbm5lciA9IGNvbnRleHQucGFyYW1zLnNpemU7XHJcbiAgLy8gfVxyXG5cclxuICAvKlxyXG4gIDMwMHgyNTAgLSBNZWRpdW0gUmVjdGFuZ2xlIC0gNDAlXHJcbiAgNzI4eDkwIC0gTGVhZGVyYm9hcmQgLSAyNSVcclxuICAxNjB4NjAwIC0gV2lkZSBTa3lzY3JhcGVyIC0gMTIlXHJcbiAgMzAweDYwMCAtIEhhbGYgUGFnZSAtIDUlXHJcbiAgOTcweDI1MCAtIEJpbGxib2FyZCAtIDElXHJcbiAgMTIweDYwMCAtIFNreXNjcmFwZXJcclxuXHJcbiAgMzIweDUwIC0gTW9iaWxlIExlYWRlcmJvYXJkIC0gMTIlXHJcbiAgMzIweDMyMCAtIE1vYmlsZSBGdWxsIFBhZ2UgRmxleCAtIDElXHJcbiAgMzIweDEwMCAtIExhcmdlIE1vYmlsZVxyXG4gICovXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHNldElkKCdhZHYnICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSlcclxuICAgIH1cclxuICAgIGlmICghZmlyc3QgJiYgaWQpIHtcclxuICAgICAgc2V0Rmlyc3QodHJ1ZSlcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICBpZiAoZGl2KSB7XHJcbiAgICAgICAgLy8gc2V0Q29udGVudFdpZHRoKGRpdi5vZmZzZXRXaWR0aClcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXJDaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWxvYWRlZCAmJiBlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBpc0ludGVyc2VjdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgb2JzZXJ2ZXJDaGlsZC51bm9ic2VydmUoZW50cmllc1swXS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgIHByZUxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRpdik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBzYWZhcmlJc3N1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2FmYXJpSXNzdWUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICBpc0ludGVyc2VjdGluZyA9IHRydWU7XHJcbiAgICAgIHByZUxvYWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qXHJcbiAzMDB4MjUwIC0gTWVkaXVtIFJlY3RhbmdsZSAtIDQwJVxyXG4gNzI4eDkwIC0gTGVhZGVyYm9hcmQgLSAyNSVcclxuIDE2MHg2MDAgLSBXaWRlIFNreXNjcmFwZXIgLSAxMiVcclxuIDMwMHg2MDAgLSBIYWxmIFBhZ2UgLSA1JVxyXG4gMTIweDYwMCAtIFNreXNjcmFwZXJcclxuXHJcbiAgOTcweDI1MCAtIEJpbGxib2FyZCAtIDElXHJcbiAqL1xyXG5cclxuICBjb25zdCBwcmVMb2FkID0gKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZygnUmVhZHkgdG8gbG9hZC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4nLCBpZClcclxuICAgIGlmIChpc0ludGVyc2VjdGluZykge1xyXG5cclxuICAgICAgc2V0TXNnKCdMb2FkZWQnKVxyXG4gICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcclxuICAgICAgbGV0IGJiID0gWydhJywgJ2InLCAnYycsICdkJ11cclxuICAgICAgc2V0QWRzcmMoJ2h0dHBzOi8vZGF0YS5qb29ybmFsby5jb20vYWRzLycgKyBjb250ZXh0LnBhcmFtcy5zaXplICsgYmJbbnVtXSArICcuanBnJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWR2IGV1cmVrYScgaWQ9e2lkfT5cclxuICAgICAgPGltZyBzcmM9e2Fkc3JjfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbnsvKiBBZCB7YmFubmVyfSAoe2NvbnRlbnRXaWR0aH0pOiB7bXNnfSAqLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHY7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFyc2VyLCB7IGRvbVRvUmVhY3QsIGh0bWxUb0RPTSB9IGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcclxuaW1wb3J0IEFkdiBmcm9tICcuL2Jsb2NrLWFkdidcclxuXHJcbmNvbnN0IG5ld3MxID0gKHsgZGF0YSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IEFkUGFyYW1zID0ge1xyXG4gICAgc2l6ZTogJzE2MHg2MDAnXHJcbiAgfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRNb3VudCgoKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnY29tcG9uZW50RGlkTW91bnQnKVxyXG4gIC8vIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUltYWdlV2lkdGhzKTtcclxuICAgIHVwZGF0ZUltYWdlV2lkdGhzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBsZXQgdG1wID0gdW5lc2NhcGUoZGF0YS50ZXh0KTtcclxuICBsZXQgZmluZDtcclxuICBmaW5kID0gdG1wLnNwbGl0KCc8ZW1iZWQgaWQ9XCInKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IGZpbmQubGVuZ3RoIC0gMTsgaS0tOykge1xyXG4gICAgbGV0IG1lZGlhTnVtID0gcGFyc2VJbnQoZmluZFtpICsgMV0uY2hhckF0KDApKTtcclxuICAgIGlmIChkYXRhLm1lZGlhW21lZGlhTnVtIC0gMV0pIHtcclxuICAgICAgZmluZFtpICsgMV0gPSAnPGRpdiBjbGFzcz1cImVtYmVkXCI+JyArIGRhdGEubWVkaWFbbWVkaWFOdW0gLSAxXS5lbWJlZCArICc8L2Rpdj4nICsgZmluZFtpICsgMV0uc3Vic3RyaW5nKDUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmluZFtpICsgMV0gPSBmaW5kW2kgKyAxXS5zdWJzdHJpbmcoNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0bXAgPSBmaW5kLmpvaW4oJycpO1xyXG4gIGZpbmQgPSB0bXAuc3BsaXQoJzxpbWFnZSBpZD1cIicpO1xyXG4gIGZvciAobGV0IGkgPSBmaW5kLmxlbmd0aCAtIDE7IGktLTspIHtcclxuICAgIGxldCBpbWFnZU51bSA9IHBhcnNlSW50KGZpbmRbaSArIDFdLmNoYXJBdCgwKSk7XHJcbiAgICBpZiAoZGF0YS5pbWFnZXNbaW1hZ2VOdW0gLSAxXSkge1xyXG4gICAgICBmaW5kW2kgKyAxXSA9ICc8aW1nIHNyYz1cImh0dHBzOi8vZGF0YS5qb29ybmFsby5jb20vbmV3cy80L2MvJyArIGRhdGEuaW1hZ2VzW2ltYWdlTnVtIC0gMV0udXJsICsgJ1wiIC8+JyArIGZpbmRbaSArIDFdLnN1YnN0cmluZyg1KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbmRbaSArIDFdID0gZmluZFtpICsgMV0uc3Vic3RyaW5nKDUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IG1vZFRleHQgPSBQYXJzZXIoZmluZC5qb2luKCcnKSk7XHJcblxyXG4gIGNvbnN0IG1haW5JbWdVcmwgPSAnaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9uZXdzLzQvYy8nICsgZGF0YS5pbWFnZXNbMF0udXJsO1xyXG5cclxuICBjb25zdCB1cGRhdGVJbWFnZVdpZHRocyA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ3VwZGF0ZUltYWdlV2lkdGhzKioqKioqKionKVxyXG4gICAgICBjb25zdCBjb250ZW50V2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld3NDb250ZW50IGRpdlwiKS5vZmZzZXRXaWR0aDtcclxuICAgICAgLy9jb25zb2xlLmxvZyhjb250ZW50V2lkdGgpO1xyXG4gICAgICBsZXQgZW1iZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3c0NvbnRlbnQgLmVtYmVkIGlmcmFtZScpXHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZW1iZWQubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICBlbWJlZFt4XS53aWR0aCA9IGNvbnRlbnRXaWR0aDtcclxuICAgICAgICAvL2VtYmVkW3hdLmhlaWdodCA9IGNvbnRlbnRXaWR0aCAqIC41NjI1O1xyXG4gICAgICB9XHJcbiAgICAgIGVtYmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld3NDb250ZW50IC5lbWJlZCAudHdpdHRlci10d2VldCcpXHJcbiAgICAgIC8vY29uc29sZS5sb2coZW1iZWQpXHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZW1iZWQubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICBlbWJlZFt4XS5zdHlsZVtcIndpZHRoXCJdID0gXCIxMDAlXCI7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVyKSB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVJbWFnZVdpZHRocywgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c1wiPlxyXG4gICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgPGltZyBzcmM9e21haW5JbWdVcmx9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1tLWNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIyMCBjb2wtbS1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgRGV0YWlsc1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QWR2IHBhcmFtcz17QWRQYXJhbXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzQ29udGVudCBjb2wtZnVsbC0yMjAgY29sLW0tYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc9e3RydWV9Pnttb2RUZXh0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld3MxO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9