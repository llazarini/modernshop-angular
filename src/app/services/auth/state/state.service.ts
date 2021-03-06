import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {ICity} from '../../../interfaces/ICity';
import {IState} from '../../../interfaces/IState';

@Injectable({
  providedIn: 'root'
})
export class StateService {
    constructor(private httpClient: HttpClient) { }

    public getAllCities(stateId?: number): Observable<Array<ICity>> {
        let httpParams = new HttpParams();
        if (stateId) {
            httpParams = httpParams.append('state_id', stateId.toString());
        }
        return this.httpClient.get<Array<ICity>>(environment.baseAuthUrl + '/states/get-cities', {
            params: httpParams
        });
    }

    public states() : Observable<Array<IState>>{
        return this.httpClient.get<Array<IState>>(environment.baseAuthUrl + '/states/get-all');
    }
}
