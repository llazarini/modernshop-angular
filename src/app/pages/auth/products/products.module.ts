import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from "./products.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AddEditComponent } from './add-edit/add-edit.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {AddressModule} from "../share/address/address.module";
import {ContactModule} from "../share/contact/contact.module";
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxMaskModule} from 'ngx-mask';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {FileUploadComponent} from '../share/file-upload/file-upload.component';
import {NgxCurrencyModule} from 'ngx-currency';

@NgModule({
	declarations: [
		ProductsComponent,
		AddEditComponent,
		FileUploadComponent
	],
	exports: [
		FileUploadComponent
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
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
		AddressModule,
		ContactModule,
		MatPaginatorModule,
		NgxMaskModule,
		MatTooltipModule,
		MatAutocompleteModule,
		NgxMatSelectSearchModule,
		FormsModule,
		ExtendedModule,
		NgxCurrencyModule,
	]
})
export class ProductsModule { }
