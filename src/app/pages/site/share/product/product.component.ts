import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../../interfaces/IProduct';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {Router} from '@angular/router';
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
    @Input()
    public product: IProduct;

    constructor(private checkoutService: CheckoutService, private router: Router) {
    }

    public ngOnInit() {
    }

	public addChart() {
		this.checkoutService.add(this.product)
	}

	open() {
		this.router.navigate(['/', 'product', 'view', this.product.id]);
	}
}
