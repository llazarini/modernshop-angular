import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../services/alert/alert.service';
import {TokenHelper} from '../../../../helpers/TokenHelper';
import {IFileClassType} from '../../../../interfaces/IFile';
import {DiscountService} from '../../../../services/auth/discount/discount.service';
import {IOption} from '../../../../interfaces/IOption';
import {IDiscountOption} from '../../../../interfaces/IDiscount';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
    public formGroup: FormGroup;
    public loading: boolean;
    public error: string;
    public id: number = null;
    public options: Array<IOption>;


    public get discountOptions() {
        return this.formGroup.get('discount_options') as FormArray;
    }

    constructor(
      private formBuilder: FormBuilder = null,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private alertService: AlertService,
      private discountService: DiscountService
    ) {
        this.formGroup = new FormGroup({
            id: new FormControl(),
            name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
            code: new FormControl(),
            type: new FormControl('percentage'),
            value: new FormControl(),
            discount_options: new FormArray([]),
        });
    }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        if (this.id) {
            this.get();
        }
        this.dataprovider();
    }

    private dataprovider() {
        this.loading = true;
        this.discountService
            .dataprovider()
            .subscribe((response) => {
                this.options = response.options;
            })
            .add(() => this.loading = false);
    }

    public submit() {
        if (this.loading) {
            return;
        }
        if (this.id) {
            this.update();
        } else {
            this.store();
        }
    }

    private store() {
        this.loading = true;
        this.discountService
            .store(this.formGroup.value)
            .subscribe((response) => {
                this.router.navigate(['/', 'auth', 'discounts'])
                this.alertService.toast(response.message);
            }, error => {
                this.alertService.treatError(error)
            })
            .add(() => this.loading = false);
    }
    private update() {
        this.loading = true;
        this.discountService
          .update(this.formGroup.value)
          .subscribe((response) => {
              this.router.navigate(['/', 'auth', 'discounts'])
              this.alertService.toast(response.message);
          }, error => {
              this.alertService.treatError(error)
          })
          .add(() => this.loading = false);
    }

    private get() {
        this.loading = true;
        this.discountService
            .get(this.id)
            .subscribe((response) => {
                this.formGroup.patchValue(response);
                response.discount_options?.forEach(option => this.addDiscount(option))
            })
            .add(() => this.loading = false);
    }

	public addDiscount(option?: IDiscountOption) {
        this.discountOptions.push(new FormGroup({
            id: new FormControl(option?.id),
            option_id: new FormControl(option?.option_id),
            min_products: new FormControl(option?.min_products),
            max_products: new FormControl(option?.max_products),
            value: new FormControl(option?.value),
        }));
	}

    public removeDiscount(index: number) {
        this.discountOptions.removeAt(index);
    }
}
