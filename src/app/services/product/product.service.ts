import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {IResponse, IResponseData} from '../../interfaces/IResponse';
import {environment} from "../../../environments/environment";
import {IState} from '../../interfaces/IState';
import {IProduct} from '../../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor(private httpClient: HttpClient) { }

    public getAll(page?: number): Observable<IResponseData<IProduct>> {
        let httpParams = new HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get<IResponseData<IProduct>>(environment.baseUrl + '/products/get-all', {
            params: httpParams
        });
    }

    public update(data: IProduct): Observable<IResponse<IProduct>> {
        return this.httpClient.put<IResponse<IProduct>>(environment.baseUrl + '/products/update/' + data.id, data);
    }

    public store(data: IProduct): Observable<IResponse<IProduct>> {
      return this.httpClient.post<IResponse<IProduct>>(environment.baseUrl + '/products/store', data);
    }

    public dataprovider(): Observable<IDataprovider> {
      return this.httpClient.get<IDataprovider>(environment.baseUrl + '/products/dataprovider/', {});
    }

    public get(id: number): Observable<IProduct> {
      return this.httpClient.get<IProduct>(environment.baseUrl + '/products/get/' + id, {});
    }

    public delete(id: number): Observable<IResponse<IProduct>> {
      return this.httpClient.delete<IResponse<IProduct>>(environment.baseUrl + '/products/delete/' + id, {});
    }
}

interface IDataprovider {
    states: Array<IState>;
}
