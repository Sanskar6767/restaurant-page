/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPageSetup: () => (/* binding */ aboutPageSetup)
/* harmony export */ });
function aboutPageSetup () {
    const content = document.querySelector('#content');
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    const h1 = document.createElement('h1');
    h1.textContent = 'ABOUT US!';
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at obcaecati soluta! Quod ipsam id, obcaecati esse et ad dolores maxime magnam illum eveniet ut repudiandae laboriosam voluptates quibusdam consectetur.';
    const img = document.createElement('img');
    img.src = '/src/assets/pizza.jpg'
    welcome.appendChild(h1);
    welcome.appendChild(p);
    welcome.appendChild(img);
    content.appendChild(welcome);

}

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePageSetup: () => (/* binding */ homePageSetup),
/* harmony export */   initialPageSetup: () => (/* binding */ initialPageSetup)
/* harmony export */ });
function initialPageSetup () {
    document.addEventListener('DOMContentLoaded', function() {
        const content = document.querySelector('#content');
        const welcome = document.createElement('div');
        welcome.classList.add('welcome');
        const h1 = document.createElement('h1');
        h1.textContent = 'Welcome to the Star Restaurant!';
        const p = document.createElement('p');
        p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at obcaecati soluta! Quod ipsam id, obcaecati esse et ad dolores maxime magnam illum eveniet ut repudiandae laboriosam voluptates quibusdam consectetur.';
        const p1 = document.createElement('p');
        p1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at obcaecati soluta! Quod ipsam id, obcaecati esse et ad dolores maxime magnam illum eveniet ut repudiandae laboriosam voluptates quibusdam consectetur.';
        welcome.appendChild(h1);
        welcome.appendChild(p);
        welcome.appendChild(p1);
        content.appendChild(welcome);
      });
}

function homePageSetup () {
    const content = document.querySelector('#content');
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to the Star Restaurant!';
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at obcaecati soluta! Quod ipsam id, obcaecati esse et ad dolores maxime magnam illum eveniet ut repudiandae laboriosam voluptates quibusdam consectetur.';
    const p1 = document.createElement('p');
    p1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at obcaecati soluta! Quod ipsam id, obcaecati esse et ad dolores maxime magnam illum eveniet ut repudiandae laboriosam voluptates quibusdam consectetur.';
    welcome.appendChild(h1);
    welcome.appendChild(p);
    welcome.appendChild(p1);
    content.appendChild(welcome);

}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPageSetup: () => (/* binding */ menuPageSetup)
/* harmony export */ });
const menuItems = [
    { title: 'Pizza', price: '9.99', imageUrl: '/src/assets/pizza.jpg' },
    { title: 'Burger', price: '3.99', imageUrl: '/src/assets/burger.jpg' },
    { title: 'Pasta', price: '4.00', imageUrl: '/src/assets/pasta.jpg' },
    { title: 'Pizza', price: '9.99', imageUrl: '/src/assets/pizza.jpg' },
    { title: 'Burger', price: '3.99', imageUrl: '/src/assets/burger.jpg' },
    { title: 'Pasta', price: '4.00', imageUrl: '/src/assets/pasta.jpg' },
    { title: 'Pizza', price: '9.99', imageUrl: '/src/assets/pizza.jpg' },
    { title: 'Burger', price: '3.99', imageUrl: '/src/assets/burger.jpg' },
    { title: 'Pasta', price: '4.00', imageUrl: '/src/assets/pasta.jpg' },
    // Add more items as needed
  ];
  
function menuPageSetup() {
    const content = document.querySelector('#content');
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    const grid = document.createElement('div');
    grid.classList.add('menu-grid');
    menuItems.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        const imgdiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.title;
        imgdiv.appendChild(img);

        const infodiv = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.textContent = item.title;
        const button = document.createElement('button');
        button.textContent = `🛒 Price: ${item.price}`;
        infodiv.appendChild(h3);
        infodiv.appendChild(button);

        gridItem.appendChild(imgdiv);
        gridItem.appendChild(infodiv);
        grid.appendChild(gridItem);
    })

    welcome.appendChild(grid);
    content.appendChild(welcome);


    
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ "./src/initial.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");





(0,_initial__WEBPACK_IMPORTED_MODULE_0__.initialPageSetup)();
// menuPageSetup();

const menu = document.querySelector('.menu-button');
const home = document.querySelector('.home-button');
const about = document.querySelector('.about-button');
const content = document.querySelector('#content');


home.addEventListener("click", () =>{
    content.innerHTML = '';
    (0,_initial__WEBPACK_IMPORTED_MODULE_0__.homePageSetup)();
});

