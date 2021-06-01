import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {IResponse, IResponseData} from '../../../interfaces/IResponse';
import {environment} from "../../../../environments/environment";
import {IAttribute} from '../../../interfaces/IAttribute';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
    constructor(private httpClient: HttpClient) { }

    public getAll(page?: number): Observable<IResponseData<IAttribute>> {
        let httpParams = new HttpParams();
        if (page) {
            httpParams = httpParams.append('page', page.toString());
        }
        return this.httpClient.get<IResponseData<IAttribute>>(environment.baseAuthUrl + '/attributes/get-all', {
            params: httpParams
        });
    }

    public update(data: IAttribute): Observable<IResponse<IAttribute>> {
        return this.httpClient.put<IResponse<IAttribute>>(environment.baseAuthUrl + '/attributes/update/' + data.id, data);
    }

    public store(data: IAttribute): Observable<IResponse<IAttribute>> {
      return this.httpClient.post<IResponse<IAttribute>>(environment.baseAuthUrl + '/attributes/store', data);
    }

    public get(id: number): Observable<IAttribute> {
      return this.httpClient.get<IAttribute>(environment.baseAuthUrl + '/attributes/get/' + id, {});
    }

    public delete(id: number): Observable<IResponse<IAttribute>> {
      return this.httpClient.delete<IResponse<IAttribute>>(environment.baseAuthUrl + '/attributes/delete/' + id, {});
    }
}
