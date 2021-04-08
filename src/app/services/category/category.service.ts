import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {IResponse, IResponseData} from '../../interfaces/IResponse';
import {environment} from "../../../environments/environment";
import {IState} from '../../interfaces/IState';
import {ICategory} from '../../interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    constructor(private httpClient: HttpClient) { }
    public getAll(page?: number): Observable<IResponseData<ICategory>> {
        let httpParams = new HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get<IResponseData<ICategory>>(environment.baseUrl + '/categories/get-all', {
            params: httpParams
        });
    }

    public update(data: ICategory): Observable<IResponse<ICategory>> {
        return this.httpClient.put<IResponse<ICategory>>(environment.baseUrl + '/categories/update/' + data.id, data);
    }

    public store(data: ICategory): Observable<IResponse<ICategory>> {
      return this.httpClient.post<IResponse<ICategory>>(environment.baseUrl + '/categories/store', data);
    }

    public dataprovider(): Observable<IDataprovider> {
      return this.httpClient.get<IDataprovider>(environment.baseUrl + '/categories/dataprovider/', {});
    }

    public get(id: number): Observable<ICategory> {
      return this.httpClient.get<ICategory>(environment.baseUrl + '/categories/get/' + id, {});
    }

    public delete(id: number): Observable<IResponse<ICategory>> {
      return this.httpClient.delete<IResponse<ICategory>>(environment.baseUrl + '/categories/delete/' + id, {});
    }
}

interface IDataprovider {
    states: Array<IState>;
}
