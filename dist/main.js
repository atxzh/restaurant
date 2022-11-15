/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/compatibility.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/compatibility.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@supports not selector(:has(>.nav-menu>.navHome>input#navHome:checked)) {\n    main.home {\n        display: flex;\n    }\n\n    main.menu {\n        display: none;\n    }\n\n    main.about {\n        display: none;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/compatibility.css"],"names":[],"mappings":"AAAA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":["@supports not selector(:has(>.nav-menu>.navHome>input#navHome:checked)) {\n    main.home {\n        display: flex;\n    }\n\n    main.menu {\n        display: none;\n    }\n\n    main.about {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style-about.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style-about.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "main.about {\n    width: 90%;\n    height: 100%;\n\n    display: none;\n\n    background-color: rgba(var(--color-secondary-2), .45);\n\n    border-bottom-left-radius: 4rem;\n\n    padding-left: .5rem;\n\n    overflow: hidden;\n\n}\n\n/* SECTION About Heading */\n\nmain.about>div.about-heading {\n    width: 12%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    align-content: baseline;\n\n}\n\nmain.about>div.about-heading>p.about-title {\n    margin: 4.25rem auto;\n\n    writing-mode: vertical-rl;\n    text-orientation: mixed;\n    transform: rotate(180deg);\n\n    font-size: 4rem;\n\n    align-self: flex-end;\n}\n\nmain.about>div.about-heading>svg.title-icon {\n    width: 6rem;\n    height: 6rem;\n\n    fill: rgba(var(--color-text-secondary));\n}\n\n/* END !SECTION About Heading */\n\nmain.about>div.about-info {\n\n    width: 88%;\n\n    display: flex;\n\n    background-color: rgba(var(--color-secondary-2), .45);\n    border-bottom-left-radius: 4rem;\n}\n\n/* SECTION About Left */\n\nmain.about>div.about-info>div.about-left {\n    width: 54%;\n\n    font-size: 1.25rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n\n    padding: 0rem 2rem;\n    margin: auto;\n\n    overflow-y: auto;\n\n}\n\nmain.about>div.about-info>div.about-left>p::first-letter {\n    font-weight: 800;\n    font-size: 3rem;\n    padding-right: .25rem;\n    color: rgba(var(--color-primary-1));\n}\n\n/* END !SECTION About Left */\n\n/* SECTION About Right */\n\nmain.about>div.about-info>div.about-right {\n    width: 46%;\n\n    font-size: 1.15rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    padding: 2rem;\n\n    background-color: rgba(var(--color-secondary-2), .65);\n    border-bottom-left-radius: 4rem;\n\n    text-align: center;\n}\n\nmain.about>div.about-info>div.about-right>.heading-small {\n    color: rgba(var(--color-primary-1));\n    font-size: 2rem;\n    margin-bottom: 1rem;\n\n    font-weight: 800;\n}\n\nmain.about>div.about-info>div.about-right>address>a {\n    font-size: 1.15rem;\n    font-style: normal;\n\n    color: rgba(var(--color-text-secondary));\n\n    text-decoration: none;\n\n}\n\n/* END !SECTION About Right */", "",{"version":3,"sources":["webpack://./src/styles/style-about.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,YAAY;;IAEZ,aAAa;;IAEb,qDAAqD;;IAErD,+BAA+B;;IAE/B,mBAAmB;;IAEnB,gBAAgB;;AAEpB;;AAEA,0BAA0B;;AAE1B;IACI,UAAU;;IAEV,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,oBAAoB;;IAEpB,yBAAyB;IACzB,uBAAuB;IACvB,yBAAyB;;IAEzB,eAAe;;IAEf,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,uCAAuC;AAC3C;;AAEA,+BAA+B;;AAE/B;;IAEI,UAAU;;IAEV,aAAa;;IAEb,qDAAqD;IACrD,+BAA+B;AACnC;;AAEA,uBAAuB;;AAEvB;IACI,UAAU;;IAEV,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;;IAE7B,kBAAkB;IAClB,YAAY;;IAEZ,gBAAgB;;AAEpB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,mCAAmC;AACvC;;AAEA,4BAA4B;;AAE5B,wBAAwB;;AAExB;IACI,UAAU;;IAEV,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;;IAEvB,aAAa;;IAEb,qDAAqD;IACrD,+BAA+B;;IAE/B,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,eAAe;IACf,mBAAmB;;IAEnB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;;IAElB,wCAAwC;;IAExC,qBAAqB;;AAEzB;;AAEA,6BAA6B","sourcesContent":["main.about {\n    width: 90%;\n    height: 100%;\n\n    display: none;\n\n    background-color: rgba(var(--color-secondary-2), .45);\n\n    border-bottom-left-radius: 4rem;\n\n    padding-left: .5rem;\n\n    overflow: hidden;\n\n}\n\n/* SECTION About Heading */\n\nmain.about>div.about-heading {\n    width: 12%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    align-content: baseline;\n\n}\n\nmain.about>div.about-heading>p.about-title {\n    margin: 4.25rem auto;\n\n    writing-mode: vertical-rl;\n    text-orientation: mixed;\n    transform: rotate(180deg);\n\n    font-size: 4rem;\n\n    align-self: flex-end;\n}\n\nmain.about>div.about-heading>svg.title-icon {\n    width: 6rem;\n    height: 6rem;\n\n    fill: rgba(var(--color-text-secondary));\n}\n\n/* END !SECTION About Heading */\n\nmain.about>div.about-info {\n\n    width: 88%;\n\n    display: flex;\n\n    background-color: rgba(var(--color-secondary-2), .45);\n    border-bottom-left-radius: 4rem;\n}\n\n/* SECTION About Left */\n\nmain.about>div.about-info>div.about-left {\n    width: 54%;\n\n    font-size: 1.25rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n\n    padding: 0rem 2rem;\n    margin: auto;\n\n    overflow-y: auto;\n\n}\n\nmain.about>div.about-info>div.about-left>p::first-letter {\n    font-weight: 800;\n    font-size: 3rem;\n    padding-right: .25rem;\n    color: rgba(var(--color-primary-1));\n}\n\n/* END !SECTION About Left */\n\n/* SECTION About Right */\n\nmain.about>div.about-info>div.about-right {\n    width: 46%;\n\n    font-size: 1.15rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    padding: 2rem;\n\n    background-color: rgba(var(--color-secondary-2), .65);\n    border-bottom-left-radius: 4rem;\n\n    text-align: center;\n}\n\nmain.about>div.about-info>div.about-right>.heading-small {\n    color: rgba(var(--color-primary-1));\n    font-size: 2rem;\n    margin-bottom: 1rem;\n\n    font-weight: 800;\n}\n\nmain.about>div.about-info>div.about-right>address>a {\n    font-size: 1.15rem;\n    font-style: normal;\n\n    color: rgba(var(--color-text-secondary));\n\n    text-decoration: none;\n\n}\n\n/* END !SECTION About Right */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style-home.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style-home.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M21.05 29 16 23.9q-.35-.3-.825-.3t-.825.35q-.4.35-.4.85t.4.8l5.75 5.75q.4.45.975.45t.975-.45l11.6-11.6q.3-.3.275-.775-.025-.475-.325-.825-.35-.35-.85-.35t-.85.35ZM24 42.85q-3.95 0-7.4-1.45t-6-4q-2.55-2.55-4-6-1.45-3.45-1.45-7.4t1.45-7.4q1.45-3.45 4-6t6-4q3.45-1.45 7.4-1.45t7.4 1.45q3.45 1.45 6 4t4 6q1.45 3.45 1.45 7.4t-1.45 7.4q-1.45 3.45-4 6t-6 4q-3.45 1.45-7.4 1.45ZM24 24Zm0 16.65q7.05 0 11.85-4.8T40.65 24q0-7.05-4.8-11.85T24 7.35q-7.05 0-11.85 4.8T7.35 24q0 7.05 4.8 11.85T24 40.65Z"></path></svg> */ "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><path d=\"M21.05 29 16 23.9q-.35-.3-.825-.3t-.825.35q-.4.35-.4.85t.4.8l5.75 5.75q.4.45.975.45t.975-.45l11.6-11.6q.3-.3.275-.775-.025-.475-.325-.825-.35-.35-.85-.35t-.85.35ZM24 42.85q-3.95 0-7.4-1.45t-6-4q-2.55-2.55-4-6-1.45-3.45-1.45-7.4t1.45-7.4q1.45-3.45 4-6t6-4q3.45-1.45 7.4-1.45t7.4 1.45q3.45 1.45 6 4t4 6q1.45 3.45 1.45 7.4t-1.45 7.4q-1.45 3.45-4 6t-6 4q-3.45 1.45-7.4 1.45ZM24 24Zm0 16.65q7.05 0 11.85-4.8T40.65 24q0-7.05-4.8-11.85T24 7.35q-7.05 0-11.85 4.8T7.35 24q0 7.05 4.8 11.85T24 40.65Z\"></path></svg>"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M15.85 32.15q.3.35.75.35t.8-.35l6.6-6.6 6.65 6.65q.3.3.75.275.45-.025.75-.325.35-.3.35-.75t-.35-.8l-6.6-6.6 6.65-6.65q.3-.3.275-.75-.025-.45-.325-.75-.3-.35-.75-.35t-.8.35l-6.6 6.6-6.65-6.65q-.3-.3-.75-.275-.45.025-.75.325-.35.3-.35.75t.35.8l6.6 6.6-6.65 6.65q-.3.3-.275.75.025.45.325.75ZM24 42.85q-4 0-7.425-1.45t-5.975-4q-2.55-2.55-4-5.975Q5.15 28 5.15 24q0-3.95 1.45-7.4t4-6q2.55-2.55 5.975-4Q20 5.15 24 5.15q3.95 0 7.4 1.45t6 4q2.55 2.55 4 5.975Q42.85 20 42.85 24t-1.45 7.425q-1.45 3.425-4 5.975t-5.975 4Q28 42.85 24 42.85ZM24 24Zm0 16.65q6.85 0 11.75-4.875T40.65 24q0-6.85-4.9-11.75T24 7.35q-6.9 0-11.775 4.9T7.35 24q0 6.9 4.875 11.775T24 40.65Z"></svg> */ "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><path d=\"M15.85 32.15q.3.35.75.35t.8-.35l6.6-6.6 6.65 6.65q.3.3.75.275.45-.025.75-.325.35-.3.35-.75t-.35-.8l-6.6-6.6 6.65-6.65q.3-.3.275-.75-.025-.45-.325-.75-.3-.35-.75-.35t-.8.35l-6.6 6.6-6.65-6.65q-.3-.3-.75-.275-.45.025-.75.325-.35.3-.35.75t.35.8l6.6 6.6-6.65 6.65q-.3.3-.275.75.025.45.325.75ZM24 42.85q-4 0-7.425-1.45t-5.975-4q-2.55-2.55-4-5.975Q5.15 28 5.15 24q0-3.95 1.45-7.4t4-6q2.55-2.55 5.975-4Q20 5.15 24 5.15q3.95 0 7.4 1.45t6 4q2.55 2.55 4 5.975Q42.85 20 42.85 24t-1.45 7.425q-1.45 3.425-4 5.975t-5.975 4Q28 42.85 24 42.85ZM24 24Zm0 16.65q6.85 0 11.75-4.875T40.65 24q0-6.85-4.9-11.75T24 7.35q-6.9 0-11.775 4.9T7.35 24q0 6.9 4.875 11.775T24 40.65Z\"></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "main.home {\n    width: 90%;\n\n    display: none;\n\n    background-color: rgba(var(--color-secondary-2), .45);\n\n    border-bottom-left-radius: 4rem;\n\n    padding-left: 1rem;\n\n    --display-morning: 225, 143, 227;\n    --display-afternoon: 255, 180, 2;\n    --display-night: 225, 28, 54;\n\n    overflow: hidden;\n\n}\n\n/* SECTION Home Left */\n\nmain.home>.home-left {\n    width: 60%;\n\n    padding: 0rem .25rem 0rem 1rem;\n\n    align-self: center;\n\n    font-family: 'Maron Rose';\n\n    z-index: 6;\n}\n\ndiv.home-request {\n    margin-top: 2rem;\n    margin-right: 4rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 2rem;\n\n}\n\n\n/* END !SECTION Home Left */\n\n/* SECTION Home Right */\n\nmain.home>.home-right {\n    width: 40%;\n\n    border-bottom-left-radius: 4rem;\n\n    align-items: stretch;\n\n    position: relative;\n}\n\n/* SECTION Request Reserve Table */\n\nmain.home>.home-right>div.request-menu {\n    height: 100%;\n    width: 100%;\n\n    background-color: rgba(var(--color-primary-2), .85);\n    color: rgb(var(--color-text-primary));\n\n    position: absolute;\n\n    padding: 1rem 1.25rem;\n\n    z-index: 8;\n\n    border-bottom-left-radius: 4rem;\n\n    box-sizing: border-box;\n\n    display: none;\n    flex-flow: column;\n    justify-content: center;\n\n    overflow: auto;\n\n}\n\ndiv.home-left:has(>div.home-request>input#tableReserve:checked)+div.home-right>div.request-menu {\n    display: flex;\n}\n\ndiv.request-menu div.home-request-text {\n    font-size: 1.25rem;\n    font-weight: 600;\n    margin: .5rem 0rem 0rem;\n\n    font-family: 'Maron Rose';\n}\n\ndiv.request-menu label {\n    font-size: .9rem;\n    margin: .25rem 0rem;\n    font-weight: lighter;\n}\n\ndiv.request-menu input.input-text {\n    /* height: 2rem; */\n    border: none;\n    border-radius: .25rem;\n\n    padding: .65rem;\n\n    font-family: 'Maron Rose';\n}\n\ndiv.request-menu input.input-text:focus {\n    outline: none;\n}\n\ndiv.request-menu [class^=\"home-request-\"] {\n    display: flex;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: 2rem;\n\n    margin-bottom: 1rem;\n}\n\ndiv.request-menu .home-request-name,\ndiv.request-menu .home-request-info,\ndiv.request-menu .home-request-time {\n    justify-content: center;\n}\n\n.input-request>label {\n    cursor: default;\n}\n\ndiv.request-menu .input-request {\n    display: flex;\n    flex-flow: column nowrap;\n\n    width: max(45%, 5rem);\n\n    position: relative;\n}\n\ndiv.request-menu .input-request>input:not([type=\"date\"])+span {\n    position: absolute;\n    bottom: 10%;\n    right: 2%;\n\n    width: 1.5rem;\n    height: 1.5rem;\n\n    border-radius: .25rem;\n\n}\n\ndiv.request-menu .input-request>input:valid:not([type=\"date\"])+span {\n\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\n    filter: invert(24%) sepia(15%) saturate(3103%) hue-rotate(81deg) brightness(93%) contrast(95%);\n}\n\ndiv.request-menu .input-request>input:focus:invalid:not([type=\"date\"])+span {\n\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\n    filter: invert(49%) sepia(35%) saturate(4372%) hue-rotate(323deg) brightness(92%) contrast(86%);\n}\n\n/* SECTION Time Slots */\n\ndiv.request-menu .home-request-time {\n    display: grid;\n    grid-template-columns: repeat(3, 5rem);\n    grid-template-areas: \"morning afternoon night\"\n        \"slot slot slot\";\n    justify-content: space-evenly;\n    justify-items: center;\n    gap: .1rem;\n}\n\ninput#morning+label {\n    grid-area: morning;\n    background-color: rgba(var(--display-morning), .45);\n    opacity: .5;\n}\n\ninput#morning:checked+label,\ninput#morning+label:hover {\n    background-color: rgba(var(--display-morning));\n    opacity: 1;\n}\n\ninput#afternoon+label {\n    grid-area: afternoon;\n    background-color: rgba(var(--display-afternoon), .45);\n    opacity: .5;\n}\n\ninput#afternoon:checked+label,\ninput#afternoon+label:hover {\n    background-color: rgba(var(--display-afternoon));\n    opacity: 1;\n}\n\ninput#night+label {\n    grid-area: night;\n    background-color: rgba(var(--display-night), .45);\n    opacity: .5;\n}\n\ninput#night:checked+label,\ninput#night+label:hover {\n    background-color: rgba(var(--display-night));\n    opacity: 1;\n}\n\ninput.request-time-head+label {\n    width: 6rem;\n    height: 1.75rem;\n    text-align: center;\n\n    padding: .65rem .5rem .15rem;\n\n    border: .15rem solid rgb(var(--color-secondary-1));\n    border-radius: .35rem;\n\n    color: rgb(var(--color-secondary-1));\n}\n\ndiv.time-slot {\n    grid-area: slot;\n    justify-self: stretch;\n\n    display: none;\n    justify-content: space-between;\n\n    margin-top: 1rem;\n}\n\ndiv.time-slot label {\n    width: 3rem;\n    text-align: center;\n\n    padding: .25rem .5rem .05rem;\n    background-color: rgba(var(--color-primary-2), .45);\n\n    border: .1rem solid rgb(var(--color-text-primary));\n    border-radius: .35rem;\n}\n\ndiv.time-slot label:hover,\ndiv.time-slot input:checked+label {\n    background-color: rgba(var(--color-primary-1));\n}\n\ninput.request-time-head#morning:checked~.time-slot-morning {\n    display: flex\n}\n\ninput.request-time-head#afternoon:checked~.time-slot-afternoon {\n    display: flex\n}\n\ninput.request-time-head#night:checked~.time-slot-night {\n    display: flex\n}\n\n/* END !SECTION Time Slots */\n\ndiv.request-menu button {\n    align-self: flex-end;\n}\n\n/* END !SECTION Request Reserve Table */\n\nmain.home img.home-right {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    z-index: 2;\n\n    border-bottom-left-radius: 4rem;\n}\n\n/* SECTION Home Right */", "",{"version":3,"sources":["webpack://./src/styles/style-home.css"],"names":[],"mappings":"AAAA;IACI,UAAU;;IAEV,aAAa;;IAEb,qDAAqD;;IAErD,+BAA+B;;IAE/B,kBAAkB;;IAElB,gCAAgC;IAChC,gCAAgC;IAChC,4BAA4B;;IAE5B,gBAAgB;;AAEpB;;AAEA,sBAAsB;;AAEtB;IACI,UAAU;;IAEV,8BAA8B;;IAE9B,kBAAkB;;IAElB,yBAAyB;;IAEzB,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,SAAS;;AAEb;;;AAGA,2BAA2B;;AAE3B,uBAAuB;;AAEvB;IACI,UAAU;;IAEV,+BAA+B;;IAE/B,oBAAoB;;IAEpB,kBAAkB;AACtB;;AAEA,kCAAkC;;AAElC;IACI,YAAY;IACZ,WAAW;;IAEX,mDAAmD;IACnD,qCAAqC;;IAErC,kBAAkB;;IAElB,qBAAqB;;IAErB,UAAU;;IAEV,+BAA+B;;IAE/B,sBAAsB;;IAEtB,aAAa;IACb,iBAAiB;IACjB,uBAAuB;;IAEvB,cAAc;;AAElB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;;IAEvB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;;IAErB,eAAe;;IAEf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,SAAS;;IAET,mBAAmB;AACvB;;AAEA;;;IAGI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,wBAAwB;;IAExB,qBAAqB;;IAErB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;;IAET,aAAa;IACb,cAAc;;IAEd,qBAAqB;;AAEzB;;AAEA;;IAEI,mDAAwmB;;IAExmB,8FAA8F;AAClG;;AAEA;;IAEI,mDAAkwB;;IAElwB,+FAA+F;AACnG;;AAEA,uBAAuB;;AAEvB;IACI,aAAa;IACb,sCAAsC;IACtC;wBACoB;IACpB,6BAA6B;IAC7B,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,mDAAmD;IACnD,WAAW;AACf;;AAEA;;IAEI,8CAA8C;IAC9C,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,qDAAqD;IACrD,WAAW;AACf;;AAEA;;IAEI,gDAAgD;IAChD,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,iDAAiD;IACjD,WAAW;AACf;;AAEA;;IAEI,4CAA4C;IAC5C,UAAU;AACd;;AAEA;IACI,WAAW;IACX,eAAe;IACf,kBAAkB;;IAElB,4BAA4B;;IAE5B,kDAAkD;IAClD,qBAAqB;;IAErB,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,qBAAqB;;IAErB,aAAa;IACb,8BAA8B;;IAE9B,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;;IAElB,4BAA4B;IAC5B,mDAAmD;;IAEnD,kDAAkD;IAClD,qBAAqB;AACzB;;AAEA;;IAEI,8CAA8C;AAClD;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA,4BAA4B;;AAE5B;IACI,oBAAoB;AACxB;;AAEA,uCAAuC;;AAEvC;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,UAAU;;IAEV,+BAA+B;AACnC;;AAEA,uBAAuB","sourcesContent":["main.home {\n    width: 90%;\n\n    display: none;\n\n    background-color: rgba(var(--color-secondary-2), .45);\n\n    border-bottom-left-radius: 4rem;\n\n    padding-left: 1rem;\n\n    --display-morning: 225, 143, 227;\n    --display-afternoon: 255, 180, 2;\n    --display-night: 225, 28, 54;\n\n    overflow: hidden;\n\n}\n\n/* SECTION Home Left */\n\nmain.home>.home-left {\n    width: 60%;\n\n    padding: 0rem .25rem 0rem 1rem;\n\n    align-self: center;\n\n    font-family: 'Maron Rose';\n\n    z-index: 6;\n}\n\ndiv.home-request {\n    margin-top: 2rem;\n    margin-right: 4rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 2rem;\n\n}\n\n\n/* END !SECTION Home Left */\n\n/* SECTION Home Right */\n\nmain.home>.home-right {\n    width: 40%;\n\n    border-bottom-left-radius: 4rem;\n\n    align-items: stretch;\n\n    position: relative;\n}\n\n/* SECTION Request Reserve Table */\n\nmain.home>.home-right>div.request-menu {\n    height: 100%;\n    width: 100%;\n\n    background-color: rgba(var(--color-primary-2), .85);\n    color: rgb(var(--color-text-primary));\n\n    position: absolute;\n\n    padding: 1rem 1.25rem;\n\n    z-index: 8;\n\n    border-bottom-left-radius: 4rem;\n\n    box-sizing: border-box;\n\n    display: none;\n    flex-flow: column;\n    justify-content: center;\n\n    overflow: auto;\n\n}\n\ndiv.home-left:has(>div.home-request>input#tableReserve:checked)+div.home-right>div.request-menu {\n    display: flex;\n}\n\ndiv.request-menu div.home-request-text {\n    font-size: 1.25rem;\n    font-weight: 600;\n    margin: .5rem 0rem 0rem;\n\n    font-family: 'Maron Rose';\n}\n\ndiv.request-menu label {\n    font-size: .9rem;\n    margin: .25rem 0rem;\n    font-weight: lighter;\n}\n\ndiv.request-menu input.input-text {\n    /* height: 2rem; */\n    border: none;\n    border-radius: .25rem;\n\n    padding: .65rem;\n\n    font-family: 'Maron Rose';\n}\n\ndiv.request-menu input.input-text:focus {\n    outline: none;\n}\n\ndiv.request-menu [class^=\"home-request-\"] {\n    display: flex;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: 2rem;\n\n    margin-bottom: 1rem;\n}\n\ndiv.request-menu .home-request-name,\ndiv.request-menu .home-request-info,\ndiv.request-menu .home-request-time {\n    justify-content: center;\n}\n\n.input-request>label {\n    cursor: default;\n}\n\ndiv.request-menu .input-request {\n    display: flex;\n    flex-flow: column nowrap;\n\n    width: max(45%, 5rem);\n\n    position: relative;\n}\n\ndiv.request-menu .input-request>input:not([type=\"date\"])+span {\n    position: absolute;\n    bottom: 10%;\n    right: 2%;\n\n    width: 1.5rem;\n    height: 1.5rem;\n\n    border-radius: .25rem;\n\n}\n\ndiv.request-menu .input-request>input:valid:not([type=\"date\"])+span {\n\n    background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><path d=\"M21.05 29 16 23.9q-.35-.3-.825-.3t-.825.35q-.4.35-.4.85t.4.8l5.75 5.75q.4.45.975.45t.975-.45l11.6-11.6q.3-.3.275-.775-.025-.475-.325-.825-.35-.35-.85-.35t-.85.35ZM24 42.85q-3.95 0-7.4-1.45t-6-4q-2.55-2.55-4-6-1.45-3.45-1.45-7.4t1.45-7.4q1.45-3.45 4-6t6-4q3.45-1.45 7.4-1.45t7.4 1.45q3.45 1.45 6 4t4 6q1.45 3.45 1.45 7.4t-1.45 7.4q-1.45 3.45-4 6t-6 4q-3.45 1.45-7.4 1.45ZM24 24Zm0 16.65q7.05 0 11.85-4.8T40.65 24q0-7.05-4.8-11.85T24 7.35q-7.05 0-11.85 4.8T7.35 24q0 7.05 4.8 11.85T24 40.65Z\"></path></svg>');\n\n    filter: invert(24%) sepia(15%) saturate(3103%) hue-rotate(81deg) brightness(93%) contrast(95%);\n}\n\ndiv.request-menu .input-request>input:focus:invalid:not([type=\"date\"])+span {\n\n    background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><path d=\"M15.85 32.15q.3.35.75.35t.8-.35l6.6-6.6 6.65 6.65q.3.3.75.275.45-.025.75-.325.35-.3.35-.75t-.35-.8l-6.6-6.6 6.65-6.65q.3-.3.275-.75-.025-.45-.325-.75-.3-.35-.75-.35t-.8.35l-6.6 6.6-6.65-6.65q-.3-.3-.75-.275-.45.025-.75.325-.35.3-.35.75t.35.8l6.6 6.6-6.65 6.65q-.3.3-.275.75.025.45.325.75ZM24 42.85q-4 0-7.425-1.45t-5.975-4q-2.55-2.55-4-5.975Q5.15 28 5.15 24q0-3.95 1.45-7.4t4-6q2.55-2.55 5.975-4Q20 5.15 24 5.15q3.95 0 7.4 1.45t6 4q2.55 2.55 4 5.975Q42.85 20 42.85 24t-1.45 7.425q-1.45 3.425-4 5.975t-5.975 4Q28 42.85 24 42.85ZM24 24Zm0 16.65q6.85 0 11.75-4.875T40.65 24q0-6.85-4.9-11.75T24 7.35q-6.9 0-11.775 4.9T7.35 24q0 6.9 4.875 11.775T24 40.65Z\"></svg>');\n\n    filter: invert(49%) sepia(35%) saturate(4372%) hue-rotate(323deg) brightness(92%) contrast(86%);\n}\n\n/* SECTION Time Slots */\n\ndiv.request-menu .home-request-time {\n    display: grid;\n    grid-template-columns: repeat(3, 5rem);\n    grid-template-areas: \"morning afternoon night\"\n        \"slot slot slot\";\n    justify-content: space-evenly;\n    justify-items: center;\n    gap: .1rem;\n}\n\ninput#morning+label {\n    grid-area: morning;\n    background-color: rgba(var(--display-morning), .45);\n    opacity: .5;\n}\n\ninput#morning:checked+label,\ninput#morning+label:hover {\n    background-color: rgba(var(--display-morning));\n    opacity: 1;\n}\n\ninput#afternoon+label {\n    grid-area: afternoon;\n    background-color: rgba(var(--display-afternoon), .45);\n    opacity: .5;\n}\n\ninput#afternoon:checked+label,\ninput#afternoon+label:hover {\n    background-color: rgba(var(--display-afternoon));\n    opacity: 1;\n}\n\ninput#night+label {\n    grid-area: night;\n    background-color: rgba(var(--display-night), .45);\n    opacity: .5;\n}\n\ninput#night:checked+label,\ninput#night+label:hover {\n    background-color: rgba(var(--display-night));\n    opacity: 1;\n}\n\ninput.request-time-head+label {\n    width: 6rem;\n    height: 1.75rem;\n    text-align: center;\n\n    padding: .65rem .5rem .15rem;\n\n    border: .15rem solid rgb(var(--color-secondary-1));\n    border-radius: .35rem;\n\n    color: rgb(var(--color-secondary-1));\n}\n\ndiv.time-slot {\n    grid-area: slot;\n    justify-self: stretch;\n\n    display: none;\n    justify-content: space-between;\n\n    margin-top: 1rem;\n}\n\ndiv.time-slot label {\n    width: 3rem;\n    text-align: center;\n\n    padding: .25rem .5rem .05rem;\n    background-color: rgba(var(--color-primary-2), .45);\n\n    border: .1rem solid rgb(var(--color-text-primary));\n    border-radius: .35rem;\n}\n\ndiv.time-slot label:hover,\ndiv.time-slot input:checked+label {\n    background-color: rgba(var(--color-primary-1));\n}\n\ninput.request-time-head#morning:checked~.time-slot-morning {\n    display: flex\n}\n\ninput.request-time-head#afternoon:checked~.time-slot-afternoon {\n    display: flex\n}\n\ninput.request-time-head#night:checked~.time-slot-night {\n    display: flex\n}\n\n/* END !SECTION Time Slots */\n\ndiv.request-menu button {\n    align-self: flex-end;\n}\n\n/* END !SECTION Request Reserve Table */\n\nmain.home img.home-right {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    z-index: 2;\n\n    border-bottom-left-radius: 4rem;\n}\n\n/* SECTION Home Right */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style-menu.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style-menu.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "main.menu {\n    width: 90%;\n    height: 100%;\n\n    display: none;\n\n    background-color: rgba(var(--color-secondary-2), .45);\n\n    border-bottom-left-radius: 4rem;\n\n    padding-left: .5rem;\n\n    overflow: hidden;\n\n    --color-aptz: 63, 72, 51;\n    --color-aptz-text: 104, 120, 84;\n    --color-dish: 82, 43, 41;\n    --color-dish-text: 135, 73, 69;\n    --color-mc: 117, 16, 6;\n    --color-mc-text: 154, 26, 10;\n    --color-comp: 93, 60, 24;\n    --color-comp-text: 147, 97, 37;\n}\n\n/* SECTION Menu Heading */\n\nmain.menu>div.menu-heading {\n    width: 12%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    align-content: baseline;\n\n}\n\nmain.menu>div.menu-heading>p.menu-title {\n    margin: 4.25rem auto;\n\n    writing-mode: vertical-rl;\n    text-orientation: mixed;\n    transform: rotate(180deg);\n\n    font-size: 4rem;\n\n    align-self: flex-end;\n}\n\nmain.menu>div.menu-heading>svg.title-icon {\n    width: 6rem;\n    height: 6rem;\n\n    fill: rgba(var(--color-text-secondary));\n}\n\n/* END !SECTION Menu Heading */\n\n/* SECTION Slide Menu */\n\nmain.menu>div.menu-slides {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n\n    width: 88%;\n    height: 100%;\n\n    border-bottom-left-radius: 4rem;\n\n    background-color: rgba(var(--color-secondary-2), .45);\n\n    overflow: hidden;\n}\n\n.menu-slides>label {\n    padding: .25rem 3.5rem .18rem;\n\n    height: 12%;\n\n    font-size: 1.5rem;\n    /* text-align: center; */\n\n    background-color: rgba(var(--color-secondary-2), .65);\n\n    display: flex;\n    align-items: center;\n}\n\n.grid-vertical {\n    display: none;\n\n    height: 100%;\n\n}\n\n/* SECTION Slide Menu Appetizer */\n\n.menu-slides>input#appetizer:checked~.tab-appetizer-window {\n    display: grid;\n    grid-template-columns: 15rem;\n    grid-template-rows: repeat(auto-fill, 10rem);\n    grid-auto-columns: 15rem;\n    gap: 2rem 1rem;\n    align-content: space-evenly;\n\n    padding: 1rem;\n\n    grid-auto-flow: column;\n\n    overflow-x: auto;\n\n    background-color: rgba(var(--color-aptz), .15);\n}\n\n.menu-slides>input#appetizer+label,\n.menu-slides>input#appetizer label {\n    background-color: rgba(var(--color-aptz), .65);\n    color: rgb(var(--color-aptz-text));\n}\n\n.menu-slides>input#appetizer+label:hover,\n.menu-slides>input#appetizer:checked+label {\n    background-color: rgba(var(--color-aptz), .85);\n    color: rgb(var(--color-text-primary));\n}\n\n/* SECTION Grid Item  */\n\n.grid-item {\n    display: grid;\n    grid-template-columns: repeat(4, .5fr);\n    grid-template-rows: repeat(3, .5fr);\n    align-items: center;\n    justify-items: center;\n\n    border-radius: .25rem;\n\n    overflow: hidden;\n\n    font-family: 'Maron Rose';\n}\n\n.grid-item>img.item-image,\n.grid-item>.item-image-fg {\n    grid-area: 1 / 1 / -1 / -1;\n    width: 100%;\n    height: 100%;\n\n    object-fit: cover;\n\n    z-index: 1;\n}\n\n.grid-item>.item-image-fg {\n    background: linear-gradient(to bottom, rgba(var(--color-secondary-2), 0.75) 30%, rgba(var(--color-secondary-2), 1));\n\n    z-index: 2;\n}\n\n.grid-item:hover>.item-image-fg {\n    background: linear-gradient(to bottom, rgba(var(--color-secondary-2), 0.5) 60%, rgba(var(--color-secondary-2), 1));\n}\n\n.grid-item>div.item-sideInfo {\n    grid-column: -5 / -2;\n    grid-row: -2 / -1;\n    align-self: start;\n    justify-self: start;\n\n    margin-left: .65rem;\n\n    z-index: 4;\n}\n\n.grid-item>div.item-sideInfo>.item-title {\n    font-size: 1.45rem;\n    color: rgb(var(--color-text-primary));\n}\n\n.grid-item>div.item-sideInfo>.item-price {\n    margin-bottom: .65rem;\n}\n\n.grid-item>div.item-sideInfo>p {\n    margin: 0rem;\n}\n\n.grid-item>button.item-button {\n\n    grid-area: -2 / -2 / -1 / -1;\n    align-self: end;\n    justify-self: end;\n\n    z-index: 4;\n\n    background: rgba(var(--color-secondary-2), .45);\n    border: none;\n    border-radius: .25rem;\n\n    padding: .25rem;\n    margin: .5rem;\n}\n\nsvg.icon-button {\n    width: 2rem;\n    height: 2rem;\n\n    fill: rgba(var(--color-text-primary));\n}\n\nbutton.item-button:hover>svg.icon-button {\n    fill: rgba(var(--color-text-secondary));\n}\n\n/* END !SECTION Grid Item  */\n\n/* END !SECTION Slide Menu Appetizer */\n\n/* SECTION Slide Menu Dish */\n\n.menu-slides>input#dish:checked~.tab-dish-window {\n    display: flex;\n\n    background-color: rgba(var(--color-dish), .15);\n}\n\n.grid-vertical>label {\n\n    writing-mode: vertical-rl;\n    text-orientation: mixed;\n    transform: rotate(180deg);\n    font-size: 1.2rem;\n\n    padding: 2rem .8rem 0rem;\n}\n\n.menu-slides>input#dish+label {\n    background-color: rgba(var(--color-dish), .65);\n    color: rgb(var(--color-dish-text));\n}\n\n.menu-slides>input#dish+label:hover,\n.menu-slides>input#dish:checked+label {\n    background-color: rgba(var(--color-dish), .85);\n    color: rgb(var(--color-text-primary));\n}\n\n.menu-slides>input#dish~.tab-dish-window label {\n    background-color: rgba(var(--color-dish), .25);\n    color: rgba(var(--color-dish-text), .8);\n}\n\n.grid-horizontal {\n    display: none;\n\n    grid-template-columns: 15rem;\n    grid-template-rows: repeat(auto-fill, 10rem);\n    grid-auto-columns: 15rem;\n    gap: 1rem;\n    grid-auto-flow: column;\n    align-content: space-evenly;\n\n    padding: 1rem;\n\n    overflow-x: auto;\n\n    width: 100%;\n}\n\n.tab-dish-window>input#dishVeg:checked+label,\n.tab-dish-window>input#dishBeef:checked+label,\n.tab-dish-window>input#dishLamb:checked+label,\n.tab-dish-window>input#dishSea:checked+label {\n    background-color: rgba(var(--color-dish), .7);\n    color: rgb(var(--color-text-primary));\n\n}\n\n.tab-dish-window>input#dishVeg:checked~.tab-dishVeg-window,\n.tab-dish-window>input#dishBeef:checked~.tab-dishBeef-window,\n.tab-dish-window>input#dishLamb:checked~.tab-dishLamb-window,\n.tab-dish-window>input#dishSea:checked~.tab-dishSea-window {\n    display: grid;\n}\n\n/* END !SECTION Slide Menu Dish */\n\n\n/* SECTION Slide Menu MC */\n\n.menu-slides>input#mc:checked~.tab-mc-window {\n    display: flex;\n\n    background-color: rgba(var(--color-mc), .15);\n}\n\n.menu-slides>input#mc+label {\n    background-color: rgba(var(--color-mc), .65);\n    color: rgb(var(--color-mc-text));\n}\n\n.menu-slides>input#mc+label:hover,\n.menu-slides>input#mc:checked+label {\n    background-color: rgba(var(--color-mc), .85);\n    color: rgb(var(--color-text-primary));\n}\n\n.menu-slides>input#mc~.tab-mc-window label {\n    background-color: rgba(var(--color-mc), .25);\n    color: rgba(var(--color-mc-text), .8);\n}\n\n.tab-mc-window>input#mcBiriyani:checked+label,\n.tab-mc-window>input#mcTandoori:checked+label {\n    background-color: rgba(var(--color-mc), .7);\n    color: rgb(var(--color-text-primary));\n}\n\n.tab-mc-window>input#mcBiriyani:checked~.tab-mcBiriyani-window,\n.tab-mc-window>input#mcTandoori:checked~.tab-mcTandoori-window {\n    display: grid;\n}\n\n\n/* END !SECTION Slide Menu MC */\n\n/* SECTION Slide Menu Comp */\n\n\n.menu-slides>input#comp:checked~.tab-comp-window {\n    display: flex;\n\n    background-color: rgba(var(--color-comp), .15);\n}\n\n.menu-slides>input#comp+label {\n    background-color: rgba(var(--color-comp), .65);\n    color: rgb(var(--color-comp-text));\n}\n\n.menu-slides>input#comp+label:hover,\n.menu-slides>input#comp:checked+label {\n    background-color: rgba(var(--color-comp), .85);\n    color: rgb(var(--color-text-primary));\n}\n\n.menu-slides>input#comp~.tab-comp-window label {\n    background-color: rgba(var(--color-comp), .25);\n    color: rgba(var(--color-comp-text), .7);\n}\n\n.tab-comp-window>input#compBread:checked+label,\n.tab-comp-window>input#compBev:checked+label,\n.tab-comp-window>input#compDes:checked+label {\n    background-color: rgba(var(--color-comp), .7);\n    color: rgb(var(--color-text-primary));\n}\n\n.tab-comp-window>input#compBread:checked~.tab-compBread-window,\n.tab-comp-window>input#compBev:checked~.tab-compBev-window,\n.tab-comp-window>input#compDes:checked~.tab-compDes-window {\n    display: grid;\n}\n\n/* END !SECTION Slide Menu Comp */\n\n\n/* END !SECTION Slide Menu */", "",{"version":3,"sources":["webpack://./src/styles/style-menu.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,YAAY;;IAEZ,aAAa;;IAEb,qDAAqD;;IAErD,+BAA+B;;IAE/B,mBAAmB;;IAEnB,gBAAgB;;IAEhB,wBAAwB;IACxB,+BAA+B;IAC/B,wBAAwB;IACxB,8BAA8B;IAC9B,sBAAsB;IACtB,4BAA4B;IAC5B,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA,yBAAyB;;AAEzB;IACI,UAAU;;IAEV,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,oBAAoB;;IAEpB,yBAAyB;IACzB,uBAAuB;IACvB,yBAAyB;;IAEzB,eAAe;;IAEf,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,uCAAuC;AAC3C;;AAEA,8BAA8B;;AAE9B,uBAAuB;;AAEvB;IACI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;;IAEpB,UAAU;IACV,YAAY;;IAEZ,+BAA+B;;IAE/B,qDAAqD;;IAErD,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;;IAE7B,WAAW;;IAEX,iBAAiB;IACjB,wBAAwB;;IAExB,qDAAqD;;IAErD,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;;IAEb,YAAY;;AAEhB;;AAEA,iCAAiC;;AAEjC;IACI,aAAa;IACb,4BAA4B;IAC5B,4CAA4C;IAC5C,wBAAwB;IACxB,cAAc;IACd,2BAA2B;;IAE3B,aAAa;;IAEb,sBAAsB;;IAEtB,gBAAgB;;IAEhB,8CAA8C;AAClD;;AAEA;;IAEI,8CAA8C;IAC9C,kCAAkC;AACtC;;AAEA;;IAEI,8CAA8C;IAC9C,qCAAqC;AACzC;;AAEA,uBAAuB;;AAEvB;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,mBAAmB;IACnB,qBAAqB;;IAErB,qBAAqB;;IAErB,gBAAgB;;IAEhB,yBAAyB;AAC7B;;AAEA;;IAEI,0BAA0B;IAC1B,WAAW;IACX,YAAY;;IAEZ,iBAAiB;;IAEjB,UAAU;AACd;;AAEA;IACI,mHAAmH;;IAEnH,UAAU;AACd;;AAEA;IACI,kHAAkH;AACtH;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;;IAEnB,mBAAmB;;IAEnB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,4BAA4B;IAC5B,eAAe;IACf,iBAAiB;;IAEjB,UAAU;;IAEV,+CAA+C;IAC/C,YAAY;IACZ,qBAAqB;;IAErB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,qCAAqC;AACzC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA,4BAA4B;;AAE5B,sCAAsC;;AAEtC,4BAA4B;;AAE5B;IACI,aAAa;;IAEb,8CAA8C;AAClD;;AAEA;;IAEI,yBAAyB;IACzB,uBAAuB;IACvB,yBAAyB;IACzB,iBAAiB;;IAEjB,wBAAwB;AAC5B;;AAEA;IACI,8CAA8C;IAC9C,kCAAkC;AACtC;;AAEA;;IAEI,8CAA8C;IAC9C,qCAAqC;AACzC;;AAEA;IACI,8CAA8C;IAC9C,uCAAuC;AAC3C;;AAEA;IACI,aAAa;;IAEb,4BAA4B;IAC5B,4CAA4C;IAC5C,wBAAwB;IACxB,SAAS;IACT,sBAAsB;IACtB,2BAA2B;;IAE3B,aAAa;;IAEb,gBAAgB;;IAEhB,WAAW;AACf;;AAEA;;;;IAII,6CAA6C;IAC7C,qCAAqC;;AAEzC;;AAEA;;;;IAII,aAAa;AACjB;;AAEA,iCAAiC;;;AAGjC,0BAA0B;;AAE1B;IACI,aAAa;;IAEb,4CAA4C;AAChD;;AAEA;IACI,4CAA4C;IAC5C,gCAAgC;AACpC;;AAEA;;IAEI,4CAA4C;IAC5C,qCAAqC;AACzC;;AAEA;IACI,4CAA4C;IAC5C,qCAAqC;AACzC;;AAEA;;IAEI,2CAA2C;IAC3C,qCAAqC;AACzC;;AAEA;;IAEI,aAAa;AACjB;;;AAGA,+BAA+B;;AAE/B,4BAA4B;;;AAG5B;IACI,aAAa;;IAEb,8CAA8C;AAClD;;AAEA;IACI,8CAA8C;IAC9C,kCAAkC;AACtC;;AAEA;;IAEI,8CAA8C;IAC9C,qCAAqC;AACzC;;AAEA;IACI,8CAA8C;IAC9C,uCAAuC;AAC3C;;AAEA;;;IAGI,6CAA6C;IAC7C,qCAAqC;AACzC;;AAEA;;;IAGI,aAAa;AACjB;;AAEA,iCAAiC;;;AAGjC,4BAA4B","sourcesContent":["main.menu {\n    width: 90%;\n    height: 100%;\n\n    display: none;\n\n    background-color: rgba(var(--color-secondary-2), .45);\n\n    border-bottom-left-radius: 4rem;\n\n    padding-left: .5rem;\n\n    overflow: hidden;\n\n    --color-aptz: 63, 72, 51;\n    --color-aptz-text: 104, 120, 84;\n    --color-dish: 82, 43, 41;\n    --color-dish-text: 135, 73, 69;\n    --color-mc: 117, 16, 6;\n    --color-mc-text: 154, 26, 10;\n    --color-comp: 93, 60, 24;\n    --color-comp-text: 147, 97, 37;\n}\n\n/* SECTION Menu Heading */\n\nmain.menu>div.menu-heading {\n    width: 12%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    align-content: baseline;\n\n}\n\nmain.menu>div.menu-heading>p.menu-title {\n    margin: 4.25rem auto;\n\n    writing-mode: vertical-rl;\n    text-orientation: mixed;\n    transform: rotate(180deg);\n\n    font-size: 4rem;\n\n    align-self: flex-end;\n}\n\nmain.menu>div.menu-heading>svg.title-icon {\n    width: 6rem;\n    height: 6rem;\n\n    fill: rgba(var(--color-text-secondary));\n}\n\n/* END !SECTION Menu Heading */\n\n/* SECTION Slide Menu */\n\nmain.menu>div.menu-slides {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n\n    width: 88%;\n    height: 100%;\n\n    border-bottom-left-radius: 4rem;\n\n    background-color: rgba(var(--color-secondary-2), .45);\n\n    overflow: hidden;\n}\n\n.menu-slides>label {\n    padding: .25rem 3.5rem .18rem;\n\n    height: 12%;\n\n    font-size: 1.5rem;\n    /* text-align: center; */\n\n    background-color: rgba(var(--color-secondary-2), .65);\n\n    display: flex;\n    align-items: center;\n}\n\n.grid-vertical {\n    display: none;\n\n    height: 100%;\n\n}\n\n/* SECTION Slide Menu Appetizer */\n\n.menu-slides>input#appetizer:checked~.tab-appetizer-window {\n    display: grid;\n    grid-template-columns: 15rem;\n    grid-template-rows: repeat(auto-fill, 10rem);\n    grid-auto-columns: 15rem;\n    gap: 2rem 1rem;\n    align-content: space-evenly;\n\n    padding: 1rem;\n\n    grid-auto-flow: column;\n\n    overflow-x: auto;\n\n    background-color: rgba(var(--color-aptz), .15);\n}\n\n.menu-slides>input#appetizer+label,\n.menu-slides>input#appetizer label {\n    background-color: rgba(var(--color-aptz), .65);\n    color: rgb(var(--color-aptz-text));\n}\n\n.menu-slides>input#appetizer+label:hover,\n.menu-slides>input#appetizer:checked+label {\n    background-color: rgba(var(--color-aptz), .85);\n    color: rgb(var(--color-text-primary));\n}\n\n/* SECTION Grid Item  */\n\n.grid-item {\n    display: grid;\n    grid-template-columns: repeat(4, .5fr);\n    grid-template-rows: repeat(3, .5fr);\n    align-items: center;\n    justify-items: center;\n\n    border-radius: .25rem;\n\n    overflow: hidden;\n\n    font-family: 'Maron Rose';\n}\n\n.grid-item>img.item-image,\n.grid-item>.item-image-fg {\n    grid-area: 1 / 1 / -1 / -1;\n    width: 100%;\n    height: 100%;\n\n    object-fit: cover;\n\n    z-index: 1;\n}\n\n.grid-item>.item-image-fg {\n    background: linear-gradient(to bottom, rgba(var(--color-secondary-2), 0.75) 30%, rgba(var(--color-secondary-2), 1));\n\n    z-index: 2;\n}\n\n.grid-item:hover>.item-image-fg {\n    background: linear-gradient(to bottom, rgba(var(--color-secondary-2), 0.5) 60%, rgba(var(--color-secondary-2), 1));\n}\n\n.grid-item>div.item-sideInfo {\n    grid-column: -5 / -2;\n    grid-row: -2 / -1;\n    align-self: start;\n    justify-self: start;\n\n    margin-left: .65rem;\n\n    z-index: 4;\n}\n\n.grid-item>div.item-sideInfo>.item-title {\n    font-size: 1.45rem;\n    color: rgb(var(--color-text-primary));\n}\n\n.grid-item>div.item-sideInfo>.item-price {\n    margin-bottom: .65rem;\n}\n\n.grid-item>div.item-sideInfo>p {\n    margin: 0rem;\n}\n\n.grid-item>button.item-button {\n\n    grid-area: -2 / -2 / -1 / -1;\n    align-self: end;\n    justify-self: end;\n\n    z-index: 4;\n\n    background: rgba(var(--color-secondary-2), .45);\n    border: none;\n    border-radius: .25rem;\n\n    padding: .25rem;\n    margin: .5rem;\n}\n\nsvg.icon-button {\n    width: 2rem;\n    height: 2rem;\n\n    fill: rgba(var(--color-text-primary));\n}\n\nbutton.item-button:hover>svg.icon-button {\n    fill: rgba(var(--color-text-secondary));\n}\n\n/* END !SECTION Grid Item  */\n\n/* END !SECTION Slide Menu Appetizer */\n\n/* SECTION Slide Menu Dish */\n\n.menu-slides>input#dish:checked~.tab-dish-window {\n    display: flex;\n\n    background-color: rgba(var(--color-dish), .15);\n}\n\n.grid-vertical>label {\n\n    writing-mode: vertical-rl;\n    text-orientation: mixed;\n    transform: rotate(180deg);\n    font-size: 1.2rem;\n\n    padding: 2rem .8rem 0rem;\n}\n\n.menu-slides>input#dish+label {\n    background-color: rgba(var(--color-dish), .65);\n    color: rgb(var(--color-dish-text));\n}\n\n.menu-slides>input#dish+label:hover,\n.menu-slides>input#dish:checked+label {\n    background-color: rgba(var(--color-dish), .85);\n    color: rgb(var(--color-text-primary));\n}\n\n.menu-slides>input#dish~.tab-dish-window label {\n    background-color: rgba(var(--color-dish), .25);\n    color: rgba(var(--color-dish-text), .8);\n}\n\n.grid-horizontal {\n    display: none;\n\n    grid-template-columns: 15rem;\n    grid-template-rows: repeat(auto-fill, 10rem);\n    grid-auto-columns: 15rem;\n    gap: 1rem;\n    grid-auto-flow: column;\n    align-content: space-evenly;\n\n    padding: 1rem;\n\n    overflow-x: auto;\n\n    width: 100%;\n}\n\n.tab-dish-window>input#dishVeg:checked+label,\n.tab-dish-window>input#dishBeef:checked+label,\n.tab-dish-window>input#dishLamb:checked+label,\n.tab-dish-window>input#dishSea:checked+label {\n    background-color: rgba(var(--color-dish), .7);\n    color: rgb(var(--color-text-primary));\n\n}\n\n.tab-dish-window>input#dishVeg:checked~.tab-dishVeg-window,\n.tab-dish-window>input#dishBeef:checked~.tab-dishBeef-window,\n.tab-dish-window>input#dishLamb:checked~.tab-dishLamb-window,\n.tab-dish-window>input#dishSea:checked~.tab-dishSea-window {\n    display: grid;\n}\n\n/* END !SECTION Slide Menu Dish */\n\n\n/* SECTION Slide Menu MC */\n\n.menu-slides>input#mc:checked~.tab-mc-window {\n    display: flex;\n\n    background-color: rgba(var(--color-mc), .15);\n}\n\n.menu-slides>input#mc+label {\n    background-color: rgba(var(--color-mc), .65);\n    color: rgb(var(--color-mc-text));\n}\n\n.menu-slides>input#mc+label:hover,\n.menu-slides>input#mc:checked+label {\n    background-color: rgba(var(--color-mc), .85);\n    color: rgb(var(--color-text-primary));\n}\n\n.menu-slides>input#mc~.tab-mc-window label {\n    background-color: rgba(var(--color-mc), .25);\n    color: rgba(var(--color-mc-text), .8);\n}\n\n.tab-mc-window>input#mcBiriyani:checked+label,\n.tab-mc-window>input#mcTandoori:checked+label {\n    background-color: rgba(var(--color-mc), .7);\n    color: rgb(var(--color-text-primary));\n}\n\n.tab-mc-window>input#mcBiriyani:checked~.tab-mcBiriyani-window,\n.tab-mc-window>input#mcTandoori:checked~.tab-mcTandoori-window {\n    display: grid;\n}\n\n\n/* END !SECTION Slide Menu MC */\n\n/* SECTION Slide Menu Comp */\n\n\n.menu-slides>input#comp:checked~.tab-comp-window {\n    display: flex;\n\n    background-color: rgba(var(--color-comp), .15);\n}\n\n.menu-slides>input#comp+label {\n    background-color: rgba(var(--color-comp), .65);\n    color: rgb(var(--color-comp-text));\n}\n\n.menu-slides>input#comp+label:hover,\n.menu-slides>input#comp:checked+label {\n    background-color: rgba(var(--color-comp), .85);\n    color: rgb(var(--color-text-primary));\n}\n\n.menu-slides>input#comp~.tab-comp-window label {\n    background-color: rgba(var(--color-comp), .25);\n    color: rgba(var(--color-comp-text), .7);\n}\n\n.tab-comp-window>input#compBread:checked+label,\n.tab-comp-window>input#compBev:checked+label,\n.tab-comp-window>input#compDes:checked+label {\n    background-color: rgba(var(--color-comp), .7);\n    color: rgb(var(--color-text-primary));\n}\n\n.tab-comp-window>input#compBread:checked~.tab-compBread-window,\n.tab-comp-window>input#compBev:checked~.tab-compBev-window,\n.tab-comp-window>input#compDes:checked~.tab-compDes-window {\n    display: grid;\n}\n\n/* END !SECTION Slide Menu Comp */\n\n\n/* END !SECTION Slide Menu */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/font/MaronRose.ttf */ "./src/asset/font/MaronRose.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/img/back.svg */ "./src/asset/img/back.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* * {\n    outline: 1px solid red;\n} */\n\n:root {\n\n    font-family: 'El Messiri', sans-serif;\n\n    line-height: 1.5;\n\n    --color-primary-1: 195, 20, 40;\n    --color-primary-2: 131, 0, 0;\n    --color-primary-3: 150, 16, 10;\n\n    --color-secondary-1: 21, 21, 20;\n    --color-secondary-2: 10, 10, 10;\n\n    --color-text-primary: 238, 182, 9;\n    --color-text-secondary: 255, 255, 252;\n\n}\n\n@font-face {\n    font-family: 'Maron Rose';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    height: 100vh;\n\n    display: flex;\n    flex-flow: column nowrap;\n\n    margin: 0rem;\n\n    color: rgb(var(--color-text-secondary));\n    background-color: rgb(var(--color-secondary-1));\n\n    /* overflow: hidden; */\n\n}\n\nbody::after {\n    content: \" \";\n\n    width: 100%;\n\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") bottom -20rem left -5rem / 50rem no-repeat;\n\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.05;\n\n    z-index: -1;\n\n}\n\nsection {\n    height: 94%;\n    width: 100%;\n    display: flex;\n}\n\nheader {\n    width: 10%;\n    /* height: 95.5%; */\n\n    padding: 1rem;\n    margin: 0rem .5rem;\n\n    text-align: center;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 5rem;\n\n    color: rgb(var(--color-text-primary));\n\n    z-index: 10;\n\n    position: relative;\n\n}\n\nfooter {\n    height: 6%;\n    width: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    color: rgb(var(--color-text-secondary));\n\n    font-size: .8rem;\n\n}\n\ninput {\n    appearance: none;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    display: none;\n}\n\nlabel {\n    cursor: pointer;\n}\n\n.button-big {\n    border-radius: .25rem;\n    /* height: 2.5rem; */\n\n    font-family: 'Maron Rose';\n    font-size: 1.2rem;\n\n    padding: .5rem .95rem !important;\n\n    color: rgb(var(--color-text-primary));\n    background-color: rgb(var(--color-primary-2));\n\n    outline: none;\n    border: .125rem solid rgb(var(--color-text-primary));\n\n    text-align: center;\n}\n\n.button-big:hover {\n    background-color: rgb(var(--color-primary-1));\n}\n\n.button-big.button-big-nohi {\n    color: rgb(var(--color-text-primary));\n    background-color: rgb(var(--color-secondary-1));\n\n    outline: none;\n    border: .125rem solid rgb(var(--color-text-secondary));\n}\n\n.button-big.button-big-nohi:hover {\n    color: rgb(var(--color-text-secondary));\n\n    background-color: rgba(var(--color-text-primary), .75);\n}\n\nimg {\n    object-fit: cover;\n    object-position: 0% 15%;\n}\n\n\n.text-big {\n    font-size: 2.5rem;\n    /* font-weight: 800; */\n    margin: 0rem;\n}\n\n.text-medium {\n    font-size: 1.25rem;\n    /* font-weight: 400; */\n    margin: 0rem;\n}\n\n.text-small {\n    margin: 0rem;\n    font-size: .8rem;\n}\n\nsvg.icon {\n    width: 1.5rem;\n    height: 1.5rem;\n    /* margin: .25rem; */\n}\n\n/* SECTION Header */\n\n.logo-text {\n    margin-top: -.05rem;\n\n    font-family: 'Maron Rose';\n}\n\n/* SECTION Nav */\n\n\n.nav-menu {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 2rem;\n\n    margin-top: auto;\n}\n\n.nav-menu>.nav-list>label {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.nav-text {\n    font-size: 1.75rem;\n\n    font-family: 'Maron Rose'\n}\n\n.nav-menu>.nav-list>.nav-text:hover {\n    color: rgb(var(--color-primary-1));\n\n    cursor: pointer;\n}\n\n.nav-menu>.nav-list>input[name=\"headNav\"]:checked~label {\n    color: rgb(var(--color-primary-1));\n}\n\n\nheader:has(>.nav-menu>.navHome>input#navHome:checked)~main.home {\n    display: flex;\n}\n\nheader:has(>.nav-menu>.navMenu>input#navMenu:checked)~main.menu {\n    display: flex;\n}\n\nheader:has(>.nav-menu>.navAbout>input#navAbout:checked)~main.about {\n    display: flex;\n}\n\n/* END !SECTION Nav */\n\n/* header input {\n    display: none;\n} */\n\n.order-cart {\n    margin-top: auto;\n\n    border-radius: 50%;\n    height: 3rem;\n    width: 3rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgb(var(--color-secondary-2));\n\n    position: relative;\n}\n\n.order-cart>label>svg.icon {\n    width: 2rem;\n    height: 2rem;\n\n    fill: rgb(var(--color-text-secondary));\n    display: flex;\n}\n\n.order-cart>label>svg.icon:hover {\n    fill: rgb(var(--color-text-primary));\n}\n\ndiv.order-count {\n    position: absolute;\n    bottom: 0.15rem;\n    left: 2.5rem;\n\n    width: .8rem;\n    height: .8rem;\n\n    font-size: .6rem;\n\n    border-radius: inherit;\n\n    background-color: rgb(var(--color-primary-1));\n    color: rgb(var(--color-secondary-1));\n\n    font-family: 'Maron Rose';\n}\n\n/* SECTION Order Detail */\n\ndiv.order-detail {\n    position: absolute;\n    right: -276px;\n    bottom: 12px;\n\n    width: max(17%, 15rem);\n    max-height: 90%;\n\n    padding: .5rem;\n\n    border-radius: .25rem;\n    border-bottom-left-radius: 3.5rem;\n\n    background-color: rgb(var(--color-primary-3));\n    color: rgb(var(--color-secondary-2));\n\n    display: none;\n    flex-flow: column nowrap;\n    gap: .25rem;\n\n    overflow: hidden;\n}\n\ndiv.order-cart:has(>input#orderCart:checked)+div.order-detail {\n    display: flex;\n}\n\n/* SECTION Order Detail Item */\n\ndiv.order-detail>div.ordered-items>.order-item {\n    width: 100%;\n    height: auto;\n\n    margin: .5rem .45rem .15rem .65rem;\n\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-areas:\n        \"img title title title title\"\n        \"img text text . addrem\";\n\n    gap: .15rem .25rem;\n    justify-items: start;\n    align-items: center;\n    align-content: start;\n\n    /* overflow: hidden; */\n}\n\ndiv.order-detail>div.ordered-items {\n    width: 100%;\n\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.order-item>img.order-itemImg {\n    grid-area: img;\n    width: 3rem;\n    height: 3rem;\n\n    border-radius: .25rem;\n    border: .15rem solid rgb(var(--color-text-primary));\n\n}\n\n.order-item>p.order-itemTitle {\n    grid-area: title;\n\n    font-weight: 800;\n    font-size: 1rem;\n\n    margin-bottom: -.5rem;\n}\n\n.order-item>p.order-itemText {\n    grid-area: text;\n    margin-left: .5rem;\n}\n\n.order-item span.order-itemTotalPrice {\n    font-weight: 800;\n}\n\n.order-item svg {\n    width: 1rem;\n    height: 1rem;\n\n    fill: rgb(var(--color-secondary-1));\n\n    background-color: rgba(var(--color-text-primary), .15);\n    border-radius: .15rem;\n\n    padding: .15rem;\n    margin-right: .5rem;\n}\n\n.order-item svg:hover {\n    fill: rgb(var(--color-text-primary));\n}\n\n.order-item div.order-itemButtons {\n    grid-area: addrem;\n\n    display: flex;\n    align-items: center;\n\n    margin: 0rem .5rem .5rem;\n}\n\ndiv.no-order {\n    overflow: hidden;\n}\n\n/* END !SECTION Order Detail Item */\n\ndiv.order-detail>hr {\n    margin-top: .5rem;\n    appearance: none;\n\n    width: 90%;\n\n    border: 2px solid rgb(var(--color-text-primary));\n    background-color: rgb(var(--color-text-primary));\n    border-radius: 2rem;\n}\n\ndiv.order-detail>button {\n    align-self: flex-end;\n\n    width: 40%;\n    font-size: .8rem;\n\n    margin: -.45rem .4rem .4rem 0rem;\n\n    background-color: rgba(0, 0, 0, 0) !important;\n}\n\ndiv.order-detail>button:hover {\n    background-color: rgba(var(--color-secondary-1)) !important;\n    color: rgb(var(--color-text-primary)) !important;\n}\n\ndiv.order-detail>.order-totalPrice {\n    display: flex;\n    justify-content: flex-end;\n    align-items: baseline;\n    gap: .05rem;\n\n    font-weight: 800;\n\n    margin: 0rem;\n    margin-bottom: .5rem;\n    margin-right: .75rem;\n}\n\n/* END !SECTION Order Detail */\n\n/* END !SECTION Header */\n\n/* SECTION Footer */\n\nfooter>code {\n    background-color: black;\n    color: rgb(var(--color-primary-1));\n    margin: 0rem .45rem .1rem;\n    padding: 0rem .25rem 0rem;\n    border-radius: .15rem;\n\n    font-size: .65rem;\n\n    z-index: 10;\n}\n\nfooter>a {\n    color: rgb(var(--color-text-secondary));\n}\n\nfooter>a:hover {\n    color: rgb(var(--color-text-primary));\n}\n\nfooter>a>svg.icon {\n    width: 1.25rem;\n    height: 1.25rem;\n\n    margin: 0rem .25rem;\n    padding: .2rem .25rem 0rem;\n}\n\n/* END !SECTION Footer */\n\n\n/* Others */\n\n.nodisplay {\n    display: none !important;\n}\n\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n    height: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #ffffff0d;\n    opacity: .5;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(var(--color-secondary-2), .45);\n    border-radius: 10px\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: rgb(var(--color-secondary-1), .45);\n\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;;GAEG;;AAEH;;IAEI,qCAAqC;;IAErC,gBAAgB;;IAEhB,8BAA8B;IAC9B,4BAA4B;IAC5B,8BAA8B;;IAE9B,+BAA+B;IAC/B,+BAA+B;;IAE/B,iCAAiC;IACjC,qCAAqC;;AAEzC;;AAEA;IACI,yBAAyB;IACzB,4CAAqC;AACzC;;AAEA;IACI,aAAa;;IAEb,aAAa;IACb,wBAAwB;;IAExB,YAAY;;IAEZ,uCAAuC;IACvC,+CAA+C;;IAE/C,sBAAsB;;AAE1B;;AAEA;IACI,YAAY;;IAEZ,WAAW;;IAEX,8FAAiF;;IAEjF,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,WAAW;IACX,SAAS;IACT,aAAa;;IAEb,WAAW;;AAEf;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,mBAAmB;;IAEnB,aAAa;IACb,kBAAkB;;IAElB,kBAAkB;;IAElB,aAAa;IACb,wBAAwB;IACxB,mBAAmB;;IAEnB,SAAS;;IAET,qCAAqC;;IAErC,WAAW;;IAEX,kBAAkB;;AAEtB;;AAEA;IACI,UAAU;IACV,WAAW;;IAEX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,uCAAuC;;IAEvC,gBAAgB;;AAEpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,oBAAoB;;IAEpB,yBAAyB;IACzB,iBAAiB;;IAEjB,gCAAgC;;IAEhC,qCAAqC;IACrC,6CAA6C;;IAE7C,aAAa;IACb,oDAAoD;;IAEpD,kBAAkB;AACtB;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,qCAAqC;IACrC,+CAA+C;;IAE/C,aAAa;IACb,sDAAsD;AAC1D;;AAEA;IACI,uCAAuC;;IAEvC,sDAAsD;AAC1D;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;AAC3B;;;AAGA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,oBAAoB;AACxB;;AAEA,mBAAmB;;AAEnB;IACI,mBAAmB;;IAEnB,yBAAyB;AAC7B;;AAEA,gBAAgB;;;AAGhB;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;;IAET,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;;IAElB;AACJ;;AAEA;IACI,kCAAkC;;IAElC,eAAe;AACnB;;AAEA;IACI,kCAAkC;AACtC;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA,qBAAqB;;AAErB;;GAEG;;AAEH;IACI,gBAAgB;;IAEhB,kBAAkB;IAClB,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,+CAA+C;;IAE/C,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,sCAAsC;IACtC,aAAa;AACjB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;;IAEZ,YAAY;IACZ,aAAa;;IAEb,gBAAgB;;IAEhB,sBAAsB;;IAEtB,6CAA6C;IAC7C,oCAAoC;;IAEpC,yBAAyB;AAC7B;;AAEA,yBAAyB;;AAEzB;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;;IAEZ,sBAAsB;IACtB,eAAe;;IAEf,cAAc;;IAEd,qBAAqB;IACrB,iCAAiC;;IAEjC,6CAA6C;IAC7C,oCAAoC;;IAEpC,aAAa;IACb,wBAAwB;IACxB,WAAW;;IAEX,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA,8BAA8B;;AAE9B;IACI,WAAW;IACX,YAAY;;IAEZ,kCAAkC;;IAElC,aAAa;IACb,kCAAkC;IAClC;;gCAE4B;;IAE5B,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;;IAEpB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;;IAEX,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;;IAEZ,qBAAqB;IACrB,mDAAmD;;AAEvD;;AAEA;IACI,gBAAgB;;IAEhB,gBAAgB;IAChB,eAAe;;IAEf,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,mCAAmC;;IAEnC,sDAAsD;IACtD,qBAAqB;;IAErB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;;IAEjB,aAAa;IACb,mBAAmB;;IAEnB,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;AACpB;;AAEA,mCAAmC;;AAEnC;IACI,iBAAiB;IACjB,gBAAgB;;IAEhB,UAAU;;IAEV,gDAAgD;IAChD,gDAAgD;IAChD,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;;IAEpB,UAAU;IACV,gBAAgB;;IAEhB,gCAAgC;;IAEhC,6CAA6C;AACjD;;AAEA;IACI,2DAA2D;IAC3D,gDAAgD;AACpD;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,qBAAqB;IACrB,WAAW;;IAEX,gBAAgB;;IAEhB,YAAY;IACZ,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA,8BAA8B;;AAE9B,wBAAwB;;AAExB,mBAAmB;;AAEnB;IACI,uBAAuB;IACvB,kCAAkC;IAClC,yBAAyB;IACzB,yBAAyB;IACzB,qBAAqB;;IAErB,iBAAiB;;IAEjB,WAAW;AACf;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,cAAc;IACd,eAAe;;IAEf,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA,wBAAwB;;;AAGxB,WAAW;;AAEX;IACI,wBAAwB;AAC5B;;AAEA,UAAU;AACV;IACI,UAAU;IACV,WAAW;AACf;;AAEA,UAAU;AACV;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA,WAAW;AACX;IACI,8CAA8C;IAC9C;AACJ;;AAEA,oBAAoB;AACpB;IACI,8CAA8C;;AAElD","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap');\n\n/* * {\n    outline: 1px solid red;\n} */\n\n:root {\n\n    font-family: 'El Messiri', sans-serif;\n\n    line-height: 1.5;\n\n    --color-primary-1: 195, 20, 40;\n    --color-primary-2: 131, 0, 0;\n    --color-primary-3: 150, 16, 10;\n\n    --color-secondary-1: 21, 21, 20;\n    --color-secondary-2: 10, 10, 10;\n\n    --color-text-primary: 238, 182, 9;\n    --color-text-secondary: 255, 255, 252;\n\n}\n\n@font-face {\n    font-family: 'Maron Rose';\n    src: url(../asset/font/MaronRose.ttf);\n}\n\nbody {\n    height: 100vh;\n\n    display: flex;\n    flex-flow: column nowrap;\n\n    margin: 0rem;\n\n    color: rgb(var(--color-text-secondary));\n    background-color: rgb(var(--color-secondary-1));\n\n    /* overflow: hidden; */\n\n}\n\nbody::after {\n    content: \" \";\n\n    width: 100%;\n\n    background: url(../asset/img/back.svg) bottom -20rem left -5rem / 50rem no-repeat;\n\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.05;\n\n    z-index: -1;\n\n}\n\nsection {\n    height: 94%;\n    width: 100%;\n    display: flex;\n}\n\nheader {\n    width: 10%;\n    /* height: 95.5%; */\n\n    padding: 1rem;\n    margin: 0rem .5rem;\n\n    text-align: center;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n\n    gap: 5rem;\n\n    color: rgb(var(--color-text-primary));\n\n    z-index: 10;\n\n    position: relative;\n\n}\n\nfooter {\n    height: 6%;\n    width: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    color: rgb(var(--color-text-secondary));\n\n    font-size: .8rem;\n\n}\n\ninput {\n    appearance: none;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    display: none;\n}\n\nlabel {\n    cursor: pointer;\n}\n\n.button-big {\n    border-radius: .25rem;\n    /* height: 2.5rem; */\n\n    font-family: 'Maron Rose';\n    font-size: 1.2rem;\n\n    padding: .5rem .95rem !important;\n\n    color: rgb(var(--color-text-primary));\n    background-color: rgb(var(--color-primary-2));\n\n    outline: none;\n    border: .125rem solid rgb(var(--color-text-primary));\n\n    text-align: center;\n}\n\n.button-big:hover {\n    background-color: rgb(var(--color-primary-1));\n}\n\n.button-big.button-big-nohi {\n    color: rgb(var(--color-text-primary));\n    background-color: rgb(var(--color-secondary-1));\n\n    outline: none;\n    border: .125rem solid rgb(var(--color-text-secondary));\n}\n\n.button-big.button-big-nohi:hover {\n    color: rgb(var(--color-text-secondary));\n\n    background-color: rgba(var(--color-text-primary), .75);\n}\n\nimg {\n    object-fit: cover;\n    object-position: 0% 15%;\n}\n\n\n.text-big {\n    font-size: 2.5rem;\n    /* font-weight: 800; */\n    margin: 0rem;\n}\n\n.text-medium {\n    font-size: 1.25rem;\n    /* font-weight: 400; */\n    margin: 0rem;\n}\n\n.text-small {\n    margin: 0rem;\n    font-size: .8rem;\n}\n\nsvg.icon {\n    width: 1.5rem;\n    height: 1.5rem;\n    /* margin: .25rem; */\n}\n\n/* SECTION Header */\n\n.logo-text {\n    margin-top: -.05rem;\n\n    font-family: 'Maron Rose';\n}\n\n/* SECTION Nav */\n\n\n.nav-menu {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 2rem;\n\n    margin-top: auto;\n}\n\n.nav-menu>.nav-list>label {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.nav-text {\n    font-size: 1.75rem;\n\n    font-family: 'Maron Rose'\n}\n\n.nav-menu>.nav-list>.nav-text:hover {\n    color: rgb(var(--color-primary-1));\n\n    cursor: pointer;\n}\n\n.nav-menu>.nav-list>input[name=\"headNav\"]:checked~label {\n    color: rgb(var(--color-primary-1));\n}\n\n\nheader:has(>.nav-menu>.navHome>input#navHome:checked)~main.home {\n    display: flex;\n}\n\nheader:has(>.nav-menu>.navMenu>input#navMenu:checked)~main.menu {\n    display: flex;\n}\n\nheader:has(>.nav-menu>.navAbout>input#navAbout:checked)~main.about {\n    display: flex;\n}\n\n/* END !SECTION Nav */\n\n/* header input {\n    display: none;\n} */\n\n.order-cart {\n    margin-top: auto;\n\n    border-radius: 50%;\n    height: 3rem;\n    width: 3rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgb(var(--color-secondary-2));\n\n    position: relative;\n}\n\n.order-cart>label>svg.icon {\n    width: 2rem;\n    height: 2rem;\n\n    fill: rgb(var(--color-text-secondary));\n    display: flex;\n}\n\n.order-cart>label>svg.icon:hover {\n    fill: rgb(var(--color-text-primary));\n}\n\ndiv.order-count {\n    position: absolute;\n    bottom: 0.15rem;\n    left: 2.5rem;\n\n    width: .8rem;\n    height: .8rem;\n\n    font-size: .6rem;\n\n    border-radius: inherit;\n\n    background-color: rgb(var(--color-primary-1));\n    color: rgb(var(--color-secondary-1));\n\n    font-family: 'Maron Rose';\n}\n\n/* SECTION Order Detail */\n\ndiv.order-detail {\n    position: absolute;\n    right: -276px;\n    bottom: 12px;\n\n    width: max(17%, 15rem);\n    max-height: 90%;\n\n    padding: .5rem;\n\n    border-radius: .25rem;\n    border-bottom-left-radius: 3.5rem;\n\n    background-color: rgb(var(--color-primary-3));\n    color: rgb(var(--color-secondary-2));\n\n    display: none;\n    flex-flow: column nowrap;\n    gap: .25rem;\n\n    overflow: hidden;\n}\n\ndiv.order-cart:has(>input#orderCart:checked)+div.order-detail {\n    display: flex;\n}\n\n/* SECTION Order Detail Item */\n\ndiv.order-detail>div.ordered-items>.order-item {\n    width: 100%;\n    height: auto;\n\n    margin: .5rem .45rem .15rem .65rem;\n\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-areas:\n        \"img title title title title\"\n        \"img text text . addrem\";\n\n    gap: .15rem .25rem;\n    justify-items: start;\n    align-items: center;\n    align-content: start;\n\n    /* overflow: hidden; */\n}\n\ndiv.order-detail>div.ordered-items {\n    width: 100%;\n\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.order-item>img.order-itemImg {\n    grid-area: img;\n    width: 3rem;\n    height: 3rem;\n\n    border-radius: .25rem;\n    border: .15rem solid rgb(var(--color-text-primary));\n\n}\n\n.order-item>p.order-itemTitle {\n    grid-area: title;\n\n    font-weight: 800;\n    font-size: 1rem;\n\n    margin-bottom: -.5rem;\n}\n\n.order-item>p.order-itemText {\n    grid-area: text;\n    margin-left: .5rem;\n}\n\n.order-item span.order-itemTotalPrice {\n    font-weight: 800;\n}\n\n.order-item svg {\n    width: 1rem;\n    height: 1rem;\n\n    fill: rgb(var(--color-secondary-1));\n\n    background-color: rgba(var(--color-text-primary), .15);\n    border-radius: .15rem;\n\n    padding: .15rem;\n    margin-right: .5rem;\n}\n\n.order-item svg:hover {\n    fill: rgb(var(--color-text-primary));\n}\n\n.order-item div.order-itemButtons {\n    grid-area: addrem;\n\n    display: flex;\n    align-items: center;\n\n    margin: 0rem .5rem .5rem;\n}\n\ndiv.no-order {\n    overflow: hidden;\n}\n\n/* END !SECTION Order Detail Item */\n\ndiv.order-detail>hr {\n    margin-top: .5rem;\n    appearance: none;\n\n    width: 90%;\n\n    border: 2px solid rgb(var(--color-text-primary));\n    background-color: rgb(var(--color-text-primary));\n    border-radius: 2rem;\n}\n\ndiv.order-detail>button {\n    align-self: flex-end;\n\n    width: 40%;\n    font-size: .8rem;\n\n    margin: -.45rem .4rem .4rem 0rem;\n\n    background-color: rgba(0, 0, 0, 0) !important;\n}\n\ndiv.order-detail>button:hover {\n    background-color: rgba(var(--color-secondary-1)) !important;\n    color: rgb(var(--color-text-primary)) !important;\n}\n\ndiv.order-detail>.order-totalPrice {\n    display: flex;\n    justify-content: flex-end;\n    align-items: baseline;\n    gap: .05rem;\n\n    font-weight: 800;\n\n    margin: 0rem;\n    margin-bottom: .5rem;\n    margin-right: .75rem;\n}\n\n/* END !SECTION Order Detail */\n\n/* END !SECTION Header */\n\n/* SECTION Footer */\n\nfooter>code {\n    background-color: black;\n    color: rgb(var(--color-primary-1));\n    margin: 0rem .45rem .1rem;\n    padding: 0rem .25rem 0rem;\n    border-radius: .15rem;\n\n    font-size: .65rem;\n\n    z-index: 10;\n}\n\nfooter>a {\n    color: rgb(var(--color-text-secondary));\n}\n\nfooter>a:hover {\n    color: rgb(var(--color-text-primary));\n}\n\nfooter>a>svg.icon {\n    width: 1.25rem;\n    height: 1.25rem;\n\n    margin: 0rem .25rem;\n    padding: .2rem .25rem 0rem;\n}\n\n/* END !SECTION Footer */\n\n\n/* Others */\n\n.nodisplay {\n    display: none !important;\n}\n\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n    height: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #ffffff0d;\n    opacity: .5;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(var(--color-secondary-2), .45);\n    border-radius: 10px\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: rgb(var(--color-secondary-1), .45);\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/compatibility.css":
/*!**************************************!*\
  !*** ./src/styles/compatibility.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_compatibility_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./compatibility.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/compatibility.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_compatibility_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_compatibility_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_compatibility_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_compatibility_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style-about.css":
/*!************************************!*\
  !*** ./src/styles/style-about.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style-about.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style-about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style-home.css":
/*!***********************************!*\
  !*** ./src/styles/style-home.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style-home.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style-home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style-menu.css":
/*!***********************************!*\
  !*** ./src/styles/style-menu.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style-menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style-menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scripts/compatibility.js":
/*!**************************************!*\
  !*** ./src/scripts/compatibility.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// For FireFox

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    if (navigator.userAgent.includes('Firefox')) {

        const navigationHome = document.querySelector('div.nav-menu>.nav-list.navHome');

        navigationHome.querySelector('input').checked = true;

        const navigationMenu = document.querySelector('div.nav-menu>.nav-list.navMenu');

        const navigationAbout = document.querySelector('div.nav-menu>.nav-list.navAbout');

        const home = document.querySelector('main.home');
        const menu = document.querySelector('main.menu');
        const about = document.querySelector('main.about');

        // Navigation Bar

        navigationHome.addEventListener('click', () => {
            home.style.setProperty('display', 'flex');
            menu.style.setProperty('display', 'none');
            about.style.setProperty('display', 'none');
        })

        navigationMenu.addEventListener('click', () => {
            home.style.setProperty('display', 'none');
            menu.style.setProperty('display', 'flex');
            about.style.setProperty('display', 'none');
        })

        navigationAbout.addEventListener('click', () => {
            home.style.setProperty('display', 'none');
            menu.style.setProperty('display', 'none');
            about.style.setProperty('display', 'flex');
        })

        const orderCart = document.querySelector('div.order-cart')

        const orderDetail = document.querySelector('div.order-detail')

        // Order Detail on Click

        orderCart.addEventListener('click', (evt) => {
            orderDetail.style.setProperty('display', 'flex')

            document.addEventListener('click', (e) => {

                if (!e.target.closest('div.order-detail') && !e.target.closest('div.order-cart') && !e.target.closest('svg.side-icon')) {
                    orderDetail.style.setProperty('display', 'none')
                }

            })
        })

        // Order Now to Menu

        const orderNow = document.querySelector('main.home div.home-request>input#orderNow')

        orderNow.addEventListener('click', (e) => {
            document.querySelector('header>div.nav-menu>nav.navMenu>input#navMenu').checked = true

            document.querySelector('main.menu').style.setProperty('display', 'flex')

            document.querySelector('main.home').style.setProperty('display', 'none')

            document.querySelector('main.about').style.setProperty('display', 'none')
        })


        // Table Reservation

        const reserveButton = document.querySelector('label.home-button-big.reserve')

        const requestMenu = document.querySelector('div.home-right>div.request-menu')

        reserveButton.addEventListener('click', () => {
            requestMenu.style.setProperty('display', 'flex')

            document.addEventListener('click', (e) => {

                // debugger

                if (!e.target.closest('div.request-menu') && e.target !== reserveButton && !e.target.closest('input#tableReserve')) {
                    requestMenu.style.setProperty('display', 'none')
                }

            })
        })

    } else {

        // For Chromium

        // Order Detail Click

        const orderCart = document.querySelector('div.order-cart>input')

        document.addEventListener('click', (e) => {

            if (!e.target.closest('div.order-detail') && !e.target.closest('div.order-cart') && orderCart.checked && !e.target.closest('svg.side-icon')) {
                orderCart.checked = false
            }

        })

        // Order Now Main Button

        const orderNow = document.querySelector('main.home div.home-request>input#orderNow')

        orderNow.addEventListener('click', (e) => {
            document.querySelector('header>div.nav-menu>nav.navMenu>input#navMenu').checked = true
        })

        // Reserver Menu

        const reserveButton = document.querySelector('input#tableReserve')

        document.addEventListener('click', (e) => {

            if (!e.target.closest('div.request-menu') && reserveButton.checked && !e.target.closest('input#tableReserve') && ~e.target.closest('label.reserve')) {
                reserveButton.checked = false
            }

        })

    }
}

/***/ }),

