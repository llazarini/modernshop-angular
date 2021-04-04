import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressComponent} from "./address.component";
import {FlexModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';



@NgModule({
  declarations: [
    AddressComponent
  ],
  exports: [
    AddressComponent
  ],
	imports: [
		CommonModule,
		FlexModule,
		MatListModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		MatSelectModule,
		MatButtonModule,
		MatProgressBarModule,
		MatAutocompleteModule,
		NgxMatSelectSearchModule,
		FormsModule
	]
})
export class AddressModule { }
