exports.ids = [1];
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

/***/ "./components/block-news-mobile1.js":
/*!******************************************!*\
  !*** ./components/block-news-mobile1.js ***!
  \******************************************/
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updateImageWidths();
    window.addEventListener('resize', updateImageWidths);
  });
  const AdParams = {
    size: '320x50'
  }; // const modText = Parser(data.text, {
  //   replace: (domNode) => {
  //     if (domNode.name === 'embed') {
  //       return <div className="embed">{Parser(data.media[domNode.attribs.id - 1].embed)}</div>;
  //     }
  //     if (domNode.name === 'image') {
  //       return <img src={Parser('https://data.joornalo.com/news/4/c/' + data.images[domNode.attribs.id - 1].url)} />
  //     }
  //   }
  // });

  let tmp = unescape(data.text);
  let find = tmp.split('<embed id="');

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

  const modText = html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(find.join(''));
  const mainImgUrl = 'https://data.joornalo.com/news/4/c/' + data.images[0].url;

  const updateImageWidths = () => {
    const contentWidth = document.querySelector(".newsContent div").offsetWidth; //console.log(contentWidth);

    const embed = document.querySelectorAll('.newsContent .embed iframe');

    for (let x = 0; x < embed.length; x++) {
      embed[x].width = contentWidth;
      embed[x].height = contentWidth * .5625;
    }
  };

  return __jsx("div", {
    className: "news"
  }, __jsx("h2", null, data.title), __jsx("img", {
    src: mainImgUrl
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("div", {
    className: "details"
  }, "Details"), __jsx(_block_adv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    params: AdParams
  })), __jsx("div", {
    className: "newsContent col-12"
  }, __jsx("div", null, modText))));
};

