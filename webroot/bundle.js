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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slideManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideManager.js */ \"./src/js/slideManager.js\");\n/* harmony import */ var _jsonManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonManager.js */ \"./src/js/jsonManager.js\");\n__webpack_require__(/*! ../sass/app.scss */ \"./src/sass/app.scss\");\n\n\n\n\nconst hamburger = document.querySelector('#hamburger');\nhamburger.addEventListener('click', toggleSidebar);\nfunction toggleSidebar(e) {\n\tlet sidebar = document.querySelector('#sidebar');\n\tif(sidebar.classList.contains('expanded')) {\n\t\tsidebar.classList.remove('expanded');\n\t} else {\n\t\tsidebar.classList.add('expanded');\n\t}\n}\n\nwindow.addEventListener('load', _slideManager_js__WEBPACK_IMPORTED_MODULE_0__[\"resetDefaults\"]);\ndocument.querySelector('body').addEventListener('keydown', _slideManager_js__WEBPACK_IMPORTED_MODULE_0__[\"onKeyPressed\"]);\ndocument.querySelector('#load').addEventListener('change', _jsonManager_js__WEBPACK_IMPORTED_MODULE_1__[\"onUploadFile\"]);\ndocument.querySelector('#save').addEventListener( 'click', _jsonManager_js__WEBPACK_IMPORTED_MODULE_1__[\"onSaveFile\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4uL3Nhc3MvYXBwLnNjc3MnKTtcblxuaW1wb3J0IHsgcmVzZXREZWZhdWx0cywgb25LZXlQcmVzc2VkIH0gZnJvbSAnLi9zbGlkZU1hbmFnZXIuanMnO1xuaW1wb3J0IHsgb25VcGxvYWRGaWxlLCBvblNhdmVGaWxlIH0gZnJvbSAnLi9qc29uTWFuYWdlci5qcyc7XG5cbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXInKTtcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXIpO1xuZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcihlKSB7XG5cdGxldCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcblx0aWYoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcblx0XHRzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2lkZWJhci5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuXHR9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzZXREZWZhdWx0cyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5UHJlc3NlZCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uVXBsb2FkRmlsZSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZScpLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIG9uU2F2ZUZpbGUpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/jsonManager.js":
/*!*******************************!*\
  !*** ./src/js/jsonManager.js ***!
  \*******************************/
