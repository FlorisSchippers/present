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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slideManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideManager.js */ \"./src/js/slideManager.js\");\n/* harmony import */ var _jsonManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonManager.js */ \"./src/js/jsonManager.js\");\n__webpack_require__(/*! ../sass/app.scss */ \"./src/sass/app.scss\");\r\n\r\n\r\n\r\n\r\nconst hamburger = document.querySelector('#hamburger');\r\nhamburger.addEventListener('click', toggleSidebar);\r\nfunction toggleSidebar(e) {\r\n\tlet sidebar = document.querySelector('#sidebar');\r\n\tif(sidebar.classList.contains('expanded')) {\r\n\t\tsidebar.classList.remove('expanded');\r\n\t} else {\r\n\t\tsidebar.classList.add('expanded');\r\n\t}\r\n}\r\n\r\nwindow.addEventListener('load', _slideManager_js__WEBPACK_IMPORTED_MODULE_0__[\"resetDefaults\"]);\r\ndocument.querySelector('body').addEventListener('keydown', _slideManager_js__WEBPACK_IMPORTED_MODULE_0__[\"onKeyPressed\"]);\r\ndocument.querySelector('#load').addEventListener('change', _jsonManager_js__WEBPACK_IMPORTED_MODULE_1__[\"onUploadFile\"]);\r\ndocument.querySelector('#save').addEventListener( 'click', _jsonManager_js__WEBPACK_IMPORTED_MODULE_1__[\"onSaveFile\"]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4uL3Nhc3MvYXBwLnNjc3MnKTtcclxuXHJcbmltcG9ydCB7IHJlc2V0RGVmYXVsdHMsIG9uS2V5UHJlc3NlZCB9IGZyb20gJy4vc2xpZGVNYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgb25VcGxvYWRGaWxlLCBvblNhdmVGaWxlIH0gZnJvbSAnLi9qc29uTWFuYWdlci5qcyc7XHJcblxyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyJyk7XHJcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXIpO1xyXG5mdW5jdGlvbiB0b2dnbGVTaWRlYmFyKGUpIHtcclxuXHRsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XHJcblx0aWYoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcclxuXHRcdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c2lkZWJhci5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xyXG5cdH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNldERlZmF1bHRzKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleVByZXNzZWQpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uVXBsb2FkRmlsZSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXZlJykuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgb25TYXZlRmlsZSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/jsonManager.js":
/*!*******************************!*\
  !*** ./src/js/jsonManager.js ***!
  \*******************************/
