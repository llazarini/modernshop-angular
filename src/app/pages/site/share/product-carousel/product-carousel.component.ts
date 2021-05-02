import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/guest/product/product.service';
import {IProduct} from '../../../../interfaces/IProduct';
@Component({
  selector: "app-product-carousel",
  templateUrl: "./product-carousel.component.html",
  styleUrls: ["./product-carousel.component.scss"],
})
export class ProductCarouselComponent implements OnInit {
    @Input()
    public category: string;
    public products: Array<IProduct>;
    public loading: number;

    constructor(private productService: ProductService) {}

    public ngOnInit() {
        this.getAll();
    }

    private getAll() {
        this.loading += 1;
        this.productService
            .category(this.category)
            .subscribe(response => {
                this.products = response.data;
            })
            .add(() => this.loading -= 1);
    }
}
