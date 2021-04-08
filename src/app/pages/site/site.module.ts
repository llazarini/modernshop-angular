import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteComponent} from './site.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {SiteRoutingModule} from './site-routing.module';
import {HomeComponent} from './home/home.component';
import {CarouselModule} from './share/carousel/carousel.module';
import {FlexModule} from '@angular/flex-layout';
import {ProductCarouselModule} from './share/product-slider/product-carousel.module';

@NgModule({
    declarations: [
        SiteComponent,
	    HomeComponent,
    ],
	imports: [
		CommonModule,
		MatProgressBarModule,
		SiteRoutingModule,
		CarouselModule,
		FlexModule,
		ProductCarouselModule
	]
})
export class SiteModule { }
