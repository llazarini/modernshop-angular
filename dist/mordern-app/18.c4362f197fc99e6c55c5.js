(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{W7Fq:function(t,e,a){"use strict";a.r(e),a.d(e,"OrdersModule",(function(){return at}));var c=a("ofXK"),n=a("tyNb"),i=a("fXoL"),o=a("U3tn"),s=a("kyzu"),r=a("XiUz"),b=a("+0xr"),l=a("Dh3D"),u=a("M9IT"),d=a("bv9b"),m=a("bTqV"),p=a("CQ0i");function f(t,e){1&t&&i.Nb(0,"mat-progress-bar",19)}function h(t,e){1&t&&(i.Sb(0,"th",20),i.Dc(1,"#"),i.Rb())}function g(t,e){if(1&t&&(i.Sb(0,"td",21),i.Dc(1),i.Rb()),2&t){const t=e.$implicit;i.Bb(1),i.Ec(t.id)}}function S(t,e){1&t&&(i.Sb(0,"th",22),i.Dc(1,"Frete"),i.Rb())}function D(t,e){if(1&t&&(i.Sb(0,"td",21),i.Dc(1),i.fc(2,"price"),i.Rb()),2&t){const t=e.$implicit;i.Bb(1),i.Gc("",t.shipment_option," ",i.gc(2,2,t.shipment),"")}}function y(t,e){1&t&&(i.Sb(0,"th",22),i.Dc(1,"Detalhes"),i.Rb())}function B(t,e){if(1&t&&(i.Sb(0,"div",24),i.Sb(1,"div",25),i.Dc(2),i.Rb(),i.Sb(3,"div",25),i.Dc(4),i.Rb(),i.Sb(5,"div",26),i.Sb(6,"div"),i.Sb(7,"b"),i.Dc(8,"Pre\xe7o Unit\xe1rio:"),i.Rb(),i.Dc(9),i.fc(10,"price"),i.Rb(),i.Sb(11,"div",27),i.Dc(12),i.Rb(),i.Sb(13,"div",27),i.Sb(14,"b"),i.Dc(15,"Total: "),i.Rb(),i.Dc(16),i.fc(17,"price"),i.Rb(),i.Rb(),i.Rb()),2&t){const t=e.$implicit;i.Bb(2),i.Ec(null==t.product?null:t.product.name),i.Bb(2),i.Ec(null==t.option?null:t.option.name),i.Bb(5),i.Fc(" ",i.gc(10,5,t.price),""),i.Bb(3),i.Fc("",t.quantity," x"),i.Bb(4),i.Ec(i.gc(17,7,t.amount))}}function R(t,e){if(1&t&&(i.Sb(0,"td",21),i.Bc(1,B,18,9,"div",23),i.Rb()),2&t){const t=e.$implicit;i.Bb(1),i.kc("ngForOf",t.order_products)}}function v(t,e){1&t&&(i.Sb(0,"th",22),i.Dc(1,"Tipo de Pagamento"),i.Rb())}function w(t,e){if(1&t&&(i.Sb(0,"td",21),i.Dc(1),i.Rb()),2&t){const t=e.$implicit;i.Bb(1),i.Ec(null==t.payment_type?null:t.payment_type.name)}}function k(t,e){1&t&&(i.Sb(0,"th",22),i.Dc(1,"Status de pagamento"),i.Rb())}function C(t,e){if(1&t&&(i.Sb(0,"td",21),i.Dc(1),i.Rb()),2&t){const t=e.$implicit;i.Bb(1),i.Ec(null==t.payment_status?null:t.payment_status.name)}}function x(t,e){1&t&&(i.Sb(0,"th",22),i.Dc(1,"Total"),i.Rb())}function _(t,e){if(1&t&&(i.Sb(0,"td",21),i.Dc(1),i.fc(2,"price"),i.Rb()),2&t){const t=e.$implicit;i.Bb(1),i.Ec(i.gc(2,1,t.amount))}}function I(t,e){1&t&&(i.Sb(0,"th",28),i.Dc(1,"A\xe7\xf5es"),i.Rb())}function P(t,e){if(1&t){const t=i.Tb();i.Sb(0,"button",30),i.ac("click",(function(){i.sc(t);const e=i.ec().$implicit;return i.ec().updateStatus(e,"paid")})),i.Nb(1,"i",31),i.Dc(2," Informar Pagamento "),i.Rb()}}function A(t,e){if(1&t){const t=i.Tb();i.Sb(0,"button",30),i.ac("click",(function(){i.sc(t);const e=i.ec().$implicit;return i.ec().updateStatus(e,"sent")})),i.Nb(1,"i",32),i.Dc(2," Informar envio "),i.Rb()}}function F(t,e){if(1&t&&(i.Sb(0,"td",21),i.Bc(1,P,3,0,"button",29),i.Bc(2,A,3,0,"button",29),i.Rb()),2&t){const t=e.$implicit;i.Bb(1),i.kc("ngIf","waiting_payment"===(null==t.payment_status?null:t.payment_status.slug)),i.Bb(1),i.kc("ngIf","paid"===(null==t.payment_status?null:t.payment_status.slug))}}function $(t,e){1&t&&i.Nb(0,"tr",33)}function E(t,e){1&t&&i.Nb(0,"tr",34)}const L=[{path:"",component:(()=>{class t{constructor(t,e){this.orderService=t,this.alertService=e,this.displayedColumns=["id","payment_type","shipment","details","amount","payment_type","payment_status","actions"],this.loading=0,this.page=0}ngOnInit(){this.getAll(),this.dataprovider()}getAll(t){t&&(this.dataSource=[]),this.loading+=1,this.orderService.getAll(this.page+1).subscribe(t=>{this.dataSource=t.data,this.total=t.total}).add(()=>this.loading-=1)}dataprovider(){this.loading+=1,this.orderService.dataprovider().subscribe(t=>{this.paymentStatuses=t.payment_statuses,console.log(t)}).add(()=>this.loading-=1)}pageChange(t){this.page=t.pageIndex,this.getAll()}updateStatus(t,e){this.alertService.confirm("Deseja mesmo atualizar o status para "+e,"Atualizar status do pedido "+t.id).subscribe(a=>{a&&this.changeStatus(t,e)})}changeStatus(t,e){this.loading+=1,this.orderService.changeStatus(t.id,e).subscribe(t=>{this.getAll(!0),this.alertService.toast(t.message)}).add(()=>this.loading-=1)}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(o.a),i.Mb(s.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-orders"]],decls:30,vars:6,consts:[["class","progress","mode","indeterminate",4,"ngIf"],["fxLayout","column"],["fxLayoutAlign","space-between center"],[1,"margin-right"],["fxFlex","","mat-table","","matSort","","matSortActive","id","matSortDisableClear","","matSortDirection","desc",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","width","50px",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","shipment"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","details"],["matColumnDef","payment_type"],["matColumnDef","payment_status"],["matColumnDef","amount"],["matColumnDef","actions","stickyEnd",""],["mat-header-cell","","class","actions",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageSize","10",3,"pageIndex","length","page"],["mode","indeterminate",1,"progress"],["mat-header-cell","","width","50px"],["mat-cell",""],["mat-header-cell",""],["class","product","fxLayout","column","fxLayoutAlign","start start",4,"ngFor","ngForOf"],["fxLayout","column","fxLayoutAlign","start start",1,"product"],[1,"title"],["fxLayout","row"],[1,"margin-left"],["mat-header-cell","",1,"actions"],["mat-button","","color","primary",3,"click",4,"ngIf"],["mat-button","","color","primary",3,"click"],[1,"mdi","mdi-check"],[1,"mdi","mdi-truck"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(i.Bc(0,f,1,0,"mat-progress-bar",0),i.Sb(1,"div",1),i.Sb(2,"div",2),i.Sb(3,"h1",3),i.Dc(4,"Pedidos"),i.Rb(),i.Rb(),i.Sb(5,"table",4),i.Qb(6,5),i.Bc(7,h,2,0,"th",6),i.Bc(8,g,2,1,"td",7),i.Pb(),i.Qb(9,8),i.Bc(10,S,2,0,"th",9),i.Bc(11,D,3,4,"td",7),i.Pb(),i.Qb(12,10),i.Bc(13,y,2,0,"th",9),i.Bc(14,R,2,1,"td",7),i.Pb(),i.Qb(15,11),i.Bc(16,v,2,0,"th",9),i.Bc(17,w,2,1,"td",7),i.Pb(),i.Qb(18,12),i.Bc(19,k,2,0,"th",9),i.Bc(20,C,2,1,"td",7),i.Pb(),i.Qb(21,13),i.Bc(22,x,2,0,"th",9),i.Bc(23,_,3,3,"td",7),i.Pb(),i.Qb(24,14),i.Bc(25,I,2,0,"th",15),i.Bc(26,F,3,2,"td",7),i.Pb(),i.Bc(27,$,1,0,"tr",16),i.Bc(28,E,1,0,"tr",17),i.Rb(),i.Sb(29,"mat-paginator",18),i.ac("page",(function(t){return e.pageChange(t)})),i.Rb(),i.Rb()),2&t&&(i.kc("ngIf",e.loading>0),i.Bb(5),i.kc("dataSource",e.dataSource),i.Bb(22),i.kc("matHeaderRowDef",e.displayedColumns),i.Bb(1),i.kc("matRowDefColumns",e.displayedColumns),i.Bb(1),i.kc("pageIndex",e.page)("length",e.total))},directives:[c.l,r.c,r.b,b.j,r.a,l.a,b.c,b.e,b.b,b.g,b.i,u.a,d.a,b.d,b.a,c.k,m.a,b.f,b.h],pipes:[p.a],styles:[""]}),t})()}];let Q=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[n.e.forChild(L)],n.e]}),t})();var N=a("7EHt"),T=a("TU8p"),H=a("Xa2L"),j=a("Wp6s"),M=a("3Pt+"),z=a("qFsG"),J=a("NFeN"),O=a("1jcm"),U=a("MutI"),W=a("wZkO"),X=a("FKr1"),q=a("d3UM"),G=a("Xx9n"),K=a("g1/W"),V=a("tmjD"),Z=a("Qu3c"),Y=a("/1cH"),tt=a("WJ5W"),et=a("hyGo");let at=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[c.c,Q,r.f,N.a,T.b,d.b,H.b,j.c,m.b,M.t,z.c,J.b,O.a,U.b,W.d,X.o,q.b,b.k,l.b,G.a,K.a,u.b,V.b,Z.b,Y.a,tt.b,et.a,M.k]]}),t})()}}]);