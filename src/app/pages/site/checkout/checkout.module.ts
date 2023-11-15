import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {CheckoutComponent} from './checkout/checkout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {ProductModule as ProductShareModule} from '../share/product/product.module';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {CarouselModule} from '../share/carousel/carousel.module';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {FinishComponent} from './finish/finish.component';
import {NoItemsComponent} from './no-items/no-items.component';
import {CartComponent} from './cart/cart.component';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {SuccessComponent} from './success/success.component';
import {PriceModule} from '../../../pipes/price.module';
import {CheckoutLoggedComponent} from './checkout-logged/checkout-logged.component';
import {MatIconModule} from '@angular/material/icon';

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
		PriceModule,
		MatIconModule,
	]
})
export class CheckoutModule { }
