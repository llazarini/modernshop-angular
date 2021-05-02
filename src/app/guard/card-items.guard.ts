import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth/auth.service";
import {CheckoutService} from '../services/guest/checkout/checkout.service';

@Injectable({
  providedIn: 'root'
})
export class CardItemsGuard implements CanActivate {

    constructor(private checkoutService: CheckoutService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.checkoutService.products.length) {
            return true;
        }
        this.router.navigate(['/', 'checkout', 'no-items']);
        return false;
    }
}
