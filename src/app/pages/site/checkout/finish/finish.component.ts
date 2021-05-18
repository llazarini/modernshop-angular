import { Component, OnInit } from '@angular/core';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {IProduct} from '../../../../interfaces/IProduct';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../../services/alert/alert.service';
import {Router} from '@angular/router';
import {IUser} from '../../../../interfaces/IUser';
import {AuthService} from '../../../../services/auth/auth.service';
import {UserService} from '../../../../services/guest/user/user.service';

@Component({
    selector: 'app-finish',
    templateUrl: './finish.component.html',
    styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {
    public loading: number = 0;
    public products: Array<IProduct>;
    public total: number = 0;
    public formGroup: FormGroup;
	public subTotal: number;
    public shippingOption: any;
	public user: IUser;

    constructor(
        private checkoutService: CheckoutService,
        private alertService: AlertService,
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
    ) {
        this.formGroup = new FormGroup({
            name: new FormControl([], [Validators.required]),
            cpf: new FormControl([], [Validators.required, Validators.minLength(11)]),
            number: new FormControl([], [Validators.required, Validators.minLength(16)]),
            date: new FormControl([], [Validators.required, Validators.minLength(4)]),
            cvc: new FormControl([], [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
            products: new FormArray([]),
            shipping: new FormControl([]),
        });
    }

    public get form() {
        return this.formGroup.controls;
    }

    public ngOnInit(): void {
        this.index();
        this.userService.me().subscribe(user => {
            this.user = user;
        })
        this.user = this.authService.user;
    }

    public index() {
        this.products = this.checkoutService.products;
        this.shippingOption = this.checkoutService.shippingOption;
        this.total = this.checkoutService.total;
        this.subTotal = this.checkoutService.subTotal;
        if (!this.shippingOption) {
            this.router.navigate(['user', 'address']);
        }
    }

    public submit() {
        if (this.loading > 0 || !this.formGroup.valid) {
            return;
        }
        this.loading += 1;
        const form = this.formGroup.value;
        this.checkoutService
            .paymentCreditCard(form)
            .subscribe((response) => {
                this.router.navigate(['checkout', 'success', response.data.id])
                this.checkoutService.clear();
            },
            error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }

	public pix() {
        this.checkoutService
            .paymentPix()
            .subscribe((response) => {
                    this.router.navigate(['checkout', 'success', response.data.id])
                    this.checkoutService.clear();
                },
                error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
	}
}
