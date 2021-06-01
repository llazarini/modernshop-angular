import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../services/alert/alert.service';
import {ICategory} from '../../../../interfaces/ICategory';
import {CategoryService} from '../../../../services/auth/category/category.service';
import {TokenHelper} from '../../../../helpers/TokenHelper';
import {IFileClassType} from '../../../../interfaces/IFile';
import {AttributeService} from '../../../../services/auth/attribute/attribute.service';

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
      private attributeService: AttributeService
    ) {
        this.formGroup = this.formBuilder.group({
            id: [null],
            name: [null, [Validators.required, Validators.maxLength(255)]],
            description: [null],
            slug: [null],
        });
    }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        if (this.id) {
            this.get();
        }
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
        this.attributeService
            .store(this.formGroup.value)
            .subscribe((response) => {
                this.router.navigate(['/', 'auth', 'attributes'])
                this.alertService.toast(response.message);
            }, error => {
                this.alertService.treatError(error)
            })
            .add(() => this.loading = false);
    }
    private update() {
        this.loading = true;
        this.attributeService
            .update(this.formGroup.value)
            .subscribe((response) => {
                this.router.navigate(['/', 'auth', 'attributes'])
                this.alertService.toast(response.message);
            }, error => {
                this.alertService.treatError(error)
            })
            .add(() => this.loading = false);
    }

    private get() {
        this.loading = true;
        this.attributeService
            .get(this.id)
            .subscribe((response) => {
                this.formGroup.patchValue(response);
            })
            .add(() => this.loading = false);
    }
}
