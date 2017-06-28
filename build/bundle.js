/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(2);

var app = function () {
  new UI();
}



window.addEventListener('load', app);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/user/codeclan/week_12/day_03/bucket_list_js/src/models/countries.js Unexpected token (31:2)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   all: function(onCountriesReady) {\n|     this.makeRequest('http://localhost:3000/api/bucket', onCountriesReady);\n|   }");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Query = __webpack_require__(1);
var query = new Query();

var UI = function () {
  this.request();
}

UI.prototype = {

  request: function () {
    var url = "http://localhost:3000/api/bucket";
    var onRequestComplete = function (data) {
      this.render(data);
    }.bind(this);
    query.all(onRequestComplete)
  },

  renderCountries: function (countries) {
    var ul = document.createElement('ul');

    for(var country of countries) {
      var li = document.createElement('li');
      li.innerText = country.name;
      ul.appendChild(li);
    }
    return ul;
  },

  renderDropdown: function () {
    var select = document.createElement('select');
    var option = document.createElement('option');
    option.value = "Germany";
    option.label = "Germany";
    select.add(option);

    return select;
  },

  render: function (countries) {
    var container = document.getElementById('countries');
    var list = this.renderCountries(countries);
    var select = this.renderDropdown();
    container.appendChild(select);
    container.appendChild(list);

  }


}

module.exports = UI;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map