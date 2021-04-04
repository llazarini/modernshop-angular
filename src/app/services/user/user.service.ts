import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {IResponse, IResponseData} from '../../interfaces/IResponse';
import {IUser} from "../../interfaces/IUser";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private httpClient: HttpClient) { }

    public login(email: string, password: string): Observable<ILoginResponse> {
        return this.httpClient.post<ILoginResponse>(environment.baseUrl + '/login', {
            email: email,
            password: password
        });
    }

    public getAll(page?: number): Observable<IResponseData<IUser>> {
        let httpParams = new HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get<IResponseData<IUser>>(environment.baseUrl + '/users/get-all', {
            params: httpParams
        });
    }

    public update(data: IUser): Observable<IResponse<IUser>> {
        return this.httpClient.put<IResponse<IUser>>(environment.baseUrl + '/users/update/' + data.id, data);
    }

    public store(data: IUser): Observable<IResponse<IUser>> {
        return this.httpClient.post<IResponse<IUser>>(environment.baseUrl + '/users/store', data);
    }

    public get(id: number): Observable<IUser> {
        return this.httpClient.get<IUser>(environment.baseUrl + '/users/get/' + id, {});
    }

    public delete(id: number): Observable<IResponse<IUser>> {
        return this.httpClient.delete<IResponse<IUser>>(environment.baseUrl + '/users/delete/' + id, {});
    }
}

interface ILoginResponse {
  user?: IUser;
  token?: string;
}
