"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 2134:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 2245);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage,
    },
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 2047:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 2134);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 2245);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage],
    })
], SettingsPageModule);



/***/ }),

/***/ 2245:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_insulin_calc_insulin_calc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./settings.page.html */ 9851);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 4087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/storage/storage.service */ 2798);





let SettingsPage = class SettingsPage {
    constructor(storage) {
        this.storage = storage;
    }
    ngOnInit() { }
    bloodGlucoseUnitsChange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.set('bloodGlucoseUnits', this.storage.bloodGlucoseUnits);
        });
    }
    insulinUnitsAccuracyChange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.set('insulinUnitsAccuracy', this.storage.insulinUnitsAccuracy);
        });
    }
    addMeal() {
        this.storage.meals.push({ name: 'Repas', coef: 1 });
        this.saveMeals();
    }
    deleteMeal(index) {
        this.storage.meals.splice(index, 1);
        this.saveMeals();
    }
    saveMeals() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.set('meals', this.storage.meals);
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _core_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-settings',
        template: _home_runner_work_insulin_calc_insulin_calc_node_modules_ngtools_webpack_src_loaders_direct_resource_js_settings_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 9851:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/settings/settings.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Réglages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item>\n    <ion-label>Unités de glycémie</ion-label>\n    <ion-select\n      [(ngModel)]=\"storage.bloodGlucoseUnits\"\n      (ngModelChange)=\"bloodGlucoseUnitsChange()\"\n    >\n      <ion-select-option value=\"mgdl\">mg/dL</ion-select-option>\n      <ion-select-option value=\"gl\">g/L</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item class=\"ion-margin-top\">\n    <ion-label>Précision des unités d'insuline</ion-label>\n    <ion-select\n      [(ngModel)]=\"storage.insulinUnitsAccuracy\"\n      (ngModelChange)=\"insulinUnitsAccuracyChange()\"\n    >\n      <ion-select-option value=\"0\">1</ion-select-option>\n      <ion-select-option value=\"1\">0.1</ion-select-option>\n      <ion-select-option value=\"2\">0.01</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <hr />\n  <ion-grid>\n    <ion-row *ngFor=\"let meal of storage.meals; let index = index\">\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"floating\">Nom du repas</ion-label>\n          <ion-input\n            [(ngModel)]=\"meal.name\"\n            (ngModelChange)=\"saveMeals()\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"floating\">Coefficient du repas</ion-label>\n          <ion-input\n            [(ngModel)]=\"meal.coef\"\n            (ngModelChange)=\"saveMeals()\"\n            type=\"number\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"auto\">\n        <ion-button fill=\"clear\" color=\"danger\" (click)=\"deleteMeal(index)\">\n          <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button (click)=\"addMeal()\">Ajouter un repas</ion-button>\n</ion-content>\n");

/***/ }),

/***/ 4087:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map