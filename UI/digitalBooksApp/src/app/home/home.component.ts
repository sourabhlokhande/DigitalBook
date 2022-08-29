import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Books } from '../models/bookmodel';
import { BookService } from '../service/bookservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books : Books[] = [];
  showTable = true;
  showContent = false;

  bookContent : any= '';
  currentReadingBook : any ='';
  constructor(private bookService : BookService,private router : Router) { 
    localStorage.setItem('loggedIn','false')
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

  readBook(bookId : any,content : any,title : any)
  {
    // console.log(content)
    // this.currentReadingBook = title;
    // this.bookContent = content;
    // this.showTable = false;
    // this.showContent = true;
    this.router.navigate(['readbook'],{state:{bId : bookId,contnt : content,ttl : title}});
  }

}
