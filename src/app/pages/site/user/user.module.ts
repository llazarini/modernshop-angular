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
import {PasswordComponent} from './password/password.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {PriceModule} from '../../../pipes/price.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	exports: [
		OrdersComponent,
		LoginComponent,
		CreateComponent,
		AddressComponent,
		ForgotComponent,
		PasswordComponent,
	],
	declarations: [
		OrdersComponent,
		LoginComponent,
		CreateComponent,
		AddressComponent,
		ForgotComponent,
		PasswordComponent,
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
		MatCardModule,
		MatProgressSpinnerModule,
		PriceModule,
		MatIconModule,
	]
})
export class UserModule { }
