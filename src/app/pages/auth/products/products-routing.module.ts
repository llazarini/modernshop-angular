import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./products.component";
import {AddEditComponent} from "./add-edit/add-edit.component";

const routes: Routes = [
	{
		path: '',
		component: ProductsComponent,
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
export class ProductsRoutingModule { }
