import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/guest/product/product.service';
import {IProduct} from '../../../../interfaces/IProduct';
import {ActivatedRoute, Router} from '@angular/router';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {AlertService} from '../../../../services/alert/alert.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
    public loading: number = 0;
    public product: IProduct;
    private id: number;
    public postalCode: string;

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private checkoutService: CheckoutService,
        private router: Router,
        private alertService: AlertService,
    ) {}

    public ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.show();
    }

    public show() {
        this.loading += 1;
        this.productService
            .show(this.id)
            .subscribe(response => {
                this.product = response;
            })
            .add(() => this.loading -= 1);
    }

    public addChart() {
        this.checkoutService.add(this.product);
    }

    public buyNow() {
        this.checkoutService.add(this.product);
        this.router.navigate(['checkout'])
	}

    public shipment() {
        if (this.loading > 0) {
            return;
        }
        this.loading += 1;
        this.checkoutService
            .shipment(this.postalCode, [this.product])
            .subscribe((response) => {
                    console.log(response);
                },
                error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }
}
