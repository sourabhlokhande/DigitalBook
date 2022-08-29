import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../models/authormodel';
import { Books } from '../models/bookmodel';
import { BookService } from '../service/bookservice';

@Component({
  selector: 'app-book-operation',
  templateUrl: './book-operation.component.html',
  styleUrls: ['./book-operation.component.css']
})
export class BookOperationComponent implements OnInit {
  books : Books[] = [];
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
  user : Author = 
  {
    authorName : '',
    userType: '',
    password: '',
    createdDate: new Date,
    modifiedDate: new Date
    }
  constructor(private bookService : BookService,private router : Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as {
      authorName : string
    };
    this.user.authorName = state.authorName;
   }
   bookForm : boolean = false;
   updateForm : boolean = false;
   
   showAddBook(): void{
    
    this.bookForm = true;
    this.updateForm = false;
  }

  
   showUpdateBook(bookUpdate : Books): void{
     this.book = bookUpdate;
     this.bookForm = false;
    this.updateForm = true;
  }

  ngOnInit(): void {
    this.getAuthorBooks();
  }
  getAuthorBooks() {
    this.bookService.getAuthorBooks(this.user)
    .subscribe(
      response => { 
        this.books = response;
      });
  }

  onSubmit(){
    console.log("i am hit in book browser component")
    this.bookService.addBook(this.book).subscribe();
    if(localStorage.getItem('loggedIn')==='false')
    {
      alert("You're not authorized user")
    }
    else
    {
      alert("book has been added!")
    }
    
    this.getAuthorBooks();
}
Logout()
{
  localStorage.setItem('loggedIn','false')
  localStorage.removeItem('token');
  this.router.navigate(['home']);

}
updateBook(book : Books)
{
  this.bookService.updateBook(book).subscribe();
}
}
