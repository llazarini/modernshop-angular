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
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [
		SiteComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		PrivacyComponent,
	],
	imports: [
		CommonModule,
		MatProgressBarModule,
		SiteRoutingModule,
		CarouselModule,
		ProductCarouselModule,
		MatBadgeModule,
		MatMenuModule,
		MatButtonModule,
		ProductModule,
		CategoryModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
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
