import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestRoutingModule} from "./guest-routing.module";
import {GuestComponent} from "./guest.component";
import {LoginComponent} from "./login/login.component";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyProgressBarModule as MatProgressBarModule} from "@angular/material/legacy-progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';


@NgModule({
  declarations: [
    GuestComponent,
    LoginComponent,
  ],
	imports: [
		CommonModule,
		GuestRoutingModule,
		MatInputModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatProgressBarModule,
		MatIconModule,
		MatCardModule,
		MatProgressSpinnerModule,
	]
})
export class GuestModule { }
