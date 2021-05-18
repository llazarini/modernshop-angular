import { Component, OnInit } from '@angular/core';
import {IFile} from '../../../interfaces/IFile';
import {BannerService} from '../../../services/guest/banner/banner.service';
import {IProduct} from '../../../interfaces/IProduct';
import {ProductService} from '../../../services/guest/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public loading: number = 0;
    public banners: Array<IFile> = [];
	public products: Array<IProduct> = [];

    constructor(
        private bannerService: BannerService,
        private productService: ProductService
    ) {
    }

    public ngOnInit(): void {
        this.topBanner();
        this.product();
    }

    public topBanner() {
        this.loading += 1;
        this.bannerService
            .category('top-home')
            .subscribe(banners => {
                this.banners = banners
                    .filter(banner => !!banner.file);
            })
            .add(() => this.loading -= 1)
    }

    public product() {
        this.loading += 1;
        this.productService
            .index()
            .subscribe(response => {
                this.products = response.data;
            })
            .add(() => this.loading -= 1)
    }
}
