import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {IResponse} from '../../interfaces/IResponse';
import {environment} from "../../../environments/environment";
import {IFile} from '../../interfaces/IFile';

@Injectable({
  providedIn: 'root'
})
export class FileService {
    constructor(private httpClient: HttpClient) { }

    public store(file: any, type: string, typeId: number): Observable<IResponse<IFile>> {
        const form = new FormData();
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        if (typeId) {
            form.append('type_id', typeId.toString());
        }
        form.append('type', type);
        form.append('file', file);
        return this.httpClient.post<IResponse<IFile>>(environment.baseUrl + '/files/store', form, { headers: headers });
    }

    public delete(id: number): Observable<IResponse<IFile>> {
      return this.httpClient.delete<IResponse<IFile>>(environment.baseUrl + '/files/delete/' + id, {});
    }

    public images(type: string, id: number): Observable<IResponse<Array<IFile>>> {
        let params = new HttpParams();
        params = params.append('type', type);
        params = params.append('id', id.toString());
        return this.httpClient.get<IResponse<Array<IFile>>>(environment.baseUrl + '/files/images/', {
            params,
        });
    }
}
