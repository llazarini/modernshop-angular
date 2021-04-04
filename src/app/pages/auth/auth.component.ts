import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public sidenavOpened: boolean = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public toggleMenu() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  public logout() {
    this.router.navigate(['/']);
  }
}
