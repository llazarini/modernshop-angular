import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryComponent} from './category.component';
import {CarouselModule} from '../carousel/carousel.module';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {RouterModule} from '@angular/router';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {PriceModule} from '../../../../pipes/price.module';

@NgModule({
	declarations: [
		CategoryComponent,
	],
	exports: [
		CategoryComponent
	],
	imports: [
		CommonModule,
		CarouselModule,
		MatButtonModule,
		RouterModule,
		MatCardModule,
		PriceModule
	]
})
export class CategoryModule { }
