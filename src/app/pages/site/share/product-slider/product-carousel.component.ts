import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product/product.service';
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

    constructor(private productService: ProductService) {
    }

    public ngOnInit() {
        this.getAll();
    }

    private getAll() {
        this.productService
            .carousel(this.category)
            .subscribe(response => {
                this.products = response.data;
            })
    }
}
