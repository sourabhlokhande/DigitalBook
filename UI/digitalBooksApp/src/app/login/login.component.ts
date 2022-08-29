import { Component, OnInit } from '@angular/core';
import { Login } from '../models/loginmodel';
import { LoginService } from '../service/loginservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login : Login = {
    AuthorName :'',
    Password: '',
  }

  tokenObj : any = {
    token : ''
  }

  constructor(private loginService : LoginService,private router : Router) { }

  ngOnInit(): void {}

  onSubmit(){
    console.log("i am hit in login component")
    try
    {
      this.loginService.loginValidation(this.login).subscribe(response => {this.tokenObj = response 
         localStorage.setItem('token',this.tokenObj.token)})
    
      if(this.tokenObj.token != '')
      {
        localStorage.setItem('loggedIn','true')
        this.router.navigate(['book-operation'],{state:{authorName : this.login.AuthorName}});
      }
      else
      {
        
        throw new Error("Please Sign Up");
      }
      
    }
    catch(error)
    {
      console.log(error)
    }
    

}
}
