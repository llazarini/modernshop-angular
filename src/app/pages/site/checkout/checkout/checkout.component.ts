import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../../../interfaces/IProduct';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth/auth.service';
import {AlertService} from '../../../../services/alert/alert.service';
import {UserService} from '../../../../services/guest/user/user.service';
import {AppComponent} from '../../../../app.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
    public loading: number = 0;
    public formGroup: FormGroup;
    public products: Array<IProduct>;
    public total: number = 0;

    constructor(
        private checkoutService: CheckoutService,
        private router: Router,
        private authService: AuthService,
        private alertService: AlertService,
        private userService: UserService,
        ) {
        this.formGroup = new FormGroup({
            email: new FormControl(),
        });
    }

    public ngOnInit(): void {
        if (this.authService.logged && AppComponent.isBrowser) {
            this.router.navigate(['checkout', 'logged'])
        }
    }

    public submit() {
        if (this.loading > 0) {
            return;
        }
        this.loading += 1;
        this.checkoutService
            .exists(this.formGroup.value.email)
            .subscribe(exists => {
                this.userService.email = this.formGroup.value.email;
                if (exists) {
                    this.router.navigate(['user', 'login']);
                } else {
                    this.router.navigate(['user', 'create']);
                }
            }, error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }
}
