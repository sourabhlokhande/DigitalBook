import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../models/authormodel';
import { AuthorService } from '../service/authorservice';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  author : Author = {
    authorName :'',
    userType: '',
    password: '',
    createdDate: new Date,
    modifiedDate: new Date
}

  constructor(private authorService: AuthorService,private router : Router) { }

  ngOnInit(): void {}

  onSubmit(){
    if(this.author.authorName != '')
    {
      console.log("i am hit in author component")
      this.authorService.addAuthor(this.author).subscribe();
      this.router.navigate(['login']);
    }
    else
    {
      alert("Signup Failed")
      console.log("Sign Up Failed")
    }
    
  
}

}
