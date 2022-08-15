import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  isLogginIn:boolean = false;
  isAdmin:string = "false";
  constructor(private accountService:AccountService){}
  canLoad(route: Route,segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isLogginIn = false;
    this.isAdmin = "false";
    this.accountService.isLoggedIn.subscribe(data =>{
      this.isLogginIn = data;
    });
    this.accountService.currentUser.subscribe(data =>{
      this.isAdmin = data.isAdmin;
    });

    if((localStorage.getItem('token') != null) && (this.isLogginIn) && (this.isAdmin == "true")){
      return true;
    }else{
      return false;
    };
  }
}
