import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressComponent} from "./address.component";
import {FlexModule} from "@angular/flex-layout";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from '@angular/material/legacy-autocomplete';
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
