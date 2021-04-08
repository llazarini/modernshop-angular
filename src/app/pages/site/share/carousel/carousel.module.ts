import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselComponent} from './carousel.component';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  exports: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class CarouselModule { }