/***/ "./src/scripts/createHtml.js":
/*!***********************************!*\
  !*** ./src/scripts/createHtml.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTML_STRING": () => (/* binding */ HTML_STRING),
/* harmony export */   "default": () => (/* binding */ createHTML)
/* harmony export */ });
/* harmony import */ var _asset_img_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/img/logo.svg */ "./src/asset/img/logo.svg");
/* harmony import */ var _asset_img_disp_biriyani_1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/img-disp/biriyani_1.webp */ "./src/asset/img-disp/biriyani_1.webp");
/* harmony import */ var _asset_icons_sprite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/icons.sprite.svg */ "./src/asset/icons.sprite.svg");




var HTML_STRING = [
    {
        element: "section",
        child: [
            {
                element: "header",
                child: [
                    {
                        element: "div",
                        class: "logo",
                        child: [
                            {
                                element: "img",
                                class: "logo-img",
                                src: _asset_img_logo_svg__WEBPACK_IMPORTED_MODULE_0__,
                                alt: "Restaurant logo"
                            },
                            {
                                element: "p",
                                class: "logo-text text-big",
                                child: ["LOTUS"]
                            },
                            {
                                element: "p",
                                class: "logo-text text-small",
                                child: ["An Indian Cusine"]
                            },
                            {
                                element: "p",
                                class: "logo-text text-small",
                                child: ["Restaurant"]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "nav-menu",
                        child: [
                            {
                                element: "nav",
                                class: "nav-list navHome",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "headNav",
                                        id: "navHome",
                                        checked: true
                                    },
                                    {
                                        element: "label",
                                        for: "navHome",
                                        class: "nav-text text-medium",
                                        child: [" Home "]
                                    }
                                ]
                            },
                            {
                                element: "nav",
                                class: "nav-list navMenu",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "headNav",
                                        id: "navMenu",
                                    },
                                    {
                                        element: "label",
                                        for: "navMenu",
                                        class: "nav-text text-medium",
                                        child: [" Menu "]
                                    }
                                ]
                            },
                            {
                                element: "nav",
                                class: "nav-list navAbout",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "headNav",
                                        id: "navAbout",
                                    },
                                    {
                                        element: "label",
                                        for: "navAbout",
                                        class: "nav-text text-medium",
                                        child: [" About "]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "order-cart",
                        child: [
                            {
                                element: "input",
                                id: "orderCart",
                                type: "checkbox",
                                name: "order-cart"
                            },
                            {
                                element: "label",
                                for: "orderCart",
                                child: [
                                    {
                                        elementNS: "svg",
                                        class: "icon header-icon",
                                        child: [
                                            {
                                                elementNS: "use",
                                                href: `${_asset_icons_sprite_svg__WEBPACK_IMPORTED_MODULE_2__}#basket`
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                element: "div",
                                class: "order-count nodisplay",
                                child: ["0"]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "order-detail",
                        child: [
                            {
                                element: "div",
                                class: "ordered-items",
                                child: [
                                    {
                                        element: "div",
                                        class: "no-order",
                                        child: [
                                            "Nothing to Place ",
                                            {
                                                element: "br"
                                            },
                                            " Order On."
                                        ]
                                    }
                                ]
                            },
                            {
                                element: "hr"
                            },
                            {
                                element: "p",
                                class: "order-totalPrice",
                                child: [
                                    {
                                        element: "span",
                                        class: "text-small",
                                        child: ["$"]
                                    },
                                    {
                                        element: "span",
                                        class: "text-medium",
                                        child: ["00"]
                                    },
                                    ".",
                                    {
                                        element: "span",
                                        class: "text-small",
                                        child: ["00"]
                                    }
                                ]
                            },
                            {
                                element: "button",
                                class: "home-button-big button-big button-big-nohi placeOrder nodisplay",
                                child: ["Place Order"]
                            }
                        ]
                    }
                ]
            },
            {
                element: "main",
                class: "home",
                child: [
                    {
                        element: "div",
                        class: "home-left",
                        child: [
                            {
                                element: "p",
                                class: "home-text-big text-big",
                                child: ["Relish the Indian Spices - Spices favoured from all around the world - in your plate - flavoured with Tradition"]
                            },
                            {
                                element: "div",
                                class: "home-request",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "orderortable",
                                        id: "orderNow"
                                    },
                                    {
                                        element: "label",
                                        for: "orderNow",
                                        class: "home-button-big button-big button-big-hi orderNow",
                                        child: ["Order Now"]
                                    },
                                    {
                                        element: "p",
                                        class: "home-text-small",
                                        child: ["or"]
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "orderortable",
                                        id: "tableReserve"
                                    },
                                    {
                                        element: "label",
                                        for: "tableReserve",
                                        class: "home-button-big button-big button-big-nohi reserve",
                                        child: ["Reserve a Table"]
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "home-right",
                        child: [
                            {
                                element: "div",
                                class: "request-menu",
                                child: [
                                    {
                                        element: "div",
                                        class: "home-request-text",
                                        child: ["Personal Information"]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-name",
                                        child: [
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "firstName",
                                                        child: ["First Name"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "text",
                                                        name: "firstName",
                                                        id: "fname",
                                                        class: "input-text text-fname",
                                                        required: true
                                                    },
                                                    {
                                                        element: "span"
                                                    }
                                                ]
                                            },
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "lastName",
                                                        child: ["Last Name"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "text",
                                                        name: "lastName",
                                                        id: "lname",
                                                        class: "input-text text-lname",
                                                        required: true
                                                    },
                                                    {
                                                        element: "span"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-text",
                                        child: ["Contact Information"]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-name",
                                        child: [
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "email",
                                                        child: ["E-mail"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "email",
                                                        name: "email",
                                                        id: "email",
                                                        class: "input-text text-email",
                                                        required: true
                                                    },
                                                    {
                                                        element: "span"
                                                    }
                                                ]
                                            },
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "phone",
                                                        child: ["Phone Number"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "tel",
                                                        name: "phone",
                                                        id: "pnum",
                                                        class: "input-text text-pnum",
                                                        required: true
                                                    },
                                                    {
                                                        element: "span"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-text",
                                        child: ["Date & Occasion"]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-info",
                                        child: [
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "date",
                                                        child: ["Date"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "date",
                                                        name: "date",
                                                        id: "date",
                                                        class: "input-text text-date",
                                                        required: true
                                                    },
                                                    {
                                                        element: "span"
                                                    }
                                                ]
                                            },
                                            {
                                                element: "div",
                                                class: "input-request",
                                                child: [
                                                    {
                                                        element: "label",
                                                        for: "occasion",
                                                        child: ["Occasion"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "text",
                                                        name: "occasion",
                                                        id: "dateOccasion",
                                                        class: "input-text text-occasion",
                                                        list: "events",
                                                        required: true
                                                    },
                                                    {
                                                        element: "datalist",
                                                        id: "events",
                                                        child: [
                                                            {
                                                                element: "option",
                                                                value: "Wedding Anniversary"
                                                            },
                                                            {
                                                                element: "option",
                                                                value: "Birthday"
                                                            },
                                                            {
                                                                element: "option",
                                                                value: "Job Promotion"
                                                            },
                                                            {
                                                                element: "option",
                                                                value: "Wedding Function"
                                                            },
                                                            {
                                                                element: "option",
                                                                value: "Business Meeting"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-text",
                                        child: ["Time Slot"]
                                    },
                                    {
                                        element: "div",
                                        class: "home-request-time",
                                        child: [
                                            {
                                                element: "input",
                                                type: "radio",
                                                name: "time",
                                                id: "morning",
                                                class: "request-time-head",
                                                checked: true
                                            },
                                            {
                                                element: "label",
                                                for: "morning",
                                                child: ["Morning"]
                                            },
                                            {
                                                element: "input",
                                                type: "radio",
                                                name: "time",
                                                id: "afternoon",
                                                class: "request-time-head",
                                            },
                                            {
                                                element: "label",
                                                for: "afternoon",
                                                child: ["Afternoon"]
                                            },
                                            {
                                                element: "input",
                                                type: "radio",
                                                name: "time",
                                                id: "night",
                                                class: "request-time-head",
                                            },
                                            {
                                                element: "label",
                                                for: "night",
                                                child: ["Night"]
                                            },
                                            {
                                                element: "div",
                                                class: "time-slot time-slot-morning",
                                                child: [
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time0900",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time0900",
                                                        child: ["09:00"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time0930",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time0930",
                                                        child: ["09:30"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1000",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1000",
                                                        child: ["10:00"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1030",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1030",
                                                        child: ["10:30"]
                                                    }
                                                ]
                                            },
                                            {
                                                element: "div",
                                                class: "time-slot time-slot-afternoon",
                                                child: [
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1230",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1230",
                                                        child: ["12:30"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1300",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1300",
                                                        child: ["13:00"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1330",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1330",
                                                        child: ["13:30"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1400",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1400",
                                                        child: ["14:00"]
                                                    }
                                                ]
                                            },
                                            {
                                                element: "div",
                                                class: "time-slot time-slot-night",
                                                child: [
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time1930",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time1930",
                                                        child: ["19:30"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time2000",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time2000",
                                                        child: ["20:00"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time2030",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time2030",
                                                        child: ["20:30"]
                                                    },
                                                    {
                                                        element: "input",
                                                        type: "radio",
                                                        name: "time-slot",
                                                        id: "time2100",
                                                    },
                                                    {
                                                        element: "label",
                                                        for: "time2100",
                                                        child: ["21:00"]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        element: "button",
                                        class: "button-big button-big-nohi",
                                        type: "submit",
                                        child: ["Submit"]
                                    }
                                ]
                            },
                            {
                                element: "img",
                                class: "home-right image-big",
                                src: _asset_img_disp_biriyani_1_webp__WEBPACK_IMPORTED_MODULE_1__,
                                alt: "Main Pic"
                            }
                        ]
                    }
                ]
            },
            {
                element: "main",
                class: "menu",
                child: [
                    {
                        element: "div",
                        class: "menu-heading",
                        child: [
                            {
                                elementNS: "svg",
                                class: "icon title-icon",
                                child: [
                                    {
                                        elementNS: "use",
                                        href: `${_asset_icons_sprite_svg__WEBPACK_IMPORTED_MODULE_2__}#menu`
                                    }
                                ]
                            },
                            {
                                element: "p",
                                class: "menu-title",
                                child: ["Menu"]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "menu-slides",
                        child: [
                            {
                                element: "input",
                                type: "radio",
                                name: "main-nav",
                                id: "appetizer",
                                checked: true
                            },
                            {
                                element: "label",
                                for: "appetizer",
                                class: "tab tab-appetizer",
                                child: ["Appetizer"]
                            },
                            {
                                element: "div",
                                class: "tab-appetizer-window grid-vertical",
                            },
                            {
                                element: "input",
                                type: "radio",
                                name: "main-nav",
                                id: "dish",
                            },
                            {
                                element: "label",
                                for: "dish",
                                class: "tab tab-dish",
                                child: ["Dishes"]
                            },
                            {
                                element: "div",
                                class: "tab-dish-window grid-vertical",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-dish",
                                        id: "dishVeg",
                                        checked: true
                                    },
                                    {
                                        element: "label",
                                        for: "dishVeg",
                                        class: "tab tab-dishVeg",
                                        child: ["Veg Dishes"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-dishVeg-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-dish",
                                        id: "dishBeef",
                                    },
                                    {
                                        element: "label",
                                        for: "dishBeef",
                                        class: "tab tab-dishBeef",
                                        child: ["Beef Dishes"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-dishBeef-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-dish",
                                        id: "dishLamb",
                                    },
                                    {
                                        element: "label",
                                        for: "dishLamb",
                                        class: "tab tab-dishLamb",
                                        child: ["Lamb Dishes"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-dishLamb-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-dish",
                                        id: "dishSea",
                                    },
                                    {
                                        element: "label",
                                        for: "dishSea",
                                        class: "tab tab-dishSea",
                                        child: ["Sea Food Dishes"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-dishSea-window grid-horizontal"
                                    }
                                ]
                            },
                            {
                                element: "input",
                                type: "radio",
                                name: "main-nav",
                                id: "mc",
                            },
                            {
                                element: "label",
                                for: "mc",
                                class: "tab tab-mc",
                                child: ["Main Course"]
                            },
                            {
                                element: "div",
                                class: "tab-mc-window grid-vertical",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-mc",
                                        id: "mcBiriyani",
                                        checked: true
                                    },
                                    {
                                        element: "label",
                                        for: "mcBiriyani",
                                        class: "tab tab-mcBiriyani",
                                        child: ["Biriyani"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-mcBiriyani-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-mc",
                                        id: "mcTandoori",
                                    },
                                    {
                                        element: "label",
                                        for: "mcTandoori",
                                        class: "tab tab-mcTandoori",
                                        child: ["Tandoori"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-mcTandoori-window grid-horizontal"
                                    }
                                ]
                            },
                            {
                                element: "input",
                                type: "radio",
                                name: "main-nav",
                                id: "comp",
                            },
                            {
                                element: "label",
                                for: "comp",
                                class: "tab tab-comp",
                                child: ["Complimentary"]
                            },
                            {
                                element: "div",
                                class: "tab-comp-window grid-vertical",
                                child: [
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-comp",
                                        id: "compBread",
                                        checked: true
                                    },
                                    {
                                        element: "label",
                                        for: "compBread",
                                        class: "tab tab-compBread",
                                        child: ["Sides & Breads"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-compBread-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-comp",
                                        id: "compBev",
                                    },
                                    {
                                        element: "label",
                                        for: "compBev",
                                        class: "tab tab-compBev",
                                        child: ["Beverages"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-compBev-window grid-horizontal"
                                    },
                                    {
                                        element: "input",
                                        type: "radio",
                                        name: "main-nav-comp",
                                        id: "compDes",
                                    },
                                    {
                                        element: "label",
                                        for: "compDes",
                                        class: "tab tab-compDes",
                                        child: ["Desserts"]
                                    },
                                    {
                                        element: "div",
                                        class: "tab-compDes-window grid-horizontal"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                element: "main",
                class: "about",
                child: [
                    {
                        element: "div",
                        class: "about-heading",
                        child: [
                            {
                                elementNS: "svg",
                                class: "icon title-icon",
                                child: [
                                    {
                                        elementNS: "use",
                                        href: `${_asset_icons_sprite_svg__WEBPACK_IMPORTED_MODULE_2__}#info`
                                    }
                                ]
                            },
                            {
                                element: "p",
                                class: "about-title",
                                child: ["About"]
                            }
                        ]
                    },
                    {
                        element: "div",
                        class: "about-info",
                        child: [
                            {
                                element: "div",
                                class: "about-left",
                                child: [
                                    {
                                        element: "p",
                                        child: ["Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hdarum distinctio error esse alias fugiat accusantium, officia at aut quibusdam aliquam sequi odit temporibus sit saepe facilis fuga voluptatum autem."]
                                    },
                                    {
                                        element: "p",
                                        child: ["Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae harum distinctio error esse alias fugiat accusantium, officia at aut quibusdam aliquam sequi odit temporibus sit saepe facilis fuga voluptatum autem."]
                                    },
                                    {
                                        element: "p",
                                        child: ["Voluptatum autem."]
                                    }
                                ]
                            },
                            {
                                element: "div",
                                class: "about-right",
                                child: [
                                    {
                                        element: "p",
                                        child: ["For More Information or If to Register Any Compliants, Please Contact Us!"]
                                    },
                                    {
                                        element: "p",
                                        child: ["We Value your Feedback."]
                                    },
                                    {
                                        element: "div",
                                        class: "heading-small",
                                        child: ["Contact Information"]
                                    },
                                    {
                                        element: "address",
                                        child: [
                                            {
                                                element: "a",
                                                href: "mailto:helpdesk@lotus.com",
                                                child: ["helpdesk@lotus.com"]
                                            },
                                            {
                                                element: "br"
                                            },
                                            {
                                                element: "a",
                                                href: "tel:+13115552368",
                                                child: ["(311) 555-2368"]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        element: "footer",
        child: [
            "Made with ",
            {
                element: "code",
                child: ['HTML + CSS + JS + \u2665']
            },
            " by Athil ",
            {
                element: "a",
                href: "https://github.com/mlksathil/restaurant",
                child: [
                    {
                        elementNS: "svg",
                        class: "icon footer-icon",
                        child: [
                            {
                                elementNS: "use",
                                href: `${_asset_icons_sprite_svg__WEBPACK_IMPORTED_MODULE_2__}#github`
                            }
                        ]
                    }
                ]
            },
            "2022"
        ]
    }
];

function createHTML(elem, parentElem) {

    let children = []

    for (let el of elem) {
        let mainElem;

        if (el.element) {
            mainElem = document.createElement(el.element)

            for (let e in el) {
                if (e == "element") continue;
                if (e == "child") continue;
                mainElem.setAttribute(e, el[e])
            }

            if (el.child)
                createHTML(el.child, mainElem)

            children.push(mainElem)

        } else if (el.elementNS) {
            mainElem = document.createElementNS("http://www.w3.org/2000/svg", el.elementNS)

            for (let e in el) {
                if (e == "elementNS") continue;
                if (e == "child") continue;
                mainElem.setAttribute(e, el[e])
            }

            if (el.child)
                createHTML(el.child, mainElem)

            children.push(mainElem)


        } else {

            children.push(el)
        }

    }

    return parentElem.append(...children)
}

// createHTML(HTML_STRING, document.body)

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtml.js */ "./src/scripts/createHtml.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.js */ "./src/scripts/order.js");
/* harmony import */ var _compatibility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compatibility.js */ "./src/scripts/compatibility.js");
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.js */ "./src/scripts/item.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_compatibility_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/compatibility.css */ "./src/styles/compatibility.css");
/* harmony import */ var _styles_style_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/style-home.css */ "./src/styles/style-home.css");
/* harmony import */ var _styles_style_menu_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/style-menu.css */ "./src/styles/style-menu.css");
/* harmony import */ var _styles_style_about_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/style-about.css */ "./src/styles/style-about.css");











// `use strict`;

(0,_createHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_createHtml_js__WEBPACK_IMPORTED_MODULE_0__.HTML_STRING, document.body);

(0,_compatibility_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

(0,_item_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_item_js__WEBPACK_IMPORTED_MODULE_3__.items);

_order_js__WEBPACK_IMPORTED_MODULE_1__.orderCart.addItem(null);

/***/ }),

/***/ "./src/scripts/item.js":
/*!*****************************!*\
  !*** ./src/scripts/item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createItemMarkup),
/* harmony export */   "items": () => (/* binding */ items)
/* harmony export */ });
/* harmony import */ var _createHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtml.js */ "./src/scripts/createHtml.js");
/* harmony import */ var _asset_icons_sprite_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/icons.sprite.svg */ "./src/asset/icons.sprite.svg");
/* harmony import */ var _asset_img_disp_aptz_channa_chat_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/img-disp/aptz-channa-chat.webp */ "./src/asset/img-disp/aptz-channa-chat.webp");
/* harmony import */ var _asset_img_disp_aptz_chicken_pakora_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/img-disp/aptz-chicken-pakora.webp */ "./src/asset/img-disp/aptz-chicken-pakora.webp");
/* harmony import */ var _asset_img_disp_aptz_dosa_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../asset/img-disp/aptz-dosa.webp */ "./src/asset/img-disp/aptz-dosa.webp");
/* harmony import */ var _asset_img_disp_aptz_eggplant_pakora_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset/img-disp/aptz-eggplant-pakora.webp */ "./src/asset/img-disp/aptz-eggplant-pakora.webp");
/* harmony import */ var _asset_img_disp_aptz_lamb_samosa_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../asset/img-disp/aptz-lamb-samosa.webp */ "./src/asset/img-disp/aptz-lamb-samosa.webp");
/* harmony import */ var _asset_img_disp_aptz_masala_dosa_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../asset/img-disp/aptz-masala-dosa.webp */ "./src/asset/img-disp/aptz-masala-dosa.webp");
/* harmony import */ var _asset_img_disp_aptz_rawa_dosa_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../asset/img-disp/aptz-rawa-dosa.webp */ "./src/asset/img-disp/aptz-rawa-dosa.webp");
/* harmony import */ var _asset_img_disp_aptz_samosa_chaat_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../asset/img-disp/aptz-samosa-chaat.webp */ "./src/asset/img-disp/aptz-samosa-chaat.webp");
/* harmony import */ var _asset_img_disp_aptz_uthapam_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../asset/img-disp/aptz-uthapam.webp */ "./src/asset/img-disp/aptz-uthapam.webp");
/* harmony import */ var _asset_img_disp_aptz_veg_samosa_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../asset/img-disp/aptz-veg-samosa.webp */ "./src/asset/img-disp/aptz-veg-samosa.webp");
/* harmony import */ var _asset_img_disp_comp_bev_indian_coffee_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../asset/img-disp/comp-bev-indian-coffee.webp */ "./src/asset/img-disp/comp-bev-indian-coffee.webp");
/* harmony import */ var _asset_img_disp_comp_bev_lassi_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../asset/img-disp/comp-bev-lassi.webp */ "./src/asset/img-disp/comp-bev-lassi.webp");
/* harmony import */ var _asset_img_disp_comp_bev_mango_lassi_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../asset/img-disp/comp-bev-mango-lassi.webp */ "./src/asset/img-disp/comp-bev-mango-lassi.webp");
/* harmony import */ var _asset_img_disp_comp_bev_masala_chai_webp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../asset/img-disp/comp-bev-masala-chai.webp */ "./src/asset/img-disp/comp-bev-masala-chai.webp");
/* harmony import */ var _asset_img_disp_comp_des_gajar_halwa_webp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../asset/img-disp/comp-des-gajar-halwa.webp */ "./src/asset/img-disp/comp-des-gajar-halwa.webp");
/* harmony import */ var _asset_img_disp_comp_des_gulab_jamun_webp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../asset/img-disp/comp-des-gulab-jamun.webp */ "./src/asset/img-disp/comp-des-gulab-jamun.webp");
/* harmony import */ var _asset_img_disp_comp_des_kheer_webp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../asset/img-disp/comp-des-kheer.webp */ "./src/asset/img-disp/comp-des-kheer.webp");
/* harmony import */ var _asset_img_disp_comp_des_mango_kulfi_webp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../asset/img-disp/comp-des-mango-kulfi.webp */ "./src/asset/img-disp/comp-des-mango-kulfi.webp");
/* harmony import */ var _asset_img_disp_comp_des_mango_pudding_webp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../asset/img-disp/comp-des-mango-pudding.webp */ "./src/asset/img-disp/comp-des-mango-pudding.webp");
/* harmony import */ var _asset_img_disp_comp_des_pistachio_kulfi_webp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../asset/img-disp/comp-des-pistachio-kulfi.webp */ "./src/asset/img-disp/comp-des-pistachio-kulfi.webp");
/* harmony import */ var _asset_img_disp_comp_des_saffron_kulfi_webp__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../asset/img-disp/comp-des-saffron-kulfi.webp */ "./src/asset/img-disp/comp-des-saffron-kulfi.webp");
/* harmony import */ var _asset_img_disp_comp_sb_butter_naan_webp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../asset/img-disp/comp-sb-butter-naan.webp */ "./src/asset/img-disp/comp-sb-butter-naan.webp");
/* harmony import */ var _asset_img_disp_comp_sb_cheese_naan_webp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../asset/img-disp/comp-sb-cheese-naan.webp */ "./src/asset/img-disp/comp-sb-cheese-naan.webp");
/* harmony import */ var _asset_img_disp_comp_sb_cucumber_pachadi_webp__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../asset/img-disp/comp-sb-cucumber-pachadi.webp */ "./src/asset/img-disp/comp-sb-cucumber-pachadi.webp");
/* harmony import */ var _asset_img_disp_comp_sb_garlic_naan_webp__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../asset/img-disp/comp-sb-garlic-naan.webp */ "./src/asset/img-disp/comp-sb-garlic-naan.webp");
/* harmony import */ var _asset_img_disp_comp_sb_keema_naan_webp__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../asset/img-disp/comp-sb-keema-naan.webp */ "./src/asset/img-disp/comp-sb-keema-naan.webp");
/* harmony import */ var _asset_img_disp_comp_sb_onion_kulcha_webp__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../asset/img-disp/comp-sb-onion-kulcha.webp */ "./src/asset/img-disp/comp-sb-onion-kulcha.webp");
/* harmony import */ var _asset_img_disp_dish_beef_broccoli_webp__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../asset/img-disp/dish-beef-broccoli.webp */ "./src/asset/img-disp/dish-beef-broccoli.webp");
/* harmony import */ var _asset_img_disp_dish_beef_curry_webp__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../asset/img-disp/dish-beef-curry.webp */ "./src/asset/img-disp/dish-beef-curry.webp");
/* harmony import */ var _asset_img_disp_dish_beef_shahi_korma_webp__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../asset/img-disp/dish-beef-shahi-korma.webp */ "./src/asset/img-disp/dish-beef-shahi-korma.webp");
/* harmony import */ var _asset_img_disp_dish_beef_vindaloo_webp__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../asset/img-disp/dish-beef-vindaloo.webp */ "./src/asset/img-disp/dish-beef-vindaloo.webp");
/* harmony import */ var _asset_img_disp_dish_lamb_achar_webp__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../asset/img-disp/dish-lamb-achar.webp */ "./src/asset/img-disp/dish-lamb-achar.webp");
/* harmony import */ var _asset_img_disp_dish_lamb_broccoli_webp__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../asset/img-disp/dish-lamb-broccoli.webp */ "./src/asset/img-disp/dish-lamb-broccoli.webp");
/* harmony import */ var _asset_img_disp_dish_lamb_curry_webp__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../asset/img-disp/dish-lamb-curry.webp */ "./src/asset/img-disp/dish-lamb-curry.webp");
/* harmony import */ var _asset_img_disp_dish_lamb_dhasnk_webp__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../asset/img-disp/dish-lamb-dhasnk.webp */ "./src/asset/img-disp/dish-lamb-dhasnk.webp");
/* harmony import */ var _asset_img_disp_dish_lamb_kasmiri_webp__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../asset/img-disp/dish-lamb-kasmiri.webp */ "./src/asset/img-disp/dish-lamb-kasmiri.webp");
/* harmony import */ var _asset_img_disp_dish_sea_shrimp_coconut_curry_webp__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../asset/img-disp/dish-sea-shrimp-coconut-curry.webp */ "./src/asset/img-disp/dish-sea-shrimp-coconut-curry.webp");
/* harmony import */ var _asset_img_disp_dish_sea_shrimp_curry_webp__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../asset/img-disp/dish-sea-shrimp-curry.webp */ "./src/asset/img-disp/dish-sea-shrimp-curry.webp");
/* harmony import */ var _asset_img_disp_dish_sea_shrimp_vindaloo_webp__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../asset/img-disp/dish-sea-shrimp-vindaloo.webp */ "./src/asset/img-disp/dish-sea-shrimp-vindaloo.webp");
/* harmony import */ var _asset_img_disp_dish_sea_tikka_masala_webp__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../asset/img-disp/dish-sea-tikka-masala.webp */ "./src/asset/img-disp/dish-sea-tikka-masala.webp");
/* harmony import */ var _asset_img_disp_dish_veg_banana_chips_webp__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-banana-chips.webp */ "./src/asset/img-disp/dish-veg-banana-chips.webp");
/* harmony import */ var _asset_img_disp_dish_veg_bindhi_masala_webp__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-bindhi-masala.webp */ "./src/asset/img-disp/dish-veg-bindhi-masala.webp");
/* harmony import */ var _asset_img_disp_dish_veg_chole_batura_webp__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-chole-batura.webp */ "./src/asset/img-disp/dish-veg-chole-batura.webp");
/* harmony import */ var _asset_img_disp_dish_veg_cury_webp__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-cury.webp */ "./src/asset/img-disp/dish-veg-cury.webp");
/* harmony import */ var _asset_img_disp_dish_veg_dal_makhani_webp__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-dal-makhani.webp */ "./src/asset/img-disp/dish-veg-dal-makhani.webp");
/* harmony import */ var _asset_img_disp_dish_veg_dal_tadka_webp__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-dal-tadka.webp */ "./src/asset/img-disp/dish-veg-dal-tadka.webp");
/* harmony import */ var _asset_img_disp_dish_veg_eggplant_curry_webp__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-eggplant-curry.webp */ "./src/asset/img-disp/dish-veg-eggplant-curry.webp");
/* harmony import */ var _asset_img_disp_dish_veg_paav_bhaji_webp__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-paav-bhaji.webp */ "./src/asset/img-disp/dish-veg-paav-bhaji.webp");
/* harmony import */ var _asset_img_disp_dish_veg_palak_paneer_webp__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-palak-paneer.webp */ "./src/asset/img-disp/dish-veg-palak-paneer.webp");
/* harmony import */ var _asset_img_disp_dish_veg_puzhukku_webp__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-puzhukku.webp */ "./src/asset/img-disp/dish-veg-puzhukku.webp");
/* harmony import */ var _asset_img_disp_dish_veg_saag_aloo_curry_webp__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-saag-aloo-curry.webp */ "./src/asset/img-disp/dish-veg-saag-aloo-curry.webp");
/* harmony import */ var _asset_img_disp_dish_veg_saag_paneer_curry_webp__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../asset/img-disp/dish-veg-saag-paneer-curry.webp */ "./src/asset/img-disp/dish-veg-saag-paneer-curry.webp");
/* harmony import */ var _asset_img_disp_mc_biriyani_chicken_webp__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../asset/img-disp/mc-biriyani-chicken.webp */ "./src/asset/img-disp/mc-biriyani-chicken.webp");
/* harmony import */ var _asset_img_disp_mc_biriyani_eggplant_webp__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../asset/img-disp/mc-biriyani-eggplant.webp */ "./src/asset/img-disp/mc-biriyani-eggplant.webp");
/* harmony import */ var _asset_img_disp_mc_biriyani_lamb_webp__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../asset/img-disp/mc-biriyani-lamb.webp */ "./src/asset/img-disp/mc-biriyani-lamb.webp");
/* harmony import */ var _asset_img_disp_mc_biriyani_paneer_webp__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../asset/img-disp/mc-biriyani-paneer.webp */ "./src/asset/img-disp/mc-biriyani-paneer.webp");
/* harmony import */ var _asset_img_disp_mc_biriyani_scallop_webp__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../asset/img-disp/mc-biriyani-scallop.webp */ "./src/asset/img-disp/mc-biriyani-scallop.webp");
/* harmony import */ var _asset_img_disp_mc_biriyani_veg_webp__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../asset/img-disp/mc-biriyani-veg.webp */ "./src/asset/img-disp/mc-biriyani-veg.webp");
/* harmony import */ var _asset_img_disp_mc_tandoori_beef_webp__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../asset/img-disp/mc-tandoori-beef.webp */ "./src/asset/img-disp/mc-tandoori-beef.webp");
/* harmony import */ var _asset_img_disp_mc_tandoori_chicken_webp__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../asset/img-disp/mc-tandoori-chicken.webp */ "./src/asset/img-disp/mc-tandoori-chicken.webp");
/* harmony import */ var _asset_img_disp_mc_tandoori_fish_webp__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../asset/img-disp/mc-tandoori-fish.webp */ "./src/asset/img-disp/mc-tandoori-fish.webp");
/* harmony import */ var _asset_img_disp_mc_tandoori_lamb_webp__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../asset/img-disp/mc-tandoori-lamb.webp */ "./src/asset/img-disp/mc-tandoori-lamb.webp");
/* harmony import */ var _asset_img_disp_mc_tandoori_mix_grill_webp__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../asset/img-disp/mc-tandoori-mix-grill.webp */ "./src/asset/img-disp/mc-tandoori-mix-grill.webp");
/* harmony import */ var _asset_img_disp_mc_tandoori_quail_webp__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../asset/img-disp/mc-tandoori-quail.webp */ "./src/asset/img-disp/mc-tandoori-quail.webp");
/* harmony import */ var _asset_img_disp_mc_tandoori_shrimp_webp__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../asset/img-disp/mc-tandoori-shrimp.webp */ "./src/asset/img-disp/mc-tandoori-shrimp.webp");
/* harmony import */ var _asset_img_disp_mc_tandoori_veg_webp__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../asset/img-disp/mc-tandoori-veg.webp */ "./src/asset/img-disp/mc-tandoori-veg.webp");






































































