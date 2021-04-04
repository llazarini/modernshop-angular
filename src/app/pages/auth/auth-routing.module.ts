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
			path: 'users',
			loadChildren: () =>
				import('./user/user.module').then(
					(m) => m.UserModule
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
