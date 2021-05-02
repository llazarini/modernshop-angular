import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {ProductModule as ProductShareModule} from '../share/product/product.module';
import {MatSelectModule} from '@angular/material/select';
import {CarouselModule} from '../share/carousel/carousel.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxMaskModule} from 'ngx-mask';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {OrdersComponent} from './orders/orders.component';
import {UserRoutingModule} from './user-routing.module';
import {LoginComponent} from './login/login.component';
import {CreateComponent} from './create/create.component';
import {AddressComponent} from './address/address.component';
import {ForgotComponent} from './forgot/forgot.component';

@NgModule({
	exports: [
		OrdersComponent,
		LoginComponent,
		CreateComponent,
		AddressComponent,
		ForgotComponent,
	],
	declarations: [
		OrdersComponent,
		LoginComponent,
		CreateComponent,
		AddressComponent,
		ForgotComponent,
	],
	imports: [
		UserRoutingModule,
		CommonModule,
		MatProgressBarModule,
		FlexModule,
		MatSidenavModule,
		MatButtonModule,
		ProductShareModule,
		MatSelectModule,
		CarouselModule,
		MatInputModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		FormsModule,
		NgxMaskModule,
		NgxMatSelectSearchModule,
		MatRadioModule,
		ExtendedModule,
		MatListModule,
	]
})
export class UserModule { }
