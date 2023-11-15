import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {ProductModule as ProductShareModule} from '../share/product/product.module';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {CarouselModule} from '../share/carousel/carousel.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {OrdersComponent} from './orders/orders.component';
import {UserRoutingModule} from './user-routing.module';
import {LoginComponent} from './login/login.component';
import {CreateComponent} from './create/create.component';
import {AddressComponent} from './address/address.component';
import {ForgotComponent} from './forgot/forgot.component';
import {PasswordComponent} from './password/password.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
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
		MatSidenavModule,
		MatButtonModule,
		ProductShareModule,
		MatSelectModule,
		CarouselModule,
		MatInputModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		FormsModule,
		MatRadioModule,
		MatListModule,
		MatCardModule,
		MatProgressSpinnerModule,
		PriceModule,
		MatIconModule,
	]
})
export class UserModule { }
