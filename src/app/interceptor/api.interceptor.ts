import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth/auth.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AlertService} from '../services/alert/alert.service';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router,
        private alertService: AlertService) {}

    intercept(
          httpRequest: HttpRequest<any>,
          httpHandler: HttpHandler
    ): Observable<HttpEvent<any>> {
        // If is not file upload
        if (httpRequest.url.indexOf('files/store') < 0) {
            httpRequest = httpRequest.clone({
                headers: httpRequest.headers
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json'),
            });
        }

        httpRequest = httpRequest.clone({
            headers: httpRequest.headers.set('Site', environment.site)
        });
        if (this.authService.token) {
            httpRequest = httpRequest.clone({
                headers: httpRequest.headers
                  .set('Authorization', 'Bearer ' + this.authService.token)
            });
        }

        return httpHandler
            .handle(httpRequest)
            .pipe(tap(
              () => { },
              (error: any) => {
                    if(error.status === 401) {
                        this.alertService.toast(error.error.message);
                        this.authService.logout();
                        this.router.navigate(['/'])
                    }
            }
        ));
    }
}
