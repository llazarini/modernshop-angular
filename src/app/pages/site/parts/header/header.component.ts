import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	private loggingSubscription: Subscription;
	public search: string;
	public badge: number;
	public logged: boolean;

	constructor(
		private authService: AuthService,
		private router: Router,
		private checkoutService: CheckoutService,
	) {}

	public ngOnInit() {
		this.logged = this.authService.logged;
		this.badge = this.checkoutService.quantity;
		this.loggingSubscription = this.authService
			.logging()
			.subscribe(response => {
				this.logged = response;
			});
		this.checkoutService
			.productsQuantity()
			.subscribe(response => {
				this.badge = response;
			});
	}

	public ngOnDestroy() {
		if (this.loggingSubscription) {
			this.loggingSubscription.unsubscribe();
		}
	}

	public logout() {
		this.authService.logout();
		this.router.navigate(['/'])
	}
}
