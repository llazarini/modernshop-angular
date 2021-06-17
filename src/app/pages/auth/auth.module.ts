import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./share/menu/menu.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {AuthRoutingModule} from "./auth-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {AuthComponent} from "./auth.component";
import {BrowserModule} from "@angular/platform-browser";
import {FlexModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {ConfirmComponent} from './share/alert/confirm.component';
import {AlertComponent} from './share/alert/alert.component';
import {MatDialogModule} from '@angular/material/dialog';
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
