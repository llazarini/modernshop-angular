import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteComponent} from './site.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {SiteRoutingModule} from './site-routing.module';
import {HomeComponent} from './home/home.component';
import {CarouselModule} from './share/carousel/carousel.module';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {ProductCarouselModule} from './share/product-carousel/product-carousel.module';
import {HeaderComponent} from './parts/header/header.component';
import {FooterComponent} from './parts/footer/footer.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {ProductModule} from './share/product/product.module';
import {CategoryModule} from './share/category/category.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
	declarations: [
		SiteComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
	],
	imports: [
		CommonModule,
		MatProgressBarModule,
		SiteRoutingModule,
		CarouselModule,
		FlexModule,
		ProductCarouselModule,
		MatBadgeModule,
		MatMenuModule,
		MatButtonModule,
		ProductModule,
		ExtendedModule,
		CategoryModule,
		MatProgressSpinnerModule
	]
})
export class SiteModule { }
