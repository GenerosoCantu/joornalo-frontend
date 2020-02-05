webpackHotUpdate("static\\development\\pages\\section\\[section]\\[date]\\[id].js",{

/***/ "./components lazy recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./components lazy ^\.\/.*$ namespace object ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
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
	"./adv": [
		"./components/adv.js",
		4
	],
	"./adv.js": [
		"./components/adv.js",
		4
	],
	"./bares": [
		"./components/bares.js",
		5
	],
	"./bares.js": [
		"./components/bares.js",
		5
	],
	"./components": [
		"./components/components.js"
	],
	"./components.js": [
		"./components/components.js"
	],
	"./dataContext": [
		"./components/dataContext.js",
		6
	],
	"./dataContext.js": [
		"./components/dataContext.js",
		6
	],
	"./featured1": [
		"./components/featured1.js",
		7
	],
	"./featured1.js": [
		"./components/featured1.js",
		7
	],
	"./footer1": [
		"./components/footer1.js",
		3
	],
	"./footer1.js": [
		"./components/footer1.js",
		3
	],
	"./header1": [
		"./components/header1.js",
		2
	],
	"./header1.js": [
		"./components/header1.js",
		2
	],
	"./menu1": [
		"./components/menu1.js",
		8
	],
	"./menu1.js": [
		"./components/menu1.js",
		8
	],
	"./most-viewed1": [
		"./components/most-viewed1.js",
		9
	],
	"./most-viewed1.js": [
		"./components/most-viewed1.js",
		9
	],
	"./news-header1": [
		"./components/news-header1.js",
		10
	],
	"./news-header1.js": [
		"./components/news-header1.js",
		10
	],
	"./news-mobile1": [
		"./components/news-mobile1.js",
		12
	],
	"./news-mobile1.js": [
		"./components/news-mobile1.js",
		12
	],
	"./news1": [
		"./components/news1.js",
		1
	],
	"./news1.js": [
		"./components/news1.js",
		1
	],
	"./other-news1": [
		"./components/other-news1.js",
		11
	],
	"./other-news1.js": [
		"./components/other-news1.js",
		11
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
	"./MyLayout": "./components/MyLayout.js",
	"./MyLayout.js": "./components/MyLayout.js",
	"./Template": "./components/Template.js",
	"./Template.js": "./components/Template.js",
	"./adv": "./components/adv.js",
	"./adv.js": "./components/adv.js",
	"./bares": "./components/bares.js",
	"./bares.js": "./components/bares.js",
	"./components": "./components/components.js",
	"./components.js": "./components/components.js",
	"./dataContext": "./components/dataContext.js",
	"./dataContext.js": "./components/dataContext.js",
	"./featured1": "./components/featured1.js",
	"./featured1.js": "./components/featured1.js",
	"./footer1": "./components/footer1.js",
	"./footer1.js": "./components/footer1.js",
	"./header1": "./components/header1.js",
	"./header1.js": "./components/header1.js",
	"./menu1": "./components/menu1.js",
	"./menu1.js": "./components/menu1.js",
	"./most-viewed1": "./components/most-viewed1.js",
	"./most-viewed1.js": "./components/most-viewed1.js",
	"./news-header1": "./components/news-header1.js",
	"./news-header1.js": "./components/news-header1.js",
	"./news-mobile1": "./components/news-mobile1.js",
	"./news-mobile1.js": "./components/news-mobile1.js",
	"./news1": "./components/news1.js",
	"./news1.js": "./components/news1.js",
	"./other-news1": "./components/other-news1.js",
	"./other-news1.js": "./components/other-news1.js"
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

/***/ })

})
//# sourceMappingURL=[id].js.e9c4b434437c67c47902.hot-update.js.map