/*! exports provided: onUploadFile, onLoadFile, onSaveFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onUploadFile\", function() { return onUploadFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoadFile\", function() { return onLoadFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSaveFile\", function() { return onSaveFile; });\n/* harmony import */ var _slideManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideManager.js */ \"./src/js/slideManager.js\");\n\r\n\r\nlet json;\r\n\r\nfunction onUploadFile(event) {\r\n    let reader = new FileReader();\r\n    reader.onload = onLoadFile;\r\n    reader.readAsText(event.target.files[0]);\r\n}\r\n\r\nfunction onLoadFile(event) {\r\n    const container = document.querySelector('#container');\r\n    json = JSON.parse(event.target.result);\r\n    while (container.lastChild) {\r\n        container.removeChild(container.lastChild);\r\n    }\r\n    let slideElement, cardElement;\r\n    json.forEach((slide) => {\r\n        slideElement = document.createElement('div');\r\n        slideElement.classList.add('slide');\r\n        slide.forEach((card) => {\r\n            cardElement = document.createElement('div');\r\n            cardElement.classList.add('card');\r\n            card.forEach((element) => {\r\n                cardElement.innerHTML += element;\r\n            });\r\n            slideElement.appendChild(cardElement);\r\n        });\r\n        container.appendChild(slideElement);\r\n    });\r\n    Object(_slideManager_js__WEBPACK_IMPORTED_MODULE_0__[\"resetDefaults\"])();\r\n}\r\n\r\nfunction onSaveFile() {\r\n    let generatedJson = generateJson();\r\n    let data = encodeJson(JSON.stringify(generatedJson));\r\n    let blob = new Blob([data], {\r\n        type: 'application/octet-stream'\r\n    });\r\n    let url = URL.createObjectURL(blob);\r\n    let link = document.createElement('a');\r\n    link.setAttribute('href', url);\r\n    link.setAttribute('download', 'example.json');\r\n    let event = document.createEvent('MouseEvents');\r\n    event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);\r\n    link.dispatchEvent(event);\r\n}\r\n\r\nfunction encodeJson(string) {\r\n    let output = [];\r\n    for (let i = 0; i < string.length; i++) {\r\n        output[i] = string.charCodeAt(i);\r\n    }\r\n    return new Uint8Array(output);\r\n}\r\n\r\nfunction generateJson() {\r\n    let slides = document.querySelectorAll('.slide'), cards, elements, elementsArray, cardsArray, slidesArray;\r\n    slidesArray = [];\r\n    slides.forEach((slide) => {\r\n        cards = slide.querySelectorAll('.card');\r\n        cardsArray = [];\r\n        cards.forEach((card) => {\r\n            elements = card.children;\r\n            elementsArray = [];\r\n            for (let i = 0; i < elements.length; i++) {\r\n                elementsArray.push(elements[i].outerHTML);\r\n            }\r\n            cardsArray.push(elementsArray);\r\n        });\r\n        slidesArray.push(cardsArray);\r\n    });\r\n    console.log(slidesArray);\r\n    return slidesArray;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvanNvbk1hbmFnZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvanNvbk1hbmFnZXIuanM/MDQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNldERlZmF1bHRzIH0gZnJvbSAnLi9zbGlkZU1hbmFnZXIuanMnO1xyXG5cclxubGV0IGpzb247XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25VcGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSBvbkxvYWRGaWxlO1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZEZpbGUoZXZlbnQpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcclxuICAgIGpzb24gPSBKU09OLnBhcnNlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcclxuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBsZXQgc2xpZGVFbGVtZW50LCBjYXJkRWxlbWVudDtcclxuICAgIGpzb24uZm9yRWFjaCgoc2xpZGUpID0+IHtcclxuICAgICAgICBzbGlkZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzbGlkZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2xpZGUnKTtcclxuICAgICAgICBzbGlkZS5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAgICAgY2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5pbm5lckhUTUwgKz0gZWxlbWVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlRWxlbWVudC5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHJlc2V0RGVmYXVsdHMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU2F2ZUZpbGUoKSB7XHJcbiAgICBsZXQgZ2VuZXJhdGVkSnNvbiA9IGdlbmVyYXRlSnNvbigpO1xyXG4gICAgbGV0IGRhdGEgPSBlbmNvZGVKc29uKEpTT04uc3RyaW5naWZ5KGdlbmVyYXRlZEpzb24pKTtcclxuICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2RhdGFdLCB7XHJcbiAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSdcclxuICAgIH0pO1xyXG4gICAgbGV0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdleGFtcGxlLmpzb24nKTtcclxuICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xyXG4gICAgZXZlbnQuaW5pdE1vdXNlRXZlbnQoJ2NsaWNrJywgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCAwLCAwLCAwLCAwLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XHJcbiAgICBsaW5rLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmNvZGVKc29uKHN0cmluZykge1xyXG4gICAgbGV0IG91dHB1dCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBvdXRwdXRbaV0gPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShvdXRwdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUpzb24oKSB7XHJcbiAgICBsZXQgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlJyksIGNhcmRzLCBlbGVtZW50cywgZWxlbWVudHNBcnJheSwgY2FyZHNBcnJheSwgc2xpZGVzQXJyYXk7XHJcbiAgICBzbGlkZXNBcnJheSA9IFtdO1xyXG4gICAgc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgY2FyZHMgPSBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xyXG4gICAgICAgIGNhcmRzQXJyYXkgPSBbXTtcclxuICAgICAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzID0gY2FyZC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZWxlbWVudHNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c0FycmF5LnB1c2goZWxlbWVudHNbaV0ub3V0ZXJIVE1MKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXJkc0FycmF5LnB1c2goZWxlbWVudHNBcnJheSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2xpZGVzQXJyYXkucHVzaChjYXJkc0FycmF5KTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coc2xpZGVzQXJyYXkpO1xyXG4gICAgcmV0dXJuIHNsaWRlc0FycmF5O1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/jsonManager.js\n");

/***/ }),

/***/ "./src/js/slideManager.js":
/*!********************************!*\
  !*** ./src/js/slideManager.js ***!
  \********************************/
