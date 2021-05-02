import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IOrder} from '../../../interfaces/IOrder';
import {IResponseData} from '../../../interfaces/IResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    constructor(private httpClient: HttpClient) { }

    public show(id: number): Observable<IOrder> {
        let params = new HttpParams();
        params = params.append('id', id.toString());
        return this.httpClient.get<IOrder>(environment.baseSiteUrl + '/orders/show/', {
            params
        });
    }

    public index(): Observable<IResponseData<IOrder>> {
        return this.httpClient.get<IResponseData<IOrder>>(environment.baseSiteUrl + '/orders/index/');
    }
}

