import { Component, OnInit } from '@angular/core';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {IProduct} from '../../../../interfaces/IProduct';
import {FormControl, FormGroup} from '@angular/forms';
import {AlertService} from '../../../../services/alert/alert.service';

@Component({
    selector: 'app-finish',
    templateUrl: './finish.component.html',
    styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {
    public loading: number;
    public products: Array<IProduct>;
    public subTotal: number = 0;
    public total: number = 0;
    public cep: string;
    public formGroup: FormGroup;

    constructor(
        private checkoutService: CheckoutService,
        private alertService: AlertService
    ) {
        this.formGroup = new FormGroup({
            cardNumber: new FormControl(),
            name: new FormControl(),
            number: new FormControl(),
            cvc: new FormControl(),
        });
    }

    public ngOnInit(): void {
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

    public shipping() {

    }

    public submit() {
        if (this.loading > 0) {
            return;
        }
        this.loading += 1;
        this.checkoutService.payment(this.formGroup.value)
            .subscribe((response) => {
                console.log(response);
            },
            error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }
}
