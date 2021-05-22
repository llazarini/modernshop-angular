import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FlexModule} from '@angular/flex-layout';
import {ProductRoutingModule} from './product-routing.module';
import {ListComponent} from './list/list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {ProductModule as ProductShareModule} from '../share/product/product.module';
import {MatSelectModule} from '@angular/material/select';
import {CarouselModule} from '../share/carousel/carousel.module';
import {ViewComponent} from './view/view.component';
import {MatInputModule} from '@angular/material/input';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
	    ListComponent,
	    ViewComponent,
    ],
	imports: [
		ProductRoutingModule,
		CommonModule,
		MatProgressBarModule,
		FlexModule,
		MatSidenavModule,
		MatButtonModule,
		ProductShareModule,
		MatSelectModule,
		CarouselModule,
		MatInputModule,
		NgxMaskModule,
		FormsModule,
		MatSlideToggleModule,
		MatRadioModule,
		MatIconModule,
	]
})
export class ProductModule { }
