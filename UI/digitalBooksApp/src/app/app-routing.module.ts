import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookBrowserComponent } from './book-browser/book-browser.component';
import { BookOperationComponent } from './book-operation/book-operation.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ReadbookComponent } from './readbook/readbook.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path :'home', component:HomeComponent},
    {path : 'book-browser', component:BookBrowserComponent},
    {path : 'book-operation', component:BookOperationComponent},
    {path : 'signup', component:SignupComponent},
    {path : 'login', component:LoginComponent},
    {path: 'payment',component:PaymentComponent},
    {path: 'history',component:HistoryComponent},
    {path: 'readbook',component:ReadbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }