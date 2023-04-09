/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n}\n\n:root.dark {\n  --color-primary-bg: #212121;\n  --color-secondary-bg: #000000;\n  --color-primary-fg: #B0BEC5;\n  --color-primary-text: #eeffff;\n  --color-secondary-text: #eeffff;\n  --icon-filter: invert(100%);\n  --color-inactive: #474747;\n  --color-active: #80cbc4;\n  --color-scroll-active: var(--color-primary-fg);\n  --color-scroll-inactive: rgba(176, 190, 197, 0.7);\n  --color-shadow: rgb(54, 54, 54);\n}\n\n:root.light {\n  --color-primary-bg: #FAFAFA;\n  --color-secondary-bg: #B0BEC5;\n  --color-primary-fg: #546E7A;\n  --color-primary-text: #272727;\n  --color-secondary-text: #000000;\n  --icon-filter: invert(0%);\n  --color-inactive: #D2D4D5;\n  --color-active: #39ADB5;\n  --color-scroll-active: var(--color-primary-fg);\n  --color-scroll-inactive: rgba(84, 110, 122, 0.7);\n  --color-shadow: rgb(184, 184, 184);\n}\n\nhtml, body {\n  width: 100%;\n  min-height: 100vh;\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  background-color: var(--color-primary-bg);\n  color: var(--color-primary-text);\n}\n\nfooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  border-top: 0.1rem solid var(--color-primary-fg);\n  background-color: var(--color-secondary-bg);\n  color: var(--color-secondary-text);\n  justify-content: center;\n  align-self: center;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 18px;\n  display: flex;\n}\n\na { \n  color: inherit; \n}\n\n/* Scrollbar */\n\n/* width */\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0);\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--color-scroll-active);\n  border-radius: 5rem;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-scroll-inactive);\n  border-radius: 5rem;\n}\n\n/* Switch */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--color-inactive);\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: var(--color-active);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px var(--color-active);;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* Icon */\n\n.icon {\n  width: 2rem;\n}\n\n.header-button {\n  border: none;\n  background-color: var(--color-primary-bg);\n}\n\n.header-button       > p {\n  font-weight: bold;\n  color: var(--color-primary-text);\n}\n\n.header-button       > img  {\n  filter: var(--icon-filter) drop-shadow(1px 2px 0 var(--color-shadow));\n}\n\n.header-button:enabled       > p {\n  filter: brightness(90%);\n}\n\n.header-button:hover:enabled       > img  {\n  filter: var(--icon-filter) brightness(90%) drop-shadow(1px 2px 0 var(--color-shadow));\n}\n\n.header-button:active:enabled       > p {\n  transform: translateY(4px) translateX(2px);\n  filter: brightness(90%);\n}\n\n.header-button:active:enabled       > img {\n  transform: translateY(4px) translateX(2px);\n  filter: var(--icon-filter) brightness(90%) drop-shadow(1px 1px 0 var(--color-shadow));\n}\n\n.header-bar-button {\n  width: 155px;\n}\n\n.header-bar-button > p {\n  margin: 0.3rem;\n  font-weight: bold;\n}\n\n/* Overlay */\n\n#overlay {\n  position: fixed; /* Sit on top of the page content */\n  width: 100%; /* Full width (cover the whole page) */\n  height: 100%; /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.1); /* Black background with opacity */\n  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer; /* Add a pointer on hover */\n}\n\n.overlay-popup {\n  margin-top: 4.5rem;\n  margin-bottom: 4.5rem;\n}\n\n/* Form */\n\n.manage-div-play {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.form-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.form-icon > p {\n  margin: 0;\n}\n\n.manage-form-players {\n  margin-top: 2rem;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  grid-template-rows: repeat(3, 0.5fr);\n  grid-template-columns: 0.5fr 0fr;\n  gap: 0.5rem;\n  text-align: left;\n}\n\n/* Header */\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1rem;\n}\n\nheader > :first-child {\n  margin-right: auto;\n}\n\nheader > :last-child {\n  margin-left: auto;\n}\n\n/* main content */\n\nmain {\n  padding-bottom: 2rem;\n  padding-right: 2rem;\n}\n\n/* Grid template for placement/game box */\n\n.manage-form-placeboat,\n.div-round-controller {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.div-legend-placeboat {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n.div-legend-placeboat > p,\n.btn-start-round > p {\n  margin: 0rem;\n}\n\n.player-name-round,\n.p-winner {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.player-name {\n  font-weight: 500;\n}\n\n.div-gameboard-controller {\n  margin-bottom: 3rem;\n}\n\n.manage-div-placeboat,\n.div-gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, auto);\n  grid-template-rows: repeat(10, auto);\n  justify-content: center;\n  align-items: center;\n  gap: 0rem;\n}\n\n.box {\n  text-align: center;\n  border: 1px solid #000;\n  height: 3rem;\n  width: 3rem;\n  color: red;\n}\n\n.box.valid,\n.box.set.valid {\n  background-color: green;\n}\n\n.box.invalid,\n.box.set.invalid {\n  background-color: red;\n}\n\n.box.set {\n  background-color: gray;\n}\n\n.box.water {\n  background-color: #39ADB5;\n}\n\n.manage-winner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n/* Media query */\n\n@media only screen and (min-width: 1080px) {\n  .div-gameboard-controller {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');\n\n:root {\n}\n\n:root.dark {\n  --color-primary-bg: #212121;\n  --color-secondary-bg: #000000;\n  --color-primary-fg: #B0BEC5;\n  --color-primary-text: #eeffff;\n  --color-secondary-text: #eeffff;\n  --icon-filter: invert(100%);\n  --color-inactive: #474747;\n  --color-active: #80cbc4;\n  --color-scroll-active: var(--color-primary-fg);\n  --color-scroll-inactive: rgba(176, 190, 197, 0.7);\n  --color-shadow: rgb(54, 54, 54);\n}\n\n:root.light {\n  --color-primary-bg: #FAFAFA;\n  --color-secondary-bg: #B0BEC5;\n  --color-primary-fg: #546E7A;\n  --color-primary-text: #272727;\n  --color-secondary-text: #000000;\n  --icon-filter: invert(0%);\n  --color-inactive: #D2D4D5;\n  --color-active: #39ADB5;\n  --color-scroll-active: var(--color-primary-fg);\n  --color-scroll-inactive: rgba(84, 110, 122, 0.7);\n  --color-shadow: rgb(184, 184, 184);\n}\n\nhtml, body {\n  width: 100%;\n  min-height: 100vh;\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  background-color: var(--color-primary-bg);\n  color: var(--color-primary-text);\n}\n\nfooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  border-top: 0.1rem solid var(--color-primary-fg);\n  background-color: var(--color-secondary-bg);\n  color: var(--color-secondary-text);\n  justify-content: center;\n  align-self: center;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 18px;\n  display: flex;\n}\n\na { \n  color: inherit; \n}\n\n/* Scrollbar */\n\n/* width */\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0);\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--color-scroll-active);\n  border-radius: 5rem;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-scroll-inactive);\n  border-radius: 5rem;\n}\n\n/* Switch */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--color-inactive);\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: var(--color-active);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px var(--color-active);;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* Icon */\n\n.icon {\n  width: 2rem;\n}\n\n.header-button {\n  border: none;\n  background-color: var(--color-primary-bg);\n}\n\n.header-button       > p {\n  font-weight: bold;\n  color: var(--color-primary-text);\n}\n\n.header-button       > img  {\n  filter: var(--icon-filter) drop-shadow(1px 2px 0 var(--color-shadow));\n}\n\n.header-button:enabled       > p {\n  filter: brightness(90%);\n}\n\n.header-button:hover:enabled       > img  {\n  filter: var(--icon-filter) brightness(90%) drop-shadow(1px 2px 0 var(--color-shadow));\n}\n\n.header-button:active:enabled       > p {\n  transform: translateY(4px) translateX(2px);\n  filter: brightness(90%);\n}\n\n.header-button:active:enabled       > img {\n  transform: translateY(4px) translateX(2px);\n  filter: var(--icon-filter) brightness(90%) drop-shadow(1px 1px 0 var(--color-shadow));\n}\n\n.header-bar-button {\n  width: 155px;\n}\n\n.header-bar-button > p {\n  margin: 0.3rem;\n  font-weight: bold;\n}\n\n/* Overlay */\n\n#overlay {\n  position: fixed; /* Sit on top of the page content */\n  width: 100%; /* Full width (cover the whole page) */\n  height: 100%; /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.1); /* Black background with opacity */\n  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer; /* Add a pointer on hover */\n}\n\n.overlay-popup {\n  margin-top: 4.5rem;\n  margin-bottom: 4.5rem;\n}\n\n/* Form */\n\n.manage-div-play {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.form-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.form-icon > p {\n  margin: 0;\n}\n\n.manage-form-players {\n  margin-top: 2rem;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  grid-template-rows: repeat(3, 0.5fr);\n  grid-template-columns: 0.5fr 0fr;\n  gap: 0.5rem;\n  text-align: left;\n}\n\n/* Header */\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1rem;\n}\n\nheader > :first-child {\n  margin-right: auto;\n}\n\nheader > :last-child {\n  margin-left: auto;\n}\n\n/* main content */\n\nmain {\n  padding-bottom: 2rem;\n  padding-right: 2rem;\n}\n\n/* Grid template for placement/game box */\n\n.manage-form-placeboat,\n.div-round-controller {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.div-legend-placeboat {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n.div-legend-placeboat > p,\n.btn-start-round > p {\n  margin: 0rem;\n}\n\n.player-name-round,\n.p-winner {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.player-name {\n  font-weight: 500;\n}\n\n.div-gameboard-controller {\n  margin-bottom: 3rem;\n}\n\n.manage-div-placeboat,\n.div-gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, auto);\n  grid-template-rows: repeat(10, auto);\n  justify-content: center;\n  align-items: center;\n  gap: 0rem;\n}\n\n.box {\n  text-align: center;\n  border: 1px solid #000;\n  height: 3rem;\n  width: 3rem;\n  color: red;\n}\n\n.box.valid,\n.box.set.valid {\n  background-color: green;\n}\n\n.box.invalid,\n.box.set.invalid {\n  background-color: red;\n}\n\n.box.set {\n  background-color: gray;\n}\n\n.box.water {\n  background-color: #39ADB5;\n}\n\n.manage-winner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n/* Media query */\n\n@media only screen and (min-width: 1080px) {\n  .div-gameboard-controller {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller/gameboard-controller.js":
/*!************************************************!*\
  !*** ./src/controller/gameboard-controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameboardController)
/* harmony export */ });
/* harmony import */ var Modules_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/ship */ "./src/modules/ship.js");
/* harmony import */ var Modules_coordinate_tracker_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/coordinate-tracker-set */ "./src/modules/coordinate-tracker-set.js");



const BOARD_SIZE = 10;

class GameboardController {
  constructor(userGameboard = false) {
    this.boardSize = BOARD_SIZE;
    this.gameboard = new Array(BOARD_SIZE);
    for (let i = 0; i < BOARD_SIZE; i += 1) this.gameboard[i] = new Array(BOARD_SIZE);
    this.userGameboard = userGameboard || false;
    this.trackAttacks = new Modules_coordinate_tracker_set__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.trackAdjacents = new Modules_coordinate_tracker_set__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.shipMap = new Map();
  }

  static #isValidCoord(x, y) {
    if (Number.isNaN(+x) || Number.isNaN(+y)) return false;
    if ((+x < 0) || (+x >= BOARD_SIZE) || 
        (+y < 0) || (+y >= BOARD_SIZE)) return false;
    return true;
  }

  #checkAdjacent(x, y, shipLength, vertical) {
    let isAdjacent = false;
    if (vertical) {
      for (let i = x; i < (x + shipLength) && !isAdjacent; i += 1) {
        if (this.trackAdjacents.has({x: i, y})) isAdjacent = true;
      }
    } else {
      for (let i = y; i < (y + shipLength) && !isAdjacent; i += 1) {
        if (this.trackAdjacents.has({x, y: i})) isAdjacent = true;
      }
    }
    return isAdjacent;
  }

  isUserGameboard() { return this.userGameboard; }

  getShipCoordinates() {
    const shipCoordinates = [];
    this.shipMap.forEach(v => shipCoordinates.push(v));
    return shipCoordinates;
  }

  get BoardSize() { return this.boardSize }

  checkPlace(shipLength, x, y, vertical = false) {
    if (!GameboardController.#isValidCoord(x, y) ||
       (vertical  && (+x + shipLength > BOARD_SIZE)) ||
       (!vertical && (+y + shipLength > BOARD_SIZE))) return false;
    if (this.#checkAdjacent(x, y, shipLength, vertical)) return false;
    return true;
  }

  #addTrackAdjacent(x, y, vertical) {
    if (vertical) {
      this.trackAdjacents.add({x, y});
      this.trackAdjacents.add({x, y: y - 1});
      this.trackAdjacents.add({x, y: y + 1});
    } else {
      this.trackAdjacents.add({x, y});
      this.trackAdjacents.add({x: x - 1, y});
      this.trackAdjacents.add({x: x + 1, y});

    }
  }

  place(ship, x, y, vertical = false) {
    const coordinates = [];
    if (!(ship instanceof Modules_ship__WEBPACK_IMPORTED_MODULE_0__["default"])) return false;
    if (!this.checkPlace(ship.length, +x, +y, vertical)) return false;

    if (vertical) {
      this.#addTrackAdjacent(+x - 1, +y, vertical);
      for (let i = +x; i < (+x + ship.length); i += 1) { 
        coordinates.push({ x: i, y: +y });
        this.#addTrackAdjacent(i, +y, vertical);
        this.gameboard[i][+y] = ship;
      }
      this.#addTrackAdjacent(+x + ship.length, +y, vertical);
    } else {
      this.#addTrackAdjacent(+x, +y - 1, vertical);
      for (let i = +y; i < (+y + ship.length); i += 1) {
        coordinates.push({ x: +x, y: i });
        this.#addTrackAdjacent(+x, i, vertical);
        this.gameboard[+x][i] = ship;
      }
      this.#addTrackAdjacent(+x, +y + ship.length, vertical);
    }
    
    // Add ship into ship container
    this.shipMap.set(ship, coordinates);

    return true;
  }

  receiveAttack(x, y) {
    if (!GameboardController.#isValidCoord(x, y)) return { exit: false };
    if (this.trackAttacks.has({x: +x, y: +y})) return { exit: false };
    this.trackAttacks.add({x: +x, y: +y});
    if (this.gameboard[+x][+y] instanceof Modules_ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      this.gameboard[+x][+y].hit();
      if (this.gameboard[+x][+y].isSunk()) {
        return {
          exit: true,
          water: false,
          sunk: true,
          coordinates: this.shipMap.get(this.gameboard[+x][+y]),
          attack: {
            x,
            y
          }
        }; 
      }
      return {
        exit: true,
        water: false,
        sunk: false,
        attack: {
          x,
          y
        }
      };
    }
    return {
      exit: true,
      water: true,
      attack: {
        x,
        y
      }
    };
  }
};


/***/ }),

/***/ "./src/controller/player-controller.js":
/*!*********************************************!*\
  !*** ./src/controller/player-controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var Modules_player_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/player-type */ "./src/modules/player-type.js");
/* harmony import */ var Modules_bot_difficulty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/bot-difficulty */ "./src/modules/bot-difficulty.js");
/* harmony import */ var Modules_coordinate_tracker_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Modules/coordinate-tracker-set */ "./src/modules/coordinate-tracker-set.js");




class Player {
  constructor(name, gameboard, type = Modules_player_type__WEBPACK_IMPORTED_MODULE_0__["default"].human, difficulty = undefined) {
    this.name = name;
    if ((type !== Modules_player_type__WEBPACK_IMPORTED_MODULE_0__["default"].human) && (type !== Modules_player_type__WEBPACK_IMPORTED_MODULE_0__["default"].ai)) throw new 'Invalid input';
    if (!gameboard) throw new 'Invalid input';
    this.gameboard = gameboard;
    this.type = type;
    if (!difficulty && this.type === Modules_player_type__WEBPACK_IMPORTED_MODULE_0__["default"].ai) this.difficulty = Modules_bot_difficulty__WEBPACK_IMPORTED_MODULE_1__["default"].easy;
    else this.difficulty = difficulty;
    this.stateAI = {
      lastPosition: undefined,
      isHorizontal: undefined,
      trackAttacks: new Modules_coordinate_tracker_set__WEBPACK_IMPORTED_MODULE_2__["default"](),
      trackPositions: []
    };
  }

  get Name() { return this.name }
  
  get GameBoard() { return this.gameboard }

  playRound(opponentGameboard, x = undefined, y = undefined) {
    if ((this.type === Modules_player_type__WEBPACK_IMPORTED_MODULE_0__["default"].human) && ((x === undefined) || (y === undefined))) 
      throw new 'Invalid input';
    
    if (this.type === Modules_player_type__WEBPACK_IMPORTED_MODULE_0__["default"].human) {
      return opponentGameboard.receiveAttack(x, y);
    } 
    
    return this.#playRoundAI(opponentGameboard);
  }

  #playRoundAI(opponentGameboard) {
    const {lastPosition} = this.stateAI;
    const attacks = [];
    let reply;
    let random = false;
    let position;

    if (this.difficulty === Modules_bot_difficulty__WEBPACK_IMPORTED_MODULE_1__["default"].medium) {
      if (lastPosition === undefined) {
        random = true;
      } else {
        if (!this.stateAI.trackAttacks.has({ x: lastPosition.x, y: lastPosition.y }))
          attacks.push({ x: lastPosition.x, y: lastPosition.y });

        if (this.stateAI.isHorizontal === undefined || !this.stateAI.isHorizontal) {
          if (!this.stateAI.trackAttacks.has({ x: lastPosition.x - 1, y: lastPosition.y }))
            attacks.push({ x: lastPosition.x - 1, y: lastPosition.y });
          if (!this.stateAI.trackAttacks.has({ x: lastPosition.x + 1, y: lastPosition.y }))
            attacks.push({ x: lastPosition.x + 1, y: lastPosition.y });
        } 

        if (this.stateAI.isHorizontal === undefined || this.stateAI.isHorizontal) {
          if (!this.stateAI.trackAttacks.has({ x: lastPosition.x, y: lastPosition.y - 1 }))
            attacks.push({ x: lastPosition.x, y: lastPosition.y - 1 });
          if (!this.stateAI.trackAttacks.has({ x: lastPosition.x, y: lastPosition.y + 1 }))
            attacks.push({ x: lastPosition.x, y: lastPosition.y + 1 });
        } 

        if (attacks.length === 0) random = true;
      }
    }

    do {
      if (this.difficulty === Modules_bot_difficulty__WEBPACK_IMPORTED_MODULE_1__["default"].easy || random) {
        position = { 
          x: Math.floor(Math.random() * opponentGameboard.boardSize),
          y: Math.floor(Math.random() * opponentGameboard.boardSize)
        };
      } else {
        // use `stateAI` to evaluate BOT difficulty (remember state)
        position = attacks.shift();
      }
      reply = opponentGameboard.receiveAttack(position.x, position.y);
      this.stateAI.trackAttacks.add(position);
    } while (!reply.exit);

    if (reply.sunk) {
      this.stateAI.lastPosition = undefined;
      this.stateAI.isHorizontal = undefined;
      this.stateAI.trackPositions = [];
    } else if (!reply.water) {
      this.stateAI.isHorizontal = this.stateAI.lastPosition !== undefined ? (this.stateAI.lastPosition.x - position.x) === 0 
        : false;
      this.stateAI.lastPosition = position;
      for (let i = 0; i < attacks.length; i += 1) {
        const attack = attacks[i];
        if (this.stateAI.isHorizontal) {
          if ((attack.x - position.x) === 0) this.stateAI.trackPositions.push(attack);
        } else if ((attack.y - position.y) === 0) this.stateAI.trackPositions.push(attack);
      };
    } else if (this.stateAI.trackPositions.length > 0) {
        // water
      this.stateAI.lastPosition = this.stateAI.trackPositions.shift();
    }

    return reply;
  }
};


/***/ }),

/***/ "./src/modules/bot-difficulty.js":
/*!***************************************!*\
  !*** ./src/modules/bot-difficulty.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const BotDifficulty = {
  medium: 'medium',
  easy: 'easy'
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BotDifficulty);

/***/ }),

/***/ "./src/modules/coordinate-tracker-set.js":
/*!***********************************************!*\
  !*** ./src/modules/coordinate-tracker-set.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoordinateTrackerSet)
/* harmony export */ });
class CoordinateTrackerSet extends Set {
  static #checkParameter(obj) {
    if (!(typeof(obj) === 'object')) throw new 'Invalid input'; 
    if (obj.x === undefined || obj.y === undefined) throw new 'Invalid input'; 
  }

  add(obj) {
    CoordinateTrackerSet.#checkParameter(obj);
    if (!this.has(obj)) super.add(obj);
  }

  delete(obj) {
    CoordinateTrackerSet.#checkParameter(obj);

    super.forEach((value) => {
      if ((value.x === obj.x) && (value.y === obj.y)) {
        super.delete(value);
      }
    });
  }

  has(obj) {
    let exit = false;
    CoordinateTrackerSet.#checkParameter(obj);
    if (super.has(obj)) return true;

    super.forEach((value) => {
      if (!exit && ((value.x === obj.x) && (value.y === obj.y))) exit = true;
    });

    return exit;
  }
}

/***/ }),

/***/ "./src/modules/player-type.js":
/*!************************************!*\
  !*** ./src/modules/player-type.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PlayerType = {
  human: 'human',
  ai: 'bot'
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerType);

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    if (Number.isNaN(+length)) throw new 'Invalid input';
    if (+length < 1 || +length > 5) throw new 'Invalid out-of-range';

    this.length = +length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits === this.length;
  }
};


/***/ }),

/***/ "./src/utilities/button-manager.js":
/*!*****************************************!*\
  !*** ./src/utilities/button-manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonManager)
/* harmony export */ });
/* harmony import */ var Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/dom-manager */ "./src/utilities/dom-manager.js");


