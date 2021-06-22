exports.id = 898;
exports.ids = [898];
exports.modules = {

/***/ 51898:
/*!************************************************************!*\
  !*** ./node_modules/ngx-currency/fesm2015/ngx-currency.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR": () => (/* binding */ CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR),
/* harmony export */   "CurrencyMaskDirective": () => (/* binding */ CurrencyMaskDirective),
/* harmony export */   "CurrencyMaskInputMode": () => (/* binding */ CurrencyMaskInputMode),
/* harmony export */   "NgxCurrencyModule": () => (/* binding */ NgxCurrencyModule),
/* harmony export */   "ɵa": () => (/* binding */ CURRENCY_MASK_CONFIG)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 12057);





var CurrencyMaskInputMode;
(function (CurrencyMaskInputMode) {
    CurrencyMaskInputMode[CurrencyMaskInputMode["FINANCIAL"] = 0] = "FINANCIAL";
    CurrencyMaskInputMode[CurrencyMaskInputMode["NATURAL"] = 1] = "NATURAL";
})(CurrencyMaskInputMode || (CurrencyMaskInputMode = {}));
let CURRENCY_MASK_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("currency.mask.config");

class InputManager {
    constructor(htmlInputElement) {
        this.htmlInputElement = htmlInputElement;
    }
    setCursorAt(position) {
        if (this.htmlInputElement.setSelectionRange) {
            this.htmlInputElement.focus();
            this.htmlInputElement.setSelectionRange(position, position);
        }
        else if (this.htmlInputElement.createTextRange) {
            let textRange = this.htmlInputElement.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd("character", position);
            textRange.moveStart("character", position);
            textRange.select();
        }
    }
    updateValueAndCursor(newRawValue, oldLength, selectionStart) {
        this.rawValue = newRawValue;
        let newLength = newRawValue.length;
        selectionStart = selectionStart - (oldLength - newLength);
        this.setCursorAt(selectionStart);
    }
    get canInputMoreNumbers() {
        let onlyNumbers = this.rawValue.replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g, "");
        let haventReachedMaxLength = !(onlyNumbers.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
        let selectionStart = this.inputSelection.selectionStart;
        let selectionEnd = this.inputSelection.selectionEnd;
        let haveNumberSelected = !!(selectionStart != selectionEnd &&
            this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/));
        let startWithZero = (this.htmlInputElement.value.substring(0, 1) == "0");
        return haventReachedMaxLength || haveNumberSelected || startWithZero;
    }
    get inputSelection() {
        let selectionStart = 0;
        let selectionEnd = 0;
        if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
            selectionStart = this.htmlInputElement.selectionStart;
            selectionEnd = this.htmlInputElement.selectionEnd;
        }
        else {
            let range = document.selection.createRange();
            if (range && range.parentElement() == this.htmlInputElement) {
                let lenght = this.htmlInputElement.value.length;
                let normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
                let startRange = this.htmlInputElement.createTextRange();
                startRange.moveToBookmark(range.getBookmark());
                let endRange = this.htmlInputElement.createTextRange();
                endRange.collapse(false);
                if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                    selectionStart = selectionEnd = lenght;
                }
                else {
                    selectionStart = -startRange.moveStart("character", -lenght);
                    selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;
                    if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                        selectionEnd = lenght;
                    }
                    else {
                        selectionEnd = -startRange.moveEnd("character", -lenght);
                        selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
                    }
                }
            }
        }
        return {
            selectionStart: selectionStart,
            selectionEnd: selectionEnd
        };
    }
    get rawValue() {
        return this.htmlInputElement && this.htmlInputElement.value;
    }
    set rawValue(value) {
        this._storedRawValue = value;
        if (this.htmlInputElement) {
            this.htmlInputElement.value = value;
        }
    }
    get storedRawValue() {
        return this._storedRawValue || '';
    }
}

