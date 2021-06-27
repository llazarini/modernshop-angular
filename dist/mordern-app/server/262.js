exports.id=262,exports.ids=[262],exports.modules={2262:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CategoriesModule:()=>CategoriesModule});var common=__webpack_require__(2057),router=__webpack_require__(2636),core=__webpack_require__(4788),http=__webpack_require__(8497),environment=__webpack_require__(2340);class CategoryService{constructor(httpClient){this.httpClient=httpClient}getAll(page){let httpParams=new http.LE;return page&&(httpParams=httpParams.append("page",page.toString())),this.httpClient.get(environment.N.baseAuthUrl+"/categories/get-all",{params:httpParams})}update(data){return this.httpClient.put(environment.N.baseAuthUrl+"/categories/update/"+data.id,data)}store(data){return this.httpClient.post(environment.N.baseAuthUrl+"/categories/store",data)}dataprovider(){return this.httpClient.get(environment.N.baseAuthUrl+"/categories/dataprovider/",{})}get(id){return this.httpClient.get(environment.N.baseAuthUrl+"/categories/get/"+id,{})}delete(id){return this.httpClient.delete(environment.N.baseAuthUrl+"/categories/delete/"+id,{})}}CategoryService.\u0275fac=function CategoryService_Factory(t){return new(t||CategoryService)(core.LFG(http.eN))},CategoryService.\u0275prov=core.Yz7({token:CategoryService,factory:CategoryService.\u0275fac,providedIn:"root"});var alert_service=__webpack_require__(1418),flex=__webpack_require__(2257),fesm2015_button=__webpack_require__(2895),table=__webpack_require__(8735),sort=__webpack_require__(857),paginator=__webpack_require__(3487),progress_bar=__webpack_require__(3985);function CategoriesComponent_mat_progress_bar_0_Template(rf,ctx){1&rf&&core._UZ(0,"mat-progress-bar",20)}function CategoriesComponent_th_10_Template(rf,ctx){1&rf&&(core.TgZ(0,"th",21),core._uU(1,"#"),core.qZA())}function CategoriesComponent_td_11_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"td",22),core._uU(1),core.qZA()),2&rf){const row_r15=ctx.$implicit;core.xp6(1),core.Oqu(row_r15.id)}}function CategoriesComponent_th_13_Template(rf,ctx){1&rf&&(core.TgZ(0,"th",23),core._uU(1,"Nome"),core.qZA())}function CategoriesComponent_td_14_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"td",22),core._uU(1),core.qZA()),2&rf){const row_r16=ctx.$implicit;core.xp6(1),core.Oqu(row_r16.name)}}function CategoriesComponent_th_16_Template(rf,ctx){1&rf&&(core.TgZ(0,"th",23),core._uU(1,"Slug"),core.qZA())}function CategoriesComponent_td_17_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"td",22),core._uU(1),core.qZA()),2&rf){const row_r17=ctx.$implicit;core.xp6(1),core.Oqu(row_r17.slug)}}function CategoriesComponent_th_19_Template(rf,ctx){1&rf&&(core.TgZ(0,"th",23),core._uU(1,"C\xf3digo / Slug"),core.qZA())}function CategoriesComponent_td_20_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"td",22),core._uU(1),core.qZA()),2&rf){const row_r18=ctx.$implicit;core.xp6(1),core.Oqu(row_r18.slug)}}function CategoriesComponent_th_22_Template(rf,ctx){1&rf&&(core.TgZ(0,"th",23),core._uU(1,"Descri\xe7\xe3o"),core.qZA())}function CategoriesComponent_td_23_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"td",22),core._uU(1),core.qZA()),2&rf){const row_r19=ctx.$implicit;core.xp6(1),core.Oqu(row_r19.description)}}function CategoriesComponent_th_25_Template(rf,ctx){1&rf&&(core.TgZ(0,"th",24),core._uU(1,"A\xe7\xf5es"),core.qZA())}function CategoriesComponent_td_26_Template(rf,ctx){if(1&rf){const _r22=core.EpF();core.TgZ(0,"td",22),core.TgZ(1,"button",25),core._UZ(2,"i",26),core._uU(3," Editar "),core.qZA(),core.TgZ(4,"button",27),core.NdJ("click",function CategoriesComponent_td_26_Template_button_click_4_listener(){const row_r20=core.CHM(_r22).$implicit;return core.oxw().deleteConfirm(row_r20)}),core._UZ(5,"i",28),core._uU(6," Remover "),core.qZA(),core.qZA()}if(2&rf){const row_r20=ctx.$implicit;core.xp6(1),core.Q6J("routerLink","edit/"+row_r20.id)}}function CategoriesComponent_tr_27_Template(rf,ctx){1&rf&&core._UZ(0,"tr",29)}function CategoriesComponent_tr_28_Template(rf,ctx){1&rf&&core._UZ(0,"tr",30)}class CategoriesComponent{constructor(categoryService,alertService){this.categoryService=categoryService,this.alertService=alertService,this.displayedColumns=["id","name","slug","actions"],this.loading=!0,this.page=0}ngOnInit(){this.getAll()}getAll(){this.loading=!0,this.categoryService.getAll(this.page+1).subscribe(response=>{this.dataSource=response.data,this.total=response.total}).add(()=>this.loading=!1)}delete(row){this.loading=!0,this.categoryService.delete(row.id).subscribe(response=>{this.getAll(),this.alertService.toast(response.message)}).add(()=>this.loading=!1)}pageChange(event){this.page=event.pageIndex,this.getAll()}deleteConfirm(row){this.alertService.confirm("Deseja remover o registro?","Remover").subscribe(response=>{response&&this.delete(row)})}}CategoriesComponent.\u0275fac=function CategoriesComponent_Factory(t){return new(t||CategoriesComponent)(core.Y36(CategoryService),core.Y36(alert_service.c))},CategoriesComponent.\u0275cmp=core.Xpm({type:CategoriesComponent,selectors:[["app-categories"]],decls:30,vars:6,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","column"],["fxLayoutAlign","space-between center"],[1,"margin-right"],["color","primary","mat-flat-button","","routerLink","add"],[1,"mdi","mdi-plus"],["fxFlex","","mat-table","","matSort","","matSortActive","id","matSortDisableClear","","matSortDirection","desc",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","width","50px",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","slug"],["matColumnDef","sku"],["matColumnDef","price"],["matColumnDef","actions","stickyEnd",""],["mat-header-cell","","class","actions",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageSize","10",3,"pageIndex","length","page"],["mode","indeterminate",1,"progress"],["mat-header-cell","","width","50px"],["mat-cell",""],["mat-header-cell",""],["mat-header-cell","",1,"actions"],["mat-button","","color","primary",3,"routerLink"],[1,"mdi","mdi-pencil"],["mat-button","","color","warn",3,"click"],[1,"mdi","mdi-close"],["mat-header-row",""],["mat-row",""]],template:function CategoriesComponent_Template(rf,ctx){1&rf&&(core.YNc(0,CategoriesComponent_mat_progress_bar_0_Template,1,0,"mat-progress-bar",0),core.TgZ(1,"div",1),core.TgZ(2,"div",2),core.TgZ(3,"h1",3),core._uU(4,"Categorias"),core.qZA(),core.TgZ(5,"button",4),core._UZ(6,"i",5),core._uU(7," Adicionar "),core.qZA(),core.qZA(),core.TgZ(8,"table",6),core.ynx(9,7),core.YNc(10,CategoriesComponent_th_10_Template,2,0,"th",8),core.YNc(11,CategoriesComponent_td_11_Template,2,1,"td",9),core.BQk(),core.ynx(12,10),core.YNc(13,CategoriesComponent_th_13_Template,2,0,"th",11),core.YNc(14,CategoriesComponent_td_14_Template,2,1,"td",9),core.BQk(),core.ynx(15,12),core.YNc(16,CategoriesComponent_th_16_Template,2,0,"th",11),core.YNc(17,CategoriesComponent_td_17_Template,2,1,"td",9),core.BQk(),core.ynx(18,13),core.YNc(19,CategoriesComponent_th_19_Template,2,0,"th",11),core.YNc(20,CategoriesComponent_td_20_Template,2,1,"td",9),core.BQk(),core.ynx(21,14),core.YNc(22,CategoriesComponent_th_22_Template,2,0,"th",11),core.YNc(23,CategoriesComponent_td_23_Template,2,1,"td",9),core.BQk(),core.ynx(24,15),core.YNc(25,CategoriesComponent_th_25_Template,2,0,"th",16),core.YNc(26,CategoriesComponent_td_26_Template,7,1,"td",9),core.BQk(),core.YNc(27,CategoriesComponent_tr_27_Template,1,0,"tr",17),core.YNc(28,CategoriesComponent_tr_28_Template,1,0,"tr",18),core.qZA(),core.TgZ(29,"mat-paginator",19),core.NdJ("page",function CategoriesComponent_Template_mat_paginator_page_29_listener($event){return ctx.pageChange($event)}),core.qZA(),core.qZA()),2&rf&&(core.Q6J("ngIf",ctx.loading),core.xp6(8),core.Q6J("dataSource",ctx.dataSource),core.xp6(19),core.Q6J("matHeaderRowDef",ctx.displayedColumns),core.xp6(1),core.Q6J("matRowDefColumns",ctx.displayedColumns),core.xp6(1),core.Q6J("pageIndex",ctx.page)("length",ctx.total))},directives:[common.O5,flex.xw,flex.Wh,fesm2015_button.lW,router.rH,table.BZ,flex.yH,sort.YE,table.w1,table.fO,table.Dz,table.as,table.nj,paginator.NW,progress_bar.pW,table.ge,table.ev,table.XQ,table.Gk],styles:[""]});var fesm2015_forms=__webpack_require__(4751),TokenHelper=__webpack_require__(2029),IFile=__webpack_require__(7090),form_field=__webpack_require__(6833),input=__webpack_require__(6113),file_upload_component=__webpack_require__(929);function AddEditComponent_mat_progress_bar_0_Template(rf,ctx){1&rf&&core._UZ(0,"mat-progress-bar",11)}class AddEditComponent{constructor(formBuilder=null,router,activatedRoute,alertService,categoryService){this.formBuilder=formBuilder,this.router=router,this.activatedRoute=activatedRoute,this.alertService=alertService,this.categoryService=categoryService,this.id=null,this.token=TokenHelper.v.generate(),this.fileType=IFile.r.category,this.formGroup=this.formBuilder.group({request_token:[this.token],id:[null],name:[null,[fesm2015_forms.kI.required,fesm2015_forms.kI.maxLength(255)]],description:[null],slug:[null]})}ngOnInit(){this.id=this.activatedRoute.snapshot.params.id,this.id&&this.get(),this.dataprovider()}dataprovider(){this.loading=!0,this.categoryService.dataprovider().subscribe(response=>{}).add(()=>this.loading=!1)}submit(){this.loading||(this.id?this.update():this.store())}store(){this.loading=!0,this.categoryService.store(this.formGroup.value).subscribe(response=>{this.router.navigate(["/","auth","categories"]),this.alertService.toast(response.message)},error=>{this.alertService.treatError(error)}).add(()=>this.loading=!1)}update(){this.loading=!0,this.categoryService.update(this.formGroup.value).subscribe(response=>{this.router.navigate(["/","auth","categories"]),this.alertService.toast(response.message)},error=>{this.alertService.treatError(error)}).add(()=>this.loading=!1)}get(){this.loading=!0,this.categoryService.get(this.id).subscribe(response=>{this.formGroup.patchValue(response)}).add(()=>this.loading=!1)}}AddEditComponent.\u0275fac=function AddEditComponent_Factory(t){return new(t||AddEditComponent)(core.Y36(fesm2015_forms.qu),core.Y36(router.F0),core.Y36(router.gz),core.Y36(alert_service.c),core.Y36(CategoryService))},AddEditComponent.\u0275cmp=core.Xpm({type:AddEditComponent,selectors:[["app-add-edit"]],decls:22,vars:8,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between start"],["color","primary","mat-flat-button","",3,"click"],[1,"mdi","mdi-plus"],[1,"common-form","padding",3,"formGroup","submit"],["fxLayout","column",1,"common-form-max"],["appearance","outline"],["matInput","","required","","formControlName","name"],["matInput","","required","","formControlName","slug"],["matInput","","required","","formControlName","description"],[3,"multiple","type","id","token"],["mode","indeterminate",1,"progress"]],template:function AddEditComponent_Template(rf,ctx){1&rf&&(core.YNc(0,AddEditComponent_mat_progress_bar_0_Template,1,0,"mat-progress-bar",0),core.TgZ(1,"div",1),core.TgZ(2,"h1"),core._uU(3),core.qZA(),core.TgZ(4,"button",2),core.NdJ("click",function AddEditComponent_Template_button_click_4_listener(){return ctx.submit()}),core._UZ(5,"i",3),core._uU(6),core.qZA(),core.qZA(),core.TgZ(7,"form",4),core.NdJ("submit",function AddEditComponent_Template_form_submit_7_listener(){return ctx.submit()}),core.TgZ(8,"div",5),core.TgZ(9,"mat-form-field",6),core.TgZ(10,"mat-label"),core._uU(11,"Nome da Categoria"),core.qZA(),core._UZ(12,"input",7),core.qZA(),core.TgZ(13,"mat-form-field",6),core.TgZ(14,"mat-label"),core._uU(15,"C\xf3digo (Slug)"),core.qZA(),core._UZ(16,"input",8),core.qZA(),core.TgZ(17,"mat-form-field",6),core.TgZ(18,"mat-label"),core._uU(19,"Descri\xe7\xe3o"),core.qZA(),core._UZ(20,"textarea",9),core.qZA(),core._UZ(21,"app-file-upload",10),core.qZA(),core.qZA()),2&rf&&(core.Q6J("ngIf",ctx.loading),core.xp6(3),core.hij("",ctx.id?"Editar":"Adicionar"," Categoria"),core.xp6(3),core.hij(" ",ctx.id?"Salvar edi\xe7\xe3o":"Adicionar"," "),core.xp6(1),core.Q6J("formGroup",ctx.formGroup),core.xp6(14),core.Q6J("multiple",!1)("type",ctx.fileType)("id",ctx.id)("token",ctx.token))},directives:[common.O5,flex.xw,flex.Wh,fesm2015_button.lW,fesm2015_forms._Y,fesm2015_forms.JL,fesm2015_forms.sg,form_field.KE,form_field.hX,input.Nt,fesm2015_forms.Fj,fesm2015_forms.Q7,fesm2015_forms.JJ,fesm2015_forms.u,file_upload_component.Y,progress_bar.pW],styles:[".list[_ngcontent-%COMP%]{min-width:220px}"]});const routes=[{path:"",component:CategoriesComponent},{path:"add",component:AddEditComponent},{path:"edit/:id",component:AddEditComponent}];class CategoriesRoutingModule{}CategoriesRoutingModule.\u0275fac=function CategoriesRoutingModule_Factory(t){return new(t||CategoriesRoutingModule)},CategoriesRoutingModule.\u0275mod=core.oAB({type:CategoriesRoutingModule}),CategoriesRoutingModule.\u0275inj=core.cJS({imports:[[router.Bz.forChild(routes)],router.Bz]});var expansion=__webpack_require__(5490),badge=__webpack_require__(3335),progress_spinner=__webpack_require__(9453),card=__webpack_require__(7639),icon=__webpack_require__(9356),slide_toggle=__webpack_require__(3624),list=__webpack_require__(5363),tabs=__webpack_require__(859),fesm2015_core=__webpack_require__(7935),fesm2015_select=__webpack_require__(1260),address_module=__webpack_require__(1154),contact_module=__webpack_require__(6602),ngx_mask=__webpack_require__(6238),tooltip=__webpack_require__(4855),autocomplete=__webpack_require__(296),ngx_mat_select_search=__webpack_require__(11),products_module=__webpack_require__(178);class CategoriesModule{}CategoriesModule.\u0275fac=function CategoriesModule_Factory(t){return new(t||CategoriesModule)},CategoriesModule.\u0275mod=core.oAB({type:CategoriesModule}),CategoriesModule.\u0275inj=core.cJS({imports:[[common.ez,CategoriesRoutingModule,flex.ae,expansion.To,badge.g,progress_bar.Cv,progress_spinner.Cq,card.QW,fesm2015_button.ot,fesm2015_forms.UX,input.c,icon.Ps,slide_toggle.rP,list.ie,tabs.Nh,fesm2015_core.Ng,fesm2015_select.LD,table.p0,sort.JX,address_module.f,contact_module.w,paginator.TU,ngx_mask.yI,tooltip.AV,autocomplete.Bb,ngx_mat_select_search.Co,products_module.ProductsModule]]})}};