class ButtonManager {
  static createButton(btnText = '', svgIconFileName = null, className = null, cbEvent = undefined) {
    const btn = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeClass('button', className || 'navButton');
    // Insert icon when exist
    if(svgIconFileName) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNodeImg(svgIconFileName, btnText, btn, 'icon');
    }
    // Add text when contains something
    if(btnText.length > 0) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNode('p', btn, null, null, btnText);
    }
    // Add button event
    btn.onclick = cbEvent;
    return btn;  
  }

  static editButtonText(btn, text = '') {
    const btnText = btn.querySelector('p');
    if(btnText) {
      /* Remove or edit text */
      if(text === '') {
        btnText.remove();
      } else {
        btnText.textContent = text;
      }
    } else if(text.length > 0) { /* Create node */
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNode('p', btn, null, null, text);
    }
  }

  static editButtonImage(btn, svgIconFileName = null) {
    const btnText    = btn.querySelector('p');
    const btnImgNode = btn.querySelector('.icon');
    if(btnImgNode) {
      if(!svgIconFileName) {
        btnImgNode.remove();
      } else {
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].updateNodeImg(svgIconFileName, btnImgNode);
      }
    } else if(svgIconFileName) { // Insert icon when exist
      const altText = btnText ? btnText.textContent : '';
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNodeImg(svgIconFileName, altText, btn, 'icon');
    }
  }

  static createImageButton(svgIconFileName, className = null, cbEvent = undefined) {
    return ButtonManager.createButton('', svgIconFileName, className, cbEvent)
  }

  static createTextButton(btnText, className = null, cbEvent = undefined) {
    return ButtonManager.createButton(btnText, null, className, cbEvent)
  }

  static createImageLinkButton(link, svgIconFileName) {
    const node = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeLink(link, null, null, null, 
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeImg(svgIconFileName, 'imageLink', 'icon-link')
    );
    return node;
  }
}


/***/ }),

/***/ "./src/utilities/dom-manager.js":
/*!**************************************!*\
  !*** ./src/utilities/dom-manager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomManager)
/* harmony export */ });

const imagePath = './images/';

class DomManager {
  // Returns true if it is a DOM element
  static #isElement(o) {
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : // DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
  }

  static createNode(type, className = null, id = null, content = null, children = null) {
    const elem = document.createElement(type);
    // Add class name or ID
    if(className) elem.className = className;
    if(id) elem.id = id;
    // Add text content
    if(content) elem.textContent = content;
    // Eventually add child or children
    DomManager.addNodeChild(elem, children);
    return elem;
  }

  static createNodeContent(type, content, className = null, id = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeClass(type, className, id = null, content = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeID(type, id, className = null, content = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeImg(imgFileName, alt, className = null, id = null, local = true) {
    const fileFullPath = local ? imagePath + imgFileName : imgFileName; // local path or url
    const node = DomManager.createNode('img', className, id, null, null);
    node.setAttribute('src', fileFullPath);
    node.setAttribute('alt', alt);
    return node;
  }

  static createNodeImgClass(imgFileName, alt, className, id = null, local = true) {
    return DomManager.createNodeImg(imgFileName, alt, className, id, local);
  }

  static createNodeImgID(imgFileName, alt, id, className = null, local = true) {
    return DomManager.createNodeImg(imgFileName, alt, className, id, local);
  }

  static createNodeLink(link, className = null, id = null, content = null, children = null) {
    const node = DomManager.createNode('a', className, id, content, children);
    node.setAttribute('href', link);
    node.setAttribute('target', '_blank');
    return node;
  }

  static addNodeChild(father, children) {
    if(children) {
      if(Array.isArray(children)) { // Contains more than one child in Array
        children.forEach(child => {
          father.appendChild(child);
        });
      } else if(DomManager.#isElement(children)) { // Contains just one child
        father.appendChild(children);
      }
    }
  }

  static createAddNode(type, father, className = null, id = null, content = null, children = null) {
    // Append the new node in father
    const node = DomManager.createNode(type, className, id, content, children);
    father.appendChild(node);
    return node;
  }

  static createAddNodeImg(imgFileName, alt, father, className = null, id = null, local = true) {
    // Append the new node in father
    const node = DomManager.createNodeImg(imgFileName, alt, className, id, local);
    father.appendChild(node);
    return node;
  }

  static updateNodeImgBySelector(imgFileName, father, selector, local = true) {
    const imgNode = father.querySelector(selector);
    const url = local ? imagePath + imgFileName : imgFileName;
    if(imgNode) imgNode.setAttribute('src', url);
  }

  static updateNodeImg(imgFileName, imgNode, local = true) {
    const url = local ? imagePath + imgFileName : imgFileName;
    if(imgNode) imgNode.setAttribute('src', url);
  }

  static removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  static isNodeHide(node) {
    return node.style.display === 'none';
  }

  static toggleDisplayByNode(node, nextDisplay = undefined) {
    if(node) {
      if(node.dataset.prevDisplay === undefined) {
        node.dataset.prevDisplay = nextDisplay || node.style.display;
      }
      const prevDisplay = node.style.display;
      node.style.display = (node.style.display !== 'none') ? 'none' 
                                                          : node.dataset.prevDisplay;
      node.dataset.prevDisplay = prevDisplay;
    }
  }

  static toggleDisplay(nodeName, nextDisplay = undefined) {
    const node = document.querySelector(nodeName);
    DomManager.toggleDisplayByNode(node, nextDisplay);
  }
}


/***/ }),

/***/ "./src/utilities/input-manager.js":
/*!****************************************!*\
  !*** ./src/utilities/input-manager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputManager)
/* harmony export */ });
/* harmony import */ var Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/dom-manager */ "./src/utilities/dom-manager.js");
/* harmony import */ var Utilities_button_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utilities/button-manager */ "./src/utilities/button-manager.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");




class InputManager {
  static createEditText(editTextID, placeHolderText, labelText = null, required = true) {
    const mLabel = labelText ? Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeContent('label', labelText) : null;
    const mInput = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeID('input', editTextID);
    mInput.setAttribute('type', 'text');
    mInput.setAttribute('placeholder', placeHolderText);
    mInput.required = required;
    /* Set label when node exists */
    if(mLabel) {
      if(required) {
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNode('span', mLabel, 'required', null, '*');
      }
      mLabel.htmlFor = editTextID;
      mInput.setAttribute('name', editTextID);
    }
    return { label: mLabel, input: mInput };
  }

  static createDate(dateID, labelText = null, startFromToday = true, required = true) {
    const mLabel = labelText ? Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeContent('label', labelText) : null;
    const mInput = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeID('input', dateID);
    mInput.setAttribute('type', 'date');
    mInput.required = required;
    /* Set minimum date */
    if(startFromToday) {
      mInput.setAttribute('min', (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), 'yyyy-MM-dd'));
    }
    /* Set label when node exists */
    if(mLabel) {
      mLabel.htmlFor = dateID;
      mInput.setAttribute('name', dateID);
    }
    return { label: mLabel, input: mInput };
  }

  static createCheckBox(checkBoxID, labelText = null, cbEvent = undefined, isChecked = false, required = false) {
    const mLabel = labelText ? Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeContent('label', labelText) : null;
    const mInput = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeID('input', checkBoxID);
    mInput.setAttribute('type', 'checkbox');
    mInput.required = required;
    mInput.checked = isChecked;
    /* Set label when node exists */
    if(mLabel) {
      mLabel.htmlFor = checkBoxID;
      mInput.setAttribute('name', checkBoxID);
    }
    /* Add cb event */
    if(cbEvent) {
      mInput.onclick = cbEvent;
    }
    return { label: mLabel, input: mInput };
  }

  static createButton(btnID, btnText = '', svgIconFileName = null, className = null, 
                              cbEvent = undefined, formItem = null, labelText = null, required = false) {
    const mLabel = labelText ? Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeContent('label', labelText) : null;
    const mInput = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_1__["default"].createButton(btnText, svgIconFileName, className, (!formItem ? cbEvent : undefined));
    mInput.setAttribute('type', (!formItem ? 'button' : 'submit'));
    mInput.required = required;
    /* Set onsubmit for submit button */
    if((formItem) && (cbEvent)) {
      formItem.onsubmit = cbEvent;
    }
    /* Set label when node exists */
    if(mLabel) {
      mLabel.htmlFor = btnID;
      mInput.setAttribute('name', btnID);
    }
    return { label: mLabel, input: mInput };
  }

  static createImageButton(btnID, svgIconFileName, className = null, cbEvent = undefined, 
                                    formItem = null, labelText = null, required = false) {
    return InputManager.createButton(btnID, '', svgIconFileName, className, cbEvent, formItem, labelText, required);
  }

  static createTextButton(btnID, btnText, className = null, cbEvent = undefined, 
                                  formItem = null, labelText = null, required = false) {
    return InputManager.createButton(btnID, btnText, null, className, cbEvent, formItem, labelText, required);
  }

  static createSwitchButton(switchID, isRoundSwitch = false, labelText = null, 
                                    cbEvent = undefined, isChecked = false, required = false) {
    const labelSwitch = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNode('label', 'switch');
    const checkBox = InputManager.createCheckBox(switchID, labelText, cbEvent, isChecked, required);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addNodeChild(labelSwitch, checkBox.input);      
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNode('span', labelSwitch, (isRoundSwitch ? 'slider round' : 'slider'));
    return { label: checkBox.label, input: labelSwitch, checkbox: checkBox.input };
  }

  static createRadio(radioID, value, labelText = null, cbEvent = undefined, isChecked = false, required = false) {
    const mLabel = labelText ? Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeContent('label', labelText) : null;
    const mInput = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeID('input', radioID);
    mInput.setAttribute('type', 'radio');
    mInput.setAttribute('value', value);
    mInput.required = required;
    mInput.checked = isChecked;
    /* Set label when node exists */
    if(mLabel) {
      mLabel.htmlFor = radioID;
      mInput.setAttribute('name', radioID);
    }
    /* Add cb event */
    if(cbEvent) {
      mInput.onclick = cbEvent;
    }
    return { label: mLabel, input: mInput };
  }

  static createRadioButton(radioID, value, labelText = null, cbEvent = undefined, isChecked = false, required = false) {
    const mLabel = labelText ? Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeContent('label', labelText) : null;
    const radioBtn = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNode('div', 'radio-btn');
    const radio = InputManager.createRadio(radioID, value, value, cbEvent, isChecked, required);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addNodeChild(radioBtn, radio.input);  
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addNodeChild(radioBtn, radio.label);  
    /* Set label when node exists */
    if(mLabel) {
      mLabel.htmlFor = radioID;
    }
    return { label: mLabel, input: radioBtn, radio: radio.input };
  }

  static createSelect(selectID, values, selectedValue = null, labelText = null, required = false) {
    const mLabel = labelText ? Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeContent('label', labelText) : null;
    const mInput = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeID('select', selectID);
    mInput.setAttribute('type', 'radio');
    values.forEach(v => {
      const option = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeContent('option', v);
      option.setAttribute('value', v);
      if(selectedValue && v === selectedValue) {
        option.setAttribute('selected', true);
      }
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addNodeChild(mInput, option);
    });
    mInput.required = required;
    mInput.disabled = !(values.length > 1);
    /* Set label when node exists */
    if(mLabel) {
      mLabel.htmlFor = selectID;
      mInput.setAttribute('name', selectID);
    }
    return { label: mLabel, input: mInput };
  }
}


/***/ }),

/***/ "./src/view/ui-controller.js":
/*!***********************************!*\
  !*** ./src/view/ui-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UiController),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var Svg_home_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Svg/home-outline.svg */ "./src/assets/images/svg/home-outline.svg");
/* harmony import */ var Svg_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Svg/github.svg */ "./src/assets/images/svg/github.svg");
/* harmony import */ var Svg_dark_theme_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Svg/dark-theme.svg */ "./src/assets/images/svg/dark-theme.svg");
/* harmony import */ var Svg_light_theme_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Svg/light-theme.svg */ "./src/assets/images/svg/light-theme.svg");
/* harmony import */ var Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Utilities/dom-manager */ "./src/utilities/dom-manager.js");
/* harmony import */ var Utilities_button_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Utilities/button-manager */ "./src/utilities/button-manager.js");
/* harmony import */ var View_ui_game_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! View/ui-game-controller */ "./src/view/ui-game-controller.js");









const root = document.documentElement;

const settings = { theme: 'dark' };

class UiController {
  constructor() {
    this.uiGameController = new View_ui_game_controller__WEBPACK_IMPORTED_MODULE_6__["default"]();
  }

  #doLoadHeader() {
    const header  = document.querySelector('header');
    
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_4__["default"].addNodeChild(header, Utilities_button_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createImageButton('home-outline.svg', 'header-button', () => {
      this.#doCreateHome();
    }));

    const btnToggleTheme = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createImageButton(`${settings.theme}-theme.svg`, 'header-button', () => {
      settings.theme = (settings.theme !== 'dark' ? 'dark' : 'light');
      Utilities_button_manager__WEBPACK_IMPORTED_MODULE_5__["default"].editButtonImage(btnToggleTheme, `${settings.theme}-theme.svg`);
      root.className = settings.theme;
    });

    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_4__["default"].addNodeChild(header, btnToggleTheme);
  }

  #doCreateHome() {
    this.uiGameController.doResetGame();
  }

  #doLoadOverlay() {
    const overlay = document.querySelector('#overlay');
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_4__["default"].createAddNode('div', overlay, 'overlay-popup');
    // Hide overlay
    this.uiGameController.doCreateGameOverlay();
    document.addEventListener('click', (e) => {
       if(e.target.id === 'overlay') { // Close overlay
        this.uiGameController.doResetGame();
       }
    });
  }

  #doLoadMainContent() {
    this.#doCreateHome();
  }

  static #doLoadFooter() {
    const curYear = new Date().getFullYear();
    const footer = document.querySelector('footer')
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_4__["default"].createAddNode('p', footer, null, null, `Copyright © ${curYear} Alessandro Celotti`);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_4__["default"].addNodeChild(footer, Utilities_button_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createImageLinkButton('https://github.com/cel8', 'github.svg'));
  }

  doLoadUI() {
    // Set main root theme
    root.className = settings.theme;
    this.#doLoadHeader();
    this.#doLoadOverlay();
    this.#doLoadMainContent();
    UiController.#doLoadFooter();
  }
}


/***/ }),

/***/ "./src/view/ui-game-controller.js":
/*!****************************************!*\
  !*** ./src/view/ui-game-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UiGameController)
/* harmony export */ });
/* harmony import */ var Utilities_button_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/button-manager */ "./src/utilities/button-manager.js");
/* harmony import */ var Utilities_input_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utilities/input-manager */ "./src/utilities/input-manager.js");
/* harmony import */ var Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utilities/dom-manager */ "./src/utilities/dom-manager.js");
/* harmony import */ var Modules_bot_difficulty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Modules/bot-difficulty */ "./src/modules/bot-difficulty.js");
/* harmony import */ var Modules_player_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Modules/player-type */ "./src/modules/player-type.js");
/* harmony import */ var Controller_player_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Controller/player-controller */ "./src/controller/player-controller.js");
/* harmony import */ var Controller_gameboard_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Controller/gameboard-controller */ "./src/controller/gameboard-controller.js");
/* harmony import */ var date_fns_differenceInMilliseconds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/differenceInMilliseconds */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var Svg_account_multiple_outline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Svg/account-multiple-outline.svg */ "./src/assets/images/svg/account-multiple-outline.svg");
/* harmony import */ var Svg_robot_angry_outline_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Svg/robot-angry-outline.svg */ "./src/assets/images/svg/robot-angry-outline.svg");
/* harmony import */ var Modules_ship__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Modules/ship */ "./src/modules/ship.js");












const phases = {
  rest:          0,
  createPlayerA: 1,
  createPlayerB: 2,
  prepareBoards: 3,
  waitRound:     4,
  playA:         5,
  playB:         6,
  winner:        7
};

class UiGameController {
  constructor() {
    this.#initGameVariables();
  }

