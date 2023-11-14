import {DomSanitizer} from '@angular/platform-browser';
import {Inject, NgModule, PLATFORM_ID} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AuthModule} from './pages/auth/auth.module';
import {GuestModule} from './pages/guest/guest.module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from './interceptor/api.interceptor';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import {SiteModule} from './pages/site/site.module';
import {NgxMaskModule} from 'ngx-mask';
import {MatIconRegistry} from '@angular/material/icon';
import {NgxGoogleAnalyticsModule} from 'ngx-google-analytics';
import {environment} from '../environments/environment';
import { PixelModule } from 'ngx-pixel';

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
	],
	imports: [
		NgxMaskModule.forRoot(),
		NgxGoogleAnalyticsModule.forRoot(environment.googleAnalytics),
		PixelModule.forRoot({ enabled: true, pixelId: environment.facebookPixel }),
		AppRoutingModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		AuthModule,
		GuestModule,
		SiteModule,
		HttpClientModule,
		MatSnackBarModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule {

	private icons = [
		'plus',
		'finance',
		'account',
		'cart',
		'credit-card-outline',
		'facebook',
		'instagram',
		'login',
		'logout',
		'sale',
		'truck',
		'truck-fast',
		'phone-in-talk',
		'palette',
		'lightbulb-on-outline',
		'map-marker-check',
		'hand-heart',
		'heart',
		'brush',
		'email',
		'whatsapp',
		'chevron-right',
		'cart-check',
		'store',
		'trash-can',
		'plus-circle',
		'minus-circle',
		'cellphone-nfc',
		'list-status',
		'card-search',
		'close'
	];

	constructor(
		private iconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer,
		@Inject(PLATFORM_ID) private platformId: string) {
		this.registerIcons();
	}

	private registerIcons() {
		this.icons.forEach(icon => this.registerIcon(icon, icon));
	}

	private registerIcon(name: string, filename: string) {
		this.iconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${filename}.svg`));
	}
}
