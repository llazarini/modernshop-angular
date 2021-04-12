import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {IResponse, IResponseData} from '../../../interfaces/IResponse';
import {environment} from "../../../../environments/environment";
import {IState} from '../../../interfaces/IState';
import {IBannerCategory} from '../../../interfaces/IBanner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
    constructor(private httpClient: HttpClient) { }
    public getAll(page?: number): Observable<IResponseData<IBannerCategory>> {
        let httpParams = new HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get<IResponseData<IBannerCategory>>(environment.baseAuthUrl + '/banners/get-all', {
            params: httpParams
        });
    }

    public update(data: IBannerCategory): Observable<IResponse<IBannerCategory>> {
        return this.httpClient.put<IResponse<IBannerCategory>>(environment.baseAuthUrl + '/banners/update/' + data.id, data);
    }

    public store(data: IBannerCategory): Observable<IResponse<IBannerCategory>> {
        return this.httpClient.post<IResponse<IBannerCategory>>(environment.baseAuthUrl + '/banners/store', data);
    }

    public dataprovider(): Observable<IDataprovider> {
        return this.httpClient.get<IDataprovider>(environment.baseAuthUrl + '/banners/dataprovider/', {});
    }

    public get(id: number): Observable<IBannerCategory> {
        return this.httpClient.get<IBannerCategory>(environment.baseAuthUrl + '/banners/get/' + id, {});
    }

    public delete(id: number): Observable<IResponse<IBannerCategory>> {
        return this.httpClient.delete<IResponse<IBannerCategory>>(environment.baseAuthUrl + '/banners/delete/' + id, {});
    }
}

interface IDataprovider {
    states: Array<IState>;
}
