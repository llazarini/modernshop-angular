exports.id = 296;
exports.ids = [296];
exports.modules = {

/***/ 50296:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/autocomplete.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTOCOMPLETE_OPTION_HEIGHT": () => (/* binding */ AUTOCOMPLETE_OPTION_HEIGHT),
/* harmony export */   "AUTOCOMPLETE_PANEL_HEIGHT": () => (/* binding */ AUTOCOMPLETE_PANEL_HEIGHT),
/* harmony export */   "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS": () => (/* binding */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MAT_AUTOCOMPLETE_VALUE_ACCESSOR": () => (/* binding */ MAT_AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   "MatAutocomplete": () => (/* binding */ MatAutocomplete),
/* harmony export */   "MatAutocompleteModule": () => (/* binding */ MatAutocompleteModule),
/* harmony export */   "MatAutocompleteOrigin": () => (/* binding */ MatAutocompleteOrigin),
/* harmony export */   "MatAutocompleteSelectedEvent": () => (/* binding */ MatAutocompleteSelectedEvent),
/* harmony export */   "MatAutocompleteTrigger": () => (/* binding */ MatAutocompleteTrigger),
/* harmony export */   "_MatAutocompleteBase": () => (/* binding */ _MatAutocompleteBase),
/* harmony export */   "_MatAutocompleteOriginBase": () => (/* binding */ _MatAutocompleteOriginBase),
/* harmony export */   "_MatAutocompleteTriggerBase": () => (/* binding */ _MatAutocompleteTriggerBase),
/* harmony export */   "getMatAutocompleteMissingPanelError": () => (/* binding */ getMatAutocompleteMissingPanelError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 32371);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 39490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 64677);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 41439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 933);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ 37544);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/bidi */ 46794);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/keycodes */ 33328);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/platform */ 99642);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/portal */ 2414);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 65792);
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */







