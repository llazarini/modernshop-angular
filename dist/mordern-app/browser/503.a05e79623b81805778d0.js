(self.webpackChunkmodernshop_app=self.webpackChunkmodernshop_app||[]).push([[503],{9503:(t,i,e)=>{"use strict";e.r(i),e.d(i,{ProductModule:()=>W});var o=e(1511),n=e(5994),r=e(3722),c=e(377),s=e(3548),a=e(1572),p=e(7949),d=e(5425),l=e(4786),u=e(1522),g=e(4055);function h(t,i){1&t&&a._UZ(0,"mat-progress-bar",8)}function m(t,i){if(1&t&&(a.TgZ(0,"mat-option",9),a._uU(1),a.qZA()),2&t){const t=i.$implicit;a.Q6J("value",t.id),a.xp6(1),a.hij(" ",t.name," ")}}function f(t,i){if(1&t&&(a.ynx(0),a._UZ(1,"app-product",10),a.BQk()),2&t){const t=i.$implicit;a.xp6(1),a.Q6J("product",t)}}let v=(()=>{class t{constructor(t){this.productService=t}ngOnInit(){this.dataprovider(),this.index()}index(){this.loading+=1,this.productService.index().subscribe(t=>{this.products=t.data}).add(()=>this.loading-=1)}dataprovider(){this.loading+=1,this.productService.dataprovider().subscribe(t=>{this.categories=t.categories}).add(()=>this.loading-=1)}}return t.\u0275fac=function(i){return new(i||t)(a.Y36(p.M))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-list"]],decls:10,vars:3,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["autosize","",1,"container"],["mode","side","opened","",1,"filters"],["placeholder","Categoria",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"content"],["fxLayout","row wrap",1,"products"],[4,"ngFor","ngForOf"],["mode","indeterminate",1,"progress"],[3,"value"],[1,"product",3,"product"]],template:function(t,i){1&t&&(a.YNc(0,h,1,0,"mat-progress-bar",0),a.TgZ(1,"mat-drawer-container",1),a.TgZ(2,"mat-drawer",2),a.TgZ(3,"h1"),a._uU(4,"Filtros"),a.qZA(),a.TgZ(5,"mat-select",3),a.NdJ("change",function(){return i.index()}),a.YNc(6,m,2,2,"mat-option",4),a.qZA(),a.qZA(),a.TgZ(7,"div",5),a.TgZ(8,"div",6),a.YNc(9,f,2,1,"ng-container",7),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.Q6J("ngIf",i.loading),a.xp6(6),a.Q6J("ngForOf",i.categories),a.xp6(3),a.Q6J("ngForOf",i.products))},directives:[o.O5,d.kh,d.jA,l.gD,o.sg,r.xw,n.pW,u.ey,g.F],styles:[".container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{width:300px;height:100%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{min-height:100%}"]}),t})();var Z=e(2774),x=e(8394),_=e(269);let C=(()=>{class t{constructor(t){this.sanitizer=t}ngOnChanges(t){this.jsonLD=this.getSafeHTML(t.json.currentValue)}getSafeHTML(t){const i=t?JSON.stringify(t,null,2).replace(/<\/script>/g,"<\\/script>"):"";return this.sanitizer.bypassSecurityTrustHtml(`<script type="application/ld+json">${i}<\/script>`)}}return t.\u0275fac=function(i){return new(i||t)(a.Y36(_.H7))},t.\u0275cmp=a.Xpm({type:t,selectors:[["ngx-json-ld"]],hostVars:1,hostBindings:function(t,i){2&t&&a.Ikx("innerHTML",i.jsonLD,a.oJD)},inputs:{json:"json"},features:[a.TTD],decls:0,vars:0,template:function(t,i){},encapsulation:2}),t})(),O=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez]]}),t})();var b=e(2904),M=e(5980),y=e(6283),A=e(6756),P=e(3920),T=e(6073),w=e(7806);function q(t,i){1&t&&a._UZ(0,"mat-progress-spinner",4)}function S(t,i){if(1&t&&(a.ynx(0),a._UZ(1,"app-product",5),a.BQk()),2&t){const t=i.$implicit;a.xp6(1),a.Q6J("product",t)}}let k=(()=>{class t{constructor(t){this.productService=t}ngOnInit(){this.getAll()}getAll(){this.loading+=1,this.productService.category(this.category).subscribe(t=>{this.products=t.data}).add(()=>this.loading-=1)}}return t.\u0275fac=function(i){return new(i||t)(a.Y36(p.M))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-product-carousel"]],inputs:{category:"category"},decls:4,vars:2,consts:[["fxLayoutAlign","start start","fxFlex","100%",1,"products"],["mode","indeterminate",4,"ngIf"],["fxFlex","100%","fxLayoutGap.gt-sm","2%","fxLayout","row wrap"],[4,"ngFor","ngForOf"],["mode","indeterminate"],["fxFlex","100%","fxFlex.gt-sm","18%",3,"product"]],template:function(t,i){1&t&&(a.TgZ(0,"div",0),a.YNc(1,q,1,0,"mat-progress-spinner",1),a.TgZ(2,"div",2),a.YNc(3,S,2,1,"ng-container",3),a.qZA(),a.qZA()),2&t&&(a.xp6(1),a.Q6J("ngIf",i.loading>0),a.xp6(2),a.Q6J("ngForOf",i.products))},directives:[r.Wh,r.yH,o.O5,r.SQ,r.xw,o.sg,w.Ou,g.F],styles:[".products[_ngcontent-%COMP%]{display:row}.products[_ngcontent-%COMP%]   .see-more[_ngcontent-%COMP%]{height:240px;background:#f3f3f3;color:#0ca8a0;line-height:240px;font-size:25px;border:5px solid;padding:0 50px}"]}),t})();var U=e(8509);function F(t,i){1&t&&a._UZ(0,"mat-progress-bar",28)}function J(t,i){1&t&&(a.TgZ(0,"small",29),a._uU(1,"A partir de"),a.qZA())}function L(t,i){if(1&t){const t=a.EpF();a.TgZ(0,"button",33),a.NdJ("click",function(){const i=a.CHM(t).$implicit,e=a.oxw().$implicit;return a.oxw().selectOption(e,i)}),a._uU(1),a.qZA()}if(2&t){const t=i.$implicit;a.ekj("selected",t.selected),a.xp6(1),a.hij(" ",t.name," ")}}function N(t,i){if(1&t&&(a.TgZ(0,"div",30),a.TgZ(1,"small",31),a._uU(2),a.qZA(),a.TgZ(3,"div"),a.YNc(4,L,2,3,"button",32),a.qZA(),a.qZA()),2&t){const t=i.$implicit;a.xp6(2),a.Oqu(t.name),a.xp6(2),a.Q6J("ngForOf",t.options)}}function Q(t,i){if(1&t){const t=a.EpF();a.TgZ(0,"div",34),a.TgZ(1,"div",25),a._uU(2,"Calcule o Frete"),a.qZA(),a.TgZ(3,"div",35),a.TgZ(4,"div",36),a.TgZ(5,"mat-form-field",37),a.TgZ(6,"mat-label"),a._uU(7,"Informe seu CEP"),a.qZA(),a.TgZ(8,"input",38),a.NdJ("ngModelChange",function(i){return a.CHM(t),a.oxw().postalCode=i}),a.qZA(),a.qZA(),a.TgZ(9,"button",39),a.NdJ("click",function(){return a.CHM(t),a.oxw().shipment()}),a._UZ(10,"i",40),a._uU(11," Calcular Frete "),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=a.oxw();a.xp6(8),a.Q6J("mask","00000-000")("ngModel",t.postalCode)}}function I(t,i){if(1&t){const t=a.EpF();a.TgZ(0,"div",41),a.TgZ(1,"div",25),a._uU(2,"Calculo do Frete"),a.qZA(),a.TgZ(3,"div",42),a._UZ(4,"i",43),a._uU(5),a.ALo(6,"price"),a.qZA(),a.TgZ(7,"div",42),a._UZ(8,"i",40),a._uU(9),a.qZA(),a.TgZ(10,"div",42),a._UZ(11,"i",44),a._uU(12," Ou retire gr\xe1tis a partir de amanh\xe3 em Santo Andr\xe9."),a.qZA(),a.TgZ(13,"button",45),a.NdJ("click",function(){return a.CHM(t),a.oxw().recalculate()}),a._uU(14,"Recalcular frete"),a.qZA(),a.qZA()}if(2&t){const t=a.oxw();a.xp6(5),a.hij(" Frete a partir de ",a.lcZ(6,2,t.bestShipping.price),"."),a.xp6(4),a.hij(" Entrega em at\xe9 ",t.bestShipping.time," dias \xfateis para sua regi\xe3o.")}}function Y(t,i){if(1&t&&(a.ynx(0),a.TgZ(1,"div",25),a._uU(2,"Produtos Relacionados"),a.qZA(),a._UZ(3,"app-product-carousel",46),a.BQk()),2&t){const t=a.oxw();a.xp6(3),a.Q6J("category",t.product.categories[0].slug)}}const j=[{path:"list",component:v},{path:"view/:id/:name",component:(()=>{class t{constructor(t,i,e,o,n,r,c){this.productService=t,this.activatedRoute=i,this.checkoutService=e,this.router=o,this.alertService=n,this.titleService=r,this.metaService=c,this.loading=0,this.options=[],this.seoSchema={}}ngOnInit(){this.id=this.activatedRoute.snapshot.params.id,this.shipping=this.checkoutService.shipping,this.postalCode=this.checkoutService.postalCode,this.show()}get price(){var t,i;if(this.options){let i=null===(t=this.product)||void 0===t?void 0:t.price;return this.options.forEach(t=>{i+=(null==t?void 0:t.type)?null==t?void 0:t.price:-(null==t?void 0:t.price)}),i}return null===(i=this.product)||void 0===i?void 0:i.price}show(){this.loading+=1,this.productService.show(this.id).subscribe(t=>{var i,e,o,n,r,c,s,a,p,d,l,u,g,h,m,f,v,Z,x,_,C;this.product=t,this.titleService.setTitle((null===(i=this.product)||void 0===i?void 0:i.meta_title)?null===(e=this.product)||void 0===e?void 0:e.meta_title:null===(o=this.product)||void 0===o?void 0:o.name),this.metaService.addTags([{name:"description",content:(null===(n=this.product)||void 0===n?void 0:n.meta_description)?null===(r=this.product)||void 0===r?void 0:r.meta_description:null===(c=this.product)||void 0===c?void 0:c.description},{name:"keywords",content:(null===(s=this.product)||void 0===s?void 0:s.meta_description)?null===(a=this.product)||void 0===a?void 0:a.meta_description:null===(p=this.product)||void 0===p?void 0:p.description},{name:"image",content:(null===(l=null===(d=this.product)||void 0===d?void 0:d.files)||void 0===l?void 0:l.length)>0?null===(u=this.product)||void 0===u?void 0:u.files[0].url:""}]),this.seoSchema={"@context":"https://schema.org/","@type":"Product",name:(null===(g=this.product)||void 0===g?void 0:g.meta_title)?null===(h=this.product)||void 0===h?void 0:h.meta_title:null===(m=this.product)||void 0===m?void 0:m.name,image:[null===(f=this.product)||void 0===f?void 0:f.files[0].url],description:(null===(v=this.product)||void 0===v?void 0:v.meta_description)?null===(Z=this.product)||void 0===Z?void 0:Z.meta_description:null===(x=this.product)||void 0===x?void 0:x.description,sku:null===(_=this.product)||void 0===_?void 0:_.sku,brand:{"@type":"Brand",name:"Ana Raquel Ilustra\xe7\xf5es"},offers:{"@type":"Offer",url:"https://example.com/anvil",priceCurrency:"BRL",price:null===(C=this.product)||void 0===C?void 0:C.price,priceValidUntil:"2022-11-20",itemCondition:"https://schema.org/NewCondition",availability:"https://schema.org/InStock"}}}).add(()=>this.loading-=1)}addChart(){this.optionsNotSelected()?(this.product.selected_options=this.selectedOptions(),this.checkoutService.add(this.product),this.alertService.toast("Produto adicionado no carrinho")):this.alertService.alert("Selecione todas as op\xe7\xf5es do produto antes de adicionar ao carrinho.","Escolha todas as op\xe7\xf5es")}buyNow(){this.optionsNotSelected()?(this.product.selected_options=this.selectedOptions(),this.checkoutService.add(this.product),this.router.navigate(["checkout"])):this.alertService.alert("Selecione todas as op\xe7\xf5es do produto antes de comprar o produto.","Escolha todas as op\xe7\xf5es")}optionChanged(){this.shipment()}shipment(){this.loading>0||this.postalCode.length<8||(this.optionsNotSelected()?(this.product.selected_options=this.selectedOptions(),this.loading+=1,this.checkoutService.shipment(this.postalCode,[this.product]).subscribe(t=>{t=t.filter(t=>!t.error),this.shipping=t,this.checkoutService.postalCode=this.postalCode,this.checkoutService.shipping=this.shipping},t=>this.alertService.treatError(t)).add(()=>this.loading-=1)):this.alertService.alert("Escolha uma op\xe7\xe3o antes de calcular o frete.","Escolha todas as op\xe7\xf5es"))}get bestShipping(){let t=-1,i=-1;return this.shipping.forEach(e=>{(e.delivery_time<t||-1==t)&&(t=e.delivery_time),(+e.price<i||-1==i)&&(i=+e.price)}),{time:t,price:i}}optionValue(t){return this.product?this.product.price+(t.type?+t.price:-t.price):0}selectOption(t,i){t.options.forEach(t=>t.selected=!1),i.selected=!0,this.options=this.selectedOptions()}selectedOptions(){const t=[];return this.product.attributes.forEach(i=>{i.options.forEach(i=>{i.selected&&t.push(i)})}),t}optionsNotSelected(){var t,i;return!(null===(i=null===(t=this.product)||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.some(t=>{var i;return!(null===(i=t.options)||void 0===i?void 0:i.some(t=>t.selected))}))}recalculate(){this.shipping=null,this.checkoutService.shipping=null}}return t.\u0275fac=function(i){return new(i||t)(a.Y36(p.M),a.Y36(s.gz),a.Y36(Z.Z),a.Y36(s.F0),a.Y36(x.c),a.Y36(_.Dx),a.Y36(_.h_))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-view"]],decls:41,vars:16,consts:[["class","progress","mode","indeterminate",4,"ngIf"],[1,"breadcrumb"],["fxLayout","row",1,"container"],[1,"mdi","mdi-arrow-right"],[1,"container","page"],[3,"json"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutAlign","start start"],["fxFlex","none","ngClass.lt-sm","w100","fxFlex.gt-sm","70%","fxLayoutAlign","center start",1,"image"],["fxFlex.gt-sm","500px","ngClass.lt-sm","w100",3,"slides","width","height"],["ngClass.gt-sm","large","fxFlex.gt-xs","30%","fxFlex","100%",1,"product-info"],[1,"title-price"],[1,"name"],["class","muted",4,"ngIf"],[1,"price"],[1,"options"],["fxLayout","column","fxLayoutGap","20px",1,"attributes"],["class","margin-bottom",4,"ngFor","ngForOf"],["fxLayout","column","fxLayoutGap","15px",1,"buy"],["type","button","mat-stroked-button","","color","primary",1,"large-button",3,"click"],[1,"mdi","mdi-cart"],["type","button","mat-flat-button","","color","accent",1,"large-button",3,"click"],[1,"mdi","mdi-cart-check"],["class","shipping-calculate",4,"ngIf"],["class","shipping",4,"ngIf"],[1,"padding"],[1,"sub-title"],[3,"innerHTML"],[4,"ngIf"],["mode","indeterminate",1,"progress"],[1,"muted"],[1,"margin-bottom"],[1,"name","muted"],["mat-stroked-button","","color","accent","class","margin-right",3,"selected","click",4,"ngFor","ngForOf"],["mat-stroked-button","","color","accent",1,"margin-right",3,"click"],[1,"shipping-calculate"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutAlign.gt-sm","space-between start",1,"margin-horizontal","margin-bottom"],["ngClass.gt-sm","margin-right","fxLayout","column"],["appearance","outline",1,"no-padding","no-margin"],["placeholder","00000-000","matInput","",1,"no-margin","no-padding",3,"mask","ngModel","ngModelChange"],["type","button","mat-stroked-button","","color","primary",1,"margin-top",3,"click"],[1,"mdi","mdi-truck"],[1,"shipping"],["fxLayoutAlign","start center"],[1,"mdi","mdi-printer"],[1,"mdi","mdi-store"],["fxFill","","mat-stroked-button","","color","accent",1,"margin-top",3,"click"],[3,"category"]],template:function(t,i){1&t&&(a.YNc(0,F,1,0,"mat-progress-bar",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div"),a._uU(4,"Home"),a.qZA(),a._UZ(5,"i",3),a.TgZ(6,"div"),a._uU(7,"Produtos"),a.qZA(),a._UZ(8,"i",3),a.TgZ(9,"div"),a._uU(10),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"div",4),a._UZ(12,"ngx-json-ld",5),a.TgZ(13,"div",6),a.TgZ(14,"div",7),a._UZ(15,"app-carousel",8),a.qZA(),a.TgZ(16,"div",9),a.TgZ(17,"div",10),a.TgZ(18,"h1",11),a._uU(19),a.qZA(),a.YNc(20,J,2,0,"small",12),a.TgZ(21,"div",13),a._uU(22),a.ALo(23,"price"),a.qZA(),a.qZA(),a.TgZ(24,"div",14),a.TgZ(25,"div",15),a.YNc(26,N,5,2,"div",16),a.qZA(),a.qZA(),a.TgZ(27,"div",17),a.TgZ(28,"button",18),a.NdJ("click",function(){return i.addChart()}),a._UZ(29,"i",19),a._uU(30," Adicionar ao Carrinho "),a.qZA(),a.TgZ(31,"button",20),a.NdJ("click",function(){return i.buyNow()}),a._UZ(32,"i",21),a._uU(33," Comprar agora "),a.qZA(),a.qZA(),a.YNc(34,Q,12,2,"div",22),a.YNc(35,I,15,4,"div",23),a.qZA(),a.qZA(),a.TgZ(36,"div",24),a.TgZ(37,"div",25),a._uU(38,"Descri\xe7\xe3o do Produto"),a.qZA(),a._UZ(39,"div",26),a.YNc(40,Y,4,1,"ng-container",27),a.qZA(),a.qZA()),2&t&&(a.Q6J("ngIf",i.loading),a.xp6(10),a.Oqu(null==i.product?null:i.product.name),a.xp6(2),a.Q6J("json",i.seoSchema),a.xp6(3),a.Q6J("slides",null==i.product?null:i.product.files)("width",500)("height",700),a.xp6(4),a.Oqu(null==i.product?null:i.product.name),a.xp6(1),a.Q6J("ngIf",!i.optionsNotSelected()),a.xp6(2),a.hij(" ",a.lcZ(23,14,i.price)," "),a.xp6(4),a.Q6J("ngForOf",null==i.product?null:i.product.attributes),a.xp6(8),a.Q6J("ngIf",(null==i.shipping?null:i.shipping.length)<=0),a.xp6(1),a.Q6J("ngIf",(null==i.shipping?null:i.shipping.length)>0),a.xp6(4),a.Q6J("innerHTML",null==i.product?null:i.product.description,a.oJD),a.xp6(1),a.Q6J("ngIf",(null==i.product||null==i.product.categories?null:i.product.categories.length)>0))},directives:[o.O5,r.xw,C,r.Wh,r.yH,c.oO,b.F,r.SQ,o.sg,M.lW,n.pW,y.KE,y.hX,A.Nt,P.hx,T.Fj,T.JJ,T.On,r.s9,k],pipes:[U.d],styles:["[_nghost-%COMP%]     .mat-form-field-wrapper{margin:0!important;padding:0}.page[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;margin-top:10px}.page[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{background:#dcdfe6}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]{padding-top:15px;padding-right:15px;margin-left:15px;display:flex;flex-flow:column;border-right:1px solid #ededed;width:100%}.page[_ngcontent-%COMP%]   .product-info.large[_ngcontent-%COMP%]{max-width:350px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%], .page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .title-price[_ngcontent-%COMP%]{margin-bottom:30px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .attributes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:12px;padding:0 10px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .attributes[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{background:#f65611;border:#f65611;color:#fff}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:30px;font-weight:700}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping-price[_ngcontent-%COMP%]{font-weight:700}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping[_ngcontent-%COMP%], .page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping-calculate[_ngcontent-%COMP%]{margin-top:30px}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#343434}.page[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .shipping[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#0ba8a8;margin-right:15px}"]}),t})()}];let E=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.Bz.forChild(j)],s.Bz]}),t})();var H=e(5340),z=e(2896),B=e(7521),D=e(4810),$=e(1575),R=e(4305);let W=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[E,o.ez,n.Cv,r.ae,d.SJ,M.ot,H.s,l.LD,z.b,A.c,P.yI,T.u5,B.rP,D.Fk,c.aT,$.n,R.p,O]]}),t})()}}]);