import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../../../interfaces/IProduct';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-checkout-logged',
  templateUrl: './checkout-logged.component.html',
  styleUrls: ['./checkout-logged.component.scss'],
})
export class CheckoutLoggedComponent implements OnInit {
    public loading: number = 0;
    public formGroup: FormGroup;
    public products: Array<IProduct>;
    public total: number = 0;

    constructor(
        private router: Router,
        private authService: AuthService,
    ) {
    }

    public ngOnInit(): void {
        if (!this.authService.logged) {
            this.router.navigate(['checkout'])
        }
    }
}
