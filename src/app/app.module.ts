import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login/login.component';
import { BuyerChatComponent } from './modules/buyer/buyer-chat/buyer-chat.component';
import { SellerChatComponent } from './modules/seller/seller-chat/seller-chat.component';
import { BusinessChatComponent } from './modules/business/business-chat/business-chat.component';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './modules/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuyerChatComponent,
    SellerChatComponent,
    BusinessChatComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
