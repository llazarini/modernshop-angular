import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IState} from '../../../../interfaces/IState';
import {ICity} from '../../../../interfaces/ICity';
import {StateService} from '../../../../services/auth/state/state.service';
import {AddressService} from '../../../../services/auth/address/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    @Output()
    private removeEvent = new EventEmitter<number>();
    @Input()
    public formGroup: FormGroup;
    @Input()
    public index: number = 0;
    @Input()
    public states: Array<IState>;
    public cities: Array<ICity>;
    public loading: boolean = false;
    public searchCity: string = '';

    constructor(
        private stateService: StateService,
        private addressService: AddressService
    ) { }

    ngOnInit(): void {
        if (this.formGroup?.value?.state_id) {
            this.stateChanged();
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

	public searchPostalCode() {
        if (this.formGroup.value.postal_code?.length !== 8 || this.loading) {
            return;
        }
        this.loading = true;
        this.addressService
            .postalCode(this.formGroup.value.postal_code)
            .subscribe((response) => {
                this.formGroup.patchValue(response)
                this.stateChanged();
            })
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
            .filter(city => city.name.toLowerCase()
                .indexOf(this.searchCity.toLowerCase()) >= 0)
    }
}