const items = [
    { itemID: "appetizer_channa_chat", itemImg: _asset_img_disp_aptz_channa_chat_webp__WEBPACK_IMPORTED_MODULE_2__, itemTitle: "Channa Chaat", itemPrice: "5.25" },
    { itemID: "appetizer_chicken_pakora", itemImg: _asset_img_disp_aptz_chicken_pakora_webp__WEBPACK_IMPORTED_MODULE_3__, itemTitle: "Chicken Pakora", itemPrice: "5.95" },
    { itemID: "appetizer_dosa", itemImg: _asset_img_disp_aptz_dosa_webp__WEBPACK_IMPORTED_MODULE_4__, itemTitle: "Dosa", itemPrice: "3.25" },
    { itemID: "appetizer_eggplant_pakora", itemImg: _asset_img_disp_aptz_eggplant_pakora_webp__WEBPACK_IMPORTED_MODULE_5__, itemTitle: "Eggplant Pakora", itemPrice: "4.25" },
    { itemID: "appetizer_lamb_samosa", itemImg: _asset_img_disp_aptz_lamb_samosa_webp__WEBPACK_IMPORTED_MODULE_6__, itemTitle: "Lamb Samosa", itemPrice: "5.95" },
    { itemID: "appetizer_masala_dosa", itemImg: _asset_img_disp_aptz_masala_dosa_webp__WEBPACK_IMPORTED_MODULE_7__, itemTitle: "Masala Dosa", itemPrice: "4.95" },
    { itemID: "appetizer_rawa_dosa", itemImg: _asset_img_disp_aptz_rawa_dosa_webp__WEBPACK_IMPORTED_MODULE_8__, itemTitle: "Rawa Dosa", itemPrice: "3.95" },
    { itemID: "appetizer_samosa_chaat", itemImg: _asset_img_disp_aptz_samosa_chaat_webp__WEBPACK_IMPORTED_MODULE_9__, itemTitle: "Samosa Chaat", itemPrice: "5.95" },
    { itemID: "appetizer_uthapam", itemImg: _asset_img_disp_aptz_uthapam_webp__WEBPACK_IMPORTED_MODULE_10__, itemTitle: "Uthappam", itemPrice: "5.95" },
    { itemID: "appetizer_veg_samosa", itemImg: _asset_img_disp_aptz_veg_samosa_webp__WEBPACK_IMPORTED_MODULE_11__, itemTitle: "Vegetable Samosa", itemPrice: "4.35" },
    { itemID: "compBev_indian_coffee", itemImg: _asset_img_disp_comp_bev_indian_coffee_webp__WEBPACK_IMPORTED_MODULE_12__, itemTitle: "Indian Coffee", itemPrice: "1.99" },
    { itemID: "compBev_lassi", itemImg: _asset_img_disp_comp_bev_lassi_webp__WEBPACK_IMPORTED_MODULE_13__, itemTitle: "Lassi", itemPrice: "2.49" },
    { itemID: "compBev_mango_lassi", itemImg: _asset_img_disp_comp_bev_mango_lassi_webp__WEBPACK_IMPORTED_MODULE_14__, itemTitle: "Mango Lassi", itemPrice: "2.99" },
    { itemID: "compBev_masala_chai", itemImg: _asset_img_disp_comp_bev_masala_chai_webp__WEBPACK_IMPORTED_MODULE_15__, itemTitle: "Masala Chai", itemPrice: "1.99" },
    { itemID: "compDes_gajar_halwa", itemImg: _asset_img_disp_comp_des_gajar_halwa_webp__WEBPACK_IMPORTED_MODULE_16__, itemTitle: "Gajar Halwa", itemPrice: "2.99" },
    { itemID: "compDes_gulab_jamun", itemImg: _asset_img_disp_comp_des_gulab_jamun_webp__WEBPACK_IMPORTED_MODULE_17__, itemTitle: "Gulab Jamun", itemPrice: "5.95" },
    { itemID: "compDes_kheer", itemImg: _asset_img_disp_comp_des_kheer_webp__WEBPACK_IMPORTED_MODULE_18__, itemTitle: "Kheer", itemPrice: "3.95" },
    { itemID: "compDes_mango_kulfi", itemImg: _asset_img_disp_comp_des_mango_kulfi_webp__WEBPACK_IMPORTED_MODULE_19__, itemTitle: "Mango Kulfi", itemPrice: "4.25" },
    { itemID: "compDes_mango_pudding", itemImg: _asset_img_disp_comp_des_mango_pudding_webp__WEBPACK_IMPORTED_MODULE_20__, itemTitle: "Mango Pudding", itemPrice: "3.95" },
    { itemID: "compDes_pistachio_kulfi", itemImg: _asset_img_disp_comp_des_pistachio_kulfi_webp__WEBPACK_IMPORTED_MODULE_21__, itemTitle: "Pistachio Kulfi", itemPrice: "4.25" },
    { itemID: "compDes_saffron_kulfi", itemImg: _asset_img_disp_comp_des_saffron_kulfi_webp__WEBPACK_IMPORTED_MODULE_22__, itemTitle: "Saffron Kulfi", itemPrice: "4.94" },
    { itemID: "compBread_butter_naan", itemImg: _asset_img_disp_comp_sb_butter_naan_webp__WEBPACK_IMPORTED_MODULE_23__, itemTitle: "Butter Naan", itemPrice: "1.99" },
    { itemID: "compBread_cheese_naan", itemImg: _asset_img_disp_comp_sb_cheese_naan_webp__WEBPACK_IMPORTED_MODULE_24__, itemTitle: "Cheese Naan", itemPrice: "3.99" },
    { itemID: "compBread_cucumber_pachadi", itemImg: _asset_img_disp_comp_sb_cucumber_pachadi_webp__WEBPACK_IMPORTED_MODULE_25__, itemTitle: "Cucumber Pachadi", itemPrice: "8.25" },
    { itemID: "compBread_garlic_naan", itemImg: _asset_img_disp_comp_sb_garlic_naan_webp__WEBPACK_IMPORTED_MODULE_26__, itemTitle: "Garlic Naan", itemPrice: "2.99" },
    { itemID: "compBread_keema_naan", itemImg: _asset_img_disp_comp_sb_keema_naan_webp__WEBPACK_IMPORTED_MODULE_27__, itemTitle: "Kheema Naan", itemPrice: "3.99" },
    { itemID: "compBread_onion_kulcha", itemImg: _asset_img_disp_comp_sb_onion_kulcha_webp__WEBPACK_IMPORTED_MODULE_28__, itemTitle: "Onion Kulcha", itemPrice: "5.75" },
    { itemID: "dishBeef_broccoli", itemImg: _asset_img_disp_dish_beef_broccoli_webp__WEBPACK_IMPORTED_MODULE_29__, itemTitle: "Beef Broccoli", itemPrice: "13.95" },
    { itemID: "dishBeef_curry", itemImg: _asset_img_disp_dish_beef_curry_webp__WEBPACK_IMPORTED_MODULE_30__, itemTitle: "Beef Curry", itemPrice: "13.25" },
    { itemID: "dishBeef_shahi_korma", itemImg: _asset_img_disp_dish_beef_shahi_korma_webp__WEBPACK_IMPORTED_MODULE_31__, itemTitle: "Beef Shahi Korma", itemPrice: "14.25" },
    { itemID: "dishBeef_vindaloo", itemImg: _asset_img_disp_dish_beef_vindaloo_webp__WEBPACK_IMPORTED_MODULE_32__, itemTitle: "Beef Vindaloo", itemPrice: "14.25" },
    { itemID: "dishLamb_achar", itemImg: _asset_img_disp_dish_lamb_achar_webp__WEBPACK_IMPORTED_MODULE_33__, itemTitle: "Lamb Achar", itemPrice: "13.95" },
    { itemID: "dishLamb_broccoli", itemImg: _asset_img_disp_dish_lamb_broccoli_webp__WEBPACK_IMPORTED_MODULE_34__, itemTitle: "Lamb Broccoli", itemPrice: "14.25" },
    { itemID: "dishLamb_curry", itemImg: _asset_img_disp_dish_lamb_curry_webp__WEBPACK_IMPORTED_MODULE_35__, itemTitle: "Lamb Curry", itemPrice: "14.25" },
    { itemID: "dishLamb_dhasnk", itemImg: _asset_img_disp_dish_lamb_dhasnk_webp__WEBPACK_IMPORTED_MODULE_36__, itemTitle: "Lamb Dhansk", itemPrice: "15.25" },
    { itemID: "dishLamb_kasmiri", itemImg: _asset_img_disp_dish_lamb_kasmiri_webp__WEBPACK_IMPORTED_MODULE_37__, itemTitle: "Lamb Kashmiri", itemPrice: "14.25" },
    { itemID: "dishSea_shrimp_coconut_curry", itemImg: _asset_img_disp_dish_sea_shrimp_coconut_curry_webp__WEBPACK_IMPORTED_MODULE_38__, itemTitle: "Shrimp Coconut Curry", itemPrice: "15.95" },
    { itemID: "dishSea_shrimp_curry", itemImg: _asset_img_disp_dish_sea_shrimp_curry_webp__WEBPACK_IMPORTED_MODULE_39__, itemTitle: "Shrimp Curry", itemPrice: "14.95" },
    { itemID: "dishSea_shrimp_vindaloo", itemImg: _asset_img_disp_dish_sea_shrimp_vindaloo_webp__WEBPACK_IMPORTED_MODULE_40__, itemTitle: "Shrimp Vindaloo", itemPrice: "15.95" },
    { itemID: "dishSea_tikka_masala", itemImg: _asset_img_disp_dish_sea_tikka_masala_webp__WEBPACK_IMPORTED_MODULE_41__, itemTitle: "Shrimp Tikka Masala", itemPrice: "13.99" },
    { itemID: "dishVeg_banana_chips", itemImg: _asset_img_disp_dish_veg_banana_chips_webp__WEBPACK_IMPORTED_MODULE_42__, itemTitle: "Banana Chips", itemPrice: "4.25" },
    { itemID: "dishVeg_bindhi_masala", itemImg: _asset_img_disp_dish_veg_bindhi_masala_webp__WEBPACK_IMPORTED_MODULE_43__, itemTitle: "Bhindi Masala", itemPrice: "9.99" },
    { itemID: "dishVeg_chole_batura", itemImg: _asset_img_disp_dish_veg_chole_batura_webp__WEBPACK_IMPORTED_MODULE_44__, itemTitle: "Chole Batura", itemPrice: "7.99" },
    { itemID: "dishVeg_cury", itemImg: _asset_img_disp_dish_veg_cury_webp__WEBPACK_IMPORTED_MODULE_45__, itemTitle: "Vegetable Curry", itemPrice: "8.95" },
    { itemID: "dishVeg_dal_makhani", itemImg: _asset_img_disp_dish_veg_dal_makhani_webp__WEBPACK_IMPORTED_MODULE_46__, itemTitle: "Dal Makhani", itemPrice: "9.99" },
    { itemID: "dishVeg_dal_tadka", itemImg: _asset_img_disp_dish_veg_dal_tadka_webp__WEBPACK_IMPORTED_MODULE_47__, itemTitle: "Dal Tadka", itemPrice: "9.99" },
    { itemID: "dishVeg_eggplant_curry", itemImg: _asset_img_disp_dish_veg_eggplant_curry_webp__WEBPACK_IMPORTED_MODULE_48__, itemTitle: "Eggplant Curry", itemPrice: "9.95" },
    { itemID: "dishVeg_paav_bhaji", itemImg: _asset_img_disp_dish_veg_paav_bhaji_webp__WEBPACK_IMPORTED_MODULE_49__, itemTitle: "Paav Bhaji", itemPrice: "6.99" },
    { itemID: "dishVeg_palak_paneer", itemImg: _asset_img_disp_dish_veg_palak_paneer_webp__WEBPACK_IMPORTED_MODULE_50__, itemTitle: "Palak Paneer", itemPrice: "10.25" },
    { itemID: "dishVeg_puzhukku", itemImg: _asset_img_disp_dish_veg_puzhukku_webp__WEBPACK_IMPORTED_MODULE_51__, itemTitle: "Puzhukku", itemPrice: "12.95" },
    { itemID: "dishVeg_saag_aloo_curry", itemImg: _asset_img_disp_dish_veg_saag_aloo_curry_webp__WEBPACK_IMPORTED_MODULE_52__, itemTitle: "Saag Aloo Curry", itemPrice: "8.95" },
    { itemID: "dishVeg_saag_paneer_curry", itemImg: _asset_img_disp_dish_veg_saag_paneer_curry_webp__WEBPACK_IMPORTED_MODULE_53__, itemTitle: "Saag Paneer Curry", itemPrice: "9.95" },
    { itemID: "mcBiriyani_chicken", itemImg: _asset_img_disp_mc_biriyani_chicken_webp__WEBPACK_IMPORTED_MODULE_54__, itemTitle: "Chicken Biriyani", itemPrice: "9.25" },
    { itemID: "mcBiriyani_eggplant", itemImg: _asset_img_disp_mc_biriyani_eggplant_webp__WEBPACK_IMPORTED_MODULE_55__, itemTitle: "Eggplant Biriyani", itemPrice: "9.25" },
    { itemID: "mcBiriyani_lamb", itemImg: _asset_img_disp_mc_biriyani_lamb_webp__WEBPACK_IMPORTED_MODULE_56__, itemTitle: "Lamb Biriyani", itemPrice: "12.95" },
    { itemID: "mcBiriyani_paneer", itemImg: _asset_img_disp_mc_biriyani_paneer_webp__WEBPACK_IMPORTED_MODULE_57__, itemTitle: "Paneer Biriyani", itemPrice: "9.25" },
    { itemID: "mcBiriyani_scallop", itemImg: _asset_img_disp_mc_biriyani_scallop_webp__WEBPACK_IMPORTED_MODULE_58__, itemTitle: "Scallop Shrimp Biriyani", itemPrice: "18.95" },
    { itemID: "mcBiriyani_veg", itemImg: _asset_img_disp_mc_biriyani_veg_webp__WEBPACK_IMPORTED_MODULE_59__, itemTitle: "Vegetable Biriyani", itemPrice: "9.25" },
    { itemID: "mcTandoori_beef", itemImg: _asset_img_disp_mc_tandoori_beef_webp__WEBPACK_IMPORTED_MODULE_60__, itemTitle: "Tandoori Beef", itemPrice: "12.95" },
    { itemID: "mcTandoori_chicken", itemImg: _asset_img_disp_mc_tandoori_chicken_webp__WEBPACK_IMPORTED_MODULE_61__, itemTitle: "Chicken Tandoori", itemPrice: "12.95" },
    { itemID: "mcTandoori_fish", itemImg: _asset_img_disp_mc_tandoori_fish_webp__WEBPACK_IMPORTED_MODULE_62__, itemTitle: "Tandoori Fish", itemPrice: "17.95" },
    { itemID: "mcTandoori_lamb", itemImg: _asset_img_disp_mc_tandoori_lamb_webp__WEBPACK_IMPORTED_MODULE_63__, itemTitle: "Lamb Tandoori", itemPrice: "14.95" },
    { itemID: "mcTandoori_mix_grill", itemImg: _asset_img_disp_mc_tandoori_mix_grill_webp__WEBPACK_IMPORTED_MODULE_64__, itemTitle: "Tandoor Mix Grill", itemPrice: "15.95" },
    { itemID: "mcTandoori_quail", itemImg: _asset_img_disp_mc_tandoori_quail_webp__WEBPACK_IMPORTED_MODULE_65__, itemTitle: "Quail Tandoori", itemPrice: "17.95" },
    { itemID: "mcTandoori_shrimp", itemImg: _asset_img_disp_mc_tandoori_shrimp_webp__WEBPACK_IMPORTED_MODULE_66__, itemTitle: "Tandoori Shrimp", itemPrice: "13.95" },
    { itemID: "mcTandoori_veg", itemImg: _asset_img_disp_mc_tandoori_veg_webp__WEBPACK_IMPORTED_MODULE_67__, itemTitle: "Begetable Tandoori", itemPrice: "15.99" },
]

