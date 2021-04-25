import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {IUser} from "../../../interfaces/IUser";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private httpClient: HttpClient) { }

    public login(email: string, password: string): Observable<ILoginResponse> {
        return this.httpClient.post<ILoginResponse>(environment.baseAuthUrl + '/login', {
            email: email,
            password: password
        });
    }

    public me(): Observable<any> {
        return this.httpClient.get<any>(environment.baseSiteUrl + '/auth/me');
    }
}

interface ILoginResponse {
  user?: IUser;
  token?: string;
}
