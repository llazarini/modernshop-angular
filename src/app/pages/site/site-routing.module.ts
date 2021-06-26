import {SiteComponent} from './site.component';
import {HomeComponent} from './home/home.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
	{
		path: '',
		component: SiteComponent,
		children: [
			{
				pathMatch: 'full',
				path: '',
				component: HomeComponent,
			},
			{
				path: 'home',
				component: HomeComponent,
			},
			{
				path: 'privacy',
				component: PrivacyComponent,
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