class InputService {
    constructor(htmlInputElement, options) {
        this.htmlInputElement = htmlInputElement;
        this.options = options;
        this.SINGLE_DIGIT_REGEX = new RegExp(/^[0-9\u0660-\u0669\u06F0-\u06F9]$/);
        this.ONLY_NUMBERS_REGEX = new RegExp(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g);
        this.PER_AR_NUMBER = new Map();
        this.inputManager = new InputManager(htmlInputElement);
        this.initialize();
    }
    initialize() {
        this.PER_AR_NUMBER.set("\u06F0", "0");
        this.PER_AR_NUMBER.set("\u06F1", "1");
        this.PER_AR_NUMBER.set("\u06F2", "2");
        this.PER_AR_NUMBER.set("\u06F3", "3");
        this.PER_AR_NUMBER.set("\u06F4", "4");
        this.PER_AR_NUMBER.set("\u06F5", "5");
        this.PER_AR_NUMBER.set("\u06F6", "6");
        this.PER_AR_NUMBER.set("\u06F7", "7");
        this.PER_AR_NUMBER.set("\u06F8", "8");
        this.PER_AR_NUMBER.set("\u06F9", "9");
        this.PER_AR_NUMBER.set("\u0660", "0");
        this.PER_AR_NUMBER.set("\u0661", "1");
        this.PER_AR_NUMBER.set("\u0662", "2");
        this.PER_AR_NUMBER.set("\u0663", "3");
        this.PER_AR_NUMBER.set("\u0664", "4");
        this.PER_AR_NUMBER.set("\u0665", "5");
        this.PER_AR_NUMBER.set("\u0666", "6");
        this.PER_AR_NUMBER.set("\u0667", "7");
        this.PER_AR_NUMBER.set("\u0668", "8");
        this.PER_AR_NUMBER.set("\u0669", "9");
    }
    addNumber(keyCode) {
        const { decimal, precision, inputMode } = this.options;
        let keyChar = String.fromCharCode(keyCode);
        const isDecimalChar = keyChar === this.options.decimal;
        if (!this.rawValue) {
            this.rawValue = this.applyMask(false, keyChar);
            let selectionStart = undefined;
            if (inputMode === CurrencyMaskInputMode.NATURAL && precision > 0) {
                selectionStart = this.rawValue.indexOf(decimal);
                if (isDecimalChar) {
                    selectionStart++;
                }
            }
            this.updateFieldValue(selectionStart);
        }
        else {
            let selectionStart = this.inputSelection.selectionStart;
            let selectionEnd = this.inputSelection.selectionEnd;
            const rawValueStart = this.rawValue.substring(0, selectionStart);
            let rawValueEnd = this.rawValue.substring(selectionEnd, this.rawValue.length);
            // In natural mode, replace decimals instead of shifting them.
            const inDecimalPortion = rawValueStart.indexOf(decimal) !== -1;
            if (inputMode === CurrencyMaskInputMode.NATURAL && inDecimalPortion && selectionStart === selectionEnd) {
                rawValueEnd = rawValueEnd.substring(1);
            }
            const newValue = rawValueStart + keyChar + rawValueEnd;
            let nextSelectionStart = selectionStart + 1;
            const isDecimalOrThousands = isDecimalChar || keyChar === this.options.thousands;
            if (isDecimalOrThousands && keyChar === rawValueEnd[0]) {
                // If the cursor is just before the decimal or thousands separator and the user types the
                // decimal or thousands separator, move the cursor past it.
                nextSelectionStart++;
            }
            else if (!this.SINGLE_DIGIT_REGEX.test(keyChar)) {
                // Ignore other non-numbers.
                return;
            }
            this.rawValue = newValue;
            this.updateFieldValue(nextSelectionStart);
        }
    }
    applyMask(isNumber, rawValue, disablePadAndTrim = false) {
        let { allowNegative, decimal, precision, prefix, suffix, thousands, min, max, inputMode } = this.options;
        rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
        let onlyNumbers = rawValue.replace(this.ONLY_NUMBERS_REGEX, "");
        if (!onlyNumbers && rawValue !== decimal) {
            return "";
        }
        if (inputMode === CurrencyMaskInputMode.NATURAL && !isNumber && !disablePadAndTrim) {
            rawValue = this.padOrTrimPrecision(rawValue);
            onlyNumbers = rawValue.replace(this.ONLY_NUMBERS_REGEX, "");
        }
        let integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision)
            .replace(/^\u0660*/g, "")
            .replace(/^\u06F0*/g, "")
            .replace(/^0*/g, "");
        if (integerPart == "") {
            integerPart = "0";
        }
        let integerValue = parseInt(integerPart);
        integerPart = integerPart.replace(/\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g, thousands);
        if (thousands && integerPart.startsWith(thousands)) {
            integerPart = integerPart.substring(1);
        }
        let newRawValue = integerPart;
        let decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
        let decimalValue = parseInt(decimalPart) || 0;
        let isNegative = rawValue.indexOf("-") > -1;
        // Ensure max is at least as large as min.
        max = (this.isNullOrUndefined(max) || this.isNullOrUndefined(min)) ? max : Math.max(max, min);
        // Restrict to the min and max values.
        let newValue = integerValue + (decimalValue / 100);
        newValue = isNegative ? -newValue : newValue;
        if (!this.isNullOrUndefined(max) && newValue > max) {
            return this.applyMask(true, max + '');
        }
        else if (!this.isNullOrUndefined(min) && newValue < min) {
            return this.applyMask(true, min + '');
        }
        if (precision > 0) {
            if (newRawValue == "0" && decimalPart.length < precision) {
                newRawValue += decimal + "0".repeat(precision - 1) + decimalPart;
            }
            else {
                newRawValue += decimal + decimalPart;
            }
        }
        let isZero = newValue == 0;
        let operator = (isNegative && allowNegative && !isZero) ? "-" : "";
        return operator + prefix + newRawValue + suffix;
    }
    padOrTrimPrecision(rawValue) {
        let { decimal, precision } = this.options;
        let decimalIndex = rawValue.lastIndexOf(decimal);
        if (decimalIndex === -1) {
            decimalIndex = rawValue.length;
            rawValue += decimal;
        }
        let decimalPortion = rawValue.substring(decimalIndex).replace(this.ONLY_NUMBERS_REGEX, "");
        const actualPrecision = decimalPortion.length;
        if (actualPrecision < precision) {
            for (let i = actualPrecision; i < precision; i++) {
                decimalPortion += '0';
            }
        }
        else if (actualPrecision > precision) {
            decimalPortion = decimalPortion.substring(0, decimalPortion.length + precision - actualPrecision);
        }
        return rawValue.substring(0, decimalIndex) + decimal + decimalPortion;
    }
    clearMask(rawValue) {
        if (this.isNullable() && rawValue === "")
            return null;
        let value = (rawValue || "0").replace(this.options.prefix, "").replace(this.options.suffix, "");
        if (this.options.thousands) {
            value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
        }
        if (this.options.decimal) {
            value = value.replace(this.options.decimal, ".");
        }
        this.PER_AR_NUMBER.forEach((val, key) => {
            const re = new RegExp(key, "g");
            value = value.replace(re, val);
        });
        return parseFloat(value);
    }
    changeToNegative() {
        if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
            // Apply the mask to ensure the min and max values are enforced.
            this.rawValue = this.applyMask(false, "-" + this.rawValue);
        }
    }
    changeToPositive() {
        // Apply the mask to ensure the min and max values are enforced.
        this.rawValue = this.applyMask(false, this.rawValue.replace("-", ""));
    }
    removeNumber(keyCode) {
        let { decimal, thousands, prefix, suffix, inputMode } = this.options;
        if (this.isNullable() && this.value == 0) {
            this.rawValue = null;
            return;
        }
        let selectionEnd = this.inputSelection.selectionEnd;
        let selectionStart = this.inputSelection.selectionStart;
        const suffixStart = this.rawValue.length - suffix.length;
        selectionEnd = Math.min(suffixStart, Math.max(selectionEnd, prefix.length));
        selectionStart = Math.min(suffixStart, Math.max(selectionStart, prefix.length));
        // Check if selection was entirely in the prefix or suffix. 
        if (selectionStart === selectionEnd &&
            this.inputSelection.selectionStart !== this.inputSelection.selectionEnd) {
            this.updateFieldValue(selectionStart);
            return;
        }
        let decimalIndex = this.rawValue.indexOf(decimal);
        if (decimalIndex === -1) {
            decimalIndex = this.rawValue.length;
        }
        let shiftSelection = 0;
        let insertChars = '';
        const isCursorInDecimals = decimalIndex < selectionEnd;
        const isCursorImmediatelyAfterDecimalPoint = decimalIndex + 1 === selectionEnd;
        if (selectionEnd === selectionStart) {
            if (keyCode == 8) {
                if (selectionStart <= prefix.length) {
                    return;
                }
                selectionStart--;
                // If previous char isn't a number, go back one more.
                if (!this.rawValue.substr(selectionStart, 1).match(/\d/)) {
                    selectionStart--;
                }
                // In natural mode, jump backwards when in decimal portion of number.
                if (inputMode === CurrencyMaskInputMode.NATURAL && isCursorInDecimals) {
                    shiftSelection = -1;
                    // when removing a single whole number, replace it with 0
                    if (isCursorImmediatelyAfterDecimalPoint && this.value < 10 && this.value > -10) {
                        insertChars += '0';
                    }
                }
            }
            else if (keyCode == 46 || keyCode == 63272) {
                if (selectionStart === suffixStart) {
                    return;
                }
                selectionEnd++;
                // If next char isn't a number, go one more.
                if (!this.rawValue.substr(selectionStart, 1).match(/\d/)) {
                    selectionStart++;
                    selectionEnd++;
                }
            }
        }
        // In natural mode, replace decimals with 0s.
        if (inputMode === CurrencyMaskInputMode.NATURAL && selectionStart > decimalIndex) {
            const replacedDecimalCount = selectionEnd - selectionStart;
            for (let i = 0; i < replacedDecimalCount; i++) {
                insertChars += '0';
            }
        }
        let selectionFromEnd = this.rawValue.length - selectionEnd;
        this.rawValue = this.rawValue.substring(0, selectionStart) + insertChars + this.rawValue.substring(selectionEnd);
        // Remove leading thousand separator from raw value.
        const startChar = this.rawValue.substr(prefix.length, 1);
        if (startChar === thousands) {
            this.rawValue = this.rawValue.substring(0, prefix.length) + this.rawValue.substring(prefix.length + 1);
            selectionFromEnd = Math.min(selectionFromEnd, this.rawValue.length - prefix.length);
        }
        this.updateFieldValue(this.rawValue.length - selectionFromEnd + shiftSelection, true);
    }
    updateFieldValue(selectionStart, disablePadAndTrim = false) {
        let newRawValue = this.applyMask(false, this.rawValue || "", disablePadAndTrim);
        selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
        selectionStart = Math.max(this.options.prefix.length, Math.min(selectionStart, this.rawValue.length - this.options.suffix.length));
        this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
    }
    updateOptions(options) {
        let value = this.value;
        this.options = options;
        this.value = value;
    }
    prefixLength() {
        return this.options.prefix.length;
    }
    suffixLength() {
        return this.options.suffix.length;
    }
    isNullable() {
        return this.options.nullable;
    }
    get canInputMoreNumbers() {
        return this.inputManager.canInputMoreNumbers;
    }
    get inputSelection() {
        return this.inputManager.inputSelection;
    }
    get rawValue() {
        return this.inputManager.rawValue;
    }
    set rawValue(value) {
        this.inputManager.rawValue = value;
    }
    get storedRawValue() {
        return this.inputManager.storedRawValue;
    }
    get value() {
        return this.clearMask(this.rawValue);
    }
    set value(value) {
        this.rawValue = this.applyMask(true, "" + value);
    }
    isNullOrUndefined(value) {
        return value === null || value === undefined;
    }
}

