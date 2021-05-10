import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/guest/user/user.service';
import {AlertService} from '../../../../services/alert/alert.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
    public loading: number = 0;
    public formGroup: FormGroup;
    public reset: boolean = false;

    constructor(
        private userService: UserService,
        private router: Router,
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute,
    )
    {
        this.formGroup = new FormGroup({
            code: new FormControl(this.activatedRoute.snapshot.params.code),
            password: new FormControl(),
            password_confirm: new FormControl(),
        });
    }

    public get form() {
        return this.formGroup.controls;
    }
    public ngOnInit(): void {
        this.remember();
    }

    public remember() {
        if (this.loading > 0) {
            return;
        }
        this.loading += 1;
        this.userService
            .rememberToken(this.activatedRoute.snapshot.params.code)
            .subscribe((response) => {
                this.reset = true;
            }, (error) => this.alertService.treatError(error))
            .add(() => {
                this.loading -= 1;
            });
    }

    public submit() {
        if (this.loading > 0) {
            return;
        }
        this.loading += 1;
        this.userService
            .password(this.formGroup.value)
            .subscribe((response) => {
                this.alertService.toast(response.message);
                this.router.navigate(['user', 'login']);
            }, (error) => this.alertService.treatError(error))
            .add(() => {
                this.loading -= 1;
            });
    }
}
