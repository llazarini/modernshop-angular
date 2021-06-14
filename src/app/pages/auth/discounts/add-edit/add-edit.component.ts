import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../services/alert/alert.service';
import {ICategory} from '../../../../interfaces/ICategory';
import {TokenHelper} from '../../../../helpers/TokenHelper';
import {IFileClassType} from '../../../../interfaces/IFile';
import {DiscountService} from '../../../../services/auth/discount/discount.service';

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
    public categories: Array<ICategory>;
    public token: string = TokenHelper.generate();
    public fileType = IFileClassType.category;

    constructor(
      private formBuilder: FormBuilder = null,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private alertService: AlertService,
      private discountService: DiscountService
    ) {
        this.formGroup = this.formBuilder.group({
            request_token: [this.token],
            id: [null],
            name: [null, [Validators.required, Validators.maxLength(255)]],
            code: [null],
            type: ['percentage'],
            value: [null],
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
            })
            .add(() => this.loading = false);
    }
}
