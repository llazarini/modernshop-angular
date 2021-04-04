import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user.component";
import {AddEditComponent} from "./add-edit/add-edit.component";

const routes: Routes = [
	{
		path: '',
		component: UserComponent,
	},
	{
		path: 'add',
		component: AddEditComponent,
	},
	{
		path: 'edit/:id',
		component: AddEditComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule { }
