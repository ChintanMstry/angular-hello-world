import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("loggedInUser"))
      {
        var roles = localStorage.getItem("loggedInUserRole");
        if(roles != undefined && roles.includes('seller'))
        {
          this.router.navigate(['/seller-chat'])
          return true;
        }
        else if(roles != undefined && roles.includes('buyer'))
        {
          this.router.navigate(['/buyer-chat'])
          return true;
        }
        
        return true;


      }
      this.router.navigate(['/login'])
    return false;
  }
  
}
