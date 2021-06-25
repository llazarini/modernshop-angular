(self["webpackChunkmodernshop_app"] = self["webpackChunkmodernshop_app"] || []).push([["src_app_pages_auth_categories_categories_module_ts"],{

/***/ 824:
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/categories/add-edit/add-edit.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditComponent": () => (/* binding */ AddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _helpers_TokenHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/TokenHelper */ 2029);
/* harmony import */ var _interfaces_IFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../interfaces/IFile */ 7090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/alert/alert.service */ 5730);
/* harmony import */ var _services_auth_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth/category/category.service */ 1140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 2257);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 6833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 4372);
/* harmony import */ var _share_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/file-upload/file-upload.component */ 2166);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 3985);















function AddEditComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-progress-bar", 11);
} }
class AddEditComponent {
    constructor(formBuilder = null, router, activatedRoute, alertService, categoryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertService = alertService;
        this.categoryService = categoryService;
        this.id = null;
        this.token = _helpers_TokenHelper__WEBPACK_IMPORTED_MODULE_0__.TokenHelper.generate();
        this.fileType = _interfaces_IFile__WEBPACK_IMPORTED_MODULE_1__.IFileClassType.category;
        this.formGroup = this.formBuilder.group({
            request_token: [this.token],
            id: [null],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(255)]],
            description: [null],
            slug: [null],
        });
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        if (this.id) {
            this.get();
        }
        this.dataprovider();
    }
    dataprovider() {
        this.loading = true;
        this.categoryService
            .dataprovider()
            .subscribe((response) => {
        })
            .add(() => this.loading = false);
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
        this.categoryService
            .store(this.formGroup.value)
            .subscribe((response) => {
            this.router.navigate(['/', 'auth', 'categories']);
            this.alertService.toast(response.message);
        }, error => {
            this.alertService.treatError(error);
        })
            .add(() => this.loading = false);
    }
    update() {
        this.loading = true;
        this.categoryService
            .update(this.formGroup.value)
            .subscribe((response) => {
            this.router.navigate(['/', 'auth', 'categories']);
            this.alertService.toast(response.message);
        }, error => {
            this.alertService.treatError(error);
        })
            .add(() => this.loading = false);
    }
    get() {
        this.loading = true;
        this.categoryService
            .get(this.id)
            .subscribe((response) => {
            this.formGroup.patchValue(response);
        })
            .add(() => this.loading = false);
    }
}
AddEditComponent.ɵfac = function AddEditComponent_Factory(t) { return new (t || AddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_category_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService)); };
AddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddEditComponent, selectors: [["app-add-edit"]], decls: 22, vars: 8, consts: [["class", "progress", "mode", "indeterminate", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], ["color", "primary", "mat-flat-button", "", 3, "click"], [1, "mdi", "mdi-plus"], [1, "common-form", "padding", 3, "formGroup", "submit"], ["fxLayout", "column", 1, "common-form-max"], ["appearance", "outline"], ["matInput", "", "required", "", "formControlName", "name"], ["matInput", "", "required", "", "formControlName", "slug"], ["matInput", "", "required", "", "formControlName", "description"], [3, "multiple", "type", "id", "token"], ["mode", "indeterminate", 1, "progress"]], template: function AddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddEditComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddEditComponent_Template_button_click_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AddEditComponent_Template_form_submit_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Nome da Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "C\u00F3digo (Slug)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "app-file-upload", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.id ? "Editar" : "Adicionar", " Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.id ? "Salvar edi\u00E7\u00E3o" : "Adicionar", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("multiple", false)("type", ctx.fileType)("id", ctx.id)("token", ctx.token);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _share_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__.FileUploadComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar], styles: [".list[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJhZGQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcbiAgbWluLXdpZHRoOiAyMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2934:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/categories/categories-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesRoutingModule": () => (/* binding */ CategoriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.component */ 6553);
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit/add-edit.component */ 824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);





const routes = [
    {
        path: '',
        component: _categories_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesComponent,
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
class CategoriesRoutingModule {
}
CategoriesRoutingModule.ɵfac = function CategoriesRoutingModule_Factory(t) { return new (t || CategoriesRoutingModule)(); };
CategoriesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CategoriesRoutingModule });
CategoriesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CategoriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6553:
/*!***************************************************************!*\
  !*** ./src/app/pages/auth/categories/categories.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _services_auth_category_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth/category/category.service */ 1140);
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












function CategoriesComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 20);
} }
function CategoriesComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r15.id);
} }
function CategoriesComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r16.name);
} }
function CategoriesComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Slug");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r17.slug);
} }
function CategoriesComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "C\u00F3digo / Slug");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r18.slug);
} }
function CategoriesComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r19.description);
} }
function CategoriesComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriesComponent_td_26_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const row_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.deleteConfirm(row_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "remove_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Remover ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "edit/" + row_r20.id);
} }
function CategoriesComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 28);
} }
function CategoriesComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 29);
} }
class CategoriesComponent {
    constructor(categoryService, alertService) {
        this.categoryService = categoryService;
        this.alertService = alertService;
        this.displayedColumns = ['id', 'name', 'slug', 'actions'];
        this.loading = true;
        this.page = 0;
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.loading = true;
        this.categoryService
            .getAll(this.page + 1)
            .subscribe((response) => {
            this.dataSource = response.data;
            this.total = response.total;
        })
            .add(() => this.loading = false);
    }
    delete(row) {
        this.loading = true;
        this.categoryService
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
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_category_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService)); };
CategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 30, vars: 6, consts: [["class", "progress", "mode", "indeterminate", 4, "ngIf"], ["fxLayout", "column"], ["fxLayoutAlign", "space-between center"], [1, "margin-right"], ["color", "primary", "mat-flat-button", "", "routerLink", "add"], [1, "mdi", "mdi-plus"], ["fxFlex", "", "mat-table", "", "matSort", "", "matSortActive", "id", "matSortDisableClear", "", "matSortDirection", "desc", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "width", "50px", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "slug"], ["matColumnDef", "sku"], ["matColumnDef", "price"], ["matColumnDef", "actions", "stickyEnd", ""], ["mat-header-cell", "", "class", "actions", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["pageSize", "10", 3, "pageIndex", "length", "page"], ["mode", "indeterminate", 1, "progress"], ["mat-header-cell", "", "width", "50px"], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-header-cell", "", 1, "actions"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["inline", "", 1, "small"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CategoriesComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Categorias");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Adicionar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CategoriesComponent_th_10_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CategoriesComponent_td_11_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CategoriesComponent_th_13_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CategoriesComponent_td_14_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CategoriesComponent_th_16_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CategoriesComponent_td_17_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CategoriesComponent_th_19_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CategoriesComponent_td_20_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CategoriesComponent_th_22_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CategoriesComponent_td_23_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CategoriesComponent_th_25_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CategoriesComponent_td_26_Template, 9, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CategoriesComponent_tr_27_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CategoriesComponent_tr_28_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-paginator", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function CategoriesComponent_Template_mat_paginator_page_29_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageIndex", ctx.page)("length", ctx.total);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2869:
/*!************************************************************!*\
  !*** ./src/app/pages/auth/categories/categories.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesModule": () => (/* binding */ CategoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.component */ 6553);
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-routing.module */ 2934);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 2257);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ 3900);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 3985);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9453);
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit/add-edit.component */ 824);
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






























class CategoriesModule {
}
CategoriesModule.ɵfac = function CategoriesModule_Factory(t) { return new (t || CategoriesModule)(); };
CategoriesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CategoriesModule });
CategoriesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_1__.CategoriesRoutingModule,
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CategoriesModule, { declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesComponent,
        _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__.AddEditComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _categories_routing_module__WEBPACK_IMPORTED_MODULE_1__.CategoriesRoutingModule,
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
        _products_products_module__WEBPACK_IMPORTED_MODULE_5__.ProductsModule] }); })();


/***/ }),

/***/ 1140:
/*!************************************************************!*\
  !*** ./src/app/services/auth/category/category.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);




class CategoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll(page) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/categories/get-all', {
            params: httpParams
        });
    }
    update(data) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/categories/update/' + data.id, data);
    }
    store(data) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/categories/store', data);
    }
    dataprovider() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/categories/dataprovider/', {});
    }
    get(id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/categories/get/' + id, {});
    }
    delete(id) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/categories/delete/' + id, {});
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_categories_categories_module_ts.js.map