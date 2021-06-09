import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
    public loading: number = 0;
    public error: string;
    public id: number = null;
    public fileType = IFileClassType.product;
    public token: string = TokenHelper.generate();
    public categories: Array<ICategory> = [];
	public options: Array<IOption> = [];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService,
        private productService: ProductService
    ) {
        this.formGroup = new FormGroup({
            request_token: new FormControl([this.token]),
            id: new FormControl([null]),
            sku: new FormControl([null]),
            name: new FormControl([null, [Validators.required, Validators.maxLength(255)]]),
            description: new FormControl([null]),
            price: new FormControl([null]),
            price_cost: new FormControl([null]),
            meta_name: new FormControl([null]),
            meta_description: new FormControl([null]),
            meta_keys: new FormControl([null]),
            categories: new FormControl([]),
            options:  new FormControl([])
        });
    }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.dataprovider();
        if (this.id) {
            this.get();
        }
    }

    private dataprovider() {
        this.loading += 1;
        this.productService
            .dataprovider()
            .subscribe((response) => {
                this.categories = response.categories;
                this.options = response.options;
            })
            .add(() => this.loading -= 1);
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
        this.loading += 1;
        this.productService
            .store(this.formGroup.value)
            .subscribe((response) => {
                this.router.navigate(['/', 'auth', 'products'])
                this.alertService.toast(response.message);
            }, error => {
                this.alertService.treatError(error)
            })
            .add(() => this.loading -= 1);
    }

    private update() {
        this.loading += 1;
        this.productService
          .update(this.formGroup.value)
          .subscribe((response) => {
              this.router.navigate(['/', 'auth', 'products'])
              this.alertService.toast(response.message);
          }, error => {
              this.alertService.treatError(error)
          })
          .add(() => this.loading -= 1);
    }

    private get() {
        this.loading += 1;
        this.productService
            .get(this.id)
            .subscribe((response) => {
                const product: any = response;
                product.options = response.options?.map(item => item.id);
                product.categories = response.categories?.map(item => item.id);
                this.formGroup.patchValue(product);
            })
            .add(() => this.loading -= 1);
    }
}