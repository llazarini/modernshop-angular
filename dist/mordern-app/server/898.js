exports.id=898,exports.ids=[898],exports.modules={1898:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g1:()=>CurrencyMaskDirective,Ud:()=>NgxCurrencyModule});var CurrencyMaskInputMode,_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4788),_angular_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4751),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2057);!function(CurrencyMaskInputMode){CurrencyMaskInputMode[CurrencyMaskInputMode.FINANCIAL=0]="FINANCIAL",CurrencyMaskInputMode[CurrencyMaskInputMode.NATURAL=1]="NATURAL"}(CurrencyMaskInputMode||(CurrencyMaskInputMode={}));let CURRENCY_MASK_CONFIG=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("currency.mask.config");class InputManager{constructor(htmlInputElement){this.htmlInputElement=htmlInputElement}setCursorAt(position){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(position,position);else if(this.htmlInputElement.createTextRange){let textRange=this.htmlInputElement.createTextRange();textRange.collapse(!0),textRange.moveEnd("character",position),textRange.moveStart("character",position),textRange.select()}}updateValueAndCursor(newRawValue,oldLength,selectionStart){this.rawValue=newRawValue,selectionStart-=oldLength-newRawValue.length,this.setCursorAt(selectionStart)}get canInputMoreNumbers(){let haventReachedMaxLength=!(this.rawValue.replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g,"").length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),selectionStart=this.inputSelection.selectionStart,selectionEnd=this.inputSelection.selectionEnd,haveNumberSelected=!(selectionStart==selectionEnd||!this.htmlInputElement.value.substring(selectionStart,selectionEnd).match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/)),startWithZero="0"==this.htmlInputElement.value.substring(0,1);return haventReachedMaxLength||haveNumberSelected||startWithZero}get inputSelection(){let selectionStart=0,selectionEnd=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)selectionStart=this.htmlInputElement.selectionStart,selectionEnd=this.htmlInputElement.selectionEnd;else{let range=document.selection.createRange();if(range&&range.parentElement()==this.htmlInputElement){let lenght=this.htmlInputElement.value.length,normalizedValue=this.htmlInputElement.value.replace(/\r\n/g,"\n"),startRange=this.htmlInputElement.createTextRange();startRange.moveToBookmark(range.getBookmark());let endRange=this.htmlInputElement.createTextRange();endRange.collapse(!1),startRange.compareEndPoints("StartToEnd",endRange)>-1?selectionStart=selectionEnd=lenght:(selectionStart=-startRange.moveStart("character",-lenght),selectionStart+=normalizedValue.slice(0,selectionStart).split("\n").length-1,startRange.compareEndPoints("EndToEnd",endRange)>-1?selectionEnd=lenght:(selectionEnd=-startRange.moveEnd("character",-lenght),selectionEnd+=normalizedValue.slice(0,selectionEnd).split("\n").length-1))}}return{selectionStart:selectionStart,selectionEnd:selectionEnd}}get rawValue(){return this.htmlInputElement&&this.htmlInputElement.value}set rawValue(value){this._storedRawValue=value,this.htmlInputElement&&(this.htmlInputElement.value=value)}get storedRawValue(){return this._storedRawValue||""}}class InputService{constructor(htmlInputElement,options){this.htmlInputElement=htmlInputElement,this.options=options,this.SINGLE_DIGIT_REGEX=new RegExp(/^[0-9\u0660-\u0669\u06F0-\u06F9]$/),this.ONLY_NUMBERS_REGEX=new RegExp(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g),this.PER_AR_NUMBER=new Map,this.inputManager=new InputManager(htmlInputElement),this.initialize()}initialize(){this.PER_AR_NUMBER.set("\u06f0","0"),this.PER_AR_NUMBER.set("\u06f1","1"),this.PER_AR_NUMBER.set("\u06f2","2"),this.PER_AR_NUMBER.set("\u06f3","3"),this.PER_AR_NUMBER.set("\u06f4","4"),this.PER_AR_NUMBER.set("\u06f5","5"),this.PER_AR_NUMBER.set("\u06f6","6"),this.PER_AR_NUMBER.set("\u06f7","7"),this.PER_AR_NUMBER.set("\u06f8","8"),this.PER_AR_NUMBER.set("\u06f9","9"),this.PER_AR_NUMBER.set("\u0660","0"),this.PER_AR_NUMBER.set("\u0661","1"),this.PER_AR_NUMBER.set("\u0662","2"),this.PER_AR_NUMBER.set("\u0663","3"),this.PER_AR_NUMBER.set("\u0664","4"),this.PER_AR_NUMBER.set("\u0665","5"),this.PER_AR_NUMBER.set("\u0666","6"),this.PER_AR_NUMBER.set("\u0667","7"),this.PER_AR_NUMBER.set("\u0668","8"),this.PER_AR_NUMBER.set("\u0669","9")}addNumber(keyCode){const{decimal:decimal,precision:precision,inputMode:inputMode}=this.options;let keyChar=String.fromCharCode(keyCode);const isDecimalChar=keyChar===this.options.decimal;if(this.rawValue){let selectionStart=this.inputSelection.selectionStart,selectionEnd=this.inputSelection.selectionEnd;const rawValueStart=this.rawValue.substring(0,selectionStart);let rawValueEnd=this.rawValue.substring(selectionEnd,this.rawValue.length);const inDecimalPortion=-1!==rawValueStart.indexOf(decimal);inputMode===CurrencyMaskInputMode.NATURAL&&inDecimalPortion&&selectionStart===selectionEnd&&(rawValueEnd=rawValueEnd.substring(1));const newValue=rawValueStart+keyChar+rawValueEnd;let nextSelectionStart=selectionStart+1;if((isDecimalChar||keyChar===this.options.thousands)&&keyChar===rawValueEnd[0])nextSelectionStart++;else if(!this.SINGLE_DIGIT_REGEX.test(keyChar))return;this.rawValue=newValue,this.updateFieldValue(nextSelectionStart)}else{let selectionStart;this.rawValue=this.applyMask(!1,keyChar),inputMode===CurrencyMaskInputMode.NATURAL&&precision>0&&(selectionStart=this.rawValue.indexOf(decimal),isDecimalChar&&selectionStart++),this.updateFieldValue(selectionStart)}}applyMask(isNumber,rawValue,disablePadAndTrim=!1){let{allowNegative:allowNegative,decimal:decimal,precision:precision,prefix:prefix,suffix:suffix,thousands:thousands,min:min,max:max,inputMode:inputMode}=this.options,onlyNumbers=(rawValue=isNumber?new Number(rawValue).toFixed(precision):rawValue).replace(this.ONLY_NUMBERS_REGEX,"");if(!onlyNumbers&&rawValue!==decimal)return"";inputMode!==CurrencyMaskInputMode.NATURAL||isNumber||disablePadAndTrim||(onlyNumbers=(rawValue=this.padOrTrimPrecision(rawValue)).replace(this.ONLY_NUMBERS_REGEX,""));let integerPart=onlyNumbers.slice(0,onlyNumbers.length-precision).replace(/^\u0660*/g,"").replace(/^\u06F0*/g,"").replace(/^0*/g,"");""==integerPart&&(integerPart="0");let integerValue=parseInt(integerPart);integerPart=integerPart.replace(/\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g,thousands),thousands&&integerPart.startsWith(thousands)&&(integerPart=integerPart.substring(1));let newRawValue=integerPart,decimalPart=onlyNumbers.slice(onlyNumbers.length-precision),decimalValue=parseInt(decimalPart)||0,isNegative=rawValue.indexOf("-")>-1;max=this.isNullOrUndefined(max)||this.isNullOrUndefined(min)?max:Math.max(max,min);let newValue=integerValue+decimalValue/100;return newValue=isNegative?-newValue:newValue,!this.isNullOrUndefined(max)&&newValue>max?this.applyMask(!0,max+""):!this.isNullOrUndefined(min)&&newValue<min?this.applyMask(!0,min+""):(precision>0&&("0"==newRawValue&&decimalPart.length<precision?newRawValue+=decimal+"0".repeat(precision-1)+decimalPart:newRawValue+=decimal+decimalPart),(isNegative&&allowNegative&&!(0==newValue)?"-":"")+prefix+newRawValue+suffix)}padOrTrimPrecision(rawValue){let{decimal:decimal,precision:precision}=this.options,decimalIndex=rawValue.lastIndexOf(decimal);-1===decimalIndex&&(decimalIndex=rawValue.length,rawValue+=decimal);let decimalPortion=rawValue.substring(decimalIndex).replace(this.ONLY_NUMBERS_REGEX,"");const actualPrecision=decimalPortion.length;if(actualPrecision<precision)for(let i=actualPrecision;i<precision;i++)decimalPortion+="0";else actualPrecision>precision&&(decimalPortion=decimalPortion.substring(0,decimalPortion.length+precision-actualPrecision));return rawValue.substring(0,decimalIndex)+decimal+decimalPortion}clearMask(rawValue){if(this.isNullable()&&""===rawValue)return null;let value=(rawValue||"0").replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(value=value.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(value=value.replace(this.options.decimal,".")),this.PER_AR_NUMBER.forEach((val,key)=>{const re=new RegExp(key,"g");value=value.replace(re,val)}),parseFloat(value)}changeToNegative(){this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value&&(this.rawValue=this.applyMask(!1,"-"+this.rawValue))}changeToPositive(){this.rawValue=this.applyMask(!1,this.rawValue.replace("-",""))}removeNumber(keyCode){let{decimal:decimal,thousands:thousands,prefix:prefix,suffix:suffix,inputMode:inputMode}=this.options;if(this.isNullable()&&0==this.value)return void(this.rawValue=null);let selectionEnd=this.inputSelection.selectionEnd,selectionStart=this.inputSelection.selectionStart;const suffixStart=this.rawValue.length-suffix.length;if(selectionEnd=Math.min(suffixStart,Math.max(selectionEnd,prefix.length)),selectionStart=Math.min(suffixStart,Math.max(selectionStart,prefix.length)),selectionStart===selectionEnd&&this.inputSelection.selectionStart!==this.inputSelection.selectionEnd)return void this.updateFieldValue(selectionStart);let decimalIndex=this.rawValue.indexOf(decimal);-1===decimalIndex&&(decimalIndex=this.rawValue.length);let shiftSelection=0,insertChars="";const isCursorInDecimals=decimalIndex<selectionEnd,isCursorImmediatelyAfterDecimalPoint=decimalIndex+1===selectionEnd;if(selectionEnd===selectionStart)if(8==keyCode){if(selectionStart<=prefix.length)return;selectionStart--,this.rawValue.substr(selectionStart,1).match(/\d/)||selectionStart--,inputMode===CurrencyMaskInputMode.NATURAL&&isCursorInDecimals&&(shiftSelection=-1,isCursorImmediatelyAfterDecimalPoint&&this.value<10&&this.value>-10&&(insertChars+="0"))}else if(46==keyCode||63272==keyCode){if(selectionStart===suffixStart)return;selectionEnd++,this.rawValue.substr(selectionStart,1).match(/\d/)||(selectionStart++,selectionEnd++)}if(inputMode===CurrencyMaskInputMode.NATURAL&&selectionStart>decimalIndex){const replacedDecimalCount=selectionEnd-selectionStart;for(let i=0;i<replacedDecimalCount;i++)insertChars+="0"}let selectionFromEnd=this.rawValue.length-selectionEnd;this.rawValue=this.rawValue.substring(0,selectionStart)+insertChars+this.rawValue.substring(selectionEnd);this.rawValue.substr(prefix.length,1)===thousands&&(this.rawValue=this.rawValue.substring(0,prefix.length)+this.rawValue.substring(prefix.length+1),selectionFromEnd=Math.min(selectionFromEnd,this.rawValue.length-prefix.length)),this.updateFieldValue(this.rawValue.length-selectionFromEnd+shiftSelection,!0)}updateFieldValue(selectionStart,disablePadAndTrim=!1){let newRawValue=this.applyMask(!1,this.rawValue||"",disablePadAndTrim);selectionStart=null==selectionStart?this.rawValue.length:selectionStart,selectionStart=Math.max(this.options.prefix.length,Math.min(selectionStart,this.rawValue.length-this.options.suffix.length)),this.inputManager.updateValueAndCursor(newRawValue,this.rawValue.length,selectionStart)}updateOptions(options){let value=this.value;this.options=options,this.value=value}prefixLength(){return this.options.prefix.length}suffixLength(){return this.options.suffix.length}isNullable(){return this.options.nullable}get canInputMoreNumbers(){return this.inputManager.canInputMoreNumbers}get inputSelection(){return this.inputManager.inputSelection}get rawValue(){return this.inputManager.rawValue}set rawValue(value){this.inputManager.rawValue=value}get storedRawValue(){return this.inputManager.storedRawValue}get value(){return this.clearMask(this.rawValue)}set value(value){this.rawValue=this.applyMask(!0,""+value)}isNullOrUndefined(value){return null==value}}class InputHandler{constructor(htmlInputElement,options){this.inputService=new InputService(htmlInputElement,options)}handleCut(event){setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},0)}handleInput(event){let selectionStart=this.inputService.inputSelection.selectionStart,keyCode=this.inputService.rawValue.charCodeAt(selectionStart-1),rawValueLength=this.inputService.rawValue.length,storedRawValueLength=this.inputService.storedRawValue.length;if(1!=Math.abs(rawValueLength-storedRawValueLength))return this.inputService.updateFieldValue(selectionStart),void this.onModelChange(this.inputService.value);this.inputService.rawValue=this.inputService.storedRawValue,rawValueLength<storedRawValueLength&&this.timer(()=>{this.inputService.updateFieldValue(selectionStart+1),this.inputService.removeNumber(8),this.onModelChange(this.inputService.value)},0),rawValueLength>storedRawValueLength&&(this.inputService.updateFieldValue(selectionStart-1),this.handleKeypressImpl(keyCode))}handleKeydown(event){let keyCode=event.which||event.charCode||event.keyCode;8!=keyCode&&46!=keyCode&&63272!=keyCode||(event.preventDefault(),this.inputService.inputSelection.selectionStart<=this.inputService.prefixLength()&&this.inputService.inputSelection.selectionEnd>=this.inputService.rawValue.length-this.inputService.suffixLength()?this.clearValue():(this.inputService.removeNumber(keyCode),this.onModelChange(this.inputService.value)))}clearValue(){this.setValue(this.inputService.isNullable()?null:0),this.onModelChange(this.inputService.value)}handleKeypress(event){let keyCode=event.which||event.charCode||event.keyCode;event.preventDefault(),97===keyCode&&event.ctrlKey||this.handleKeypressImpl(keyCode)}handleKeypressImpl(keyCode){switch(keyCode){case void 0:case 9:case 13:return;case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:if(this.inputService.canInputMoreNumbers){Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)==this.inputService.rawValue.length&&this.setValue(null),this.inputService.addNumber(keyCode)}}this.onModelChange(this.inputService.value)}handlePaste(event){setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},1)}updateOptions(options){this.inputService.updateOptions(options)}getOnModelChange(){return this.onModelChange}setOnModelChange(callbackFunction){this.onModelChange=callbackFunction}getOnModelTouched(){return this.onModelTouched}setOnModelTouched(callbackFunction){this.onModelTouched=callbackFunction}setValue(value){this.inputService.value=value}timer(callback,delayMillis){setTimeout(callback,delayMillis)}}const CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_1__.JU,useExisting:(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Gpc)(()=>CurrencyMaskDirective),multi:!0};class CurrencyMaskDirective{constructor(currencyMaskConfig,elementRef,keyValueDiffers){this.currencyMaskConfig=currencyMaskConfig,this.elementRef=elementRef,this.keyValueDiffers=keyValueDiffers,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,allowZero:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:",",nullable:!1,inputMode:CurrencyMaskInputMode.FINANCIAL},currencyMaskConfig&&(this.optionsTemplate=currencyMaskConfig),this.keyValueDiffer=keyValueDiffers.find({}).create()}ngAfterViewInit(){this.elementRef.nativeElement.style.textAlign=this.options&&this.options.align?this.options.align:this.optionsTemplate.align}ngDoCheck(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))}ngOnInit(){this.inputHandler=new InputHandler(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))}handleBlur(event){this.inputHandler.getOnModelTouched().apply(event)}handleCut(event){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handleCut(event)}handleInput(event){this.isChromeAndroid()&&!this.isReadOnly()&&this.inputHandler.handleInput(event)}handleKeydown(event){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handleKeydown(event)}handleKeypress(event){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handleKeypress(event)}handlePaste(event){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handlePaste(event)}handleDrop(event){this.isChromeAndroid()||event.preventDefault()}isChromeAndroid(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)}isReadOnly(){return this.elementRef.nativeElement.hasAttribute("readonly")}registerOnChange(callbackFunction){this.inputHandler.setOnModelChange(callbackFunction)}registerOnTouched(callbackFunction){this.inputHandler.setOnModelTouched(callbackFunction)}setDisabledState(value){this.elementRef.nativeElement.disabled=value}writeValue(value){this.inputHandler.setValue(value)}}CurrencyMaskDirective.\u0275fac=function CurrencyMaskDirective_Factory(t){return new(t||CurrencyMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(CURRENCY_MASK_CONFIG,8),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SBq),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__.aQg))},CurrencyMaskDirective.\u0275dir=_angular_core__WEBPACK_IMPORTED_MODULE_0__.lG2({type:CurrencyMaskDirective,selectors:[["","currencyMask",""]],hostBindings:function CurrencyMaskDirective_HostBindings(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("blur",function CurrencyMaskDirective_blur_HostBindingHandler($event){return ctx.handleBlur($event)})("cut",function CurrencyMaskDirective_cut_HostBindingHandler($event){return ctx.handleCut($event)})("input",function CurrencyMaskDirective_input_HostBindingHandler($event){return ctx.handleInput($event)})("keydown",function CurrencyMaskDirective_keydown_HostBindingHandler($event){return ctx.handleKeydown($event)})("keypress",function CurrencyMaskDirective_keypress_HostBindingHandler($event){return ctx.handleKeypress($event)})("paste",function CurrencyMaskDirective_paste_HostBindingHandler($event){return ctx.handlePaste($event)})("drop",function CurrencyMaskDirective_drop_HostBindingHandler($event){return ctx.handleDrop($event)})},inputs:{options:"options"},features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__._Bn([CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR])]}),CurrencyMaskDirective.ctorParameters=()=>[{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.FiY},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.tBr,args:[CURRENCY_MASK_CONFIG]}]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.SBq},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.aQg}],CurrencyMaskDirective.ctorParameters=()=>[{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.FiY},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.tBr,args:[CURRENCY_MASK_CONFIG]}]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.SBq},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.aQg}],CurrencyMaskDirective.propDecorators={options:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.IIB}],handleBlur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.L6J,args:["blur",["$event"]]}],handleCut:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.L6J,args:["cut",["$event"]]}],handleInput:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.L6J,args:["input",["$event"]]}],handleKeydown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.L6J,args:["keydown",["$event"]]}],handleKeypress:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.L6J,args:["keypress",["$event"]]}],handlePaste:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.L6J,args:["paste",["$event"]]}],handleDrop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.L6J,args:["drop",["$event"]]}]};class NgxCurrencyModule{static forRoot(config){return{ngModule:NgxCurrencyModule,providers:[{provide:CURRENCY_MASK_CONFIG,useValue:config}]}}}NgxCurrencyModule.\u0275fac=function NgxCurrencyModule_Factory(t){return new(t||NgxCurrencyModule)},NgxCurrencyModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({type:NgxCurrencyModule}),NgxCurrencyModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({imports:[[_angular_common__WEBPACK_IMPORTED_MODULE_2__.ez,_angular_forms__WEBPACK_IMPORTED_MODULE_1__.u5]]})}};