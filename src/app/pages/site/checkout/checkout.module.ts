import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FlexModule} from '@angular/flex-layout';
import {CheckoutComponent} from './checkout/checkout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {ProductModule as ProductShareModule} from '../share/product/product.module';
import {MatSelectModule} from '@angular/material/select';
import {CarouselModule} from '../share/carousel/carousel.module';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CreateComponent} from './create/create.component';
import {LoginComponent} from './login/login.component';
import {NgxMaskModule} from 'ngx-mask';
import {AddressComponent} from './address/address.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {FinishComponent} from './finish/finish.component';

@NgModule({
	exports: [
		CheckoutComponent,
		CreateComponent,
		LoginComponent,
		AddressComponent,
		FinishComponent,
	],
    declarations: [
	    CheckoutComponent,
	    CreateComponent,
	    LoginComponent,
	    AddressComponent,
	    FinishComponent,
    ],
	imports: [
		CheckoutRoutingModule,
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
	]
})
export class CheckoutModule { }
