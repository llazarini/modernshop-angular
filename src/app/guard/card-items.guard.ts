import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {CheckoutService} from '../services/guest/checkout/checkout.service';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CardItemsGuard implements CanActivate {
    private browser: boolean;

    constructor(private checkoutService: CheckoutService, private router: Router) {
        AppComponent.isBrowser.subscribe(isBrowser => {
            this.browser = isBrowser;
        });
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.browser || this.checkoutService.products.length) {
            return true;
        }
        this.router.navigate(['/', 'checkout', 'no-items']);
        return false;
    }
}
