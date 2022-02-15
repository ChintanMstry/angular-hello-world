import { Inject, Injectable } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders,HttpParams } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiServiceService {

   
  constructor(private http: HttpClient,@Inject(SESSION_STORAGE) private localstorage: StorageService) { }

  get<T>(url:string):Observable<T>{
    return this.http.get<T>(url);
  }

  post<T>(url:string,content:object,header?: object): Observable<T> {
    if(header == null)
     return this.http.post<T>(url,content);
    else
     return this.http.post<T>(url,content,header)
  }
}
