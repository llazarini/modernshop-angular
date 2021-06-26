import { Injectable } from '@angular/core';
import {IUser} from "../../interfaces/IUser";
import {Observable, Subject} from 'rxjs';
import {AppComponent} from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private loggedSubject = new Subject<boolean>();
    private browser: boolean;

    constructor() {
        this.browser = AppComponent.isBrowser;
    }

    public login(response: ILoginResponse) {
        if (!this.browser) {
            return;
        }
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.loggedSubject.next(true);
    }

    public get token() {
        if (!this.browser) {
            return;
        }
        return localStorage.getItem('token');
    }

    public get logged() {
        return !!this.user;
    }

    public get user() {
        if (!this.browser) {
            return;
        }
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return false;
    }

    public get company() {
        if(this.user) {
            return this.user.company;
        }
        return false;
    }

	public logout() {
		this.login({
            user: null,
            token: null,
        })
        this.loggedSubject.next(false);
	}

	public logging(): Observable<boolean> {
		return this.loggedSubject.asObservable();
	}
}

interface ILoginResponse {
    user?: IUser;
    token?: string;
}
