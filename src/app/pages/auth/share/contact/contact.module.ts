import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {FlexModule} from "@angular/flex-layout";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from 'ngx-mask';



@NgModule({
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent
  ],
	imports: [
		CommonModule,
		FlexModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		NgxMaskModule
	]
})
export class ContactModule { }
