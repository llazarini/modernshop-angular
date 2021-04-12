import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
    constructor(private httpClient: HttpClient) { }

    public postalCode(postalCode: string): Observable<any> {
        let params = new HttpParams();
        params = params.append('postal_code', postalCode)
        return this.httpClient.get<any>(environment.baseAuthUrl + '/address/postal_code/', {
            params
        });
    }
}
