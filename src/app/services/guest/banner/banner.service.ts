import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IBanner} from '../../../interfaces/IBanner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
    constructor(private httpClient: HttpClient) { }

    public category(slug: string): Observable<Array<IBanner>> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('category', slug);
        return this.httpClient.get<Array<IBanner>>(environment.baseSiteUrl + '/banners/category', {
            params: httpParams
        });
    }
}