  #initGameVariables() {
    this.stepPhase = phases.rest;
    this.playerA = {
      name: '',
      object: undefined,
      human: true
    };
    this.playerB = {
      name: '',
      difficulty: undefined,
      human: false,
      object: undefined
    };
    this.desPlaceShip = {
      lengths: [ 1, 1, 1, 2, 2, 3, 3, 4, 5 ],
      current: 0,
      vertical: true
    };
    this.previousHover = {
      length: 0,
      valid: false
    }
    this.curPlayer = undefined;
    this.score = {
      a: 0,
      b: 0,
    }
  }

  static #hideOverlay() {
    const overlay = document.querySelector('#overlay');
    if (overlay.style.display !== 'none') Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].toggleDisplayByNode(overlay);
    UiGameController.#doRemoveOverlay();
  }

  static #doRemoveOverlay() {
    const divOverlay = document.querySelector('.overlay-popup');
    if (divOverlay) {
      const divPlayGameOverlay = divOverlay.querySelector('.manage-div-play');
      if (divPlayGameOverlay) {
        const divButtons = divPlayGameOverlay.querySelectorAll('.form-icon');
        const buttons = [...divButtons];
        buttons.forEach(btn => {
          if(btn.style.display === 'none') Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].toggleDisplayByNode(btn);
          btn.disabled = false;
        });
      }
      const formPlayGameOverlay = divOverlay.querySelector('.manage-form-players');
      if (formPlayGameOverlay) Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildNodes(formPlayGameOverlay);
      const divFormPlaceBoat = divOverlay.querySelector('.manage-form-placeboat');
      if (divFormPlaceBoat) Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildNodes(divFormPlaceBoat);
      const divWinner = divOverlay.querySelector('.manage-winner');
      if (divWinner) Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildNodes(divWinner);
    }
  }

  doResetGame() {
    const main = document.querySelector('main');
    main.style.filter = 'blur(0rem)';
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildNodes(main);
    const overlay = document.querySelector('#overlay');
    if (overlay.style.display === 'none') Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].toggleDisplayByNode(overlay);
    UiGameController.#doRemoveOverlay();
    this.#initGameVariables();
  }

  doCreateGameOverlay() {
    let btnTwoPlayers;
    let btnBotPlayer;
    const divOverlay = document.querySelector('.overlay-popup');
    const divPlayGameOverlay = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('div', divOverlay, 'manage-div-play');
    const formPlayGameOverlay = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('form', divOverlay, 'manage-form-players');
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('div', divOverlay, 'manage-form-placeboat');
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('div', divOverlay, 'manage-winner');

    const patterns = {
      editPlayerNameA: /^[a-z\s']{2,30}$/i,
      editPlayerNameB: /^[a-z\s']{2,30}$/i,
    }
    
    const validate = (field, regex) => {
      if (regex.test(field.value)) {
        field.setCustomValidity('');
      } else {
        field.setCustomValidity('invalid');
      }
    };

    // Hide form and overlay
    const cbFinalizeForm = () => {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildNodes(formPlayGameOverlay);
    };

    // Cancel event
    const cbEventCancel = () => {
      if(btnTwoPlayers.style.display === 'none') Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].toggleDisplayByNode(btnTwoPlayers);
      if(btnBotPlayer.style.display === 'none') Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].toggleDisplayByNode(btnBotPlayer);
      btnTwoPlayers.disabled = false;
      btnBotPlayer.disabled = false;
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildNodes(formPlayGameOverlay);
    };

    // Submit event
    const cbEventSubmit = (e) => {
      e.preventDefault();
      const { target } = e;
      const inputA = target.querySelector('#editPlayerNameA');
      this.playerA.name = inputA.value;

      if (btnTwoPlayers.disabled) {
        const inputB = target.querySelector('#editPlayerNameB');
        this.playerB.name = inputB.value;
        this.playerB.human = true;
      } else {
        const botDiff = target.querySelector('#selectBotDifficulty');
        this.playerB.difficulty = botDiff.options[botDiff.selectedIndex].text;
        this.playerB.name = 'AngryAI';
        this.playerB.human = false;
      }

      cbFinalizeForm();
      this.#doGameFSM(phases.createPlayerA);
    };

    const cbCreatePlayForm = (vsAI = false) => {
      let editPlayerB;
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildNodes(formPlayGameOverlay);
      const editPlayerA = Utilities_input_manager__WEBPACK_IMPORTED_MODULE_1__["default"].createEditText('editPlayerNameA', 'First player', 'First player name');
      const btnCancel   = Utilities_input_manager__WEBPACK_IMPORTED_MODULE_1__["default"].createTextButton('btnCancel', 'Cancel', 'form-create-player-button', cbEventCancel);
      const btnSubmit   = Utilities_input_manager__WEBPACK_IMPORTED_MODULE_1__["default"].createTextButton('btnSubmit', 'Submit', 'form-create-player-button', cbEventSubmit, formPlayGameOverlay);
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(formPlayGameOverlay, editPlayerA.label);
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(formPlayGameOverlay, editPlayerA.input);
      
      if (!vsAI) {
        btnTwoPlayers.disabled = true;
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].toggleDisplayByNode(btnBotPlayer);
        editPlayerB = Utilities_input_manager__WEBPACK_IMPORTED_MODULE_1__["default"].createEditText('editPlayerNameB', 'Second player', 'Second player name');
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(formPlayGameOverlay, editPlayerB.label);
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(formPlayGameOverlay, editPlayerB.input);
      } else {
        btnBotPlayer.disabled = true;
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].toggleDisplayByNode(btnTwoPlayers);
        const selectAiDiff = Utilities_input_manager__WEBPACK_IMPORTED_MODULE_1__["default"].createSelect('selectBotDifficulty', [ Modules_bot_difficulty__WEBPACK_IMPORTED_MODULE_3__["default"].easy, Modules_bot_difficulty__WEBPACK_IMPORTED_MODULE_3__["default"].medium ], Modules_bot_difficulty__WEBPACK_IMPORTED_MODULE_3__["default"].easy, 'Bot difficulty');
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(formPlayGameOverlay, selectAiDiff.label);
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(formPlayGameOverlay, selectAiDiff.input);
      }

      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(formPlayGameOverlay, btnCancel.input);
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(formPlayGameOverlay, btnSubmit.input);

      const inputs = document.querySelectorAll('.manage-form-players > input');
      inputs.forEach((input) => {
        input.addEventListener('keyup', (e) => {
          if (undefined !== e.target.attributes.name) {
            validate(e.target, patterns[e.target.attributes.name.value]);
          }
        });
      });
    };

    btnTwoPlayers = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createButton('Two Players', 'account-multiple-outline.svg', 'form-icon', () => cbCreatePlayForm());
    btnBotPlayer = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createButton('AI Bot', 'robot-angry-outline.svg', 'form-icon', () => cbCreatePlayForm(true));

    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(divPlayGameOverlay, btnTwoPlayers);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(divPlayGameOverlay, btnBotPlayer);
  }

  #doCreateUserGameboard() {
    const gameboardController = new Controller_gameboard_controller__WEBPACK_IMPORTED_MODULE_6__["default"](true);
    this.desPlaceShip.current = 0;
    const {current, lengths } = this.desPlaceShip;

    const formPlaceBoat = document.querySelector('.manage-form-placeboat');
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildNodes(formPlaceBoat);
    const divPlaceBoat = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('div', formPlaceBoat, 'manage-div-placeboat');
    for (let i = 0; i < gameboardController.BoardSize; i+=1) {
      for (let j = 0; j < gameboardController.BoardSize; j+=1) {
        const grid = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createButton('', null, 'box', (e) => this.#onPlaceBoatCellClick(e, gameboardController));
        grid.addEventListener('mouseenter', (e) => this.#onPlaceBoatMouseEnter(e, gameboardController));
        grid.addEventListener('mouseleave', (e) => this.#onPlaceBoatMouseLeave(e, gameboardController));
        grid.dataset.x = i;
        grid.dataset.y = j;
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(divPlaceBoat, grid);
      }
    }

    const divLegendPlaceBoat = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('div', formPlaceBoat, 'div-legend-placeboat');
    const name = this.stepPhase === phases.createPlayerA ? this.playerA.name
      : this.playerB.name;
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('p', divLegendPlaceBoat, 'player-name-legend', null,  `It's ${name} turn for place boats.`);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('p', divLegendPlaceBoat, 'boat-length-legend', null,  `Place ${lengths[current]} length boat.`);
    const switchVertical = Utilities_input_manager__WEBPACK_IMPORTED_MODULE_1__["default"].createSwitchButton('switchVertical', true, 'Vertical boat', () => this.#doToggleVertical(), true);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(divLegendPlaceBoat, switchVertical.label);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(divLegendPlaceBoat, switchVertical.input);
  }

  #doCreateBotGameboard() {
    let exit = false;
    const gameboardController = new Controller_gameboard_controller__WEBPACK_IMPORTED_MODULE_6__["default"](false);
    this.desPlaceShip.current = 0;
    const { lengths } = this.desPlaceShip;
    const formPlaceBoat = document.querySelector('.manage-form-placeboat');
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildNodes(formPlaceBoat);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('p', formPlaceBoat, 'player-name-legend', null,  `It's ${this.playerB.name} turn for place boats.`);
    const start = new Date();

    do {
      const vertical = Math.random() < 0.5;
      const x = Math.floor(Math.random() * gameboardController.BoardSize);
      const y = Math.floor(Math.random() * gameboardController.BoardSize);

      if (gameboardController.place(new Modules_ship__WEBPACK_IMPORTED_MODULE_9__["default"](lengths[this.desPlaceShip.current]), x, y, vertical)) {
        this.desPlaceShip.current += 1;
        if (this.desPlaceShip.current === lengths.length) {
          this.playerB.object = new Controller_player_controller__WEBPACK_IMPORTED_MODULE_5__["default"](this.playerB.name, gameboardController, Modules_player_type__WEBPACK_IMPORTED_MODULE_4__["default"].ai, this.playerB.difficulty);
          exit = true;
        }
      }
    } while(!exit);

    // Get elaboration in ms
    const ms = (0,date_fns_differenceInMilliseconds__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(), start);

    // Simulate a wait of 5s (or wait zero)
    const delay = (5000 - ms < 0) ? 0 : 5000 - ms;
    setTimeout(() => { this.#doGameFSM(phases.prepareBoards); }, delay);
  }

  #doChangeBoatLengthLegend() {
    const {current, lengths } = this.desPlaceShip;
    const pBoatLength = document.querySelector('.boat-length-legend');
    pBoatLength.textContent = `Place ${lengths[current]} length boat.`;
  }

  #onPlaceBoatCellClick(event, gameboardController) {
    const { target } = event;
    const dataset = (target.nodeName.toLowerCase() === 'button') ? target.dataset
      : target.parentNode.dataset;
    const x = +dataset.x;
    const y = +dataset.y;
    const {current, lengths, vertical } = this.desPlaceShip;
    if (gameboardController.place(new Modules_ship__WEBPACK_IMPORTED_MODULE_9__["default"](lengths[current]), x, y, vertical)) {
      event.target.classList.add('set');
  
      if (vertical) {
        for (let i = x + 1; i < gameboardController.BoardSize && i < (x + lengths[current]); i += 1) { 
          const btn = document.querySelector(`[data-x='${i}'][data-y='${y}']`);
          btn.classList.add('set');
        }
      } else {
        for (let i = y + 1; i < gameboardController.BoardSize && i < (y + lengths[current]); i += 1) {
          const btn = document.querySelector(`[data-x='${x}'][data-y='${i}']`);
          btn.classList.add('set');
        }
      }

      this.#unsetPreviousHover(event.target, x, y, gameboardController.BoardSize, this.desPlaceShip.vertical);
      this.desPlaceShip.current += 1;
      this.#doChangeBoatLengthLegend();
      if (this.desPlaceShip.current === lengths.length) {
        if(this.stepPhase === phases.createPlayerA) {
          this.playerA.object = new Controller_player_controller__WEBPACK_IMPORTED_MODULE_5__["default"](this.playerA.name, gameboardController);
        } else {
          this.playerB.object = new Controller_player_controller__WEBPACK_IMPORTED_MODULE_5__["default"](this.playerB.name, gameboardController);
        }
        const nextState = this.stepPhase === phases.createPlayerA ? phases.createPlayerB 
          : phases.prepareBoards;
        this.#doGameFSM(nextState);
      }
    }
  }

  #doToggleVertical() {
    this.desPlaceShip.vertical = !this.desPlaceShip.vertical;
  }

  static #setPlaceBoatHover(element, valid) {
    if (valid) {
      element.classList.add('valid');
    } else {
      element.classList.add('invalid');
    }
  }

  static #unsetPlaceBoatHover(element, valid) {
    if (valid) {
      element.classList.remove('valid');
    } else {
      element.classList.remove('invalid');
    }
  }

  #onPlaceBoatMouseEnter(event, gameboardController) {
    const { target } = event;
    const { dataset } = target;
    const x = +dataset.x;
    const y = +dataset.y;
    const { current, lengths, vertical } = this.desPlaceShip;
    this.previousHover.length = lengths[current];
    this.previousHover.valid = gameboardController.checkPlace(lengths[current], x, y, vertical);
    UiGameController.#setPlaceBoatHover(event.target, this.previousHover.valid);

    if (vertical) {
      for (let i = x + 1; i < gameboardController.BoardSize && i < (x + lengths[current]); i += 1) { 
        const btn = document.querySelector(`[data-x='${i}'][data-y='${y}']`);
        UiGameController.#setPlaceBoatHover(btn, this.previousHover.valid);
      }
    } else {
      for (let i = y + 1; i < gameboardController.BoardSize && i < (y + lengths[current]); i += 1) {
        const btn = document.querySelector(`[data-x='${x}'][data-y='${i}']`);
        UiGameController.#setPlaceBoatHover(btn, this.previousHover.valid);
      }
    }
  }

  #unsetPreviousHover(element, x, y, boardSize, vertical) {
    if (this.previousHover.length) {
      UiGameController.#unsetPlaceBoatHover(element, this.previousHover.valid);

      if (vertical) {
        for (let i = x + 1; i < boardSize && i < (x + this.previousHover.length); i += 1) { 
          const btn = document.querySelector(`[data-x='${i}'][data-y='${y}']`);
          UiGameController.#unsetPlaceBoatHover(btn, this.previousHover.valid);
        }
      } else {
        for (let i = y + 1; i < boardSize && i < (y + this.previousHover.length); i += 1) {
          const btn = document.querySelector(`[data-x='${x}'][data-y='${i}']`);
          UiGameController.#unsetPlaceBoatHover(btn, this.previousHover.valid);
        }
      }

      this.previousHover.length = 0;
      this.previousHover.valid = false;
    }
  }

  #onPlaceBoatMouseLeave(event, gameboardController) {
    const { target } = event;
    const { dataset } = target;
    const x = +dataset.x;
    const y = +dataset.y;
    this.#unsetPreviousHover(event.target, x, y, gameboardController.BoardSize, this.desPlaceShip.vertical);
  }

  #doCreateBoard(parent, player) {
    const divPlayerController = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('div', parent, 'div-player-controller');
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('p', divPlayerController, 'player-name', null, `${player.Name}`);
    const divGameboard = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('div', divPlayerController, 'div-gameboard');
    divGameboard.dataset.player = this.#getPlayerSide(player);
    for (let i = 0; i < player.GameBoard.BoardSize; i+=1) {
      for (let j = 0; j < player.GameBoard.BoardSize; j+=1) {
        const grid = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createButton('', null, 'box', (e) => this.#onPlayUserRound(e));
        grid.dataset.x = i;
        grid.dataset.y = j;
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(divGameboard, grid);
      }
    }
  }

  #getPlayerSide(player) { return player === this.playerA.object ? 'A' : 'B'; }

  #getOpponentPlayer() { return this.curPlayer === this.playerA ? this.playerB : this.playerA }

  static #setWater(element) {
    if (element) {
      element.classList.add('water');
    }
  }

  static #setHit(element) {
    if (element) {
      element.textContent = 'X';
      element.classList.add('set');
    }
  }

  static #setWaterSunk(parent, x, y) {
    const element = parent.querySelector(`[data-x='${x}'][data-y='${y}']`);
    if (element && element.textContent !== 'X') {
      element.textContent = '*';
      element.classList.add('water');
    }
  }

  static #sunkShip(parent, coordinates) {
    coordinates.forEach(coordinate => {
      UiGameController.#setWaterSunk(parent, coordinate.x - 1, coordinate.y);
      UiGameController.#setWaterSunk(parent, coordinate.x + 1, coordinate.y);
      UiGameController.#setWaterSunk(parent, coordinate.x, coordinate.y - 1);
      UiGameController.#setWaterSunk(parent, coordinate.x, coordinate.y + 1);
      UiGameController.#setWaterSunk(parent, coordinate.x - 1, coordinate.y - 1);
      UiGameController.#setWaterSunk(parent, coordinate.x + 1, coordinate.y + 1);
      UiGameController.#setWaterSunk(parent, coordinate.x - 1, coordinate.y + 1);
      UiGameController.#setWaterSunk(parent, coordinate.x + 1, coordinate.y - 1);
    });
  }

  #onPlayUserRound(event) {
    const target = (event.target.nodeName.toLowerCase() === 'button') ? event.target : event.target.parentNode;
    // Check current play phase click not allowed
    if ((this.stepPhase !== phases.playA) && (this.stepPhase !== phases.playB)) return;
    // Click not allowed during AI round
    if (!this.curPlayer.human) return;
    // Get current player side if click is allowed
    const curPlayerSide = this.#getPlayerSide(this.curPlayer.object);
    const parent = target.parentNode;
    if (parent.dataset.player === curPlayerSide) return;
    // Click is allowed
    const { dataset } = target;
    const x = +dataset.x;
    const y = +dataset.y;

    const phase = this.#doPlayRoundUI(target, x, y);
    if (phase) {
      this.#doGameFSM(phase);
    }
  }

  #doPrepareBoards() {
    // Get current player
    this.curPlayer = Math.random() < 0.5 ? this.playerA : this.playerB;
    // Hide overlay
    UiGameController.#hideOverlay();
    // Create main board
    const main = document.querySelector('main');
    const divGameBoardGrid = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('div', main, 'div-gameboard-grid');
    const divRoundController = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('div', divGameBoardGrid, 'div-round-controller');
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('p', divRoundController, 'player-name-round', null, `It is ${this.curPlayer.name} round`);
    if (this.playerB.human) { 
      const btnStartRound = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createTextButton('Start Round', 'btn-start-round', (e) => this.#doStartRound(e));
      btnStartRound.disabled = true;
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(divRoundController, btnStartRound);
    } 

    const divGameBoardController = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('div', divGameBoardGrid, 'div-gameboard-controller');
    this.#doCreateBoard(divGameBoardController, this.playerA.object);
    this.#doCreateBoard(divGameBoardController, this.playerB.object);
    if (!this.playerB.human) {
      this.#doShowHideCurrentBoard(true, this.playerA.object);
    }
    this.#doGameFSM(phases.waitRound);
  }

  #doWaitRound() {
    if (this.playerB.human) {
      const btnStartRound = document.querySelector('.btn-start-round');
      btnStartRound.disabled = false;
    } else {
      const nextPhase = this.#getPlayerSide(this.curPlayer.object) === 'A' ? phases.playA : phases.playB;
      this.#doGameFSM(nextPhase);
    }
  }

  #doStartRound(event) {
    const target = (event.target.nodeName.toLowerCase() === 'button') ? event.target : event.target.parentNode;
    target.disabled = true;
    this.#doShowHideCurrentBoard(true);
    const nextPhase = this.#getPlayerSide(this.curPlayer.object) === 'A' ? phases.playA : phases.playB;
    this.#doGameFSM(nextPhase);
  }

  #doPlayRoundAI() {
    let phase;
    do {
      phase = this.#doPlayRoundUI();
    } while (!phase);

    if (phase) {
      this.#doGameFSM(phase);
    }
  }

  #doSwitchRound() {
    const playerName = document.querySelector('.player-name-round');
    if (this.playerB.human) {
      this.#doShowHideCurrentBoard(false);
    }
    this.curPlayer = (this.#getPlayerSide(this.curPlayer.object) === 'A') ? this.playerB : this.playerA;
    playerName.textContent = `It is ${this.curPlayer.object.Name} round`;
  }

  #doPlayRoundUI(target = undefined, x = undefined, y = undefined) {
    let phase;
    let parent;
    let element;
    const roundValue = this.curPlayer.object.playRound(this.#getOpponentPlayer().object.GameBoard, x, y);
    
    if (roundValue.exit) {
      if (!target) {
        parent = document.querySelector(`[data-player='A']`);
        element = parent.querySelector(`[data-x='${roundValue.attack.x}'][data-y='${roundValue.attack.y}']`);
      } else {
        parent = target.parentNode;
        element = target;
      }
      if (roundValue.water) {
        UiGameController.#setWater(element);
        // Switch player
        if (element.textContent !== '*') {
          this.#doSwitchRound();
          phase = phases.waitRound;
        }
      } else {
        UiGameController.#setHit(element);
        if (roundValue.sunk) {
          UiGameController.#sunkShip(parent, roundValue.coordinates);
          if (this.#getPlayerSide(this.curPlayer.object) === 'A') {
            this.score.a += 1;
          } else {
            this.score.b += 1;
          }

          const { length } = this.desPlaceShip.lengths;
          if ((this.score.a === length) || (this.score.b === length)) {
            phase = phases.winner;
          }
        }
      }
    }
    return phase;
  }

  #doShowWinner() {
    const main = document.querySelector('main');
    main.style.filter = 'blur(0.8rem)';
    const overlay = document.querySelector('#overlay');
    if (overlay.style.display === 'none') Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].toggleDisplayByNode(overlay);
    const divOverlay = document.querySelector('.overlay-popup');
    const divPlayGameOverlay = divOverlay.querySelector('.manage-div-play');
    if (divPlayGameOverlay) {
      const divButtons = divPlayGameOverlay.querySelectorAll('.form-icon');
      const buttons = [...divButtons];
      buttons.forEach(btn => {
        btn.disabled = true;
      });
    }    
    const divWinner = divOverlay.querySelector('.manage-winner');
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createAddNode('p', divWinner, 'p-winner', null, `The winner is ${this.curPlayer.object.Name}.`);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_2__["default"].addNodeChild(divWinner, Utilities_button_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createTextButton('Play again', 'form-icon', () => {
      this.#doGameFSM(phases.rest);
    }));
  }

  static #doShowHideBoat(element, show) {
    if (!element) return;
    if (element.textContent === 'X') return;
    if (show) {
      element.classList.add('set');
    } else {
      element.classList.remove('set');
    }
  }

  #doShowHideCurrentBoard(show, player = undefined) {
    const playerObject = player || this.curPlayer.object;
    const shipCoordinates = playerObject.GameBoard.getShipCoordinates();
    const curPlayerSide = this.#getPlayerSide(playerObject);
    const parent = document.querySelector(`[data-player='${curPlayerSide}']`);
    shipCoordinates.forEach(coordinates => {
      coordinates.forEach(coordinate => {
        const element = parent.querySelector(`[data-x='${coordinate.x}'][data-y='${coordinate.y}']`);
        UiGameController.#doShowHideBoat(element, show)
      });
    });
  }

  #doGameFSM(nextStep) {
    // Set next step
    this.stepPhase = nextStep;

    // Do operation
    switch (this.stepPhase) {
      case phases.createPlayerA:
        this.#doCreateUserGameboard();
        break;
      case phases.createPlayerB:
        if (this.playerB.human) {
          this.#doCreateUserGameboard();
        } else {
          this.#doCreateBotGameboard();
        }
        break;
      case phases.prepareBoards:
        this.#doPrepareBoards();
        break;
      case phases.waitRound:
        this.#doWaitRound();
        break;
      case phases.playA:
        break;
      case phases.playB:
        if (!this.playerB.human) {
          this.#doPlayRoundAI();
        }
        break;
      case phases.winner:
        this.#doShowWinner();
        break;
      case phases.rest:
      default:
        this.doResetGame();
        break;
    }
  }
};


/***/ }),

/***/ "./src/assets/images/svg/account-multiple-outline.svg":
/*!************************************************************!*\
  !*** ./src/assets/images/svg/account-multiple-outline.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "images/account-multiple-outline.svg";

/***/ }),

/***/ "./src/assets/images/svg/dark-theme.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/dark-theme.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "images/dark-theme.svg";

/***/ }),

/***/ "./src/assets/images/svg/github.svg":
/*!******************************************!*\
  !*** ./src/assets/images/svg/github.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "images/github.svg";

/***/ }),

/***/ "./src/assets/images/svg/home-outline.svg":
/*!************************************************!*\
  !*** ./src/assets/images/svg/home-outline.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "images/home-outline.svg";

/***/ }),

/***/ "./src/assets/images/svg/light-theme.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/svg/light-theme.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "images/light-theme.svg";

/***/ }),

/***/ "./src/assets/images/svg/robot-angry-outline.svg":
/*!*******************************************************!*\
  !*** ./src/assets/images/svg/robot-angry-outline.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "images/robot-angry-outline.svg";

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
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var Style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Style/style.css */ "./src/style/style.css");
/* harmony import */ var View_ui_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! View/ui-controller */ "./src/view/ui-controller.js");



const uiController = new View_ui_controller__WEBPACK_IMPORTED_MODULE_1__["default"]();

