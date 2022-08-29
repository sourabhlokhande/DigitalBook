import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { Books } from '../models/bookmodel';
import { Payment } from '../models/paymentmodel';
import { BookService } from '../service/bookservice';

@Component({
  selector: 'app-book-browser',
  templateUrl: './book-browser.component.html',
  styleUrls: ['./book-browser.component.css']
})
export class BookBrowserComponent implements OnInit {
  book : Books = {
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

pay : Payment =
{
  email : '',
  bookId : 0,
  paymentId : 0,
  createdDate : ""
}

  Title = "Book Browser"
  iconMargine = 2;
  iconWidth = 50;
  showIcon : boolean = false;
  filter = "book";
  hike = 0;
  books : Books[] = [];

  constructor(private bookService : BookService,private router : Router) { }

  hideAndShow(): void{
    this.showIcon = !this.showIcon;
  }

  increasePrice() : void{
    this.hike = this.hike+10;
  }
  decreasePrice() : void{
    this.hike = this.hike-10;
  }
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks()
  {
    console.log("i am hit in getBooks component")
    this.bookService.getAllBooks()
    .subscribe(
      response => { 
        this.books = response;
        console.log(this.books)
      });
    
  }

 
  bookPurchase(purchaseBookId : any)
  {
    this.router.navigate(['payment'],{state:{bookId : purchaseBookId}});
    console.log(purchaseBookId)
  }
  
  filterBook()
  {
    console.log(this.book)
    this.bookService.filterBook(this.book).subscribe(response => { 
      this.books = response;
      console.log(this.books)
    });
  }

    

}
