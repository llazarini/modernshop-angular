import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../interfaces/IUser";
import {Observable, Subject} from 'rxjs';
import {LocalStorage} from '../../interfaces/IStorage';
import {AppComponent} from '../../app.component';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private storage: LocalStorage;
    private loggedSubject = new Subject<boolean>();
    private browser: boolean;

    constructor(private httpClient: HttpClient) {
        this.storage = new LocalStorage();
        AppComponent.isBrowser.subscribe(isBrowser => {
            this.browser = isBrowser;
            if (isBrowser) {
                this.storage = localStorage;
            }
        });
    }

    public login(response: ILoginResponse) {
        if (!this.browser) {
            return;
        }
        this.storage.setItem('token', response.token);
        this.storage.setItem('user', JSON.stringify(response.user));
        this.loggedSubject.next(true);
    }

    public get token() {
        return this.storage.getItem('token');
    }

    public get logged() {
        return !!this.user;
    }

    public get user() {
        if (!this.browser) {
            return;
        }
        const user = this.storage.getItem('user');
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
