import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public badge: number;
	public logged: boolean;
	constructor(
		private authService: AuthService,
		private router: Router,
		private checkoutService: CheckoutService
	) {}

	public ngOnInit() {
		this.logged = this.authService.logged;
		this.authService
			.logging()
			.subscribe(response => {
				this.logged = response;
			});

	}

	public logout() {
		this.authService.logout();
		this.badge = this.checkoutService.products.length;
		this.router.navigate(['/'])
	}
}
