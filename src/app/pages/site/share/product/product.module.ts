import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product.component';
import {FlexModule} from '@angular/flex-layout';
import {CarouselModule} from '../carousel/carousel.module';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {PriceModule} from '../../../../pipes/price.module';

@NgModule({
	declarations: [
		ProductComponent,
	],
	exports: [
		ProductComponent
	],
	imports: [
		CommonModule,
		FlexModule,
		CarouselModule,
		MatButtonModule,
		RouterModule,
		MatCardModule,
		PriceModule
	]
})
export class ProductModule { }