const _c0 = ["panel"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
} }
const _c1 = ["*"];
let _uniqueAutocompleteIdCounter = 0;
/** Event object that is emitted when an autocomplete option is selected. */
class MatAutocompleteSelectedEvent {
    constructor(
    /** Reference to the autocomplete panel that emitted the event. */
    source, 
    /** Option that was selected. */
    option) {
        this.source = source;
        this.option = option;
    }
}
// Boilerplate for applying mixins to MatAutocomplete.
/** @docs-private */
class MatAutocompleteBase {
}
const _MatAutocompleteMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(MatAutocompleteBase);
/** Injection token to be used to override the default options for `mat-autocomplete`. */
const MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-default-options', {
    providedIn: 'root',
    factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,
});
/** @docs-private */
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
    return { autoActiveFirstOption: false };
}
/** Base class with all of the `MatAutocomplete` functionality. */
class _MatAutocompleteBase extends _MatAutocompleteMixinBase {
    constructor(_changeDetectorRef, _elementRef, defaults) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
        /** Whether the autocomplete panel should be visible, depending on option length. */
        this.showPanel = false;
        this._isOpen = false;
        /** Function that maps an option's control value to its display value in the trigger. */
        this.displayWith = null;
        /** Event that is emitted whenever an option from the list is selected. */
        this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event that is emitted when the autocomplete panel is opened. */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event that is emitted when the autocomplete panel is closed. */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits whenever an option is activated using the keyboard. */
        this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._classList = {};
        /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
        this.id = `mat-autocomplete-${_uniqueAutocompleteIdCounter++}`;
        this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
    }
    /** Whether the autocomplete panel is open. */
    get isOpen() { return this._isOpen && this.showPanel; }
    /**
     * Whether the first option should be highlighted when the autocomplete panel is opened.
     * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
     */
    get autoActiveFirstOption() { return this._autoActiveFirstOption; }
    set autoActiveFirstOption(value) {
        this._autoActiveFirstOption = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /**
     * Takes classes set on the host mat-autocomplete element and applies them to the panel
     * inside the overlay container to allow for easy styling.
     */
    set classList(value) {
        if (value && value.length) {
            this._classList = value.split(' ').reduce((classList, className) => {
                classList[className.trim()] = true;
                return classList;
            }, {});
        }
        else {
            this._classList = {};
        }
        this._setVisibilityClasses(this._classList);
        this._elementRef.nativeElement.className = '';
    }
    ngAfterContentInit() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.ActiveDescendantKeyManager(this.options).withWrap();
        this._activeOptionChanges = this._keyManager.change.subscribe(index => {
            this.optionActivated.emit({ source: this, option: this.options.toArray()[index] || null });
        });
        // Set the initial visibility state.
        this._setVisibility();
    }
    ngOnDestroy() {
        this._activeOptionChanges.unsubscribe();
    }
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     */
    _setScrollTop(scrollTop) {
        if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
        }
    }
    /** Returns the panel's scrollTop. */
    _getScrollTop() {
        return this.panel ? this.panel.nativeElement.scrollTop : 0;
    }
    /** Panel should hide itself when the option list is empty. */
    _setVisibility() {
        this.showPanel = !!this.options.length;
        this._setVisibilityClasses(this._classList);
        this._changeDetectorRef.markForCheck();
    }
    /** Emits the `select` event. */
    _emitSelectEvent(option) {
        const event = new MatAutocompleteSelectedEvent(this, option);
        this.optionSelected.emit(event);
    }
    /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */
    _setVisibilityClasses(classList) {
        classList[this._visibleClass] = this.showPanel;
        classList[this._hiddenClass] = !this.showPanel;
    }
}
_MatAutocompleteBase.ɵfac = function _MatAutocompleteBase_Factory(t) { return new (t || _MatAutocompleteBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS)); };
_MatAutocompleteBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatAutocompleteBase, viewQuery: function _MatAutocompleteBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
    } }, inputs: { displayWith: "displayWith", autoActiveFirstOption: "autoActiveFirstOption", classList: ["class", "classList"], panelWidth: "panelWidth" }, outputs: { optionSelected: "optionSelected", opened: "opened", closed: "closed", optionActivated: "optionActivated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatAutocompleteBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] }
];
_MatAutocompleteBase.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true },] }],
    panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['panel',] }],
    displayWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    autoActiveFirstOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    panelWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    optionSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    optionActivated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['class',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }] }]; }, { displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], optionSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], optionActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], autoActiveFirstOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['class']
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true }]
        }], panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['panel']
        }], panelWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
class MatAutocomplete extends _MatAutocompleteBase {
    constructor() {
        super(...arguments);
        this._visibleClass = 'mat-autocomplete-visible';
        this._hiddenClass = 'mat-autocomplete-hidden';
    }
}
MatAutocomplete.ɵfac = /*@__PURE__*/ function () { let ɵMatAutocomplete_BaseFactory; return function MatAutocomplete_Factory(t) { return (ɵMatAutocomplete_BaseFactory || (ɵMatAutocomplete_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocomplete)))(t || MatAutocomplete); }; }();
MatAutocomplete.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatAutocomplete, selectors: [["mat-autocomplete"]], contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
    } }, hostAttrs: [1, "mat-autocomplete"], inputs: { disableRipple: "disableRipple" }, exportAs: ["matAutocomplete"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 1, vars: 0, consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]], template: function MatAutocomplete_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 2, "ng-template");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass], styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"], encapsulation: 2, changeDetection: 0 });
MatAutocomplete.propDecorators = {
    optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, { descendants: true },] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocomplete, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-autocomplete',
                template: "<ng-template>\n  <div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                exportAs: 'matAutocomplete',
                inputs: ['disableRipple'],
                host: {
                    'class': 'mat-autocomplete'
                },
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }
                ],
                styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"]
            }]
    }], null, { optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, { descendants: true }]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Base class containing all of the functionality for `MatAutocompleteOrigin`. */
