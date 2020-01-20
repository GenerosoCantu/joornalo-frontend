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
		"./components/bar.js",
		3
	],
	"./bar.js": [
		"./components/bar.js",
		3
	],
	"./boo": [
		"./components/boo.js",
		4
	],
	"./boo.js": [
		"./components/boo.js",
		4
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
		"./components/news1.js",
		2
	],
	"./news1.js": [
		"./components/news1.js",
		2
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

/***/ "./components/bar.js":
false,

/***/ "./components/boo.js":
false,

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
// https://www.storyblok.com/tp/react-dynamic-component-from-json
 // import news1 from "./news1";
// import bar from "./bar";
// import boo from "./boo";

 // const ComponentsList = {
//   news1: news1,
//   bar: bar,
//   boo: boo
// };
// https://nextjs.org/docs/advanced-features/dynamic-import
// import dynamic from 'next/dynamic'
// const DynamicComponent = dynamic(() => import('../components/hello'))
// search for dynamic imports

var blockList = ['news1', 'bar', 'boo'];
var dynamicList = {}; // const DynamicComponent = dynamic(() => import('./boo'));

blockList.forEach(function (block, index) {
  console.log(block);
  dynamicList[block] = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
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
  //return React.createElement(ComponentsList[component], {

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dynamicList[component], {
    key: key,
    component: component,
    data: data,
    text: text
  }); // } else {
  //   console.log("+++++++++++++++")
  // }
};

/* harmony default export */ __webpack_exports__["default"] = (Components);

/***/ }),

/***/ "./components/news1.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
false,

/***/ "./node_modules/core-js/library/fn/parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
false,

/***/ "./node_modules/html-dom-parser/lib/constants.js":
false,

/***/ "./node_modules/html-dom-parser/lib/domparser.js":
false,

/***/ "./node_modules/html-dom-parser/lib/html-to-dom-client.js":
false,

/***/ "./node_modules/html-dom-parser/lib/utilities.js":
false,

/***/ "./node_modules/html-react-parser/index.js":
false,

/***/ "./node_modules/html-react-parser/lib/attributes-to-props.js":
false,

/***/ "./node_modules/html-react-parser/lib/dom-to-react.js":
false,

/***/ "./node_modules/html-react-parser/lib/utilities.js":
false,

/***/ "./node_modules/inline-style-parser/index.js":
false,

/***/ "./node_modules/react-property/index.js":
false,

/***/ "./node_modules/react-property/lib/HTMLDOMPropertyConfig.js":
false,

/***/ "./node_modules/react-property/lib/SVGDOMPropertyConfig.js":
false,

/***/ "./node_modules/react-property/lib/injection.js":
false,

/***/ "./node_modules/style-to-object/index.js":
false

})
//# sourceMappingURL=[id].js.6fbaee1b6138243a5c3d.hot-update.js.map