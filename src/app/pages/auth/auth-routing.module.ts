import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import {AuthGuardGuard} from "../../guard/auth-guard.guard";

const routes: Routes = [
	{
		path: 'auth',
		component: AuthComponent,
        canActivate: [AuthGuardGuard],
		children: [
			{
				pathMatch: 'full',
				path: '',
				redirectTo: 'dashboard',
			},
			{
				path: 'banners',
				loadChildren: () =>
					import('./banners/banners.module').then(
						(m) => m.BannersModule
					),
			},
			{
				path: 'dashboard',
				loadChildren: () =>
					import('./dashboard/dashboard.module').then(
						(m) => m.DashboardModule
					),
			},
			{
				path: 'products',
				loadChildren: () =>
				  import('./products/products.module').then(
				    (m) => m.ProductsModule
				  ),
			},
			{
				path: 'categories',
				loadChildren: () =>
					import('./categories/categories.module').then(
						(m) => m.CategoriesModule
					),
			},
			{
				path: 'options',
				loadChildren: () =>
					import('./options/options.module').then(
						(m) => m.OptionsModule
					),
			},
			{
				path: 'users',
				loadChildren: () =>
					import('./user/user.module').then(
						(m) => m.UserModule
					),
			},
			{
				path: 'orders',
				loadChildren: () =>
					import('./orders/orders.module').then(
						(m) => m.OrdersModule
					),
			},
	    ],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule { }
