(self["webpackChunkmodernshop_app"] = self["webpackChunkmodernshop_app"] || []).push([["src_app_pages_auth_banners_banners_module_ts"],{

/***/ 8422:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/banners/add-edit/add-edit.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditComponent": () => (/* binding */ AddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _helpers_TokenHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/TokenHelper */ 2029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/alert/alert.service */ 5730);
/* harmony import */ var _services_auth_banner_banner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth/banner/banner.service */ 7835);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 2257);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 6833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4372);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 3985);
/* harmony import */ var _share_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/file-upload/file-upload.component */ 2166);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 591);















function AddEditComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 12);
} }
function AddEditComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Conte\u00FAdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "app-file-upload", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("uploaded", function AddEditComponent_div_20_Template_app_file_upload_uploaded_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.fileUploaded(i_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddEditComponent_div_20_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.removeBanner(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Remover banner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const banner_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.banners.controls[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", banner_r2.value.id)("token", ctx_r1.token)("multiple", false);
} }
class AddEditComponent {
    constructor(formBuilder = null, router, activatedRoute, alertService, bannerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertService = alertService;
        this.bannerService = bannerService;
        this.id = null;
        this.token = _helpers_TokenHelper__WEBPACK_IMPORTED_MODULE_0__.TokenHelper.generate();
        this.formGroup = this.formBuilder.group({
            request_token: [this.token],
            id: [null],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(255)]],
            slug: [null],
            banners: this.formBuilder.array([])
        });
    }
    get banners() {
        return this.formGroup.get('banners');
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        if (this.id) {
            this.get();
        }
    }
    submit() {
        if (this.loading) {
            return;
        }
        if (this.id) {
            this.update();
        }
        else {
            this.store();
        }
    }
    store() {
        this.loading = true;
        this.bannerService
            .store(this.formGroup.value)
            .subscribe((response) => {
            this.router.navigate(['/', 'auth', 'banners']);
            this.alertService.toast(response.message);
        }, error => {
            this.alertService.treatError(error);
        })
            .add(() => this.loading = false);
    }
    update() {
        this.loading = true;
        this.bannerService
            .update(this.formGroup.value)
            .subscribe((response) => {
            this.router.navigate(['/', 'auth', 'banners']);
            this.alertService.toast(response.message);
        }, error => {
            this.alertService.treatError(error);
        })
            .add(() => this.loading = false);
    }
    get() {
        this.loading = true;
        this.bannerService
            .get(this.id)
            .subscribe((response) => {
            this.formGroup.patchValue(response);
            response.banners.forEach(banner => this.addBanner(banner));
        })
            .add(() => this.loading = false);
    }
    addBanner(banner) {
        var _a;
        this.banners.push(this.formBuilder.group({
            id: [banner === null || banner === void 0 ? void 0 : banner.id],
            // @ts-ignore
            file_id: [(_a = banner === null || banner === void 0 ? void 0 : banner.file) === null || _a === void 0 ? void 0 : _a.id],
            name: [banner === null || banner === void 0 ? void 0 : banner.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(255)]],
            content: [banner === null || banner === void 0 ? void 0 : banner.content],
        }));
    }
    fileUploaded(i, file) {
        this.banners.at(i).patchValue({
            file_id: file.id,
        });
    }
    removeBanner(i) {
        this.banners.removeAt(i);
    }
}
AddEditComponent.ɵfac = function AddEditComponent_Factory(t) { return new (t || AddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_banner_banner_service__WEBPACK_IMPORTED_MODULE_2__.BannerService)); };
AddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddEditComponent, selectors: [["app-add-edit"]], decls: 21, vars: 5, consts: [["class", "progress", "mode", "indeterminate", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], ["color", "primary", "mat-flat-button", "", 3, "click"], [1, "mdi", "mdi-plus"], [1, "common-form", "padding", 3, "formGroup", "submit"], ["fxLayout", "column", 1, "common-form-max"], ["appearance", "outline"], ["matInput", "", "required", "", "formControlName", "name"], ["matInput", "", "required", "", "formControlName", "slug"], ["mat-button", "", "type", "button", 3, "click"], ["fxFlex", ""], ["class", "padding", "fxLayout", "column", 3, "formGroup", 4, "ngFor", "ngForOf"], ["mode", "indeterminate", 1, "progress"], ["fxLayout", "column", 1, "padding", 3, "formGroup"], ["matInput", "", "required", "", "formControlName", "content"], ["type", "App\\Models\\Banner", 3, "id", "token", "multiple", "uploaded"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "mdi", "mdi-trash-can"]], template: function AddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AddEditComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddEditComponent_Template_button_click_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function AddEditComponent_Template_form_submit_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Nome do Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Slug (inser\u00E7\u00E3o no c\u00F3digo)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddEditComponent_Template_button_click_17_listener() { return ctx.addBanner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Adicionar Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AddEditComponent_div_20_Template, 14, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.id ? "Editar" : "Adicionar", " Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.id ? "Salvar edi\u00E7\u00E3o" : "Adicionar", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.banners.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar, _share_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__.FileUploadComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider], styles: [".list[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJhZGQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcbiAgbWluLXdpZHRoOiAyMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8793:
/*!**************************************************************!*\
  !*** ./src/app/pages/auth/banners/banners-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannersRoutingModule": () => (/* binding */ BannersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _banners_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banners.component */ 1625);
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit/add-edit.component */ 8422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);





