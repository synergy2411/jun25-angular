import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('[REQUEST]', req);

    return next.handle(req).pipe(
      tap((response) => console.log('[TAP RESPONSE]', response)),
      catchError((response: HttpErrorResponse) => {
        if (response.status === 404) {
          console.error(response.statusText);
        }
        return throwError(() => new Error(response.statusText));
      })
    );
  }
}
