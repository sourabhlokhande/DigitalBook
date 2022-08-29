import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookBrowserComponent } from './book-browser/book-browser.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookOperationComponent } from './book-operation/book-operation.component';
import { PaymentComponent } from './payment/payment.component';
import { HistoryComponent } from './history/history.component';
import { ReadbookComponent } from './readbook/readbook.component';

@NgModule({
  declarations: [
    AppComponent,
    BookBrowserComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    BookOperationComponent,
    PaymentComponent,
    HistoryComponent,
    ReadbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
