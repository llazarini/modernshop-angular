exports.id=606,exports.ids=[606],exports.modules={4606:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OptionsModule:()=>OptionsModule});var common=__webpack_require__(2057),flex=__webpack_require__(2257),expansion=__webpack_require__(5490),badge=__webpack_require__(3335),progress_bar=__webpack_require__(3985),progress_spinner=__webpack_require__(9453),card=__webpack_require__(7639),fesm2015_button=__webpack_require__(2895),fesm2015_forms=__webpack_require__(4751),input=__webpack_require__(6113),icon=__webpack_require__(9356),slide_toggle=__webpack_require__(3624),list=__webpack_require__(5363),tabs=__webpack_require__(859),core=__webpack_require__(7935),fesm2015_select=__webpack_require__(1260),table=__webpack_require__(8735),sort=__webpack_require__(857),address_module=__webpack_require__(1154),contact_module=__webpack_require__(6602),paginator=__webpack_require__(3487),ngx_mask=__webpack_require__(6238),tooltip=__webpack_require__(4855),autocomplete=__webpack_require__(296),ngx_mat_select_search=__webpack_require__(11),router=__webpack_require__(2636),fesm2015_core=__webpack_require__(4788),http=__webpack_require__(8497),environment=__webpack_require__(2340);class OptionService{constructor(httpClient){this.httpClient=httpClient}getAll(page){let httpParams=new http.LE;return page&&(httpParams=httpParams.append("page",page.toString())),this.httpClient.get(environment.N.baseAuthUrl+"/options/get-all",{params:httpParams})}update(data){return this.httpClient.put(environment.N.baseAuthUrl+"/options/update/"+data.id,data)}store(data){return this.httpClient.post(environment.N.baseAuthUrl+"/options/store",data)}dataprovider(){return this.httpClient.get(environment.N.baseAuthUrl+"/options/dataprovider/",{})}get(id){return this.httpClient.get(environment.N.baseAuthUrl+"/options/get/"+id,{})}delete(id){return this.httpClient.delete(environment.N.baseAuthUrl+"/options/delete/"+id,{})}}OptionService.\u0275fac=function OptionService_Factory(t){return new(t||OptionService)(fesm2015_core.LFG(http.eN))},OptionService.\u0275prov=fesm2015_core.Yz7({token:OptionService,factory:OptionService.\u0275fac,providedIn:"root"});var alert_service=__webpack_require__(1418),price_pipe=__webpack_require__(7424);function OptionsComponent_mat_progress_bar_0_Template(rf,ctx){1&rf&&fesm2015_core._UZ(0,"mat-progress-bar",21)}function OptionsComponent_th_10_Template(rf,ctx){1&rf&&(fesm2015_core.TgZ(0,"th",22),fesm2015_core._uU(1,"#"),fesm2015_core.qZA())}function OptionsComponent_td_11_Template(rf,ctx){if(1&rf&&(fesm2015_core.TgZ(0,"td",23),fesm2015_core._uU(1),fesm2015_core.qZA()),2&rf){const row_r17=ctx.$implicit;fesm2015_core.xp6(1),fesm2015_core.Oqu(row_r17.id)}}function OptionsComponent_th_13_Template(rf,ctx){1&rf&&(fesm2015_core.TgZ(0,"th",24),fesm2015_core._uU(1,"Atributo"),fesm2015_core.qZA())}function OptionsComponent_td_14_Template(rf,ctx){if(1&rf&&(fesm2015_core.TgZ(0,"td",23),fesm2015_core._uU(1),fesm2015_core.qZA()),2&rf){const row_r18=ctx.$implicit;fesm2015_core.xp6(1),fesm2015_core.Oqu(null==row_r18.attribute?null:row_r18.attribute.name)}}function OptionsComponent_th_16_Template(rf,ctx){1&rf&&(fesm2015_core.TgZ(0,"th",24),fesm2015_core._uU(1,"Nome"),fesm2015_core.qZA())}function OptionsComponent_td_17_Template(rf,ctx){if(1&rf&&(fesm2015_core.TgZ(0,"td",23),fesm2015_core._uU(1),fesm2015_core.qZA()),2&rf){const row_r19=ctx.$implicit;fesm2015_core.xp6(1),fesm2015_core.Oqu(row_r19.name)}}function OptionsComponent_th_19_Template(rf,ctx){1&rf&&(fesm2015_core.TgZ(0,"th",24),fesm2015_core._uU(1,"Pre\xe7o"),fesm2015_core.qZA())}function OptionsComponent_td_20_Template(rf,ctx){if(1&rf&&(fesm2015_core.TgZ(0,"td",23),fesm2015_core._uU(1),fesm2015_core.ALo(2,"price"),fesm2015_core.TgZ(3,"span",25),fesm2015_core._uU(4),fesm2015_core.qZA(),fesm2015_core.qZA()),2&rf){const row_r20=ctx.$implicit;fesm2015_core.xp6(1),fesm2015_core.hij(" ",fesm2015_core.lcZ(2,2,row_r20.price)," "),fesm2015_core.xp6(3),fesm2015_core.Oqu(row_r20.type?"(+) Adicional":"(-) Remover")}}function OptionsComponent_th_22_Template(rf,ctx){1&rf&&(fesm2015_core.TgZ(0,"th",24),fesm2015_core._uU(1,"Gramas"),fesm2015_core.qZA())}function OptionsComponent_td_23_Template(rf,ctx){if(1&rf&&(fesm2015_core.TgZ(0,"td",23),fesm2015_core._uU(1),fesm2015_core.qZA()),2&rf){const row_r21=ctx.$implicit;fesm2015_core.xp6(1),fesm2015_core.hij(" ",row_r21.weight," gramas ")}}function OptionsComponent_th_25_Template(rf,ctx){1&rf&&(fesm2015_core.TgZ(0,"th",24),fesm2015_core._uU(1,"Tamanho"),fesm2015_core.qZA())}function OptionsComponent_td_26_Template(rf,ctx){if(1&rf&&(fesm2015_core.TgZ(0,"td",23),fesm2015_core._uU(1),fesm2015_core.qZA()),2&rf){const row_r22=ctx.$implicit;fesm2015_core.xp6(1),fesm2015_core.lnq(" ",row_r22.width," x ",row_r22.length," x ",row_r22.height," ")}}function OptionsComponent_th_28_Template(rf,ctx){1&rf&&(fesm2015_core.TgZ(0,"th",26),fesm2015_core._uU(1,"A\xe7\xf5es"),fesm2015_core.qZA())}function OptionsComponent_td_29_Template(rf,ctx){if(1&rf){const _r25=fesm2015_core.EpF();fesm2015_core.TgZ(0,"td",23),fesm2015_core.TgZ(1,"button",27),fesm2015_core._UZ(2,"i",28),fesm2015_core._uU(3," Editar "),fesm2015_core.qZA(),fesm2015_core.TgZ(4,"button",29),fesm2015_core.NdJ("click",function OptionsComponent_td_29_Template_button_click_4_listener(){const row_r23=fesm2015_core.CHM(_r25).$implicit;return fesm2015_core.oxw().deleteConfirm(row_r23)}),fesm2015_core._UZ(5,"i",30),fesm2015_core._uU(6," Remover "),fesm2015_core.qZA(),fesm2015_core.qZA()}if(2&rf){const row_r23=ctx.$implicit;fesm2015_core.xp6(1),fesm2015_core.Q6J("routerLink","edit/"+row_r23.id)}}function OptionsComponent_tr_30_Template(rf,ctx){1&rf&&fesm2015_core._UZ(0,"tr",31)}function OptionsComponent_tr_31_Template(rf,ctx){1&rf&&fesm2015_core._UZ(0,"tr",32)}class OptionsComponent{constructor(optionService,alertService){this.optionService=optionService,this.alertService=alertService,this.displayedColumns=["id","name","attribute","price","weight","size","actions"],this.loading=!0,this.page=0}ngOnInit(){this.getAll()}getAll(){this.loading=!0,this.optionService.getAll(this.page+1).subscribe(response=>{this.dataSource=response.data,this.total=response.total}).add(()=>this.loading=!1)}delete(row){this.loading=!0,this.optionService.delete(row.id).subscribe(response=>{this.getAll(),this.alertService.toast(response.message)}).add(()=>this.loading=!1)}pageChange(event){this.page=event.pageIndex,this.getAll()}deleteConfirm(row){this.alertService.confirm("Deseja remover o registro?","Remover").subscribe(response=>{response&&this.delete(row)})}}OptionsComponent.\u0275fac=function OptionsComponent_Factory(t){return new(t||OptionsComponent)(fesm2015_core.Y36(OptionService),fesm2015_core.Y36(alert_service.c))},OptionsComponent.\u0275cmp=fesm2015_core.Xpm({type:OptionsComponent,selectors:[["app-options"]],decls:33,vars:6,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","column"],["fxLayoutAlign","space-between center"],[1,"margin-right"],["color","primary","mat-flat-button","","routerLink","add"],[1,"mdi","mdi-plus"],["fxFlex","","mat-table","","matSort","","matSortActive","id","matSortDisableClear","","matSortDirection","desc",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","width","50px",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","attribute"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","price"],["matColumnDef","weight"],["matColumnDef","size"],["matColumnDef","actions","stickyEnd",""],["mat-header-cell","","class","actions",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageSize","10",3,"pageIndex","length","page"],["mode","indeterminate",1,"progress"],["mat-header-cell","","width","50px"],["mat-cell",""],["mat-header-cell",""],[1,"muted"],["mat-header-cell","",1,"actions"],["mat-button","","color","primary",3,"routerLink"],[1,"mdi","mdi-pencil"],["mat-button","","color","warn",3,"click"],[1,"mdi","mdi-close"],["mat-header-row",""],["mat-row",""]],template:function OptionsComponent_Template(rf,ctx){1&rf&&(fesm2015_core.YNc(0,OptionsComponent_mat_progress_bar_0_Template,1,0,"mat-progress-bar",0),fesm2015_core.TgZ(1,"div",1),fesm2015_core.TgZ(2,"div",2),fesm2015_core.TgZ(3,"h1",3),fesm2015_core._uU(4,"Op\xe7\xf5es"),fesm2015_core.qZA(),fesm2015_core.TgZ(5,"button",4),fesm2015_core._UZ(6,"i",5),fesm2015_core._uU(7," Adicionar "),fesm2015_core.qZA(),fesm2015_core.qZA(),fesm2015_core.TgZ(8,"table",6),fesm2015_core.ynx(9,7),fesm2015_core.YNc(10,OptionsComponent_th_10_Template,2,0,"th",8),fesm2015_core.YNc(11,OptionsComponent_td_11_Template,2,1,"td",9),fesm2015_core.BQk(),fesm2015_core.ynx(12,10),fesm2015_core.YNc(13,OptionsComponent_th_13_Template,2,0,"th",11),fesm2015_core.YNc(14,OptionsComponent_td_14_Template,2,1,"td",9),fesm2015_core.BQk(),fesm2015_core.ynx(15,12),fesm2015_core.YNc(16,OptionsComponent_th_16_Template,2,0,"th",11),fesm2015_core.YNc(17,OptionsComponent_td_17_Template,2,1,"td",9),fesm2015_core.BQk(),fesm2015_core.ynx(18,13),fesm2015_core.YNc(19,OptionsComponent_th_19_Template,2,0,"th",11),fesm2015_core.YNc(20,OptionsComponent_td_20_Template,5,4,"td",9),fesm2015_core.BQk(),fesm2015_core.ynx(21,14),fesm2015_core.YNc(22,OptionsComponent_th_22_Template,2,0,"th",11),fesm2015_core.YNc(23,OptionsComponent_td_23_Template,2,1,"td",9),fesm2015_core.BQk(),fesm2015_core.ynx(24,15),fesm2015_core.YNc(25,OptionsComponent_th_25_Template,2,0,"th",11),fesm2015_core.YNc(26,OptionsComponent_td_26_Template,2,3,"td",9),fesm2015_core.BQk(),fesm2015_core.ynx(27,16),fesm2015_core.YNc(28,OptionsComponent_th_28_Template,2,0,"th",17),fesm2015_core.YNc(29,OptionsComponent_td_29_Template,7,1,"td",9),fesm2015_core.BQk(),fesm2015_core.YNc(30,OptionsComponent_tr_30_Template,1,0,"tr",18),fesm2015_core.YNc(31,OptionsComponent_tr_31_Template,1,0,"tr",19),fesm2015_core.qZA(),fesm2015_core.TgZ(32,"mat-paginator",20),fesm2015_core.NdJ("page",function OptionsComponent_Template_mat_paginator_page_32_listener($event){return ctx.pageChange($event)}),fesm2015_core.qZA(),fesm2015_core.qZA()),2&rf&&(fesm2015_core.Q6J("ngIf",ctx.loading),fesm2015_core.xp6(8),fesm2015_core.Q6J("dataSource",ctx.dataSource),fesm2015_core.xp6(22),fesm2015_core.Q6J("matHeaderRowDef",ctx.displayedColumns),fesm2015_core.xp6(1),fesm2015_core.Q6J("matRowDefColumns",ctx.displayedColumns),fesm2015_core.xp6(1),fesm2015_core.Q6J("pageIndex",ctx.page)("length",ctx.total))},directives:[common.O5,flex.xw,flex.Wh,fesm2015_button.lW,router.rH,table.BZ,flex.yH,sort.YE,table.w1,table.fO,table.Dz,table.as,table.nj,paginator.NW,progress_bar.pW,table.ge,table.ev,table.XQ,table.Gk],pipes:[price_pipe.d],styles:[""]});var IFile=__webpack_require__(7090),TokenHelper=__webpack_require__(2029),form_field=__webpack_require__(6833),file_upload_component=__webpack_require__(929);function AddEditComponent_mat_progress_bar_0_Template(rf,ctx){1&rf&&fesm2015_core._UZ(0,"mat-progress-bar",22)}function AddEditComponent_mat_option_17_Template(rf,ctx){if(1&rf&&(fesm2015_core.TgZ(0,"mat-option",11),fesm2015_core._uU(1),fesm2015_core.qZA()),2&rf){const attribute_r2=ctx.$implicit;fesm2015_core.Q6J("value",attribute_r2.id),fesm2015_core.xp6(1),fesm2015_core.Oqu(attribute_r2.name)}}class AddEditComponent{constructor(formBuilder=null,router,activatedRoute,alertService,optionService){this.formBuilder=formBuilder,this.router=router,this.activatedRoute=activatedRoute,this.alertService=alertService,this.optionService=optionService,this.loading=0,this.id=null,this.fileType=IFile.r.option,this.token=TokenHelper.v.generate(),this.formGroup=this.formBuilder.group({request_token:[this.token],id:[null],attribute_id:[null,fesm2015_forms.kI.required],name:[null,[fesm2015_forms.kI.required,fesm2015_forms.kI.maxLength(255)]],price:[null,[fesm2015_forms.kI.required]],type:[null,[fesm2015_forms.kI.required]],description:[null,[fesm2015_forms.kI.required]],weight:[null,[fesm2015_forms.kI.required]],height:[null,[fesm2015_forms.kI.required]],width:[null,[fesm2015_forms.kI.required]],length:[null,[fesm2015_forms.kI.required]]})}ngOnInit(){this.dataprovider(),this.id=this.activatedRoute.snapshot.params.id,this.id&&this.get()}submit(){this.loading||(this.id?this.update():this.store())}store(){this.loading+=1,this.optionService.store(this.formGroup.value).subscribe(response=>{this.router.navigate(["/","auth","options"]),this.alertService.toast(response.message)},error=>{this.alertService.treatError(error)}).add(()=>this.loading-=1)}update(){this.loading+=1,this.optionService.update(this.formGroup.value).subscribe(response=>{this.router.navigate(["/","auth","options"]),this.alertService.toast(response.message)},error=>{this.alertService.treatError(error)}).add(()=>this.loading-=1)}get(){this.loading+=1,this.optionService.get(this.id).subscribe(response=>{this.formGroup.patchValue(response)}).add(()=>this.loading-=1)}dataprovider(){this.loading+=1,this.optionService.dataprovider().subscribe(response=>{this.attributes=response.attributes}).add(()=>this.loading-=1)}}AddEditComponent.\u0275fac=function AddEditComponent_Factory(t){return new(t||AddEditComponent)(fesm2015_core.Y36(fesm2015_forms.qu),fesm2015_core.Y36(router.F0),fesm2015_core.Y36(router.gz),fesm2015_core.Y36(alert_service.c),fesm2015_core.Y36(OptionService))},AddEditComponent.\u0275cmp=fesm2015_core.Xpm({type:AddEditComponent,selectors:[["app-add-edit"]],decls:53,vars:11,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between start"],["color","primary","mat-flat-button","",3,"click"],[1,"mdi","mdi-plus"],[1,"common-form","padding",3,"formGroup","submit"],["fxLayout","column",1,"common-form-max"],["appearance","outline"],["matInput","","required","","formControlName","name"],["formControlName","attribute_id","required",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","type"],[3,"value"],["matInput","","required","","formControlName","price"],["matInput","","required","","formControlName","description"],["fxLayout","row"],["fxFlex","","appearance","outline"],["matInput","","required","","type","number","formControlName","weight"],["fxFlex","","appearance","outline",1,"margin-left"],["matInput","","required","","type","number","formControlName","width"],["matInput","","required","","type","number","formControlName","height"],["matInput","","required","","type","number","formControlName","length"],[3,"multiple","type","id","token"],["mode","indeterminate",1,"progress"]],template:function AddEditComponent_Template(rf,ctx){1&rf&&(fesm2015_core.YNc(0,AddEditComponent_mat_progress_bar_0_Template,1,0,"mat-progress-bar",0),fesm2015_core.TgZ(1,"div",1),fesm2015_core.TgZ(2,"h1"),fesm2015_core._uU(3),fesm2015_core.qZA(),fesm2015_core.TgZ(4,"button",2),fesm2015_core.NdJ("click",function AddEditComponent_Template_button_click_4_listener(){return ctx.submit()}),fesm2015_core._UZ(5,"i",3),fesm2015_core._uU(6),fesm2015_core.qZA(),fesm2015_core.qZA(),fesm2015_core.TgZ(7,"form",4),fesm2015_core.NdJ("submit",function AddEditComponent_Template_form_submit_7_listener(){return ctx.submit()}),fesm2015_core.TgZ(8,"div",5),fesm2015_core.TgZ(9,"mat-form-field",6),fesm2015_core.TgZ(10,"mat-label"),fesm2015_core._uU(11,"Nome da Op\xe7\xe3o"),fesm2015_core.qZA(),fesm2015_core._UZ(12,"input",7),fesm2015_core.qZA(),fesm2015_core.TgZ(13,"mat-form-field",6),fesm2015_core.TgZ(14,"mat-label"),fesm2015_core._uU(15,"Atributo relacionado"),fesm2015_core.qZA(),fesm2015_core.TgZ(16,"mat-select",8),fesm2015_core.YNc(17,AddEditComponent_mat_option_17_Template,2,2,"mat-option",9),fesm2015_core.qZA(),fesm2015_core.qZA(),fesm2015_core.TgZ(18,"mat-form-field",6),fesm2015_core.TgZ(19,"mat-label"),fesm2015_core._uU(20,"Tipo"),fesm2015_core.qZA(),fesm2015_core.TgZ(21,"mat-select",10),fesm2015_core.TgZ(22,"mat-option",11),fesm2015_core._uU(23,"Adicional (+)"),fesm2015_core.qZA(),fesm2015_core.TgZ(24,"mat-option",11),fesm2015_core._uU(25,"Adicional (-)"),fesm2015_core.qZA(),fesm2015_core.qZA(),fesm2015_core.qZA(),fesm2015_core.TgZ(26,"mat-form-field",6),fesm2015_core.TgZ(27,"mat-label"),fesm2015_core._uU(28,"Pre\xe7o"),fesm2015_core.qZA(),fesm2015_core._UZ(29,"input",12),fesm2015_core.qZA(),fesm2015_core.TgZ(30,"mat-form-field",6),fesm2015_core.TgZ(31,"mat-label"),fesm2015_core._uU(32,"Descri\xe7\xe3o"),fesm2015_core.qZA(),fesm2015_core._UZ(33,"textarea",13),fesm2015_core.qZA(),fesm2015_core.TgZ(34,"div",14),fesm2015_core.TgZ(35,"mat-form-field",15),fesm2015_core.TgZ(36,"mat-label"),fesm2015_core._uU(37,"Peso (g)"),fesm2015_core.qZA(),fesm2015_core._UZ(38,"input",16),fesm2015_core.qZA(),fesm2015_core.TgZ(39,"mat-form-field",17),fesm2015_core.TgZ(40,"mat-label"),fesm2015_core._uU(41,"Comprimento (cm)"),fesm2015_core.qZA(),fesm2015_core._UZ(42,"input",18),fesm2015_core.qZA(),fesm2015_core.qZA(),fesm2015_core.TgZ(43,"div",14),fesm2015_core.TgZ(44,"mat-form-field",15),fesm2015_core.TgZ(45,"mat-label"),fesm2015_core._uU(46,"Altura (cm)"),fesm2015_core.qZA(),fesm2015_core._UZ(47,"input",19),fesm2015_core.qZA(),fesm2015_core.TgZ(48,"mat-form-field",17),fesm2015_core.TgZ(49,"mat-label"),fesm2015_core._uU(50,"Largura (cm)"),fesm2015_core.qZA(),fesm2015_core._UZ(51,"input",20),fesm2015_core.qZA(),fesm2015_core.qZA(),fesm2015_core._UZ(52,"app-file-upload",21),fesm2015_core.qZA(),fesm2015_core.qZA()),2&rf&&(fesm2015_core.Q6J("ngIf",ctx.loading>0),fesm2015_core.xp6(3),fesm2015_core.hij("",ctx.id?"Editar":"Adicionar"," Op\xe7\xe3o"),fesm2015_core.xp6(3),fesm2015_core.hij(" ",ctx.id?"Salvar edi\xe7\xe3o":"Adicionar"," "),fesm2015_core.xp6(1),fesm2015_core.Q6J("formGroup",ctx.formGroup),fesm2015_core.xp6(10),fesm2015_core.Q6J("ngForOf",ctx.attributes),fesm2015_core.xp6(5),fesm2015_core.Q6J("value",1),fesm2015_core.xp6(2),fesm2015_core.Q6J("value",0),fesm2015_core.xp6(28),fesm2015_core.Q6J("multiple",!1)("type",ctx.fileType)("id",ctx.id)("token",ctx.token))},directives:[common.O5,flex.xw,flex.Wh,fesm2015_button.lW,fesm2015_forms._Y,fesm2015_forms.JL,fesm2015_forms.sg,form_field.KE,form_field.hX,input.Nt,fesm2015_forms.Fj,fesm2015_forms.Q7,fesm2015_forms.JJ,fesm2015_forms.u,fesm2015_select.gD,common.sg,core.ey,flex.yH,fesm2015_forms.wV,file_upload_component.Y,progress_bar.pW],styles:[".list[_ngcontent-%COMP%]{min-width:220px}"]});const routes=[{path:"",component:OptionsComponent},{path:"add",component:AddEditComponent},{path:"edit/:id",component:AddEditComponent}];class OptionsRoutingModule{}OptionsRoutingModule.\u0275fac=function OptionsRoutingModule_Factory(t){return new(t||OptionsRoutingModule)},OptionsRoutingModule.\u0275mod=fesm2015_core.oAB({type:OptionsRoutingModule}),OptionsRoutingModule.\u0275inj=fesm2015_core.cJS({imports:[[router.Bz.forChild(routes)],router.Bz]});var price_module=__webpack_require__(1885),products_module=__webpack_require__(178);class OptionsModule{}OptionsModule.\u0275fac=function OptionsModule_Factory(t){return new(t||OptionsModule)},OptionsModule.\u0275mod=fesm2015_core.oAB({type:OptionsModule}),OptionsModule.\u0275inj=fesm2015_core.cJS({imports:[[common.ez,OptionsRoutingModule,flex.ae,expansion.To,badge.g,progress_bar.Cv,progress_spinner.Cq,card.QW,fesm2015_button.ot,fesm2015_forms.UX,input.c,icon.Ps,slide_toggle.rP,list.ie,tabs.Nh,core.Ng,fesm2015_select.LD,table.p0,sort.JX,address_module.f,contact_module.w,paginator.TU,ngx_mask.yI,tooltip.AV,autocomplete.Bb,ngx_mat_select_search.Co,price_module.n,products_module.ProductsModule]]})}};