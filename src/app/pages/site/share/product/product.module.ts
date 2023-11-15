import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product.component';
import {CarouselModule} from '../carousel/carousel.module';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {RouterModule} from '@angular/router';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {PriceModule} from '../../../../pipes/price.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [
		ProductComponent,
	],
	exports: [
		ProductComponent
	],
	imports: [
		CommonModule,
		CarouselModule,
		MatButtonModule,
		RouterModule,
		MatCardModule,
		PriceModule,
		MatIconModule
	]
})
export class ProductModule { }
