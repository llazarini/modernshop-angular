import { Component, OnInit } from '@angular/core';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {IInstallment, IProduct} from '../../../../interfaces/IProduct';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../../services/alert/alert.service';
import {Router} from '@angular/router';
import {IUser} from '../../../../interfaces/IUser';
import {AuthService} from '../../../../services/auth/auth.service';
import {UserService} from '../../../../services/guest/user/user.service';
import {IDiscount} from '../../../../interfaces/IDiscount';

@Component({
    selector: 'app-finish',
    templateUrl: './finish.component.html',
    styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {
    public loading: number = 0;
    public products: Array<IProduct>;
    public formGroup: FormGroup;
    public shippingOption: any;
	public user: IUser;
	public option: string = '';
    public total: number = 0;
    public subTotal: number = 0;
    public subTotalWithDiscount: number = 0;
    public discount: IDiscount;
	public installments: Array<IInstallment>;

    constructor(
        private checkoutService: CheckoutService,
        private alertService: AlertService,
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
    ) {
        this.formGroup = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            cpf: new FormControl(null, [Validators.required, Validators.minLength(11)]),
            number: new FormControl(null, [Validators.required, Validators.minLength(16)]),
            date: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            cvc: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
            products: new FormArray([]),
            shipping: new FormControl(),
            installments: new FormControl(1, [Validators.required]),
        });
    }

    public get form() {
        return this.formGroup.controls;
    }

    public ngOnInit(): void {
        this.installments = this.checkoutService.installments;
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
        this.subTotalWithDiscount = this.checkoutService.subTotalWithDiscount;
        this.discount = this.checkoutService.discount;
        if (!this.shippingOption) {
            this.router.navigate(['user', 'address']);
        }
    }

    public creditCard() {
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
        this.loading += 1;
        this.checkoutService
            .paymentPix()
            .subscribe((response) => {
                this.router.navigate(['checkout', 'success', response.data.id])
                this.checkoutService.clear();
            },
            error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
	}

    public submit() {
        this.formGroup.markAllAsTouched();
        if (this.loading > 0) {
            return;
        }
        if (this.option === 'pix') {
            this.pix();
            return;
        }
        if (!this.formGroup.valid) {
            return;
        }
        this.creditCard();
    }
}
