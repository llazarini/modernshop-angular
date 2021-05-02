import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../../interfaces/IProduct';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../../services/alert/alert.service';
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
    @Input()
    public product: IProduct;

    constructor(
    	private checkoutService: CheckoutService,
	    private router: Router,) {}

    public ngOnInit() {}

	buy() {
		this.router.navigate(['/', 'product', 'view', this.product.id]);
	}
}
