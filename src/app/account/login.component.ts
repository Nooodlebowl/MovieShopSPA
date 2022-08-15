import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../core/services/account.service';
import { Login } from '../shared/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag:boolean = false;
  submitted: boolean = false;
  email:string;
  password:string;
  user:Login ={
    email: "",
    password: ""
  };

  constructor(private loginService:AccountService, private _route:Router) { }

  ngOnInit(): void {
  }

  loginUser(loginForm:NgForm){
    this.submitted = true;
    this.user.email = loginForm.value.email;
    this.user.password = loginForm.value.password;
    this.loginService.Login(this.user).subscribe(data =>{
      if(data){
        this.flag = true;
        setTimeout(() => {
          this._route.navigateByUrl('/');   
        }, 10000);
      }
      else{
        this.flag = false;
      };
    });
  }


}
