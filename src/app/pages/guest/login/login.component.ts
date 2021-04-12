import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/auth/user/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public loading: boolean;
  public hide: boolean = true;
  public error: string;

  constructor(
      private formBuilder: FormBuilder = null,
      private userService: UserService,
      private authService: AuthService,
      private router: Router,
  ) { }

  ngOnInit(): void {
      this.formGroup = this.formBuilder.group({
        user: ['', [Validators.required, Validators.maxLength(255)]],
        password: ['', [Validators.maxLength(255)]],
      });
  }

  public submit() {
      if (this.loading) {
        return;
      }
      this.error = '';
      this.loading = true;
      const data = this.formGroup.value;
      this.userService
          .login(data.user, data.password)
          .subscribe((response) => {
                  this.authService.login(response);
                  this.router.navigate(['/', 'auth'])
              }, (response) => {
                  this.error = response.error.message;
              }).add(() => {
                  this.loading = false
                  this.formGroup.patchValue({
                    password: '',
                  })
              });
  }
}
