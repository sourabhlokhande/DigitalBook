import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../models/paymentmodel';
import { PaymentService } from '../service/paymentservice';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  pay : Payment =
{
  email : '',
  bookId : 0,
  paymentId : 0,
  createdDate : new Date().toString()
}
  
  constructor(private paymentService:PaymentService,private router : Router) { 
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as {
      bookId : number
    };
    this.pay.bookId = state.bookId;
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.pay.email != '')
    {
      console.log("i am hit in payment component")
      console.log(this.pay)
      this.paymentService.buyBook(this.pay).subscribe();
      alert("Confirm")
      this.router.navigate(['book-browser']);
    }
    else
    {
      alert("Please provide email address")
    }
    

}

}