class _MatAutocompleteOriginBase {
    constructor(
    /** Reference to the element on which the directive is applied. */
    elementRef) {
        this.elementRef = elementRef;
    }
}
_MatAutocompleteOriginBase.ɵfac = function _MatAutocompleteOriginBase_Factory(t) { return new (t || _MatAutocompleteOriginBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
_MatAutocompleteOriginBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatAutocompleteOriginBase });
_MatAutocompleteOriginBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteOriginBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */
class MatAutocompleteOrigin extends _MatAutocompleteOriginBase {
}
MatAutocompleteOrigin.ɵfac = /*@__PURE__*/ function () { let ɵMatAutocompleteOrigin_BaseFactory; return function MatAutocompleteOrigin_Factory(t) { return (ɵMatAutocompleteOrigin_BaseFactory || (ɵMatAutocompleteOrigin_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocompleteOrigin)))(t || MatAutocompleteOrigin); }; }();
MatAutocompleteOrigin.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatAutocompleteOrigin, selectors: [["", "matAutocompleteOrigin", ""]], exportAs: ["matAutocompleteOrigin"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matAutocompleteOrigin]',
                exportAs: 'matAutocompleteOrigin'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the scrollTop of the panel. Because we are not
 * actually focusing the active item, scroll must be handled manually.
 */
/**
 * The height of each autocomplete option.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 11.0.0
 */
const AUTOCOMPLETE_OPTION_HEIGHT = 48;
/**
 * The total height of the autocomplete panel.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 11.0.0
 */
const AUTOCOMPLETE_PANEL_HEIGHT = 256;
/** Injection token that determines the scroll handling while the autocomplete panel is open. */
const MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-scroll-strategy');
/** @docs-private */
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay],
    useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY,
};
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 */
const MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatAutocompleteTrigger),
    multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * @docs-private
 */
function getMatAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' +
        'Make sure that the id passed to the `matAutocomplete` is correct and that ' +
        'you\'re attempting to open it after the ngAfterContentInit hook.');
}
/** Base class with all of the `MatAutocompleteTrigger` functionality. */
class _MatAutocompleteTriggerBase {
    constructor(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        this._componentDestroyed = false;
        this._autocompleteDisabled = false;
        /** Whether or not the label state is being overridden. */
        this._manuallyFloatingLabel = false;
        /** Subscription to viewport size changes. */
        this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
        /**
         * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
         * closed autocomplete from being reopened if the user switches to another browser tab and then
         * comes back.
         */
        this._canOpenOnNextFocus = true;
        /** Stream of keyboard events that can close the panel. */
        this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        /**
         * Event handler for when the window is blurred. Needs to be an
         * arrow function in order to preserve the context.
         */
        this._windowBlurHandler = () => {
            // If the user blurred the window while the autocomplete is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            this._canOpenOnNextFocus =
                this._document.activeElement !== this._element.nativeElement || this.panelOpen;
        };
        /** `View -> model callback called when value changes` */
        this._onChange = () => { };
        /** `View -> model callback called when autocomplete has been touched` */
        this._onTouched = () => { };
        /**
         * Position of the autocomplete panel relative to the trigger element. A position of `auto`
         * will render the panel underneath the trigger if there is enough space for it to fit in
         * the viewport, otherwise the panel will be shown above it. If the position is set to
         * `above` or `below`, the panel will always be shown above or below the trigger. no matter
         * whether it fits completely in the viewport.
         */
        this.position = 'auto';
        /**
         * `autocomplete` attribute to be set on the input element.
         * @docs-private
         */
        this.autocompleteAttribute = 'off';
        this._overlayAttached = false;
        /** Stream of autocomplete option selections. */
        this.optionSelections = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.defer)(() => {
            if (this.autocomplete && this.autocomplete.options) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...this.autocomplete.options.map(option => option.onSelectionChange));
            }
            // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.
            return this._zone.onStable
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => this.optionSelections));
        });
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * Whether the autocomplete is disabled. When disabled, the element will
     * act as a regular input and the user won't be able to open the panel.
     */
    get autocompleteDisabled() { return this._autocompleteDisabled; }
    set autocompleteDisabled(value) {
        this._autocompleteDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    ngAfterViewInit() {
        const window = this._getWindow();
        if (typeof window !== 'undefined') {
            this._zone.runOutsideAngular(() => window.addEventListener('blur', this._windowBlurHandler));
        }
    }
    ngOnChanges(changes) {
        if (changes['position'] && this._positionStrategy) {
            this._setStrategyPositions(this._positionStrategy);
            if (this.panelOpen) {
                this._overlayRef.updatePosition();
            }
        }
    }
    ngOnDestroy() {
        const window = this._getWindow();
        if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this._windowBlurHandler);
        }
        this._viewportSubscription.unsubscribe();
        this._componentDestroyed = true;
        this._destroyPanel();
        this._closeKeyEventStream.complete();
    }
    /** Whether or not the autocomplete panel is open. */
    get panelOpen() {
        return this._overlayAttached && this.autocomplete.showPanel;
    }
    /** Opens the autocomplete suggestion panel. */
    openPanel() {
        this._attachOverlay();
        this._floatLabel();
    }
    /** Closes the autocomplete suggestion panel. */
    closePanel() {
        this._resetLabel();
        if (!this._overlayAttached) {
            return;
        }
        if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocomplete.closed.emit();
        }
        this.autocomplete._isOpen = this._overlayAttached = false;
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
            this._closingActionsSubscription.unsubscribe();
        }
        // Note that in some cases this can end up being called after the component is destroyed.
        // Add a check to ensure that we don't try to run change detection on a destroyed view.
        if (!this._componentDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            // This ensures that the label is reset when the
            // user clicks outside.
            this._changeDetectorRef.detectChanges();
        }
    }
    /**
     * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
     * within the viewport.
     */
    updatePosition() {
        if (this._overlayAttached) {
            this._overlayRef.updatePosition();
        }
    }
    /**
     * A stream of actions that should close the autocomplete panel, including
     * when an option is selected, on blur, and when TAB is pressed.
     */
    get panelClosingActions() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ?
            this._overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(() => this._overlayAttached)) :
            (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)()).pipe(
        // Normalize the output so we return a consistent type.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(event => event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionSelectionChange ? event : null));
    }
    /** The currently active option, coerced to MatOption type. */
    get activeOption() {
        if (this.autocomplete && this.autocomplete._keyManager) {
            return this.autocomplete._keyManager.activeItem;
        }
        return null;
    }
    /** Stream of clicks outside of the autocomplete panel. */
    _getOutsideClickStream() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.fromEvent)(this._document, 'click'), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.fromEvent)(this._document, 'touchend'))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(event => {
            // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
            // fall back to check the first element in the path of the click event.
            const clickTarget = (this._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] :
                event.target);
            const formField = this._formField ? this._formField._elementRef.nativeElement : null;
            const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
            return this._overlayAttached && clickTarget !== this._element.nativeElement &&
                (!formField || !formField.contains(clickTarget)) &&
                (!customOrigin || !customOrigin.contains(clickTarget)) &&
                (!!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget));
        }));
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        Promise.resolve(null).then(() => this._setTriggerValue(value));
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this._element.nativeElement.disabled = isDisabled;
    }
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        // Prevent the default action on all escape key presses. This is here primarily to bring IE
        // in line with other browsers. By default, pressing escape on IE will cause it to revert
        // the input value to the one that it had on focus, however it won't dispatch any events
        // which means that the model value will be out of sync with the view.
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event)) {
            event.preventDefault();
        }
        if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER && this.panelOpen) {
            this.activeOption._selectViaInteraction();
            this._resetActiveItem();
            event.preventDefault();
        }
        else if (this.autocomplete) {
            const prevActiveItem = this.autocomplete._keyManager.activeItem;
            const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.DOWN_ARROW;
            if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.TAB) {
                this.autocomplete._keyManager.onKeydown(event);
            }
            else if (isArrowKey && this._canOpen()) {
                this.openPanel();
            }
            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
            }
        }
    }
    _handleInput(event) {
        let target = event.target;
        let value = target.value;
        // Based on `NumberValueAccessor` from forms.
        if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
        }
        // If the input has a placeholder, IE will fire the `input` event on page load,
        // focus and blur, in addition to when the user actually changed the value. To
        // filter out all of the extra events, we save the value on focus and between
        // `input` events, and we check whether it changed.
        // See: https://connect.microsoft.com/IE/feedback/details/885747/
        if (this._previousValue !== value) {
            this._previousValue = value;
            this._onChange(value);
            if (this._canOpen() && this._document.activeElement === event.target) {
                this.openPanel();
            }
        }
    }
    _handleFocus() {
        if (!this._canOpenOnNextFocus) {
            this._canOpenOnNextFocus = true;
        }
        else if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;
            this._attachOverlay();
            this._floatLabel(true);
        }
    }
    /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @param shouldAnimate Whether the label should be animated when it is floated.
     */
    _floatLabel(shouldAnimate = false) {
        if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
                this._formField._animateAndLockLabel();
            }
            else {
                this._formField.floatLabel = 'always';
            }
            this._manuallyFloatingLabel = true;
        }
    }
    /** If the label has been manually elevated, return it to its normal state. */
    _resetLabel() {
        if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
        }
    }
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */
    _subscribeToClosingActions() {
        const firstStable = this._zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1));
        const optionChanges = this.autocomplete.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)(() => this._positionStrategy.reapplyLastPosition()), 
        // Defer emitting to the stream until the next tick, because changing
        // bindings in here will cause "changed after checked" errors.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.delay)(0));
        // When the zone is stable initially, and when the option list changes...
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(firstStable, optionChanges)
            .pipe(
        // create a new stream of panelClosingActions, replacing any previous streams
        // that were created, and flatten it so our stream only emits closing events...
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => {
            const wasOpen = this.panelOpen;
            this._resetActiveItem();
            this.autocomplete._setVisibility();
            if (this.panelOpen) {
                this._overlayRef.updatePosition();
                // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                // event, because we may not have emitted it when the panel was attached. This
                // can happen if the users opens the panel and there are no options, but the
                // options come in slightly later or as a result of the value changing.
                if (wasOpen !== this.panelOpen) {
                    this.autocomplete.opened.emit();
                }
            }
            return this.panelClosingActions;
        }), 
        // when the first closing event occurs...
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1))
            // set the value, close the panel, and complete.
            .subscribe(event => this._setValueAndClose(event));
    }
    /** Destroys the autocomplete suggestion panel. */
    _destroyPanel() {
        if (this._overlayRef) {
            this.closePanel();
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    }
    _setTriggerValue(value) {
        const toDisplay = this.autocomplete && this.autocomplete.displayWith ?
            this.autocomplete.displayWith(value) :
            value;
        // Simply falling back to an empty string if the display value is falsy does not work properly.
        // The display value can also be the number zero and shouldn't fall back to an empty string.
        const inputValue = toDisplay != null ? toDisplay : '';
        // If it's used within a `MatFormField`, we should set it through the property so it can go
        // through change detection.
        if (this._formField) {
            this._formField._control.value = inputValue;
        }
        else {
            this._element.nativeElement.value = inputValue;
        }
        this._previousValue = inputValue;
    }
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    _setValueAndClose(event) {
        if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);
            this._setTriggerValue(event.source.value);
            this._onChange(event.source.value);
            this._element.nativeElement.focus();
            this.autocomplete._emitSelectEvent(event.source);
        }
        this.closePanel();
    }
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    _clearPreviousSelectedOption(skip) {
        this.autocomplete.options.forEach(option => {
            if (option !== skip && option.selected) {
                option.deselect();
            }
        });
    }
    _attachOverlay() {
        if (!this.autocomplete && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatAutocompleteMissingPanelError();
        }
        // We want to resolve this once, as late as possible so that we can be
        // sure that the element has been moved into its final place in the DOM.
        if (this._isInsideShadowRoot == null) {
            this._isInsideShadowRoot = !!(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__._getShadowRoot)(this._element.nativeElement);
        }
        let overlayRef = this._overlayRef;
        if (!overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__.TemplatePortal(this.autocomplete.template, this._viewContainerRef);
            overlayRef = this._overlay.create(this._getOverlayConfig());
            this._overlayRef = overlayRef;
            // Use the `keydownEvents` in order to take advantage of
            // the overlay event targeting provided by the CDK overlay.
            overlayRef.keydownEvents().subscribe(event => {
                // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event)) ||
                    (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.UP_ARROW && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event, 'altKey'))) {
                    this._resetActiveItem();
                    this._closeKeyEventStream.next();
                    // We need to stop propagation, otherwise the event will eventually
                    // reach the input itself and cause the overlay to be reopened.
                    event.stopPropagation();
                    event.preventDefault();
                }
            });
            this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
                if (this.panelOpen && overlayRef) {
                    overlayRef.updateSize({ width: this._getPanelWidth() });
                }
            });
        }
        else {
            // Update the trigger, panel width and direction, in case anything has changed.
            this._positionStrategy.setOrigin(this._getConnectedElement());
            overlayRef.updateSize({ width: this._getPanelWidth() });
        }
        if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
        }
        const wasOpen = this.panelOpen;
        this.autocomplete._setVisibility();
        this.autocomplete._isOpen = this._overlayAttached = true;
        // We need to do an extra `panelOpen` check in here, because the
        // autocomplete won't be shown if there are no options.
        if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
        }
    }
    _getOverlayConfig() {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayConfig({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getPanelWidth(),
            direction: this._dir
        });
    }
    _getOverlayPosition() {
        const strategy = this._overlay.position()
            .flexibleConnectedTo(this._getConnectedElement())
            .withFlexibleDimensions(false)
            .withPush(false);
        this._setStrategyPositions(strategy);
        this._positionStrategy = strategy;
        return strategy;
    }
    /** Sets the positions on a position strategy based on the directive's input state. */
    _setStrategyPositions(positionStrategy) {
        // Note that we provide horizontal fallback positions, even though by default the dropdown
        // width matches the input, because consumers can override the width. See #18854.
        const belowPositions = [
            { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
            { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }
        ];
        // The overlay edge connected to the trigger should have squared corners, while
        // the opposite end has rounded corners. We apply a CSS class to swap the
        // border-radius based on the overlay position.
        const panelClass = this._aboveClass;
        const abovePositions = [
            { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', panelClass },
            { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', panelClass }
        ];
        let positions;
        if (this.position === 'above') {
            positions = abovePositions;
        }
        else if (this.position === 'below') {
            positions = belowPositions;
        }
        else {
            positions = [...belowPositions, ...abovePositions];
        }
        positionStrategy.withPositions(positions);
    }
    _getConnectedElement() {
        if (this.connectedTo) {
            return this.connectedTo.elementRef;
        }
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
    }
    _getPanelWidth() {
        return this.autocomplete.panelWidth || this._getHostWidth();
    }
    /** Returns the width of the input element, so the panel width can match it. */
    _getHostWidth() {
        return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
    /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     */
    _resetActiveItem() {
        this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
    }
    /** Determines whether the panel can be opened. */
    _canOpen() {
        const element = this._element.nativeElement;
        return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        var _a;
        return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
    }
    /** Scrolls to a particular option in the list. */
    _scrollToOption(index) {
        // Given that we are not actually focusing active options, we must manually adjust scroll
        // to reveal options below the fold. First, we find the offset of the option from the top
        // of the panel. If that offset is below the fold, the new scrollTop will be the offset -
        // the panel height + the option height, so the active option will be just visible at the
        // bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
        // will become the offset. If that offset is visible within the panel already, the scrollTop is
        // not adjusted.
        const autocomplete = this.autocomplete;
        const labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__._countGroupLabelsBeforeOption)(index, autocomplete.options, autocomplete.optionGroups);
        if (index === 0 && labelCount === 1) {
            // If we've got one group label before the option and we're at the top option,
            // scroll the list to the top. This is better UX than scrolling the list to the
            // top of the option, because it allows the user to read the top group's label.
            autocomplete._setScrollTop(0);
        }
        else {
            const option = autocomplete.options.toArray()[index];
            if (option) {
                const element = option._getHostElement();
                const newScrollPosition = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__._getOptionScrollPosition)(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
                autocomplete._setScrollTop(newScrollPosition);
            }
        }
    }
}
_MatAutocompleteTriggerBase.ɵfac = function _MatAutocompleteTriggerBase_Factory(t) { return new (t || _MatAutocompleteTriggerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler)); };
_MatAutocompleteTriggerBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatAutocompleteTriggerBase, inputs: { position: ["matAutocompletePosition", "position"], autocompleteAttribute: ["autocomplete", "autocompleteAttribute"], autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"], autocomplete: ["matAutocomplete", "autocomplete"], connectedTo: ["matAutocompleteConnectedTo", "connectedTo"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
_MatAutocompleteTriggerBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT,] }] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler }
];
_MatAutocompleteTriggerBase.propDecorators = {
    autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocomplete',] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocompletePosition',] }],
    connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocompleteConnectedTo',] }],
    autocompleteAttribute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['autocomplete',] }],
    autocompleteDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocompleteDisabled',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteTriggerBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
            }] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompletePosition']
        }], autocompleteAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['autocomplete']
        }], autocompleteDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompleteDisabled']
        }], autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocomplete']
        }], connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompleteConnectedTo']
        }] }); })();
