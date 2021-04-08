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
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SiteRoutingModule { }
