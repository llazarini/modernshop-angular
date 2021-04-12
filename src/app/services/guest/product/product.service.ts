import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {IResponse, IResponseData} from '../../../interfaces/IResponse';
import {environment} from "../../../../environments/environment";
import {IProduct} from '../../../interfaces/IProduct';
import {ICategory} from '../../../interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor(private httpClient: HttpClient) { }

    public category(slug: string): Observable<IResponseData<IProduct>> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('category', slug);
        return this.httpClient.get<IResponseData<IProduct>>(environment.baseSiteUrl + '/products/category', {
            params: httpParams
        });
    }

    public show(id: number): Observable<IProduct> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('id', id.toString());
        return this.httpClient.get<IProduct>(environment.baseSiteUrl + '/products/show', {
            params: httpParams
        });
    }

    public index(): Observable<IResponseData<IProduct>> {
        return this.httpClient.get<IResponseData<IProduct>>(environment.baseSiteUrl + '/products/index');
    }

    public dataprovider(): Observable<IDataprovider> {
        return this.httpClient.get<IDataprovider>(environment.baseSiteUrl + '/products/dataprovider');
    }
}

interface IDataprovider {
    categories: Array<ICategory>;
}