import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
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
import {NgxMaskModule} from 'ngx-mask';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {FinishComponent} from './finish/finish.component';
import {NoItemsComponent} from './no-items/no-items.component';
import {CartComponent} from './cart/cart.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {SuccessComponent} from './success/success.component';
import {PriceModule} from '../../../pipes/price.module';
import {CheckoutLoggedComponent} from './checkout-logged/checkout-logged.component';

@NgModule({
	exports: [],
	declarations: [
		CheckoutComponent,
		FinishComponent,
		NoItemsComponent,
		CartComponent,
		SuccessComponent,
		CheckoutLoggedComponent,
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
		MatRadioModule,
		ExtendedModule,
		MatListModule,
		PriceModule,
	]
})
export class CheckoutModule { }
