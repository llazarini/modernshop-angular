(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{KyJ7:function(t,e,i){"use strict";i.d(e,"a",(function(){return m}));var o=i("fXoL"),n=i("tk/3"),a=i("AytR");let r=(()=>{class t{constructor(t){this.httpClient=t}store(t,e,i,o){const r=new FormData,c=new n.d;return c.append("Content-Type","multipart/form-data"),i?r.append("type_id",i.toString()):r.append("request_token",o.toString()),r.append("type",e),r.append("file",t),this.httpClient.post(a.a.baseAuthUrl+"/files/store",r,{headers:c})}delete(t){return this.httpClient.delete(a.a.baseAuthUrl+"/files/delete/"+t,{})}images(t,e){let i=new n.e;return i=i.append("type",t),i=i.append("id",e.toString()),this.httpClient.get(a.a.baseAuthUrl+"/files/images/",{params:i})}}return t.\u0275fac=function(e){return new(e||t)(o.Wb(n.b))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var c=i("XiUz"),s=i("bTqV"),l=i("NFeN"),d=i("ofXK"),b=i("Xa2L");function u(t,e){if(1&t){const t=o.Tb();o.Qb(0),o.Sb(1,"div",9),o.Sb(2,"button",10),o.ac("click",(function(){o.sc(t);const i=e.$implicit;return o.ec().delete(i)})),o.Sb(3,"mat-icon"),o.Dc(4,"remove_circle_outline"),o.Rb(),o.Rb(),o.Rb(),o.Pb()}if(2&t){const t=e.$implicit;o.Bb(1),o.yc("background","url("+t.url+")")}}function p(t,e){1&t&&o.Nb(0,"mat-spinner",11)}let m=(()=>{class t{constructor(t){this.fileService=t,this.loading=0,this.files=[],this.uploaded=new o.o}set id(t){t&&(this.typeId=t,this.images())}get id(){return this.typeId}ngOnInit(){}changed(t){if(this.loading>0)return;const e=t.target.files.item(0);this.loading+=1,this.fileService.store(e,this.type,this.id,this.token).subscribe(t=>{!this.multiple&&this.files.length&&(this.delete(this.files[0]),this.files=[]),this.files.push(t),this.uploaded.emit(t)}).add(()=>this.loading-=1)}images(){this.loading+=1,this.fileService.images(this.type,this.id).subscribe(t=>{this.files=t.data}).add(()=>this.loading-=1)}delete(t){this.loading+=1,this.fileService.delete(t.id).subscribe(e=>{const i=this.files.findIndex(e=>e.id===t.id);i<0||this.files.splice(i,1)}).add(()=>this.loading-=1)}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(r))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-file-upload"]],inputs:{type:"type",multiple:"multiple",token:"token",id:"id"},outputs:{uploaded:"uploaded"},decls:12,vars:3,consts:[["fxLayout","column"],["type","file",1,"file-input",3,"multiple","change"],["fileUpload",""],["fxLayout","row","fxLayoutAlign","start center",1,"file-upload","margin-bottom",3,"click"],["mat-mini-fab","","color","primary","type","button",1,"upload-btn"],[1,"margin-left","pointer"],["fxLayout","row wrap","fxLayoutAlign","start center",1,"images","margin-top"],[4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[1,"image","margin-right","margin-bottom"],["mat-icon-button","","color","warn","type","button",3,"click"],["mode","indeterminate"]],template:function(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",0),o.Sb(1,"input",1,2),o.ac("change",(function(t){return e.changed(t)})),o.Rb(),o.Sb(3,"div",3),o.ac("click",(function(){return o.sc(t),o.pc(2).click()})),o.Sb(4,"button",4),o.Sb(5,"mat-icon"),o.Dc(6,"attach_file"),o.Rb(),o.Rb(),o.Sb(7,"div",5),o.Dc(8,"Selecione o arquivo"),o.Rb(),o.Rb(),o.Sb(9,"div",6),o.Bc(10,u,5,2,"ng-container",7),o.Bc(11,p,1,0,"mat-spinner",8),o.Rb(),o.Rb()}2&t&&(o.Bb(1),o.kc("multiple",e.multiple),o.Bb(9),o.kc("ngForOf",e.files),o.Bb(1),o.kc("ngIf",e.loading>0))},directives:[c.c,c.b,s.a,l.a,d.k,d.l,b.c],styles:[".file-input[_ngcontent-%COMP%]{display:none}.images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:10px;border:3px solid #bebebe;background-size:cover!important}"]}),t})()},Qj20:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));let o=(()=>{class t{}return t.product="App\\Models\\Product",t.category="App\\Models\\Category",t.option="App\\Models\\Option",t})()},sAQj:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));class o{static generate(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}}},"zg7/":function(t,e,i){"use strict";i.r(e),i.d(e,"ProductsModule",(function(){return ft}));var o=i("ofXK"),n=i("tyNb"),a=i("fXoL"),r=i("tk/3"),c=i("AytR");let s=(()=>{class t{constructor(t){this.httpClient=t}carousel(t){let e=new r.e;return e=e.append("slug",t),this.httpClient.get(c.a.baseAuthUrl+"/products/slug",{params:e})}getAll(t){let e=new r.e;return t&&(e=e.append("page",t.toString())),this.httpClient.get(c.a.baseAuthUrl+"/products/get-all",{params:e})}update(t){return this.httpClient.put(c.a.baseAuthUrl+"/products/update/"+t.id,t)}store(t){return this.httpClient.post(c.a.baseAuthUrl+"/products/store",t)}dataprovider(){return this.httpClient.get(c.a.baseAuthUrl+"/products/dataprovider/",{})}get(t){return this.httpClient.get(c.a.baseAuthUrl+"/products/get/"+t,{})}delete(t){return this.httpClient.delete(c.a.baseAuthUrl+"/products/delete/"+t,{})}}return t.\u0275fac=function(e){return new(e||t)(a.Wb(r.b))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=i("kyzu"),d=i("XiUz"),b=i("bTqV"),u=i("+0xr"),p=i("Dh3D"),m=i("M9IT"),f=i("bv9b"),h=i("NFeN");function g(t,e){1&t&&a.Nb(0,"mat-progress-bar",20)}function S(t,e){1&t&&(a.Sb(0,"th",21),a.Dc(1,"#"),a.Rb())}function v(t,e){if(1&t&&(a.Sb(0,"td",22),a.Dc(1),a.Rb()),2&t){const t=e.$implicit;a.Bb(1),a.Ec(t.id)}}function R(t,e){1&t&&(a.Sb(0,"th",23),a.Dc(1,"Nome"),a.Rb())}function y(t,e){if(1&t&&(a.Sb(0,"td",22),a.Dc(1),a.Rb()),2&t){const t=e.$implicit;a.Bb(1),a.Ec(t.name)}}function D(t,e){1&t&&(a.Sb(0,"th",23),a.Dc(1,"C\xf3digo (SKU)"),a.Rb())}function k(t,e){if(1&t&&(a.Sb(0,"td",22),a.Dc(1),a.Rb()),2&t){const t=e.$implicit;a.Bb(1),a.Ec(t.sku)}}function C(t,e){1&t&&(a.Sb(0,"th",23),a.Dc(1,"Pre\xe7o (R$)"),a.Rb())}function B(t,e){if(1&t&&(a.Sb(0,"td",22),a.Dc(1),a.fc(2,"currency"),a.Rb()),2&t){const t=e.$implicit;a.Bb(1),a.Ec(a.gc(2,1,t.price))}}function w(t,e){1&t&&(a.Sb(0,"th",23),a.Dc(1,"Pre\xe7o de Custo (R$)"),a.Rb())}function x(t,e){if(1&t&&(a.Sb(0,"td",22),a.Dc(1),a.fc(2,"currency"),a.Rb()),2&t){const t=e.$implicit;a.Bb(1),a.Ec(a.gc(2,1,t.price_cost))}}function N(t,e){1&t&&(a.Sb(0,"th",24),a.Dc(1,"A\xe7\xf5es"),a.Rb())}function A(t,e){if(1&t){const t=a.Tb();a.Sb(0,"td",22),a.Sb(1,"button",25),a.Sb(2,"mat-icon",26),a.Dc(3,"edit"),a.Rb(),a.Dc(4," Editar "),a.Rb(),a.Sb(5,"button",27),a.ac("click",(function(){a.sc(t);const i=e.$implicit;return a.ec().deleteConfirm(i)})),a.Sb(6,"mat-icon",26),a.Dc(7,"remove_circle_outline"),a.Rb(),a.Dc(8," Remover "),a.Rb(),a.Rb()}if(2&t){const t=e.$implicit;a.Bb(1),a.kc("routerLink","edit/"+t.id)}}function I(t,e){1&t&&a.Nb(0,"tr",28)}function O(t,e){1&t&&a.Nb(0,"tr",29)}let L=(()=>{class t{constructor(t,e){this.productService=t,this.alertService=e,this.displayedColumns=["id","name","sku","price","price_cost","actions"],this.loading=!0,this.page=0}ngOnInit(){this.getAll()}getAll(){this.loading=!0,this.productService.getAll(this.page+1).subscribe(t=>{this.dataSource=t.data,this.total=t.total}).add(()=>this.loading=!1)}delete(t){this.loading=!0,this.productService.delete(t.id).subscribe(t=>{this.getAll(),this.alertService.toast(t.message)}).add(()=>this.loading=!1)}pageChange(t){this.page=t.pageIndex,this.getAll()}deleteConfirm(t){this.alertService.confirm("Deseja remover o registro?","Remover").subscribe(e=>{e&&this.delete(t)})}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(s),a.Mb(l.a))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-products"]],decls:30,vars:6,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","column"],["fxLayoutAlign","space-between center"],[1,"margin-right"],["color","primary","mat-flat-button","","routerLink","add"],[1,"mdi","mdi-plus"],["fxFlex","","mat-table","","matSort","","matSortActive","id","matSortDisableClear","","matSortDirection","desc",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","width","50px",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","sku"],["matColumnDef","price"],["matColumnDef","price_cost"],["matColumnDef","actions","stickyEnd",""],["mat-header-cell","","class","actions",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageSize","10",3,"pageIndex","length","page"],["mode","indeterminate",1,"progress"],["mat-header-cell","","width","50px"],["mat-cell",""],["mat-header-cell",""],["mat-header-cell","",1,"actions"],["mat-button","","color","primary",3,"routerLink"],["inline","",1,"small"],["mat-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(a.Bc(0,g,1,0,"mat-progress-bar",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"h1",3),a.Dc(4,"Produtos"),a.Rb(),a.Sb(5,"button",4),a.Nb(6,"i",5),a.Dc(7," Adicionar "),a.Rb(),a.Rb(),a.Sb(8,"table",6),a.Qb(9,7),a.Bc(10,S,2,0,"th",8),a.Bc(11,v,2,1,"td",9),a.Pb(),a.Qb(12,10),a.Bc(13,R,2,0,"th",11),a.Bc(14,y,2,1,"td",9),a.Pb(),a.Qb(15,12),a.Bc(16,D,2,0,"th",11),a.Bc(17,k,2,1,"td",9),a.Pb(),a.Qb(18,13),a.Bc(19,C,2,0,"th",11),a.Bc(20,B,3,3,"td",9),a.Pb(),a.Qb(21,14),a.Bc(22,w,2,0,"th",11),a.Bc(23,x,3,3,"td",9),a.Pb(),a.Qb(24,15),a.Bc(25,N,2,0,"th",16),a.Bc(26,A,9,1,"td",9),a.Pb(),a.Bc(27,I,1,0,"tr",17),a.Bc(28,O,1,0,"tr",18),a.Rb(),a.Sb(29,"mat-paginator",19),a.ac("page",(function(t){return e.pageChange(t)})),a.Rb(),a.Rb()),2&t&&(a.kc("ngIf",e.loading),a.Bb(8),a.kc("dataSource",e.dataSource),a.Bb(19),a.kc("matHeaderRowDef",e.displayedColumns),a.Bb(1),a.kc("matRowDefColumns",e.displayedColumns),a.Bb(1),a.kc("pageIndex",e.page)("length",e.total))},directives:[o.l,d.c,d.b,b.a,n.c,u.j,d.a,p.a,u.c,u.e,u.b,u.g,u.i,m.a,f.a,u.d,u.a,h.a,u.f,u.h],pipes:[o.d],styles:[""]}),t})();var M=i("3Pt+"),P=i("sAQj"),_=i("Qj20"),F=i("wZkO"),$=i("kmnG"),E=i("qFsG"),U=i("KyJ7");function G(t,e){1&t&&a.Nb(0,"mat-progress-bar",26)}function q(t,e){1&t&&(a.Nb(0,"i",27),a.Dc(1,"Dados B\xe1sicos "))}function T(t,e){1&t&&(a.Nb(0,"i",28),a.Dc(1," Imagens "))}function Q(t,e){1&t&&(a.Nb(0,"i",29),a.Dc(1," Meta tags "))}function j(t,e){1&t&&(a.Nb(0,"i",30),a.Dc(1," Op\xe7\xf5es "))}function K(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",31),a.Sb(1,"div"),a.Dc(2),a.Rb(),a.Sb(3,"button",32),a.ac("click",(function(){a.sc(t);const i=e.$implicit;return a.ec().selectOption(i)})),a.Nb(4,"i",33),a.Rb(),a.Rb()}if(2&t){const t=e.$implicit;a.Bb(2),a.Ec(t.name)}}function X(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",31),a.Sb(1,"div"),a.Dc(2),a.Rb(),a.Sb(3,"button",34),a.ac("click",(function(){a.sc(t);const i=e.$implicit;return a.ec().selectOption(i)})),a.Nb(4,"i",35),a.Rb(),a.Rb()}if(2&t){const t=e.$implicit;a.Bb(2),a.Ec(t.name)}}function z(t,e){1&t&&(a.Sb(0,"div",36),a.Dc(1,"Vazio"),a.Rb())}function H(t,e){1&t&&(a.Nb(0,"i",30),a.Dc(1," Categorias "))}function J(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",31),a.Sb(1,"div"),a.Dc(2),a.Rb(),a.Sb(3,"button",32),a.ac("click",(function(){a.sc(t);const i=e.$implicit;return a.ec().selectCategory(i)})),a.Nb(4,"i",33),a.Rb(),a.Rb()}if(2&t){const t=e.$implicit;a.Bb(2),a.Ec(t.name)}}function V(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",31),a.Sb(1,"div"),a.Dc(2),a.Rb(),a.Sb(3,"button",34),a.ac("click",(function(){a.sc(t);const i=e.$implicit;return a.ec().selectCategory(i)})),a.Nb(4,"i",35),a.Rb(),a.Rb()}if(2&t){const t=e.$implicit;a.Bb(2),a.Ec(t.name)}}function W(t,e){1&t&&(a.Sb(0,"div",36),a.Dc(1,"Vazio"),a.Rb())}let Z=(()=>{class t{constructor(t=null,e,i,o,n){this.formBuilder=t,this.router=e,this.activatedRoute=i,this.alertService=o,this.productService=n,this.id=null,this.fileType=_.a.product,this.token=P.a.generate(),this.categories=[],this.options=[],this.formGroup=this.formBuilder.group({request_token:[this.token],id:[null],sku:[null],name:[null,[M.v.required,M.v.maxLength(255)]],description:[null],price:[null],price_cost:[null],meta_name:[null],meta_description:[null],meta_keys:[null],categories:t.array([]),options:t.array([])})}ngOnInit(){this.id=this.activatedRoute.snapshot.params.id,this.id?this.get():this.dataprovider()}dataprovider(){this.loading=!0,this.productService.dataprovider().subscribe(t=>{this.categories.forEach(t=>t.selected=!0),this.formGroup.value.categories=this.categories.map(t=>t.id),this.categories=this.categories.concat(t.categories.filter(t=>!this.categories.some(e=>e.id===t.id))),this.options.forEach(t=>t.selected=!0),this.formGroup.value.options=this.options.map(t=>t.id),this.options=this.options.concat(t.options.filter(t=>!this.options.some(e=>e.id===t.id)))}).add(()=>this.loading=!1)}submit(){this.loading||(this.id?this.update():this.store())}store(){this.loading=!0,this.productService.store(this.formGroup.value).subscribe(t=>{this.router.navigate(["/","auth","products"]),this.alertService.toast(t.message)},t=>{this.alertService.treatError(t)}).add(()=>this.loading=!1)}update(){this.loading=!0,this.productService.update(this.formGroup.value).subscribe(t=>{this.router.navigate(["/","auth","products"]),this.alertService.toast(t.message)},t=>{this.alertService.treatError(t)}).add(()=>this.loading=!1)}get(){this.loading=!0,this.productService.get(this.id).subscribe(t=>{this.formGroup.patchValue(t),this.options=t.options,this.categories=t.categories,this.dataprovider()}).add(()=>this.loading=!1)}selectCategory(t){t.selected=!t.selected,this.formGroup.value.categories=this.categories.filter(t=>t.selected).map(t=>t.id)}nonSelectedCategories(){var t;return null===(t=this.categories)||void 0===t?void 0:t.filter(t=>!t.selected)}selectedCategories(){var t;return null===(t=this.categories)||void 0===t?void 0:t.filter(t=>t.selected)}selectOption(t){t.selected=!t.selected,this.formGroup.value.options=this.options.filter(t=>t.selected).map(t=>t.id)}nonSelectedOptions(){var t;return null===(t=this.options)||void 0===t?void 0:t.filter(t=>!t.selected)}selectedOptions(){var t;return null===(t=this.options)||void 0===t?void 0:t.filter(t=>t.selected)}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(M.e),a.Mb(n.b),a.Mb(n.a),a.Mb(l.a),a.Mb(s))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-add-edit"]],decls:76,vars:14,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between start"],["color","primary","mat-flat-button","",3,"click"],[1,"mdi","mdi-plus"],[1,"common-form",3,"formGroup","submit"],[1,"vertical"],["mat-tab-label",""],["fxLayout","column",1,"common-form-max"],["appearance","outline"],["matInput","","required","","formControlName","name"],["matInput","","required","","formControlName","sku"],["matInput","","required","","formControlName","description"],["fxLayout","row"],["fxFlex","","appearance","outline",1,"margin-right"],["matInput","","required","","formControlName","price_cost"],["fxFlex","","appearance","outline"],["matInput","","required","","formControlName","price"],["fxLayout","row",1,"common-form-max"],[3,"multiple","type","id","token"],["matInput","","required","","formControlName","meta_name"],["matInput","","required","","formControlName","meta_description"],["matInput","","required","","formControlName","meta_keys"],["fxLayout","column",1,"margin-right"],["fxLayout","row","fxLayoutAlign","start center",4,"ngFor","ngForOf"],["fxLayout","column",1,"padding-left"],["class","muted",4,"ngIf"],["mode","indeterminate",1,"progress"],[1,"mdi","mdi-pencil","margin-right"],[1,"mdi","mdi-image","margin-right"],[1,"mdi","mdi-text","margin-right"],[1,"mdi","mdi-chart-bar","margin-right"],["fxLayout","row","fxLayoutAlign","start center"],["type","button","color","primary","mat-icon-button","",3,"click"],[1,"mdi","mdi-plus-circle"],["type","button","color","warn","mat-icon-button","",3,"click"],[1,"mdi","mdi-minus-circle"],[1,"muted"]],template:function(t,e){var i,o;1&t&&(a.Bc(0,G,1,0,"mat-progress-bar",0),a.Sb(1,"div",1),a.Sb(2,"h1"),a.Dc(3),a.Rb(),a.Sb(4,"button",2),a.ac("click",(function(){return e.submit()})),a.Nb(5,"i",3),a.Dc(6),a.Rb(),a.Rb(),a.Sb(7,"form",4),a.ac("submit",(function(){return e.submit()})),a.Sb(8,"mat-tab-group",5),a.Sb(9,"mat-tab"),a.Bc(10,q,2,0,"ng-template",6),a.Sb(11,"div",7),a.Sb(12,"mat-form-field",8),a.Sb(13,"mat-label"),a.Dc(14,"Nome do Produto"),a.Rb(),a.Nb(15,"input",9),a.Rb(),a.Sb(16,"mat-form-field",8),a.Sb(17,"mat-label"),a.Dc(18,"C\xf3digo do Produto (SKU)"),a.Rb(),a.Nb(19,"input",10),a.Rb(),a.Sb(20,"mat-form-field",8),a.Sb(21,"mat-label"),a.Dc(22,"Descri\xe7\xe3o do Produto"),a.Rb(),a.Nb(23,"textarea",11),a.Rb(),a.Sb(24,"div",12),a.Sb(25,"mat-form-field",13),a.Sb(26,"mat-label"),a.Dc(27,"Pre\xe7o de Custo"),a.Rb(),a.Nb(28,"input",14),a.Rb(),a.Sb(29,"mat-form-field",15),a.Sb(30,"mat-label"),a.Dc(31,"Pre\xe7o de Venda"),a.Rb(),a.Nb(32,"input",16),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(33,"mat-tab"),a.Bc(34,T,2,0,"ng-template",6),a.Sb(35,"div",17),a.Nb(36,"app-file-upload",18),a.Rb(),a.Rb(),a.Sb(37,"mat-tab"),a.Bc(38,Q,2,0,"ng-template",6),a.Sb(39,"div",7),a.Sb(40,"mat-form-field",8),a.Sb(41,"mat-label"),a.Dc(42,"Meta Nome"),a.Rb(),a.Nb(43,"input",19),a.Rb(),a.Sb(44,"mat-form-field",8),a.Sb(45,"mat-label"),a.Dc(46,"Meta Descri\xe7\xe3o"),a.Rb(),a.Nb(47,"textarea",20),a.Rb(),a.Sb(48,"mat-form-field",8),a.Sb(49,"mat-label"),a.Dc(50,"Meta Keys"),a.Rb(),a.Nb(51,"textarea",21),a.Rb(),a.Rb(),a.Rb(),a.Sb(52,"mat-tab"),a.Bc(53,j,2,0,"ng-template",6),a.Sb(54,"div",17),a.Sb(55,"div",22),a.Sb(56,"h3"),a.Dc(57,"Op\xe7\xf5es Dispon\xedveis"),a.Rb(),a.Bc(58,K,5,1,"div",23),a.Rb(),a.Sb(59,"div",24),a.Sb(60,"h3"),a.Dc(61,"Op\xe7\xf5es Selecionadas"),a.Rb(),a.Bc(62,X,5,1,"div",23),a.Bc(63,z,2,0,"div",25),a.Rb(),a.Rb(),a.Rb(),a.Sb(64,"mat-tab"),a.Bc(65,H,2,0,"ng-template",6),a.Sb(66,"div",17),a.Sb(67,"div",22),a.Sb(68,"h3"),a.Dc(69,"Categorias Dispon\xedveis"),a.Rb(),a.Bc(70,J,5,1,"div",23),a.Rb(),a.Sb(71,"div",24),a.Sb(72,"h3"),a.Dc(73,"Categorias Selecionadas"),a.Rb(),a.Bc(74,V,5,1,"div",23),a.Bc(75,W,2,0,"div",25),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&t&&(a.kc("ngIf",e.loading),a.Bb(3),a.Fc("",e.id?"Editar":"Adicionar"," Produto"),a.Bb(3),a.Fc(" ",e.id?"Salvar edi\xe7\xe3o":"Adicionar"," "),a.Bb(1),a.kc("formGroup",e.formGroup),a.Bb(29),a.kc("multiple",!0)("type",e.fileType)("id",e.id)("token",e.token),a.Bb(22),a.kc("ngForOf",e.nonSelectedOptions()),a.Bb(4),a.kc("ngForOf",e.selectedOptions()),a.Bb(1),a.kc("ngIf",!(null!=(i=e.selectedOptions())&&i.length)),a.Bb(7),a.kc("ngForOf",e.nonSelectedCategories()),a.Bb(4),a.kc("ngForOf",e.selectedCategories()),a.Bb(1),a.kc("ngIf",!(null!=(o=e.selectedCategories())&&o.length)))},directives:[o.l,d.c,d.b,b.a,M.w,M.p,M.j,F.b,F.a,F.c,$.c,$.f,E.b,M.c,M.u,M.o,M.h,d.a,U.a,o.k,f.a],styles:[".list[_ngcontent-%COMP%]{min-width:220px}"]}),t})();const Y=[{path:"",component:L},{path:"add",component:Z},{path:"edit/:id",component:Z}];let tt=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[n.e.forChild(Y)],n.e]}),t})();var et=i("7EHt"),it=i("TU8p"),ot=i("Xa2L"),nt=i("Wp6s"),at=i("1jcm"),rt=i("MutI"),ct=i("FKr1"),st=i("d3UM"),lt=i("Xx9n"),dt=i("g1/W"),bt=i("tmjD"),ut=i("Qu3c"),pt=i("/1cH"),mt=i("WJ5W");let ft=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[o.c,tt,d.f,et.a,it.b,f.b,ot.b,nt.c,b.b,M.t,E.c,h.b,at.a,rt.b,F.d,ct.o,st.b,u.k,p.b,lt.a,dt.a,m.b,bt.b,ut.b,pt.a,mt.b,M.k]]}),t})()}}]);