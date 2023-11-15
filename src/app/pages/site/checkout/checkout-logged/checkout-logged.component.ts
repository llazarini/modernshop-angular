import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../../../interfaces/IProduct';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth/auth.service';
import {AppComponent} from '../../../../app.component';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';

@Component({
  selector: 'app-checkout-logged',
  templateUrl: './checkout-logged.component.html',
  styleUrls: ['./checkout-logged.component.scss'],
})
export class CheckoutLoggedComponent implements OnInit {
    public loading: number = 0;
    public formGroup: FormGroup;
    public products: Array<IProduct>;

    constructor(
        private router: Router,
        private authService: AuthService,
        private checkoutService: CheckoutService,
    ) {
    }

    public ngOnInit(): void {
        AppComponent.isBrowser.subscribe(browser => this.init(browser));
    }

    private init(browser: boolean) {
        if (!browser) {
            return;
        }
        if (!this.authService.logged && AppComponent.isBrowser) {
            this.router.navigate(['checkout'])
        }
        /*this.facebookPixelService.track('InitiateCheckout', {
            content_ids: this.checkoutService.products?.map(product => product.sku)
        });
        this.analyticsService.event('begin_checkout', 'checkout_logged', 'Checkout Logado Iniciado');
        */
    }
}