const routes = [
    {
        path: '',
        component: _banners_component__WEBPACK_IMPORTED_MODULE_0__.BannersComponent,
    },
    {
        path: 'add',
        component: _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.AddEditComponent,
    },
    {
        path: 'edit/:id',
        component: _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.AddEditComponent,
    }
];
class BannersRoutingModule {
}
BannersRoutingModule.ɵfac = function BannersRoutingModule_Factory(t) { return new (t || BannersRoutingModule)(); };
BannersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BannersRoutingModule });
BannersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BannersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 1625:
/*!*********************************************************!*\
  !*** ./src/app/pages/auth/banners/banners.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannersComponent": () => (/* binding */ BannersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _services_auth_banner_banner_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth/banner/banner.service */ 7835);
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/alert/alert.service */ 5730);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 2257);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 589);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 857);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 3487);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 3985);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 9356);












function BannersComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 18);
} }
function BannersComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BannersComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r11.id);
} }
function BannersComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BannersComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r12.name);
} }
function BannersComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Slug");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BannersComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r13.slug);
} }
function BannersComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BannersComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BannersComponent_td_20_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const row_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.deleteConfirm(row_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "remove_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Remover ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "edit/" + row_r14.id);
} }
function BannersComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
} }
function BannersComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 27);
} }
class BannersComponent {
    constructor(bannerService, alertService) {
        this.bannerService = bannerService;
        this.alertService = alertService;
        this.displayedColumns = ['id', 'name', 'actions'];
        this.loading = true;
        this.page = 0;
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.loading = true;
        this.bannerService
            .getAll(this.page + 1)
            .subscribe((response) => {
            this.dataSource = response.data;
            this.total = response.total;
        })
            .add(() => this.loading = false);
    }
    delete(row) {
        this.loading = true;
        this.bannerService
            .delete(row.id)
            .subscribe((response) => {
            this.getAll();
            this.alertService.toast(response.message);
        })
            .add(() => this.loading = false);
    }
    pageChange(event) {
        this.page = event.pageIndex;
        this.getAll();
    }
    deleteConfirm(row) {
        this.alertService.confirm("Deseja remover o registro?", "Remover")
            .subscribe((response) => {
            if (response) {
                this.delete(row);
            }
        });
    }
}
BannersComponent.ɵfac = function BannersComponent_Factory(t) { return new (t || BannersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_banner_banner_service__WEBPACK_IMPORTED_MODULE_0__.BannerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService)); };
BannersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BannersComponent, selectors: [["app-banners"]], decls: 24, vars: 6, consts: [["class", "progress", "mode", "indeterminate", 4, "ngIf"], ["fxLayout", "column"], ["fxLayoutAlign", "space-between center"], [1, "margin-right"], ["color", "primary", "mat-flat-button", "", "routerLink", "add"], [1, "mdi", "mdi-plus"], ["fxFlex", "", "mat-table", "", "matSort", "", "matSortActive", "id", "matSortDisableClear", "", "matSortDirection", "desc", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "width", "50px", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "sku"], ["matColumnDef", "actions", "stickyEnd", ""], ["mat-header-cell", "", "class", "actions", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["pageSize", "10", 3, "pageIndex", "length", "page"], ["mode", "indeterminate", 1, "progress"], ["mat-header-cell", "", "width", "50px"], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-header-cell", "", 1, "actions"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["inline", "", 1, "small"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function BannersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BannersComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Banners");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Adicionar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BannersComponent_th_10_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BannersComponent_td_11_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BannersComponent_th_13_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, BannersComponent_td_14_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, BannersComponent_th_16_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, BannersComponent_td_17_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, BannersComponent_th_19_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, BannersComponent_td_20_Template, 9, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, BannersComponent_tr_21_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BannersComponent_tr_22_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function BannersComponent_Template_mat_paginator_page_23_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageIndex", ctx.page)("length", ctx.total);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5286:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/banners/banners.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannersModule": () => (/* binding */ BannersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _banners_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banners.component */ 1625);
/* harmony import */ var _banners_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banners-routing.module */ 8793);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 2257);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ 3900);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 3985);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9453);
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit/add-edit.component */ 8422);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 7639);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4372);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 9356);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 3624);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ 5363);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 859);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 4677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 1260);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 589);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 857);
/* harmony import */ var _share_address_address_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/address/address.module */ 5361);
/* harmony import */ var _share_contact_contact_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/contact/contact.module */ 6602);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ 3487);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-mask */ 6238);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ 4855);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/autocomplete */ 296);
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-mat-select-search */ 5313);
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products/products.module */ 4691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4788);






























