import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user.component";
import {UserRoutingModule} from "./user-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AddEditComponent } from './add-edit/add-edit.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxCurrencyModule} from 'ngx-currency';


@NgModule({
  declarations: [
    UserComponent,
    AddEditComponent
  ],
	imports: [
		CommonModule,
		UserRoutingModule,
		FlexModule,
		MatExpansionModule,
		MatBadgeModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatCardModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatInputModule,
		MatIconModule,
		MatSlideToggleModule,
		MatListModule,
		MatTabsModule,
		MatOptionModule,
		MatSelectModule,
		MatTableModule,
		MatSortModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatPaginatorModule,
		NgxCurrencyModule
	]
})
export class UserModule { }
