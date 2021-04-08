import { Component, OnInit } from '@angular/core';
import {IFile} from '../../../interfaces/IFile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public loading: boolean;
    public slides: Array<IFile> = [];
    public ngOnInit(): void {
        this.slides.push({
            url: 'https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg',
        });
        this.slides.push({
            url: 'https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg',
        });
    }
}
