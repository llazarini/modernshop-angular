import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardGuard} from '../../../guard/auth-guard.guard';
import {OrdersComponent} from './orders/orders.component';
import {CreateComponent} from './create/create.component';
import {CardItemsGuard} from '../../../guard/card-items.guard';
import {LoginComponent} from './login/login.component';
import {AddressComponent} from './address/address.component';
import {ForgotComponent} from './forgot/forgot.component';
import {PasswordComponent} from './password/password.component';

const routes: Routes = [
	{
		path: 'orders',
		component: OrdersComponent,
		canActivate: [AuthGuardGuard],
	},
	{
		path: 'create',
		component: CreateComponent,
		canActivate: [CardItemsGuard],
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [],
	},
	{
		path: 'forgot',
		component: ForgotComponent,
		canActivate: [],
	},
	{
		path: 'password/:code',
		component: PasswordComponent,
		canActivate: [],
	},
	{
		path: 'address',
		component: AddressComponent,
		canActivate: [AuthGuardGuard, CardItemsGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule { }
