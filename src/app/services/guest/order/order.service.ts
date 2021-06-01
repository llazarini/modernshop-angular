import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IResponseData} from '../../../interfaces/IResponse';
import {IOrder} from '../../../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    constructor(private httpClient: HttpClient) { }

    public index(page?: number): Observable<IResponseData<IOrder>> {
        let httpParams = new HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get<IResponseData<IOrder>>(environment.baseSiteUrl + '/orders/index', {
            params: httpParams
        });
    }

    public get(id: number): Observable<IOrder> {
        return this.httpClient.get<IOrder>(environment.baseSiteUrl + '/orders/get/' + id, {});
    }
}