window.onload = () => {
  uiController.doLoadUI();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLFdBQVcsVUFBVSxVQUFVLFVBQVUsd0JBQXdCLHVCQUF1Qix1QkFBdUIsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sYUFBYSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLHNHQUFzRyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQix3RkFBd0YsV0FBVyxHQUFHLGdCQUFnQixn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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsU0FBUyw0REFBTSx1QkFBdUIsNERBQU07QUFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjBDO0FBQ2dCO0FBQ2xCO0FBQ29CO0FBQ1E7QUFDMkI7QUFDNkI7QUFDekU7QUFDTTtBQUNXO0FBQ1QsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0Y7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDcUI7O0FBRTlDLHlCQUF5QiwwREFBWTs7QUFFckM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyL2dhbWVib2FyZC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXIvcGxheWVyLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ib3QtZGlmZmljdWx0eS5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2Nvb3JkaW5hdGUtdHJhY2tlci1zZXQuanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXItdHlwZS5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9zcmMvdXRpbGl0aWVzL2J1dHRvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwLy4vc3JjL3V0aWxpdGllcy9kb20tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL3NyYy91dGlsaXRpZXMvaW5wdXQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC8uL3NyYy92aWV3L3VpLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9zcmMvdmlldy91aS1nYW1lLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wX2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbn1cXG5cXG46cm9vdC5kYXJrIHtcXG4gIC0tY29sb3ItcHJpbWFyeS1iZzogIzIxMjEyMTtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5LWJnOiAjMDAwMDAwO1xcbiAgLS1jb2xvci1wcmltYXJ5LWZnOiAjQjBCRUM1O1xcbiAgLS1jb2xvci1wcmltYXJ5LXRleHQ6ICNlZWZmZmY7XFxuICAtLWNvbG9yLXNlY29uZGFyeS10ZXh0OiAjZWVmZmZmO1xcbiAgLS1pY29uLWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgLS1jb2xvci1pbmFjdGl2ZTogIzQ3NDc0NztcXG4gIC0tY29sb3ItYWN0aXZlOiAjODBjYmM0O1xcbiAgLS1jb2xvci1zY3JvbGwtYWN0aXZlOiB2YXIoLS1jb2xvci1wcmltYXJ5LWZnKTtcXG4gIC0tY29sb3Itc2Nyb2xsLWluYWN0aXZlOiByZ2JhKDE3NiwgMTkwLCAxOTcsIDAuNyk7XFxuICAtLWNvbG9yLXNoYWRvdzogcmdiKDU0LCA1NCwgNTQpO1xcbn1cXG5cXG46cm9vdC5saWdodCB7XFxuICAtLWNvbG9yLXByaW1hcnktYmc6ICNGQUZBRkE7XFxuICAtLWNvbG9yLXNlY29uZGFyeS1iZzogI0IwQkVDNTtcXG4gIC0tY29sb3ItcHJpbWFyeS1mZzogIzU0NkU3QTtcXG4gIC0tY29sb3ItcHJpbWFyeS10ZXh0OiAjMjcyNzI3O1xcbiAgLS1jb2xvci1zZWNvbmRhcnktdGV4dDogIzAwMDAwMDtcXG4gIC0taWNvbi1maWx0ZXI6IGludmVydCgwJSk7XFxuICAtLWNvbG9yLWluYWN0aXZlOiAjRDJENEQ1O1xcbiAgLS1jb2xvci1hY3RpdmU6ICMzOUFEQjU7XFxuICAtLWNvbG9yLXNjcm9sbC1hY3RpdmU6IHZhcigtLWNvbG9yLXByaW1hcnktZmcpO1xcbiAgLS1jb2xvci1zY3JvbGwtaW5hY3RpdmU6IHJnYmEoODQsIDExMCwgMTIyLCAwLjcpO1xcbiAgLS1jb2xvci1zaGFkb3c6IHJnYigxODQsIDE4NCwgMTg0KTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXRleHQpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktZmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktdGV4dCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmEgeyBcXG4gIGNvbG9yOiBpbmhlcml0OyBcXG59XFxuXFxuLyogU2Nyb2xsYmFyICovXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwLjVyZW07XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNjcm9sbC1hY3RpdmUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zY3JvbGwtaW5hY3RpdmUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLyogU3dpdGNoICovXFxuXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7IFxcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWluYWN0aXZlKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1jb2xvci1hY3RpdmUpOztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi8qIEljb24gKi9cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1iZyk7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uICAgICAgID4gcCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXRleHQpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiAgICAgICA+IGltZyAge1xcbiAgZmlsdGVyOiB2YXIoLS1pY29uLWZpbHRlcikgZHJvcC1zaGFkb3coMXB4IDJweCAwIHZhcigtLWNvbG9yLXNoYWRvdykpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbjplbmFibGVkICAgICAgID4gcCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b246aG92ZXI6ZW5hYmxlZCAgICAgICA+IGltZyAge1xcbiAgZmlsdGVyOiB2YXIoLS1pY29uLWZpbHRlcikgYnJpZ2h0bmVzcyg5MCUpIGRyb3Atc2hhZG93KDFweCAycHggMCB2YXIoLS1jb2xvci1zaGFkb3cpKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b246YWN0aXZlOmVuYWJsZWQgICAgICAgPiBwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpIHRyYW5zbGF0ZVgoMnB4KTtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbjphY3RpdmU6ZW5hYmxlZCAgICAgICA+IGltZyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KSB0cmFuc2xhdGVYKDJweCk7XFxuICBmaWx0ZXI6IHZhcigtLWljb24tZmlsdGVyKSBicmlnaHRuZXNzKDkwJSkgZHJvcC1zaGFkb3coMXB4IDFweCAwIHZhcigtLWNvbG9yLXNoYWRvdykpO1xcbn1cXG5cXG4uaGVhZGVyLWJhci1idXR0b24ge1xcbiAgd2lkdGg6IDE1NXB4O1xcbn1cXG5cXG4uaGVhZGVyLWJhci1idXR0b24gPiBwIHtcXG4gIG1hcmdpbjogMC4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIE92ZXJsYXkgKi9cXG5cXG4jb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXFxuICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cXG59XFxuXFxuLm92ZXJsYXktcG9wdXAge1xcbiAgbWFyZ2luLXRvcDogNC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNC41cmVtO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuXFxuLm1hbmFnZS1kaXYtcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWljb24gPiBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1hbmFnZS1mb3JtLXBsYXllcnMge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAwLjVmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDBmcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgPiA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIgPiA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLyogbWFpbiBjb250ZW50ICovXFxuXFxubWFpbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcblxcbi8qIEdyaWQgdGVtcGxhdGUgZm9yIHBsYWNlbWVudC9nYW1lIGJveCAqL1xcblxcbi5tYW5hZ2UtZm9ybS1wbGFjZWJvYXQsXFxuLmRpdi1yb3VuZC1jb250cm9sbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kaXYtbGVnZW5kLXBsYWNlYm9hdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGl2LWxlZ2VuZC1wbGFjZWJvYXQgPiBwLFxcbi5idG4tc3RhcnQtcm91bmQgPiBwIHtcXG4gIG1hcmdpbjogMHJlbTtcXG59XFxuXFxuLnBsYXllci1uYW1lLXJvdW5kLFxcbi5wLXdpbm5lciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucGxheWVyLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRpdi1nYW1lYm9hcmQtY29udHJvbGxlciB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4ubWFuYWdlLWRpdi1wbGFjZWJvYXQsXFxuLmRpdi1nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBhdXRvKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMHJlbTtcXG59XFxuXFxuLmJveCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYm94LnZhbGlkLFxcbi5ib3guc2V0LnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYm94LmludmFsaWQsXFxuLmJveC5zZXQuaW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ib3guc2V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5ib3gud2F0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5QURCNTtcXG59XFxuXFxuLm1hbmFnZS13aW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLyogTWVkaWEgcXVlcnkgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwODBweCkge1xcbiAgLmRpdi1nYW1lYm9hcmQtY29udHJvbGxlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVyZW07XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7QUFDQTs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLGlEQUFpRDtFQUNqRCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QyxnREFBZ0Q7RUFDaEQsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxnREFBZ0Q7RUFDaEQsMkNBQTJDO0VBQzNDLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFt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QUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbn1cXG5cXG46cm9vdC5kYXJrIHtcXG4gIC0tY29sb3ItcHJpbWFyeS1iZzogIzIxMjEyMTtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5LWJnOiAjMDAwMDAwO1xcbiAgLS1jb2xvci1wcmltYXJ5LWZnOiAjQjBCRUM1O1xcbiAgLS1jb2xvci1wcmltYXJ5LXRleHQ6ICNlZWZmZmY7XFxuICAtLWNvbG9yLXNlY29uZGFyeS10ZXh0OiAjZWVmZmZmO1xcbiAgLS1pY29uLWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgLS1jb2xvci1pbmFjdGl2ZTogIzQ3NDc0NztcXG4gIC0tY29sb3ItYWN0aXZlOiAjODBjYmM0O1xcbiAgLS1jb2xvci1zY3JvbGwtYWN0aXZlOiB2YXIoLS1jb2xvci1wcmltYXJ5LWZnKTtcXG4gIC0tY29sb3Itc2Nyb2xsLWluYWN0aXZlOiByZ2JhKDE3NiwgMTkwLCAxOTcsIDAuNyk7XFxuICAtLWNvbG9yLXNoYWRvdzogcmdiKDU0LCA1NCwgNTQpO1xcbn1cXG5cXG46cm9vdC5saWdodCB7XFxuICAtLWNvbG9yLXByaW1hcnktYmc6ICNGQUZBRkE7XFxuICAtLWNvbG9yLXNlY29uZGFyeS1iZzogI0IwQkVDNTtcXG4gIC0tY29sb3ItcHJpbWFyeS1mZzogIzU0NkU3QTtcXG4gIC0tY29sb3ItcHJpbWFyeS10ZXh0OiAjMjcyNzI3O1xcbiAgLS1jb2xvci1zZWNvbmRhcnktdGV4dDogIzAwMDAwMDtcXG4gIC0taWNvbi1maWx0ZXI6IGludmVydCgwJSk7XFxuICAtLWNvbG9yLWluYWN0aXZlOiAjRDJENEQ1O1xcbiAgLS1jb2xvci1hY3RpdmU6ICMzOUFEQjU7XFxuICAtLWNvbG9yLXNjcm9sbC1hY3RpdmU6IHZhcigtLWNvbG9yLXByaW1hcnktZmcpO1xcbiAgLS1jb2xvci1zY3JvbGwtaW5hY3RpdmU6IHJnYmEoODQsIDExMCwgMTIyLCAwLjcpO1xcbiAgLS1jb2xvci1zaGFkb3c6IHJnYigxODQsIDE4NCwgMTg0KTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXRleHQpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktZmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktdGV4dCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmEgeyBcXG4gIGNvbG9yOiBpbmhlcml0OyBcXG59XFxuXFxuLyogU2Nyb2xsYmFyICovXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwLjVyZW07XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNjcm9sbC1hY3RpdmUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zY3JvbGwtaW5hY3RpdmUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLyogU3dpdGNoICovXFxuXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7IFxcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWluYWN0aXZlKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1jb2xvci1hY3RpdmUpOztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi8qIEljb24gKi9cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1iZyk7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uICAgICAgID4gcCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXRleHQpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiAgICAgICA+IGltZyAge1xcbiAgZmlsdGVyOiB2YXIoLS1pY29uLWZpbHRlcikgZHJvcC1zaGFkb3coMXB4IDJweCAwIHZhcigtLWNvbG9yLXNoYWRvdykpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbjplbmFibGVkICAgICAgID4gcCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b246aG92ZXI6ZW5hYmxlZCAgICAgICA+IGltZyAge1xcbiAgZmlsdGVyOiB2YXIoLS1pY29uLWZpbHRlcikgYnJpZ2h0bmVzcyg5MCUpIGRyb3Atc2hhZG93KDFweCAycHggMCB2YXIoLS1jb2xvci1zaGFkb3cpKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b246YWN0aXZlOmVuYWJsZWQgICAgICAgPiBwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpIHRyYW5zbGF0ZVgoMnB4KTtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbjphY3RpdmU6ZW5hYmxlZCAgICAgICA+IGltZyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KSB0cmFuc2xhdGVYKDJweCk7XFxuICBmaWx0ZXI6IHZhcigtLWljb24tZmlsdGVyKSBicmlnaHRuZXNzKDkwJSkgZHJvcC1zaGFkb3coMXB4IDFweCAwIHZhcigtLWNvbG9yLXNoYWRvdykpO1xcbn1cXG5cXG4uaGVhZGVyLWJhci1idXR0b24ge1xcbiAgd2lkdGg6IDE1NXB4O1xcbn1cXG5cXG4uaGVhZGVyLWJhci1idXR0b24gPiBwIHtcXG4gIG1hcmdpbjogMC4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIE92ZXJsYXkgKi9cXG5cXG4jb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXFxuICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cXG59XFxuXFxuLm92ZXJsYXktcG9wdXAge1xcbiAgbWFyZ2luLXRvcDogNC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNC41cmVtO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuXFxuLm1hbmFnZS1kaXYtcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWljb24gPiBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1hbmFnZS1mb3JtLXBsYXllcnMge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAwLjVmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDBmcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgPiA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIgPiA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLyogbWFpbiBjb250ZW50ICovXFxuXFxubWFpbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcblxcbi8qIEdyaWQgdGVtcGxhdGUgZm9yIHBsYWNlbWVudC9nYW1lIGJveCAqL1xcblxcbi5tYW5hZ2UtZm9ybS1wbGFjZWJvYXQsXFxuLmRpdi1yb3VuZC1jb250cm9sbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kaXYtbGVnZW5kLXBsYWNlYm9hdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGl2LWxlZ2VuZC1wbGFjZWJvYXQgPiBwLFxcbi5idG4tc3RhcnQtcm91bmQgPiBwIHtcXG4gIG1hcmdpbjogMHJlbTtcXG59XFxuXFxuLnBsYXllci1uYW1lLXJvdW5kLFxcbi5wLXdpbm5lciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucGxheWVyLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRpdi1nYW1lYm9hcmQtY29udHJvbGxlciB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4ubWFuYWdlLWRpdi1wbGFjZWJvYXQsXFxuLmRpdi1nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBhdXRvKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMHJlbTtcXG59XFxuXFxuLmJveCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYm94LnZhbGlkLFxcbi5ib3guc2V0LnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYm94LmludmFsaWQsXFxuLmJveC5zZXQuaW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ib3guc2V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5ib3gud2F0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5QURCNTtcXG59XFxuXFxuLm1hbmFnZS13aW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLyogTWVkaWEgcXVlcnkgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwODBweCkge1xcbiAgLmRpdi1nYW1lYm9hcmQtY29udHJvbGxlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGF0ZUxlZnQpLmdldFRpbWUoKSAtIHRvRGF0ZShkYXRlUmlnaHQpLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSAnTW9kdWxlcy9zaGlwJztcbmltcG9ydCBDb29yZGluYXRlVHJhY2tlclNldCBmcm9tICdNb2R1bGVzL2Nvb3JkaW5hdGUtdHJhY2tlci1zZXQnO1xuXG5jb25zdCBCT0FSRF9TSVpFID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyR2FtZWJvYXJkID0gZmFsc2UpIHtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IEJPQVJEX1NJWkU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgQXJyYXkoQk9BUkRfU0laRSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCT0FSRF9TSVpFOyBpICs9IDEpIHRoaXMuZ2FtZWJvYXJkW2ldID0gbmV3IEFycmF5KEJPQVJEX1NJWkUpO1xuICAgIHRoaXMudXNlckdhbWVib2FyZCA9IHVzZXJHYW1lYm9hcmQgfHwgZmFsc2U7XG4gICAgdGhpcy50cmFja0F0dGFja3MgPSBuZXcgQ29vcmRpbmF0ZVRyYWNrZXJTZXQoKTtcbiAgICB0aGlzLnRyYWNrQWRqYWNlbnRzID0gbmV3IENvb3JkaW5hdGVUcmFja2VyU2V0KCk7XG4gICAgdGhpcy5zaGlwTWFwID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgc3RhdGljICNpc1ZhbGlkQ29vcmQoeCwgeSkge1xuICAgIGlmIChOdW1iZXIuaXNOYU4oK3gpIHx8IE51bWJlci5pc05hTigreSkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoKCt4IDwgMCkgfHwgKCt4ID49IEJPQVJEX1NJWkUpIHx8IFxuICAgICAgICAoK3kgPCAwKSB8fCAoK3kgPj0gQk9BUkRfU0laRSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNjaGVja0FkamFjZW50KHgsIHksIHNoaXBMZW5ndGgsIHZlcnRpY2FsKSB7XG4gICAgbGV0IGlzQWRqYWNlbnQgPSBmYWxzZTtcbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgKHggKyBzaGlwTGVuZ3RoKSAmJiAhaXNBZGphY2VudDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYWNrQWRqYWNlbnRzLmhhcyh7eDogaSwgeX0pKSBpc0FkamFjZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCAoeSArIHNoaXBMZW5ndGgpICYmICFpc0FkamFjZW50OyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhY2tBZGphY2VudHMuaGFzKHt4LCB5OiBpfSkpIGlzQWRqYWNlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNBZGphY2VudDtcbiAgfVxuXG4gIGlzVXNlckdhbWVib2FyZCgpIHsgcmV0dXJuIHRoaXMudXNlckdhbWVib2FyZDsgfVxuXG4gIGdldFNoaXBDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICB0aGlzLnNoaXBNYXAuZm9yRWFjaCh2ID0+IHNoaXBDb29yZGluYXRlcy5wdXNoKHYpKTtcbiAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0IEJvYXJkU2l6ZSgpIHsgcmV0dXJuIHRoaXMuYm9hcmRTaXplIH1cblxuICBjaGVja1BsYWNlKHNoaXBMZW5ndGgsIHgsIHksIHZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICBpZiAoIUdhbWVib2FyZENvbnRyb2xsZXIuI2lzVmFsaWRDb29yZCh4LCB5KSB8fFxuICAgICAgICh2ZXJ0aWNhbCAgJiYgKCt4ICsgc2hpcExlbmd0aCA+IEJPQVJEX1NJWkUpKSB8fFxuICAgICAgICghdmVydGljYWwgJiYgKCt5ICsgc2hpcExlbmd0aCA+IEJPQVJEX1NJWkUpKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLiNjaGVja0FkamFjZW50KHgsIHksIHNoaXBMZW5ndGgsIHZlcnRpY2FsKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgI2FkZFRyYWNrQWRqYWNlbnQoeCwgeSwgdmVydGljYWwpIHtcbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIHRoaXMudHJhY2tBZGphY2VudHMuYWRkKHt4LCB5fSk7XG4gICAgICB0aGlzLnRyYWNrQWRqYWNlbnRzLmFkZCh7eCwgeTogeSAtIDF9KTtcbiAgICAgIHRoaXMudHJhY2tBZGphY2VudHMuYWRkKHt4LCB5OiB5ICsgMX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyYWNrQWRqYWNlbnRzLmFkZCh7eCwgeX0pO1xuICAgICAgdGhpcy50cmFja0FkamFjZW50cy5hZGQoe3g6IHggLSAxLCB5fSk7XG4gICAgICB0aGlzLnRyYWNrQWRqYWNlbnRzLmFkZCh7eDogeCArIDEsIHl9KTtcblxuICAgIH1cbiAgfVxuXG4gIHBsYWNlKHNoaXAsIHgsIHksIHZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuICAgIGlmICghKHNoaXAgaW5zdGFuY2VvZiBTaGlwKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghdGhpcy5jaGVja1BsYWNlKHNoaXAubGVuZ3RoLCAreCwgK3ksIHZlcnRpY2FsKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICB0aGlzLiNhZGRUcmFja0FkamFjZW50KCt4IC0gMSwgK3ksIHZlcnRpY2FsKTtcbiAgICAgIGZvciAobGV0IGkgPSAreDsgaSA8ICgreCArIHNoaXAubGVuZ3RoKTsgaSArPSAxKSB7IFxuICAgICAgICBjb29yZGluYXRlcy5wdXNoKHsgeDogaSwgeTogK3kgfSk7XG4gICAgICAgIHRoaXMuI2FkZFRyYWNrQWRqYWNlbnQoaSwgK3ksIHZlcnRpY2FsKTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmRbaV1bK3ldID0gc2hpcDtcbiAgICAgIH1cbiAgICAgIHRoaXMuI2FkZFRyYWNrQWRqYWNlbnQoK3ggKyBzaGlwLmxlbmd0aCwgK3ksIHZlcnRpY2FsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jYWRkVHJhY2tBZGphY2VudCgreCwgK3kgLSAxLCB2ZXJ0aWNhbCk7XG4gICAgICBmb3IgKGxldCBpID0gK3k7IGkgPCAoK3kgKyBzaGlwLmxlbmd0aCk7IGkgKz0gMSkge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKHsgeDogK3gsIHk6IGkgfSk7XG4gICAgICAgIHRoaXMuI2FkZFRyYWNrQWRqYWNlbnQoK3gsIGksIHZlcnRpY2FsKTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmRbK3hdW2ldID0gc2hpcDtcbiAgICAgIH1cbiAgICAgIHRoaXMuI2FkZFRyYWNrQWRqYWNlbnQoK3gsICt5ICsgc2hpcC5sZW5ndGgsIHZlcnRpY2FsKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQWRkIHNoaXAgaW50byBzaGlwIGNvbnRhaW5lclxuICAgIHRoaXMuc2hpcE1hcC5zZXQoc2hpcCwgY29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAoIUdhbWVib2FyZENvbnRyb2xsZXIuI2lzVmFsaWRDb29yZCh4LCB5KSkgcmV0dXJuIHsgZXhpdDogZmFsc2UgfTtcbiAgICBpZiAodGhpcy50cmFja0F0dGFja3MuaGFzKHt4OiAreCwgeTogK3l9KSkgcmV0dXJuIHsgZXhpdDogZmFsc2UgfTtcbiAgICB0aGlzLnRyYWNrQXR0YWNrcy5hZGQoe3g6ICt4LCB5OiAreX0pO1xuICAgIGlmICh0aGlzLmdhbWVib2FyZFsreF1bK3ldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgdGhpcy5nYW1lYm9hcmRbK3hdWyt5XS5oaXQoKTtcbiAgICAgIGlmICh0aGlzLmdhbWVib2FyZFsreF1bK3ldLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXhpdDogdHJ1ZSxcbiAgICAgICAgICB3YXRlcjogZmFsc2UsXG4gICAgICAgICAgc3VuazogdHJ1ZSxcbiAgICAgICAgICBjb29yZGluYXRlczogdGhpcy5zaGlwTWFwLmdldCh0aGlzLmdhbWVib2FyZFsreF1bK3ldKSxcbiAgICAgICAgICBhdHRhY2s6IHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5XG4gICAgICAgICAgfVxuICAgICAgICB9OyBcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGV4aXQ6IHRydWUsXG4gICAgICAgIHdhdGVyOiBmYWxzZSxcbiAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIGF0dGFjazoge1xuICAgICAgICAgIHgsXG4gICAgICAgICAgeVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXhpdDogdHJ1ZSxcbiAgICAgIHdhdGVyOiB0cnVlLFxuICAgICAgYXR0YWNrOiB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuIiwiaW1wb3J0IFBsYXllclR5cGUgZnJvbSBcIk1vZHVsZXMvcGxheWVyLXR5cGVcIjtcbmltcG9ydCBCb3REaWZmaWN1bHR5IGZyb20gXCJNb2R1bGVzL2JvdC1kaWZmaWN1bHR5XCI7XG5pbXBvcnQgQ29vcmRpbmF0ZVRyYWNrZXJTZXQgZnJvbSBcIk1vZHVsZXMvY29vcmRpbmF0ZS10cmFja2VyLXNldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBnYW1lYm9hcmQsIHR5cGUgPSBQbGF5ZXJUeXBlLmh1bWFuLCBkaWZmaWN1bHR5ID0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICBpZiAoKHR5cGUgIT09IFBsYXllclR5cGUuaHVtYW4pICYmICh0eXBlICE9PSBQbGF5ZXJUeXBlLmFpKSkgdGhyb3cgbmV3ICdJbnZhbGlkIGlucHV0JztcbiAgICBpZiAoIWdhbWVib2FyZCkgdGhyb3cgbmV3ICdJbnZhbGlkIGlucHV0JztcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIGlmICghZGlmZmljdWx0eSAmJiB0aGlzLnR5cGUgPT09IFBsYXllclR5cGUuYWkpIHRoaXMuZGlmZmljdWx0eSA9IEJvdERpZmZpY3VsdHkuZWFzeTtcbiAgICBlbHNlIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG4gICAgdGhpcy5zdGF0ZUFJID0ge1xuICAgICAgbGFzdFBvc2l0aW9uOiB1bmRlZmluZWQsXG4gICAgICBpc0hvcml6b250YWw6IHVuZGVmaW5lZCxcbiAgICAgIHRyYWNrQXR0YWNrczogbmV3IENvb3JkaW5hdGVUcmFja2VyU2V0KCksXG4gICAgICB0cmFja1Bvc2l0aW9uczogW11cbiAgICB9O1xuICB9XG5cbiAgZ2V0IE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWUgfVxuICBcbiAgZ2V0IEdhbWVCb2FyZCgpIHsgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkIH1cblxuICBwbGF5Um91bmQob3Bwb25lbnRHYW1lYm9hcmQsIHggPSB1bmRlZmluZWQsIHkgPSB1bmRlZmluZWQpIHtcbiAgICBpZiAoKHRoaXMudHlwZSA9PT0gUGxheWVyVHlwZS5odW1hbikgJiYgKCh4ID09PSB1bmRlZmluZWQpIHx8ICh5ID09PSB1bmRlZmluZWQpKSkgXG4gICAgICB0aHJvdyBuZXcgJ0ludmFsaWQgaW5wdXQnO1xuICAgIFxuICAgIGlmICh0aGlzLnR5cGUgPT09IFBsYXllclR5cGUuaHVtYW4pIHtcbiAgICAgIHJldHVybiBvcHBvbmVudEdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH0gXG4gICAgXG4gICAgcmV0dXJuIHRoaXMuI3BsYXlSb3VuZEFJKG9wcG9uZW50R2FtZWJvYXJkKTtcbiAgfVxuXG4gICNwbGF5Um91bmRBSShvcHBvbmVudEdhbWVib2FyZCkge1xuICAgIGNvbnN0IHtsYXN0UG9zaXRpb259ID0gdGhpcy5zdGF0ZUFJO1xuICAgIGNvbnN0IGF0dGFja3MgPSBbXTtcbiAgICBsZXQgcmVwbHk7XG4gICAgbGV0IHJhbmRvbSA9IGZhbHNlO1xuICAgIGxldCBwb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09IEJvdERpZmZpY3VsdHkubWVkaXVtKSB7XG4gICAgICBpZiAobGFzdFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmFuZG9tID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZUFJLnRyYWNrQXR0YWNrcy5oYXMoeyB4OiBsYXN0UG9zaXRpb24ueCwgeTogbGFzdFBvc2l0aW9uLnkgfSkpXG4gICAgICAgICAgYXR0YWNrcy5wdXNoKHsgeDogbGFzdFBvc2l0aW9uLngsIHk6IGxhc3RQb3NpdGlvbi55IH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlQUkuaXNIb3Jpem9udGFsID09PSB1bmRlZmluZWQgfHwgIXRoaXMuc3RhdGVBSS5pc0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuc3RhdGVBSS50cmFja0F0dGFja3MuaGFzKHsgeDogbGFzdFBvc2l0aW9uLnggLSAxLCB5OiBsYXN0UG9zaXRpb24ueSB9KSlcbiAgICAgICAgICAgIGF0dGFja3MucHVzaCh7IHg6IGxhc3RQb3NpdGlvbi54IC0gMSwgeTogbGFzdFBvc2l0aW9uLnkgfSk7XG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlQUkudHJhY2tBdHRhY2tzLmhhcyh7IHg6IGxhc3RQb3NpdGlvbi54ICsgMSwgeTogbGFzdFBvc2l0aW9uLnkgfSkpXG4gICAgICAgICAgICBhdHRhY2tzLnB1c2goeyB4OiBsYXN0UG9zaXRpb24ueCArIDEsIHk6IGxhc3RQb3NpdGlvbi55IH0pO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlQUkuaXNIb3Jpem9udGFsID09PSB1bmRlZmluZWQgfHwgdGhpcy5zdGF0ZUFJLmlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgIGlmICghdGhpcy5zdGF0ZUFJLnRyYWNrQXR0YWNrcy5oYXMoeyB4OiBsYXN0UG9zaXRpb24ueCwgeTogbGFzdFBvc2l0aW9uLnkgLSAxIH0pKVxuICAgICAgICAgICAgYXR0YWNrcy5wdXNoKHsgeDogbGFzdFBvc2l0aW9uLngsIHk6IGxhc3RQb3NpdGlvbi55IC0gMSB9KTtcbiAgICAgICAgICBpZiAoIXRoaXMuc3RhdGVBSS50cmFja0F0dGFja3MuaGFzKHsgeDogbGFzdFBvc2l0aW9uLngsIHk6IGxhc3RQb3NpdGlvbi55ICsgMSB9KSlcbiAgICAgICAgICAgIGF0dGFja3MucHVzaCh7IHg6IGxhc3RQb3NpdGlvbi54LCB5OiBsYXN0UG9zaXRpb24ueSArIDEgfSk7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYgKGF0dGFja3MubGVuZ3RoID09PSAwKSByYW5kb20gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvIHtcbiAgICAgIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09IEJvdERpZmZpY3VsdHkuZWFzeSB8fCByYW5kb20pIHtcbiAgICAgICAgcG9zaXRpb24gPSB7IFxuICAgICAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wcG9uZW50R2FtZWJvYXJkLmJvYXJkU2l6ZSksXG4gICAgICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3Bwb25lbnRHYW1lYm9hcmQuYm9hcmRTaXplKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlIGBzdGF0ZUFJYCB0byBldmFsdWF0ZSBCT1QgZGlmZmljdWx0eSAocmVtZW1iZXIgc3RhdGUpXG4gICAgICAgIHBvc2l0aW9uID0gYXR0YWNrcy5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgcmVwbHkgPSBvcHBvbmVudEdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgICAgdGhpcy5zdGF0ZUFJLnRyYWNrQXR0YWNrcy5hZGQocG9zaXRpb24pO1xuICAgIH0gd2hpbGUgKCFyZXBseS5leGl0KTtcblxuICAgIGlmIChyZXBseS5zdW5rKSB7XG4gICAgICB0aGlzLnN0YXRlQUkubGFzdFBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zdGF0ZUFJLmlzSG9yaXpvbnRhbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc3RhdGVBSS50cmFja1Bvc2l0aW9ucyA9IFtdO1xuICAgIH0gZWxzZSBpZiAoIXJlcGx5LndhdGVyKSB7XG4gICAgICB0aGlzLnN0YXRlQUkuaXNIb3Jpem9udGFsID0gdGhpcy5zdGF0ZUFJLmxhc3RQb3NpdGlvbiAhPT0gdW5kZWZpbmVkID8gKHRoaXMuc3RhdGVBSS5sYXN0UG9zaXRpb24ueCAtIHBvc2l0aW9uLngpID09PSAwIFxuICAgICAgICA6IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZUFJLmxhc3RQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjayA9IGF0dGFja3NbaV07XG4gICAgICAgIGlmICh0aGlzLnN0YXRlQUkuaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgaWYgKChhdHRhY2sueCAtIHBvc2l0aW9uLngpID09PSAwKSB0aGlzLnN0YXRlQUkudHJhY2tQb3NpdGlvbnMucHVzaChhdHRhY2spO1xuICAgICAgICB9IGVsc2UgaWYgKChhdHRhY2sueSAtIHBvc2l0aW9uLnkpID09PSAwKSB0aGlzLnN0YXRlQUkudHJhY2tQb3NpdGlvbnMucHVzaChhdHRhY2spO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVBSS50cmFja1Bvc2l0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIHdhdGVyXG4gICAgICB0aGlzLnN0YXRlQUkubGFzdFBvc2l0aW9uID0gdGhpcy5zdGF0ZUFJLnRyYWNrUG9zaXRpb25zLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGx5O1xuICB9XG59O1xuIiwiY29uc3QgQm90RGlmZmljdWx0eSA9IHtcbiAgbWVkaXVtOiAnbWVkaXVtJyxcbiAgZWFzeTogJ2Vhc3knXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb3REaWZmaWN1bHR5OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb3JkaW5hdGVUcmFja2VyU2V0IGV4dGVuZHMgU2V0IHtcbiAgc3RhdGljICNjaGVja1BhcmFtZXRlcihvYmopIHtcbiAgICBpZiAoISh0eXBlb2Yob2JqKSA9PT0gJ29iamVjdCcpKSB0aHJvdyBuZXcgJ0ludmFsaWQgaW5wdXQnOyBcbiAgICBpZiAob2JqLnggPT09IHVuZGVmaW5lZCB8fCBvYmoueSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgJ0ludmFsaWQgaW5wdXQnOyBcbiAgfVxuXG4gIGFkZChvYmopIHtcbiAgICBDb29yZGluYXRlVHJhY2tlclNldC4jY2hlY2tQYXJhbWV0ZXIob2JqKTtcbiAgICBpZiAoIXRoaXMuaGFzKG9iaikpIHN1cGVyLmFkZChvYmopO1xuICB9XG5cbiAgZGVsZXRlKG9iaikge1xuICAgIENvb3JkaW5hdGVUcmFja2VyU2V0LiNjaGVja1BhcmFtZXRlcihvYmopO1xuXG4gICAgc3VwZXIuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGlmICgodmFsdWUueCA9PT0gb2JqLngpICYmICh2YWx1ZS55ID09PSBvYmoueSkpIHtcbiAgICAgICAgc3VwZXIuZGVsZXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhcyhvYmopIHtcbiAgICBsZXQgZXhpdCA9IGZhbHNlO1xuICAgIENvb3JkaW5hdGVUcmFja2VyU2V0LiNjaGVja1BhcmFtZXRlcihvYmopO1xuICAgIGlmIChzdXBlci5oYXMob2JqKSkgcmV0dXJuIHRydWU7XG5cbiAgICBzdXBlci5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFleGl0ICYmICgodmFsdWUueCA9PT0gb2JqLngpICYmICh2YWx1ZS55ID09PSBvYmoueSkpKSBleGl0ID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBleGl0O1xuICB9XG59IiwiY29uc3QgUGxheWVyVHlwZSA9IHtcbiAgaHVtYW46ICdodW1hbicsXG4gIGFpOiAnYm90J1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyVHlwZTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgaWYgKE51bWJlci5pc05hTigrbGVuZ3RoKSkgdGhyb3cgbmV3ICdJbnZhbGlkIGlucHV0JztcbiAgICBpZiAoK2xlbmd0aCA8IDEgfHwgK2xlbmd0aCA+IDUpIHRocm93IG5ldyAnSW52YWxpZCBvdXQtb2YtcmFuZ2UnO1xuXG4gICAgdGhpcy5sZW5ndGggPSArbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGg7XG4gIH1cbn07XG4iLCJpbXBvcnQgRG9tTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvZG9tLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25NYW5hZ2VyIHtcbiAgc3RhdGljIGNyZWF0ZUJ1dHRvbihidG5UZXh0ID0gJycsIHN2Z0ljb25GaWxlTmFtZSA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGwsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBidG4gPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnYnV0dG9uJywgY2xhc3NOYW1lIHx8ICduYXZCdXR0b24nKTtcbiAgICAvLyBJbnNlcnQgaWNvbiB3aGVuIGV4aXN0XG4gICAgaWYoc3ZnSWNvbkZpbGVOYW1lKSB7XG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGVJbWcoc3ZnSWNvbkZpbGVOYW1lLCBidG5UZXh0LCBidG4sICdpY29uJyk7XG4gICAgfVxuICAgIC8vIEFkZCB0ZXh0IHdoZW4gY29udGFpbnMgc29tZXRoaW5nXG4gICAgaWYoYnRuVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBidG4sIG51bGwsIG51bGwsIGJ0blRleHQpO1xuICAgIH1cbiAgICAvLyBBZGQgYnV0dG9uIGV2ZW50XG4gICAgYnRuLm9uY2xpY2sgPSBjYkV2ZW50O1xuICAgIHJldHVybiBidG47ICBcbiAgfVxuXG4gIHN0YXRpYyBlZGl0QnV0dG9uVGV4dChidG4sIHRleHQgPSAnJykge1xuICAgIGNvbnN0IGJ0blRleHQgPSBidG4ucXVlcnlTZWxlY3RvcigncCcpO1xuICAgIGlmKGJ0blRleHQpIHtcbiAgICAgIC8qIFJlbW92ZSBvciBlZGl0IHRleHQgKi9cbiAgICAgIGlmKHRleHQgPT09ICcnKSB7XG4gICAgICAgIGJ0blRleHQucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG5UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodGV4dC5sZW5ndGggPiAwKSB7IC8qIENyZWF0ZSBub2RlICovXG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBidG4sIG51bGwsIG51bGwsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlZGl0QnV0dG9uSW1hZ2UoYnRuLCBzdmdJY29uRmlsZU5hbWUgPSBudWxsKSB7XG4gICAgY29uc3QgYnRuVGV4dCAgICA9IGJ0bi5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgY29uc3QgYnRuSW1nTm9kZSA9IGJ0bi5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuICAgIGlmKGJ0bkltZ05vZGUpIHtcbiAgICAgIGlmKCFzdmdJY29uRmlsZU5hbWUpIHtcbiAgICAgICAgYnRuSW1nTm9kZS5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIERvbU1hbmFnZXIudXBkYXRlTm9kZUltZyhzdmdJY29uRmlsZU5hbWUsIGJ0bkltZ05vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihzdmdJY29uRmlsZU5hbWUpIHsgLy8gSW5zZXJ0IGljb24gd2hlbiBleGlzdFxuICAgICAgY29uc3QgYWx0VGV4dCA9IGJ0blRleHQgPyBidG5UZXh0LnRleHRDb250ZW50IDogJyc7XG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGVJbWcoc3ZnSWNvbkZpbGVOYW1lLCBhbHRUZXh0LCBidG4sICdpY29uJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUltYWdlQnV0dG9uKHN2Z0ljb25GaWxlTmFtZSwgY2xhc3NOYW1lID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBCdXR0b25NYW5hZ2VyLmNyZWF0ZUJ1dHRvbignJywgc3ZnSWNvbkZpbGVOYW1lLCBjbGFzc05hbWUsIGNiRXZlbnQpXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVGV4dEJ1dHRvbihidG5UZXh0LCBjbGFzc05hbWUgPSBudWxsLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIEJ1dHRvbk1hbmFnZXIuY3JlYXRlQnV0dG9uKGJ0blRleHQsIG51bGwsIGNsYXNzTmFtZSwgY2JFdmVudClcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJbWFnZUxpbmtCdXR0b24obGluaywgc3ZnSWNvbkZpbGVOYW1lKSB7XG4gICAgY29uc3Qgbm9kZSA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZUxpbmsobGluaywgbnVsbCwgbnVsbCwgbnVsbCwgXG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVJbWcoc3ZnSWNvbkZpbGVOYW1lLCAnaW1hZ2VMaW5rJywgJ2ljb24tbGluaycpXG4gICAgKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuIiwiXG5jb25zdCBpbWFnZVBhdGggPSAnLi9pbWFnZXMvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tTWFuYWdlciB7XG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XG4gIHN0YXRpYyAjaXNFbGVtZW50KG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy8gRE9NMlxuICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWU9PT1cInN0cmluZ1wiXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIC8vIEFkZCBjbGFzcyBuYW1lIG9yIElEXG4gICAgaWYoY2xhc3NOYW1lKSBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBpZihpZCkgZWxlbS5pZCA9IGlkO1xuICAgIC8vIEFkZCB0ZXh0IGNvbnRlbnRcbiAgICBpZihjb250ZW50KSBlbGVtLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAvLyBFdmVudHVhbGx5IGFkZCBjaGlsZCBvciBjaGlsZHJlblxuICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGVsZW0sIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlQ29udGVudCh0eXBlLCBjb250ZW50LCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVDbGFzcyh0eXBlLCBjbGFzc05hbWUsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVJRCh0eXBlLCBpZCwgY2xhc3NOYW1lID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBsb2NhbCA9IHRydWUpIHtcbiAgICBjb25zdCBmaWxlRnVsbFBhdGggPSBsb2NhbCA/IGltYWdlUGF0aCArIGltZ0ZpbGVOYW1lIDogaW1nRmlsZU5hbWU7IC8vIGxvY2FsIHBhdGggb3IgdXJsXG4gICAgY29uc3Qgbm9kZSA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZSgnaW1nJywgY2xhc3NOYW1lLCBpZCwgbnVsbCwgbnVsbCk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVGdWxsUGF0aCk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm9kZUltZ0NsYXNzKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQgPSBudWxsLCBsb2NhbCA9IHRydWUpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQsIGxvY2FsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlSW1nSUQoaW1nRmlsZU5hbWUsIGFsdCwgaWQsIGNsYXNzTmFtZSA9IG51bGwsIGxvY2FsID0gdHJ1ZSkge1xuICAgIHJldHVybiBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCwgbG9jYWwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVMaW5rKGxpbmssIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAgIGNvbnN0IG5vZGUgPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGUoJ2EnLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbik7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBsaW5rKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGFkZE5vZGVDaGlsZChmYXRoZXIsIGNoaWxkcmVuKSB7XG4gICAgaWYoY2hpbGRyZW4pIHtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7IC8vIENvbnRhaW5zIG1vcmUgdGhhbiBvbmUgY2hpbGQgaW4gQXJyYXlcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYoRG9tTWFuYWdlci4jaXNFbGVtZW50KGNoaWxkcmVuKSkgeyAvLyBDb250YWlucyBqdXN0IG9uZSBjaGlsZFxuICAgICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVBZGROb2RlKHR5cGUsIGZhdGhlciwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gICAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgICBjb25zdCBub2RlID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIGNoaWxkcmVuKTtcbiAgICBmYXRoZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQWRkTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBmYXRoZXIsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgbG9jYWwgPSB0cnVlKSB7XG4gICAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgICBjb25zdCBub2RlID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQsIGxvY2FsKTtcbiAgICBmYXRoZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTm9kZUltZ0J5U2VsZWN0b3IoaW1nRmlsZU5hbWUsIGZhdGhlciwgc2VsZWN0b3IsIGxvY2FsID0gdHJ1ZSkge1xuICAgIGNvbnN0IGltZ05vZGUgPSBmYXRoZXIucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgdXJsID0gbG9jYWwgPyBpbWFnZVBhdGggKyBpbWdGaWxlTmFtZSA6IGltZ0ZpbGVOYW1lO1xuICAgIGlmKGltZ05vZGUpIGltZ05vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGltZ05vZGUsIGxvY2FsID0gdHJ1ZSkge1xuICAgIGNvbnN0IHVybCA9IGxvY2FsID8gaW1hZ2VQYXRoICsgaW1nRmlsZU5hbWUgOiBpbWdGaWxlTmFtZTtcbiAgICBpZihpbWdOb2RlKSBpbWdOb2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlSGlkZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xuICB9XG5cbiAgc3RhdGljIHRvZ2dsZURpc3BsYXlCeU5vZGUobm9kZSwgbmV4dERpc3BsYXkgPSB1bmRlZmluZWQpIHtcbiAgICBpZihub2RlKSB7XG4gICAgICBpZihub2RlLmRhdGFzZXQucHJldkRpc3BsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLmRhdGFzZXQucHJldkRpc3BsYXkgPSBuZXh0RGlzcGxheSB8fCBub2RlLnN0eWxlLmRpc3BsYXk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcmV2RGlzcGxheSA9IG5vZGUuc3R5bGUuZGlzcGxheTtcbiAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IChub2RlLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykgPyAnbm9uZScgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBub2RlLmRhdGFzZXQucHJldkRpc3BsYXk7XG4gICAgICBub2RlLmRhdGFzZXQucHJldkRpc3BsYXkgPSBwcmV2RGlzcGxheTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlRGlzcGxheShub2RlTmFtZSwgbmV4dERpc3BsYXkgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihub2RlTmFtZSk7XG4gICAgRG9tTWFuYWdlci50b2dnbGVEaXNwbGF5QnlOb2RlKG5vZGUsIG5leHREaXNwbGF5KTtcbiAgfVxufVxuIiwiaW1wb3J0IERvbU1hbmFnZXIgZnJvbSAnVXRpbGl0aWVzL2RvbS1tYW5hZ2VyJztcbmltcG9ydCBCdXR0b25NYW5hZ2VyIGZyb20gJ1V0aWxpdGllcy9idXR0b24tbWFuYWdlcic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcbiAgc3RhdGljIGNyZWF0ZUVkaXRUZXh0KGVkaXRUZXh0SUQsIHBsYWNlSG9sZGVyVGV4dCwgbGFiZWxUZXh0ID0gbnVsbCwgcmVxdWlyZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgbUxhYmVsID0gbGFiZWxUZXh0ID8gRG9tTWFuYWdlci5jcmVhdGVOb2RlQ29udGVudCgnbGFiZWwnLCBsYWJlbFRleHQpIDogbnVsbDtcbiAgICBjb25zdCBtSW5wdXQgPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVJRCgnaW5wdXQnLCBlZGl0VGV4dElEKTtcbiAgICBtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBtSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlSG9sZGVyVGV4dCk7XG4gICAgbUlucHV0LnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgLyogU2V0IGxhYmVsIHdoZW4gbm9kZSBleGlzdHMgKi9cbiAgICBpZihtTGFiZWwpIHtcbiAgICAgIGlmKHJlcXVpcmVkKSB7XG4gICAgICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnc3BhbicsIG1MYWJlbCwgJ3JlcXVpcmVkJywgbnVsbCwgJyonKTtcbiAgICAgIH1cbiAgICAgIG1MYWJlbC5odG1sRm9yID0gZWRpdFRleHRJRDtcbiAgICAgIG1JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBlZGl0VGV4dElEKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGFiZWw6IG1MYWJlbCwgaW5wdXQ6IG1JbnB1dCB9O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZURhdGUoZGF0ZUlELCBsYWJlbFRleHQgPSBudWxsLCBzdGFydEZyb21Ub2RheSA9IHRydWUsIHJlcXVpcmVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1MYWJlbCA9IGxhYmVsVGV4dCA/IERvbU1hbmFnZXIuY3JlYXRlTm9kZUNvbnRlbnQoJ2xhYmVsJywgbGFiZWxUZXh0KSA6IG51bGw7XG4gICAgY29uc3QgbUlucHV0ID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlSUQoJ2lucHV0JywgZGF0ZUlEKTtcbiAgICBtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBtSW5wdXQucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICAvKiBTZXQgbWluaW11bSBkYXRlICovXG4gICAgaWYoc3RhcnRGcm9tVG9kYXkpIHtcbiAgICAgIG1JbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpKTtcbiAgICB9XG4gICAgLyogU2V0IGxhYmVsIHdoZW4gbm9kZSBleGlzdHMgKi9cbiAgICBpZihtTGFiZWwpIHtcbiAgICAgIG1MYWJlbC5odG1sRm9yID0gZGF0ZUlEO1xuICAgICAgbUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGVJRCk7XG4gICAgfVxuICAgIHJldHVybiB7IGxhYmVsOiBtTGFiZWwsIGlucHV0OiBtSW5wdXQgfTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDaGVja0JveChjaGVja0JveElELCBsYWJlbFRleHQgPSBudWxsLCBjYkV2ZW50ID0gdW5kZWZpbmVkLCBpc0NoZWNrZWQgPSBmYWxzZSwgcmVxdWlyZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IG1MYWJlbCA9IGxhYmVsVGV4dCA/IERvbU1hbmFnZXIuY3JlYXRlTm9kZUNvbnRlbnQoJ2xhYmVsJywgbGFiZWxUZXh0KSA6IG51bGw7XG4gICAgY29uc3QgbUlucHV0ID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlSUQoJ2lucHV0JywgY2hlY2tCb3hJRCk7XG4gICAgbUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIG1JbnB1dC5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICAgIG1JbnB1dC5jaGVja2VkID0gaXNDaGVja2VkO1xuICAgIC8qIFNldCBsYWJlbCB3aGVuIG5vZGUgZXhpc3RzICovXG4gICAgaWYobUxhYmVsKSB7XG4gICAgICBtTGFiZWwuaHRtbEZvciA9IGNoZWNrQm94SUQ7XG4gICAgICBtSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgY2hlY2tCb3hJRCk7XG4gICAgfVxuICAgIC8qIEFkZCBjYiBldmVudCAqL1xuICAgIGlmKGNiRXZlbnQpIHtcbiAgICAgIG1JbnB1dC5vbmNsaWNrID0gY2JFdmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGFiZWw6IG1MYWJlbCwgaW5wdXQ6IG1JbnB1dCB9O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUJ1dHRvbihidG5JRCwgYnRuVGV4dCA9ICcnLCBzdmdJY29uRmlsZU5hbWUgPSBudWxsLCBjbGFzc05hbWUgPSBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiRXZlbnQgPSB1bmRlZmluZWQsIGZvcm1JdGVtID0gbnVsbCwgbGFiZWxUZXh0ID0gbnVsbCwgcmVxdWlyZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IG1MYWJlbCA9IGxhYmVsVGV4dCA/IERvbU1hbmFnZXIuY3JlYXRlTm9kZUNvbnRlbnQoJ2xhYmVsJywgbGFiZWxUZXh0KSA6IG51bGw7XG4gICAgY29uc3QgbUlucHV0ID0gQnV0dG9uTWFuYWdlci5jcmVhdGVCdXR0b24oYnRuVGV4dCwgc3ZnSWNvbkZpbGVOYW1lLCBjbGFzc05hbWUsICghZm9ybUl0ZW0gPyBjYkV2ZW50IDogdW5kZWZpbmVkKSk7XG4gICAgbUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICghZm9ybUl0ZW0gPyAnYnV0dG9uJyA6ICdzdWJtaXQnKSk7XG4gICAgbUlucHV0LnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgLyogU2V0IG9uc3VibWl0IGZvciBzdWJtaXQgYnV0dG9uICovXG4gICAgaWYoKGZvcm1JdGVtKSAmJiAoY2JFdmVudCkpIHtcbiAgICAgIGZvcm1JdGVtLm9uc3VibWl0ID0gY2JFdmVudDtcbiAgICB9XG4gICAgLyogU2V0IGxhYmVsIHdoZW4gbm9kZSBleGlzdHMgKi9cbiAgICBpZihtTGFiZWwpIHtcbiAgICAgIG1MYWJlbC5odG1sRm9yID0gYnRuSUQ7XG4gICAgICBtSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYnRuSUQpO1xuICAgIH1cbiAgICByZXR1cm4geyBsYWJlbDogbUxhYmVsLCBpbnB1dDogbUlucHV0IH07XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSW1hZ2VCdXR0b24oYnRuSUQsIHN2Z0ljb25GaWxlTmFtZSwgY2xhc3NOYW1lID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSXRlbSA9IG51bGwsIGxhYmVsVGV4dCA9IG51bGwsIHJlcXVpcmVkID0gZmFsc2UpIHtcbiAgICByZXR1cm4gSW5wdXRNYW5hZ2VyLmNyZWF0ZUJ1dHRvbihidG5JRCwgJycsIHN2Z0ljb25GaWxlTmFtZSwgY2xhc3NOYW1lLCBjYkV2ZW50LCBmb3JtSXRlbSwgbGFiZWxUZXh0LCByZXF1aXJlZCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVGV4dEJ1dHRvbihidG5JRCwgYnRuVGV4dCwgY2xhc3NOYW1lID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUl0ZW0gPSBudWxsLCBsYWJlbFRleHQgPSBudWxsLCByZXF1aXJlZCA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIElucHV0TWFuYWdlci5jcmVhdGVCdXR0b24oYnRuSUQsIGJ0blRleHQsIG51bGwsIGNsYXNzTmFtZSwgY2JFdmVudCwgZm9ybUl0ZW0sIGxhYmVsVGV4dCwgcmVxdWlyZWQpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVN3aXRjaEJ1dHRvbihzd2l0Y2hJRCwgaXNSb3VuZFN3aXRjaCA9IGZhbHNlLCBsYWJlbFRleHQgPSBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiRXZlbnQgPSB1bmRlZmluZWQsIGlzQ2hlY2tlZCA9IGZhbHNlLCByZXF1aXJlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgbGFiZWxTd2l0Y2ggPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGUoJ2xhYmVsJywgJ3N3aXRjaCcpO1xuICAgIGNvbnN0IGNoZWNrQm94ID0gSW5wdXRNYW5hZ2VyLmNyZWF0ZUNoZWNrQm94KHN3aXRjaElELCBsYWJlbFRleHQsIGNiRXZlbnQsIGlzQ2hlY2tlZCwgcmVxdWlyZWQpO1xuICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGxhYmVsU3dpdGNoLCBjaGVja0JveC5pbnB1dCk7ICAgICAgXG4gICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdzcGFuJywgbGFiZWxTd2l0Y2gsIChpc1JvdW5kU3dpdGNoID8gJ3NsaWRlciByb3VuZCcgOiAnc2xpZGVyJykpO1xuICAgIHJldHVybiB7IGxhYmVsOiBjaGVja0JveC5sYWJlbCwgaW5wdXQ6IGxhYmVsU3dpdGNoLCBjaGVja2JveDogY2hlY2tCb3guaW5wdXQgfTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVSYWRpbyhyYWRpb0lELCB2YWx1ZSwgbGFiZWxUZXh0ID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCwgaXNDaGVja2VkID0gZmFsc2UsIHJlcXVpcmVkID0gZmFsc2UpIHtcbiAgICBjb25zdCBtTGFiZWwgPSBsYWJlbFRleHQgPyBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVDb250ZW50KCdsYWJlbCcsIGxhYmVsVGV4dCkgOiBudWxsO1xuICAgIGNvbnN0IG1JbnB1dCA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZUlEKCdpbnB1dCcsIHJhZGlvSUQpO1xuICAgIG1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBtSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcbiAgICBtSW5wdXQucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICBtSW5wdXQuY2hlY2tlZCA9IGlzQ2hlY2tlZDtcbiAgICAvKiBTZXQgbGFiZWwgd2hlbiBub2RlIGV4aXN0cyAqL1xuICAgIGlmKG1MYWJlbCkge1xuICAgICAgbUxhYmVsLmh0bWxGb3IgPSByYWRpb0lEO1xuICAgICAgbUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHJhZGlvSUQpO1xuICAgIH1cbiAgICAvKiBBZGQgY2IgZXZlbnQgKi9cbiAgICBpZihjYkV2ZW50KSB7XG4gICAgICBtSW5wdXQub25jbGljayA9IGNiRXZlbnQ7XG4gICAgfVxuICAgIHJldHVybiB7IGxhYmVsOiBtTGFiZWwsIGlucHV0OiBtSW5wdXQgfTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVSYWRpb0J1dHRvbihyYWRpb0lELCB2YWx1ZSwgbGFiZWxUZXh0ID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCwgaXNDaGVja2VkID0gZmFsc2UsIHJlcXVpcmVkID0gZmFsc2UpIHtcbiAgICBjb25zdCBtTGFiZWwgPSBsYWJlbFRleHQgPyBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVDb250ZW50KCdsYWJlbCcsIGxhYmVsVGV4dCkgOiBudWxsO1xuICAgIGNvbnN0IHJhZGlvQnRuID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnLCAncmFkaW8tYnRuJyk7XG4gICAgY29uc3QgcmFkaW8gPSBJbnB1dE1hbmFnZXIuY3JlYXRlUmFkaW8ocmFkaW9JRCwgdmFsdWUsIHZhbHVlLCBjYkV2ZW50LCBpc0NoZWNrZWQsIHJlcXVpcmVkKTtcbiAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChyYWRpb0J0biwgcmFkaW8uaW5wdXQpOyAgXG4gICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQocmFkaW9CdG4sIHJhZGlvLmxhYmVsKTsgIFxuICAgIC8qIFNldCBsYWJlbCB3aGVuIG5vZGUgZXhpc3RzICovXG4gICAgaWYobUxhYmVsKSB7XG4gICAgICBtTGFiZWwuaHRtbEZvciA9IHJhZGlvSUQ7XG4gICAgfVxuICAgIHJldHVybiB7IGxhYmVsOiBtTGFiZWwsIGlucHV0OiByYWRpb0J0biwgcmFkaW86IHJhZGlvLmlucHV0IH07XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlU2VsZWN0KHNlbGVjdElELCB2YWx1ZXMsIHNlbGVjdGVkVmFsdWUgPSBudWxsLCBsYWJlbFRleHQgPSBudWxsLCByZXF1aXJlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgbUxhYmVsID0gbGFiZWxUZXh0ID8gRG9tTWFuYWdlci5jcmVhdGVOb2RlQ29udGVudCgnbGFiZWwnLCBsYWJlbFRleHQpIDogbnVsbDtcbiAgICBjb25zdCBtSW5wdXQgPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVJRCgnc2VsZWN0Jywgc2VsZWN0SUQpO1xuICAgIG1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCh2ID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZUNvbnRlbnQoJ29wdGlvbicsIHYpO1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2KTtcbiAgICAgIGlmKHNlbGVjdGVkVmFsdWUgJiYgdiA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgfVxuICAgICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQobUlucHV0LCBvcHRpb24pO1xuICAgIH0pO1xuICAgIG1JbnB1dC5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICAgIG1JbnB1dC5kaXNhYmxlZCA9ICEodmFsdWVzLmxlbmd0aCA+IDEpO1xuICAgIC8qIFNldCBsYWJlbCB3aGVuIG5vZGUgZXhpc3RzICovXG4gICAgaWYobUxhYmVsKSB7XG4gICAgICBtTGFiZWwuaHRtbEZvciA9IHNlbGVjdElEO1xuICAgICAgbUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIHNlbGVjdElEKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGFiZWw6IG1MYWJlbCwgaW5wdXQ6IG1JbnB1dCB9O1xuICB9XG59XG4iLCJcbmltcG9ydCAnU3ZnL2hvbWUtb3V0bGluZS5zdmcnO1xuaW1wb3J0ICdTdmcvZ2l0aHViLnN2Zyc7XG5pbXBvcnQgJ1N2Zy9kYXJrLXRoZW1lLnN2Zyc7XG5pbXBvcnQgJ1N2Zy9saWdodC10aGVtZS5zdmcnO1xuaW1wb3J0IERvbU1hbmFnZXIgZnJvbSAnVXRpbGl0aWVzL2RvbS1tYW5hZ2VyJztcbmltcG9ydCBCdXR0b25NYW5hZ2VyIGZyb20gJ1V0aWxpdGllcy9idXR0b24tbWFuYWdlcic7XG5pbXBvcnQgVWlHYW1lQ29udHJvbGxlciBmcm9tICdWaWV3L3VpLWdhbWUtY29udHJvbGxlcic7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHsgdGhlbWU6ICdkYXJrJyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVpR2FtZUNvbnRyb2xsZXIgPSBuZXcgVWlHYW1lQ29udHJvbGxlcigpO1xuICB9XG5cbiAgI2RvTG9hZEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gICAgXG4gICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQoaGVhZGVyLCBCdXR0b25NYW5hZ2VyLmNyZWF0ZUltYWdlQnV0dG9uKCdob21lLW91dGxpbmUuc3ZnJywgJ2hlYWRlci1idXR0b24nLCAoKSA9PiB7XG4gICAgICB0aGlzLiNkb0NyZWF0ZUhvbWUoKTtcbiAgICB9KSk7XG5cbiAgICBjb25zdCBidG5Ub2dnbGVUaGVtZSA9IEJ1dHRvbk1hbmFnZXIuY3JlYXRlSW1hZ2VCdXR0b24oYCR7c2V0dGluZ3MudGhlbWV9LXRoZW1lLnN2Z2AsICdoZWFkZXItYnV0dG9uJywgKCkgPT4ge1xuICAgICAgc2V0dGluZ3MudGhlbWUgPSAoc2V0dGluZ3MudGhlbWUgIT09ICdkYXJrJyA/ICdkYXJrJyA6ICdsaWdodCcpO1xuICAgICAgQnV0dG9uTWFuYWdlci5lZGl0QnV0dG9uSW1hZ2UoYnRuVG9nZ2xlVGhlbWUsIGAke3NldHRpbmdzLnRoZW1lfS10aGVtZS5zdmdgKTtcbiAgICAgIHJvb3QuY2xhc3NOYW1lID0gc2V0dGluZ3MudGhlbWU7XG4gICAgfSk7XG5cbiAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChoZWFkZXIsIGJ0blRvZ2dsZVRoZW1lKTtcbiAgfVxuXG4gICNkb0NyZWF0ZUhvbWUoKSB7XG4gICAgdGhpcy51aUdhbWVDb250cm9sbGVyLmRvUmVzZXRHYW1lKCk7XG4gIH1cblxuICAjZG9Mb2FkT3ZlcmxheSgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcbiAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIG92ZXJsYXksICdvdmVybGF5LXBvcHVwJyk7XG4gICAgLy8gSGlkZSBvdmVybGF5XG4gICAgdGhpcy51aUdhbWVDb250cm9sbGVyLmRvQ3JlYXRlR2FtZU92ZXJsYXkoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgaWYoZS50YXJnZXQuaWQgPT09ICdvdmVybGF5JykgeyAvLyBDbG9zZSBvdmVybGF5XG4gICAgICAgIHRoaXMudWlHYW1lQ29udHJvbGxlci5kb1Jlc2V0R2FtZSgpO1xuICAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gICNkb0xvYWRNYWluQ29udGVudCgpIHtcbiAgICB0aGlzLiNkb0NyZWF0ZUhvbWUoKTtcbiAgfVxuXG4gIHN0YXRpYyAjZG9Mb2FkRm9vdGVyKCkge1xuICAgIGNvbnN0IGN1clllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcbiAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBmb290ZXIsIG51bGwsIG51bGwsIGBDb3B5cmlnaHQgwqkgJHtjdXJZZWFyfSBBbGVzc2FuZHJvIENlbG90dGlgKTtcbiAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChmb290ZXIsIEJ1dHRvbk1hbmFnZXIuY3JlYXRlSW1hZ2VMaW5rQnV0dG9uKCdodHRwczovL2dpdGh1Yi5jb20vY2VsOCcsICdnaXRodWIuc3ZnJykpO1xuICB9XG5cbiAgZG9Mb2FkVUkoKSB7XG4gICAgLy8gU2V0IG1haW4gcm9vdCB0aGVtZVxuICAgIHJvb3QuY2xhc3NOYW1lID0gc2V0dGluZ3MudGhlbWU7XG4gICAgdGhpcy4jZG9Mb2FkSGVhZGVyKCk7XG4gICAgdGhpcy4jZG9Mb2FkT3ZlcmxheSgpO1xuICAgIHRoaXMuI2RvTG9hZE1haW5Db250ZW50KCk7XG4gICAgVWlDb250cm9sbGVyLiNkb0xvYWRGb290ZXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJ1dHRvbk1hbmFnZXIgZnJvbSBcIlV0aWxpdGllcy9idXR0b24tbWFuYWdlclwiO1xuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tIFwiVXRpbGl0aWVzL2lucHV0LW1hbmFnZXJcIjtcbmltcG9ydCBEb21NYW5hZ2VyIGZyb20gXCJVdGlsaXRpZXMvZG9tLW1hbmFnZXJcIjtcbmltcG9ydCBCb3REaWZmaWN1bHR5IGZyb20gXCJNb2R1bGVzL2JvdC1kaWZmaWN1bHR5XCI7XG5pbXBvcnQgUGxheWVyVHlwZSBmcm9tIFwiTW9kdWxlcy9wbGF5ZXItdHlwZVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiQ29udHJvbGxlci9wbGF5ZXItY29udHJvbGxlclwiO1xuaW1wb3J0IEdhbWVib2FyZENvbnRyb2xsZXIgZnJvbSBcIkNvbnRyb2xsZXIvZ2FtZWJvYXJkLWNvbnRyb2xsZXJcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzJztcbmltcG9ydCAnU3ZnL2FjY291bnQtbXVsdGlwbGUtb3V0bGluZS5zdmcnO1xuaW1wb3J0ICdTdmcvcm9ib3QtYW5ncnktb3V0bGluZS5zdmcnO1xuaW1wb3J0IFNoaXAgZnJvbSBcIk1vZHVsZXMvc2hpcFwiO1xuXG5jb25zdCBwaGFzZXMgPSB7XG4gIHJlc3Q6ICAgICAgICAgIDAsXG4gIGNyZWF0ZVBsYXllckE6IDEsXG4gIGNyZWF0ZVBsYXllckI6IDIsXG4gIHByZXBhcmVCb2FyZHM6IDMsXG4gIHdhaXRSb3VuZDogICAgIDQsXG4gIHBsYXlBOiAgICAgICAgIDUsXG4gIHBsYXlCOiAgICAgICAgIDYsXG4gIHdpbm5lcjogICAgICAgIDdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpR2FtZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNpbml0R2FtZVZhcmlhYmxlcygpO1xuICB9XG5cbiAgI2luaXRHYW1lVmFyaWFibGVzKCkge1xuICAgIHRoaXMuc3RlcFBoYXNlID0gcGhhc2VzLnJlc3Q7XG4gICAgdGhpcy5wbGF5ZXJBID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBvYmplY3Q6IHVuZGVmaW5lZCxcbiAgICAgIGh1bWFuOiB0cnVlXG4gICAgfTtcbiAgICB0aGlzLnBsYXllckIgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGRpZmZpY3VsdHk6IHVuZGVmaW5lZCxcbiAgICAgIGh1bWFuOiBmYWxzZSxcbiAgICAgIG9iamVjdDogdW5kZWZpbmVkXG4gICAgfTtcbiAgICB0aGlzLmRlc1BsYWNlU2hpcCA9IHtcbiAgICAgIGxlbmd0aHM6IFsgMSwgMSwgMSwgMiwgMiwgMywgMywgNCwgNSBdLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHZlcnRpY2FsOiB0cnVlXG4gICAgfTtcbiAgICB0aGlzLnByZXZpb3VzSG92ZXIgPSB7XG4gICAgICBsZW5ndGg6IDAsXG4gICAgICB2YWxpZDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5jdXJQbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY29yZSA9IHtcbiAgICAgIGE6IDAsXG4gICAgICBiOiAwLFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyAjaGlkZU92ZXJsYXkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XG4gICAgaWYgKG92ZXJsYXkuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSBEb21NYW5hZ2VyLnRvZ2dsZURpc3BsYXlCeU5vZGUob3ZlcmxheSk7XG4gICAgVWlHYW1lQ29udHJvbGxlci4jZG9SZW1vdmVPdmVybGF5KCk7XG4gIH1cblxuICBzdGF0aWMgI2RvUmVtb3ZlT3ZlcmxheSgpIHtcbiAgICBjb25zdCBkaXZPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXktcG9wdXAnKTtcbiAgICBpZiAoZGl2T3ZlcmxheSkge1xuICAgICAgY29uc3QgZGl2UGxheUdhbWVPdmVybGF5ID0gZGl2T3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcubWFuYWdlLWRpdi1wbGF5Jyk7XG4gICAgICBpZiAoZGl2UGxheUdhbWVPdmVybGF5KSB7XG4gICAgICAgIGNvbnN0IGRpdkJ1dHRvbnMgPSBkaXZQbGF5R2FtZU92ZXJsYXkucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0taWNvbicpO1xuICAgICAgICBjb25zdCBidXR0b25zID0gWy4uLmRpdkJ1dHRvbnNdO1xuICAgICAgICBidXR0b25zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICBpZihidG4uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSBEb21NYW5hZ2VyLnRvZ2dsZURpc3BsYXlCeU5vZGUoYnRuKTtcbiAgICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBmb3JtUGxheUdhbWVPdmVybGF5ID0gZGl2T3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcubWFuYWdlLWZvcm0tcGxheWVycycpO1xuICAgICAgaWYgKGZvcm1QbGF5R2FtZU92ZXJsYXkpIERvbU1hbmFnZXIucmVtb3ZlQWxsQ2hpbGROb2Rlcyhmb3JtUGxheUdhbWVPdmVybGF5KTtcbiAgICAgIGNvbnN0IGRpdkZvcm1QbGFjZUJvYXQgPSBkaXZPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2UtZm9ybS1wbGFjZWJvYXQnKTtcbiAgICAgIGlmIChkaXZGb3JtUGxhY2VCb2F0KSBEb21NYW5hZ2VyLnJlbW92ZUFsbENoaWxkTm9kZXMoZGl2Rm9ybVBsYWNlQm9hdCk7XG4gICAgICBjb25zdCBkaXZXaW5uZXIgPSBkaXZPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2Utd2lubmVyJyk7XG4gICAgICBpZiAoZGl2V2lubmVyKSBEb21NYW5hZ2VyLnJlbW92ZUFsbENoaWxkTm9kZXMoZGl2V2lubmVyKTtcbiAgICB9XG4gIH1cblxuICBkb1Jlc2V0R2FtZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uc3R5bGUuZmlsdGVyID0gJ2JsdXIoMHJlbSknO1xuICAgIERvbU1hbmFnZXIucmVtb3ZlQWxsQ2hpbGROb2RlcyhtYWluKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcbiAgICBpZiAob3ZlcmxheS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIERvbU1hbmFnZXIudG9nZ2xlRGlzcGxheUJ5Tm9kZShvdmVybGF5KTtcbiAgICBVaUdhbWVDb250cm9sbGVyLiNkb1JlbW92ZU92ZXJsYXkoKTtcbiAgICB0aGlzLiNpbml0R2FtZVZhcmlhYmxlcygpO1xuICB9XG5cbiAgZG9DcmVhdGVHYW1lT3ZlcmxheSgpIHtcbiAgICBsZXQgYnRuVHdvUGxheWVycztcbiAgICBsZXQgYnRuQm90UGxheWVyO1xuICAgIGNvbnN0IGRpdk92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheS1wb3B1cCcpO1xuICAgIGNvbnN0IGRpdlBsYXlHYW1lT3ZlcmxheSA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2T3ZlcmxheSwgJ21hbmFnZS1kaXYtcGxheScpO1xuICAgIGNvbnN0IGZvcm1QbGF5R2FtZU92ZXJsYXkgPSBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2Zvcm0nLCBkaXZPdmVybGF5LCAnbWFuYWdlLWZvcm0tcGxheWVycycpO1xuICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2T3ZlcmxheSwgJ21hbmFnZS1mb3JtLXBsYWNlYm9hdCcpO1xuICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2T3ZlcmxheSwgJ21hbmFnZS13aW5uZXInKTtcblxuICAgIGNvbnN0IHBhdHRlcm5zID0ge1xuICAgICAgZWRpdFBsYXllck5hbWVBOiAvXlthLXpcXHMnXXsyLDMwfSQvaSxcbiAgICAgIGVkaXRQbGF5ZXJOYW1lQjogL15bYS16XFxzJ117MiwzMH0kL2ksXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHZhbGlkYXRlID0gKGZpZWxkLCByZWdleCkgPT4ge1xuICAgICAgaWYgKHJlZ2V4LnRlc3QoZmllbGQudmFsdWUpKSB7XG4gICAgICAgIGZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KCdpbnZhbGlkJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEhpZGUgZm9ybSBhbmQgb3ZlcmxheVxuICAgIGNvbnN0IGNiRmluYWxpemVGb3JtID0gKCkgPT4ge1xuICAgICAgRG9tTWFuYWdlci5yZW1vdmVBbGxDaGlsZE5vZGVzKGZvcm1QbGF5R2FtZU92ZXJsYXkpO1xuICAgIH07XG5cbiAgICAvLyBDYW5jZWwgZXZlbnRcbiAgICBjb25zdCBjYkV2ZW50Q2FuY2VsID0gKCkgPT4ge1xuICAgICAgaWYoYnRuVHdvUGxheWVycy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIERvbU1hbmFnZXIudG9nZ2xlRGlzcGxheUJ5Tm9kZShidG5Ud29QbGF5ZXJzKTtcbiAgICAgIGlmKGJ0bkJvdFBsYXllci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIERvbU1hbmFnZXIudG9nZ2xlRGlzcGxheUJ5Tm9kZShidG5Cb3RQbGF5ZXIpO1xuICAgICAgYnRuVHdvUGxheWVycy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgYnRuQm90UGxheWVyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBEb21NYW5hZ2VyLnJlbW92ZUFsbENoaWxkTm9kZXMoZm9ybVBsYXlHYW1lT3ZlcmxheSk7XG4gICAgfTtcblxuICAgIC8vIFN1Ym1pdCBldmVudFxuICAgIGNvbnN0IGNiRXZlbnRTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gICAgICBjb25zdCBpbnB1dEEgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignI2VkaXRQbGF5ZXJOYW1lQScpO1xuICAgICAgdGhpcy5wbGF5ZXJBLm5hbWUgPSBpbnB1dEEudmFsdWU7XG5cbiAgICAgIGlmIChidG5Ud29QbGF5ZXJzLmRpc2FibGVkKSB7XG4gICAgICAgIGNvbnN0IGlucHV0QiA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcjZWRpdFBsYXllck5hbWVCJyk7XG4gICAgICAgIHRoaXMucGxheWVyQi5uYW1lID0gaW5wdXRCLnZhbHVlO1xuICAgICAgICB0aGlzLnBsYXllckIuaHVtYW4gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYm90RGlmZiA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0Qm90RGlmZmljdWx0eScpO1xuICAgICAgICB0aGlzLnBsYXllckIuZGlmZmljdWx0eSA9IGJvdERpZmYub3B0aW9uc1tib3REaWZmLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgICAgIHRoaXMucGxheWVyQi5uYW1lID0gJ0FuZ3J5QUknO1xuICAgICAgICB0aGlzLnBsYXllckIuaHVtYW4gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgY2JGaW5hbGl6ZUZvcm0oKTtcbiAgICAgIHRoaXMuI2RvR2FtZUZTTShwaGFzZXMuY3JlYXRlUGxheWVyQSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNiQ3JlYXRlUGxheUZvcm0gPSAodnNBSSA9IGZhbHNlKSA9PiB7XG4gICAgICBsZXQgZWRpdFBsYXllckI7XG4gICAgICBEb21NYW5hZ2VyLnJlbW92ZUFsbENoaWxkTm9kZXMoZm9ybVBsYXlHYW1lT3ZlcmxheSk7XG4gICAgICBjb25zdCBlZGl0UGxheWVyQSA9IElucHV0TWFuYWdlci5jcmVhdGVFZGl0VGV4dCgnZWRpdFBsYXllck5hbWVBJywgJ0ZpcnN0IHBsYXllcicsICdGaXJzdCBwbGF5ZXIgbmFtZScpO1xuICAgICAgY29uc3QgYnRuQ2FuY2VsICAgPSBJbnB1dE1hbmFnZXIuY3JlYXRlVGV4dEJ1dHRvbignYnRuQ2FuY2VsJywgJ0NhbmNlbCcsICdmb3JtLWNyZWF0ZS1wbGF5ZXItYnV0dG9uJywgY2JFdmVudENhbmNlbCk7XG4gICAgICBjb25zdCBidG5TdWJtaXQgICA9IElucHV0TWFuYWdlci5jcmVhdGVUZXh0QnV0dG9uKCdidG5TdWJtaXQnLCAnU3VibWl0JywgJ2Zvcm0tY3JlYXRlLXBsYXllci1idXR0b24nLCBjYkV2ZW50U3VibWl0LCBmb3JtUGxheUdhbWVPdmVybGF5KTtcbiAgICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGZvcm1QbGF5R2FtZU92ZXJsYXksIGVkaXRQbGF5ZXJBLmxhYmVsKTtcbiAgICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGZvcm1QbGF5R2FtZU92ZXJsYXksIGVkaXRQbGF5ZXJBLmlucHV0KTtcbiAgICAgIFxuICAgICAgaWYgKCF2c0FJKSB7XG4gICAgICAgIGJ0blR3b1BsYXllcnMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBEb21NYW5hZ2VyLnRvZ2dsZURpc3BsYXlCeU5vZGUoYnRuQm90UGxheWVyKTtcbiAgICAgICAgZWRpdFBsYXllckIgPSBJbnB1dE1hbmFnZXIuY3JlYXRlRWRpdFRleHQoJ2VkaXRQbGF5ZXJOYW1lQicsICdTZWNvbmQgcGxheWVyJywgJ1NlY29uZCBwbGF5ZXIgbmFtZScpO1xuICAgICAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChmb3JtUGxheUdhbWVPdmVybGF5LCBlZGl0UGxheWVyQi5sYWJlbCk7XG4gICAgICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGZvcm1QbGF5R2FtZU92ZXJsYXksIGVkaXRQbGF5ZXJCLmlucHV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bkJvdFBsYXllci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIERvbU1hbmFnZXIudG9nZ2xlRGlzcGxheUJ5Tm9kZShidG5Ud29QbGF5ZXJzKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0QWlEaWZmID0gSW5wdXRNYW5hZ2VyLmNyZWF0ZVNlbGVjdCgnc2VsZWN0Qm90RGlmZmljdWx0eScsIFsgQm90RGlmZmljdWx0eS5lYXN5LCBCb3REaWZmaWN1bHR5Lm1lZGl1bSBdLCBCb3REaWZmaWN1bHR5LmVhc3ksICdCb3QgZGlmZmljdWx0eScpO1xuICAgICAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChmb3JtUGxheUdhbWVPdmVybGF5LCBzZWxlY3RBaURpZmYubGFiZWwpO1xuICAgICAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChmb3JtUGxheUdhbWVPdmVybGF5LCBzZWxlY3RBaURpZmYuaW5wdXQpO1xuICAgICAgfVxuXG4gICAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChmb3JtUGxheUdhbWVPdmVybGF5LCBidG5DYW5jZWwuaW5wdXQpO1xuICAgICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQoZm9ybVBsYXlHYW1lT3ZlcmxheSwgYnRuU3VibWl0LmlucHV0KTtcblxuICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hbmFnZS1mb3JtLXBsYXllcnMgPiBpbnB1dCcpO1xuICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICBpZiAodW5kZWZpbmVkICE9PSBlLnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlKGUudGFyZ2V0LCBwYXR0ZXJuc1tlLnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWVdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGJ0blR3b1BsYXllcnMgPSBCdXR0b25NYW5hZ2VyLmNyZWF0ZUJ1dHRvbignVHdvIFBsYXllcnMnLCAnYWNjb3VudC1tdWx0aXBsZS1vdXRsaW5lLnN2ZycsICdmb3JtLWljb24nLCAoKSA9PiBjYkNyZWF0ZVBsYXlGb3JtKCkpO1xuICAgIGJ0bkJvdFBsYXllciA9IEJ1dHRvbk1hbmFnZXIuY3JlYXRlQnV0dG9uKCdBSSBCb3QnLCAncm9ib3QtYW5ncnktb3V0bGluZS5zdmcnLCAnZm9ybS1pY29uJywgKCkgPT4gY2JDcmVhdGVQbGF5Rm9ybSh0cnVlKSk7XG5cbiAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChkaXZQbGF5R2FtZU92ZXJsYXksIGJ0blR3b1BsYXllcnMpO1xuICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdlBsYXlHYW1lT3ZlcmxheSwgYnRuQm90UGxheWVyKTtcbiAgfVxuXG4gICNkb0NyZWF0ZVVzZXJHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udHJvbGxlciA9IG5ldyBHYW1lYm9hcmRDb250cm9sbGVyKHRydWUpO1xuICAgIHRoaXMuZGVzUGxhY2VTaGlwLmN1cnJlbnQgPSAwO1xuICAgIGNvbnN0IHtjdXJyZW50LCBsZW5ndGhzIH0gPSB0aGlzLmRlc1BsYWNlU2hpcDtcblxuICAgIGNvbnN0IGZvcm1QbGFjZUJvYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlLWZvcm0tcGxhY2Vib2F0Jyk7XG4gICAgRG9tTWFuYWdlci5yZW1vdmVBbGxDaGlsZE5vZGVzKGZvcm1QbGFjZUJvYXQpO1xuICAgIGNvbnN0IGRpdlBsYWNlQm9hdCA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZm9ybVBsYWNlQm9hdCwgJ21hbmFnZS1kaXYtcGxhY2Vib2F0Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmRDb250cm9sbGVyLkJvYXJkU2l6ZTsgaSs9MSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lYm9hcmRDb250cm9sbGVyLkJvYXJkU2l6ZTsgais9MSkge1xuICAgICAgICBjb25zdCBncmlkID0gQnV0dG9uTWFuYWdlci5jcmVhdGVCdXR0b24oJycsIG51bGwsICdib3gnLCAoZSkgPT4gdGhpcy4jb25QbGFjZUJvYXRDZWxsQ2xpY2soZSwgZ2FtZWJvYXJkQ29udHJvbGxlcikpO1xuICAgICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZSkgPT4gdGhpcy4jb25QbGFjZUJvYXRNb3VzZUVudGVyKGUsIGdhbWVib2FyZENvbnRyb2xsZXIpKTtcbiAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHRoaXMuI29uUGxhY2VCb2F0TW91c2VMZWF2ZShlLCBnYW1lYm9hcmRDb250cm9sbGVyKSk7XG4gICAgICAgIGdyaWQuZGF0YXNldC54ID0gaTtcbiAgICAgICAgZ3JpZC5kYXRhc2V0LnkgPSBqO1xuICAgICAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChkaXZQbGFjZUJvYXQsIGdyaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpdkxlZ2VuZFBsYWNlQm9hdCA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZm9ybVBsYWNlQm9hdCwgJ2Rpdi1sZWdlbmQtcGxhY2Vib2F0Jyk7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuc3RlcFBoYXNlID09PSBwaGFzZXMuY3JlYXRlUGxheWVyQSA/IHRoaXMucGxheWVyQS5uYW1lXG4gICAgICA6IHRoaXMucGxheWVyQi5uYW1lO1xuICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGRpdkxlZ2VuZFBsYWNlQm9hdCwgJ3BsYXllci1uYW1lLWxlZ2VuZCcsIG51bGwsICBgSXQncyAke25hbWV9IHR1cm4gZm9yIHBsYWNlIGJvYXRzLmApO1xuICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGRpdkxlZ2VuZFBsYWNlQm9hdCwgJ2JvYXQtbGVuZ3RoLWxlZ2VuZCcsIG51bGwsICBgUGxhY2UgJHtsZW5ndGhzW2N1cnJlbnRdfSBsZW5ndGggYm9hdC5gKTtcbiAgICBjb25zdCBzd2l0Y2hWZXJ0aWNhbCA9IElucHV0TWFuYWdlci5jcmVhdGVTd2l0Y2hCdXR0b24oJ3N3aXRjaFZlcnRpY2FsJywgdHJ1ZSwgJ1ZlcnRpY2FsIGJvYXQnLCAoKSA9PiB0aGlzLiNkb1RvZ2dsZVZlcnRpY2FsKCksIHRydWUpO1xuICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdkxlZ2VuZFBsYWNlQm9hdCwgc3dpdGNoVmVydGljYWwubGFiZWwpO1xuICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdkxlZ2VuZFBsYWNlQm9hdCwgc3dpdGNoVmVydGljYWwuaW5wdXQpO1xuICB9XG5cbiAgI2RvQ3JlYXRlQm90R2FtZWJvYXJkKCkge1xuICAgIGxldCBleGl0ID0gZmFsc2U7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udHJvbGxlciA9IG5ldyBHYW1lYm9hcmRDb250cm9sbGVyKGZhbHNlKTtcbiAgICB0aGlzLmRlc1BsYWNlU2hpcC5jdXJyZW50ID0gMDtcbiAgICBjb25zdCB7IGxlbmd0aHMgfSA9IHRoaXMuZGVzUGxhY2VTaGlwO1xuICAgIGNvbnN0IGZvcm1QbGFjZUJvYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlLWZvcm0tcGxhY2Vib2F0Jyk7XG4gICAgRG9tTWFuYWdlci5yZW1vdmVBbGxDaGlsZE5vZGVzKGZvcm1QbGFjZUJvYXQpO1xuICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGZvcm1QbGFjZUJvYXQsICdwbGF5ZXItbmFtZS1sZWdlbmQnLCBudWxsLCAgYEl0J3MgJHt0aGlzLnBsYXllckIubmFtZX0gdHVybiBmb3IgcGxhY2UgYm9hdHMuYCk7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgZG8ge1xuICAgICAgY29uc3QgdmVydGljYWwgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZENvbnRyb2xsZXIuQm9hcmRTaXplKTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmRDb250cm9sbGVyLkJvYXJkU2l6ZSk7XG5cbiAgICAgIGlmIChnYW1lYm9hcmRDb250cm9sbGVyLnBsYWNlKG5ldyBTaGlwKGxlbmd0aHNbdGhpcy5kZXNQbGFjZVNoaXAuY3VycmVudF0pLCB4LCB5LCB2ZXJ0aWNhbCkpIHtcbiAgICAgICAgdGhpcy5kZXNQbGFjZVNoaXAuY3VycmVudCArPSAxO1xuICAgICAgICBpZiAodGhpcy5kZXNQbGFjZVNoaXAuY3VycmVudCA9PT0gbGVuZ3Rocy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnBsYXllckIub2JqZWN0ID0gbmV3IFBsYXllcih0aGlzLnBsYXllckIubmFtZSwgZ2FtZWJvYXJkQ29udHJvbGxlciwgUGxheWVyVHlwZS5haSwgdGhpcy5wbGF5ZXJCLmRpZmZpY3VsdHkpO1xuICAgICAgICAgIGV4aXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSB3aGlsZSghZXhpdCk7XG5cbiAgICAvLyBHZXQgZWxhYm9yYXRpb24gaW4gbXNcbiAgICBjb25zdCBtcyA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgpLCBzdGFydCk7XG5cbiAgICAvLyBTaW11bGF0ZSBhIHdhaXQgb2YgNXMgKG9yIHdhaXQgemVybylcbiAgICBjb25zdCBkZWxheSA9ICg1MDAwIC0gbXMgPCAwKSA/IDAgOiA1MDAwIC0gbXM7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuI2RvR2FtZUZTTShwaGFzZXMucHJlcGFyZUJvYXJkcyk7IH0sIGRlbGF5KTtcbiAgfVxuXG4gICNkb0NoYW5nZUJvYXRMZW5ndGhMZWdlbmQoKSB7XG4gICAgY29uc3Qge2N1cnJlbnQsIGxlbmd0aHMgfSA9IHRoaXMuZGVzUGxhY2VTaGlwO1xuICAgIGNvbnN0IHBCb2F0TGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXQtbGVuZ3RoLWxlZ2VuZCcpO1xuICAgIHBCb2F0TGVuZ3RoLnRleHRDb250ZW50ID0gYFBsYWNlICR7bGVuZ3Roc1tjdXJyZW50XX0gbGVuZ3RoIGJvYXQuYDtcbiAgfVxuXG4gICNvblBsYWNlQm9hdENlbGxDbGljayhldmVudCwgZ2FtZWJvYXJkQ29udHJvbGxlcikge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICBjb25zdCBkYXRhc2V0ID0gKHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykgPyB0YXJnZXQuZGF0YXNldFxuICAgICAgOiB0YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0O1xuICAgIGNvbnN0IHggPSArZGF0YXNldC54O1xuICAgIGNvbnN0IHkgPSArZGF0YXNldC55O1xuICAgIGNvbnN0IHtjdXJyZW50LCBsZW5ndGhzLCB2ZXJ0aWNhbCB9ID0gdGhpcy5kZXNQbGFjZVNoaXA7XG4gICAgaWYgKGdhbWVib2FyZENvbnRyb2xsZXIucGxhY2UobmV3IFNoaXAobGVuZ3Roc1tjdXJyZW50XSksIHgsIHksIHZlcnRpY2FsKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NldCcpO1xuICBcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICBmb3IgKGxldCBpID0geCArIDE7IGkgPCBnYW1lYm9hcmRDb250cm9sbGVyLkJvYXJkU2l6ZSAmJiBpIDwgKHggKyBsZW5ndGhzW2N1cnJlbnRdKTsgaSArPSAxKSB7IFxuICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JyR7aX0nXVtkYXRhLXk9JyR7eX0nXWApO1xuICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdzZXQnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHkgKyAxOyBpIDwgZ2FtZWJvYXJkQ29udHJvbGxlci5Cb2FyZFNpemUgJiYgaSA8ICh5ICsgbGVuZ3Roc1tjdXJyZW50XSk7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JyR7eH0nXVtkYXRhLXk9JyR7aX0nXWApO1xuICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdzZXQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLiN1bnNldFByZXZpb3VzSG92ZXIoZXZlbnQudGFyZ2V0LCB4LCB5LCBnYW1lYm9hcmRDb250cm9sbGVyLkJvYXJkU2l6ZSwgdGhpcy5kZXNQbGFjZVNoaXAudmVydGljYWwpO1xuICAgICAgdGhpcy5kZXNQbGFjZVNoaXAuY3VycmVudCArPSAxO1xuICAgICAgdGhpcy4jZG9DaGFuZ2VCb2F0TGVuZ3RoTGVnZW5kKCk7XG4gICAgICBpZiAodGhpcy5kZXNQbGFjZVNoaXAuY3VycmVudCA9PT0gbGVuZ3Rocy5sZW5ndGgpIHtcbiAgICAgICAgaWYodGhpcy5zdGVwUGhhc2UgPT09IHBoYXNlcy5jcmVhdGVQbGF5ZXJBKSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJBLm9iamVjdCA9IG5ldyBQbGF5ZXIodGhpcy5wbGF5ZXJBLm5hbWUsIGdhbWVib2FyZENvbnRyb2xsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGxheWVyQi5vYmplY3QgPSBuZXcgUGxheWVyKHRoaXMucGxheWVyQi5uYW1lLCBnYW1lYm9hcmRDb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB0aGlzLnN0ZXBQaGFzZSA9PT0gcGhhc2VzLmNyZWF0ZVBsYXllckEgPyBwaGFzZXMuY3JlYXRlUGxheWVyQiBcbiAgICAgICAgICA6IHBoYXNlcy5wcmVwYXJlQm9hcmRzO1xuICAgICAgICB0aGlzLiNkb0dhbWVGU00obmV4dFN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjZG9Ub2dnbGVWZXJ0aWNhbCgpIHtcbiAgICB0aGlzLmRlc1BsYWNlU2hpcC52ZXJ0aWNhbCA9ICF0aGlzLmRlc1BsYWNlU2hpcC52ZXJ0aWNhbDtcbiAgfVxuXG4gIHN0YXRpYyAjc2V0UGxhY2VCb2F0SG92ZXIoZWxlbWVudCwgdmFsaWQpIHtcbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmFsaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljICN1bnNldFBsYWNlQm9hdEhvdmVyKGVsZW1lbnQsIHZhbGlkKSB7XG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gICNvblBsYWNlQm9hdE1vdXNlRW50ZXIoZXZlbnQsIGdhbWVib2FyZENvbnRyb2xsZXIpIHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgY29uc3QgeyBkYXRhc2V0IH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeCA9ICtkYXRhc2V0Lng7XG4gICAgY29uc3QgeSA9ICtkYXRhc2V0Lnk7XG4gICAgY29uc3QgeyBjdXJyZW50LCBsZW5ndGhzLCB2ZXJ0aWNhbCB9ID0gdGhpcy5kZXNQbGFjZVNoaXA7XG4gICAgdGhpcy5wcmV2aW91c0hvdmVyLmxlbmd0aCA9IGxlbmd0aHNbY3VycmVudF07XG4gICAgdGhpcy5wcmV2aW91c0hvdmVyLnZhbGlkID0gZ2FtZWJvYXJkQ29udHJvbGxlci5jaGVja1BsYWNlKGxlbmd0aHNbY3VycmVudF0sIHgsIHksIHZlcnRpY2FsKTtcbiAgICBVaUdhbWVDb250cm9sbGVyLiNzZXRQbGFjZUJvYXRIb3ZlcihldmVudC50YXJnZXQsIHRoaXMucHJldmlvdXNIb3Zlci52YWxpZCk7XG5cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4ICsgMTsgaSA8IGdhbWVib2FyZENvbnRyb2xsZXIuQm9hcmRTaXplICYmIGkgPCAoeCArIGxlbmd0aHNbY3VycmVudF0pOyBpICs9IDEpIHsgXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JyR7aX0nXVtkYXRhLXk9JyR7eX0nXWApO1xuICAgICAgICBVaUdhbWVDb250cm9sbGVyLiNzZXRQbGFjZUJvYXRIb3ZlcihidG4sIHRoaXMucHJldmlvdXNIb3Zlci52YWxpZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSB5ICsgMTsgaSA8IGdhbWVib2FyZENvbnRyb2xsZXIuQm9hcmRTaXplICYmIGkgPCAoeSArIGxlbmd0aHNbY3VycmVudF0pOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD0nJHt4fSddW2RhdGEteT0nJHtpfSddYCk7XG4gICAgICAgIFVpR2FtZUNvbnRyb2xsZXIuI3NldFBsYWNlQm9hdEhvdmVyKGJ0biwgdGhpcy5wcmV2aW91c0hvdmVyLnZhbGlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjdW5zZXRQcmV2aW91c0hvdmVyKGVsZW1lbnQsIHgsIHksIGJvYXJkU2l6ZSwgdmVydGljYWwpIHtcbiAgICBpZiAodGhpcy5wcmV2aW91c0hvdmVyLmxlbmd0aCkge1xuICAgICAgVWlHYW1lQ29udHJvbGxlci4jdW5zZXRQbGFjZUJvYXRIb3ZlcihlbGVtZW50LCB0aGlzLnByZXZpb3VzSG92ZXIudmFsaWQpO1xuXG4gICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHggKyAxOyBpIDwgYm9hcmRTaXplICYmIGkgPCAoeCArIHRoaXMucHJldmlvdXNIb3Zlci5sZW5ndGgpOyBpICs9IDEpIHsgXG4gICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD0nJHtpfSddW2RhdGEteT0nJHt5fSddYCk7XG4gICAgICAgICAgVWlHYW1lQ29udHJvbGxlci4jdW5zZXRQbGFjZUJvYXRIb3ZlcihidG4sIHRoaXMucHJldmlvdXNIb3Zlci52YWxpZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB5ICsgMTsgaSA8IGJvYXJkU2l6ZSAmJiBpIDwgKHkgKyB0aGlzLnByZXZpb3VzSG92ZXIubGVuZ3RoKTsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD0nJHt4fSddW2RhdGEteT0nJHtpfSddYCk7XG4gICAgICAgICAgVWlHYW1lQ29udHJvbGxlci4jdW5zZXRQbGFjZUJvYXRIb3ZlcihidG4sIHRoaXMucHJldmlvdXNIb3Zlci52YWxpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVyLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnByZXZpb3VzSG92ZXIudmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjb25QbGFjZUJvYXRNb3VzZUxlYXZlKGV2ZW50LCBnYW1lYm9hcmRDb250cm9sbGVyKSB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHsgZGF0YXNldCB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHggPSArZGF0YXNldC54O1xuICAgIGNvbnN0IHkgPSArZGF0YXNldC55O1xuICAgIHRoaXMuI3Vuc2V0UHJldmlvdXNIb3ZlcihldmVudC50YXJnZXQsIHgsIHksIGdhbWVib2FyZENvbnRyb2xsZXIuQm9hcmRTaXplLCB0aGlzLmRlc1BsYWNlU2hpcC52ZXJ0aWNhbCk7XG4gIH1cblxuICAjZG9DcmVhdGVCb2FyZChwYXJlbnQsIHBsYXllcikge1xuICAgIGNvbnN0IGRpdlBsYXllckNvbnRyb2xsZXIgPSBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIHBhcmVudCwgJ2Rpdi1wbGF5ZXItY29udHJvbGxlcicpO1xuICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGRpdlBsYXllckNvbnRyb2xsZXIsICdwbGF5ZXItbmFtZScsIG51bGwsIGAke3BsYXllci5OYW1lfWApO1xuICAgIGNvbnN0IGRpdkdhbWVib2FyZCA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2UGxheWVyQ29udHJvbGxlciwgJ2Rpdi1nYW1lYm9hcmQnKTtcbiAgICBkaXZHYW1lYm9hcmQuZGF0YXNldC5wbGF5ZXIgPSB0aGlzLiNnZXRQbGF5ZXJTaWRlKHBsYXllcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuR2FtZUJvYXJkLkJvYXJkU2l6ZTsgaSs9MSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIuR2FtZUJvYXJkLkJvYXJkU2l6ZTsgais9MSkge1xuICAgICAgICBjb25zdCBncmlkID0gQnV0dG9uTWFuYWdlci5jcmVhdGVCdXR0b24oJycsIG51bGwsICdib3gnLCAoZSkgPT4gdGhpcy4jb25QbGF5VXNlclJvdW5kKGUpKTtcbiAgICAgICAgZ3JpZC5kYXRhc2V0LnggPSBpO1xuICAgICAgICBncmlkLmRhdGFzZXQueSA9IGo7XG4gICAgICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdkdhbWVib2FyZCwgZ3JpZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2dldFBsYXllclNpZGUocGxheWVyKSB7IHJldHVybiBwbGF5ZXIgPT09IHRoaXMucGxheWVyQS5vYmplY3QgPyAnQScgOiAnQic7IH1cblxuICAjZ2V0T3Bwb25lbnRQbGF5ZXIoKSB7IHJldHVybiB0aGlzLmN1clBsYXllciA9PT0gdGhpcy5wbGF5ZXJBID8gdGhpcy5wbGF5ZXJCIDogdGhpcy5wbGF5ZXJBIH1cblxuICBzdGF0aWMgI3NldFdhdGVyKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3YXRlcicpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyAjc2V0SGl0KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0Jyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljICNzZXRXYXRlclN1bmsocGFyZW50LCB4LCB5KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke3h9J11bZGF0YS15PScke3l9J11gKTtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnRleHRDb250ZW50ICE9PSAnWCcpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnKic7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dhdGVyJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljICNzdW5rU2hpcChwYXJlbnQsIGNvb3JkaW5hdGVzKSB7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgIFVpR2FtZUNvbnRyb2xsZXIuI3NldFdhdGVyU3VuayhwYXJlbnQsIGNvb3JkaW5hdGUueCAtIDEsIGNvb3JkaW5hdGUueSk7XG4gICAgICBVaUdhbWVDb250cm9sbGVyLiNzZXRXYXRlclN1bmsocGFyZW50LCBjb29yZGluYXRlLnggKyAxLCBjb29yZGluYXRlLnkpO1xuICAgICAgVWlHYW1lQ29udHJvbGxlci4jc2V0V2F0ZXJTdW5rKHBhcmVudCwgY29vcmRpbmF0ZS54LCBjb29yZGluYXRlLnkgLSAxKTtcbiAgICAgIFVpR2FtZUNvbnRyb2xsZXIuI3NldFdhdGVyU3VuayhwYXJlbnQsIGNvb3JkaW5hdGUueCwgY29vcmRpbmF0ZS55ICsgMSk7XG4gICAgICBVaUdhbWVDb250cm9sbGVyLiNzZXRXYXRlclN1bmsocGFyZW50LCBjb29yZGluYXRlLnggLSAxLCBjb29yZGluYXRlLnkgLSAxKTtcbiAgICAgIFVpR2FtZUNvbnRyb2xsZXIuI3NldFdhdGVyU3VuayhwYXJlbnQsIGNvb3JkaW5hdGUueCArIDEsIGNvb3JkaW5hdGUueSArIDEpO1xuICAgICAgVWlHYW1lQ29udHJvbGxlci4jc2V0V2F0ZXJTdW5rKHBhcmVudCwgY29vcmRpbmF0ZS54IC0gMSwgY29vcmRpbmF0ZS55ICsgMSk7XG4gICAgICBVaUdhbWVDb250cm9sbGVyLiNzZXRXYXRlclN1bmsocGFyZW50LCBjb29yZGluYXRlLnggKyAxLCBjb29yZGluYXRlLnkgLSAxKTtcbiAgICB9KTtcbiAgfVxuXG4gICNvblBsYXlVc2VyUm91bmQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSA/IGV2ZW50LnRhcmdldCA6IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgIC8vIENoZWNrIGN1cnJlbnQgcGxheSBwaGFzZSBjbGljayBub3QgYWxsb3dlZFxuICAgIGlmICgodGhpcy5zdGVwUGhhc2UgIT09IHBoYXNlcy5wbGF5QSkgJiYgKHRoaXMuc3RlcFBoYXNlICE9PSBwaGFzZXMucGxheUIpKSByZXR1cm47XG4gICAgLy8gQ2xpY2sgbm90IGFsbG93ZWQgZHVyaW5nIEFJIHJvdW5kXG4gICAgaWYgKCF0aGlzLmN1clBsYXllci5odW1hbikgcmV0dXJuO1xuICAgIC8vIEdldCBjdXJyZW50IHBsYXllciBzaWRlIGlmIGNsaWNrIGlzIGFsbG93ZWRcbiAgICBjb25zdCBjdXJQbGF5ZXJTaWRlID0gdGhpcy4jZ2V0UGxheWVyU2lkZSh0aGlzLmN1clBsYXllci5vYmplY3QpO1xuICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnQuZGF0YXNldC5wbGF5ZXIgPT09IGN1clBsYXllclNpZGUpIHJldHVybjtcbiAgICAvLyBDbGljayBpcyBhbGxvd2VkXG4gICAgY29uc3QgeyBkYXRhc2V0IH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeCA9ICtkYXRhc2V0Lng7XG4gICAgY29uc3QgeSA9ICtkYXRhc2V0Lnk7XG5cbiAgICBjb25zdCBwaGFzZSA9IHRoaXMuI2RvUGxheVJvdW5kVUkodGFyZ2V0LCB4LCB5KTtcbiAgICBpZiAocGhhc2UpIHtcbiAgICAgIHRoaXMuI2RvR2FtZUZTTShwaGFzZSk7XG4gICAgfVxuICB9XG5cbiAgI2RvUHJlcGFyZUJvYXJkcygpIHtcbiAgICAvLyBHZXQgY3VycmVudCBwbGF5ZXJcbiAgICB0aGlzLmN1clBsYXllciA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyB0aGlzLnBsYXllckEgOiB0aGlzLnBsYXllckI7XG4gICAgLy8gSGlkZSBvdmVybGF5XG4gICAgVWlHYW1lQ29udHJvbGxlci4jaGlkZU92ZXJsYXkoKTtcbiAgICAvLyBDcmVhdGUgbWFpbiBib2FyZFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgZGl2R2FtZUJvYXJkR3JpZCA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgbWFpbiwgJ2Rpdi1nYW1lYm9hcmQtZ3JpZCcpO1xuICAgIGNvbnN0IGRpdlJvdW5kQ29udHJvbGxlciA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2R2FtZUJvYXJkR3JpZCwgJ2Rpdi1yb3VuZC1jb250cm9sbGVyJyk7XG4gICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgZGl2Um91bmRDb250cm9sbGVyLCAncGxheWVyLW5hbWUtcm91bmQnLCBudWxsLCBgSXQgaXMgJHt0aGlzLmN1clBsYXllci5uYW1lfSByb3VuZGApO1xuICAgIGlmICh0aGlzLnBsYXllckIuaHVtYW4pIHsgXG4gICAgICBjb25zdCBidG5TdGFydFJvdW5kID0gQnV0dG9uTWFuYWdlci5jcmVhdGVUZXh0QnV0dG9uKCdTdGFydCBSb3VuZCcsICdidG4tc3RhcnQtcm91bmQnLCAoZSkgPT4gdGhpcy4jZG9TdGFydFJvdW5kKGUpKTtcbiAgICAgIGJ0blN0YXJ0Um91bmQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQoZGl2Um91bmRDb250cm9sbGVyLCBidG5TdGFydFJvdW5kKTtcbiAgICB9IFxuXG4gICAgY29uc3QgZGl2R2FtZUJvYXJkQ29udHJvbGxlciA9IERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2R2FtZUJvYXJkR3JpZCwgJ2Rpdi1nYW1lYm9hcmQtY29udHJvbGxlcicpO1xuICAgIHRoaXMuI2RvQ3JlYXRlQm9hcmQoZGl2R2FtZUJvYXJkQ29udHJvbGxlciwgdGhpcy5wbGF5ZXJBLm9iamVjdCk7XG4gICAgdGhpcy4jZG9DcmVhdGVCb2FyZChkaXZHYW1lQm9hcmRDb250cm9sbGVyLCB0aGlzLnBsYXllckIub2JqZWN0KTtcbiAgICBpZiAoIXRoaXMucGxheWVyQi5odW1hbikge1xuICAgICAgdGhpcy4jZG9TaG93SGlkZUN1cnJlbnRCb2FyZCh0cnVlLCB0aGlzLnBsYXllckEub2JqZWN0KTtcbiAgICB9XG4gICAgdGhpcy4jZG9HYW1lRlNNKHBoYXNlcy53YWl0Um91bmQpO1xuICB9XG5cbiAgI2RvV2FpdFJvdW5kKCkge1xuICAgIGlmICh0aGlzLnBsYXllckIuaHVtYW4pIHtcbiAgICAgIGNvbnN0IGJ0blN0YXJ0Um91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXN0YXJ0LXJvdW5kJyk7XG4gICAgICBidG5TdGFydFJvdW5kLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5leHRQaGFzZSA9IHRoaXMuI2dldFBsYXllclNpZGUodGhpcy5jdXJQbGF5ZXIub2JqZWN0KSA9PT0gJ0EnID8gcGhhc2VzLnBsYXlBIDogcGhhc2VzLnBsYXlCO1xuICAgICAgdGhpcy4jZG9HYW1lRlNNKG5leHRQaGFzZSk7XG4gICAgfVxuICB9XG5cbiAgI2RvU3RhcnRSb3VuZChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IChldmVudC50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpID8gZXZlbnQudGFyZ2V0IDogZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgdGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLiNkb1Nob3dIaWRlQ3VycmVudEJvYXJkKHRydWUpO1xuICAgIGNvbnN0IG5leHRQaGFzZSA9IHRoaXMuI2dldFBsYXllclNpZGUodGhpcy5jdXJQbGF5ZXIub2JqZWN0KSA9PT0gJ0EnID8gcGhhc2VzLnBsYXlBIDogcGhhc2VzLnBsYXlCO1xuICAgIHRoaXMuI2RvR2FtZUZTTShuZXh0UGhhc2UpO1xuICB9XG5cbiAgI2RvUGxheVJvdW5kQUkoKSB7XG4gICAgbGV0IHBoYXNlO1xuICAgIGRvIHtcbiAgICAgIHBoYXNlID0gdGhpcy4jZG9QbGF5Um91bmRVSSgpO1xuICAgIH0gd2hpbGUgKCFwaGFzZSk7XG5cbiAgICBpZiAocGhhc2UpIHtcbiAgICAgIHRoaXMuI2RvR2FtZUZTTShwaGFzZSk7XG4gICAgfVxuICB9XG5cbiAgI2RvU3dpdGNoUm91bmQoKSB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItbmFtZS1yb3VuZCcpO1xuICAgIGlmICh0aGlzLnBsYXllckIuaHVtYW4pIHtcbiAgICAgIHRoaXMuI2RvU2hvd0hpZGVDdXJyZW50Qm9hcmQoZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLmN1clBsYXllciA9ICh0aGlzLiNnZXRQbGF5ZXJTaWRlKHRoaXMuY3VyUGxheWVyLm9iamVjdCkgPT09ICdBJykgPyB0aGlzLnBsYXllckIgOiB0aGlzLnBsYXllckE7XG4gICAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGBJdCBpcyAke3RoaXMuY3VyUGxheWVyLm9iamVjdC5OYW1lfSByb3VuZGA7XG4gIH1cblxuICAjZG9QbGF5Um91bmRVSSh0YXJnZXQgPSB1bmRlZmluZWQsIHggPSB1bmRlZmluZWQsIHkgPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgcGhhc2U7XG4gICAgbGV0IHBhcmVudDtcbiAgICBsZXQgZWxlbWVudDtcbiAgICBjb25zdCByb3VuZFZhbHVlID0gdGhpcy5jdXJQbGF5ZXIub2JqZWN0LnBsYXlSb3VuZCh0aGlzLiNnZXRPcHBvbmVudFBsYXllcigpLm9iamVjdC5HYW1lQm9hcmQsIHgsIHkpO1xuICAgIFxuICAgIGlmIChyb3VuZFZhbHVlLmV4aXQpIHtcbiAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYXllcj0nQSddYCk7XG4gICAgICAgIGVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD0nJHtyb3VuZFZhbHVlLmF0dGFjay54fSddW2RhdGEteT0nJHtyb3VuZFZhbHVlLmF0dGFjay55fSddYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgZWxlbWVudCA9IHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGlmIChyb3VuZFZhbHVlLndhdGVyKSB7XG4gICAgICAgIFVpR2FtZUNvbnRyb2xsZXIuI3NldFdhdGVyKGVsZW1lbnQpO1xuICAgICAgICAvLyBTd2l0Y2ggcGxheWVyXG4gICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ICE9PSAnKicpIHtcbiAgICAgICAgICB0aGlzLiNkb1N3aXRjaFJvdW5kKCk7XG4gICAgICAgICAgcGhhc2UgPSBwaGFzZXMud2FpdFJvdW5kO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBVaUdhbWVDb250cm9sbGVyLiNzZXRIaXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChyb3VuZFZhbHVlLnN1bmspIHtcbiAgICAgICAgICBVaUdhbWVDb250cm9sbGVyLiNzdW5rU2hpcChwYXJlbnQsIHJvdW5kVmFsdWUuY29vcmRpbmF0ZXMpO1xuICAgICAgICAgIGlmICh0aGlzLiNnZXRQbGF5ZXJTaWRlKHRoaXMuY3VyUGxheWVyLm9iamVjdCkgPT09ICdBJykge1xuICAgICAgICAgICAgdGhpcy5zY29yZS5hICs9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUuYiArPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB0aGlzLmRlc1BsYWNlU2hpcC5sZW5ndGhzO1xuICAgICAgICAgIGlmICgodGhpcy5zY29yZS5hID09PSBsZW5ndGgpIHx8ICh0aGlzLnNjb3JlLmIgPT09IGxlbmd0aCkpIHtcbiAgICAgICAgICAgIHBoYXNlID0gcGhhc2VzLndpbm5lcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBoYXNlO1xuICB9XG5cbiAgI2RvU2hvd1dpbm5lcigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uc3R5bGUuZmlsdGVyID0gJ2JsdXIoMC44cmVtKSc7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XG4gICAgaWYgKG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSBEb21NYW5hZ2VyLnRvZ2dsZURpc3BsYXlCeU5vZGUob3ZlcmxheSk7XG4gICAgY29uc3QgZGl2T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LXBvcHVwJyk7XG4gICAgY29uc3QgZGl2UGxheUdhbWVPdmVybGF5ID0gZGl2T3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcubWFuYWdlLWRpdi1wbGF5Jyk7XG4gICAgaWYgKGRpdlBsYXlHYW1lT3ZlcmxheSkge1xuICAgICAgY29uc3QgZGl2QnV0dG9ucyA9IGRpdlBsYXlHYW1lT3ZlcmxheS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1pY29uJyk7XG4gICAgICBjb25zdCBidXR0b25zID0gWy4uLmRpdkJ1dHRvbnNdO1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9ICAgIFxuICAgIGNvbnN0IGRpdldpbm5lciA9IGRpdk92ZXJsYXkucXVlcnlTZWxlY3RvcignLm1hbmFnZS13aW5uZXInKTtcbiAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBkaXZXaW5uZXIsICdwLXdpbm5lcicsIG51bGwsIGBUaGUgd2lubmVyIGlzICR7dGhpcy5jdXJQbGF5ZXIub2JqZWN0Lk5hbWV9LmApO1xuICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdldpbm5lciwgQnV0dG9uTWFuYWdlci5jcmVhdGVUZXh0QnV0dG9uKCdQbGF5IGFnYWluJywgJ2Zvcm0taWNvbicsICgpID0+IHtcbiAgICAgIHRoaXMuI2RvR2FtZUZTTShwaGFzZXMucmVzdCk7XG4gICAgfSkpO1xuICB9XG5cbiAgc3RhdGljICNkb1Nob3dIaWRlQm9hdChlbGVtZW50LCBzaG93KSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdYJykgcmV0dXJuO1xuICAgIGlmIChzaG93KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NldCcpO1xuICAgIH1cbiAgfVxuXG4gICNkb1Nob3dIaWRlQ3VycmVudEJvYXJkKHNob3csIHBsYXllciA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHBsYXllck9iamVjdCA9IHBsYXllciB8fCB0aGlzLmN1clBsYXllci5vYmplY3Q7XG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gcGxheWVyT2JqZWN0LkdhbWVCb2FyZC5nZXRTaGlwQ29vcmRpbmF0ZXMoKTtcbiAgICBjb25zdCBjdXJQbGF5ZXJTaWRlID0gdGhpcy4jZ2V0UGxheWVyU2lkZShwbGF5ZXJPYmplY3QpO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYXllcj0nJHtjdXJQbGF5ZXJTaWRlfSddYCk7XG4gICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZXMgPT4ge1xuICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke2Nvb3JkaW5hdGUueH0nXVtkYXRhLXk9JyR7Y29vcmRpbmF0ZS55fSddYCk7XG4gICAgICAgIFVpR2FtZUNvbnRyb2xsZXIuI2RvU2hvd0hpZGVCb2F0KGVsZW1lbnQsIHNob3cpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gICNkb0dhbWVGU00obmV4dFN0ZXApIHtcbiAgICAvLyBTZXQgbmV4dCBzdGVwXG4gICAgdGhpcy5zdGVwUGhhc2UgPSBuZXh0U3RlcDtcblxuICAgIC8vIERvIG9wZXJhdGlvblxuICAgIHN3aXRjaCAodGhpcy5zdGVwUGhhc2UpIHtcbiAgICAgIGNhc2UgcGhhc2VzLmNyZWF0ZVBsYXllckE6XG4gICAgICAgIHRoaXMuI2RvQ3JlYXRlVXNlckdhbWVib2FyZCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGhhc2VzLmNyZWF0ZVBsYXllckI6XG4gICAgICAgIGlmICh0aGlzLnBsYXllckIuaHVtYW4pIHtcbiAgICAgICAgICB0aGlzLiNkb0NyZWF0ZVVzZXJHYW1lYm9hcmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiNkb0NyZWF0ZUJvdEdhbWVib2FyZCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwaGFzZXMucHJlcGFyZUJvYXJkczpcbiAgICAgICAgdGhpcy4jZG9QcmVwYXJlQm9hcmRzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwaGFzZXMud2FpdFJvdW5kOlxuICAgICAgICB0aGlzLiNkb1dhaXRSb3VuZCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGhhc2VzLnBsYXlBOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGhhc2VzLnBsYXlCOlxuICAgICAgICBpZiAoIXRoaXMucGxheWVyQi5odW1hbikge1xuICAgICAgICAgIHRoaXMuI2RvUGxheVJvdW5kQUkoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGhhc2VzLndpbm5lcjpcbiAgICAgICAgdGhpcy4jZG9TaG93V2lubmVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwaGFzZXMucmVzdDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZG9SZXNldEdhbWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICdTdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IFVpQ29udHJvbGxlciBmcm9tICdWaWV3L3VpLWNvbnRyb2xsZXInO1xuXG5jb25zdCB1aUNvbnRyb2xsZXIgPSBuZXcgVWlDb250cm9sbGVyKCk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIHVpQ29udHJvbGxlci5kb0xvYWRVSSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==