function createItemMarkup(items) {

    for (let item of items) {
        let itemType = /(.+?)_/.exec(item.itemID)[1]

        let parentElem = document.querySelector(`.tab-${itemType}-window`)


        ;(0,_createHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])([
            {
                element: "div",
                class: "grid-item",
                "data-item-id": `${item.itemID}`,
                child: [
                    {
                        element: "img",
                        src: item.itemImg,
                        alt: `${item.itemTitle}`,
                        class: "item-image"
                    },
                    {
                        element: "div",
                        class: "item-image-fg"
                    },
                    {
                        element: "div",
                        class: "item-sideInfo",
                        child: [
                            {
                                element: "p",
                                class: "item-title",
                                child: [`${item.itemTitle}`]
                            },
                            {
                                element: "p",
                                class: "item-price text-small",
                                child: [`$ ${item.itemPrice}`]
                            }
                        ]
                    },
                    {
                        element: "button",
                        class: "item-button button-small orderNow",
                        child: [
                            {
                                elementNS: "svg",
                                class: "icon icon-button",
                                child: [
                                    {
                                        elementNS: "use",
                                        href: `${_asset_icons_sprite_svg__WEBPACK_IMPORTED_MODULE_1__}#addBox`
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ], parentElem)

    }
}

/***/ }),

/***/ "./src/scripts/order.js":
/*!******************************!*\
  !*** ./src/scripts/order.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "orderCart": () => (/* binding */ orderCart)
/* harmony export */ });
/* harmony import */ var _createHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtml.js */ "./src/scripts/createHtml.js");
/* harmony import */ var _asset_icons_sprite_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/icons.sprite.svg */ "./src/asset/icons.sprite.svg");
/* harmony import */ var js_big_decimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-big-decimal */ "./node_modules/js-big-decimal/dist/node/js-big-decimal.js");
/* harmony import */ var js_big_decimal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_big_decimal__WEBPACK_IMPORTED_MODULE_2__);






