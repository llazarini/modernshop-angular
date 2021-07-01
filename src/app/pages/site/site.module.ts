import {SiteComponent} from './site.component';
import {SiteRoutingModule} from './site-routing.module';
import {HomeComponent} from './home/home.component';
import {CarouselModule} from './share/carousel/carousel.module';
import {ProductCarouselModule} from './share/product-carousel/product-carousel.module';
import {HeaderComponent} from './parts/header/header.component';
import {FooterComponent} from './parts/footer/footer.component';
import {ProductModule} from './share/product/product.module';
import {CategoryModule} from './share/category/category.module';
import {PrivacyComponent} from './privacy/privacy.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { GoogleAnalyticsComponent } from './share/google-analytics/google-analytics.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [
		SiteComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		PrivacyComponent,
        GoogleAnalyticsComponent,
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
		MatProgressSpinnerModule,
		MatTooltipModule,
		FlexModule,
		RouterModule,
		RouterModule,
		MatProgressBarModule,
		MatCardModule,
		MatCardModule,
		MatInputModule,
		FormsModule,
		MatIconModule,
	]
})
export class SiteModule { }
