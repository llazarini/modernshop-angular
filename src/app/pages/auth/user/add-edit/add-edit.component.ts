import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../services/alert/alert.service';
import {UserService} from '../../../../services/auth/user/user.service';

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

    constructor(
        private userService: UserService,
        private formBuilder: FormBuilder = null,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService,
    ) { }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.formGroup = this.formBuilder.group({
            id: [null],
            name: [null, [Validators.required, Validators.maxLength(255)]],
            email: [null, [Validators.required, Validators.maxLength(2048)]],
            hourly_rate: [0],
        });
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
        this.userService
            .store(this.formGroup.value)
            .subscribe((response) => {
              this.router.navigate(['/', 'auth', 'users'])
              this.alertService.toast(response.message);
            }, error => {
              this.alertService.treatError(error)
            })
            .add(() => this.loading = false);
    }
    private update() {
        this.loading = true;
        this.userService
            .update(this.formGroup.value)
            .subscribe((response) => {
              this.router.navigate(['/', 'auth', 'users'])
              this.alertService.toast(response.message);
            }, error => {
              this.alertService.treatError(error)
            })
            .add(() => this.loading = false);
    }

    private get() {
        this.loading = true;
        this.userService
            .get(this.id)
            .subscribe((response) => {
              this.formGroup.patchValue(response);
            })
            .add(() => this.loading = false);
    }
}
