import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../../../interfaces/IProduct';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth/auth.service';
import {AlertService} from '../../../../services/alert/alert.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
    public loading: number = 0;
    public formGroup: FormGroup;
    public products: Array<IProduct>;
    public subTotal: number = 0;
    public total: number = 0;
    public cep: string;

    constructor(
        private checkoutService: CheckoutService,
        private router: Router,
        private authService: AuthService,
        private alertService: AlertService,
    ) {
        this.formGroup = new FormGroup({
            email: new FormControl(),
        });
    }

    public ngOnInit(): void {
        if (this.authService.logged) {
            this.router.navigate(['checkout', 'finish'])
        }
        this.index();
    }

    public index() {
        this.products = this.checkoutService.products;
    }

    public remove(i: any) {
        this.products.splice(i, 1);
        this.checkoutService.products = this.products;
    }

    public change() {
        this.products.forEach(product => {
            if (product.quantity <= 0) {
                product.quantity = 1;
            }
            product.total_price = product.price * product.quantity
        });
    }

    public submit() {
        if (this.loading > 0) {
            return;
        }
        this.loading += 1;
        this.checkoutService
            .exists(this.formGroup.value.email)
            .subscribe(exists => {
                if (exists) {
                    this.router.navigate(['checkout', 'login']);
                } else {
                    this.router.navigate(['checkout', 'create']);
                }
            }, error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }

    public shipping() {

    }
}
