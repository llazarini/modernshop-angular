import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteComponent} from './site.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        SiteComponent,
    ],
	imports: [
		CommonModule,
		MatProgressBarModule,
		RouterModule,
	]
})
export class SiteModule { }
