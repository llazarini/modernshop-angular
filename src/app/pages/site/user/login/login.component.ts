import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../../../interfaces/IProduct';
import {FormControl, FormGroup} from '@angular/forms';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth/auth.service';
import {UserService} from '../../../../services/guest/user/user.service';
import {AlertService} from '../../../../services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loading: number = 0;
    public products: Array<IProduct>;
    public total: number = 0;
    public formGroup: FormGroup;
    public error: string;

    constructor(
        private userService: UserService,
        private router: Router,
        private alertService: AlertService,
        private authService: AuthService
    )
    {
        this.formGroup = new FormGroup({
            email: new FormControl(this.userService.email),
            password: new FormControl(),
        });
    }

    public ngOnInit(): void {
        if (this.authService.logged) {
            this.router.navigate(['checkout', 'finish']);
        }
    }

    public submit() {
        if (this.loading > 0) {
            return;
        }
        this.loading += 1;
        this.userService
            .login(this.formGroup.value.email, this.formGroup.value.password)
            .subscribe((response) => {
                this.authService.login(response);
                this.router.navigate(['/checkout', 'finish'])
            }, (response) => {
                this.error = response.error.message;
            }).add(() => {
                this.loading -= 1;
                this.formGroup.patchValue({
                    password: '',
                })
        });
    }
}
