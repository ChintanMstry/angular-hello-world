import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessChatComponent } from './modules/business/business-chat/business-chat.component';
import { BuyerChatComponent } from './modules/buyer/buyer-chat/buyer-chat.component';

import { LoginComponent } from './modules/login/login/login.component';
import { SellerChatComponent } from './modules/seller/seller-chat/seller-chat.component';

const routes: Routes = [
  { path :'', component : LoginComponent },
  { path :'login', component : LoginComponent },
  { path :'business-chat', component : BusinessChatComponent },
  { path :'seller-chat', component : SellerChatComponent },
  { path :'buyer-chat', component : BuyerChatComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
