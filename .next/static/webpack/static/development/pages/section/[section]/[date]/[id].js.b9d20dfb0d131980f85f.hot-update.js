webpackHotUpdate("static\\development\\pages\\section\\[section]\\[date]\\[id].js",{

/***/ "./components lazy recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./components lazy ^\.\/.*$ namespace object ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Header": [
		"./components/Header.js"
	],
	"./Header.js": [
		"./components/Header.js"
	],
	"./MyLayout": [
		"./components/MyLayout.js"
	],
	"./MyLayout.js": [
		"./components/MyLayout.js"
	],
	"./Template": [
		"./components/Template.js"
	],
	"./Template.js": [
		"./components/Template.js"
	],
	"./bar": [
		"./components/bar.js"
	],
	"./bar.js": [
		"./components/bar.js"
	],
	"./boo": [
		"./components/boo.js"
	],
	"./boo.js": [
		"./components/boo.js"
	],
	"./components": [
		"./components/components.js"
	],
	"./components.js": [
		"./components/components.js"
	],
	"./dataContext": [
		"./components/dataContext.js",
		1
	],
	"./dataContext.js": [
		"./components/dataContext.js",
		1
	],
	"./news1": [
		"./components/news1.js"
	],
	"./news1.js": [
		"./components/news1.js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./components lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./components weak recursive ^\\.\\/.*$":
/*!**********************************!*\
  !*** ./components weak ^\.\/.*$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Header": "./components/Header.js",
	"./Header.js": "./components/Header.js",
	"./MyLayout": "./components/MyLayout.js",
	"./MyLayout.js": "./components/MyLayout.js",
	"./Template": "./components/Template.js",
	"./Template.js": "./components/Template.js",
	"./bar": "./components/bar.js",
	"./bar.js": "./components/bar.js",
	"./boo": "./components/boo.js",
	"./boo.js": "./components/boo.js",
	"./components": "./components/components.js",
	"./components.js": "./components/components.js",
	"./dataContext": "./components/dataContext.js",
	"./dataContext.js": "./components/dataContext.js",
	"./news1": "./components/news1.js",
	"./news1.js": "./components/news1.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = "./components weak recursive ^\\.\\/.*$";
module.exports = webpackContext;

/***/ }),

/***/ "./components/components.js":
/*!**********************************!*\
  !*** ./components/components.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _news1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news1 */ "./components/news1.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar */ "./components/bar.js");
/* harmony import */ var _boo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boo */ "./components/boo.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
// https://www.storyblok.com/tp/react-dynamic-component-from-json





var ComponentsList = {
  news1: _news1__WEBPACK_IMPORTED_MODULE_1__["default"],
  bar: _bar__WEBPACK_IMPORTED_MODULE_2__["default"],
  boo: _boo__WEBPACK_IMPORTED_MODULE_3__["default"]
}; // https://nextjs.org/docs/advanced-features/dynamic-import
// import dynamic from 'next/dynamic'
// const DynamicComponent = dynamic(() => import('../components/hello'))
// search for dynamic imports

var blockList = ['news1', 'bar', 'boo'];
var dynamicList = {}; // const DynamicComponent = dynamic(() => import('./boo'));

blockList.forEach(function (block, index) {
  console.log(block);
  dynamicList[block] = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
    return __webpack_require__("./components lazy recursive ^\\.\\/.*$")("./".concat(block));
  }, {
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(__webpack_require__("./components weak recursive ^\\.\\/.*$").resolve("./".concat(block)))];
      },
      modules: ["./".concat(block)]
    }
  });
});
console.log(dynamicList);

var Components = function Components(_ref) {
  var component = _ref.component,
      data = _ref.data,
      text = _ref.text;
  var key = Math.floor(Math.random() * 100000); //if (typeof ComponentsList[block.component] !== "undefined") {
  // return (<div>x</div>)

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentsList[component], {
    key: key,
    component: component,
    data: data,
    text: text
  }); // } else {
  //   console.log("+++++++++++++++")
  // }
};

/* harmony default export */ __webpack_exports__["default"] = (Components);

/***/ })

})
//# sourceMappingURL=[id].js.b9d20dfb0d131980f85f.hot-update.js.map