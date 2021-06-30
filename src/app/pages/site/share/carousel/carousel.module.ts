import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselComponent} from './carousel.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  exports: [
    CarouselComponent
  ],
	imports: [
		CommonModule,
		FlexModule,
		ExtendedModule
	]
})
export class CarouselModule { }