const orderCart = (function () {

    function _changeTotal(itemPrice, phase) {
        const totalPrice = document.querySelector('p.order-totalPrice>span.text-medium')
        const totalPriceDecimal = document.querySelector('p.order-totalPrice>span.text-small:last-child')

        const CF = 100000000000;

        if (phase == 'add') {
            const priceWithDecimal = js_big_decimal__WEBPACK_IMPORTED_MODULE_2___default().add(totalPrice.textContent + '.' + totalPriceDecimal.textContent, itemPrice)

            totalPrice.textContent = (priceWithDecimal).toString().replace(/\..+$/, '');
            totalPriceDecimal.textContent = js_big_decimal__WEBPACK_IMPORTED_MODULE_2___default().subtract(priceWithDecimal, totalPrice.textContent).toString().replace('0.', '');


        } else {
            const priceWithDecimal = js_big_decimal__WEBPACK_IMPORTED_MODULE_2___default().subtract(totalPrice.textContent + '.' + totalPriceDecimal.textContent, itemPrice)

            totalPrice.textContent = (priceWithDecimal).toString().replace(/\..+$/, '');
            totalPriceDecimal.textContent = js_big_decimal__WEBPACK_IMPORTED_MODULE_2___default().subtract(priceWithDecimal, totalPrice.textContent).toString().replace('0.', '');

        }
    }

    function _addOrder(itemDetails) {
        // const orderItems = document.querySelectorAll('div.order-item');

        const currentItem = document.querySelector(`div.order-item[data-item-id="${itemDetails.itemID}"]`)

        let itemPrice = Number(itemDetails.itemPrice)

        if (currentItem) {
            let qty = currentItem.querySelector('span.order-itemTotalQty');
            let price = currentItem.querySelector('span.order-itemTotalPrice');

            qty.textContent = Number(qty.textContent) + 1;
            // price.textContent = (itemPrice * Number(qty.textContent)).toFixed(2)

        } else {

            const newElementOrder = _createNewOrder(itemDetails)

            document.querySelector('div.order-detail>div.ordered-items').append(newElementOrder)

            _buttonEvent(newElementOrder)

        }

        _changeTotal(itemPrice, 'add')
        _changeTotalCount('add')

    }

    function _createNewOrder(itemDetails) {
        const gridItem = document.createElement('div');
        gridItem.classList = 'order-item';
        gridItem.dataset.itemId = itemDetails.itemID;

        const elem = [
            {
                element: "img",
                class: "order-itemImg",
                src: `${itemDetails.itemImg}`
            },
            {
                element: "p",
                class: "order-itemTitle text-medium",
                child: [`${itemDetails.itemTitle}`]
            },
            {
                element: "p",
                class: "order-itemText text-small",
                child: [
                    "x",
                    {
                        element: "span",
                        class: "order-itemTotalQty",
                        child: ["1"]
                    },
                    " - $",
                    {
                        element: "span",
                        class: "order-itemTotalPrice text-small",
                        child: [`${Number(itemDetails.itemPrice).toFixed(2)}`]
                    }
                ]
            },
            {
                element: "div",
                class: "order-itemButtons",
                child: [
                    {
                        elementNS: "svg",
                        class: "icon side-icon",
                        child: [
                            {
                                elementNS: "use",
                                href: `${_asset_icons_sprite_svg__WEBPACK_IMPORTED_MODULE_1__}#addBox`
                            }
                        ]
                    },
                    {
                        elementNS: "svg",
                        class: "icon side-icon",
                        child: [
                            {
                                elementNS: "use",
                                href: `${_asset_icons_sprite_svg__WEBPACK_IMPORTED_MODULE_1__}#remove`
                            }
                        ]
                    }
                ]
            }
        ]

        ;(0,_createHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elem, gridItem)

        return gridItem
    }

    function _buttonEvent(item = null) {

        let button;

        if (item) {

            button = item.querySelectorAll('div.order-detail>div.ordered-items>.order-item>.order-itemButtons')

        } else {

            button = document.querySelectorAll('div.order-detail>div.ordered-items>.order-item>.order-itemButtons')

        }

        button.forEach(b => {
            b.firstElementChild.addEventListener('click', _changeQty.bind(this, b.closest('div.order-item'), 'add'))

            b.lastElementChild.addEventListener('click', _changeQty.bind(this, b.closest('div.order-item'), 'rem'))
        })
    }

    _buttonEvent();

    function _changeQty(item, phase) {

        var qty = item.querySelector('p.order-itemText>.order-itemTotalQty')
        var price = Number(item.querySelector('p.order-itemText>.order-itemTotalPrice').textContent)

        if (phase == "add") {

            qty.textContent = Number(qty.textContent) + 1
            _changeTotal(price, phase)
            _changeTotalCount(phase)

        } else {

            if (qty.textContent == '1') {

                item.remove()
                _changeTotalCount(phase)
                _changeTotal(price, phase)

            } else {

                qty.textContent = Number(qty.textContent) - 1
                _changeTotal(price, phase)
                _changeTotalCount(phase)

            }

        }
    }

    function _changeTotalCount(phase) {

        const orderCount = document.querySelector('div.order-cart>div.order-count')

        if (phase == 'add') {
            orderCount.textContent = Number(orderCount.textContent) + 1

            if (orderCount.textContent == 1) {
                orderCount.classList.remove('nodisplay')

                document.querySelector('div.order-detail>div.ordered-items>div.no-order').classList.add('nodisplay')

                document.querySelector('div.order-detail button.placeOrder').classList.remove('nodisplay')
            }

        } else {
            orderCount.textContent = Number(orderCount.textContent) - 1

            if (orderCount.textContent == 0) {
                orderCount.classList.add('nodisplay')

                document.querySelector('div.order-detail>div.ordered-items>div.no-order').classList.remove('nodisplay')

                document.querySelector('div.order-detail button.placeOrder').classList.add('nodisplay')
            }
        }

    }

    const addItem = function (itemDetails = null) {

        if (itemDetails) {

            _addOrder(itemDetails)

        } else {

            const gridItemAdd = document.querySelectorAll('div.grid-item>button.item-button.orderNow')

            gridItemAdd.forEach(itemAdd => itemAdd.addEventListener('click', (e) => {
                const item = e.currentTarget.parentElement;

                const itemDetails = {
                    itemID: item.dataset.itemId,
                    itemImg: item.children[0].src,
                    itemTitle: item.children[2].children[0].textContent,
                    itemPrice: item.children[2].children[1].textContent.replace('$ ', '')
                }

                _addOrder(itemDetails)

            }))
        }
    }

    return { addItem }

})();

