(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0ep9":function(t,e,n){"use strict";n.r(e),n.d(e,"ProductModule",(function(){return G}));var i=n("ofXK"),o=n("bv9b"),c=n("XiUz"),r=n("znSr"),s=n("tyNb"),a=n("fXoL"),d=n("0sQr"),p=n("XhcP"),l=n("d3UM"),u=n("FKr1"),b=n("LVk3");function g(t,e){1&t&&a.Nb(0,"mat-progress-bar",8)}function h(t,e){if(1&t&&(a.Sb(0,"mat-option",9),a.Dc(1),a.Rb()),2&t){const t=e.$implicit;a.kc("value",t.id),a.Bb(1),a.Fc(" ",t.name," ")}}function m(t,e){if(1&t&&(a.Qb(0),a.Nb(1,"app-product",10),a.Pb()),2&t){const t=e.$implicit;a.Bb(1),a.kc("product",t)}}let f=(()=>{class t{constructor(t){this.productService=t}ngOnInit(){this.dataprovider(),this.index()}index(){this.loading+=1,this.productService.index().subscribe(t=>{this.products=t.data}).add(()=>this.loading-=1)}dataprovider(){this.loading+=1,this.productService.dataprovider().subscribe(t=>{this.categories=t.categories}).add(()=>this.loading-=1)}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(d.a))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-list"]],decls:10,vars:3,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["autosize","",1,"container"],["mode","side","opened","",1,"filters"],["placeholder","Categoria",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"content"],["fxLayout","row wrap",1,"products"],[4,"ngFor","ngForOf"],["mode","indeterminate",1,"progress"],[3,"value"],[1,"product",3,"product"]],template:function(t,e){1&t&&(a.Bc(0,g,1,0,"mat-progress-bar",0),a.Sb(1,"mat-drawer-container",1),a.Sb(2,"mat-drawer",2),a.Sb(3,"h1"),a.Dc(4,"Filtros"),a.Rb(),a.Sb(5,"mat-select",3),a.ac("change",(function(){return e.index()})),a.Bc(6,h,2,2,"mat-option",4),a.Rb(),a.Rb(),a.Sb(7,"div",5),a.Sb(8,"div",6),a.Bc(9,m,2,1,"ng-container",7),a.Rb(),a.Rb(),a.Rb()),2&t&&(a.kc("ngIf",e.loading),a.Bb(6),a.kc("ngForOf",e.categories),a.Bb(3),a.kc("ngForOf",e.products))},directives:[i.l,p.b,p.a,l.a,i.k,c.c,o.a,u.n,b.a],styles:[".container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{width:300px;height:100%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{min-height:100%}"]}),t})();var v=n("hZOA"),S=n("kyzu"),C=n("e3DF"),O=n("bTqV"),M=n("kmnG"),k=n("qFsG"),x=n("tmjD"),P=n("3Pt+"),R=n("CQ0i");function _(t,e){1&t&&a.Nb(0,"mat-progress-bar",26)}function y(t,e){1&t&&(a.Sb(0,"small",27),a.Dc(1,"A partir de"),a.Rb())}function w(t,e){if(1&t){const t=a.Tb();a.Sb(0,"button",31),a.ac("click",(function(){a.sc(t);const n=e.$implicit,i=a.ec().$implicit;return a.ec().selectOption(i,n)})),a.Dc(1),a.Rb()}if(2&t){const t=e.$implicit;a.Eb("selected",t.selected),a.Bb(1),a.Fc(" ",t.name," ")}}function F(t,e){if(1&t&&(a.Sb(0,"div",28),a.Sb(1,"small",29),a.Dc(2),a.Rb(),a.Sb(3,"div"),a.Bc(4,w,2,3,"button",30),a.Rb(),a.Rb()),2&t){const t=e.$implicit;a.Bb(2),a.Ec(t.name),a.Bb(2),a.kc("ngForOf",t.options)}}function B(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",32),a.Sb(1,"div",24),a.Dc(2,"Calcule o Frete"),a.Rb(),a.Sb(3,"div",33),a.Sb(4,"div",34),a.Sb(5,"mat-form-field",35),a.Sb(6,"mat-label"),a.Dc(7,"Informe seu CEP"),a.Rb(),a.Sb(8,"input",36),a.ac("ngModelChange",(function(e){return a.sc(t),a.ec().postalCode=e})),a.Rb(),a.Rb(),a.Sb(9,"button",37),a.ac("click",(function(){return a.sc(t),a.ec().shipment()})),a.Nb(10,"i",38),a.Dc(11," Calcular Frete "),a.Rb(),a.Rb(),a.Rb(),a.Rb()}if(2&t){const t=a.ec();a.Bb(8),a.kc("mask","00000-000")("ngModel",t.postalCode)}}function D(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",39),a.Sb(1,"div",24),a.Dc(2,"Calculo do Frete"),a.Rb(),a.Sb(3,"div",40),a.Nb(4,"i",41),a.Dc(5),a.fc(6,"price"),a.Rb(),a.Sb(7,"div",40),a.Nb(8,"i",38),a.Dc(9),a.Rb(),a.Sb(10,"div",40),a.Nb(11,"i",42),a.Dc(12," Ou retire gr\xe1tis a partir de amanh\xe3 em Santo Andr\xe9."),a.Rb(),a.Sb(13,"button",43),a.ac("click",(function(){return a.sc(t),a.ec().recalculate()})),a.Dc(14,"Recalcular frete"),a.Rb(),a.Rb()}if(2&t){const t=a.ec();a.Bb(5),a.Fc(" Frete a partir de ",a.gc(6,2,t.bestShipping.price),"."),a.Bb(4),a.Fc(" Entrega em at\xe9 ",t.bestShipping.time," dias \xfateis para sua regi\xe3o.")}}const N=[{path:"list",component:f},{path:"view/:id",component:(()=>{class t{constructor(t,e,n,i,o){this.productService=t,this.activatedRoute=e,this.checkoutService=n,this.router=i,this.alertService=o,this.loading=0,this.options=[]}ngOnInit(){this.id=this.activatedRoute.snapshot.params.id,this.shipping=this.checkoutService.shipping,this.postalCode=this.checkoutService.postalCode,this.show()}get price(){var t,e;if(this.options){let e=null===(t=this.product)||void 0===t?void 0:t.price;return this.options.forEach(t=>{e+=(null==t?void 0:t.type)?null==t?void 0:t.price:-(null==t?void 0:t.price)}),e}return null===(e=this.product)||void 0===e?void 0:e.price}show(){this.loading+=1,this.productService.show(this.id).subscribe(t=>{this.product=t}).add(()=>this.loading-=1)}addChart(){this.optionsNotSelected()?(this.product.selected_options=this.selectedOptions(),this.checkoutService.add(this.product),this.alertService.toast("Produto adicionado no carrinho")):this.alertService.alert("Selecione todas as op\xe7\xf5es do produto antes de adicionar ao carrinho.","Escolha todas as op\xe7\xf5es")}buyNow(){this.optionsNotSelected()?(this.product.selected_options=this.selectedOptions(),this.checkoutService.add(this.product),this.router.navigate(["checkout"])):this.alertService.alert("Selecione todas as op\xe7\xf5es do produto antes de comprar o produto.","Escolha todas as op\xe7\xf5es")}optionChanged(){this.shipment()}shipment(){this.loading>0||this.postalCode.length<8||(this.optionsNotSelected()?(this.product.selected_options=this.selectedOptions(),this.loading+=1,this.checkoutService.shipment(this.postalCode,[this.product]).subscribe(t=>{t=t.filter(t=>!t.error),this.shipping=t,this.checkoutService.postalCode=this.postalCode,this.checkoutService.shipping=this.shipping},t=>this.alertService.treatError(t)).add(()=>this.loading-=1)):this.alertService.alert("Escolha uma op\xe7\xe3o antes de calcular o frete.","Escolha todas as op\xe7\xf5es"))}get bestShipping(){let t=-1,e=-1;return this.shipping.forEach(n=>{(n.delivery_time<t||-1==t)&&(t=n.delivery_time),(+n.price<e||-1==e)&&(e=+n.price)}),{time:t,price:e}}optionValue(t){return this.product?this.product.price+(t.type?+t.price:-t.price):0}selectOption(t,e){t.options.forEach(t=>t.selected=!1),e.selected=!0,this.options=this.selectedOptions()}selectedOptions(){const t=[];return this.product.attributes.forEach(e=>{e.options.forEach(e=>{e.selected&&t.push(e)})}),t}optionsNotSelected(){var t,e;return!(null===(e=null===(t=this.product)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.some(t=>{var e;return!(null===(e=t.options)||void 0===e?void 0:e.some(t=>t.selected))}))}recalculate(){this.shipping=null,this.checkoutService.shipping=null}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(d.a),a.Mb(s.a),a.Mb(v.a),a.Mb(s.b),a.Mb(S.a))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-view"]],decls:39,vars:14,consts:[["class","progress","mode","indeterminate",4,"ngIf"],[1,"breadcrumb"],["fxLayout","row",1,"container"],[1,"mdi","mdi-arrow-right"],[1,"container","page"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutAlign","start start"],["fxFlex","none","ngClass.lt-sm","w100","fxFlex.gt-sm","70%","fxLayoutAlign","center start",1,"image"],["fxFlex.gt-sm","500px","ngClass.lt-sm","w100",3,"slides","width","height"],["ngClass.gt-sm","large","fxFlex.gt-xs","30%","fxFlex","100%",1,"product-info"],[1,"title-price"],[1,"name"],["class","muted",4,"ngIf"],[1,"price"],[1,"options"],["fxLayout","column","fxLayoutGap","20px",1,"attributes"],["class","margin-bottom",4,"ngFor","ngForOf"],["fxLayout","column","fxLayoutGap","15px",1,"buy"],["type","button","mat-stroked-button","","color","primary",3,"click"],[1,"mdi","mdi-cart"],["type","button","mat-flat-button","","color","accent",3,"click"],[1,"mdi","mdi-cart-check"],["class","shipping-calculate",4,"ngIf"],["class","shipping",4,"ngIf"],[1,"padding"],[1,"sub-title"],[3,"innerHTML"],["mode","indeterminate",1,"progress"],[1,"muted"],[1,"margin-bottom"],[1,"name","muted"],["mat-stroked-button","","color","accent","class","margin-right",3,"selected","click",4,"ngFor","ngForOf"],["mat-stroked-button","","color","accent",1,"margin-right",3,"click"],[1,"shipping-calculate"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutAlign.gt-sm","space-between start",1,"margin-horizontal","margin-bottom"],["ngClass.gt-sm","margin-right","fxLayout","column"],["appearance","outline",1,"no-padding","no-margin"],["placeholder","00000-000","matInput","",1,"no-margin","no-padding",3,"mask","ngModel","ngModelChange"],["type","button","mat-stroked-button","","color","primary",1,"margin-top",3,"click"],[1,"mdi","mdi-truck"],[1,"shipping"],["fxLayoutAlign","start center"],[1,"mdi","mdi-printer"],[1,"mdi","mdi-store"],["fxFill","","mat-stroked-button","","color","accent",1,"margin-top",3,"click"]],template:function(t,e){1&t&&(a.Bc(0,_,1,0,"mat-progress-bar",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"div"),a.Dc(4,"Home"),a.Rb(),a.Nb(5,"i",3),a.Sb(6,"div"),a.Dc(7,"Produtos"),a.Rb(),a.Nb(8,"i",3),a.Sb(9,"div"),a.Dc(10),a.Rb(),a.Rb(),a.Rb(),a.Sb(11,"div",4),a.Sb(12,"div",5),a.Sb(13,"div",6),a.Nb(14,"app-carousel",7),a.Rb(),a.Sb(15,"div",8),a.Sb(16,"div",9),a.Sb(17,"h1",10),a.Dc(18),a.Rb(),a.Bc(19,y,2,0,"small",11),a.Sb(20,"div",12),a.Dc(21),a.fc(22,"price"),a.Rb(),a.Rb(),a.Sb(23,"div",13),a.Sb(24,"div",14),a.Bc(25,F,5,2,"div",15),a.Rb(),a.Rb(),a.Sb(26,"div",16),a.Sb(27,"button",17),a.ac("click",(function(){return e.addChart()})),a.Nb(28,"i",18),a.Dc(29," Adicionar ao Carrinho "),a.Rb(),a.Sb(30,"button",19),a.ac("click",(function(){return e.buyNow()})),a.Nb(31,"i",20),a.Dc(32," Comprar agora "),a.Rb(),a.Rb(),a.Bc(33,B,12,2,"div",21),a.Bc(34,D,15,4,"div",22),a.Rb(),a.Rb(),a.Sb(35,"div",23),a.Sb(36,"div",24),a.Dc(37,"Descri\xe7\xe3o do Produto"),a.Rb(),a.Nb(38,"div",25),a.Rb(),a.Rb()),2&t&&(a.kc("ngIf",e.loading),a.Bb(10),a.Ec(null==e.product?null:e.product.name),a.Bb(4),a.kc("slides",null==e.product?null:e.product.files)("width",500)("height",700),a.Bb(4),a.Ec(null==e.product?null:e.product.name),a.Bb(1),a.kc("ngIf",!e.optionsNotSelected()),a.Bb(2),a.Fc(" ",a.gc(22,12,e.price)," "),a.Bb(4),a.kc("ngForOf",null==e.product?null:e.product.attributes),a.Bb(8),a.kc("ngIf",(null==e.shipping?null:e.shipping.length)<=0),a.Bb(1),a.kc("ngIf",(null==e.shipping?null:e.shipping.length)>0),a.Bb(4),a.kc("innerHTML",null==e.product?null:e.product.description,a.tc))},directives:[i.l,c.c,c.b,c.a,r.a,C.a,c.d,i.k,O.a,o.a,M.c,M.f,k.b,x.a,P.c,P.o,P.r,c.e],pipes:[R.a],styles:["[_nghost-%COMP%]     .mat-form-field-wrapper{margin:0!important;padding:0}.page[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;margin-top:10px}.page[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{background:#dcdfe6}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]{padding-top:15px;padding-right:15px;margin-left:15px;display:flex;flex-flow:column;border-right:1px solid #ededed;width:100%}.page[_ngcontent-%COMP%]   .product-info.large[_ngcontent-%COMP%]{max-width:350px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%], .page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .title-price[_ngcontent-%COMP%]{margin-bottom:30px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .attributes[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{background:#f65611;border:#f65611;color:#fff}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:30px;font-weight:700}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping-price[_ngcontent-%COMP%]{font-weight:700}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping[_ngcontent-%COMP%]{margin-top:30px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#343434}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#0ba8a8;margin-right:15px}"]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[s.e.forChild(N)],s.e]}),t})();var E=n("N47z"),I=n("zg+8"),j=n("1jcm"),z=n("QibW"),A=n("hyGo");let G=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[L,i.c,o.b,c.f,p.f,O.b,E.a,l.b,I.a,k.c,x.b,P.k,j.a,z.c,r.c,A.a]]}),t})()},"1jcm":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("GU7r"),o=n("fXoL"),c=n("FKr1");n("8LU1"),n("3Pt+"),n("R1ws"),n("u47x");let r=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)}}),t})(),s=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[r,c.t,c.j,i.c],r,c.j]}),t})()}}]);