menu.addEventListener("click", () =>{
    content.innerHTML = '';
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuPageSetup)();
});

about.addEventListener("click", () =>{
    content.innerHTML = '';
    (0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutPageSetup)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBLE1BQU0sa0VBQWtFO0FBQ3hFLE1BQU0sb0VBQW9FO0FBQzFFLE1BQU0sa0VBQWtFO0FBQ3hFLE1BQU0sa0VBQWtFO0FBQ3hFLE1BQU0sb0VBQW9FO0FBQzFFLE1BQU0sa0VBQWtFO0FBQ3hFLE1BQU0sa0VBQWtFO0FBQ3hFLE1BQU0sb0VBQW9FO0FBQzFFLE1BQU0sa0VBQWtFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsV0FBVztBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ0g7QUFDSDtBQUNFOztBQUV6QywwREFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLHVEQUFhO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksb0RBQWE7QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxzREFBYztBQUNsQixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhYm91dFBhZ2VTZXR1cCAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdBQk9VVCBVUyEnO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW1pbGlxdWUgYXQgb2JjYWVjYXRpIHNvbHV0YSEgUXVvZCBpcHNhbSBpZCwgb2JjYWVjYXRpIGVzc2UgZXQgYWQgZG9sb3JlcyBtYXhpbWUgbWFnbmFtIGlsbHVtIGV2ZW5pZXQgdXQgcmVwdWRpYW5kYWUgbGFib3Jpb3NhbSB2b2x1cHRhdGVzIHF1aWJ1c2RhbSBjb25zZWN0ZXR1ci4nO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSAnL3NyYy9hc3NldHMvcGl6emEuanBnJ1xuICAgIHdlbGNvbWUuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHdlbGNvbWUuYXBwZW5kQ2hpbGQocCk7XG4gICAgd2VsY29tZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG5cbn0iLCJmdW5jdGlvbiBpbml0aWFsUGFnZVNldHVwICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gdGhlIFN0YXIgUmVzdGF1cmFudCEnO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZSBhdCBvYmNhZWNhdGkgc29sdXRhISBRdW9kIGlwc2FtIGlkLCBvYmNhZWNhdGkgZXNzZSBldCBhZCBkb2xvcmVzIG1heGltZSBtYWduYW0gaWxsdW0gZXZlbmlldCB1dCByZXB1ZGlhbmRhZSBsYWJvcmlvc2FtIHZvbHVwdGF0ZXMgcXVpYnVzZGFtIGNvbnNlY3RldHVyLic7XG4gICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwMS50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW1pbGlxdWUgYXQgb2JjYWVjYXRpIHNvbHV0YSEgUXVvZCBpcHNhbSBpZCwgb2JjYWVjYXRpIGVzc2UgZXQgYWQgZG9sb3JlcyBtYXhpbWUgbWFnbmFtIGlsbHVtIGV2ZW5pZXQgdXQgcmVwdWRpYW5kYWUgbGFib3Jpb3NhbSB2b2x1cHRhdGVzIHF1aWJ1c2RhbSBjb25zZWN0ZXR1ci4nO1xuICAgICAgICB3ZWxjb21lLmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgd2VsY29tZS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgd2VsY29tZS5hcHBlbmRDaGlsZChwMSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG4gICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVQYWdlU2V0dXAgKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byB0aGUgU3RhciBSZXN0YXVyYW50ISc7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZSBhdCBvYmNhZWNhdGkgc29sdXRhISBRdW9kIGlwc2FtIGlkLCBvYmNhZWNhdGkgZXNzZSBldCBhZCBkb2xvcmVzIG1heGltZSBtYWduYW0gaWxsdW0gZXZlbmlldCB1dCByZXB1ZGlhbmRhZSBsYWJvcmlvc2FtIHZvbHVwdGF0ZXMgcXVpYnVzZGFtIGNvbnNlY3RldHVyLic7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2ltaWxpcXVlIGF0IG9iY2FlY2F0aSBzb2x1dGEhIFF1b2QgaXBzYW0gaWQsIG9iY2FlY2F0aSBlc3NlIGV0IGFkIGRvbG9yZXMgbWF4aW1lIG1hZ25hbSBpbGx1bSBldmVuaWV0IHV0IHJlcHVkaWFuZGFlIGxhYm9yaW9zYW0gdm9sdXB0YXRlcyBxdWlidXNkYW0gY29uc2VjdGV0dXIuJztcbiAgICB3ZWxjb21lLmFwcGVuZENoaWxkKGgxKTtcbiAgICB3ZWxjb21lLmFwcGVuZENoaWxkKHApO1xuICAgIHdlbGNvbWUuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG5cbn1cblxuXG5leHBvcnQgeyBpbml0aWFsUGFnZVNldHVwIH07IiwiY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHsgdGl0bGU6ICdQaXp6YScsIHByaWNlOiAnOS45OScsIGltYWdlVXJsOiAnL3NyYy9hc3NldHMvcGl6emEuanBnJyB9LFxuICAgIHsgdGl0bGU6ICdCdXJnZXInLCBwcmljZTogJzMuOTknLCBpbWFnZVVybDogJy9zcmMvYXNzZXRzL2J1cmdlci5qcGcnIH0sXG4gICAgeyB0aXRsZTogJ1Bhc3RhJywgcHJpY2U6ICc0LjAwJywgaW1hZ2VVcmw6ICcvc3JjL2Fzc2V0cy9wYXN0YS5qcGcnIH0sXG4gICAgeyB0aXRsZTogJ1BpenphJywgcHJpY2U6ICc5Ljk5JywgaW1hZ2VVcmw6ICcvc3JjL2Fzc2V0cy9waXp6YS5qcGcnIH0sXG4gICAgeyB0aXRsZTogJ0J1cmdlcicsIHByaWNlOiAnMy45OScsIGltYWdlVXJsOiAnL3NyYy9hc3NldHMvYnVyZ2VyLmpwZycgfSxcbiAgICB7IHRpdGxlOiAnUGFzdGEnLCBwcmljZTogJzQuMDAnLCBpbWFnZVVybDogJy9zcmMvYXNzZXRzL3Bhc3RhLmpwZycgfSxcbiAgICB7IHRpdGxlOiAnUGl6emEnLCBwcmljZTogJzkuOTknLCBpbWFnZVVybDogJy9zcmMvYXNzZXRzL3BpenphLmpwZycgfSxcbiAgICB7IHRpdGxlOiAnQnVyZ2VyJywgcHJpY2U6ICczLjk5JywgaW1hZ2VVcmw6ICcvc3JjL2Fzc2V0cy9idXJnZXIuanBnJyB9LFxuICAgIHsgdGl0bGU6ICdQYXN0YScsIHByaWNlOiAnNC4wMCcsIGltYWdlVXJsOiAnL3NyYy9hc3NldHMvcGFzdGEuanBnJyB9LFxuICAgIC8vIEFkZCBtb3JlIGl0ZW1zIGFzIG5lZWRlZFxuICBdO1xuICBcbmZ1bmN0aW9uIG1lbnVQYWdlU2V0dXAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JpZCcpO1xuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkSXRlbS5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nKTtcbiAgICAgICAgY29uc3QgaW1nZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gaXRlbS5pbWFnZVVybDtcbiAgICAgICAgaW1nLmFsdCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGltZ2Rpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgIGNvbnN0IGluZm9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoMy50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBg8J+bkiBQcmljZTogJHtpdGVtLnByaWNlfWA7XG4gICAgICAgIGluZm9kaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICAgICAgICBpbmZvZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgZ3JpZEl0ZW0uYXBwZW5kQ2hpbGQoaW1nZGl2KTtcbiAgICAgICAgZ3JpZEl0ZW0uYXBwZW5kQ2hpbGQoaW5mb2Rpdik7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuICAgIH0pXG5cbiAgICB3ZWxjb21lLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG5cblxuICAgIFxufVxuXG5leHBvcnQgeyBtZW51UGFnZVNldHVwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0aWFsUGFnZVNldHVwIH0gZnJvbSBcIi4vaW5pdGlhbFwiO1xuaW1wb3J0IHsgaG9tZVBhZ2VTZXR1cCB9IGZyb20gXCIuL2luaXRpYWxcIjtcbmltcG9ydCB7IG1lbnVQYWdlU2V0dXAgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBhYm91dFBhZ2VTZXR1cCB9IGZyb20gXCIuL2Fib3V0XCI7XG5cbmluaXRpYWxQYWdlU2V0dXAoKTtcbi8vIG1lbnVQYWdlU2V0dXAoKTtcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpO1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ1dHRvbicpO1xuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtYnV0dG9uJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGhvbWVQYWdlU2V0dXAoKTtcbn0pO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIG1lbnVQYWdlU2V0dXAoKTtcbn0pO1xuXG5hYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBhYm91dFBhZ2VTZXR1cCgpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9