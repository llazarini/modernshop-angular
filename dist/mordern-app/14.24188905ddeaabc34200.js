(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9fvr":function(t,e,i){"use strict";i.r(e),i.d(e,"AttributesModule",(function(){return tt}));var a=i("ofXK"),r=i("XiUz"),o=i("7EHt"),n=i("TU8p"),s=i("bv9b"),c=i("Xa2L"),l=i("Wp6s"),b=i("bTqV"),u=i("3Pt+"),d=i("qFsG"),m=i("NFeN"),h=i("1jcm"),p=i("MutI"),f=i("wZkO"),g=i("FKr1"),S=i("d3UM"),v=i("+0xr"),D=i("Dh3D"),R=i("Xx9n"),w=i("g1/W"),C=i("M9IT"),y=i("tmjD"),k=i("Qu3c"),B=i("/1cH"),A=i("WJ5W"),x=i("zg7/"),I=i("tyNb"),N=i("fXoL"),M=i("tk/3"),G=i("AytR");let L=(()=>{class t{constructor(t){this.httpClient=t}getAll(t){let e=new M.e;return t&&(e=e.append("page",t.toString())),this.httpClient.get(G.a.baseAuthUrl+"/attributes/get-all",{params:e})}update(t){return this.httpClient.put(G.a.baseAuthUrl+"/attributes/update/"+t.id,t)}store(t){return this.httpClient.post(G.a.baseAuthUrl+"/attributes/store",t)}get(t){return this.httpClient.get(G.a.baseAuthUrl+"/attributes/get/"+t,{})}delete(t){return this.httpClient.delete(G.a.baseAuthUrl+"/attributes/delete/"+t,{})}}return t.\u0275fac=function(e){return new(e||t)(N.Wb(M.b))},t.\u0275prov=N.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var j=i("kyzu");function E(t,e){1&t&&N.Nb(0,"mat-progress-bar",18)}function U(t,e){1&t&&(N.Sb(0,"th",19),N.Dc(1,"#"),N.Rb())}function H(t,e){if(1&t&&(N.Sb(0,"td",20),N.Dc(1),N.Rb()),2&t){const t=e.$implicit;N.Bb(1),N.Ec(t.id)}}function P(t,e){1&t&&(N.Sb(0,"th",21),N.Dc(1,"Nome"),N.Rb())}function Q(t,e){if(1&t&&(N.Sb(0,"td",20),N.Dc(1),N.Rb()),2&t){const t=e.$implicit;N.Bb(1),N.Ec(t.name)}}function F(t,e){1&t&&(N.Sb(0,"th",21),N.Dc(1,"Descri\xe7\xe3o"),N.Rb())}function q(t,e){if(1&t&&(N.Sb(0,"td",20),N.Dc(1),N.Rb()),2&t){const t=e.$implicit;N.Bb(1),N.Ec(t.description)}}function J(t,e){1&t&&(N.Sb(0,"th",22),N.Dc(1,"A\xe7\xf5es"),N.Rb())}function T(t,e){if(1&t){const t=N.Tb();N.Sb(0,"td",20),N.Sb(1,"button",23),N.Sb(2,"mat-icon",24),N.Dc(3,"edit"),N.Rb(),N.Dc(4," Editar "),N.Rb(),N.Sb(5,"button",25),N.ac("click",(function(){N.sc(t);const i=e.$implicit;return N.ec().deleteConfirm(i)})),N.Sb(6,"mat-icon",24),N.Dc(7,"remove_circle_outline"),N.Rb(),N.Dc(8," Remover "),N.Rb(),N.Rb()}if(2&t){const t=e.$implicit;N.Bb(1),N.kc("routerLink","edit/"+t.id)}}function W(t,e){1&t&&N.Nb(0,"tr",26)}function X(t,e){1&t&&N.Nb(0,"tr",27)}let $=(()=>{class t{constructor(t,e){this.attributeService=t,this.alertService=e,this.displayedColumns=["id","name","description","actions"],this.loading=!0,this.page=0}ngOnInit(){this.getAll()}getAll(){this.loading=!0,this.attributeService.getAll(this.page+1).subscribe(t=>{this.dataSource=t.data,this.total=t.total}).add(()=>this.loading=!1)}delete(t){this.loading=!0,this.attributeService.delete(t.id).subscribe(t=>{this.getAll(),this.alertService.toast(t.message)}).add(()=>this.loading=!1)}pageChange(t){this.page=t.pageIndex,this.getAll()}deleteConfirm(t){this.alertService.confirm("Deseja remover o registro?","Remover").subscribe(e=>{e&&this.delete(t)})}}return t.\u0275fac=function(e){return new(e||t)(N.Mb(L),N.Mb(j.a))},t.\u0275cmp=N.Gb({type:t,selectors:[["app-attributes"]],decls:24,vars:6,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","column"],["fxLayoutAlign","space-between center"],[1,"margin-right"],["color","primary","mat-flat-button","","routerLink","add"],[1,"mdi","mdi-plus"],["fxFlex","","mat-table","","matSort","","matSortActive","id","matSortDisableClear","","matSortDirection","desc",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","width","50px",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","description"],["matColumnDef","actions","stickyEnd",""],["mat-header-cell","","class","actions",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageSize","10",3,"pageIndex","length","page"],["mode","indeterminate",1,"progress"],["mat-header-cell","","width","50px"],["mat-cell",""],["mat-header-cell",""],["mat-header-cell","",1,"actions"],["mat-button","","color","primary",3,"routerLink"],["inline","",1,"small"],["mat-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(N.Bc(0,E,1,0,"mat-progress-bar",0),N.Sb(1,"div",1),N.Sb(2,"div",2),N.Sb(3,"h1",3),N.Dc(4,"Atributos"),N.Rb(),N.Sb(5,"button",4),N.Nb(6,"i",5),N.Dc(7," Adicionar "),N.Rb(),N.Rb(),N.Sb(8,"table",6),N.Qb(9,7),N.Bc(10,U,2,0,"th",8),N.Bc(11,H,2,1,"td",9),N.Pb(),N.Qb(12,10),N.Bc(13,P,2,0,"th",11),N.Bc(14,Q,2,1,"td",9),N.Pb(),N.Qb(15,12),N.Bc(16,F,2,0,"th",11),N.Bc(17,q,2,1,"td",9),N.Pb(),N.Qb(18,13),N.Bc(19,J,2,0,"th",14),N.Bc(20,T,9,1,"td",9),N.Pb(),N.Bc(21,W,1,0,"tr",15),N.Bc(22,X,1,0,"tr",16),N.Rb(),N.Sb(23,"mat-paginator",17),N.ac("page",(function(t){return e.pageChange(t)})),N.Rb(),N.Rb()),2&t&&(N.kc("ngIf",e.loading),N.Bb(8),N.kc("dataSource",e.dataSource),N.Bb(13),N.kc("matHeaderRowDef",e.displayedColumns),N.Bb(1),N.kc("matRowDefColumns",e.displayedColumns),N.Bb(1),N.kc("pageIndex",e.page)("length",e.total))},directives:[a.l,r.c,r.b,b.a,I.c,v.j,r.a,D.a,v.c,v.e,v.b,v.g,v.i,C.a,s.a,v.d,v.a,m.a,v.f,v.h],styles:[""]}),t})();var z=i("sAQj"),K=i("Qj20"),O=i("kmnG");function _(t,e){1&t&&N.Nb(0,"mat-progress-bar",9)}let V=(()=>{class t{constructor(t=null,e,i,a,r){this.formBuilder=t,this.router=e,this.activatedRoute=i,this.alertService=a,this.attributeService=r,this.id=null,this.token=z.a.generate(),this.fileType=K.a.category,this.formGroup=this.formBuilder.group({id:[null],name:[null,[u.v.required,u.v.maxLength(255)]],description:[null],slug:[null]})}ngOnInit(){this.id=this.activatedRoute.snapshot.params.id,this.id&&this.get()}submit(){this.loading||(this.id?this.update():this.store())}store(){this.loading=!0,this.attributeService.store(this.formGroup.value).subscribe(t=>{this.router.navigate(["/","auth","attributes"]),this.alertService.toast(t.message)},t=>{this.alertService.treatError(t)}).add(()=>this.loading=!1)}update(){this.loading=!0,this.attributeService.update(this.formGroup.value).subscribe(t=>{this.router.navigate(["/","auth","attributes"]),this.alertService.toast(t.message)},t=>{this.alertService.treatError(t)}).add(()=>this.loading=!1)}get(){this.loading=!0,this.attributeService.get(this.id).subscribe(t=>{this.formGroup.patchValue(t)}).add(()=>this.loading=!1)}}return t.\u0275fac=function(e){return new(e||t)(N.Mb(u.e),N.Mb(I.b),N.Mb(I.a),N.Mb(j.a),N.Mb(L))},t.\u0275cmp=N.Gb({type:t,selectors:[["app-add-edit"]],decls:17,vars:4,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between start"],["color","primary","mat-flat-button","",3,"click"],[1,"mdi","mdi-plus"],[1,"common-form","padding",3,"formGroup","submit"],["fxLayout","column",1,"common-form-max"],["appearance","outline"],["matInput","","required","","formControlName","name"],["matInput","","required","","formControlName","description"],["mode","indeterminate",1,"progress"]],template:function(t,e){1&t&&(N.Bc(0,_,1,0,"mat-progress-bar",0),N.Sb(1,"div",1),N.Sb(2,"h1"),N.Dc(3),N.Rb(),N.Sb(4,"button",2),N.ac("click",(function(){return e.submit()})),N.Nb(5,"i",3),N.Dc(6),N.Rb(),N.Rb(),N.Sb(7,"form",4),N.ac("submit",(function(){return e.submit()})),N.Sb(8,"div",5),N.Sb(9,"mat-form-field",6),N.Sb(10,"mat-label"),N.Dc(11,"Nome da Categoria"),N.Rb(),N.Nb(12,"input",7),N.Rb(),N.Sb(13,"mat-form-field",6),N.Sb(14,"mat-label"),N.Dc(15,"Descri\xe7\xe3o"),N.Rb(),N.Nb(16,"textarea",8),N.Rb(),N.Rb(),N.Rb()),2&t&&(N.kc("ngIf",e.loading),N.Bb(3),N.Fc("",e.id?"Editar":"Adicionar"," Atributo"),N.Bb(3),N.Fc(" ",e.id?"Salvar edi\xe7\xe3o":"Adicionar"," "),N.Bb(1),N.kc("formGroup",e.formGroup))},directives:[a.l,r.c,r.b,b.a,u.w,u.p,u.j,O.c,O.f,d.b,u.c,u.u,u.o,u.h,s.a],styles:[".list[_ngcontent-%COMP%]{min-width:220px}"]}),t})();const Z=[{path:"",component:$},{path:"add",component:V},{path:"edit/:id",component:V}];let Y=(()=>{class t{}return t.\u0275mod=N.Kb({type:t}),t.\u0275inj=N.Jb({factory:function(e){return new(e||t)},imports:[[I.e.forChild(Z)],I.e]}),t})(),tt=(()=>{class t{}return t.\u0275mod=N.Kb({type:t}),t.\u0275inj=N.Jb({factory:function(e){return new(e||t)},imports:[[a.c,Y,r.f,o.a,n.b,s.b,c.b,l.c,b.b,u.t,d.c,m.b,h.a,p.b,f.d,g.o,S.b,v.k,D.b,R.a,w.a,C.b,y.b,k.b,B.a,A.b,x.ProductsModule]]}),t})()}}]);