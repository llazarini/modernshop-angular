import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrdersComponent} from "./orders.component";
import {OrdersRoutingModule} from "./orders-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
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
import {PriceModule} from '../../../pipes/price.module';

@NgModule({
	declarations: [
		OrdersComponent,
	],
	imports: [
		CommonModule,
		OrdersRoutingModule,
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
		PriceModule,
	]
})
export class OrdersModule { }
