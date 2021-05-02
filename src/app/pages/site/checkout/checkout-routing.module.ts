import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutComponent} from './checkout/checkout.component';
import {CreateComponent} from '../user/create/create.component';
import {LoginComponent} from '../user/login/login.component';
import {AddressComponent} from '../user/address/address.component';
import {AuthGuardGuard} from '../../../guard/auth-guard.guard';
import {FinishComponent} from './finish/finish.component';
import {NoItemsComponent} from './no-items/no-items.component';
import {CardItemsGuard} from '../../../guard/card-items.guard';
import {SuccessComponent} from './success/success.component';

const routes: Routes = [
	{
		path: '',
		component: CheckoutComponent,
		canActivate: [CardItemsGuard],
	},
	{
		path: 'finish',
		component: FinishComponent,
		canActivate: [AuthGuardGuard, CardItemsGuard],
	},
	{
		path: 'no-items',
		component: NoItemsComponent,
		canActivate: [],
	},
	{
		path: 'success/:id',
		component: SuccessComponent,
		canActivate: [AuthGuardGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CheckoutRoutingModule { }