/*! exports provided: resetDefaults, onKeyPressed, nextSlide, previousSlide, nextCard, previousCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetDefaults\", function() { return resetDefaults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onKeyPressed\", function() { return onKeyPressed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextSlide\", function() { return nextSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previousSlide\", function() { return previousSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextCard\", function() { return nextCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previousCard\", function() { return previousCard; });\nfunction resetDefaults(e) {\r\n     let firstSlide = document.querySelectorAll('.slide')[0];\r\n     let firstSlideFirstCard = firstSlide.querySelectorAll('.card')[0];\r\n     firstSlide.classList.add('active');\r\n     firstSlideFirstCard.classList.add('active');\r\n}\r\n\r\nfunction onKeyPressed(e) {\r\n     if(e.key === 'ArrowRight') {\r\n          nextSlide();\r\n     } else if(e.key === 'ArrowLeft') {\r\n          previousSlide();\r\n     } else if(e.key === 'ArrowDown') {\r\n          nextCard();\r\n     } else if(e.key === 'ArrowUp') {\r\n          previousCard();\r\n     }\r\n}\r\n\r\nfunction nextSlide() {\r\n     let activeSlide = document.querySelector('.slide.active');\r\n     let activeCard = activeSlide.querySelector('.card.active');\r\n     let nextSlide = activeSlide.nextElementSibling;\r\n     let nextSlideFirstCard = nextSlide.querySelectorAll('.card')[0];\r\n     activeSlide.classList.remove('active');\r\n     activeCard.classList.remove('active');\r\n     nextSlide.classList.add('active');\r\n     nextSlideFirstCard.classList.add('active');\r\n}\r\n\r\nfunction previousSlide() {\r\n     let activeSlide = document.querySelector('.slide.active');\r\n     let activeCard = activeSlide.querySelector('.card.active');\r\n     let previousSlide = activeSlide.previousElementSibling;\r\n     let previousSlideFirstCard = previousSlide.querySelectorAll('.card')[0];\r\n     activeSlide.classList.remove('active');\r\n     activeCard.classList.remove('active');\r\n     previousSlide.classList.add('active');\r\n     previousSlideFirstCard.classList.add('active');\r\n}\r\n\r\nfunction nextCard() {\r\n     let activeSlide = document.querySelector('.slide.active');\r\n     let activeCard = activeSlide.querySelector('.card.active');\r\n     let nextCard = activeCard.nextElementSibling;\r\n     activeCard.classList.remove('active');\r\n     nextCard.classList.add('active');\r\n}\r\n\r\nfunction previousCard() {\r\n     let activeSlide = document.querySelector('.slide.active');\r\n     let activeCard = activeSlide.querySelector('.card.active');\r\n     let previousCard = activeCard.previousElementSibling;\r\n     activeCard.classList.remove('active');\r\n     previousCard.classList.add('active');\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2xpZGVNYW5hZ2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NsaWRlTWFuYWdlci5qcz8xNTc4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZXNldERlZmF1bHRzKGUpIHtcclxuICAgICBsZXQgZmlyc3RTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpWzBdO1xyXG4gICAgIGxldCBmaXJzdFNsaWRlRmlyc3RDYXJkID0gZmlyc3RTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpWzBdO1xyXG4gICAgIGZpcnN0U2xpZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgZmlyc3RTbGlkZUZpcnN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChlKSB7XHJcbiAgICAgaWYoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgICAgbmV4dFNsaWRlKCk7XHJcbiAgICAgfSBlbHNlIGlmKGUua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xyXG4gICAgICAgICAgcHJldmlvdXNTbGlkZSgpO1xyXG4gICAgIH0gZWxzZSBpZihlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICAgIG5leHRDYXJkKCk7XHJcbiAgICAgfSBlbHNlIGlmKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICAgIHByZXZpb3VzQ2FyZCgpO1xyXG4gICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuICAgICBsZXQgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUuYWN0aXZlJyk7XHJcbiAgICAgbGV0IGFjdGl2ZUNhcmQgPSBhY3RpdmVTbGlkZS5xdWVyeVNlbGVjdG9yKCcuY2FyZC5hY3RpdmUnKTtcclxuICAgICBsZXQgbmV4dFNsaWRlID0gYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgIGxldCBuZXh0U2xpZGVGaXJzdENhcmQgPSBuZXh0U2xpZGUucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKVswXTtcclxuICAgICBhY3RpdmVTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICBhY3RpdmVDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgIG5leHRTbGlkZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICBuZXh0U2xpZGVGaXJzdENhcmQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmV2aW91c1NsaWRlKCkge1xyXG4gICAgIGxldCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS5hY3RpdmUnKTtcclxuICAgICBsZXQgYWN0aXZlQ2FyZCA9IGFjdGl2ZVNsaWRlLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLmFjdGl2ZScpO1xyXG4gICAgIGxldCBwcmV2aW91c1NsaWRlID0gYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICBsZXQgcHJldmlvdXNTbGlkZUZpcnN0Q2FyZCA9IHByZXZpb3VzU2xpZGUucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKVswXTtcclxuICAgICBhY3RpdmVTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICBhY3RpdmVDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgIHByZXZpb3VzU2xpZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgcHJldmlvdXNTbGlkZUZpcnN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5leHRDYXJkKCkge1xyXG4gICAgIGxldCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS5hY3RpdmUnKTtcclxuICAgICBsZXQgYWN0aXZlQ2FyZCA9IGFjdGl2ZVNsaWRlLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLmFjdGl2ZScpO1xyXG4gICAgIGxldCBuZXh0Q2FyZCA9IGFjdGl2ZUNhcmQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgIGFjdGl2ZUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgbmV4dENhcmQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmV2aW91c0NhcmQoKSB7XHJcbiAgICAgbGV0IGFjdGl2ZVNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLmFjdGl2ZScpO1xyXG4gICAgIGxldCBhY3RpdmVDYXJkID0gYWN0aXZlU2xpZGUucXVlcnlTZWxlY3RvcignLmNhcmQuYWN0aXZlJyk7XHJcbiAgICAgbGV0IHByZXZpb3VzQ2FyZCA9IGFjdGl2ZUNhcmQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICBhY3RpdmVDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgIHByZXZpb3VzQ2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/slideManager.js\n");

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9hcHAuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zYXNzL2FwcC5zY3NzPzliNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sass/app.scss\n");

/***/ })

/******/ });