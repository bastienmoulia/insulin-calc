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
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage,
    },
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_insulin_calc_insulin_calc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./main.page.html */ 328);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 7379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _core_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/storage/storage.service */ 2798);






let MainPage = class MainPage {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    ngOnInit() { }
    calcBolus() {
        if (this.coef && this.carbohydrates) {
            this.bolus = (this.carbohydrates * this.coef) / 10;
        }
        else {
            this.bolus = undefined;
        }
        this.calcTotal();
    }
    calcCorrection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.bloodSugar && this.storage.sensitivityIndex) {
                this.storage.set('sensitivityIndex', this.storage.sensitivityIndex);
                let bloodSugarTarget = 120;
                let ratio = 100;
                if (this.storage.bloodGlucoseUnits === 'gl') {
                    bloodSugarTarget = bloodSugarTarget / 100;
                    ratio = 1;
                }
                if (this.bloodSugar > bloodSugarTarget) {
                    this.correction =
                        (this.bloodSugar - bloodSugarTarget) /
                            ratio /
                            this.storage.sensitivityIndex;
                }
                else {
                    this.correction = 0;
                }
            }
            else {
                this.correction = undefined;
            }
            this.calcTotal();
        });
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
        this.router.navigate(['/settings']);
    }
};
MainPage.ctorParameters = () => [
    { type: _core_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Calculatrice d'insuline</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"primary\" [routerLink]=\"['/settings']\">\n        <ion-icon slot=\"icon-only\" name=\"settings-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header color=\"primary\">\n        <ion-card-title>Bolus</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Glucides (g)</ion-label>\n          <ion-input\n            [(ngModel)]=\"carbohydrates\"\n            (ngModelChange)=\"calcBolus()\"\n            type=\"number\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Coefficient</ion-label>\n          <ion-input\n            [(ngModel)]=\"coef\"\n            (ngModelChange)=\"calcBolus()\"\n            type=\"number\"\n          ></ion-input>\n          <ion-button id=\"meal-button\">Repas</ion-button>\n        </ion-item>\n        <ion-text color=\"primary\" *ngIf=\"bolus >= 0\">\n          <h1>\n            {{ bolus | number: '1.0-' + storage.insulinUnitsAccuracy }} unités\n          </h1>\n        </ion-text>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header color=\"success\">\n        <ion-card-title>Correction</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Indice de sensibilité</ion-label>\n          <ion-input\n            [(ngModel)]=\"storage.sensitivityIndex\"\n            (ngModelChange)=\"calcCorrection()\"\n            type=\"number\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label\n            >Glycémie\n            <ng-container *ngIf=\"storage.bloodGlucoseUnits === 'mgdl'\">\n              (mg/dL)</ng-container\n            >\n            <ng-container *ngIf=\"storage.bloodGlucoseUnits === 'gl'\">\n              (g/L)</ng-container\n            >\n          </ion-label>\n          <ion-input\n            [(ngModel)]=\"bloodSugar\"\n            (ngModelChange)=\"calcCorrection()\"\n            type=\"number\"\n          ></ion-input>\n        </ion-item>\n        <ion-text color=\"success\" *ngIf=\"correction >= 0\">\n          <h1>\n            {{ correction | number: '1.0-' + storage.insulinUnitsAccuracy }}\n            unités\n          </h1>\n        </ion-text>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"total >= 0\">\n      <ion-card-header color=\"danger\">\n        <ion-card-title>Total</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-text color=\"danger\">\n          <h1>\n            {{ total | number: '1.0-' + storage.insulinUnitsAccuracy }} unités\n          </h1>\n        </ion-text>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-popover trigger=\"meal-button\" [dismissOnSelect]=\"true\">\n  <ng-template>\n    <ion-content>\n      <ion-list>\n        <ion-item\n          button=\"true\"\n          *ngFor=\"let meal of storage.meals; let i = index\"\n          (click)=\"selectMeal(meal)\"\n        >\n          <ion-label> {{ meal.name }} ({{ meal.coef }}) </ion-label>\n        </ion-item>\n        <ion-list-header>\n          <ion-button (click)=\"openSettings()\">Changer les repas</ion-button>\n        </ion-list-header>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>\n");

/***/ }),

/***/ 7379:
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".card-content-md h1 {\n  margin-top: 16px;\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoibWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250ZW50LW1kIGgxIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZm9udC1zaXplOiAzZW07XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map