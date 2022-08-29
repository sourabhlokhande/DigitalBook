import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../models/paymentmodel';
import { PaymentService } from '../service/paymentservice';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.css']
})
export class ReadbookComponent implements OnInit {

  pay : Payment =
{
  email : '',
  bookId : 0,
  paymentId : 0,
  createdDate : ""
}


  check : boolean = false;

  title : string = '';
  bookId : number = 0;
  content : string = '';
  constructor(private paymentService : PaymentService,private router : Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as {
      bId : number,
      contnt : string,
      ttl : string
    };
    this.title = state.ttl;
    this.bookId = state.bId;
    this.content = state.contnt;
   }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(this.pay.email != '')
    {
      this.pay.bookId = this.bookId;
      
      this.paymentService.readBook(this.pay).subscribe(response => {this.check = response});

      if(this.check == false)
      {
          alert("Please Buy a book to read")
      }
    }
    else
    {
      alert("Please provide email address")
    }
  }

}
