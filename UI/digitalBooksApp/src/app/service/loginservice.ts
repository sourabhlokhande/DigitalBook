import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/loginmodel';



@Injectable({
    providedIn : 'root'
})
export class LoginService
{
    
    
    baseUrl = 'https://localhost:7298'

    constructor(private http:HttpClient){}
    
    
    loginValidation(login: Login):Observable<any> {
        // console.log("i am hit in login service")
        // console.log(login)
        //return  this.http.post<any>(this.baseUrl+'/author/validate', login);
        return  this.http.post<any>('https://authservicesapp.azurewebsites.net/api/Auth/Validate',login)
        
    }
}