class MatAutocompleteTrigger extends _MatAutocompleteTriggerBase {
    constructor() {
        super(...arguments);
        this._aboveClass = 'mat-autocomplete-panel-above';
    }
}
MatAutocompleteTrigger.ɵfac = /*@__PURE__*/ function () { let ɵMatAutocompleteTrigger_BaseFactory; return function MatAutocompleteTrigger_Factory(t) { return (ɵMatAutocompleteTrigger_BaseFactory || (ɵMatAutocompleteTrigger_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocompleteTrigger)))(t || MatAutocompleteTrigger); }; }();
MatAutocompleteTrigger.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatAutocompleteTrigger, selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]], hostAttrs: [1, "mat-autocomplete-trigger"], hostVars: 7, hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() { return ctx._handleFocus(); })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() { return ctx._onTouched(); })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) { return ctx._handleInput($event); })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
    } }, exportAs: ["matAutocompleteTrigger"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `input[matAutocomplete], textarea[matAutocomplete]`,
                host: {
                    'class': 'mat-autocomplete-trigger',
                    '[attr.autocomplete]': 'autocompleteAttribute',
                    '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
                    '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
                    '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
                    '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
                    '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
                    '[attr.aria-haspopup]': '!autocompleteDisabled',
                    // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
                    // a little earlier. This avoids issues where IE delays the focusing of the input.
                    '(focusin)': '_handleFocus()',
                    '(blur)': '_onTouched()',
                    '(input)': '_handleInput($event)',
                    '(keydown)': '_handleKeydown($event)'
                },
                exportAs: 'matAutocompleteTrigger',
                providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatAutocompleteModule {
}
MatAutocompleteModule.ɵfac = function MatAutocompleteModule_Factory(t) { return new (t || MatAutocompleteModule)(); };
MatAutocompleteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatAutocompleteModule });
MatAutocompleteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
                ],
                exports: [
                    MatAutocomplete,
                    MatAutocompleteTrigger,
                    MatAutocompleteOrigin,
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
                ],
                declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
                providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatAutocompleteModule, { declarations: function () { return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]; }, exports: function () { return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=autocomplete.js.map

/***/ })

};
;
//# sourceMappingURL=296.js.map