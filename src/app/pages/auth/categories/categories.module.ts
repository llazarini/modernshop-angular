import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesComponent} from "./categories.component";
import {CategoriesRoutingModule} from "./categories-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatBadgeModule} from "@angular/material/badge";
import {MatLegacyProgressBarModule as MatProgressBarModule} from "@angular/material/legacy-progress-bar";
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from "@angular/material/legacy-progress-spinner";
import { AddEditComponent } from './add-edit/add-edit.component';
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacySlideToggleModule as MatSlideToggleModule} from "@angular/material/legacy-slide-toggle";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";
import {MatLegacyOptionModule as MatOptionModule} from "@angular/material/legacy-core";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {MatLegacyTableModule as MatTableModule} from "@angular/material/legacy-table";
import {MatSortModule} from "@angular/material/sort";
import {AddressModule} from "../share/address/address.module";
import {ContactModule} from "../share/contact/contact.module";
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import {NgxMaskModule} from 'ngx-mask';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from '@angular/material/legacy-autocomplete';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {ProductsModule} from '../products/products.module';

@NgModule({
	declarations: [
		CategoriesComponent,
		AddEditComponent,
	],
	imports: [
		CommonModule,
		CategoriesRoutingModule,
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
		ProductsModule,
	]
})
export class CategoriesModule { }
