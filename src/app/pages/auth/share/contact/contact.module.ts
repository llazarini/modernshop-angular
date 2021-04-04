import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {FlexModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
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
