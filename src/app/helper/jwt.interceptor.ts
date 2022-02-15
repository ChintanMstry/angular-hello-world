import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || '{}');
    if(loggedInUser && loggedInUser.accessToken)
    {
      request = request.clone({setHeaders:{
        Authorization : `Bearer ${loggedInUser.accessToken}`
      }
    });
    }
    return next.handle(request);
  }
}
