exports.id=530,exports.ids=[530],exports.modules={6530:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProductModule:()=>ProductModule});var common=__webpack_require__(2057),progress_bar=__webpack_require__(3985),flex=__webpack_require__(2257),extended=__webpack_require__(8743),router=__webpack_require__(2636),core=__webpack_require__(4788),product_service=__webpack_require__(4493),sidenav=__webpack_require__(3050),fesm2015_select=__webpack_require__(1260),fesm2015_core=__webpack_require__(7935),product_component=__webpack_require__(7470);function ListComponent_mat_progress_bar_0_Template(rf,ctx){1&rf&&core._UZ(0,"mat-progress-bar",8)}function ListComponent_mat_option_6_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"mat-option",9),core._uU(1),core.qZA()),2&rf){const category_r3=ctx.$implicit;core.Q6J("value",category_r3.id),core.xp6(1),core.hij(" ",category_r3.name," ")}}function ListComponent_ng_container_9_Template(rf,ctx){if(1&rf&&(core.ynx(0),core._UZ(1,"app-product",10),core.BQk()),2&rf){const product_r4=ctx.$implicit;core.xp6(1),core.Q6J("product",product_r4)}}class ListComponent{constructor(productService){this.productService=productService}ngOnInit(){this.dataprovider(),this.index()}index(){this.loading+=1,this.productService.index().subscribe(response=>{this.products=response.data}).add(()=>this.loading-=1)}dataprovider(){this.loading+=1,this.productService.dataprovider().subscribe(response=>{this.categories=response.categories}).add(()=>this.loading-=1)}}ListComponent.\u0275fac=function ListComponent_Factory(t){return new(t||ListComponent)(core.Y36(product_service.M))},ListComponent.\u0275cmp=core.Xpm({type:ListComponent,selectors:[["app-list"]],decls:10,vars:3,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["autosize","",1,"container"],["mode","side","opened","",1,"filters"],["placeholder","Categoria",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"content"],["fxLayout","row wrap",1,"products"],[4,"ngFor","ngForOf"],["mode","indeterminate",1,"progress"],[3,"value"],[1,"product",3,"product"]],template:function ListComponent_Template(rf,ctx){1&rf&&(core.YNc(0,ListComponent_mat_progress_bar_0_Template,1,0,"mat-progress-bar",0),core.TgZ(1,"mat-drawer-container",1),core.TgZ(2,"mat-drawer",2),core.TgZ(3,"h1"),core._uU(4,"Filtros"),core.qZA(),core.TgZ(5,"mat-select",3),core.NdJ("change",function ListComponent_Template_mat_select_change_5_listener(){return ctx.index()}),core.YNc(6,ListComponent_mat_option_6_Template,2,2,"mat-option",4),core.qZA(),core.qZA(),core.TgZ(7,"div",5),core.TgZ(8,"div",6),core.YNc(9,ListComponent_ng_container_9_Template,2,1,"ng-container",7),core.qZA(),core.qZA(),core.qZA()),2&rf&&(core.Q6J("ngIf",ctx.loading),core.xp6(6),core.Q6J("ngForOf",ctx.categories),core.xp6(3),core.Q6J("ngForOf",ctx.products))},directives:[common.O5,sidenav.kh,sidenav.jA,fesm2015_select.gD,common.sg,flex.xw,progress_bar.pW,fesm2015_core.ey,product_component.F],styles:[".container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{width:300px;height:100%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{min-height:100%}"]});var checkout_service=__webpack_require__(6239),alert_service=__webpack_require__(1418),platform_browser=__webpack_require__(1211),ngx_google_analytics=__webpack_require__(5955),icon=__webpack_require__(9356);class NgxJsonLdComponent{constructor(sanitizer){this.sanitizer=sanitizer}ngOnChanges(changes){this.jsonLD=this.getSafeHTML(changes.json.currentValue)}getSafeHTML(value){const html=`<script type="application/ld+json">${value?JSON.stringify(value,null,2).replace(/<\/script>/g,"<\\/script>"):""}<\/script>`;return this.sanitizer.bypassSecurityTrustHtml(html)}}NgxJsonLdComponent.\u0275fac=function NgxJsonLdComponent_Factory(t){return new(t||NgxJsonLdComponent)(core.Y36(platform_browser.H7))},NgxJsonLdComponent.\u0275cmp=core.Xpm({type:NgxJsonLdComponent,selectors:[["ngx-json-ld"]],hostVars:1,hostBindings:function NgxJsonLdComponent_HostBindings(rf,ctx){2&rf&&core.Ikx("innerHTML",ctx.jsonLD,core.oJD)},inputs:{json:"json"},features:[core.TTD],decls:0,vars:0,template:function NgxJsonLdComponent_Template(rf,ctx){},encapsulation:2}),NgxJsonLdComponent.ctorParameters=()=>[{type:platform_browser.H7}],NgxJsonLdComponent.propDecorators={json:[{type:core.IIB}],jsonLD:[{type:core.pfw,args:["innerHTML"]}]};class NgxJsonLdModule{}NgxJsonLdModule.\u0275fac=function NgxJsonLdModule_Factory(t){return new(t||NgxJsonLdModule)},NgxJsonLdModule.\u0275mod=core.oAB({type:NgxJsonLdModule}),NgxJsonLdModule.\u0275inj=core.cJS({imports:[[common.ez]]}),NgxJsonLdModule.ctorParameters=()=>[];var carousel_component=__webpack_require__(257),fesm2015_button=__webpack_require__(2895),form_field=__webpack_require__(6833),input=__webpack_require__(6113),ngx_mask=__webpack_require__(6238),fesm2015_forms=__webpack_require__(4751),product_carousel_component=__webpack_require__(8486),price_pipe=__webpack_require__(7424);function ViewComponent_mat_progress_bar_0_Template(rf,ctx){1&rf&&core._UZ(0,"mat-progress-bar",28)}function ViewComponent_small_20_Template(rf,ctx){1&rf&&(core.TgZ(0,"small",29),core._uU(1,"A partir de"),core.qZA())}function ViewComponent_div_26_button_4_Template(rf,ctx){if(1&rf){const _r11=core.EpF();core.TgZ(0,"button",33),core.NdJ("click",function ViewComponent_div_26_button_4_Template_button_click_0_listener(){const option_r8=core.CHM(_r11).$implicit,attribute_r6=core.oxw().$implicit;return core.oxw().selectOption(attribute_r6,option_r8)}),core._uU(1),core.qZA()}if(2&rf){const option_r8=ctx.$implicit;core.ekj("selected",option_r8.selected),core.xp6(1),core.hij(" ",option_r8.name," ")}}function ViewComponent_div_26_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",30),core.TgZ(1,"small",31),core._uU(2),core.qZA(),core.TgZ(3,"div"),core.YNc(4,ViewComponent_div_26_button_4_Template,2,3,"button",32),core.qZA(),core.qZA()),2&rf){const attribute_r6=ctx.$implicit;core.xp6(2),core.Oqu(attribute_r6.name),core.xp6(2),core.Q6J("ngForOf",attribute_r6.options)}}function ViewComponent_div_34_Template(rf,ctx){if(1&rf){const _r13=core.EpF();core.TgZ(0,"div",34),core.TgZ(1,"div",25),core._uU(2,"Calcule o Frete"),core.qZA(),core.TgZ(3,"div",35),core.TgZ(4,"div",36),core.TgZ(5,"mat-form-field",37),core.TgZ(6,"mat-label"),core._uU(7,"Informe seu CEP"),core.qZA(),core.TgZ(8,"input",38),core.NdJ("ngModelChange",function ViewComponent_div_34_Template_input_ngModelChange_8_listener($event){core.CHM(_r13);return core.oxw().postalCode=$event}),core.qZA(),core.qZA(),core.TgZ(9,"button",39),core.NdJ("click",function ViewComponent_div_34_Template_button_click_9_listener(){core.CHM(_r13);return core.oxw().shipment()}),core._UZ(10,"mat-icon",40),core._uU(11," Calcular Frete "),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r3=core.oxw();core.xp6(8),core.Q6J("mask","00000-000")("ngModel",ctx_r3.postalCode)}}function ViewComponent_div_35_Template(rf,ctx){if(1&rf){const _r16=core.EpF();core.TgZ(0,"div",41),core.TgZ(1,"div",25),core._uU(2,"Calculo do Frete"),core.qZA(),core.TgZ(3,"div",42),core._UZ(4,"mat-icon",43),core._uU(5),core.ALo(6,"price"),core.qZA(),core.TgZ(7,"div",42),core._UZ(8,"mat-icon",44),core._uU(9),core.qZA(),core.TgZ(10,"div",42),core._UZ(11,"mat-icon",45),core._uU(12," Ou retire gr\xe1tis a partir de amanh\xe3 em Santo Andr\xe9."),core.qZA(),core.TgZ(13,"button",46),core.NdJ("click",function ViewComponent_div_35_Template_button_click_13_listener(){core.CHM(_r16);return core.oxw().recalculate()}),core._uU(14,"Recalcular frete"),core.qZA(),core.qZA()}if(2&rf){const ctx_r4=core.oxw();core.xp6(5),core.hij(" Frete a partir de ",core.lcZ(6,2,ctx_r4.bestShipping.price),"."),core.xp6(4),core.hij(" Entrega em at\xe9 ",ctx_r4.bestShipping.time," dias \xfateis para sua regi\xe3o.")}}function ViewComponent_ng_container_40_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.TgZ(1,"div",25),core._uU(2,"Produtos Relacionados"),core.qZA(),core._UZ(3,"app-product-carousel",47),core.BQk()),2&rf){const ctx_r5=core.oxw();core.xp6(3),core.Q6J("category",ctx_r5.product.categories[0].slug)}}class ViewComponent{constructor(productService,activatedRoute,checkoutService,router,alertService,titleService,metaService,analyticsService){this.productService=productService,this.activatedRoute=activatedRoute,this.checkoutService=checkoutService,this.router=router,this.alertService=alertService,this.titleService=titleService,this.metaService=metaService,this.analyticsService=analyticsService,this.loading=0,this.options=[],this.seoSchema={}}ngOnInit(){this.id=this.activatedRoute.snapshot.params.id,this.shipping=this.checkoutService.shipping,this.postalCode=this.checkoutService.postalCode,this.show()}get price(){var _a,_b;if(this.options){let price=null===(_a=this.product)||void 0===_a?void 0:_a.price;return this.options.forEach(option=>{price+=(null==option?void 0:option.type)?null==option?void 0:option.price:-(null==option?void 0:option.price)}),price}return null===(_b=this.product)||void 0===_b?void 0:_b.price}show(){this.loading+=1,this.productService.show(this.id).subscribe(response=>{var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,_u,_v,_w;this.product=response,this.titleService.setTitle((null===(_a=this.product)||void 0===_a?void 0:_a.meta_title)?null===(_b=this.product)||void 0===_b?void 0:_b.meta_title:null===(_c=this.product)||void 0===_c?void 0:_c.name),this.metaService.addTags([{name:"description",content:(null===(_d=this.product)||void 0===_d?void 0:_d.meta_description)?null===(_e=this.product)||void 0===_e?void 0:_e.meta_description:null===(_f=this.product)||void 0===_f?void 0:_f.description},{name:"keywords",content:(null===(_g=this.product)||void 0===_g?void 0:_g.meta_description)?null===(_h=this.product)||void 0===_h?void 0:_h.meta_description:null===(_j=this.product)||void 0===_j?void 0:_j.description},{name:"image",content:(null===(_l=null===(_k=this.product)||void 0===_k?void 0:_k.files)||void 0===_l?void 0:_l.length)>0?null===(_m=this.product)||void 0===_m?void 0:_m.files[0].url:""}]),this.seoSchema={"@context":"https://schema.org/","@type":"Product",name:(null===(_o=this.product)||void 0===_o?void 0:_o.meta_title)?null===(_p=this.product)||void 0===_p?void 0:_p.meta_title:null===(_q=this.product)||void 0===_q?void 0:_q.name,image:[null===(_r=this.product)||void 0===_r?void 0:_r.files[0].url],description:(null===(_s=this.product)||void 0===_s?void 0:_s.meta_description)?null===(_t=this.product)||void 0===_t?void 0:_t.meta_description:null===(_u=this.product)||void 0===_u?void 0:_u.description,sku:null===(_v=this.product)||void 0===_v?void 0:_v.sku,brand:{"@type":"Brand",name:"Ana Raquel Ilustra\xe7\xf5es"},offers:{"@type":"Offer",url:this.product.url,priceCurrency:"BRL",price:null===(_w=this.product)||void 0===_w?void 0:_w.price,priceValidUntil:"2022-11-20",itemCondition:"https://schema.org/NewCondition",availability:"https://schema.org/InStock"}}}).add(()=>this.loading-=1)}addChart(){this.analyticsService.event("add_to_cart","product_view","Adicionar ao Carrinho"),this.optionsNotSelected()?(this.product.selected_options=this.selectedOptions(),this.checkoutService.add(this.product),this.alertService.toast("Produto adicionado no carrinho")):this.alertService.alert("Selecione todas as op\xe7\xf5es do produto antes de adicionar ao carrinho.","Escolha todas as op\xe7\xf5es")}buyNow(){this.analyticsService.event("purchase","product_view","Comprar produto"),this.optionsNotSelected()?(this.product.selected_options=this.selectedOptions(),this.checkoutService.add(this.product),this.router.navigate(["checkout"])):this.alertService.alert("Selecione todas as op\xe7\xf5es do produto antes de comprar o produto.","Escolha todas as op\xe7\xf5es")}optionChanged(){this.shipment()}shipment(){this.analyticsService.event("shipment","product_view","C\xe1lculo do Frete"),this.loading>0||this.postalCode.length<8||(this.optionsNotSelected()?(this.product.selected_options=this.selectedOptions(),this.loading+=1,this.checkoutService.shipment(this.postalCode,[this.product]).subscribe(response=>{this.shipping=null==response?void 0:response.shippings.filter(shipping=>!shipping.error),this.checkoutService.postalCode=this.postalCode,this.checkoutService.shipping=this.shipping,this.checkoutService.discounts=response.discounts},error=>this.alertService.treatError(error)).add(()=>this.loading-=1)):this.alertService.alert("Escolha uma op\xe7\xe3o antes de calcular o frete.","Escolha todas as op\xe7\xf5es"))}get bestShipping(){let time=-1,price=-1;return this.shipping.forEach(shipping=>{(shipping.delivery_time<time||-1==time)&&(time=shipping.delivery_time),(+shipping.price<price||-1==price)&&(price=+shipping.price)}),{time:time,price:price}}optionValue(option){return this.product?this.product.price+(option.type?+option.price:-option.price):0}selectOption(attribute,option){this.analyticsService.event("select_option","product_view","Op\xe7\xe3o do Produto Selecionada"),attribute.options.forEach(item=>item.selected=!1),option.selected=!0,this.options=this.selectedOptions()}selectedOptions(){const options=[];return this.product.attributes.forEach(attribute=>{attribute.options.forEach(option=>{option.selected&&options.push(option)})}),options}optionsNotSelected(){var _a,_b;return!(null===(_b=null===(_a=this.product)||void 0===_a?void 0:_a.attributes)||void 0===_b?void 0:_b.some(attribute=>{var _a;return!(null===(_a=attribute.options)||void 0===_a?void 0:_a.some(option=>option.selected))}))}recalculate(){this.shipping=null,this.checkoutService.shipping=null}}ViewComponent.\u0275fac=function ViewComponent_Factory(t){return new(t||ViewComponent)(core.Y36(product_service.M),core.Y36(router.gz),core.Y36(checkout_service.Z),core.Y36(router.F0),core.Y36(alert_service.c),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(ngx_google_analytics.$r))},ViewComponent.\u0275cmp=core.Xpm({type:ViewComponent,selectors:[["app-view"]],decls:41,vars:16,consts:[["class","progress","mode","indeterminate",4,"ngIf"],[1,"breadcrumb"],["fxLayout","row",1,"container"],["svgIcon","chevron-right"],[1,"container","page"],[3,"json"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutAlign","start start"],["fxFlex","none","ngClass.lt-sm","w100","fxFlex.gt-sm","70%","fxLayoutAlign","center start",1,"image"],["fxFlex.gt-sm","500px","ngClass.lt-sm","w100",3,"slides","width","height"],["ngClass.gt-sm","large","fxFlex.gt-xs","30%","fxFlex","100%",1,"product-info"],[1,"title-price"],[1,"name"],["class","muted",4,"ngIf"],[1,"price"],[1,"options"],["fxLayout","column","fxLayoutGap","20px",1,"attributes"],["class","margin-bottom",4,"ngFor","ngForOf"],["fxLayout","column","fxLayoutGap","15px",1,"buy"],["type","button","mat-stroked-button","","color","primary",1,"large-button",3,"click"],["svgIcon","cart"],["type","button","mat-flat-button","","color","accent",1,"large-button",3,"click"],["svgIcon","cart-check"],["class","shipping-calculate",4,"ngIf"],["class","shipping",4,"ngIf"],[1,"padding"],[1,"sub-title"],[3,"innerHTML"],[4,"ngIf"],["mode","indeterminate",1,"progress"],[1,"muted"],[1,"margin-bottom"],[1,"name","muted"],["mat-stroked-button","","color","accent","class","margin-right",3,"selected","click",4,"ngFor","ngForOf"],["mat-stroked-button","","color","accent",1,"margin-right",3,"click"],[1,"shipping-calculate"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutAlign.gt-sm","space-between start",1,"margin-horizontal","margin-bottom"],["ngClass.gt-sm","margin-right","fxLayout","column"],["appearance","outline",1,"no-padding","no-margin"],["placeholder","00000-000","matInput","",1,"no-margin","no-padding",3,"mask","ngModel","ngModelChange"],["type","button","mat-stroked-button","","color","primary",1,"margin-top",3,"click"],["svgIcon","truck"],[1,"shipping"],["fxLayoutAlign","start center"],["color","accent","svgIcon","truck",1,"margin-right"],["color","accent","svgIcon","truck-fast",1,"margin-right"],["color","accent","svgIcon","store",1,"margin-right"],["fxFill","","mat-stroked-button","","color","accent",1,"margin-top",3,"click"],[3,"category"]],template:function ViewComponent_Template(rf,ctx){1&rf&&(core.YNc(0,ViewComponent_mat_progress_bar_0_Template,1,0,"mat-progress-bar",0),core.TgZ(1,"div",1),core.TgZ(2,"div",2),core.TgZ(3,"div"),core._uU(4,"Home"),core.qZA(),core._UZ(5,"mat-icon",3),core.TgZ(6,"div"),core._uU(7,"Produtos"),core.qZA(),core._UZ(8,"mat-icon",3),core.TgZ(9,"div"),core._uU(10),core.qZA(),core.qZA(),core.qZA(),core.TgZ(11,"div",4),core._UZ(12,"ngx-json-ld",5),core.TgZ(13,"div",6),core.TgZ(14,"div",7),core._UZ(15,"app-carousel",8),core.qZA(),core.TgZ(16,"div",9),core.TgZ(17,"div",10),core.TgZ(18,"h1",11),core._uU(19),core.qZA(),core.YNc(20,ViewComponent_small_20_Template,2,0,"small",12),core.TgZ(21,"div",13),core._uU(22),core.ALo(23,"price"),core.qZA(),core.qZA(),core.TgZ(24,"div",14),core.TgZ(25,"div",15),core.YNc(26,ViewComponent_div_26_Template,5,2,"div",16),core.qZA(),core.qZA(),core.TgZ(27,"div",17),core.TgZ(28,"button",18),core.NdJ("click",function ViewComponent_Template_button_click_28_listener(){return ctx.addChart()}),core._UZ(29,"mat-icon",19),core._uU(30," Adicionar ao Carrinho "),core.qZA(),core.TgZ(31,"button",20),core.NdJ("click",function ViewComponent_Template_button_click_31_listener(){return ctx.buyNow()}),core._UZ(32,"mat-icon",21),core._uU(33," Comprar agora "),core.qZA(),core.qZA(),core.YNc(34,ViewComponent_div_34_Template,12,2,"div",22),core.YNc(35,ViewComponent_div_35_Template,15,4,"div",23),core.qZA(),core.qZA(),core.TgZ(36,"div",24),core.TgZ(37,"div",25),core._uU(38,"Descri\xe7\xe3o do Produto"),core.qZA(),core._UZ(39,"div",26),core.YNc(40,ViewComponent_ng_container_40_Template,4,1,"ng-container",27),core.qZA(),core.qZA()),2&rf&&(core.Q6J("ngIf",ctx.loading),core.xp6(10),core.Oqu(null==ctx.product?null:ctx.product.name),core.xp6(2),core.Q6J("json",ctx.seoSchema),core.xp6(3),core.Q6J("slides",null==ctx.product?null:ctx.product.files)("width",500)("height",700),core.xp6(4),core.Oqu(null==ctx.product?null:ctx.product.name),core.xp6(1),core.Q6J("ngIf",!ctx.optionsNotSelected()),core.xp6(2),core.hij(" ",core.lcZ(23,14,ctx.price)," "),core.xp6(4),core.Q6J("ngForOf",null==ctx.product?null:ctx.product.attributes),core.xp6(8),core.Q6J("ngIf",(null==ctx.shipping?null:ctx.shipping.length)<=0),core.xp6(1),core.Q6J("ngIf",(null==ctx.shipping?null:ctx.shipping.length)>0),core.xp6(4),core.Q6J("innerHTML",null==ctx.product?null:ctx.product.description,core.oJD),core.xp6(1),core.Q6J("ngIf",(null==ctx.product||null==ctx.product.categories?null:ctx.product.categories.length)>0))},directives:[common.O5,flex.xw,icon.Hw,NgxJsonLdComponent,flex.Wh,flex.yH,extended.oO,carousel_component.F,flex.SQ,common.sg,fesm2015_button.lW,progress_bar.pW,form_field.KE,form_field.hX,input.Nt,ngx_mask.hx,fesm2015_forms.Fj,fesm2015_forms.JJ,fesm2015_forms.On,flex.s9,product_carousel_component.U],pipes:[price_pipe.d],styles:["[_nghost-%COMP%]     .mat-form-field-wrapper{margin:0!important;padding:0}.page[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;margin-top:10px}.page[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{background:#dcdfe6}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]{padding-top:15px;padding-right:15px;margin-left:15px;display:flex;flex-flow:column;border-right:1px solid #ededed;width:100%}.page[_ngcontent-%COMP%]   .product-info.large[_ngcontent-%COMP%]{max-width:350px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%], .page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .title-price[_ngcontent-%COMP%]{margin-bottom:30px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .attributes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:12px;padding:0 10px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .attributes[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{background:#f65611;border:#f65611;color:#fff}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:30px;font-weight:700}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping-price[_ngcontent-%COMP%]{font-weight:700}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping[_ngcontent-%COMP%], .page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping-calculate[_ngcontent-%COMP%]{margin-top:30px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#343434}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#0ba8a8;margin-right:15px}"]});const routes=[{path:"list",component:ListComponent},{path:"view/:id/:name",component:ViewComponent}];class ProductRoutingModule{}ProductRoutingModule.\u0275fac=function ProductRoutingModule_Factory(t){return new(t||ProductRoutingModule)},ProductRoutingModule.\u0275mod=core.oAB({type:ProductRoutingModule}),ProductRoutingModule.\u0275inj=core.cJS({imports:[[router.Bz.forChild(routes)],router.Bz]});var product_module=__webpack_require__(3238),carousel_module=__webpack_require__(9726),slide_toggle=__webpack_require__(3624),fesm2015_radio=__webpack_require__(2742),price_module=__webpack_require__(1885),product_carousel_module=__webpack_require__(9440);class ProductModule{}ProductModule.\u0275fac=function ProductModule_Factory(t){return new(t||ProductModule)},ProductModule.\u0275mod=core.oAB({type:ProductModule}),ProductModule.\u0275inj=core.cJS({imports:[[ProductRoutingModule,common.ez,progress_bar.Cv,flex.ae,sidenav.SJ,fesm2015_button.ot,product_module.s,fesm2015_select.LD,carousel_module.b,input.c,ngx_mask.yI,fesm2015_forms.u5,slide_toggle.rP,fesm2015_radio.Fk,extended.aT,price_module.n,product_carousel_module.p,NgxJsonLdModule,icon.Ps]]})}};