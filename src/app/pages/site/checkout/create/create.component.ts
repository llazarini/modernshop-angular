import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../../../interfaces/IProduct';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../../services/alert/alert.service';
import {AuthService} from '../../../../services/auth/auth.service';

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
        private checkoutService: CheckoutService,
        private alertService: AlertService,
        private authService: AuthService,
        private router: Router,
    ) {
        this.formGroup = new FormGroup({
            name: new FormControl('', [Validators.min(5), Validators.max(100)]),
            email: new FormControl('', [Validators.email]),
            cpf: new FormControl('', ),
            phone: new FormControl('', ),
            password: new FormControl('', [Validators.min(6), Validators.max(100)]),
            password_confirm: new FormControl('', [Validators.min(6), Validators.max(100)]),
        });
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
        this.checkoutService
            .create(this.formGroup.value)
            .subscribe(response => {
                this.authService.login(response);
                this.router.navigate(['checkout', 'address'])
            }, error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }
}
