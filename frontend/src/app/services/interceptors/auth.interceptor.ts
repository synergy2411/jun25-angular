import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      // headers: {
      //   "Authorization" : "Bearer TOKEN_VALUE"
      // },
      params: new HttpParams().set('auth', this.authService.getToken()),
    });

    return next.handle(clonedReq);
  }
}
