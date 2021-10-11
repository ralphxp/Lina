/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./resources/js/quick-actions.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var __ = {
  addClass: function addClass(elem, str) {
    elem.classList.add(str);
  },
  append: function append(elem, val) {
    elem.push(val);
  },
  classList: function classList(elem) {
    return (' ' + (elem.className || '') + ' ').replace(/\s+/gi, ' ');
  },
  floor: function floor(elem) {
    return Math.floor(elem);
  },
  get: function get(elem) {
    return document.querySelector(elem);
  },
  gets: function gets(elem) {
    return document.querySelectorAll(elem);
  },
  hasClass: function hasClass(elem, name) {
    var list = typeof elem == 'string' ? elem : classList(elem);
    return list.indexOf(' ' + name + ' ') >= 0;
  },
  min: function min(x, y) {
    return Math.min(x, y);
  },
  max: function max(x, y) {
    return Math.max(x, y);
  },
  pow: function pow(x, y) {
    return Math.pow(x, y);
  },
  on: function on(elem, event, callback) {
    var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    elem.addEventListener(event, callback, capture);
  },
  off: function off(elem, event, callback) {
    elem.removeEventListener(event, callback);
  },
  removeClass: function removeClass(elem, dom) {
    elem.classList.remove(dom);
  },
  replaceClass: function replaceClass(elem, _old_, _new_) {
    elem.classList.replace(_old_, _new_);
  },
  setElemActive: function setElemActive(item, Arr) {
    Arr.forEach(function (e) {
      __.removeClass(e, 'active');
    });

    __.addClass(item, 'active');
  },
  toggle: function toggle(elem, dom) {
    elem.classList.toggle(dom);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__);
/******/ })()
;