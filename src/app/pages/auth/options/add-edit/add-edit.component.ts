import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../services/alert/alert.service';
import {ICategory} from '../../../../interfaces/ICategory';
import {OptionService} from '../../../../services/auth/option/option.service';
import {IFileClassType} from '../../../../interfaces/IFile';
import {TokenHelper} from '../../../../helpers/TokenHelper';
import {IAttribute} from '../../../../interfaces/IAttribute';

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
    public categories: Array<ICategory>;
    public fileType = IFileClassType.option;
    public token: string = TokenHelper.generate();
	public attributes: Array<IAttribute>;

    constructor(
        private formBuilder: FormBuilder = null,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService,
        private optionService: OptionService
    ) {
        this.formGroup = this.formBuilder.group({
            id: [null],
            attribute_id: [null, Validators.required],
            name: [null, [Validators.required, Validators.maxLength(255)]],
            price: [null, [Validators.required]],
            type: [null, [Validators.required]],
            description: [null, [Validators.required]],
            weight: [null, [Validators.required]],
            height: [null, [Validators.required]],
            width: [null, [Validators.required]],
            length: [null, [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.dataprovider();
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
        this.loading += 1;
        this.optionService
            .store(this.formGroup.value)
            .subscribe((response) => {
                this.router.navigate(['/', 'auth', 'options'])
                this.alertService.toast(response.message);
            }, error => {
                this.alertService.treatError(error)
            })
            .add(() => this.loading -= 1);
    }

    private update() {
        this.loading += 1;
        this.optionService
          .update(this.formGroup.value)
          .subscribe((response) => {
              this.router.navigate(['/', 'auth', 'options'])
              this.alertService.toast(response.message);
          }, error => {
              this.alertService.treatError(error)
          })
          .add(() => this.loading -= 1);
    }

    private get() {
        this.loading += 1;
        this.optionService
            .get(this.id)
            .subscribe((response) => {
                this.formGroup.patchValue(response);
            })
            .add(() => this.loading -= 1);
    }

    private dataprovider() {
        this.loading += 1;
        this.optionService
            .dataprovider()
            .subscribe((response) => {
                this.attributes = response.attributes;
            })
            .add(() => this.loading -= 1);
    }
}
