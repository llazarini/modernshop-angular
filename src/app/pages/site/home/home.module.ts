import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
    declarations: [
        HomeComponent,
    ],
	imports: [
		CommonModule,
		MatProgressBarModule,
	]
})
export class HomeModule { }
