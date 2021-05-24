import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {ICategory} from '../../../interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    constructor(private httpClient: HttpClient) { }

    public index(): Observable<Array<ICategory>> {
        return this.httpClient.get<Array<ICategory>>(environment.baseSiteUrl + '/categories/index');
    }
}
