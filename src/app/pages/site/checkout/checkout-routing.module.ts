import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutComponent} from './checkout/checkout.component';
import {CreateComponent} from './create/create.component';
import {LoginComponent} from './login/login.component';
import {AddressComponent} from './address/address.component';
import {AuthGuardGuard} from '../../../guard/auth-guard.guard';
import {FinishComponent} from './finish/finish.component';

const routes: Routes = [
	{
		path: '',
		component: CheckoutComponent,
	},
	{
		path: 'create',
		component: CreateComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'address',
		component: AddressComponent,
		canActivate: [AuthGuardGuard],
	},
	{
		path: 'finish',
		component: FinishComponent,
		canActivate: [AuthGuardGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CheckoutRoutingModule { }
