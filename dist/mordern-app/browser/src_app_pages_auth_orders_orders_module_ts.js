(self["webpackChunkmodernshop_app"] = self["webpackChunkmodernshop_app"] || []).push([["src_app_pages_auth_orders_orders_module_ts"],{

/***/ 6349:
/*!************************************************************!*\
  !*** ./src/app/pages/auth/orders/orders-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersRoutingModule": () => (/* binding */ OrdersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.component */ 7830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);




const routes = [
    {
        path: '',
        component: _orders_component__WEBPACK_IMPORTED_MODULE_0__.OrdersComponent,
    },
];
class OrdersRoutingModule {
}
OrdersRoutingModule.ɵfac = function OrdersRoutingModule_Factory(t) { return new (t || OrdersRoutingModule)(); };
OrdersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrdersRoutingModule });
OrdersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7830:
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/orders/orders.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _status_update_status_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status-update/status-update.component */ 7100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _services_auth_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth/order/order.service */ 40);
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/alert/alert.service */ 5730);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 592);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 2257);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 589);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 857);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 3487);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 3985);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 3021);
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/price.pipe */ 7424);














function OrdersComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 19);
} }
function OrdersComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r17.id);
} }
function OrdersComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Frete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", row_r18.shipment_option, " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, row_r18.shipment), "");
} }
function OrdersComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_14_div_1_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderOption_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](orderOption_r24 == null ? null : orderOption_r24.option == null ? null : orderOption_r24.option.name);
} }
function OrdersComponent_td_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, OrdersComponent_td_14_div_1_small_3_Template, 2, 1, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderProduct_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](orderProduct_r21.product == null ? null : orderProduct_r21.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", orderProduct_r21 == null ? null : orderProduct_r21.order_product_options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, orderProduct_r21.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", orderProduct_r21.quantity, " x itens");
} }
function OrdersComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OrdersComponent_td_14_div_1_Template, 10, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", row_r19.order_products);
} }
function OrdersComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tipo de Pagamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r25.payment_type == null ? null : row_r25.payment_type.name);
} }
function OrdersComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Status de pagamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r26.payment_status == null ? null : row_r26.payment_status.name);
} }
function OrdersComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, row_r27.amount));
} }
function OrdersComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_26_ng_container_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrdersComponent_td_26_ng_container_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r35.updateStatus(row_r28, "paid"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Informar Pagamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_26_ng_container_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrdersComponent_td_26_ng_container_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r38.updateStatus(row_r28, "cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Cancelar Pedido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_26_ng_container_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrdersComponent_td_26_ng_container_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r41.updateStatus(row_r28, "refunded"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Estornar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_26_ng_container_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrdersComponent_td_26_ng_container_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r46); const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r44.updateStatus(row_r28, "sent"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Informar envio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_td_26_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Atualizar Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-menu", null, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, OrdersComponent_td_26_ng_container_1_button_6_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, OrdersComponent_td_26_ng_container_1_button_7_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, OrdersComponent_td_26_ng_container_1_button_8_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, OrdersComponent_td_26_ng_container_1_button_9_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const row_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (row_r28.payment_status == null ? null : row_r28.payment_status.slug) === "waiting_payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (row_r28.payment_status == null ? null : row_r28.payment_status.slug) === "waiting_payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (row_r28.payment_status == null ? null : row_r28.payment_status.slug) === "paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (row_r28.payment_status == null ? null : row_r28.payment_status.slug) === "paid");
} }
function OrdersComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OrdersComponent_td_26_ng_container_1_Template, 10, 5, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.haveSomeStatus(row_r28.payment_status == null ? null : row_r28.payment_status.slug));
} }
function OrdersComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 39);
} }
function OrdersComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 40);
} }
class OrdersComponent {
    constructor(orderService, alertService, matDialog) {
        this.orderService = orderService;
        this.alertService = alertService;
        this.matDialog = matDialog;
        this.displayedColumns = ['id', 'payment_type', 'shipment', 'details', 'amount', 'payment_type', 'payment_status', 'actions'];
        this.loading = 0;
        this.page = 0;
    }
    ngOnInit() {
        this.getAll();
        this.dataprovider();
    }
    getAll(reset) {
        if (reset) {
            this.dataSource = [];
        }
        this.loading += 1;
        this.orderService
            .getAll(this.page + 1)
            .subscribe((response) => {
            this.dataSource = response.data;
            this.total = response.total;
        })
            .add(() => this.loading -= 1);
    }
    dataprovider() {
        this.loading += 1;
        this.orderService
            .dataprovider()
            .subscribe((response) => {
            this.paymentStatuses = response.payment_statuses;
            console.log(response);
        })
            .add(() => this.loading -= 1);
    }
    pageChange(event) {
        this.page = event.pageIndex;
        this.getAll();
    }
    updateStatus(row, status) {
        const dialog = this.matDialog.open(_status_update_status_update_component__WEBPACK_IMPORTED_MODULE_0__.StatusUpdateComponent, {
            minWidth: '300px',
            maxWidth: '700px',
            data: { status },
        });
        return dialog
            .afterClosed()
            .subscribe(response => {
            if (!response || !response.update) {
                return;
            }
            this.changeStatus(row, status, response.trackingCode);
        });
    }
    changeStatus(row, status, trackingCode) {
        this.loading += 1;
        this.orderService
            .changeStatus(row.id, status, trackingCode)
            .subscribe((response) => {
            this.getAll(true);
            this.alertService.toast(response.message);
        })
            .add(() => this.loading -= 1);
    }
    haveSomeStatus(slug) {
        return slug === 'waiting_payment' || slug === 'paid';
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_order_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
OrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 30, vars: 6, consts: [["class", "progress", "mode", "indeterminate", 4, "ngIf"], ["fxLayout", "column"], ["fxLayoutAlign", "space-between center"], [1, "margin-right"], ["fxFlex", "", "mat-table", "", "matSort", "", "matSortActive", "id", "matSortDisableClear", "", "matSortDirection", "desc", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "width", "50px", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "shipment"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "details"], ["matColumnDef", "payment_type"], ["matColumnDef", "payment_status"], ["matColumnDef", "amount"], ["matColumnDef", "actions", "stickyEnd", ""], ["mat-header-cell", "", "class", "actions", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["pageSize", "10", 3, "pageIndex", "length", "page"], ["mode", "indeterminate", 1, "progress"], ["mat-header-cell", "", "width", "50px"], ["mat-cell", ""], ["mat-header-cell", ""], ["fxLayout", "column", 4, "ngFor", "ngForOf"], ["class", "muted", 4, "ngFor", "ngForOf"], ["fxLayout", "row"], [1, "margin-left"], [1, "muted"], ["mat-header-cell", "", 1, "actions"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "matMenuTriggerFor"], [1, "mdi", "mdi-arrow-split-vertical"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "mdi", "mdi-check"], [1, "mdi", "mdi-close"], [1, "mdi", "mdi-arrow-left"], [1, "mdi", "mdi-truck"], ["mat-header-row", ""], ["mat-row", ""]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, OrdersComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, OrdersComponent_th_7_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, OrdersComponent_td_8_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, OrdersComponent_th_10_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, OrdersComponent_td_11_Template, 3, 4, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, OrdersComponent_th_13_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, OrdersComponent_td_14_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, OrdersComponent_th_16_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, OrdersComponent_td_17_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, OrdersComponent_th_19_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, OrdersComponent_td_20_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](21, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, OrdersComponent_th_22_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, OrdersComponent_td_23_Template, 3, 3, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, OrdersComponent_th_25_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, OrdersComponent_td_26_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, OrdersComponent_tr_27_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, OrdersComponent_tr_28_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function OrdersComponent_Template_mat_paginator_page_29_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageIndex", ctx.page)("length", ctx.total);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__._MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow], pipes: [_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_3__.PricePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4994:
/*!****************************************************!*\
  !*** ./src/app/pages/auth/orders/orders.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* binding */ OrdersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.component */ 7830);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders-routing.module */ 6349);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 2257);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ 3900);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 3985);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9453);
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
/* harmony import */ var _share_address_address_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/address/address.module */ 5361);
/* harmony import */ var _share_contact_contact_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/contact/contact.module */ 6602);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ 3487);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-mask */ 6238);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ 4855);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/autocomplete */ 296);
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-mat-select-search */ 5313);
/* harmony import */ var _pipes_price_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/price.module */ 1885);
/* harmony import */ var _status_update_status_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-update/status-update.component */ 7100);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ 592);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/menu */ 3021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4788);
































