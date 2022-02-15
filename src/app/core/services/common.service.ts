import { Inject, Injectable } from '@angular/core';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public isShowHeader = new BehaviorSubject<boolean>(this.isUserAlive());
  constructor(@Inject(SESSION_STORAGE) private localstorage : StorageService) { }
  private data = new BehaviorSubject<any[]>([]);
  private data$= this.data.asObservable();


  showHeader() {
   return this.isShowHeader;
  }

  isUserAlive(): boolean{
    let user = JSON.parse(localStorage.getItem("loggedInUser") || '{}');
    if(user && user.acessToken)
      return true

    return false;
  }

}
