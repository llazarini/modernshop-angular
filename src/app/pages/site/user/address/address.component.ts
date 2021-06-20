import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IState} from '../../../../interfaces/IState';
import {ICity} from '../../../../interfaces/ICity';
import {StateService} from '../../../../services/auth/state/state.service';
import {AddressService} from '../../../../services/auth/address/address.service';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {AlertService} from '../../../../services/alert/alert.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth/auth.service';
import {UserService} from '../../../../services/guest/user/user.service';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
    public formGroup: FormGroup;
    public index: number = 0;
    public states: Array<IState>;
    public cities: Array<ICity>;
    public loading: number = 0;
    public searchCity: string = '';
    public found: boolean = false;
    public shippingOption: string;
    public shipping: any;

    constructor(
        private stateService: StateService,
        private addressService: AddressService,
        private checkoutService: CheckoutService,
        private alertService: AlertService,
        private router: Router,
        private userService: UserService,
        private authService: AuthService,
        private analyticsService: GoogleAnalyticsService,
    ) {
        this.formGroup = new FormGroup({
            id: new FormControl(null),
            zip_code: new FormControl('', [Validators.required, Validators.minLength(8)]),
            street_name: new FormControl('', [Validators.required]),
            street_number: new FormControl('', [Validators.required]),
            neighborhood: new FormControl('', [Validators.required]),
            complement: new FormControl('', ),
            state_id: new FormControl('', [Validators.required]),
            city_id: new FormControl('', [Validators.required]),
        });
    }

    public get form() {
        return this.formGroup.controls;
    }

    ngOnInit(): void {
        if (this.authService.logged) {
            this.user();
        }
        this.analyticsService.event('add_shipping_info', 'user_address');
        this.getStates();
    }

    public shipment() {
        const postal = this.formGroup.value.zip_code;
        this.loading += 1;
        this.checkoutService
            .shipment(postal, this.checkoutService.products)
            .subscribe((shippings) => {
                    shippings = shippings.filter(shipping => !shipping.error);
                    this.shipping = shippings;
                    this.checkoutService.shipping = shippings;
                    this.checkoutService.postalCode = postal;
                },
                error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }

    public stateChanged()
    {
        if (!this.formGroup.value?.state_id) {
            return;
        }
        this.loading += 1;
        this.stateService
            .getAllCities(this.formGroup.value?.state_id)
            .subscribe((response) => {
                this.cities = response;
            })
            .add(() => this.loading -= 1)
    }

    public searchPostalCode()
    {
        if (this.formGroup.value.zip_code?.length !== 8 || this.loading > 0) {
            return;
        }
        this.loading += 1;
        this.addressService
            .postalCode(this.formGroup.value.zip_code)
            .subscribe((response) => {
                this.formGroup.patchValue(response)
                this.found = false;
                this.shipment();
                this.stateChanged();
            }, error => this.alertService.treatError(error))
            .add(() => this.loading -= 1)
    }

    public cityName(item: any) {
        return item.name;
    }

    public getCities() {
        if (!this.cities) {
            return [];
        }
        return this.cities
            .filter(city => city.name.toLowerCase().indexOf(this.searchCity.toLowerCase()) >= 0)
    }

    private getStates() {
        this.loading += 1;
        this.stateService
            .states()
            .subscribe(states => {
                this.states = states;
            }, error => this.alertService.treatError(error))
            .add(() => this.loading -= 1)
    }

    public submit() {
        if (this.loading > 0 || this.formGroup.invalid) {
            return;
        }
        if (!this.checkoutService.shippingOption) {
            this.alertService.alert('Escolha uma opção de frete.', 'Escolha um frete antes.')
            return;
        }
        this.loading += 1;
        this.userService
            .address(this.formGroup.value)
            .subscribe(response => {
                this.router.navigate(['checkout', 'finish']);
            }, error => this.alertService.treatError(error))
            .add(() => this.loading -= 1)
    }

    public setShipping() {
        this.checkoutService.shippingOption = this.shippingOption;
    }

    private user() {
        this.loading += 1;
        this.userService
            .me()
            .subscribe(user => {
                this.formGroup.patchValue(user.main_address)
                this.shipment();
                this.stateChanged();
            }, error => this.alertService.treatError(error))
            .add(() => this.loading -= 1)
    }
}
