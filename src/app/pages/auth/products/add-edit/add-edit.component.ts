import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../services/alert/alert.service';
import {ProductService} from '../../../../services/auth/product/product.service';
import {ICategory} from '../../../../interfaces/ICategory';
import {TokenHelper} from '../../../../helpers/TokenHelper';
import {IFileClassType} from '../../../../interfaces/IFile';
import {IOption} from '../../../../interfaces/IOption';

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
    public fileType = IFileClassType.product;
    public token: string = TokenHelper.generate();
    public categories: Array<ICategory> = [];
	public options: Array<IOption> = [];

    constructor(
      private formBuilder: FormBuilder = null,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private alertService: AlertService,
      private productService: ProductService
    ) {
        this.formGroup = this.formBuilder.group({
            request_token: [this.token],
            id: [null],
            sku: [null],
            name: [null, [Validators.required, Validators.maxLength(255)]],
            description: [null],
            price: [null],
            price_cost: [null],
            meta_name: [null],
            meta_description: [null],
            meta_keys: [null],
            categories: formBuilder.array([]),
            options: formBuilder.array([])
        });
    }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        if (this.id) {
            this.get();
        } else {
            this.dataprovider();
        }
    }

    private dataprovider() {
        this.loading = true;
        this.productService
            .dataprovider()
            .subscribe((response) => {
                this.categories.forEach(category => category.selected = true);
                this.formGroup.value.categories = this.categories.map(category => category.id);
                this.categories = this.categories.concat(response.categories.filter(item => !this.categories.some(category => category.id === item.id)));

                this.options.forEach(option => option.selected = true);
                this.formGroup.value.options = this.options.map(option => option.id);
                this.options = this.options.concat(response.options.filter(item => !this.options.some(option => option.id === item.id)));
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
        this.productService
            .store(this.formGroup.value)
            .subscribe((response) => {
                this.router.navigate(['/', 'auth', 'products'])
                this.alertService.toast(response.message);
            }, error => {
                this.alertService.treatError(error)
            })
            .add(() => this.loading = false);
    }

    private update() {
        this.loading = true;
        this.productService
          .update(this.formGroup.value)
          .subscribe((response) => {
              this.router.navigate(['/', 'auth', 'products'])
              this.alertService.toast(response.message);
          }, error => {
              this.alertService.treatError(error)
          })
          .add(() => this.loading = false);
    }

    private get() {
        this.loading = true;
        this.productService
            .get(this.id)
            .subscribe((response) => {
                this.formGroup.patchValue(response);
                this.options = response.options;
                this.categories = response.categories;
                this.dataprovider();
            })
            .add(() => this.loading = false);
    }

	public selectCategory(category: ICategory) {
        category.selected = !category.selected;
        this.formGroup.value.categories = this.categories
            .filter(category => category.selected)
            .map(category => category.id);
	}

    public nonSelectedCategories() {
        return this.categories?.filter(category => !category.selected)
    }

    public selectedCategories() {
        return this.categories?.filter(category => category.selected)
    }

    public selectOption(option: IOption) {
        option.selected = !option.selected;
        this.formGroup.value.options = this.options
            .filter(option => option.selected)
            .map(option => option.id);
    }

    public nonSelectedOptions() {
        return this.options?.filter(option => !option.selected)
    }

    public selectedOptions() {
        return this.options?.filter(option => option.selected)
    }
}
