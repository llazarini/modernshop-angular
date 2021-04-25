import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/guest/product/product.service';
import {IProduct} from '../../../../interfaces/IProduct';
import {ICategory} from '../../../../interfaces/ICategory';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    public loading: number;
    public products: Array<IProduct>;
    public categories: Array<ICategory>;

    constructor(private productService: ProductService) {
    }

    public ngOnInit(): void {
        this.dataprovider();
        this.index();
    }

    public index() {
        this.loading += 1;
        this.productService
            .index()
            .subscribe(response => {
                this.products = response.data;
            })
            .add(() => this.loading -= 1);
    }

    public dataprovider() {
        this.loading += 1;
        this.productService
            .dataprovider()
            .subscribe(response => {
                this.categories = response.categories;
            })
            .add(() => this.loading -= 1);
    }
}
