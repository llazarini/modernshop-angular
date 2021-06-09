import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../services/alert/alert.service';
import {IBanner} from '../../../../interfaces/IBanner';
import {BannerService} from '../../../../services/auth/banner/banner.service';
import {TokenHelper} from '../../../../helpers/TokenHelper';
import {IFile} from '../../../../interfaces/IFile';

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
    public token: string = TokenHelper.generate();

    constructor(
      private formBuilder: FormBuilder = null,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private alertService: AlertService,
      private bannerService: BannerService
    ) {
        this.formGroup = this.formBuilder.group({
            request_token: [this.token],
            id: [null],
            name: [null, [Validators.required, Validators.maxLength(255)]],
            slug: [null],
            banners: this.formBuilder.array([])
        });
    }

    public get banners() {
        return this.formGroup.get('banners') as FormArray;
    }

    public ngOnInit(): void {
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
        this.bannerService
            .store(this.formGroup.value)
            .subscribe((response) => {
                this.router.navigate(['/', 'auth', 'banners'])
                this.alertService.toast(response.message);
            }, error => {
                this.alertService.treatError(error)
            })
            .add(() => this.loading = false);
    }
    private update() {
        this.loading = true;
        this.bannerService
            .update(this.formGroup.value)
            .subscribe((response) => {
                this.router.navigate(['/', 'auth', 'banners'])
                this.alertService.toast(response.message);
            }, error => {
                this.alertService.treatError(error)
            })
            .add(() => this.loading = false);
    }

    private get() {
        this.loading = true;
        this.bannerService
            .get(this.id)
            .subscribe((response) => {
                this.formGroup.patchValue(response);
                response.banners.forEach(banner => this.addBanner(banner))
            })
            .add(() => this.loading = false);
    }

    public addBanner(banner?: IBanner) {
        this.banners.push(
            this.formBuilder.group({
                id: [banner?.id],
                // @ts-ignore
                file_id: [banner?.file?.id],
                name: [banner?.name, [Validators.required, Validators.maxLength(255)]],
                content: [banner?.content],
            })
        );
    }

    public fileUploaded(i: number, file: IFile) {
        this.banners.at(i).patchValue({
            file_id: file.id,
        });
    }

    public removeBanner(i: number) {
        this.banners.removeAt(i);
    }
}
