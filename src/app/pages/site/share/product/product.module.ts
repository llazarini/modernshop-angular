import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product.component';
import {FlexModule} from '@angular/flex-layout';
import {CarouselModule} from '../carousel/carousel.module';
import {MatButtonModule} from '@angular/material/button';

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
		MatButtonModule
	]
})
export class ProductModule { }
