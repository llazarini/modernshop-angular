import {BrowserModule, BrowserTransferStateModule, DomSanitizer} from '@angular/platform-browser';
import {Inject, NgModule, PLATFORM_ID} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AuthModule} from "./pages/auth/auth.module";
import {GuestModule} from "./pages/guest/guest.module";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from "./interceptor/api.interceptor";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SiteModule} from './pages/site/site.module';
import {NgxMaskModule} from 'ngx-mask';
import {MatIconRegistry} from '@angular/material/icon';
import {isPlatformServer} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
    ],
    imports: [
        NgxMaskModule.forRoot(),
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AuthModule,
        GuestModule,
        SiteModule,
        HttpClientModule,
        MatSnackBarModule,
        BrowserTransferStateModule
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
    ]

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
        if (isPlatformServer(this.platformId)) {
            /* Register empty icons for server-side-rendering to prevent errors */
            this.iconRegistry.addSvgIconLiteral(name, this.domSanitizer.bypassSecurityTrustHtml('<svg></svg>'));
        } else {
            this.iconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${filename}.svg`));
        }
    }
}
