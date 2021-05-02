import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {IResponse, IResponseData} from '../../../interfaces/IResponse';
import {environment} from "../../../../environments/environment";
import {IState} from '../../../interfaces/IState';
import {IOption} from '../../../interfaces/IOption';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
    constructor(private httpClient: HttpClient) { }
    public getAll(page?: number): Observable<IResponseData<IOption>> {
        let httpParams = new HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get<IResponseData<IOption>>(environment.baseAuthUrl + '/options/get-all', {
            params: httpParams
        });
    }

    public update(data: IOption): Observable<IResponse<IOption>> {
        return this.httpClient.put<IResponse<IOption>>(environment.baseAuthUrl + '/options/update/' + data.id, data);
    }

    public store(data: IOption): Observable<IResponse<IOption>> {
        return this.httpClient.post<IResponse<IOption>>(environment.baseAuthUrl + '/options/store', data);
    }

    public dataprovider(): Observable<IDataprovider> {
        return this.httpClient.get<IDataprovider>(environment.baseAuthUrl + '/options/dataprovider/', {});
    }

    public get(id: number): Observable<IOption> {
        return this.httpClient.get<IOption>(environment.baseAuthUrl + '/options/get/' + id, {});
    }

    public delete(id: number): Observable<IResponse<IOption>> {
        return this.httpClient.delete<IResponse<IOption>>(environment.baseAuthUrl + '/options/delete/' + id, {});
    }
}

interface IDataprovider {
    states: Array<IState>;
}
