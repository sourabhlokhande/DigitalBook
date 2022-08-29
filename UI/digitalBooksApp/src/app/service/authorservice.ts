import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/authormodel';


@Injectable({
    providedIn : 'root'
})
export class AuthorService
{
    
    baseUrl = 'https://localhost:7298'

    constructor(private http:HttpClient){}
    
    
    addAuthor(author: Author):Observable<Author[]> {
        console.log("i am hit in author service")
        console.log(author)
        //return this.http.post<Author[]>(this.baseUrl+'/author/user/addauthor', author);
        return this.http.post<Author[]>('https://authorapiservices.azurewebsites.net/api/Author/AddAuthor', author);
        
    }
}

