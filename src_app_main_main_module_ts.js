"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main_main_module_ts"],{

/***/ 5471:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 8937);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 4261:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 5471);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 8937);







let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 8937:
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_insulin_calc_insulin_calc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./main.page.html */ 328);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 7379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




const bloodSugarTarget = 120;
let MainPage = class MainPage {
    constructor() {
        this.meals = [];
        this.meals = [
            { name: 'Petit dejeuner', coef: 1 },
            { name: 'Dejeuner', coef: 2 },
            { name: 'Gouter', coef: 3 },
            { name: 'Diner', coef: 4 },
        ];
    }
    ngOnInit() {
    }
    calcBolus() {
        if (this.coef && this.carbohydrates) {
            this.bolus = this.carbohydrates * this.coef / 10;
        }
        else {
            this.bolus = undefined;
        }
        this.calcTotal();
    }
    calcCorrection() {
        if (this.bloodSugar && this.sensitivityIndex) {
            if (this.bloodSugar > bloodSugarTarget) {
                this.correction = ((this.bloodSugar - bloodSugarTarget) / 100) / this.sensitivityIndex;
            }
            else {
                this.correction = 0;
            }
        }
        else {
            this.correction = undefined;
        }
        this.calcTotal();
    }
    calcTotal() {
        if (this.bolus) {
            this.total = this.bolus;
            if (this.correction) {
                this.total += this.correction;
            }
        }
        else {
            this.total = undefined;
        }
    }
    selectMeal(meal) {
        this.coef = meal.coef;
        this.calcBolus();
    }
    openSettings() {
        // TODO:
    }
};
MainPage.ctorParameters = () => [];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-main',
        template: _home_runner_work_insulin_calc_insulin_calc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainPage);



/***/ }),

/***/ 328:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/main/main.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Calculatrice d'insuline</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header color=\"primary\">\n        <ion-card-title>Bolus</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Glucides (g)</ion-label>\n          <ion-input [(ngModel)]=\"carbohydrates\" (ngModelChange)=\"calcBolus()\" type=\"number\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Coefficient</ion-label>\n          <ion-input [(ngModel)]=\"coef\" (ngModelChange)=\"calcBolus()\" type=\"number\"></ion-input>\n          <ion-button id=\"meal-button\">Repas</ion-button>\n        </ion-item>\n        <ion-text color=\"primary\" *ngIf=\"bolus >= 0\">\n          <h1>{{ bolus | number: '1.0-1' }} unités</h1>\n        </ion-text>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header color=\"success\">\n        <ion-card-title>Correction</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Indice de sensibilité</ion-label>\n          <ion-input [(ngModel)]=\"sensitivityIndex\" (ngModelChange)=\"calcCorrection()\" type=\"number\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Glycémie (mg/dL)</ion-label>\n          <ion-input [(ngModel)]=\"bloodSugar\" (ngModelChange)=\"calcCorrection()\" type=\"number\" min=\"10\"></ion-input>\n        </ion-item>\n        <ion-text color=\"success\" *ngIf=\"correction >= 0\">\n          <h1>{{ correction | number: '1.0-1' }} unités</h1>\n        </ion-text>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"total >= 0\">\n      <ion-card-header color=\"danger\">\n        <ion-card-title>Total</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-text color=\"danger\">\n          <h1>{{ total | number: '1.0-1' }} unités</h1>\n        </ion-text>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-popover trigger=\"meal-button\" [dismissOnSelect]=\"true\">\n  <ng-template>\n    <ion-content>\n      <ion-list *ngIf=\"meals.length > 0\">\n        <ion-item button *ngFor=\"let meal of meals; let i = index\" (click)=\"selectMeal(meal)\">\n          <ion-label>\n            {{ meal.name }} ({{ meal.coef }})\n          </ion-label>\n        </ion-item>\n        <ion-list-header>\n          <ion-button (click)=\"openSettings()\">Changer les repas</ion-button>\n        </ion-list-header>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>\n");

/***/ }),

/***/ 7379:
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.card-content-md h1 {\n  margin-top: 16px;\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5jYXJkLWNvbnRlbnQtbWQgaDEge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDNlbTtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map