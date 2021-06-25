(self["webpackChunkmodernshop_app"] = self["webpackChunkmodernshop_app"] || []).push([["common"],{

/***/ 51:
/*!*******************************************!*\
  !*** ./src/app/guard/card-items.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardItemsGuard": () => (/* binding */ CardItemsGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _services_guest_checkout_checkout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/guest/checkout/checkout.service */ 4861);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);



class CardItemsGuard {
    constructor(checkoutService, router) {
        this.checkoutService = checkoutService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.checkoutService.products.length) {
            return true;
        }
        this.router.navigate(['/', 'checkout', 'no-items']);
        return false;
    }
}
CardItemsGuard.ɵfac = function CardItemsGuard_Factory(t) { return new (t || CardItemsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_guest_checkout_checkout_service__WEBPACK_IMPORTED_MODULE_0__.CheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CardItemsGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CardItemsGuard, factory: CardItemsGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40:
/*!******************************************************!*\
  !*** ./src/app/services/auth/order/order.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);




class OrderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll(page) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/orders/get-all', {
            params: httpParams
        });
    }
    show(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        params = params.append('id', id.toString());
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseSiteUrl + '/orders/show/', {
            params
        });
    }
    delete(id) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/orders/delete/' + id, {});
    }
    dataprovider() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/orders/dataprovider');
    }
    changeStatus(id, status, trackingCode) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/orders/status/', {
            id,
            status,
            tracking_code: trackingCode
        });
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5080:
/*!*****************************************************!*\
  !*** ./src/app/services/guest/user/user.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8497);



class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    login(email, password) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAuthUrl + '/login', {
            email: email,
            password: password
        });
    }
    me() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseSiteUrl + '/auth/me');
    }
    forgot(email) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseSiteUrl + '/forgot', {
            email: email,
        });
    }
    create(user) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseSiteUrl + '/users/create', user);
    }
    address(address) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseSiteUrl + '/users/address', address);
    }
    rememberToken(code) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseSiteUrl + '/remember_token', {
            code,
        });
    }
    password(data) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseSiteUrl + '/password', data);
    }
    set email(email) {
        sessionStorage.setItem('email', email);
    }
    get email() {
        return sessionStorage.getItem('email');
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map