class BannersModule {
}
BannersModule.ɵfac = function BannersModule_Factory(t) { return new (t || BannersModule)(); };
BannersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BannersModule });
BannersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _banners_routing_module__WEBPACK_IMPORTED_MODULE_1__.BannersRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOptionModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule,
            _share_address_address_module__WEBPACK_IMPORTED_MODULE_3__.AddressModule,
            _share_contact_contact_module__WEBPACK_IMPORTED_MODULE_4__.ContactModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_26__.NgxMaskModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule,
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_29__.NgxMatSelectSearchModule,
            _products_products_module__WEBPACK_IMPORTED_MODULE_5__.ProductsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BannersModule, { declarations: [_banners_component__WEBPACK_IMPORTED_MODULE_0__.BannersComponent,
        _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__.AddEditComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _banners_routing_module__WEBPACK_IMPORTED_MODULE_1__.BannersRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOptionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule,
        _share_address_address_module__WEBPACK_IMPORTED_MODULE_3__.AddressModule,
        _share_contact_contact_module__WEBPACK_IMPORTED_MODULE_4__.ContactModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_26__.NgxMaskModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule,
        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_29__.NgxMatSelectSearchModule,
        _products_products_module__WEBPACK_IMPORTED_MODULE_5__.ProductsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule] }); })();


/***/ }),

/***/ 7835:
/*!********************************************************!*\
  !*** ./src/app/services/auth/banner/banner.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerService": () => (/* binding */ BannerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);




class BannerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll(page) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/banners/get-all', {
            params: httpParams
        });
    }
    update(data) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/banners/update/' + data.id, data);
    }
    store(data) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/banners/store', data);
    }
    dataprovider() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/banners/dataprovider/', {});
    }
    get(id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/banners/get/' + id, {});
    }
    delete(id) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/banners/delete/' + id, {});
    }
}
BannerService.ɵfac = function BannerService_Factory(t) { return new (t || BannerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BannerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BannerService, factory: BannerService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_banners_banners_module_ts.js.map