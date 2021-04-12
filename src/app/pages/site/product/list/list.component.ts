import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/guest/product/product.service';
import {IProduct} from '../../../../interfaces/IProduct';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    public loading: boolean;
    public products: Array<IProduct>;

    constructor(private productService: ProductService) {
    }

    public ngOnInit(): void {
        this.index();
    }

    public index() {
        this.loading = true;
        this.productService
            .index()
            .subscribe(response => {
                this.products = response.data;
            })
            .add(() => this.loading = false);
    }


}