class InputHandler {
    constructor(htmlInputElement, options) {
        this.inputService = new InputService(htmlInputElement, options);
    }
    handleCut(event) {
        setTimeout(() => {
            this.inputService.updateFieldValue();
            this.setValue(this.inputService.value);
            this.onModelChange(this.inputService.value);
        }, 0);
    }
    handleInput(event) {
        let selectionStart = this.inputService.inputSelection.selectionStart;
        let keyCode = this.inputService.rawValue.charCodeAt(selectionStart - 1);
        let rawValueLength = this.inputService.rawValue.length;
        let storedRawValueLength = this.inputService.storedRawValue.length;
        if (Math.abs(rawValueLength - storedRawValueLength) != 1) {
            this.inputService.updateFieldValue(selectionStart);
            this.onModelChange(this.inputService.value);
            return;
        }
        // Restore the old value.
        this.inputService.rawValue = this.inputService.storedRawValue;
        if (rawValueLength < storedRawValueLength) {
            // Chrome Android seems to move the cursor in response to a backspace AFTER processing the
            // input event, so we need to wrap this in a timeout.
            this.timer(() => {
                // Move the cursor to just after the deleted value.
                this.inputService.updateFieldValue(selectionStart + 1);
                // Then backspace it.
                this.inputService.removeNumber(8);
                this.onModelChange(this.inputService.value);
            }, 0);
        }
        if (rawValueLength > storedRawValueLength) {
            // Move the cursor to just before the new value.
            this.inputService.updateFieldValue(selectionStart - 1);
            // Process the character like a keypress.
            this.handleKeypressImpl(keyCode);
        }
    }
    handleKeydown(event) {
        let keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
            event.preventDefault();
            if (this.inputService.inputSelection.selectionStart <= this.inputService.prefixLength() &&
                this.inputService.inputSelection.selectionEnd >= this.inputService.rawValue.length - this.inputService.suffixLength()) {
                this.clearValue();
            }
            else {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
        }
    }
    clearValue() {
        this.setValue(this.inputService.isNullable() ? null : 0);
        this.onModelChange(this.inputService.value);
    }
    handleKeypress(event) {
        let keyCode = event.which || event.charCode || event.keyCode;
        event.preventDefault();
        if (keyCode === 97 && event.ctrlKey) {
            return;
        }
        this.handleKeypressImpl(keyCode);
    }
    handleKeypressImpl(keyCode) {
        switch (keyCode) {
            case undefined:
            case 9:
            case 13:
                return;
            case 43:
                this.inputService.changeToPositive();
                break;
            case 45:
                this.inputService.changeToNegative();
                break;
            default:
                if (this.inputService.canInputMoreNumbers) {
                    let selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
                    if (selectionRangeLength == this.inputService.rawValue.length) {
                        this.setValue(null);
                    }
                    this.inputService.addNumber(keyCode);
                }
                break;
        }
        this.onModelChange(this.inputService.value);
    }
    handlePaste(event) {
        setTimeout(() => {
            this.inputService.updateFieldValue();
            this.setValue(this.inputService.value);
            this.onModelChange(this.inputService.value);
        }, 1);
    }
    updateOptions(options) {
        this.inputService.updateOptions(options);
    }
    getOnModelChange() {
        return this.onModelChange;
    }
    setOnModelChange(callbackFunction) {
        this.onModelChange = callbackFunction;
    }
    getOnModelTouched() {
        return this.onModelTouched;
    }
    setOnModelTouched(callbackFunction) {
        this.onModelTouched = callbackFunction;
    }
    setValue(value) {
        this.inputService.value = value;
    }
    /**
     * Passthrough to setTimeout that can be stubbed out in tests.
     */
    timer(callback, delayMillis) {
        setTimeout(callback, delayMillis);
    }
}

const CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CurrencyMaskDirective),
    multi: true,
};
class CurrencyMaskDirective {
    constructor(currencyMaskConfig, elementRef, keyValueDiffers) {
        this.currencyMaskConfig = currencyMaskConfig;
        this.elementRef = elementRef;
        this.keyValueDiffers = keyValueDiffers;
        this.options = {};
        this.optionsTemplate = {
            align: "right",
            allowNegative: true,
            allowZero: true,
            decimal: ".",
            precision: 2,
            prefix: "$ ",
            suffix: "",
            thousands: ",",
            nullable: false,
            inputMode: CurrencyMaskInputMode.FINANCIAL
        };
        if (currencyMaskConfig) {
            this.optionsTemplate = currencyMaskConfig;
        }
        this.keyValueDiffer = keyValueDiffers.find({}).create();
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.style.textAlign = this.options && this.options.align ? this.options.align : this.optionsTemplate.align;
    }
    ngDoCheck() {
        if (this.keyValueDiffer.diff(this.options)) {
            this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
    }
    ngOnInit() {
        this.inputHandler = new InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    }
    handleBlur(event) {
        this.inputHandler.getOnModelTouched().apply(event);
    }
    handleCut(event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleCut(event);
        }
    }
    handleInput(event) {
        if (this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleInput(event);
        }
    }
    handleKeydown(event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleKeydown(event);
        }
    }
    handleKeypress(event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleKeypress(event);
        }
    }
    handlePaste(event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handlePaste(event);
        }
    }
    handleDrop(event) {
        if (!this.isChromeAndroid()) {
            event.preventDefault();
        }
    }
    isChromeAndroid() {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    }
    isReadOnly() {
        return this.elementRef.nativeElement.hasAttribute('readonly');
    }
    registerOnChange(callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
    }
    registerOnTouched(callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
    }
    setDisabledState(value) {
        this.elementRef.nativeElement.disabled = value;
    }
    writeValue(value) {
        this.inputHandler.setValue(value);
    }
}
CurrencyMaskDirective.ɵfac = function CurrencyMaskDirective_Factory(t) { return new (t || CurrencyMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CURRENCY_MASK_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers)); };
CurrencyMaskDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CurrencyMaskDirective, selectors: [["", "currencyMask", ""]], hostBindings: function CurrencyMaskDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CurrencyMaskDirective_blur_HostBindingHandler($event) { return ctx.handleBlur($event); })("cut", function CurrencyMaskDirective_cut_HostBindingHandler($event) { return ctx.handleCut($event); })("input", function CurrencyMaskDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("keydown", function CurrencyMaskDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); })("keypress", function CurrencyMaskDirective_keypress_HostBindingHandler($event) { return ctx.handleKeypress($event); })("paste", function CurrencyMaskDirective_paste_HostBindingHandler($event) { return ctx.handlePaste($event); })("drop", function CurrencyMaskDirective_drop_HostBindingHandler($event) { return ctx.handleDrop($event); });
    } }, inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR])] });
CurrencyMaskDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [CURRENCY_MASK_CONFIG,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers }
];
CurrencyMaskDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [CURRENCY_MASK_CONFIG,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers }
];
CurrencyMaskDirective.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    handleBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ["blur", ["$event"],] }],
    handleCut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ["cut", ["$event"],] }],
    handleInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ["input", ["$event"],] }],
    handleKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ["keydown", ["$event"],] }],
    handleKeypress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ["keypress", ["$event"],] }],
    handlePaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ["paste", ["$event"],] }],
    handleDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ["drop", ["$event"],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyMaskDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: "[currencyMask]",
                providers: [CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [CURRENCY_MASK_CONFIG]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], handleBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["blur", ["$event"]]
        }], handleCut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["cut", ["$event"]]
        }], handleInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["input", ["$event"]]
        }], handleKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["keydown", ["$event"]]
        }], handleKeypress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["keypress", ["$event"]]
        }], handlePaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["paste", ["$event"]]
        }], handleDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["drop", ["$event"]]
        }] }); })();

class NgxCurrencyModule {
    static forRoot(config) {
        return {
            ngModule: NgxCurrencyModule,
            providers: [{
                    provide: CURRENCY_MASK_CONFIG,
                    useValue: config,
                }]
        };
    }
}
NgxCurrencyModule.ɵfac = function NgxCurrencyModule_Factory(t) { return new (t || NgxCurrencyModule)(); };
NgxCurrencyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxCurrencyModule });
NgxCurrencyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxCurrencyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule],
                declarations: [CurrencyMaskDirective],
                exports: [CurrencyMaskDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxCurrencyModule, { declarations: function () { return [CurrencyMaskDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule]; }, exports: function () { return [CurrencyMaskDirective]; } }); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-currency.js.map

/***/ })

};
;
//# sourceMappingURL=898.js.map