(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{LZ3p:function(t,e,i){"use strict";i.r(e),i.d(e,"OptionsModule",(function(){return at}));var a=i("ofXK"),r=i("XiUz"),o=i("7EHt"),n=i("TU8p"),c=i("bv9b"),l=i("Xa2L"),b=i("Wp6s"),s=i("bTqV"),d=i("3Pt+"),m=i("qFsG"),u=i("NFeN"),p=i("1jcm"),h=i("MutI"),f=i("wZkO"),g=i("FKr1"),S=i("d3UM"),v=i("+0xr"),R=i("Dh3D"),D=i("Xx9n"),w=i("g1/W"),C=i("M9IT"),B=i("tmjD"),y=i("Qu3c"),k=i("/1cH"),N=i("WJ5W"),x=i("tyNb"),A=i("fXoL"),I=i("tk/3"),q=i("AytR");let L=(()=>{class t{constructor(t){this.httpClient=t}getAll(t){let e=new I.e;return t&&(e=e.append("page",t.toString())),this.httpClient.get(q.a.baseAuthUrl+"/options/get-all",{params:e})}update(t){return this.httpClient.put(q.a.baseAuthUrl+"/options/update/"+t.id,t)}store(t){return this.httpClient.post(q.a.baseAuthUrl+"/options/store",t)}dataprovider(){return this.httpClient.get(q.a.baseAuthUrl+"/options/dataprovider/",{})}get(t){return this.httpClient.get(q.a.baseAuthUrl+"/options/get/"+t,{})}delete(t){return this.httpClient.delete(q.a.baseAuthUrl+"/options/delete/"+t,{})}}return t.\u0275fac=function(e){return new(e||t)(A.Wb(I.b))},t.\u0275prov=A.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var G=i("kyzu"),M=i("CQ0i");function P(t,e){1&t&&A.Nb(0,"mat-progress-bar",20)}function F(t,e){1&t&&(A.Sb(0,"th",21),A.Dc(1,"#"),A.Rb())}function E(t,e){if(1&t&&(A.Sb(0,"td",22),A.Dc(1),A.Rb()),2&t){const t=e.$implicit;A.Bb(1),A.Ec(t.id)}}function U(t,e){1&t&&(A.Sb(0,"th",23),A.Dc(1,"Nome"),A.Rb())}function H(t,e){if(1&t&&(A.Sb(0,"td",22),A.Dc(1),A.Rb()),2&t){const t=e.$implicit;A.Bb(1),A.Ec(t.name)}}function O(t,e){1&t&&(A.Sb(0,"th",23),A.Dc(1,"Pre\xe7o"),A.Rb())}function Q(t,e){if(1&t&&(A.Sb(0,"td",22),A.Dc(1),A.fc(2,"price"),A.Sb(3,"span",24),A.Dc(4),A.Rb(),A.Rb()),2&t){const t=e.$implicit;A.Bb(1),A.Fc(" ",A.gc(2,2,t.price)," "),A.Bb(3),A.Ec(t.type?"(+) Adicional":"(-) Remover")}}function j(t,e){1&t&&(A.Sb(0,"th",23),A.Dc(1,"Gramas"),A.Rb())}function $(t,e){if(1&t&&(A.Sb(0,"td",22),A.Dc(1),A.Rb()),2&t){const t=e.$implicit;A.Bb(1),A.Fc(" ",t.weight," gramas ")}}function T(t,e){1&t&&(A.Sb(0,"th",23),A.Dc(1,"Tamanho"),A.Rb())}function z(t,e){if(1&t&&(A.Sb(0,"td",22),A.Dc(1),A.Rb()),2&t){const t=e.$implicit;A.Bb(1),A.Hc(" ",t.width," x ",t.length," x ",t.height," ")}}function J(t,e){1&t&&(A.Sb(0,"th",25),A.Dc(1,"A\xe7\xf5es"),A.Rb())}function W(t,e){if(1&t){const t=A.Tb();A.Sb(0,"td",22),A.Sb(1,"button",26),A.Sb(2,"mat-icon",27),A.Dc(3,"edit"),A.Rb(),A.Dc(4," Editar "),A.Rb(),A.Sb(5,"button",28),A.ac("click",(function(){A.sc(t);const i=e.$implicit;return A.ec().deleteConfirm(i)})),A.Sb(6,"mat-icon",27),A.Dc(7,"remove_circle_outline"),A.Rb(),A.Dc(8," Remover "),A.Rb(),A.Rb()}if(2&t){const t=e.$implicit;A.Bb(1),A.kc("routerLink","edit/"+t.id)}}function X(t,e){1&t&&A.Nb(0,"tr",29)}function K(t,e){1&t&&A.Nb(0,"tr",30)}let _=(()=>{class t{constructor(t,e){this.optionService=t,this.alertService=e,this.displayedColumns=["id","name","price","weight","size","actions"],this.loading=!0,this.page=0}ngOnInit(){this.getAll()}getAll(){this.loading=!0,this.optionService.getAll(this.page+1).subscribe(t=>{this.dataSource=t.data,this.total=t.total}).add(()=>this.loading=!1)}delete(t){this.loading=!0,this.optionService.delete(t.id).subscribe(t=>{this.getAll(),this.alertService.toast(t.message)}).add(()=>this.loading=!1)}pageChange(t){this.page=t.pageIndex,this.getAll()}deleteConfirm(t){this.alertService.confirm("Deseja remover o registro?","Remover").subscribe(e=>{e&&this.delete(t)})}}return t.\u0275fac=function(e){return new(e||t)(A.Mb(L),A.Mb(G.a))},t.\u0275cmp=A.Gb({type:t,selectors:[["app-options"]],decls:30,vars:6,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","column"],["fxLayoutAlign","space-between center"],[1,"margin-right"],["color","primary","mat-flat-button","","routerLink","add"],[1,"mdi","mdi-plus"],["fxFlex","","mat-table","","matSort","","matSortActive","id","matSortDisableClear","","matSortDirection","desc",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","width","50px",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","price"],["matColumnDef","weight"],["matColumnDef","size"],["matColumnDef","actions","stickyEnd",""],["mat-header-cell","","class","actions",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageSize","10",3,"pageIndex","length","page"],["mode","indeterminate",1,"progress"],["mat-header-cell","","width","50px"],["mat-cell",""],["mat-header-cell",""],[1,"muted"],["mat-header-cell","",1,"actions"],["mat-button","","color","primary",3,"routerLink"],["inline","",1,"small"],["mat-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(A.Bc(0,P,1,0,"mat-progress-bar",0),A.Sb(1,"div",1),A.Sb(2,"div",2),A.Sb(3,"h1",3),A.Dc(4,"Op\xe7\xf5es"),A.Rb(),A.Sb(5,"button",4),A.Nb(6,"i",5),A.Dc(7," Adicionar "),A.Rb(),A.Rb(),A.Sb(8,"table",6),A.Qb(9,7),A.Bc(10,F,2,0,"th",8),A.Bc(11,E,2,1,"td",9),A.Pb(),A.Qb(12,10),A.Bc(13,U,2,0,"th",11),A.Bc(14,H,2,1,"td",9),A.Pb(),A.Qb(15,12),A.Bc(16,O,2,0,"th",11),A.Bc(17,Q,5,4,"td",9),A.Pb(),A.Qb(18,13),A.Bc(19,j,2,0,"th",11),A.Bc(20,$,2,1,"td",9),A.Pb(),A.Qb(21,14),A.Bc(22,T,2,0,"th",11),A.Bc(23,z,2,3,"td",9),A.Pb(),A.Qb(24,15),A.Bc(25,J,2,0,"th",16),A.Bc(26,W,9,1,"td",9),A.Pb(),A.Bc(27,X,1,0,"tr",17),A.Bc(28,K,1,0,"tr",18),A.Rb(),A.Sb(29,"mat-paginator",19),A.ac("page",(function(t){return e.pageChange(t)})),A.Rb(),A.Rb()),2&t&&(A.kc("ngIf",e.loading),A.Bb(8),A.kc("dataSource",e.dataSource),A.Bb(19),A.kc("matHeaderRowDef",e.displayedColumns),A.Bb(1),A.kc("matRowDefColumns",e.displayedColumns),A.Bb(1),A.kc("pageIndex",e.page)("length",e.total))},directives:[a.l,r.c,r.b,s.a,x.c,v.j,r.a,R.a,v.c,v.e,v.b,v.g,v.i,C.a,c.a,v.d,v.a,u.a,v.f,v.h],pipes:[M.a],styles:[""]}),t})();var V=i("kmnG");function Z(t,e){1&t&&A.Nb(0,"mat-progress-bar",19)}let Y=(()=>{class t{constructor(t=null,e,i,a,r){this.formBuilder=t,this.router=e,this.activatedRoute=i,this.alertService=a,this.optionService=r,this.id=null,this.formGroup=this.formBuilder.group({id:[null],name:[null,[d.v.required,d.v.maxLength(255)]],price:[null,[d.v.required]],type:[null,[d.v.required]],description:[null,[d.v.required]],weight:[null,[d.v.required]],height:[null,[d.v.required]],width:[null,[d.v.required]],length:[null,[d.v.required]]})}ngOnInit(){this.id=this.activatedRoute.snapshot.params.id,this.id&&this.get(),this.dataprovider()}dataprovider(){this.loading=!0,this.optionService.dataprovider().subscribe(t=>{}).add(()=>this.loading=!1)}submit(){this.loading||(this.id?this.update():this.store())}store(){this.loading=!0,this.optionService.store(this.formGroup.value).subscribe(t=>{this.router.navigate(["/","auth","options"]),this.alertService.toast(t.message)},t=>{this.alertService.treatError(t)}).add(()=>this.loading=!1)}update(){this.loading=!0,this.optionService.update(this.formGroup.value).subscribe(t=>{this.router.navigate(["/","auth","options"]),this.alertService.toast(t.message)},t=>{this.alertService.treatError(t)}).add(()=>this.loading=!1)}get(){this.loading=!0,this.optionService.get(this.id).subscribe(t=>{this.formGroup.patchValue(t)}).add(()=>this.loading=!1)}}return t.\u0275fac=function(e){return new(e||t)(A.Mb(d.e),A.Mb(x.b),A.Mb(x.a),A.Mb(G.a),A.Mb(L))},t.\u0275cmp=A.Gb({type:t,selectors:[["app-add-edit"]],decls:47,vars:6,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between start"],["color","primary","mat-flat-button","",3,"click"],[1,"mdi","mdi-plus"],[1,"common-form","padding",3,"formGroup","submit"],["fxLayout","column",1,"common-form-max"],["appearance","outline"],["matInput","","required","","formControlName","name"],["formControlName","type"],[3,"value"],["matInput","","required","","formControlName","price"],["matInput","","required","","formControlName","description"],["fxLayout","row"],["fxFlex","","appearance","outline"],["matInput","","required","","type","number","formControlName","weight"],["fxFlex","","appearance","outline",1,"margin-left"],["matInput","","required","","type","number","formControlName","width"],["matInput","","required","","type","number","formControlName","height"],["matInput","","required","","type","number","formControlName","length"],["mode","indeterminate",1,"progress"]],template:function(t,e){1&t&&(A.Bc(0,Z,1,0,"mat-progress-bar",0),A.Sb(1,"div",1),A.Sb(2,"h1"),A.Dc(3),A.Rb(),A.Sb(4,"button",2),A.ac("click",(function(){return e.submit()})),A.Nb(5,"i",3),A.Dc(6),A.Rb(),A.Rb(),A.Sb(7,"form",4),A.ac("submit",(function(){return e.submit()})),A.Sb(8,"div",5),A.Sb(9,"mat-form-field",6),A.Sb(10,"mat-label"),A.Dc(11,"Nome da Op\xe7\xe3o"),A.Rb(),A.Nb(12,"input",7),A.Rb(),A.Sb(13,"mat-form-field",6),A.Sb(14,"mat-label"),A.Dc(15,"Tipo"),A.Rb(),A.Sb(16,"mat-select",8),A.Sb(17,"mat-option",9),A.Dc(18,"Adicional (+)"),A.Rb(),A.Sb(19,"mat-option",9),A.Dc(20,"Adicional (-)"),A.Rb(),A.Rb(),A.Rb(),A.Sb(21,"mat-form-field",6),A.Sb(22,"mat-label"),A.Dc(23,"Pre\xe7o"),A.Rb(),A.Nb(24,"input",10),A.Rb(),A.Sb(25,"mat-form-field",6),A.Sb(26,"mat-label"),A.Dc(27,"Descri\xe7\xe3o"),A.Rb(),A.Nb(28,"textarea",11),A.Rb(),A.Sb(29,"div",12),A.Sb(30,"mat-form-field",13),A.Sb(31,"mat-label"),A.Dc(32,"Peso (g)"),A.Rb(),A.Nb(33,"input",14),A.Rb(),A.Sb(34,"mat-form-field",15),A.Sb(35,"mat-label"),A.Dc(36,"Comprimento (cm)"),A.Rb(),A.Nb(37,"input",16),A.Rb(),A.Rb(),A.Sb(38,"div",12),A.Sb(39,"mat-form-field",13),A.Sb(40,"mat-label"),A.Dc(41,"Altura (cm)"),A.Rb(),A.Nb(42,"input",17),A.Rb(),A.Sb(43,"mat-form-field",15),A.Sb(44,"mat-label"),A.Dc(45,"Largura (cm)"),A.Rb(),A.Nb(46,"input",18),A.Rb(),A.Rb(),A.Rb(),A.Rb()),2&t&&(A.kc("ngIf",e.loading),A.Bb(3),A.Fc("",e.id?"Editar":"Adicionar"," Op\xe7\xe3o"),A.Bb(3),A.Fc(" ",e.id?"Salvar edi\xe7\xe3o":"Adicionar"," "),A.Bb(1),A.kc("formGroup",e.formGroup),A.Bb(10),A.kc("value",!0),A.Bb(2),A.kc("value",!1))},directives:[a.l,r.c,r.b,s.a,d.w,d.p,d.j,V.c,V.f,m.b,d.c,d.u,d.o,d.h,S.a,g.n,r.a,d.s,c.a],styles:[".list[_ngcontent-%COMP%]{min-width:220px}"]}),t})();const tt=[{path:"",component:_},{path:"add",component:Y},{path:"edit/:id",component:Y}];let et=(()=>{class t{}return t.\u0275mod=A.Kb({type:t}),t.\u0275inj=A.Jb({factory:function(e){return new(e||t)},imports:[[x.e.forChild(tt)],x.e]}),t})();var it=i("hyGo");let at=(()=>{class t{}return t.\u0275mod=A.Kb({type:t}),t.\u0275inj=A.Jb({factory:function(e){return new(e||t)},imports:[[a.c,et,r.f,o.a,n.b,c.b,l.b,b.c,s.b,d.t,m.c,u.b,p.a,h.c,f.d,g.o,S.b,v.k,R.b,D.a,w.a,C.b,B.b,y.b,k.a,N.b,it.a]]}),t})()}}]);