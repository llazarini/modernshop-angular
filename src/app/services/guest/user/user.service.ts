import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {IUser} from "../../../interfaces/IUser";
import {environment} from "../../../../environments/environment";
import {IAddress} from '../../../interfaces/IAddress';
import {AppComponent} from '../../../app.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private browser: boolean;

    constructor(private httpClient: HttpClient) {
        AppComponent.isBrowser.subscribe(isBrowser => {
            this.browser = isBrowser;
        });
    }

    public login(email: string, password: string): Observable<ILoginResponse> {
        return this.httpClient.post<ILoginResponse>(environment.baseAuthUrl + '/login', {
            email: email,
            password: password
        });
    }

    public me(): Observable<any> {
        return this.httpClient.get<any>(environment.baseSiteUrl + '/auth/me');
    }

	public forgot(email: string) {
        return this.httpClient.post<ILoginResponse>(environment.baseSiteUrl + '/forgot', {
            email: email,
        });
	}

    public create(user: IUser): Observable<any> {
        return this.httpClient.post<any>(environment.baseSiteUrl + '/users/create', user);
    }

    public address(address: IAddress): Observable<any> {
        return this.httpClient.post<any>(environment.baseSiteUrl + '/users/address', address);
    }

    public rememberToken(code: string): Observable<any> {
        return this.httpClient.post<any>(environment.baseSiteUrl + '/remember_token', {
            code,
        });
    }

    public password(data: IPassword): Observable<any> {
        return this.httpClient.post<any>(environment.baseSiteUrl + '/password', data);
    }

    public set email(email: string) {
        if (!this.browser) {
            return;
        }
        sessionStorage.setItem('email', email);
    }

    public get email() {
        if (!this.browser) {
            return null;
        }
        return sessionStorage.getItem('email');
    }
}
interface IPassword {
    code: string;
    password: string;
    password_confirm: string;
}

interface ILoginResponse {
  user?: IUser;
  token?: string;
}
