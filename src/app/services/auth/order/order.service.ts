import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IOrder, IPaymentStatus} from '../../../interfaces/IOrder';
import {IResponse, IResponseData} from '../../../interfaces/IResponse';
import {IProduct} from '../../../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    constructor(private httpClient: HttpClient) { }

    public getAll(page?: number): Observable<IResponseData<IProduct>> {
        let httpParams = new HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get<IResponseData<IProduct>>(environment.baseAuthUrl + '/orders/get-all', {
            params: httpParams
        });
    }

    public show(id: number): Observable<IOrder> {
        let params = new HttpParams();
        params = params.append('id', id.toString());
        return this.httpClient.get<IOrder>(environment.baseSiteUrl + '/orders/show/', {
            params
        });
    }

    public delete(id: number): Observable<IResponse<IProduct>> {
        return this.httpClient.delete<IResponse<IProduct>>(environment.baseAuthUrl + '/orders/delete/' + id, {});
    }

	public dataprovider() {
        return this.httpClient.get<IDataprovider>(environment.baseAuthUrl + '/orders/dataprovider');
	}

    public changeStatus(id, status: string, trackingCode?: string) {
        return this.httpClient.put<IResponse<IProduct>>(environment.baseAuthUrl + '/orders/status/', {
            id,
            status,
            tracking_code: trackingCode
        });
    }
}

interface IDataprovider {
    payment_statuses: Array<IPaymentStatus>
}

