import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {ProductRoutingModule} from './product-routing.module';
import {ListComponent} from './list/list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {ProductModule as ProductShareModule} from '../share/product/product.module';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {CarouselModule} from '../share/carousel/carousel.module';
import {ViewComponent} from './view/view.component';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {FormsModule} from '@angular/forms';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {PriceModule} from '../../../pipes/price.module';
import {ProductCarouselModule} from '../share/product-carousel/product-carousel.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
	    ListComponent,
	    ViewComponent,
    ],
	imports: [
		ProductRoutingModule,
		CommonModule,
		MatProgressBarModule,
		MatSidenavModule,
		MatButtonModule,
		ProductShareModule,
		MatSelectModule,
		CarouselModule,
		MatInputModule,
		FormsModule,
		MatSlideToggleModule,
		MatRadioModule,
		PriceModule,
		ProductCarouselModule,
		MatIconModule,
	]
})
export class ProductModule { }
