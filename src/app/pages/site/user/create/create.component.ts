import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../../../interfaces/IProduct';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../../services/alert/alert.service';
import {AuthService} from '../../../../services/auth/auth.service';
import {UserService} from '../../../../services/guest/user/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
    public loading: number = 0;
    public products: Array<IProduct>;
    public total: number = 0;
    public formGroup: FormGroup;

    constructor(
        private userService: UserService,
        private alertService: AlertService,
        private authService: AuthService,
        private router: Router,
    ) {
        this.formGroup = new FormGroup({
            name: new FormControl('', [Validators.minLength(10), Validators.maxLength(100)]),
            email: new FormControl('', [Validators.email]),
            cpf: new FormControl('', ),
            phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
            password: new FormControl('', [Validators.minLength(6), Validators.maxLength(100)]),
            password_confirm: new FormControl('', [Validators.minLength(6), Validators.maxLength(100)]),
        });
    }

    public get form() {
        return this.formGroup.controls;
    }

    public ngOnInit(): void {
        if (this.authService.logged) {
            this.router.navigate(['checkout', 'finish']);
        }
    }

    public submit() {
        if (!this.formGroup.valid || this.loading > 0) {
            return;
        }
        this.loading += 1;
        this.userService
            .create(this.formGroup.value)
            .subscribe(response => {
                this.authService.login(response);
                this.router.navigate(['user', 'address'])
            }, error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }
}
