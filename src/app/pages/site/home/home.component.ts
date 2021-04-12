import { Component, OnInit } from '@angular/core';
import {IFile} from '../../../interfaces/IFile';
import {BannerService} from '../../../services/guest/banner/banner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public loading: boolean;
    public banners: Array<IFile> = [];

    constructor(private bannerService: BannerService) {
    }

    public ngOnInit(): void {
        this.topBanner();
    }

    public topBanner() {
        this.bannerService
            .category('top-home')
            .subscribe(banners => {
                this.banners = banners
                    .filter(banner => !!banner.file)
                    .map(banner => banner.file);
            })
    }
}
