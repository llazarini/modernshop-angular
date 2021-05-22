import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
      NgxMaskModule.forRoot(),
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      AuthModule,
      GuestModule,
      SiteModule,
      HttpClientModule,
      MatSnackBarModule,
      MatIconModule
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
    constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
        iconRegistry.addSvgIconSet(
            domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
        );
    }
}