/* harmony default export */ __webpack_exports__["default"] = (news1);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLWFkdi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2NrLW5ld3MtbW9iaWxlMS5qcyJdLCJuYW1lcyI6WyJBZHYiLCJjb250ZXh0IiwibXNnIiwic2V0TXNnIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwiZmlyc3QiLCJzZXRGaXJzdCIsImFkc3JjIiwic2V0QWRzcmMiLCJsb2FkZWQiLCJpc0ludGVyc2VjdGluZyIsInVzZUVmZmVjdCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImRpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9ic2VydmVyQ2hpbGQiLCJ1bm9ic2VydmUiLCJ0YXJnZXQiLCJwcmVMb2FkIiwib2JzZXJ2ZSIsImVyciIsInNhZmFyaUlzc3VlIiwibnVtIiwiZmxvb3IiLCJiYiIsInBhcmFtcyIsInNpemUiLCJuZXdzMSIsImRhdGEiLCJ1cGRhdGVJbWFnZVdpZHRocyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJBZFBhcmFtcyIsInRtcCIsInVuZXNjYXBlIiwidGV4dCIsImZpbmQiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJtZWRpYU51bSIsInBhcnNlSW50IiwiY2hhckF0IiwibWVkaWEiLCJlbWJlZCIsInN1YnN0cmluZyIsImpvaW4iLCJpbWFnZU51bSIsImltYWdlcyIsInVybCIsIm1vZFRleHQiLCJQYXJzZXIiLCJtYWluSW1nVXJsIiwiY29udGVudFdpZHRoIiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFdpZHRoIiwicXVlcnlTZWxlY3RvckFsbCIsIngiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUlDLE9BQUQsSUFBYTtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsR0FB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R2xDLFFBQVEsQ0FBQzhDLGdCQUFULENBQTBCLDRCQUExQixDQUFkOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2IsS0FBSyxDQUFDTCxNQUExQixFQUFrQ2tCLENBQUMsRUFBbkMsRUFBdUM7QUFDckNiLFdBQUssQ0FBQ2EsQ0FBRCxDQUFMLENBQVNDLEtBQVQsR0FBaUJMLFlBQWpCO0FBQ0FULFdBQUssQ0FBQ2EsQ0FBRCxDQUFMLENBQVNFLE1BQVQsR0FBa0JOLFlBQVksR0FBRyxLQUFqQztBQUNEO0FBQ0YsR0FSRDs7QUFXQSxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxrQkFBS3pCLElBQUksQ0FBQ2dDLEtBQVYsQ0FERixFQUVFO0FBQUssT0FBRyxFQUFFUjtBQUFWLElBRkYsRUFHRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsZUFERixFQUlFLE1BQUMsa0RBQUQ7QUFBSyxVQUFNLEVBQUVwQjtBQUFiLElBSkYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxtQkFBTWtCLE9BQU4sQ0FERixDQVBGLENBSEYsQ0FERjtBQWtCRCxDQS9FRDs7QUFpRmV2QixvRUFBZixFIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQWR2ID0gKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoJy0tLScpXHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtmaXJzdCwgc2V0Rmlyc3RdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbYWRzcmMsIHNldEFkc3JjXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgLy8gY29uc3QgW2NvbnRlbnRXaWR0aCwgc2V0Q29udGVudFdpZHRoXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGxldCBsb2FkZWQgPSBmYWxzZTtcclxuICBsZXQgaXNJbnRlcnNlY3RpbmcgPSBmYWxzZTtcclxuICAvLyBsZXQgYmFubmVyID0gJydcclxuXHJcbiAgLy8gaWYgKGNvbnRleHQucGFyYW1zKSB7XHJcbiAgLy8gICBiYW5uZXIgPSBjb250ZXh0LnBhcmFtcy5zaXplO1xyXG4gIC8vIH1cclxuXHJcbiAgLypcclxuICAzMDB4MjUwIC0gTWVkaXVtIFJlY3RhbmdsZSAtIDQwJVxyXG4gIDcyOHg5MCAtIExlYWRlcmJvYXJkIC0gMjUlXHJcbiAgMTYweDYwMCAtIFdpZGUgU2t5c2NyYXBlciAtIDEyJVxyXG4gIDMwMHg2MDAgLSBIYWxmIFBhZ2UgLSA1JVxyXG4gIDk3MHgyNTAgLSBCaWxsYm9hcmQgLSAxJVxyXG4gIDEyMHg2MDAgLSBTa3lzY3JhcGVyXHJcblxyXG4gIDMyMHg1MCAtIE1vYmlsZSBMZWFkZXJib2FyZCAtIDEyJVxyXG4gIDMyMHgzMjAgLSBNb2JpbGUgRnVsbCBQYWdlIEZsZXggLSAxJVxyXG4gIDMyMHgxMDAgLSBMYXJnZSBNb2JpbGVcclxuICAqL1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICBzZXRJZCgnYWR2JyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpXHJcbiAgICB9XHJcbiAgICBpZiAoIWZpcnN0ICYmIGlkKSB7XHJcbiAgICAgIHNldEZpcnN0KHRydWUpXHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgaWYgKGRpdikge1xyXG4gICAgICAgIC8vIHNldENvbnRlbnRXaWR0aChkaXYub2Zmc2V0V2lkdGgpXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyQ2hpbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFsb2FkZWQgJiYgZW50cmllc1swXS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgIGxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgaXNJbnRlcnNlY3RpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIG9ic2VydmVyQ2hpbGQudW5vYnNlcnZlKGVudHJpZXNbMF0udGFyZ2V0KTtcclxuICAgICAgICAgICAgICBwcmVMb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkaXYpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgc2FmYXJpSXNzdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNhZmFyaUlzc3VlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkZWQpIHtcclxuICAgICAgbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgaXNJbnRlcnNlY3RpbmcgPSB0cnVlO1xyXG4gICAgICBwcmVMb2FkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gMzAweDI1MCAtIE1lZGl1bSBSZWN0YW5nbGUgLSA0MCVcclxuIDcyOHg5MCAtIExlYWRlcmJvYXJkIC0gMjUlXHJcbiAxNjB4NjAwIC0gV2lkZSBTa3lzY3JhcGVyIC0gMTIlXHJcbiAzMDB4NjAwIC0gSGFsZiBQYWdlIC0gNSVcclxuIDEyMHg2MDAgLSBTa3lzY3JhcGVyXHJcblxyXG4gIDk3MHgyNTAgLSBCaWxsYm9hcmQgLSAxJVxyXG4gKi9cclxuXHJcbiAgY29uc3QgcHJlTG9hZCA9ICgpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coJ1JlYWR5IHRvIGxvYWQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uJywgaWQpXHJcbiAgICBpZiAoaXNJbnRlcnNlY3RpbmcpIHtcclxuXHJcbiAgICAgIHNldE1zZygnTG9hZGVkJylcclxuICAgICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXHJcbiAgICAgIGxldCBiYiA9IFsnYScsICdiJywgJ2MnLCAnZCddXHJcbiAgICAgIHNldEFkc3JjKCdodHRwczovL2RhdGEuam9vcm5hbG8uY29tL2Fkcy8nICsgY29udGV4dC5wYXJhbXMuc2l6ZSArIGJiW251bV0gKyAnLmpwZycpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2FkdiBldXJla2EnIGlkPXtpZH0+XHJcbiAgICAgIDxpbWcgc3JjPXthZHNyY30gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG57LyogQWQge2Jhbm5lcn0gKHtjb250ZW50V2lkdGh9KToge21zZ30gKi8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWR2OyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXJzZXIsIHsgZG9tVG9SZWFjdCwgaHRtbFRvRE9NIH0gZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xyXG5pbXBvcnQgQWR2IGZyb20gJy4vYmxvY2stYWR2J1xyXG5cclxuY29uc3QgbmV3czEgPSAoeyBkYXRhIH0pID0+IHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZUltYWdlV2lkdGhzKClcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVJbWFnZVdpZHRocyk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IEFkUGFyYW1zID0ge1xyXG4gICAgc2l6ZTogJzMyMHg1MCdcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IG1vZFRleHQgPSBQYXJzZXIoZGF0YS50ZXh0LCB7XHJcbiAgLy8gICByZXBsYWNlOiAoZG9tTm9kZSkgPT4ge1xyXG4gIC8vICAgICBpZiAoZG9tTm9kZS5uYW1lID09PSAnZW1iZWQnKSB7XHJcbiAgLy8gICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZW1iZWRcIj57UGFyc2VyKGRhdGEubWVkaWFbZG9tTm9kZS5hdHRyaWJzLmlkIC0gMV0uZW1iZWQpfTwvZGl2PjtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBpZiAoZG9tTm9kZS5uYW1lID09PSAnaW1hZ2UnKSB7XHJcbiAgLy8gICAgICAgcmV0dXJuIDxpbWcgc3JjPXtQYXJzZXIoJ2h0dHBzOi8vZGF0YS5qb29ybmFsby5jb20vbmV3cy80L2MvJyArIGRhdGEuaW1hZ2VzW2RvbU5vZGUuYXR0cmlicy5pZCAtIDFdLnVybCl9IC8+XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9KTtcclxuXHJcbiAgbGV0IHRtcCA9IHVuZXNjYXBlKGRhdGEudGV4dCk7XHJcbiAgbGV0IGZpbmQgPSB0bXAuc3BsaXQoJzxlbWJlZCBpZD1cIicpO1xyXG5cclxuICBmb3IgKGxldCBpID0gZmluZC5sZW5ndGggLSAxOyBpLS07KSB7XHJcbiAgICBsZXQgbWVkaWFOdW0gPSBwYXJzZUludChmaW5kW2kgKyAxXS5jaGFyQXQoMCkpO1xyXG4gICAgaWYgKGRhdGEubWVkaWFbbWVkaWFOdW0gLSAxXSkge1xyXG4gICAgICBmaW5kW2kgKyAxXSA9ICc8ZGl2IGNsYXNzPVwiZW1iZWRcIj4nICsgZGF0YS5tZWRpYVttZWRpYU51bSAtIDFdLmVtYmVkICsgJzwvZGl2PicgKyBmaW5kW2kgKyAxXS5zdWJzdHJpbmcoNSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaW5kW2kgKyAxXSA9IGZpbmRbaSArIDFdLnN1YnN0cmluZyg1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRtcCA9IGZpbmQuam9pbignJyk7XHJcbiAgZmluZCA9IHRtcC5zcGxpdCgnPGltYWdlIGlkPVwiJyk7XHJcbiAgZm9yIChsZXQgaSA9IGZpbmQubGVuZ3RoIC0gMTsgaS0tOykge1xyXG4gICAgbGV0IGltYWdlTnVtID0gcGFyc2VJbnQoZmluZFtpICsgMV0uY2hhckF0KDApKTtcclxuICAgIGlmIChkYXRhLmltYWdlc1tpbWFnZU51bSAtIDFdKSB7XHJcbiAgICAgIGZpbmRbaSArIDFdID0gJzxpbWcgc3JjPVwiaHR0cHM6Ly9kYXRhLmpvb3JuYWxvLmNvbS9uZXdzLzQvYy8nICsgZGF0YS5pbWFnZXNbaW1hZ2VOdW0gLSAxXS51cmwgKyAnXCIgLz4nICsgZmluZFtpICsgMV0uc3Vic3RyaW5nKDUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmluZFtpICsgMV0gPSBmaW5kW2kgKyAxXS5zdWJzdHJpbmcoNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2RUZXh0ID0gUGFyc2VyKGZpbmQuam9pbignJykpO1xyXG5cclxuICBjb25zdCBtYWluSW1nVXJsID0gJ2h0dHBzOi8vZGF0YS5qb29ybmFsby5jb20vbmV3cy80L2MvJyArIGRhdGEuaW1hZ2VzWzBdLnVybDtcclxuXHJcblxyXG4gIGNvbnN0IHVwZGF0ZUltYWdlV2lkdGhzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudFdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdzQ29udGVudCBkaXZcIikub2Zmc2V0V2lkdGg7XHJcbiAgICAvL2NvbnNvbGUubG9nKGNvbnRlbnRXaWR0aCk7XHJcbiAgICBjb25zdCBlbWJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdzQ29udGVudCAuZW1iZWQgaWZyYW1lJylcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZW1iZWQubGVuZ3RoOyB4KyspIHtcclxuICAgICAgZW1iZWRbeF0ud2lkdGggPSBjb250ZW50V2lkdGg7XHJcbiAgICAgIGVtYmVkW3hdLmhlaWdodCA9IGNvbnRlbnRXaWR0aCAqIC41NjI1O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NcIj5cclxuICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgIDxpbWcgc3JjPXttYWluSW1nVXJsfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgRGV0YWlsc1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QWR2IHBhcmFtcz17QWRQYXJhbXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzQ29udGVudCBjb2wtMTJcIj5cclxuICAgICAgICAgIDxkaXY+e21vZFRleHR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld3MxO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9