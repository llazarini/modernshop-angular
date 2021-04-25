import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../interfaces/IUser";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    public login(response: ILoginResponse) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
    }

    public get token() {
        return localStorage.getItem('token');
    }

    public get logged() {
        return !!this.user;
    }

    public get user() {
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
	}
}

interface ILoginResponse {
    user?: IUser;
    token?: string;
}