/*! exports provided: onUploadFile, onLoadFile, onSaveFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onUploadFile\", function() { return onUploadFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoadFile\", function() { return onLoadFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSaveFile\", function() { return onSaveFile; });\n/* harmony import */ var _slideManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideManager.js */ \"./src/js/slideManager.js\");\n\n\nlet json;\n\nfunction onUploadFile(event) {\n    let reader = new FileReader();\n    reader.onload = onLoadFile;\n    reader.readAsText(event.target.files[0]);\n}\n\nfunction onLoadFile(event) {\n    const container = document.querySelector('#container');\n    json = JSON.parse(event.target.result);\n    while (container.lastChild) {\n        container.removeChild(container.lastChild);\n    }\n    let slideElement, cardElement;\n    json.forEach((slide) => {\n        slideElement = document.createElement('div');\n        slideElement.classList.add('slide');\n        slide.forEach((card) => {\n            cardElement = document.createElement('div');\n            cardElement.classList.add('card');\n            card.forEach((element) => {\n                cardElement.innerHTML += element;\n            });\n            slideElement.appendChild(cardElement);\n        });\n        container.appendChild(slideElement);\n    });\n    Object(_slideManager_js__WEBPACK_IMPORTED_MODULE_0__[\"resetDefaults\"])();\n}\n\nfunction onSaveFile() {\n    let data = encode(JSON.stringify(json));\n    let blob = new Blob([data], {\n        type: 'application/octet-stream'\n    });\n    let url = URL.createObjectURL(blob);\n    let link = document.createElement('a');\n    link.setAttribute('href', url);\n    link.setAttribute('download', 'example.json');\n    let event = document.createEvent('MouseEvents');\n    event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);\n    link.dispatchEvent(event);\n}\n\nfunction encode(string) {\n    let output = [];\n    for (let i = 0; i < string.length; i++) {\n        output[i] = string.charCodeAt(i);\n    }\n    return new Uint8Array(output);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvanNvbk1hbmFnZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvanNvbk1hbmFnZXIuanM/MDQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNldERlZmF1bHRzIH0gZnJvbSAnLi9zbGlkZU1hbmFnZXIuanMnO1xuXG5sZXQganNvbjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uVXBsb2FkRmlsZShldmVudCkge1xuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBvbkxvYWRGaWxlO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGV2ZW50LnRhcmdldC5maWxlc1swXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRGaWxlKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGpzb24gPSBKU09OLnBhcnNlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgIHdoaWxlIChjb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG4gICAgbGV0IHNsaWRlRWxlbWVudCwgY2FyZEVsZW1lbnQ7XG4gICAganNvbi5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBzbGlkZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2xpZGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NsaWRlJyk7XG4gICAgICAgIHNsaWRlLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGNhcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgICAgICBjYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5pbm5lckhUTUwgKz0gZWxlbWVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2xpZGVFbGVtZW50LmFwcGVuZENoaWxkKGNhcmRFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZUVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHJlc2V0RGVmYXVsdHMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uU2F2ZUZpbGUoKSB7XG4gICAgbGV0IGRhdGEgPSBlbmNvZGUoSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2RhdGFdLCB7XG4gICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXG4gICAgfSk7XG4gICAgbGV0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdleGFtcGxlLmpzb24nKTtcbiAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcbiAgICBldmVudC5pbml0TW91c2VFdmVudCgnY2xpY2snLCB0cnVlLCB0cnVlLCB3aW5kb3csIDEsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcbiAgICBsaW5rLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGUoc3RyaW5nKSB7XG4gICAgbGV0IG91dHB1dCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG91dHB1dFtpXSA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkob3V0cHV0KTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/jsonManager.js\n");

/***/ }),

/***/ "./src/js/slideManager.js":
/*!********************************!*\
  !*** ./src/js/slideManager.js ***!
  \********************************/
