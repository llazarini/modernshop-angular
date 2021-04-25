import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IState} from '../../../../interfaces/IState';
import {ICity} from '../../../../interfaces/ICity';
import {StateService} from '../../../../services/auth/state/state.service';
import {AddressService} from '../../../../services/auth/address/address.service';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {AlertService} from '../../../../services/alert/alert.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth/auth.service';
import {UserService} from '../../../../services/guest/user/user.service';

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
    public loading: boolean = false;
    public searchCity: string = '';
    public found: boolean = false;

    constructor(
        private stateService: StateService,
        private addressService: AddressService,
        private checkoutService: CheckoutService,
        private alertService: AlertService,
        private router: Router,
        private userService: UserService,
        private authService: AuthService,
    ) {
        this.formGroup = new FormGroup({
            zip_code: new FormControl('', ),
            street_name: new FormControl('', ),
            street_number: new FormControl('', ),
            neighborhood: new FormControl(''),
            complement: new FormControl('', ),
            state_id: new FormControl('', ),
            city_id: new FormControl('', ),
        });
    }

    ngOnInit(): void {
        this.getStates();
        if (this.authService.logged) {
            this.userService.me().subscribe(user => {
                this.formGroup.patchValue(user.main_address)
                this.stateChanged();
            })
        }
    }

    public stateChanged()
    {
        this.loading = true;
        this.stateService
            .getAllCities(this.formGroup.value?.state_id)
            .subscribe((response) => {
                this.cities = response;
            })
            .add(() => this.loading = false)
    }

    public searchPostalCode()
    {
        if (this.formGroup.value.zip_code?.length !== 8 || this.loading) {
            return;
        }
        this.loading = true;
        this.addressService
            .postalCode(this.formGroup.value.zip_code)
            .subscribe((response) => {
                this.formGroup.patchValue(response)
                this.found = false;
                this.stateChanged();
            }, error => this.alertService.treatError(error))
            .add(() => this.loading = false)
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
        this.loading = true;
        this.stateService
            .states()
            .subscribe(states => {
                this.states = states;
            }, error => this.alertService.treatError(error))
            .add(() => this.loading = false)
    }

    public submit() {
        this.loading = true;
        this.checkoutService
            .address(this.formGroup.value)
            .subscribe(response => {
                this.router.navigate(['checkout', 'finish']);
            }, error => this.alertService.treatError(error))
            .add(() => this.loading = false)
    }
}