/***/ }),

/***/ "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><path d=\"M15.85 32.15q.3.35.75.35t.8-.35l6.6-6.6 6.65 6.65q.3.3.75.275.45-.025.75-.325.35-.3.35-.75t-.35-.8l-6.6-6.6 6.65-6.65q.3-.3.275-.75-.025-.45-.325-.75-.3-.35-.75-.35t-.8.35l-6.6 6.6-6.65-6.65q-.3-.3-.75-.275-.45.025-.75.325-.35.3-.35.75t.35.8l6.6 6.6-6.65 6.65q-.3.3-.275.75.025.45.325.75ZM24 42.85q-4 0-7.425-1.45t-5.975-4q-2.55-2.55-4-5.975Q5.15 28 5.15 24q0-3.95 1.45-7.4t4-6q2.55-2.55 5.975-4Q20 5.15 24 5.15q3.95 0 7.4 1.45t6 4q2.55 2.55 4 5.975Q42.85 20 42.85 24t-1.45 7.425q-1.45 3.425-4 5.975t-5.975 4Q28 42.85 24 42.85ZM24 24Zm0 16.65q6.85 0 11.75-4.875T40.65 24q0-6.85-4.9-11.75T24 7.35q-6.9 0-11.775 4.9T7.35 24q0 6.9 4.875 11.775T24 40.65Z\"></svg>":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M15.85 32.15q.3.35.75.35t.8-.35l6.6-6.6 6.65 6.65q.3.3.75.275.45-.025.75-.325.35-.3.35-.75t-.35-.8l-6.6-6.6 6.65-6.65q.3-.3.275-.75-.025-.45-.325-.75-.3-.35-.75-.35t-.8.35l-6.6 6.6-6.65-6.65q-.3-.3-.75-.275-.45.025-.75.325-.35.3-.35.75t.35.8l6.6 6.6-6.65 6.65q-.3.3-.275.75.025.45.325.75ZM24 42.85q-4 0-7.425-1.45t-5.975-4q-2.55-2.55-4-5.975Q5.15 28 5.15 24q0-3.95 1.45-7.4t4-6q2.55-2.55 5.975-4Q20 5.15 24 5.15q3.95 0 7.4 1.45t6 4q2.55 2.55 4 5.975Q42.85 20 42.85 24t-1.45 7.425q-1.45 3.425-4 5.975t-5.975 4Q28 42.85 24 42.85ZM24 24Zm0 16.65q6.85 0 11.75-4.875T40.65 24q0-6.85-4.9-11.75T24 7.35q-6.9 0-11.775 4.9T7.35 24q0 6.9 4.875 11.775T24 40.65Z"></svg> ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><path d=\"M15.85 32.15q.3.35.75.35t.8-.35l6.6-6.6 6.65 6.65q.3.3.75.275.45-.025.75-.325.35-.3.35-.75t-.35-.8l-6.6-6.6 6.65-6.65q.3-.3.275-.75-.025-.45-.325-.75-.3-.35-.75-.35t-.8.35l-6.6 6.6-6.65-6.65q-.3-.3-.75-.275-.45.025-.75.325-.35.3-.35.75t.35.8l6.6 6.6-6.65 6.65q-.3.3-.275.75.025.45.325.75ZM24 42.85q-4 0-7.425-1.45t-5.975-4q-2.55-2.55-4-5.975Q5.15 28 5.15 24q0-3.95 1.45-7.4t4-6q2.55-2.55 5.975-4Q20 5.15 24 5.15q3.95 0 7.4 1.45t6 4q2.55 2.55 4 5.975Q42.85 20 42.85 24t-1.45 7.425q-1.45 3.425-4 5.975t-5.975 4Q28 42.85 24 42.85ZM24 24Zm0 16.65q6.85 0 11.75-4.875T40.65 24q0-6.85-4.9-11.75T24 7.35q-6.9 0-11.775 4.9T7.35 24q0 6.9 4.875 11.775T24 40.65Z\"></svg>";

