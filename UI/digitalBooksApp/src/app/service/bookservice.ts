import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Author } from '../models/authormodel';
import { Books } from '../models/bookmodel';
import { Payment } from '../models/paymentmodel';

@Injectable({
    providedIn : 'root'
})
export class BookService
{
    
    
    
    
    
    baseUrl = 'https://localhost:7298'

    constructor(private http:HttpClient){}
    
    getAllBooks():Observable<Books[]>{
        return this.http.get<Books[]>('https://readerapiservices.azurewebsites.net/api/Reader/GetBook')
        //return this.http.get<Books[]>(this.baseUrl+'/reader/books/getbooks')
        
    }

    getAuthorBooks(user : Author):Observable<Books[]>{
        console.log("i am hit in book service")
        //return this.http.post<Books[]>(this.baseUrl+'/reader/books/getauthorbooks',user)
        return this.http.post<Books[]>('https://readerapiservices.azurewebsites.net/api/Reader/GetAuthorBook',user)
    }
    
    filterBook(book: Books):Observable<Books[]>{
        return this.http.post<Books[]>('https://readerapiservices.azurewebsites.net/api/Reader/SearchBook',book)
        //return this.http.post<Books[]>(this.baseUrl+'/reader/books/searchbook',book)
    }
    
    
    token = localStorage.getItem("token")
    addBook(book: Books):Observable<Books> {
        console.log("i am hit in book service")
        console.log(book)
        return this.http.post<Books>('https://authorapiservices.azurewebsites.net/api/Author/AddBook', book,{headers: new HttpHeaders(
            {
              'Authorization': 'Bearer ' + this.token,
               'Content-Type': 'application/json'
                  })});
    }

    updateBook(book: Books):Observable<Books> {
        console.log(book)
        return this.http.put<Books>('https://authorapiservices.azurewebsites.net/api/Author/UpdateBook', book,{headers: new HttpHeaders(
            {
              'Authorization': 'Bearer ' + this.token,
               'Content-Type': 'application/json'
                  })});
      }

      getBookDetails(reciept: Payment):Observable<Books[]> {
          console.log(reciept)
        //return this.http.post<Books[]>(this.baseUrl+'/reader/books/getbookdetails',reciept)
        return this.http.post<Books[]>('https://readerapiservices.azurewebsites.net/api/Reader/GetBookDetails',reciept)
      }
}

