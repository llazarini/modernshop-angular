import {Component, Input, OnInit} from '@angular/core';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {AuthService} from '../../../../services/auth/auth.service';
import {IProduct} from '../../../../interfaces/IProduct';
import {AlertService} from '../../../../services/alert/alert.service';
import {IUser} from '../../../../interfaces/IUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    public loading: number = 0;
    public products: Array<IProduct>;
    public total: number = 0;
    public subTotal: number = 0;
    public shipping: any;
    public user: IUser;
    public postalCode: string;
    public shippingOption: any;

    constructor(
        private checkoutService: CheckoutService,
        private authService: AuthService,
        private alertService: AlertService,
        private router: Router,
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
                this.total = this.subTotal;
            },
                error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }

    public remove(i: any) {
        this.products.splice(i, 1);
        this.checkoutService.products = this.products;
        this.shipment();
        this.change();
        if (!this.products.length) {
            this.router.navigate(['/', 'checkout', 'no-items'])
        }
    }

    public change() {
        this.subTotal = 0;
        this.products.forEach(product => {
            if (product.quantity <= 0) {
                product.quantity = 1;
            }
            let totalPrice = product.price;
            product.selected_options.forEach(option => {
                totalPrice += option.type ? option?.price : -option?.price;
            })
            product.total_price = totalPrice * product.quantity;
            this.subTotal += product.total_price;
        });
        this.total = this.subTotal;
        this.checkoutService.products = this.products;
        this.shipment();
    }

    public clearShipment() {
        this.postalCode = '';
        this.shipping = null;
    }

    public plus(i: number) {
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
}
