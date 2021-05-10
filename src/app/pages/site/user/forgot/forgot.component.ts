import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../../services/guest/user/user.service';
import {AlertService} from '../../../../services/alert/alert.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
    public loading: number = 0;
    public formGroup: FormGroup;
	public sent: boolean = false;

    constructor(
        private userService: UserService,
        private router: Router,
        private alertService: AlertService,
    )
    {
        this.formGroup = new FormGroup({
            email: new FormControl(),
            code: new FormControl(),
        });
    }

    public ngOnInit(): void {}

    public submit() {
        if (this.loading > 0) {
            return;
        }
        this.loading += 1;
        this.userService
            .forgot(this.formGroup.value.email)
            .subscribe((response) => {
                this.sent = true;
            }, (error) => this.alertService.treatError(error))
            .add(() => {
                this.loading -= 1;
            });
    }
}
