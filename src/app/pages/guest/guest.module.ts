import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestRoutingModule} from "./guest-routing.module";
import {GuestComponent} from "./guest.component";
import {LoginComponent} from "./login/login.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";



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
    FlexModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
  ]
})
export class GuestModule { }
