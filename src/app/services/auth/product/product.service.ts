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

    public carousel(slug: string): Observable<IResponseData<IProduct>> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('slug', slug);
        return this.httpClient.get<IResponseData<IProduct>>(environment.baseAuthUrl + '/products/slug', {
            params: httpParams
        });
    }

    public getAll(page?: number): Observable<IResponseData<IProduct>> {
        let httpParams = new HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get<IResponseData<IProduct>>(environment.baseAuthUrl + '/products/get-all', {
            params: httpParams
        });
    }

    public update(data: IProduct): Observable<IResponse<IProduct>> {
        return this.httpClient.put<IResponse<IProduct>>(environment.baseAuthUrl + '/products/update/' + data.id, data);
    }

    public store(data: IProduct): Observable<IResponse<IProduct>> {
      return this.httpClient.post<IResponse<IProduct>>(environment.baseAuthUrl + '/products/store', data);
    }

    public dataprovider(): Observable<IDataprovider> {
      return this.httpClient.get<IDataprovider>(environment.baseAuthUrl + '/products/dataprovider/', {});
    }

    public get(id: number): Observable<IProduct> {
      return this.httpClient.get<IProduct>(environment.baseAuthUrl + '/products/get/' + id, {});
    }

    public delete(id: number): Observable<IResponse<IProduct>> {
      return this.httpClient.delete<IResponse<IProduct>>(environment.baseAuthUrl + '/products/delete/' + id, {});
    }
}

interface IDataprovider {
    categories: Array<ICategory>;
}
