import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest } from "@angular/common/http";
import { HttpHandler,HttpEvent } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokeInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('token')){
        const token= localStorage.getItem('token');
        //console.log(token);
        
        const newRequest=request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
       return next.handle(newRequest);
    }
   return next.handle(request)
}
}