class OrdersModule {
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(); };
OrdersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrdersRoutingModule,
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
            _share_address_address_module__WEBPACK_IMPORTED_MODULE_2__.AddressModule,
            _share_contact_contact_module__WEBPACK_IMPORTED_MODULE_3__.ContactModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_26__.NgxMaskModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule,
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_29__.NgxMatSelectSearchModule,
            _pipes_price_module__WEBPACK_IMPORTED_MODULE_4__.PriceModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_0__.OrdersComponent,
        _status_update_status_update_component__WEBPACK_IMPORTED_MODULE_5__.StatusUpdateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _orders_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrdersRoutingModule,
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
        _share_address_address_module__WEBPACK_IMPORTED_MODULE_2__.AddressModule,
        _share_contact_contact_module__WEBPACK_IMPORTED_MODULE_3__.ContactModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_26__.NgxMaskModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule,
        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_29__.NgxMatSelectSearchModule,
        _pipes_price_module__WEBPACK_IMPORTED_MODULE_4__.PriceModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuModule] }); })();


/***/ }),

/***/ 7100:
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/orders/status-update/status-update.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusUpdateComponent": () => (/* binding */ StatusUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 2257);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 6833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4372);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4751);









function StatusUpdateComponent_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "C\u00F3digo de rastreio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StatusUpdateComponent_mat_form_field_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.trackingCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.trackingCode);
} }
class StatusUpdateComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    confirm() {
        this.dialogRef.close({
            update: true,
            trackingCode: this.trackingCode
        });
    }
}
StatusUpdateComponent.ɵfac = function StatusUpdateComponent_Factory(t) { return new (t || StatusUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
StatusUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusUpdateComponent, selectors: [["app-status-update"]], decls: 14, vars: 3, consts: [["mat-dialog-title", "", "fxLayoutAlign", "space-between center"], ["mat-icon-button", "", "mat-dialog-close", ""], [1, "mdi", "mdi-close"], ["fxLayout", "column"], [4, "ngIf"], ["fxLayoutAlign", "end center", 1, "margin-top"], ["mat-stroked-button", "", "color", "primary", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matInput", "", 3, "ngModel", "ngModelChange"]], template: function StatusUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StatusUpdateComponent_mat_form_field_8_Template, 4, 1, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusUpdateComponent_Template_button_click_12_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Atualizar Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Atualizar status para ", ctx.data.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Deseja mesmo atualizar para o status de ", ctx.data.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.status == "sent");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXMtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_orders_orders_module_ts.js.map