import {Component, Input, OnInit} from '@angular/core';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {AuthService} from '../../../../services/auth/auth.service';
import {IProduct} from '../../../../interfaces/IProduct';
import {AlertService} from '../../../../services/alert/alert.service';
import {IUser} from '../../../../interfaces/IUser';
import {Router} from '@angular/router';
import {IDiscount} from '../../../../interfaces/IDiscount';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    public loading: number = 0;
    public products: Array<IProduct>;
    public shipping: any;
    public user: IUser;
    public postalCode: string;
    public discountCode: string;

    constructor(
        private checkoutService: CheckoutService,
        private authService: AuthService,
        private alertService: AlertService,
        private router: Router,
        private analyticsService: GoogleAnalyticsService
    ) {}

    ngOnInit(): void {
        this.products = this.checkoutService.products;
        this.user = this.authService.user;
        this.postalCode = this.checkoutService.postalCode;
        this.shipment();
        this.change();
    }

    public shipment() {
        if (this.loading > 0 && !this.user?.main_address?.zip_code) {
            return;
        }
        const postal = this.user?.main_address?.zip_code ? this.user?.main_address?.zip_code : this.postalCode;
        const products = this.checkoutService.products;
        if (!postal || !products.length) {
            return;
        }
        this.loading += 1;
        this.checkoutService
            .shipment(postal, products)
            .subscribe((shippings) => {
                shippings = shippings.filter(shipping => !shipping.error);
                this.shipping = shippings;
                this.checkoutService.shipping = shippings;
                this.checkoutService.postalCode = postal;
            },
                error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }

    public get bestShipping() {
        let time = -1;
        let price = -1;
        this.shipping?.forEach(shipping => {
            if (shipping.delivery_time < time || time == -1) {
                time = shipping.delivery_time;
            }
            if (+shipping.price < price || price == -1) {
                price = +shipping.price;
            }
        })
        return { time, price }
    }

    public remove(i: any) {
        this.analyticsService.event('remove_from_cart', 'cart');
        this.products.splice(i, 1);
        this.checkoutService.products = this.products;
        this.shipment();
        this.change();
        if (!this.products.length) {
            this.router.navigate(['/', 'checkout', 'no-items'])
        }
    }

    public change() {
        this.checkoutService.products = this.products;
        this.shipment();
    }

    public plus(i: number) {
        this.analyticsService.event('add_to_cart', 'cart');
        this.products[i].quantity += 1;
        this.change();
    }

    public minus(i: number) {
        this.products[i].quantity -= 1;
        if (this.products[i].quantity <= 0) {
            this.remove(i);
        }
        this.change();
    }

    public applyDiscountCode() {
        this.loading += 1;
        this.checkoutService
            .discountCode(this.discountCode)
            .subscribe((discount) => {
                this.checkoutService.applyDiscount(discount);
            },
            error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }

    public get total(): number {
        return this.checkoutService.total;
    }

    public get subTotal(): number {
        return this.checkoutService.subTotal;
    }

    public get subTotalWithDiscount(): number {
        return this.checkoutService.subTotalWithDiscount;
    }

    public get discount(): IDiscount {
        return this.checkoutService.discount;
    }
}
