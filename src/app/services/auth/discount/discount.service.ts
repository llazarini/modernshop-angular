import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {IResponse, IResponseData} from '../../../interfaces/IResponse';
import {environment} from "../../../../environments/environment";
import {IState} from '../../../interfaces/IState';
import {IDiscount} from '../../../interfaces/IDiscount';
import {IOption} from '../../../interfaces/IOption';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
    constructor(private httpClient: HttpClient) { }

    public getAll(page?: number): Observable<IResponseData<IDiscount>> {
        let httpParams = new HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get<IResponseData<IDiscount>>(environment.baseAuthUrl + '/discounts/get-all', {
            params: httpParams
        });
    }

    public update(data: IDiscount): Observable<IResponse<IDiscount>> {
        return this.httpClient.put<IResponse<IDiscount>>(environment.baseAuthUrl + '/discounts/update/' + data.id, data);
    }

    public store(data: IDiscount): Observable<IResponse<IDiscount>> {
      return this.httpClient.post<IResponse<IDiscount>>(environment.baseAuthUrl + '/discounts/store', data);
    }

    public dataprovider(): Observable<IDataprovider> {
      return this.httpClient.get<IDataprovider>(environment.baseAuthUrl + '/discounts/dataprovider/', {});
    }

    public get(id: number): Observable<IDiscount> {
      return this.httpClient.get<IDiscount>(environment.baseAuthUrl + '/discounts/get/' + id, {});
    }

    public delete(id: number): Observable<IResponse<IDiscount>> {
      return this.httpClient.delete<IResponse<IDiscount>>(environment.baseAuthUrl + '/discounts/delete/' + id, {});
    }
}

interface IDataprovider {
    options: Array<IOption>;
}
