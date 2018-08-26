(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n* ANIMATION \r\n*/\r\n@-webkit-keyframes lineAnimation1 {\r\n    from {stroke-dashoffset: 1000;}\r\n    to {stroke-dashoffset: 0;}\r\n}\r\n@keyframes lineAnimation1 {\r\n    from {stroke-dashoffset: 1000;}\r\n    to {stroke-dashoffset: 0;}\r\n}\r\n@-webkit-keyframes lineAnimation2 {\r\n    25% {stroke-dashoffset: 1000;}\r\n    100% {stroke-dashoffset: 0;}\r\n}\r\n@keyframes lineAnimation2 {\r\n    25% {stroke-dashoffset: 1000;}\r\n    100% {stroke-dashoffset: 0;}\r\n}\r\n@-webkit-keyframes lineAnimation3 {\r\n    50% {stroke-dashoffset: 1000;}\r\n    100% {stroke-dashoffset: 0;}\r\n}\r\n@keyframes lineAnimation3 {\r\n    50% {stroke-dashoffset: 1000;}\r\n    100% {stroke-dashoffset: 0;}\r\n}\r\n@-webkit-keyframes reverseLineAnimation1 {\r\n    from {stroke-dashoffset: 0;}\r\n    to {stroke-dashoffset: 1000;}\r\n}\r\n@keyframes reverseLineAnimation1 {\r\n    from {stroke-dashoffset: 0;}\r\n    to {stroke-dashoffset: 1000;}\r\n}\r\n@-webkit-keyframes reverseLineAnimation2 {\r\n    25% {stroke-dashoffset: 0;}\r\n    100% {stroke-dashoffset: 1000; fill:transparent; }\r\n}\r\n@keyframes reverseLineAnimation2 {\r\n    25% {stroke-dashoffset: 0;}\r\n    100% {stroke-dashoffset: 1000; fill:transparent; }\r\n}\r\n@-webkit-keyframes lineAnimationFill1 {\r\n    25% {stroke-dashoffset: 1000; fill:transparent;}\r\n    100% {stroke-dashoffset: 0; fill:black;}\r\n}\r\n@keyframes lineAnimationFill1 {\r\n    25% {stroke-dashoffset: 1000; fill:transparent;}\r\n    100% {stroke-dashoffset: 0; fill:black;}\r\n}\r\n@-webkit-keyframes lineAnimationFill2 {\r\n    50% {stroke-dashoffset: 1000; fill:transparent;}\r\n    100% {stroke-dashoffset: 0; fill:black;}\r\n}\r\n@keyframes lineAnimationFill2 {\r\n    50% {stroke-dashoffset: 1000; fill:transparent;}\r\n    100% {stroke-dashoffset: 0; fill:black;}\r\n}\r\n@-webkit-keyframes fadeInAnimation1 {\r\n    50% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n@keyframes fadeInAnimation1 {\r\n    50% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n@-webkit-keyframes fadeInAnimation2 {\r\n    65% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n@keyframes fadeInAnimation2 {\r\n    65% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n@-webkit-keyframes fadeInAnimation3 {\r\n    80% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n@keyframes fadeInAnimation3 {\r\n    80% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n@-webkit-keyframes fadeInAnimation4 {\r\n    25% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n@keyframes fadeInAnimation4 {\r\n    25% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n@-webkit-keyframes fadeInAnimation5 {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n@keyframes fadeInAnimation5 {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n@-webkit-keyframes fadeOutAnimation1 {\r\n    50% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n@keyframes fadeOutAnimation1 {\r\n    50% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n@-webkit-keyframes fadeOutAnimation2 {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n@keyframes fadeOutAnimation2 {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n@-webkit-keyframes fadeInToRightAnimation1 {\r\n    50% {opacity: 0; padding-right: 20px;}\r\n    100% {opacity: 1; padding-right: 10px;}\r\n}\r\n@keyframes fadeInToRightAnimation1 {\r\n    50% {opacity: 0; padding-right: 20px;}\r\n    100% {opacity: 1; padding-right: 10px;}\r\n}\r\n@-webkit-keyframes fadeInToLeftAnimation1 {\r\n    50% {opacity: 0; padding-left: 20px;}\r\n    100% {opacity: 1; padding-left: 10px;}\r\n}\r\n@keyframes fadeInToLeftAnimation1 {\r\n    50% {opacity: 0; padding-left: 20px;}\r\n    100% {opacity: 1; padding-left: 10px;}\r\n}\r\n@-webkit-keyframes reverseFadeInToRightAnimation1 {\r\n    50% {opacity: 1; padding-right: 10px;}\r\n    100% {opacity: 0; padding-right: 20px;}\r\n}\r\n@keyframes reverseFadeInToRightAnimation1 {\r\n    50% {opacity: 1; padding-right: 10px;}\r\n    100% {opacity: 0; padding-right: 20px;}\r\n}\r\n@-webkit-keyframes reverseFadeInToLeftAnimation1 {\r\n    50% {opacity: 1; padding-left: 10px;}\r\n    100% {opacity: 0; padding-left: 20px;}\r\n}\r\n@keyframes reverseFadeInToLeftAnimation1 {\r\n    50% {opacity: 1; padding-left: 10px;}\r\n    100% {opacity: 0; padding-left: 20px;}\r\n}\r\n@-webkit-keyframes boxShadowFadeIn {\r\n    30% {box-shadow: 0px 0px 0px black;}\r\n    100% {box-shadow: 0px 0px 20px black;}\r\n}\r\n@keyframes boxShadowFadeIn {\r\n    30% {box-shadow: 0px 0px 0px black;}\r\n    100% {box-shadow: 0px 0px 20px black;}\r\n}\r\n@-webkit-keyframes repeatableLineAnimation1 {\r\n    to {\r\n        stroke-dashoffset: 1000;\r\n    }\r\n}\r\n@keyframes repeatableLineAnimation1 {\r\n    to {\r\n        stroke-dashoffset: 1000;\r\n    }\r\n}\r\n/* \r\n* WHOLE PAGE \r\n*/\r\n.home-page-container {\r\n    width: 100vw;\r\n    height: 4550px;\r\n}\r\n.background-color {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -999;\r\n    background-color: #ffffff;\r\n}\r\n/* \r\n* Down arrow \r\n*/\r\n.fixed-down-arrow {\r\n    position: fixed;\r\n    width: 50px;\r\n    height: 25px;\r\n    bottom: 70px;\r\n    left: calc(50% - (50px / 2));\r\n}\r\n.down-arrow-container {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n}\r\n.down-arrow-container.top {\r\n    -webkit-animation: fadeInAnimation5 1s forwards;\r\n            animation: fadeInAnimation5 1s forwards;\r\n}\r\n.down-arrow-container.scrolled {\r\n    -webkit-animation: fadeOutAnimation2 1s forwards;\r\n            animation: fadeOutAnimation2 1s forwards;\r\n}\r\n.down-arrow-line {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 10;\r\n    fill: transparent;\r\n    -webkit-animation: repeatableLineAnimation1 50s infinite;\r\n            animation: repeatableLineAnimation1 50s infinite;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n/* \r\n* TOP PAGE \r\n*/\r\n.top {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 400px;\r\n    -webkit-animation: boxShadowFadeIn 2s forwards;\r\n            animation: boxShadowFadeIn 2s forwards;\r\n}\r\n.backgroundImage {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n    background-color: #262626;\r\n    background-image: url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23474747' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\");\r\n    opacity: 0;\r\n    -webkit-animation: fadeInAnimation3 1s forwards;\r\n            animation: fadeInAnimation3 1s forwards;\r\n}\r\n.welcome-text-container {\r\n    position: absolute;\r\n    height: 5em;\r\n    width: 100vw;\r\n    top: calc(50% - 5em);\r\n    text-align: center;\r\n}\r\n.welcome-text {\r\n    font-size: 5em;\r\n    color: white;\r\n    letter-spacing: 5px;\r\n    font-family: 'Roboto', sans-serif;\r\n    text-shadow: 2px 2px 5px black;\r\n    white-space: nowrap;\r\n    opacity: 0;\r\n    -webkit-animation: fadeInAnimation3 1s forwards;\r\n            animation: fadeInAnimation3 1s forwards;\r\n}\r\n.profile-picture {\r\n    position: absolute;\r\n    width: 250px;\r\n    height: 250px;\r\n    left: calc((50% - 250px/2) - 4px);\r\n    top: calc(100% - 250px/2);\r\n    opacity: 0;\r\n    -webkit-animation: fadeInAnimation4 1s forwards;\r\n            animation: fadeInAnimation4 1s forwards;\r\n}\r\n.profile-picture-animation-line-container {\r\n    position: absolute;\r\n    top: calc(100% - 250px / 2);\r\n    left: calc((50% - 250px / 2) - 4px);\r\n    height: 250px;\r\n    width: 250px;\r\n    z-index: 1;\r\n}\r\n.profile-picture-animation-line {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation1 1s forwards;\r\n            animation: lineAnimation1 1s forwards;\r\n}\r\n.profile-picture-shadow {\r\n    position: absolute;\r\n    top: calc(100% - 178px / 2);\r\n    left: calc((50% - 178px / 2) - 4px);\r\n    height: 178px;\r\n    width: 178px;\r\n    z-index: 1;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    -webkit-animation: boxShadowFadeIn 2s forwards;\r\n            animation: boxShadowFadeIn 2s forwards;\r\n}\r\n.top-seperator-right {\r\n    position: absolute;\r\n    top: calc(100% - 1px);\r\n    left: calc((50% + 250px/2) - 4px);\r\n    height: 2px;\r\n    width: 50%;\r\n}\r\n.top-seperator-right-line {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 4px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation2 2s forwards;\r\n            animation: lineAnimation2 2s forwards;\r\n}\r\n.top-seperator-left {\r\n    position: absolute;\r\n    top: calc(100% - 1px);\r\n    right: calc((50% + 250px/2) + 4px);\r\n    height: 2px;\r\n    width: 50%;\r\n}\r\n.top-seperator-left-line {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 4px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation2 2s forwards;\r\n            animation: lineAnimation2 2s forwards;\r\n}\r\n/* \r\n*   CONTENT PAGE \r\n*/\r\n.page {\r\n    position: relative;\r\n    top: 0;\r\n    width: 1000px;\r\n    height: 3625px;\r\n    left: calc(50% - 1000px/2);\r\n}\r\n.quote-container {\r\n    position: absolute;\r\n    height: auto;\r\n    width: auto;\r\n    text-align: center;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 150px;\r\n    opacity: 0;\r\n}\r\n.quote-container.animate {\r\n    -webkit-animation: fadeInAnimation5 0.5s forwards;\r\n            animation: fadeInAnimation5 0.5s forwards;\r\n}\r\n.quote-container.reverse {\r\n    -webkit-animation: fadeOutAnimation2 0.5s forwards;\r\n            animation: fadeOutAnimation2 0.5s forwards;\r\n}\r\n.quote-text {\r\n    margin: auto;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1.5em;\r\n}\r\n.quote-author {\r\n    margin: auto;\r\n    padding-top: 10px;\r\n    font-size: 1em;\r\n}\r\n.scroll-animation-line-container {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.scroll-animation-line {\r\n    stroke: gray;\r\n    stroke-width: 2;\r\n    fill: transparent;\r\n}\r\n/* book icon */\r\n.book-icon-container {\r\n    position: absolute;\r\n    top: calc((625px - (200px/2)) - 4px);\r\n    left: 0;\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\n.book-icon-container-animation-line {\r\n    fill: transparent;\r\n}\r\n.book-icon-container-animation-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation1 1s forwards;\r\n            animation: lineAnimation1 1s forwards;\r\n}\r\n.book-icon-container-animation-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.book-icon-animation-line-foreground {\r\n    fill: transparent;\r\n}\r\n.book-icon-animation-line-foreground.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation2 2s forwards;\r\n            animation: lineAnimation2 2s forwards;\r\n}\r\n.book-icon-animation-line-foreground.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation2 1.5s forwards;\r\n            animation: reverseLineAnimation2 1.5s forwards;\r\n}\r\n.book-icon-animation-line-background {\r\n    fill: transparent;\r\n}\r\n.book-icon-animation-line-background.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimationFill2 2s forwards;\r\n            animation: lineAnimationFill2 2s forwards;\r\n}\r\n.book-icon-animation-line-background.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: black;\r\n    -webkit-animation: reverseLineAnimation2 1.5s forwards;\r\n            animation: reverseLineAnimation2 1.5s forwards;\r\n}\r\n/* about me */\r\n.about-me-container {\r\n    position: absolute;\r\n    top: calc((650px - (600px/2)) - 4px);\r\n    right: 0px;\r\n    width: 600px;\r\n    height: 600px;\r\n}\r\n.about-me-title-container {\r\n    position: relative;\r\n    height: 100px;\r\n    width: 100%;\r\n}\r\n.about-me-title-text {\r\n    opacity: 0;\r\n}\r\n.about-me-title-text.animate {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 4em;\r\n    float: right;\r\n    -webkit-animation: fadeInToRightAnimation1 1s forwards;\r\n            animation: fadeInToRightAnimation1 1s forwards;\r\n}\r\n.about-me-title-text.reverse {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 4em;\r\n    float: right;\r\n    opacity: 1;\r\n    -webkit-animation: reverseFadeInToRightAnimation1 0.6s forwards;\r\n            animation: reverseFadeInToRightAnimation1 0.6s forwards;\r\n}\r\n.about-me-title-seperator-container {\r\n    position: relative;\r\n    height: 25px;\r\n    width: 100%;\r\n}\r\n.about-me-title-seperator-line {\r\n    fill: transparent;\r\n}\r\n.about-me-title-seperator-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    fill: transparent;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    -webkit-animation: lineAnimation1 3s forwards;\r\n            animation: lineAnimation1 3s forwards;\r\n}\r\n.about-me-title-seperator-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    fill: transparent;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.about-me-text {\r\n    opacity: 0;\r\n}\r\n.about-me-text.animate {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    float: right;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n    -webkit-animation: fadeInAnimation1 1.4s forwards;\r\n            animation: fadeInAnimation1 1.4s forwards;\r\n}\r\n.about-me-text.reverse {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    float: right;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n    opacity: 1;\r\n    -webkit-animation: fadeOutAnimation1 0.5s forwards;\r\n            animation: fadeOutAnimation1 0.5s forwards;\r\n}\r\n/* Curlybracket icon */\r\n.curlybracket-icon-container {\r\n    position: absolute;\r\n    top: calc((1625px - (200px/2)) - 4px);\r\n    right: 0;\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\n.curlybracket-icon-container-animation-line {\r\n    fill: transparent;\r\n}\r\n.curlybracket-icon-container-animation-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation1 1s forwards;\r\n            animation: lineAnimation1 1s forwards;\r\n}\r\n.curlybracket-icon-container-animation-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.curlybracket-right-icon-animation-line {\r\n    fill: transparent;\r\n}\r\n.curlybracket-right-icon-animation-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation2 2s forwards;\r\n            animation: lineAnimation2 2s forwards;\r\n}\r\n.curlybracket-right-icon-animation-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation2 1.5s forwards;\r\n            animation: reverseLineAnimation2 1.5s forwards;\r\n}\r\n.curlybracket-left-icon-animation-line {\r\n    fill: transparent;\r\n}\r\n.curlybracket-left-icon-animation-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation2 2s forwards;\r\n            animation: lineAnimation2 2s forwards;\r\n}\r\n.curlybracket-left-icon-animation-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation2 1.5s forwards;\r\n            animation: reverseLineAnimation2 1.5s forwards;\r\n}\r\n/* Education */\r\n.education-container {\r\n    position: absolute;\r\n    top: calc((1625px - (600px/2)) - 4px);\r\n    left: 0px;\r\n    width: 600px;\r\n    height: 600px;\r\n}\r\n.education-title-container {\r\n    position: relative;\r\n    height: 100px;\r\n    width: 100%;\r\n}\r\n.education-title-text {\r\n    opacity: 0;\r\n}\r\n.education-title-text.animate {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 4em;\r\n    float: left;\r\n    -webkit-animation: fadeInToLeftAnimation1 1s forwards;\r\n            animation: fadeInToLeftAnimation1 1s forwards;\r\n}\r\n.education-title-text.reverse {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 4em;\r\n    float: left;\r\n    opacity: 1;\r\n    -webkit-animation: reverseFadeInToLeftAnimation1 0.6s forwards;\r\n            animation: reverseFadeInToLeftAnimation1 0.6s forwards;\r\n}\r\n.education-title-seperator-container {\r\n    position: relative;\r\n    height: 25px;\r\n    width: 100%;\r\n}\r\n.education-title-seperator-line {\r\n    fill: transparent;\r\n}\r\n.education-title-seperator-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    fill: transparent;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    -webkit-animation: lineAnimation1 3s forwards;\r\n            animation: lineAnimation1 3s forwards;\r\n}\r\n.education-title-seperator-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    fill: transparent;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.education-text {\r\n    opacity: 0;\r\n}\r\n.education-text.animate {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    float: left;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n    -webkit-animation: fadeInAnimation1 1.4s forwards;\r\n            animation: fadeInAnimation1 1.4s forwards;\r\n}\r\n.education-text.reverse {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    float: left;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n    opacity: 1;\r\n    -webkit-animation: fadeOutAnimation1 0.5s forwards;\r\n            animation: fadeOutAnimation1 0.5s forwards;\r\n}\r\n/* Bag icon */\r\n.bag-icon-container {\r\n    position: absolute;\r\n    top: calc((2625px - (200px/2)) - 4px);\r\n    left: 0;\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\n.bag-icon-container-animation-line {\r\n    fill: transparent;\r\n}\r\n.bag-icon-container-animation-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation1 1s forwards;\r\n            animation: lineAnimation1 1s forwards;\r\n}\r\n.bag-icon-container-animation-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.bag-icon-animation-line {\r\n    fill: transparent;\r\n}\r\n.bag-icon-animation-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation2 2s forwards;\r\n            animation: lineAnimation2 2s forwards;\r\n}\r\n.bag-icon-animation-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation2 1.5s forwards;\r\n            animation: reverseLineAnimation2 1.5s forwards;\r\n}\r\n/* Experience page */\r\n.experience-container {\r\n    position: absolute;\r\n    top: calc((2625px - (600px/2)) - 4px);\r\n    right: 0px;\r\n    width: 600px;\r\n    height: 600px;\r\n}\r\n.experience-title-container {\r\n    position: relative;\r\n    height: 100px;\r\n    width: 100%;\r\n}\r\n.experience-title-text {\r\n    opacity: 0;\r\n}\r\n.experience-title-text.animate {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 4em;\r\n    float: right;\r\n    -webkit-animation: fadeInToRightAnimation1 1s forwards;\r\n            animation: fadeInToRightAnimation1 1s forwards;\r\n}\r\n.experience-title-text.reverse {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 4em;\r\n    float: right;\r\n    opacity: 1;\r\n    -webkit-animation: reverseFadeInToRightAnimation1 0.6s forwards;\r\n            animation: reverseFadeInToRightAnimation1 0.6s forwards;\r\n}\r\n.experience-title-seperator-container {\r\n    position: relative;\r\n    height: 25px;\r\n    width: 100%;\r\n}\r\n.experience-title-seperator-line {\r\n    fill: transparent;\r\n}\r\n.experience-title-seperator-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    fill: transparent;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    -webkit-animation: lineAnimation1 3s forwards;\r\n            animation: lineAnimation1 3s forwards;\r\n}\r\n.experience-title-seperator-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    fill: transparent;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.experience-text {\r\n    opacity: 0;\r\n}\r\n.experience-text.animate {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    float: right;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n    -webkit-animation: fadeInAnimation1 1.4s forwards;\r\n            animation: fadeInAnimation1 1.4s forwards;\r\n}\r\n.experience-text.reverse {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    float: right;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n    opacity: 1;\r\n    -webkit-animation: fadeOutAnimation1 0.5s forwards;\r\n            animation: fadeOutAnimation1 0.5s forwards;\r\n}\r\n.projects-text {\r\n    cursor: pointer;\r\n}\r\n/* Card icon */\r\n.card-icon-container {\r\n    position: absolute;\r\n    top: calc((3625px - (200px/2)) - 4px);\r\n    right: 0;\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\n.card-icon-container-animation-line {\r\n    fill: transparent;\r\n}\r\n.card-icon-container-animation-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation1 1s forwards;\r\n            animation: lineAnimation1 1s forwards;\r\n}\r\n.card-icon-container-animation-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.card-icon-animation-line-1 {\r\n    fill: transparent;\r\n}\r\n.card-icon-animation-line-1.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation1 2s forwards;\r\n            animation: lineAnimation1 2s forwards;\r\n}\r\n.card-icon-animation-line-1.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.card-icon-animation-person {\r\n    fill: transparent;\r\n}\r\n.card-icon-animation-person.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation1 2s forwards;\r\n            animation: lineAnimation1 2s forwards;\r\n}\r\n.card-icon-animation-person.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.card-icon-animation-person-head {\r\n    fill: white;\r\n}\r\n.card-icon-animation-person-head.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: white;\r\n    -webkit-animation: lineAnimation1 2s forwards;\r\n            animation: lineAnimation1 2s forwards;\r\n}\r\n.card-icon-animation-person-head.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: white;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.card-icon-animation-text-1 {\r\n    fill: transparent;\r\n}\r\n.card-icon-animation-text-1.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation1 2s forwards;\r\n            animation: lineAnimation1 2s forwards;\r\n}\r\n.card-icon-animation-text-1.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.card-icon-animation-text-2 {\r\n    fill: transparent;\r\n}\r\n.card-icon-animation-text-2.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation1 3s forwards;\r\n            animation: lineAnimation1 3s forwards;\r\n}\r\n.card-icon-animation-text-2.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.card-icon-animation-text-3 {\r\n    fill: transparent;\r\n}\r\n.card-icon-animation-text-3.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    fill: transparent;\r\n    -webkit-animation: lineAnimation1 4s forwards;\r\n            animation: lineAnimation1 4s forwards;\r\n}\r\n.card-icon-animation-text-3.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    fill: transparent;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n/* Contact information page */\r\n.contact-info-container {\r\n    position: absolute;\r\n    top: calc((3550px - (100px/2)) - 4px);\r\n    left: 0px;\r\n    width: 700px;\r\n    height: 105px;\r\n}\r\n.contact-info-title-container {\r\n    position: relative;\r\n    height: 100px;\r\n    width: 100%;\r\n}\r\n.contact-info-title-text {\r\n    opacity: 0;\r\n}\r\n.contact-info-title-text.animate {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 4em;\r\n    float: left;\r\n    -webkit-animation: fadeInToLeftAnimation1 1s forwards;\r\n            animation: fadeInToLeftAnimation1 1s forwards;\r\n}\r\n.contact-info-title-text.reverse {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 4em;\r\n    float: left;\r\n    opacity: 1;\r\n    -webkit-animation: reverseFadeInToLeftAnimation1 0.6s forwards;\r\n            animation: reverseFadeInToLeftAnimation1 0.6s forwards;\r\n}\r\n.contact-info-title-seperator-container {\r\n    position: relative;\r\n    height: 25px;\r\n    width: 100%;\r\n}\r\n.contact-info-title-seperator-line {\r\n    fill: transparent;\r\n}\r\n.contact-info-title-seperator-line.animate {\r\n    position: absolute;\r\n    stroke: black;\r\n    fill: transparent;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    -webkit-animation: lineAnimation1 3s forwards;\r\n            animation: lineAnimation1 3s forwards;\r\n}\r\n.contact-info-title-seperator-line.reverse {\r\n    position: absolute;\r\n    stroke: black;\r\n    fill: transparent;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 0;\r\n    -webkit-animation: reverseLineAnimation1 1s forwards;\r\n            animation: reverseLineAnimation1 1s forwards;\r\n}\r\n.contact-info-email-container {\r\n    width: 100%;\r\n    height: 20px;\r\n    padding-left: 15px;\r\n    padding-bottom: 5px;\r\n}\r\n.contact-info-email-text-1 {\r\n    display: inline;\r\n    opacity: 0;\r\n}\r\n.contact-info-email-text-1.animate {\r\n    display: inline;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    -webkit-animation: fadeInAnimation1 1.4s forwards;\r\n            animation: fadeInAnimation1 1.4s forwards;\r\n}\r\n.contact-info-email-text-1.reverse {\r\n    display: inline;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    opacity: 1;\r\n    -webkit-animation: fadeOutAnimation1 0.5s forwards;\r\n            animation: fadeOutAnimation1 0.5s forwards;\r\n}\r\n.contact-info-email {\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    cursor: default;\r\n}\r\n.contact-info-email.animate {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    color: black;\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n    -webkit-animation: fadeInAnimation1 1.4s forwards;\r\n            animation: fadeInAnimation1 1.4s forwards;\r\n}\r\n.contact-info-email.reverse {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    opacity: 1;\r\n    color: black;\r\n    pointer-events: none;\r\n    cursor: default;\r\n    -webkit-animation: fadeOutAnimation1 0.5s forwards;\r\n            animation: fadeOutAnimation1 0.5s forwards;\r\n}\r\n.contact-info-github-icon-container {\r\n    padding-left: 15px;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    cursor: default;\r\n}\r\n.contact-info-github-icon-container.animate {\r\n    padding-left: 15px;\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n    -webkit-animation: fadeInAnimation1 1.4s forwards;\r\n            animation: fadeInAnimation1 1.4s forwards;\r\n}\r\n.contact-info-github-icon-container.reverse {\r\n    padding-left: 15px;\r\n    opacity: 1;\r\n    pointer-events: none;\r\n    cursor: default;\r\n    -webkit-animation: fadeOutAnimation1 0.5s forwards;\r\n            animation: fadeOutAnimation1 0.5s forwards;\r\n}\r\n.github-icon {\r\n    width: 76px;\r\n    height: auto;\r\n    padding-right: 10px;\r\n}\r\n.contact-info-linkedin-icon-container {\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    cursor: default;\r\n}\r\n.contact-info-linkedin-icon-container.animate {\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n    -webkit-animation: fadeInAnimation1 1.4s forwards;\r\n            animation: fadeInAnimation1 1.4s forwards;\r\n}\r\n.contact-info-linkedin-icon-container.reverse {\r\n    opacity: 1;\r\n    pointer-events: none;\r\n    cursor: default;\r\n    -webkit-animation: fadeOutAnimation1 0.5s forwards;\r\n            animation: fadeOutAnimation1 0.5s forwards;\r\n}\r\n.linkedin-icon {\r\n    width: 70px;\r\n    height: auto;\r\n    padding-left: 10px;\r\n}\r\n/* \r\n* BOTTOM MENU \r\n*/\r\n.bottom {\r\n    position: fixed;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 50px;\r\n    left: 0%;\r\n    bottom: 0%;\r\n}\r\n.bottom-menu-background {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n}\r\n.made-by-container {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 200px;\r\n    height: 100%;\r\n    text-align: center;\r\n    vertical-align: top;\r\n}\r\n.made-by-doalfikar {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%); \r\n    margin: 0 auto;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    letter-spacing: 0.15em;\r\n    color: white;\r\n}\r\n.section-seperator {\r\n    position: relative;\r\n    display: inline-block;\r\n    top: 10%;\r\n    width: 1px;\r\n    height: 80%;\r\n    background-color: white;\r\n    vertical-align: top;\r\n}\r\n.section-container {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 545px;\r\n    height: 100%;\r\n    text-align: center;\r\n    vertical-align: top;\r\n}\r\n.section-about-me-container {\r\n    display: inline-block;\r\n}\r\n.section-about-me {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    letter-spacing: 0.15em;\r\n    color: white;\r\n    padding-right: 20px;\r\n    cursor: pointer;\r\n}\r\n.section-education-container {\r\n    display: inline-block;\r\n}\r\n.section-education {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    letter-spacing: 0.15em;\r\n    color: white;\r\n    padding-right: 20px;\r\n    cursor: pointer;\r\n}\r\n.section-experience-container {\r\n    display: inline-block;\r\n}\r\n.section-experience {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    letter-spacing: 0.15em;\r\n    color: white;\r\n    padding-right: 20px;\r\n    cursor: pointer;\r\n}\r\n.section-contact-info-container {\r\n    display: inline-block;\r\n}\r\n.section-contact-info {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    letter-spacing: 0.15em;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.section-underline.aboutme {\r\n    position: absolute;\r\n    width: 99px;\r\n    height: 2px;\r\n    background-color: white;\r\n    top: 34px;\r\n    left: 10px;\r\n}\r\n.section-underline.education {\r\n    position: absolute;\r\n    width: 106px;\r\n    height: 2px;\r\n    background-color: white;\r\n    top: 34px;\r\n    left: 129px;\r\n}\r\n.section-underline.experience {\r\n    position: absolute;\r\n    width: 116px;\r\n    height: 2px;\r\n    background-color: white;\r\n    top: 34px;\r\n    left: 256px;\r\n}\r\n.section-underline.contactinfo {\r\n    position: absolute;\r\n    width: 139px;\r\n    height: 2px;\r\n    background-color: white;\r\n    top: 34px;\r\n    left: 393px;\r\n}\r\n.bottom-icon-container {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 130px;\r\n    height: 100%;\r\n    text-align: center;\r\n    vertical-align: top;\r\n}\r\n.bottom-icon-github-container {\r\n    position: relative;\r\n    display: inline-block;\r\n    height: 100%;\r\n    width: 45px;\r\n    padding-right: 15px;\r\n}\r\n.bottom-icon-github-image {\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    top: 50%;\r\n    left: 0%;\r\n    -webkit-transform: translate(-0%, -50%);\r\n            transform: translate(-0%, -50%);\r\n    width: 45px;\r\n}\r\n.bottom-icon-linkedin-container {\r\n    position: relative;\r\n    display: inline-block;\r\n    height: 100%;\r\n    width: 42px;\r\n    top: 1px;\r\n}\r\n.bottom-icon-linkedin-image {\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    top: 50%;\r\n    left: 0%;\r\n    -webkit-transform: translate(-0%, -50%);\r\n            transform: translate(-0%, -50%);\r\n    width: 42px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page-container\" #page>\n  <div class=\"background-color\" #screenWidthHeight></div>\n\n  <div class=\"fixed-down-arrow\">\n    <svg class=\"down-arrow-container\" #downArrowAnimation>\n      <polyline class=\"down-arrow-line\" points=\"1,1 25,24, 49,1 1,1\"/>\n    </svg>\n  </div>\n\n  <div class=\"top\">\n    <img src=\"./assets/profilbillede-diamondshape.png\" class=\"profile-picture\">\n    <div class=\"profile-picture-shadow\"></div>\n    <div class=backgroundImage></div>\n\n    <div class=\"welcome-text-container\">\n      <span class=\"welcome-text\">WELCOME TO MY WEBSITE</span>\n    </div>\n\n    <div class=\"top-svg-container\">\n      <svg class=\"profile-picture-animation-line-container\">\n        <polyline class=\"profile-picture-animation-line\" points=\"125,0 250,125 125,250 0,125 125,0\"/>\n      </svg>\n      <svg class=\"top-seperator-right\" viewBox=\"0 0 100 2\" preserveAspectRatio=\"none\">\n        <polyline class=\"top-seperator-right-line\" points=\"0,0 100,0\"/>\n      </svg>\n      <svg class=\"top-seperator-left\" viewBox=\"0 0 100 2\" preserveAspectRatio=\"none\">\n        <polyline class=\"top-seperator-left-line\" points=\"100,0 0,0\"/>\n      </svg>\n    </div>\n  </div>\n\n  <div class=\"page\">\n    <div class=\"quote-container\" #quote>\n      <p class=\"quote-text\"><i>\"Any fool can write code that a computer can understand. <br/>Good programmers write code that humans can understand.\"</i></p>\n      <p class=\"quote-author\"><i>― Martin Fowler</i></p>\n    </div>\n\n    <svg class=\"scroll-animation-line-container\">\n      <polyline class=\"scroll-animation-line\" points=\"621,0 0,621 1000,1621 0,2621 1000,3621\" [style.stroke-dasharray]=\"dasharray\" [style.stroke-dashoffset]=\"dashoffset\"/>\n    </svg>\n\n    <svg class=\"book-icon-container\">\n      <polyline class=\"book-icon-container-animation-line\" points=\"100,0 0,100 100,200 200,100 100,0\" #bookIconContainerAnimation/>\n      <polyline class=\"book-icon-animation-line-foreground\" points=\"100,70 65,65 65,120 100,125 135,120 135,65 100,70 100,125\" #bookIconForegroundAnimation/>\n      <polyline class=\"book-icon-animation-line-background\" points=\"100,125 60,122 60,68 65,68 65,120 100,125 140,122 140,68 135,68 135,120 100,125\" #bookIconBackgroundAnimation/>\n    </svg>\n\n    <div class=\"about-me-container\">\n      <div class=\"about-me-title-container\">\n          <p class=\"about-me-title-text\" #aboutMeTitleTextAnimation>ABOUT ME</p>\n      </div>\n      <svg class=\"about-me-title-seperator-container\">\n        <polyline class=\"about-me-title-seperator-line\" points=\"580,12 578,10 576,12 580,16 584,12 578,6 572,12 580,20 588,12 578,2 568,12 200,12\" #aboutMeTitleSeperatorAnimation/>\n      </svg>\n      <p class=\"about-me-text\" #aboutMeTextAnimation>My name is Doalfikar and I study Master of Science in Software Engineering. I am currently on my second semester at \n        Syddansk Universitet (SDU) and expect to complete my education in 2019.<br/><br/>I would describe myself as a self-motivated person that has an interest for a wide variety \n        of technological topics. Throughout my education, I have worked on many, small and big projects that offered different challenges. In these projects, \n        I am the group member that maintains communication and trust with the group, as well as keeping an overview on the project. I contribute to the projects \n        whereever I can with my academic skills in order to complete the task at hand.<br/><br/>When I am not busy with university, I like to program in my spare time. \n        I use Android Studio to develop mobile applications, and Unity for game development. Otherwise I like to spend time with my family and friends.<br/>\n        I speak the following languages: Danish, English, and Arabic.</p>\n    </div>\n\n    <svg class=\"curlybracket-icon-container\">\n      <polyline class=\"curlybracket-icon-container-animation-line\" points=\"100,0 200,100 100,200 0,100 100,0\" #curlybracketIconContainerAnimation/>\n      <polyline class=\"curlybracket-right-icon-animation-line\" points=\"120,70 124,70 128,74 128,96 132,100 128,104 128,130 124,134 120,134\" #curlybracketRightIconAnimation/>\n      <polyline class=\"curlybracket-left-icon-animation-line\" points=\"80,134 76,134 72,130 72,104 68,100 72,96 72,74 76,70 80,70\" #curlybracketLeftIconAnimation/>\n    </svg>\n\n    <div class=\"education-container\">\n      <div class=\"education-title-container\">\n        <p class=\"education-title-text\" #educationTitleTextAnimation>EDUCATION</p>\n      </div>\n      <svg class=\"education-title-seperator-container\">\n        <polyline class=\"education-title-seperator-line\" points=\"20,12 22,14 24,12 20,8 16,12 22,18 28,12 20,4 12,12 22,22 32,12 368,12\" #educationTitleSeperatorAnimation/>\n      </svg>\n      <p class=\"education-text\" #educationTextAnimation><b>Master's Degree</b> in Software Engineering<br/>2017 — 2019<br/>University of Southern Denmark (SDU), Odense 5230<br/><br/>\n      <b>Bachelor's Degree</b> in Software Engineering<br/>2014 — 2017<br/>University of Southern Denmark (SDU), Odense 5230<br/><br/><b>STX;</b> Mathematics A, Physics B, \n      Chemistry B<br/>2011 — 2014<br/>Tornbjerg-Gymnasium, Odense 5220<br/><br/><b>Programming languages</b><br/>Java, C#, JavaScript, TypeScript, HTML and CSS.<br/><br/>\n      <b>Programming tools</b><br/>Microsoft Visual Studio IDE, NetBeans IDE, Eclipse IDE, Android Studio, Microsoft SQL Server, Visual Studio Code, Angular 2 and Unity.</p>\n    </div>\n\n    <svg class=\"bag-icon-container\">\n      <polyline class=\"bag-icon-container-animation-line\" points=\"100,0 200,100 100,200 0,100 100,0\" #bagIconContainerAnimation/>\n      <polyline class=\"bag-icon-animation-line\" points=\"100,70 110,70 114,74 114,76 120,76 120,74 110,64 90,64 80,74 80,76 86,76 86,74 90,70 100,70 110,70 114,74 114,76 150,76 150,125 146,129 54,129 50,125 50,76 150,76 150,95 103,95 103,90 97,90 97,100 103,100 103,90 97,90 97,95 50,95\" #bagIconAnimation/>\n    </svg>\n\n    <div class=\"experience-container\">\n      <div class=\"experience-title-container\">\n        <p class=\"experience-title-text\" #experienceTitleTextAnimation>EXPERIENCE</p>\n      </div>\n      <svg class=\"experience-title-seperator-container\">\n        <polyline class=\"experience-title-seperator-line\" points=\"580,12 578,10 576,12 580,16 584,12 578,6 572,12 580,20 588,12 578,2 568,12 200,12\" #experienceTitleSeperatorAnimation/>\n      </svg>\n      <p class=\"experience-text\" #experienceTextAnimation>\n        <b>IKEA, Service employee</b><br/>Gathering and sorting shopping carts, as well as communicating with customers and answering their questions.<br/>2010 — 2012<br/><br/>\n        <b>Projects</b><br/><u><a class=\"projects-text\" (click)=\"routeToProjectsPage()\">Click here</a></u> to view some of the projects I have worked on.<br/>\n      </p>\n    </div>\n\n    <svg class=\"card-icon-container\">\n      <polyline class=\"card-icon-container-animation-line\" points=\"100,0 200,100 100,200 0,100 100,0\" #cardIconContainerAnimationLine/>\n      <polyline class=\"card-icon-animation-line-1\" points=\"60,80 140,80 140,120 60,120 60,80\" #cardIconAnimationLine1/>\n      <polyline class=\"card-icon-animation-person\" points=\"70,120 70,110 76,110 76,105 80,105 80,110 86,110 86,120 70,120\" #cardIconAnimationPerson/>\n      <circle class=\"card-icon-animation-person-head\" cx=\"78\" cy=\"101\" r=\"6\" #cardIconAnimationPersonHead/>\n      <polyline class=\"card-icon-animation-text-1\" points=\"100,90 130,90\" #cardIconAnimationText1/>\n      <polyline class=\"card-icon-animation-text-2\" points=\"100,100 130,100\" #cardIconAnimationText2/>\n      <polyline class=\"card-icon-animation-text-3\" points=\"100,110 130,110\" #cardIconAnimationText3/>\n    </svg>\n\n    <div class=\"contact-info-container\">\n      <div class=\"contact-info-title-container\">\n        <p class=\"contact-info-title-text\" #contactinfoTitleTextAnimation>CONTACT INFO</p>\n      </div>\n      <svg class=\"contact-info-title-seperator-container\">\n        <polyline class=\"contact-info-title-seperator-line\" points=\"20,12 22,14 24,12 20,8 16,12 22,18 28,12 20,4 12,12 22,22 32,12 368,12\" #contactinfoTitleSeperatorAnimation/>\n      </svg>\n      <div class=\"contact-info-email-container\">\n          <p class=\"contact-info-email-text-1\" #contactinfoEmailText1>You are welcome to contact me through </p><a class=\"contact-info-email\" href=\"mailto:DoalfikarAlawad@gmail.com\" #contactinfoEmail>DoalfikarAlawad@gmail.com</a>\n      </div>\n      <a class=\"contact-info-github-icon-container\" target=\"_blank\" href=\"https://github.com/SquishyAura\" #contactinfoGithubIconContainer>\n        <img src=\"./assets/github-icon.png\" class=\"github-icon\">\n      </a>\n      <a class=\"contact-info-linkedin-icon-container\" target=\"_blank\" href=\"https://www.linkedin.com/in/doalfikar-alawad/\" #contactinfoLinkedinIconContainer>\n        <img src=\"./assets/linkedin-icon.png\" class=\"linkedin-icon\">\n      </a>\n    </div>\n  </div>\n\n  <div class=\"bottom\">\n    <div class=\"bottom-menu-background\"></div>\n    <div class=\"made-by-container\">\n      <p class=\"made-by-doalfikar\">© Doalfikar Alawad</p>\n    </div>\n\n    <div class=\"section-seperator\"></div>\n\n    <div class=\"section-container\">\n      <a class=\"section-about-me-container\">\n        <p class=\"section-about-me\" (click)=\"scrollToAboutMe()\">ABOUT ME</p>\n      </a>\n      <a class=\"section-education-container\">\n        <p class=\"section-education\" (click)=\"scrollToEducation()\">EDUCATION</p>\n      </a>\n      <a class=\"section-experience-container\">\n        <p class=\"section-experience\" (click)=\"scrollToExperience()\">EXPERIENCE</p>\n      </a>\n      <a class=\"section-contact-info-container\">\n        <p class=\"section-contact-info\" (click)=\"scrollToContactInfo()\">CONTACT INFO</p>\n      </a>\n      \n      <div class=\"section-underline\" #sectionUnderline></div>\n    </div>\n\n    <div class=\"section-seperator\"></div>\n\n    <div class=\"bottom-icon-container\">\n      <a class=\"bottom-icon-github-container\" target=\"_blank\" href=\"https://github.com/SquishyAura\">\n        <img src=\"./assets/github-icon-white.png\" class=\"bottom-icon-github-image\"/>\n      </a>\n      <a class=\"bottom-icon-linkedin-container\" target=\"_blank\" href=\"https://www.linkedin.com/in/doalfikar-alawad/\">\n        <img src=\"./assets/linkedin-icon-white.png\" class=\"bottom-icon-linkedin-image\"/>\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(renderer, router) {
        this.renderer = renderer;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.handleScrolling();
        if (pageYOffset >= 600 && pageYOffset < 1600) {
            this.renderer.addClass(this.sectionUnderline.nativeElement, "aboutme");
        }
        if (pageYOffset >= 1600 && pageYOffset < 2600) {
            this.renderer.addClass(this.sectionUnderline.nativeElement, "education");
        }
        if (pageYOffset >= 2600 && pageYOffset < 3563) {
            this.renderer.addClass(this.sectionUnderline.nativeElement, "experience");
        }
        if (pageYOffset == 3563) {
            this.renderer.addClass(this.sectionUnderline.nativeElement, "contactinfo");
        }
    };
    HomeComponent.prototype.onMousewheel = function (event) {
        if (event.wheelDelta > 0) {
            window.scrollBy(0, -25);
        }
        if (event.wheelDelta < 0) {
            window.scrollBy(0, 25);
        }
    };
    HomeComponent.prototype.onScroll = function ($event) {
        this.handleScrolling();
    };
    HomeComponent.prototype.handleAnimationLineGrowth = function () {
        this.dasharray = 4550;
        this.growth = (this.screenWidthHeight.nativeElement.offsetHeight / this.page.nativeElement.offsetHeight) + 1 + (this.screenWidthHeight.nativeElement.offsetHeight / this.page.nativeElement.offsetHeight) + ((this.screenWidthHeight.nativeElement.offsetHeight / this.page.nativeElement.offsetHeight) / 2);
        this.percentage = ((pageYOffset * this.growth) / this.page.nativeElement.offsetHeight);
        this.dashoffset = this.dasharray * (1 - this.percentage);
    };
    HomeComponent.prototype.handleScrolling = function () {
        this.handleAnimationLineGrowth();
        if (pageYOffset <= 300) {
            this.animateQuote();
            console.log("HEJ");
        }
        if (pageYOffset > 300 && this.containsClass(this.quote, 'animate')) {
            this.reverseQuote();
        }
        if (pageYOffset <= 400) {
            this.renderer.addClass(this.downArrowAnimation.nativeElement, "top");
        }
        if (pageYOffset <= 400 && this.containsClass(this.downArrowAnimation, 'scrolled')) {
            this.displayDownArrow();
        }
        if (pageYOffset > 400 && this.containsClass(this.downArrowAnimation, 'top')) {
            this.hideDownArrow();
        }
        if ((window.innerHeight + window.scrollY) < (this.page.nativeElement.offsetHeight / 4) && this.containsClass(this.bookContainerAnimation, 'animate') && this.containsClass(this.bookForegroundAnimation, 'animate') && this.containsClass(this.bookBackgroundAnimation, 'animate')) {
            this.reverseBookIcon();
            this.reverseAboutMeText();
        }
        if ((window.innerHeight + window.scrollY) >= (this.page.nativeElement.offsetHeight / 4)) {
            this.animateBookIcon();
            this.animateAboutMeText();
        }
        if ((window.innerHeight + window.scrollY) < (this.page.nativeElement.offsetHeight / 2) && this.containsClass(this.curlybracketIconContainerAnimation, 'animate')) {
            this.reverseCurlybracketIcon();
            this.reverseEducationText();
        }
        if ((window.innerHeight + window.scrollY) >= (this.page.nativeElement.offsetHeight / 2)) {
            this.animateCurlybracketIcon();
            this.animateEducationText();
        }
        if ((window.innerHeight + window.scrollY) < (document.body.offsetHeight / 1.45) && this.containsClass(this.bagIconContainerAnimation, 'animate')) {
            this.reverseBagIcon();
            this.reverseExperienceText();
        }
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight / 1.45)) {
            this.animateBagIcon();
            this.animateExperienceText();
        }
        if ((window.innerHeight + window.scrollY) < (document.body.offsetHeight / 1.075)) {
            this.reverseCardIcon();
            this.reverseContactinfoText();
        }
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight / 1.075)) {
            this.animateCardIcon();
            this.animateContactinfoText();
        }
        this.handleSectionUnderline();
    };
    HomeComponent.prototype.handleSectionUnderline = function () {
        if (pageYOffset < 521) {
            this.sectionUnderline.nativeElement.className = null;
        }
        if (pageYOffset >= 521 && pageYOffset < 1521) {
            this.sectionUnderline.nativeElement.className = "section-underline aboutme";
        }
        if (pageYOffset >= 1521 && pageYOffset < 2521) {
            this.sectionUnderline.nativeElement.className = "section-underline education";
        }
        if (pageYOffset >= 2521 && pageYOffset < 3521) {
            this.sectionUnderline.nativeElement.className = "section-underline experience";
        }
        if (pageYOffset >= 3521) {
            this.sectionUnderline.nativeElement.className = "section-underline contactinfo";
        }
    };
    HomeComponent.prototype.containsClass = function (element, className) {
        if (element.nativeElement.classList.contains(className)) {
            return true;
        }
        return false;
    };
    HomeComponent.prototype.displayDownArrow = function () {
        this.renderer.addClass(this.downArrowAnimation.nativeElement, "top");
        this.renderer.removeClass(this.downArrowAnimation.nativeElement, "scrolled");
    };
    HomeComponent.prototype.hideDownArrow = function () {
        this.renderer.addClass(this.downArrowAnimation.nativeElement, "scrolled");
        this.renderer.removeClass(this.downArrowAnimation.nativeElement, "top");
    };
    HomeComponent.prototype.animateQuote = function () {
        this.renderer.addClass(this.quote.nativeElement, "animate");
        this.renderer.removeClass(this.quote.nativeElement, "reverse");
    };
    HomeComponent.prototype.reverseQuote = function () {
        this.renderer.addClass(this.quote.nativeElement, "reverse");
        this.renderer.removeClass(this.quote.nativeElement, "animate");
    };
    HomeComponent.prototype.animateBookIcon = function () {
        this.renderer.addClass(this.bookContainerAnimation.nativeElement, "animate");
        this.renderer.addClass(this.bookForegroundAnimation.nativeElement, "animate");
        this.renderer.addClass(this.bookBackgroundAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.bookContainerAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.bookForegroundAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.bookBackgroundAnimation.nativeElement, "reverse");
    };
    HomeComponent.prototype.reverseBookIcon = function () {
        this.renderer.addClass(this.bookContainerAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.bookForegroundAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.bookBackgroundAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.bookContainerAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.bookForegroundAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.bookBackgroundAnimation.nativeElement, "animate");
    };
    HomeComponent.prototype.animateAboutMeText = function () {
        this.renderer.addClass(this.aboutMeTitleTextAnimation.nativeElement, "animate");
        this.renderer.addClass(this.aboutMeTitleSeperatorAnimation.nativeElement, "animate");
        this.renderer.addClass(this.aboutMeTextAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.aboutMeTitleTextAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.aboutMeTitleSeperatorAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.aboutMeTextAnimation.nativeElement, "reverse");
    };
    HomeComponent.prototype.reverseAboutMeText = function () {
        this.renderer.addClass(this.aboutMeTitleTextAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.aboutMeTitleSeperatorAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.aboutMeTextAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.aboutMeTitleTextAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.aboutMeTitleSeperatorAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.aboutMeTextAnimation.nativeElement, "animate");
    };
    HomeComponent.prototype.animateCurlybracketIcon = function () {
        this.renderer.addClass(this.curlybracketIconContainerAnimation.nativeElement, "animate");
        this.renderer.addClass(this.curlybracketRightIconAnimation.nativeElement, "animate");
        this.renderer.addClass(this.curlybracketLeftIconAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.curlybracketIconContainerAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.curlybracketRightIconAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.curlybracketLeftIconAnimation.nativeElement, "reverse");
    };
    HomeComponent.prototype.reverseCurlybracketIcon = function () {
        this.renderer.addClass(this.curlybracketIconContainerAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.curlybracketRightIconAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.curlybracketLeftIconAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.curlybracketIconContainerAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.curlybracketRightIconAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.curlybracketLeftIconAnimation.nativeElement, "animate");
    };
    HomeComponent.prototype.animateEducationText = function () {
        this.renderer.addClass(this.educationTitleTextAnimation.nativeElement, "animate");
        this.renderer.addClass(this.educationTitleSeperatorAnimation.nativeElement, "animate");
        this.renderer.addClass(this.educationTextAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.educationTitleTextAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.educationTitleSeperatorAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.educationTextAnimation.nativeElement, "reverse");
    };
    HomeComponent.prototype.reverseEducationText = function () {
        this.renderer.addClass(this.educationTitleTextAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.educationTitleSeperatorAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.educationTextAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.educationTitleTextAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.educationTitleSeperatorAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.educationTextAnimation.nativeElement, "animate");
    };
    HomeComponent.prototype.animateBagIcon = function () {
        this.renderer.addClass(this.bagIconContainerAnimation.nativeElement, "animate");
        this.renderer.addClass(this.bagIconAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.bagIconContainerAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.bagIconAnimation.nativeElement, "reverse");
    };
    HomeComponent.prototype.reverseBagIcon = function () {
        this.renderer.addClass(this.bagIconContainerAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.bagIconAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.bagIconContainerAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.bagIconAnimation.nativeElement, "animate");
    };
    HomeComponent.prototype.animateExperienceText = function () {
        this.renderer.addClass(this.experienceTitleTextAnimation.nativeElement, "animate");
        this.renderer.addClass(this.experienceTitleSeperatorAnimation.nativeElement, "animate");
        this.renderer.addClass(this.experienceTextAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.experienceTitleTextAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.experienceTitleSeperatorAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.experienceTextAnimation.nativeElement, "reverse");
    };
    HomeComponent.prototype.reverseExperienceText = function () {
        this.renderer.addClass(this.experienceTitleTextAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.experienceTitleSeperatorAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.experienceTextAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.experienceTitleTextAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.experienceTitleSeperatorAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.experienceTextAnimation.nativeElement, "animate");
    };
    HomeComponent.prototype.animateCardIcon = function () {
        this.renderer.addClass(this.cardIconContainerAnimationLine.nativeElement, "animate");
        this.renderer.addClass(this.cardIconAnimationLine1.nativeElement, "animate");
        this.renderer.addClass(this.cardIconAnimationPerson.nativeElement, "animate");
        this.renderer.addClass(this.cardIconAnimationPersonHead.nativeElement, "animate");
        this.renderer.addClass(this.cardIconAnimationText1.nativeElement, "animate");
        this.renderer.addClass(this.cardIconAnimationText2.nativeElement, "animate");
        this.renderer.addClass(this.cardIconAnimationText3.nativeElement, "animate");
        this.renderer.removeClass(this.cardIconContainerAnimationLine.nativeElement, "reverse");
        this.renderer.removeClass(this.cardIconAnimationLine1.nativeElement, "reverse");
        this.renderer.removeClass(this.cardIconAnimationPerson.nativeElement, "reverse");
        this.renderer.removeClass(this.cardIconAnimationPersonHead.nativeElement, "reverse");
        this.renderer.removeClass(this.cardIconAnimationText1.nativeElement, "reverse");
        this.renderer.removeClass(this.cardIconAnimationText2.nativeElement, "reverse");
        this.renderer.removeClass(this.cardIconAnimationText3.nativeElement, "reverse");
    };
    HomeComponent.prototype.reverseCardIcon = function () {
        this.renderer.addClass(this.cardIconContainerAnimationLine.nativeElement, "reverse");
        this.renderer.addClass(this.cardIconAnimationLine1.nativeElement, "reverse");
        this.renderer.addClass(this.cardIconAnimationPerson.nativeElement, "reverse");
        this.renderer.addClass(this.cardIconAnimationPersonHead.nativeElement, "reverse");
        this.renderer.addClass(this.cardIconAnimationText1.nativeElement, "reverse");
        this.renderer.addClass(this.cardIconAnimationText2.nativeElement, "reverse");
        this.renderer.addClass(this.cardIconAnimationText3.nativeElement, "reverse");
        this.renderer.removeClass(this.cardIconContainerAnimationLine.nativeElement, "animate");
        this.renderer.removeClass(this.cardIconAnimationLine1.nativeElement, "animate");
        this.renderer.removeClass(this.cardIconAnimationPerson.nativeElement, "animate");
        this.renderer.removeClass(this.cardIconAnimationPersonHead.nativeElement, "animate");
        this.renderer.removeClass(this.cardIconAnimationText1.nativeElement, "animate");
        this.renderer.removeClass(this.cardIconAnimationText2.nativeElement, "animate");
        this.renderer.removeClass(this.cardIconAnimationText3.nativeElement, "animate");
    };
    HomeComponent.prototype.animateContactinfoText = function () {
        this.renderer.addClass(this.contactinfoTitleTextAnimation.nativeElement, "animate");
        this.renderer.addClass(this.contactinfoTitleSeperatorAnimation.nativeElement, "animate");
        this.renderer.addClass(this.contactinfoEmailText1.nativeElement, "animate");
        this.renderer.addClass(this.contactinfoEmail.nativeElement, "animate");
        this.renderer.addClass(this.contactinfoGithubIconContainer.nativeElement, "animate");
        this.renderer.addClass(this.contactinfoLinkedinIconContainer.nativeElement, "animate");
        this.renderer.removeClass(this.contactinfoTitleTextAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.contactinfoTitleSeperatorAnimation.nativeElement, "reverse");
        this.renderer.removeClass(this.contactinfoEmailText1.nativeElement, "reverse");
        this.renderer.removeClass(this.contactinfoEmail.nativeElement, "reverse");
        this.renderer.removeClass(this.contactinfoGithubIconContainer.nativeElement, "reverse");
        this.renderer.removeClass(this.contactinfoLinkedinIconContainer.nativeElement, "reverse");
    };
    HomeComponent.prototype.reverseContactinfoText = function () {
        this.renderer.addClass(this.contactinfoTitleTextAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.contactinfoTitleSeperatorAnimation.nativeElement, "reverse");
        this.renderer.addClass(this.contactinfoEmailText1.nativeElement, "reverse");
        this.renderer.addClass(this.contactinfoEmail.nativeElement, "reverse");
        this.renderer.addClass(this.contactinfoGithubIconContainer.nativeElement, "reverse");
        this.renderer.addClass(this.contactinfoLinkedinIconContainer.nativeElement, "reverse");
        this.renderer.removeClass(this.contactinfoTitleTextAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.contactinfoTitleSeperatorAnimation.nativeElement, "animate");
        this.renderer.removeClass(this.contactinfoEmailText1.nativeElement, "animate");
        this.renderer.removeClass(this.contactinfoEmail.nativeElement, "animate");
        this.renderer.removeClass(this.contactinfoGithubIconContainer.nativeElement, "animate");
        this.renderer.removeClass(this.contactinfoLinkedinIconContainer.nativeElement, "animate");
    };
    HomeComponent.prototype.scrollToAboutMe = function () {
        window.scrollTo(0, 650);
    };
    HomeComponent.prototype.scrollToEducation = function () {
        window.scrollTo(0, 1650);
    };
    HomeComponent.prototype.scrollToExperience = function () {
        window.scrollTo(0, 2650);
    };
    HomeComponent.prototype.scrollToContactInfo = function () {
        window.scrollTo(0, 3650);
    };
    HomeComponent.prototype.routeToProjectsPage = function () {
        this.router.navigateByUrl('/projects');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('downArrowAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "downArrowAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('page'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('screenWidthHeight'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "screenWidthHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('quote'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "quote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bookIconContainerAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "bookContainerAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bookIconForegroundAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "bookForegroundAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bookIconBackgroundAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "bookBackgroundAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aboutMeTitleTextAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "aboutMeTitleTextAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aboutMeTitleSeperatorAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "aboutMeTitleSeperatorAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aboutMeTextAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "aboutMeTextAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('curlybracketIconContainerAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "curlybracketIconContainerAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('curlybracketRightIconAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "curlybracketRightIconAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('curlybracketLeftIconAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "curlybracketLeftIconAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('educationTitleTextAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "educationTitleTextAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('educationTitleSeperatorAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "educationTitleSeperatorAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('educationTextAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "educationTextAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bagIconContainerAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "bagIconContainerAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bagIconAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "bagIconAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('experienceTitleTextAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "experienceTitleTextAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('experienceTitleSeperatorAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "experienceTitleSeperatorAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('experienceTextAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "experienceTextAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardIconContainerAnimationLine'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "cardIconContainerAnimationLine", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardIconAnimationLine1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "cardIconAnimationLine1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardIconAnimationPerson'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "cardIconAnimationPerson", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardIconAnimationPersonHead'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "cardIconAnimationPersonHead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardIconAnimationText1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "cardIconAnimationText1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardIconAnimationText2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "cardIconAnimationText2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardIconAnimationText3'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "cardIconAnimationText3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contactinfoTitleTextAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "contactinfoTitleTextAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contactinfoTitleSeperatorAnimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "contactinfoTitleSeperatorAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contactinfoEmailText1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "contactinfoEmailText1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contactinfoEmail'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "contactinfoEmail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contactinfoGithubIconContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "contactinfoGithubIconContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contactinfoLinkedinIconContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "contactinfoLinkedinIconContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sectionUnderline'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "sectionUnderline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousewheel', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onMousewheel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onScroll", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n* WHOLE PAGE \r\n*/\r\n.projects-page-container {\r\n    width: 100vw;\r\n    min-height:100%; \r\n    height: auto;\r\n}\r\n.background-color {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -999;\r\n    background-color: #ffffff;\r\n}\r\n/* \r\n* TOP PAGE \r\n*/\r\n.top {\r\n    position: relative;\r\n    top: 0;\r\n    margin: 0 auto;\r\n    width: 1000px;\r\n    height: 300px;\r\n}\r\n.header-container {\r\n    position: relative;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 250px;\r\n    text-overflow: clip;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n.header-text {\r\n    position: absolute;\r\n    width: 100%;\r\n    text-align: center;\r\n    height: 250px;\r\n    line-height: 250px;\r\n    vertical-align: middle;\r\n    font-size: 12em;\r\n    color: black;\r\n    letter-spacing: 5px;\r\n    font-family: 'Roboto', sans-serif;\r\n    text-shadow: 2px 2px 5px gray;\r\n}\r\n.header-separator-container {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 50px;\r\n}\r\n.header-separator-line {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    stroke: black;\r\n    fill: transparent;\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 2000;\r\n    stroke-dashoffset: 0;\r\n}\r\n/* \r\n*   CONTENT PAGE \r\n*/\r\n.page {\r\n    position: relative;\r\n    top: 0;\r\n    width: 750px;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    padding-bottom: 100px;\r\n}\r\n.table-of-content-container {\r\n    position: relative;\r\n    display: table;\r\n    width: auto;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    border-spacing: 10px;\r\n    border-collapse: separate;\r\n}\r\n.table-of-content-item {\r\n    position: relative;\r\n    display: table-row;\r\n    font-size: 1em;\r\n    color: black;\r\n    letter-spacing: 1px;\r\n    font-family: 'Roboto', sans-serif;\r\n    text-decoration: underline;\r\n}\r\n.table-of-content-item:hover{\r\n    cursor: pointer;\r\n}\r\n.fixit-container {\r\n    position: relative;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.fixit-images {\r\n    position: relative;\r\n    width: 238px;\r\n    height: auto;\r\n    margin-left: 6px;\r\n    margin-top: 10px;\r\n    border: 1px solid black;\r\n}\r\n.quizo-container {\r\n    position: relative;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.quizo-images {\r\n    position: relative;\r\n    width: 95%;\r\n    height: auto;\r\n    margin-left: 2.5%;\r\n    margin-top: 10px;\r\n    border: 1px solid black;\r\n}\r\n.title {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 50px;\r\n    margin: 0;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    vertical-align: middle;\r\n    font-size: 2em;\r\n    color: black;\r\n    letter-spacing: 3px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.description {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    font-size: 1em;\r\n    color: black;\r\n    letter-spacing: 1px;\r\n    font-family: 'Roboto', sans-serif;\r\n    word-wrap: break-word;\r\n    text-align: justify;\r\n}\r\n.links {\r\n    position: relative;\r\n    width: 100%;\r\n    height: auto;\r\n    text-align: center;\r\n    font-size: 1em;\r\n    color: black;\r\n    letter-spacing: 1px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.project-separator {\r\n    position: relative;\r\n    height: 1px;\r\n    width: 700px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    margin-left: 25px;\r\n    background-color: black;\r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-page-container\">\n  <div class=\"background-color\"></div>\n\n  <div class=\"top\">\n    <div class=\"header-container\">\n      <span class=\"header-text\">PROJECTS</span>\n    </div>\n\n    <svg class=\"header-separator-container\">\n      <polyline class=\"header-separator-line\" points=\"33,27 29,31 25,27 33,19 41,27 29,39 17,27 33,11 49,27 29,47 9,27 33,3 967,3 991,27 971,47 951,27 967,11 983,27 971,39 959,27 967,19 975,27 971,31 967,27\"/>\n    </svg>\n  </div>\n\n  <div class=\"page\">\n    <table class=\"table-of-content-container\">\n      <tr>\n          <td class=\"table-of-content-item\" (click)=\"scrollToElement(fixitContainer)\">· Fixit</td>\n          <td class=\"table-of-content-item\" (click)=\"scrollToElement(quizoContainer)\">· Quizo</td>\n          <td class=\"table-of-content-item\" (click)=\"routeToHomePage()\">· Go back</td>\n      </tr>\n    </table>\n\n    <div class=\"project-separator\"></div>\n\n    <div class=\"fixit-container\" #fixitContainer>\n      <p class=\"title\">FIXIT</p>\n      <p class=\"description\">Fixit is an Android application that is developed in Android Studio as a prototype. Fixit allows its users to report environmental issues to the municipality. As Fixit relies on information being crowdsourced from its users, gamification elements are used to motivate the users reporting environmental damage. Those gamification elements consist of things such as a leader-board, where users can compete against each other and be rewarded.<br/>\n        <img class=\"fixit-images\" src=\"./assets/fixit-1.png\">\n        <img class=\"fixit-images\" src=\"./assets/fixit-2.png\">\n        <img class=\"fixit-images\" src=\"./assets/fixit-3.png\">\n        <br/><br/>The <i>leftmost</i> image displays the user's process of reporting an issue. A description, image, and location are required to post an issue. If the issue is successfully created, it is stored in a Firebase Database.<br/><br/>The image in the <i>middle</i> displays the board page, which consists of the issues. Each issue can be upvoted, in order to validate whether it is a legit issue or not. The image and location of the issue can also be seen. If the issue contains inappropriate content or is a duplicate of another issue, it can be reported or marked as a duplicate.<br/><br/>The <i>rightmost</i> image displays the highscore of the top 10 users with the highest amount of upvotes throughout their issues.\n      </p>\n      <br/>\n      <div class=\"links\">\n        <a href=\"https://github.com/SquishyAura/Fixit\" target=\"_blank\">Github link</a>\n      </div>\n    </div>\n\n    <div class=\"project-separator\"></div>\n\n    <div class=\"quizo-container\" #quizoContainer>\n      <p class=\"title\">QUIZO</p>\n      <p class=\"description\">Quizo is a web application that was developed using <i>Angular 2</i> and a <i>Node.js</i> server. Quizo allows for users to create, share, and answer quizzes. An important aspect of Quizo is the ability for the quiz creator/participant to receive feedback on the quiz, as well as making it easy for users to create flexible quizzes. Feedback includes the ability for the quiz creator to view analytics about how participants have answered the quiz. All the quizzes are saved on the quiz creator's account and stored in a database.<br/>\n        <img class=\"quizo-images\" src=\"./assets/quizo-1.png\">\n        <br/>Upon logging in successfully, the user is prompted to the home page that contains the most recent public quizzes, as seen on the image above. The user can participate in a quiz by clicking on it, such as the <i>English Quiz</i> or create their own quiz by pressing the <i>Create Quiz</i> button.<br/>\n        <img class=\"quizo-images\" src=\"./assets/quizo-2.png\">\n        <br/>When the user creates a quiz, the requirements of the quiz creation template have to be fulfilled. This for example includes things such as the quiz access level, question text and type, as well as expected answer to the question. The quiz creator currently has the opportunity to create multiple-choice and checkbox quizzes. It is also an option to add as many answers as the quiz creator sees fit. Once the quiz template requirements are fulfilled, the quiz can be created and easily shared through the quiz's URL.<br/>\n        <img class=\"quizo-images\" src=\"./assets/quizo-3.png\">\n        <br/>The image above displays the page where the user answers the quiz. When the user answers a quiz, that answer is stored in a database, so that the quiz creator can view the answers and statistics of all the participants. The participants are also able to rate the quiz, in order to give feedback to the quiz creator about the quiz.<br/>\n        <img class=\"quizo-images\" src=\"./assets/quizo-4.png\">\n        <br/>This is how it looks like when the quiz creator views the statistics of their quiz. As it can be seen, 80% of all participants chose the correct answer. The quiz creator can also view how each individual participant did and how each question was answered. The purpose of this is to give teachers the ability to see how each student performed.\n      </p>\n      <br/>\n      <div class=\"links\">\n        <a href=\"https://github.com/SquishyAura/QuizzooRepository\" target=\"_blank\">Github link</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(router) {
        this.router = router;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.scrollToElement = function (element) {
        element.scrollIntoView();
    };
    ProjectsComponent.prototype.routeToHomePage = function () {
        this.router.navigateByUrl('/home');
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dilf\Desktop\Doalfikar.com coding environment\doalfikar-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map