/***/ }),

/***/ "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><path d=\"M21.05 29 16 23.9q-.35-.3-.825-.3t-.825.35q-.4.35-.4.85t.4.8l5.75 5.75q.4.45.975.45t.975-.45l11.6-11.6q.3-.3.275-.775-.025-.475-.325-.825-.35-.35-.85-.35t-.85.35ZM24 42.85q-3.95 0-7.4-1.45t-6-4q-2.55-2.55-4-6-1.45-3.45-1.45-7.4t1.45-7.4q1.45-3.45 4-6t6-4q3.45-1.45 7.4-1.45t7.4 1.45q3.45 1.45 6 4t4 6q1.45 3.45 1.45 7.4t-1.45 7.4q-1.45 3.45-4 6t-6 4q-3.45 1.45-7.4 1.45ZM24 24Zm0 16.65q7.05 0 11.85-4.8T40.65 24q0-7.05-4.8-11.85T24 7.35q-7.05 0-11.85 4.8T7.35 24q0 7.05 4.8 11.85T24 40.65Z\"></path></svg>":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M21.05 29 16 23.9q-.35-.3-.825-.3t-.825.35q-.4.35-.4.85t.4.8l5.75 5.75q.4.45.975.45t.975-.45l11.6-11.6q.3-.3.275-.775-.025-.475-.325-.825-.35-.35-.85-.35t-.85.35ZM24 42.85q-3.95 0-7.4-1.45t-6-4q-2.55-2.55-4-6-1.45-3.45-1.45-7.4t1.45-7.4q1.45-3.45 4-6t6-4q3.45-1.45 7.4-1.45t7.4 1.45q3.45 1.45 6 4t4 6q1.45 3.45 1.45 7.4t-1.45 7.4q-1.45 3.45-4 6t-6 4q-3.45 1.45-7.4 1.45ZM24 24Zm0 16.65q7.05 0 11.85-4.8T40.65 24q0-7.05-4.8-11.85T24 7.35q-7.05 0-11.85 4.8T7.35 24q0 7.05 4.8 11.85T24 40.65Z"></path></svg> ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><path d=\"M21.05 29 16 23.9q-.35-.3-.825-.3t-.825.35q-.4.35-.4.85t.4.8l5.75 5.75q.4.45.975.45t.975-.45l11.6-11.6q.3-.3.275-.775-.025-.475-.325-.825-.35-.35-.85-.35t-.85.35ZM24 42.85q-3.95 0-7.4-1.45t-6-4q-2.55-2.55-4-6-1.45-3.45-1.45-7.4t1.45-7.4q1.45-3.45 4-6t6-4q3.45-1.45 7.4-1.45t7.4 1.45q3.45 1.45 6 4t4 6q1.45 3.45 1.45 7.4t-1.45 7.4q-1.45 3.45-4 6t-6 4q-3.45 1.45-7.4 1.45ZM24 24Zm0 16.65q7.05 0 11.85-4.8T40.65 24q0-7.05-4.8-11.85T24 7.35q-7.05 0-11.85 4.8T7.35 24q0 7.05 4.8 11.85T24 40.65Z\"></path></svg>";

