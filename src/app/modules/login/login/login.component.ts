import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Login } from 'src/app/core/models/login';
import { Roles, Users } from 'src/app/core/models/users';
import { BaseApiServiceService } from 'src/app/core/services/base-api-service.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new  Login();
  loginUser = new Users();
  responseCode: string = "";
  responseData: string = "";
    private headers: Headers = new Headers({}); 

  constructor(private baseAPIService: BaseApiServiceService,private router : Router) { }

  ngOnInit(): void {
    this.headers.append('Content-Type','application/x-www-form-urlencoded');
        this.headers.append('Content-Type','application/json');
  }

  onAuth(form:any){
debugger;
      this.baseAPIService.post<any>(environment.baseUrl + 'api/Authenticate',{
        "Email": this.model.email,
        "Password": this.model.password
      },this.headers).subscribe(resp=>{
          if(resp.code == "SUCCESS")
          {

            this.loginUser = resp.data;

            if(this.loginUser.roleID == Roles.Seller)
            {
              this.router.navigate(["/seller-chat"]);
            }
            else if(this.loginUser.roleID == Roles.Buyer)
            {
              this.router.navigate(["/buyer-chat"]);
            }
          }
      });
  }
}
