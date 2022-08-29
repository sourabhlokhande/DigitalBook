import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/paymentmodel';



@Injectable({
    providedIn : 'root'
})
export class PaymentService
{
    
    
    baseUrl = 'https://localhost:7298'

    constructor(private http:HttpClient){}
    
    
    buyBook(payment: Payment):Observable<Payment[]> {
        console.log("i am hit in author service")
        console.log(payment)
        //return this.http.post<Payment[]>(this.baseUrl+'/reader/books/buybook', payment);
        return this.http.post<Payment[]>('https://digitalbookpaymentgateway.azurewebsites.net/api/PaymentGate',payment);
        //return this.http.post<Payment[]>('https://paymentgatewayservicedigibook.azurewebsites.net/api/PaymentGate',payment);
        
    }

    getPurchasedBook(pay: Payment) :Observable<Payment[]>{
        //return this.http.post<Payment[]>(this.baseUrl+'/reader/books/getpurchasedbook', pay);
        return this.http.post<Payment[]>('https://readerapiservices.azurewebsites.net/api/Reader/GetPurchasedBook',pay);
      }

      readBook(pay: Payment):Observable<boolean> {
        return this.http.post<boolean>('https://readerapiservices.azurewebsites.net/api/Reader/CheckReader', pay);
      }
}

