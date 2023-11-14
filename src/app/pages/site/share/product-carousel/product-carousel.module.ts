import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCarouselComponent} from './product-carousel.component';
import {FlexModule} from '@angular/flex-layout';
import {ProductModule} from '../product/product.module';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';

@NgModule({
  declarations: [
    ProductCarouselComponent,
  ],
  exports: [
    ProductCarouselComponent
  ],
	imports: [
		CommonModule,
		FlexModule,
		ProductModule,
		MatProgressSpinnerModule
	]
})
export class ProductCarouselModule { }