/***/ }),

/***/ "./src/asset/font/MaronRose.ttf":
/*!**************************************!*\
  !*** ./src/asset/font/MaronRose.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/32b29094854bf8859e1f.ttf";

/***/ }),

/***/ "./src/asset/icons.sprite.svg":
/*!************************************!*\
  !*** ./src/asset/icons.sprite.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/37557088592730ef26a5.svg";

/***/ }),

/***/ "./src/asset/img-disp/aptz-channa-chat.webp":
/*!**************************************************!*\
  !*** ./src/asset/img-disp/aptz-channa-chat.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/c8479d18ebbff017043d.webp";

/***/ }),

/***/ "./src/asset/img-disp/aptz-chicken-pakora.webp":
/*!*****************************************************!*\
  !*** ./src/asset/img-disp/aptz-chicken-pakora.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/247b751d49ad3d6e97c4.webp";

/***/ }),

/***/ "./src/asset/img-disp/aptz-dosa.webp":
/*!*******************************************!*\
  !*** ./src/asset/img-disp/aptz-dosa.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/089ea5b1701988f15ab2.webp";

/***/ }),

/***/ "./src/asset/img-disp/aptz-eggplant-pakora.webp":
/*!******************************************************!*\
  !*** ./src/asset/img-disp/aptz-eggplant-pakora.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/3cf16a279988db953eb0.webp";

/***/ }),

/***/ "./src/asset/img-disp/aptz-lamb-samosa.webp":
/*!**************************************************!*\
  !*** ./src/asset/img-disp/aptz-lamb-samosa.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/ef95f1dfd04f96b13d38.webp";

/***/ }),

/***/ "./src/asset/img-disp/aptz-masala-dosa.webp":
/*!**************************************************!*\
  !*** ./src/asset/img-disp/aptz-masala-dosa.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/c6f6ccb1aade4b1575db.webp";

/***/ }),

/***/ "./src/asset/img-disp/aptz-rawa-dosa.webp":
/*!************************************************!*\
  !*** ./src/asset/img-disp/aptz-rawa-dosa.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/96152152487079397cbc.webp";

/***/ }),

/***/ "./src/asset/img-disp/aptz-samosa-chaat.webp":
/*!***************************************************!*\
  !*** ./src/asset/img-disp/aptz-samosa-chaat.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/e4c5de1534ffecff72b4.webp";

/***/ }),

/***/ "./src/asset/img-disp/aptz-uthapam.webp":
/*!**********************************************!*\
  !*** ./src/asset/img-disp/aptz-uthapam.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/da6ae228e4cc965f91a5.webp";

/***/ }),

/***/ "./src/asset/img-disp/aptz-veg-samosa.webp":
/*!*************************************************!*\
  !*** ./src/asset/img-disp/aptz-veg-samosa.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/4b9cbf2196453e0fc151.webp";

/***/ }),

/***/ "./src/asset/img-disp/biriyani_1.webp":
/*!********************************************!*\
  !*** ./src/asset/img-disp/biriyani_1.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/a65d18a1b35c0b5f159f.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-bev-indian-coffee.webp":
/*!********************************************************!*\
  !*** ./src/asset/img-disp/comp-bev-indian-coffee.webp ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/52f1f762d258ee224b45.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-bev-lassi.webp":
/*!************************************************!*\
  !*** ./src/asset/img-disp/comp-bev-lassi.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/a30c4164bf067f23e7ec.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-bev-mango-lassi.webp":
/*!******************************************************!*\
  !*** ./src/asset/img-disp/comp-bev-mango-lassi.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/e5584a5cc617d5f54513.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-bev-masala-chai.webp":
/*!******************************************************!*\
  !*** ./src/asset/img-disp/comp-bev-masala-chai.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/1915d14b880ad0812230.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-des-gajar-halwa.webp":
/*!******************************************************!*\
  !*** ./src/asset/img-disp/comp-des-gajar-halwa.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/e1ae04d1b0fa5a62c887.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-des-gulab-jamun.webp":
/*!******************************************************!*\
  !*** ./src/asset/img-disp/comp-des-gulab-jamun.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/3c01696d2a1afece254c.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-des-kheer.webp":
/*!************************************************!*\
  !*** ./src/asset/img-disp/comp-des-kheer.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/9bee8243419f4a16534b.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-des-mango-kulfi.webp":
/*!******************************************************!*\
  !*** ./src/asset/img-disp/comp-des-mango-kulfi.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/a9cc457a674dca40976e.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-des-mango-pudding.webp":
/*!********************************************************!*\
  !*** ./src/asset/img-disp/comp-des-mango-pudding.webp ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/ffb473d561c23ef45cb1.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-des-pistachio-kulfi.webp":
/*!**********************************************************!*\
  !*** ./src/asset/img-disp/comp-des-pistachio-kulfi.webp ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/78260029681e719e5af9.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-des-saffron-kulfi.webp":
/*!********************************************************!*\
  !*** ./src/asset/img-disp/comp-des-saffron-kulfi.webp ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/2494f1f521c660d86883.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-sb-butter-naan.webp":
/*!*****************************************************!*\
  !*** ./src/asset/img-disp/comp-sb-butter-naan.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/a066927b9b6731a37463.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-sb-cheese-naan.webp":
/*!*****************************************************!*\
  !*** ./src/asset/img-disp/comp-sb-cheese-naan.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/218b3da8fdbe6ec0eff1.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-sb-cucumber-pachadi.webp":
/*!**********************************************************!*\
  !*** ./src/asset/img-disp/comp-sb-cucumber-pachadi.webp ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/42ed3252973cf17ff367.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-sb-garlic-naan.webp":
/*!*****************************************************!*\
  !*** ./src/asset/img-disp/comp-sb-garlic-naan.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/8c3a948c8fd35850e5b9.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-sb-keema-naan.webp":
/*!****************************************************!*\
  !*** ./src/asset/img-disp/comp-sb-keema-naan.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/0817024168e383456c9c.webp";

/***/ }),

/***/ "./src/asset/img-disp/comp-sb-onion-kulcha.webp":
/*!******************************************************!*\
  !*** ./src/asset/img-disp/comp-sb-onion-kulcha.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/b21899e9dea162afb4d7.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-beef-broccoli.webp":
/*!****************************************************!*\
  !*** ./src/asset/img-disp/dish-beef-broccoli.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/72a9963ba1de2793ef68.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-beef-curry.webp":
/*!*************************************************!*\
  !*** ./src/asset/img-disp/dish-beef-curry.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/feea9163acc00a9b8bc8.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-beef-shahi-korma.webp":
/*!*******************************************************!*\
  !*** ./src/asset/img-disp/dish-beef-shahi-korma.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/586e56c74c8a154a2fc4.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-beef-vindaloo.webp":
/*!****************************************************!*\
  !*** ./src/asset/img-disp/dish-beef-vindaloo.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/7748380cdb92080debbb.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-lamb-achar.webp":
/*!*************************************************!*\
  !*** ./src/asset/img-disp/dish-lamb-achar.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/f8865f05a2e21f735ff5.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-lamb-broccoli.webp":
/*!****************************************************!*\
  !*** ./src/asset/img-disp/dish-lamb-broccoli.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/7e006dd6703b7ad79243.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-lamb-curry.webp":
/*!*************************************************!*\
  !*** ./src/asset/img-disp/dish-lamb-curry.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/cfdd6e39355c16e11462.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-lamb-dhasnk.webp":
/*!**************************************************!*\
  !*** ./src/asset/img-disp/dish-lamb-dhasnk.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/fcb9b9c9e20c0876bf7f.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-lamb-kasmiri.webp":
/*!***************************************************!*\
  !*** ./src/asset/img-disp/dish-lamb-kasmiri.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/9782e477e3fe9b6b15ae.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-sea-shrimp-coconut-curry.webp":
/*!***************************************************************!*\
  !*** ./src/asset/img-disp/dish-sea-shrimp-coconut-curry.webp ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/f85a05e641139794c89e.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-sea-shrimp-curry.webp":
/*!*******************************************************!*\
  !*** ./src/asset/img-disp/dish-sea-shrimp-curry.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/594287c5be796b9afc5c.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-sea-shrimp-vindaloo.webp":
/*!**********************************************************!*\
  !*** ./src/asset/img-disp/dish-sea-shrimp-vindaloo.webp ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/c5da1681e16f5e55da39.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-sea-tikka-masala.webp":
/*!*******************************************************!*\
  !*** ./src/asset/img-disp/dish-sea-tikka-masala.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/a40cab48faafeeb46113.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-banana-chips.webp":
/*!*******************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-banana-chips.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/99a29c9e733cff07f790.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-bindhi-masala.webp":
/*!********************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-bindhi-masala.webp ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/13913f603711a3f5325f.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-chole-batura.webp":
/*!*******************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-chole-batura.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/7ec03a6d0536ea94a004.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-cury.webp":
/*!***********************************************!*\
  !*** ./src/asset/img-disp/dish-veg-cury.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/bc6d0c9c379a8817182e.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-dal-makhani.webp":
/*!******************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-dal-makhani.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/f1bea675699c5e4f0bea.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-dal-tadka.webp":
/*!****************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-dal-tadka.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/43a2995af27c0997c912.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-eggplant-curry.webp":
/*!*********************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-eggplant-curry.webp ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/55f43bc03fadb18298e6.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-paav-bhaji.webp":
/*!*****************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-paav-bhaji.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/5b6cefc91c59c31afb8c.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-palak-paneer.webp":
/*!*******************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-palak-paneer.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/e60e65ed6bc0ffc5f13f.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-puzhukku.webp":
/*!***************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-puzhukku.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/8ef0a423acbe5a543207.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-saag-aloo-curry.webp":
/*!**********************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-saag-aloo-curry.webp ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/4ac84253bd6d8f04a0b7.webp";

/***/ }),

/***/ "./src/asset/img-disp/dish-veg-saag-paneer-curry.webp":
/*!************************************************************!*\
  !*** ./src/asset/img-disp/dish-veg-saag-paneer-curry.webp ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/08d31238091dd0695105.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-biriyani-chicken.webp":
/*!*****************************************************!*\
  !*** ./src/asset/img-disp/mc-biriyani-chicken.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/121b0c8d59a2ecc770f9.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-biriyani-eggplant.webp":
/*!******************************************************!*\
  !*** ./src/asset/img-disp/mc-biriyani-eggplant.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/d92f5c503085b17907e8.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-biriyani-lamb.webp":
/*!**************************************************!*\
  !*** ./src/asset/img-disp/mc-biriyani-lamb.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/26d3196c5eae16fb0e8d.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-biriyani-paneer.webp":
/*!****************************************************!*\
  !*** ./src/asset/img-disp/mc-biriyani-paneer.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/8e6540b2af640f366eef.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-biriyani-scallop.webp":
/*!*****************************************************!*\
  !*** ./src/asset/img-disp/mc-biriyani-scallop.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/5683f8cbda2768727375.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-biriyani-veg.webp":
/*!*************************************************!*\
  !*** ./src/asset/img-disp/mc-biriyani-veg.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/265573640e447c4de977.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-tandoori-beef.webp":
/*!**************************************************!*\
  !*** ./src/asset/img-disp/mc-tandoori-beef.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/24cfa0901221dae736a4.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-tandoori-chicken.webp":
/*!*****************************************************!*\
  !*** ./src/asset/img-disp/mc-tandoori-chicken.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/cdf1babd96e8458ae795.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-tandoori-fish.webp":
/*!**************************************************!*\
  !*** ./src/asset/img-disp/mc-tandoori-fish.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/cbb557e6179cbd96b49e.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-tandoori-lamb.webp":
/*!**************************************************!*\
  !*** ./src/asset/img-disp/mc-tandoori-lamb.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/4f9a1ced4610c42aad7e.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-tandoori-mix-grill.webp":
/*!*******************************************************!*\
  !*** ./src/asset/img-disp/mc-tandoori-mix-grill.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/a06155fc20c98b02022d.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-tandoori-quail.webp":
/*!***************************************************!*\
  !*** ./src/asset/img-disp/mc-tandoori-quail.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/0c41f9059aab67a2362e.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-tandoori-shrimp.webp":
/*!****************************************************!*\
  !*** ./src/asset/img-disp/mc-tandoori-shrimp.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/be3e24fa707e4f1266bf.webp";

/***/ }),

/***/ "./src/asset/img-disp/mc-tandoori-veg.webp":
/*!*************************************************!*\
  !*** ./src/asset/img-disp/mc-tandoori-veg.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/display/e1dafba798522ba2a592.webp";

/***/ }),

/***/ "./src/asset/img/back.svg":
/*!********************************!*\
  !*** ./src/asset/img/back.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/78ee66c8a243ad035c4a.svg";

/***/ }),

/***/ "./src/asset/img/logo.svg":
/*!********************************!*\
  !*** ./src/asset/img/logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/295da6982057d26bb18c.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_005restaurant_page"] = self["webpackChunk_005restaurant_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-00626d"], () => (__webpack_require__("./src/scripts/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map