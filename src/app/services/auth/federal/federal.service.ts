import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IActivity} from '../../interfaces/IActivity';

@Injectable({
  providedIn: 'root'
})
export class FederalService {
    constructor(private httpClient: HttpClient) { }

    public cnpj(cnpj: string): Observable<any> {
        let params = new HttpParams();
        params = params.append('cnpj', cnpj)
        return this.httpClient.get<any>(environment.baseAuthUrl + '/federal/cnpj/', {
            params
        });
    }

    public activities(search?: string, activity_id?: number): Observable<Array<IActivity>> {
        let httpParams = new HttpParams();
        if (activity_id) {
            httpParams = httpParams.append('activity_id', activity_id.toString());
        }
        if (search) {
            httpParams = httpParams.append('search', search);
        }
        return this.httpClient.get<Array<IActivity>>(environment.baseAuthUrl + '/federal/activities', {
            params: httpParams
        });
    }
}
