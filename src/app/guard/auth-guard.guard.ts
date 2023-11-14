import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth/auth.service";
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard  {
    private browser: boolean;

    constructor(private authService: AuthService, private router: Router) {
        AppComponent.isBrowser.subscribe(isBrowser => {
            this.browser = isBrowser;
        });
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.logged || !this.browser) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
