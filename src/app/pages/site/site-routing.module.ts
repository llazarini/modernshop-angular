import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SiteComponent} from './site.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: SiteComponent,
		children: [
			{
				pathMatch: 'full',
				path: '',
				redirectTo: 'home',
			},
			{
				path: 'home',
				component: HomeComponent,
			},
			{
				path: 'product',
				loadChildren: () =>
					import('./products/product.module').then(
						(m) => m.ProductModule
					),
			},
			{
				path: 'checkout',
				loadChildren: () =>
					import('./checkout/checkout.module').then(
						(m) => m.CheckoutModule
					),
			},
			{
				path: 'user',
				loadChildren: () =>
					import('./user/user.module').then(
						(m) => m.UserModule
					),
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SiteRoutingModule { }
