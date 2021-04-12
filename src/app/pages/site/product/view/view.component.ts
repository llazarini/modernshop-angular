import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/guest/product/product.service';
import {IProduct} from '../../../../interfaces/IProduct';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
    public loading: boolean;
    public product: IProduct;
    private id: number;

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,) {
    }

    public ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.show();
    }

    public show() {
        this.loading = true;
        this.productService
            .show(this.id)
            .subscribe(response => {
                this.product = response;
            })
            .add(() => this.loading = false);
    }
}
