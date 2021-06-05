import { Component, OnInit } from '@angular/core';
import {IFile} from '../../../interfaces/IFile';
import {BannerService} from '../../../services/guest/banner/banner.service';
import {IProduct} from '../../../interfaces/IProduct';
import {ProductService} from '../../../services/guest/product/product.service';
import {ICategory} from '../../../interfaces/ICategory';
import {CategoryService} from '../../../services/guest/category/category.service';
import {ScrollPaginationService} from '../../../services/scroll-pagination/scroll-pagination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public loading: number = 0;
    public banners: Array<IFile> = [];
	public products: Array<IProduct> = [];
	public categories: Array<ICategory>;
    public loadingCategories: boolean = false;
    public loadingProducts: boolean = false;
    public selectedCategory: ICategory = null;
    public filter: any = {
        page: 1,
        category_id: null,
    };

    constructor(
        private bannerService: BannerService,
        private productService: ProductService,
        private categoryService: CategoryService,
        private scrollPaginationService: ScrollPaginationService,
    ) {
    }

    public ngOnInit(): void {
        this.topBanner();
        this.product();
        this.category();
        this.scrollPaginationService.listener()
            .subscribe(response => {
                this.product();
            })
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

    public category() {
        this.loadingCategories = true;
        this.categoryService
            .index()
            .subscribe(categories => {
                this.categories = categories;
            })
            .add(() => this.loadingCategories = false)
    }

    public product(reset?: boolean) {
        if (reset) {
            this.products = [];
            this.filter.page = 1;
        }
        if (this.loadingProducts || this.filter.page < 0) {
            return;
        }
        this.loadingProducts = true;
        this.productService
            .index(this.filter)
            .subscribe(response => {
                if (!response.next_page_url) {
                    this.filter.page = -1;
                } else {
                    this.filter.page += 1;
                }
                this.products = this.products.concat(response.data);
            })
            .add(() => this.loadingProducts = false)
    }

    public filtering(category: ICategory) {
        if (this.filter?.category_id === category.id) {
            this.filter.category_id = null;
            this.selectedCategory = null;
        } else {
            this.filter.category_id = category.id;
            this.selectedCategory = category;
        }
        this.product(true);
    }

    public title() {
        if (!this.selectedCategory) {
            return "Todas as Ilustrações"
        }
        return "Ilustrações: " + this.selectedCategory?.name
    }
}