/*! exports provided: resetDefaults, onKeyPressed, nextSlide, previousSlide, nextCard, previousCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetDefaults\", function() { return resetDefaults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onKeyPressed\", function() { return onKeyPressed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextSlide\", function() { return nextSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previousSlide\", function() { return previousSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextCard\", function() { return nextCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previousCard\", function() { return previousCard; });\nfunction resetDefaults(e) {\n     let firstSlide = document.querySelectorAll('.slide')[0];\n     let firstSlideFirstCard = firstSlide.querySelectorAll('.card')[0];\n     firstSlide.classList.add('active');\n     firstSlideFirstCard.classList.add('active');\n}\n\nfunction onKeyPressed(e) {\n     if(e.key === 'ArrowRight') {\n          nextSlide();\n     } else if(e.key === 'ArrowLeft') {\n          previousSlide();\n     } else if(e.key === 'ArrowDown') {\n          nextCard();\n     } else if(e.key === 'ArrowUp') {\n          previousCard();\n     }\n}\n\nfunction nextSlide() {\n     let activeSlide = document.querySelector('.slide.active');\n     let activeCard = activeSlide.querySelector('.card.active');\n     let nextSlide = activeSlide.nextElementSibling;\n     let nextSlideFirstCard = nextSlide.querySelectorAll('.card')[0];\n     activeSlide.classList.remove('active');\n     activeCard.classList.remove('active');\n     nextSlide.classList.add('active');\n     nextSlideFirstCard.classList.add('active');\n}\n\nfunction previousSlide() {\n     let activeSlide = document.querySelector('.slide.active');\n     let activeCard = activeSlide.querySelector('.card.active');\n     let previousSlide = activeSlide.previousElementSibling;\n     let previousSlideFirstCard = previousSlide.querySelectorAll('.card')[0];\n     activeSlide.classList.remove('active');\n     activeCard.classList.remove('active');\n     previousSlide.classList.add('active');\n     previousSlideFirstCard.classList.add('active');\n}\n\nfunction nextCard() {\n     let activeSlide = document.querySelector('.slide.active');\n     let activeCard = activeSlide.querySelector('.card.active');\n     let nextCard = activeCard.nextElementSibling;\n     activeCard.classList.remove('active');\n     nextCard.classList.add('active');\n}\n\nfunction previousCard() {\n     let activeSlide = document.querySelector('.slide.active');\n     let activeCard = activeSlide.querySelector('.card.active');\n     let previousCard = activeCard.previousElementSibling;\n     activeCard.classList.remove('active');\n     previousCard.classList.add('active');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2xpZGVNYW5hZ2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NsaWRlTWFuYWdlci5qcz8xNTc4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZXNldERlZmF1bHRzKGUpIHtcbiAgICAgbGV0IGZpcnN0U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUnKVswXTtcbiAgICAgbGV0IGZpcnN0U2xpZGVGaXJzdENhcmQgPSBmaXJzdFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJylbMF07XG4gICAgIGZpcnN0U2xpZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgIGZpcnN0U2xpZGVGaXJzdENhcmQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbktleVByZXNzZWQoZSkge1xuICAgICBpZihlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgbmV4dFNsaWRlKCk7XG4gICAgIH0gZWxzZSBpZihlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICBwcmV2aW91c1NsaWRlKCk7XG4gICAgIH0gZWxzZSBpZihlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICBuZXh0Q2FyZCgpO1xuICAgICB9IGVsc2UgaWYoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgIHByZXZpb3VzQ2FyZCgpO1xuICAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XG4gICAgIGxldCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS5hY3RpdmUnKTtcbiAgICAgbGV0IGFjdGl2ZUNhcmQgPSBhY3RpdmVTbGlkZS5xdWVyeVNlbGVjdG9yKCcuY2FyZC5hY3RpdmUnKTtcbiAgICAgbGV0IG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHRFbGVtZW50U2libGluZztcbiAgICAgbGV0IG5leHRTbGlkZUZpcnN0Q2FyZCA9IG5leHRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpWzBdO1xuICAgICBhY3RpdmVTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgYWN0aXZlQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgbmV4dFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICBuZXh0U2xpZGVGaXJzdENhcmQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2aW91c1NsaWRlKCkge1xuICAgICBsZXQgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUuYWN0aXZlJyk7XG4gICAgIGxldCBhY3RpdmVDYXJkID0gYWN0aXZlU2xpZGUucXVlcnlTZWxlY3RvcignLmNhcmQuYWN0aXZlJyk7XG4gICAgIGxldCBwcmV2aW91c1NsaWRlID0gYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgbGV0IHByZXZpb3VzU2xpZGVGaXJzdENhcmQgPSBwcmV2aW91c1NsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJylbMF07XG4gICAgIGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICBhY3RpdmVDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICBwcmV2aW91c1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICBwcmV2aW91c1NsaWRlRmlyc3RDYXJkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dENhcmQoKSB7XG4gICAgIGxldCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS5hY3RpdmUnKTtcbiAgICAgbGV0IGFjdGl2ZUNhcmQgPSBhY3RpdmVTbGlkZS5xdWVyeVNlbGVjdG9yKCcuY2FyZC5hY3RpdmUnKTtcbiAgICAgbGV0IG5leHRDYXJkID0gYWN0aXZlQ2FyZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgIGFjdGl2ZUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgIG5leHRDYXJkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJldmlvdXNDYXJkKCkge1xuICAgICBsZXQgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUuYWN0aXZlJyk7XG4gICAgIGxldCBhY3RpdmVDYXJkID0gYWN0aXZlU2xpZGUucXVlcnlTZWxlY3RvcignLmNhcmQuYWN0aXZlJyk7XG4gICAgIGxldCBwcmV2aW91c0NhcmQgPSBhY3RpdmVDYXJkLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgIGFjdGl2ZUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgIHByZXZpb3VzQ2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/slideManager.js\n");

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