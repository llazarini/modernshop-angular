import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./share/menu/menu.component";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {MatIconModule} from "@angular/material/icon";
import {AuthRoutingModule} from "./auth-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {AuthComponent} from "./auth.component";
import {BrowserModule} from "@angular/platform-browser";
import {FlexModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatLegacyMenuModule as MatMenuModule} from "@angular/material/legacy-menu";
import {ConfirmComponent} from './share/alert/confirm.component';
import {AlertComponent} from './share/alert/alert.component';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
    exports: [],
    declarations: [
        AuthComponent,
        MenuComponent,
        AlertComponent,
        ConfirmComponent,
    ],
	imports: [
		NgxMaskModule.forRoot(),
		BrowserModule,
		CommonModule,
		MatListModule,
		MatIconModule,
		AuthRoutingModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		FlexModule,
		MatToolbarModule,
		MatMenuModule,
		MatDialogModule,
		MatDialogModule,
		FlexModule
	]
})
export class AuthModule { }
