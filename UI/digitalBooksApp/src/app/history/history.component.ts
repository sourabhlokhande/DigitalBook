import { Component, OnInit } from '@angular/core';
import { Books } from '../models/bookmodel';
import { Payment } from '../models/paymentmodel';
import { BookService } from '../service/bookservice';
import { PaymentService } from '../service/paymentservice';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  pay : Payment =
{
  email : '',
  bookId : 0,
  paymentId : 0,
  createdDate : ''
}

books : Books = {
  title : '',
  category : '',
  price : 0,
  publisher: '',
  publishedDate: new Date,
  active: true,
  content: '',
  createdDate: new Date,
  modifiedDate: new Date,
  authorId: 0
}



history : Payment[] = [];
book : Books[] = [];
showHistory = false;
show = false;
  constructor(private paymentService:PaymentService,private bookService:BookService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.pay.email != '')
    {  
      this.showHistory = true;
      this.show = false;
      this.paymentService.getPurchasedBook(this.pay).subscribe(response => {this.history = response});
      console.log(this.history);
    }
    else
    {
      alert("Please provide email address")
    }

}
Reciept(reciept : Payment)
{
  this.show = true;
  this.showHistory = false;
  this.pay = reciept;
  console.log(reciept);
  this.bookService.getBookDetails(reciept).subscribe(response => {this.book = response});
  

}
}
