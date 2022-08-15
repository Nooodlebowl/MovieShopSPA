import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/Login';
import { Register } from 'src/app/shared/models/Register';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  jwtHelper = new JwtHelperService();
  //decodes the token

  constructor(private httpClient:HttpClient) { }

  Login(login:Login):Observable<boolean>{
    return this.httpClient.post('https://localhost:7287/api/Account/login', login).pipe(map((response:any) =>{
      if (response){
        localStorage.setItem('token',response.token);
        this.populateUserInfoToken();
        return true;
      }
      return false;
      }));
    }

    Logout(){
      localStorage.removeItem("token");
      this.currentUserSubject.next({} as User);
      this.isLoggedInSubject.next(false);
    }

    register(registration:Register):Observable<boolean>{
      return this.httpClient.post<boolean>('https://localhost:7287/api/Account/register', registration);
    }

    populateUserInfoToken(){
      var tokenValue = localStorage.getItem('token');

      if(tokenValue && !this.jwtHelper.isTokenExpired(tokenValue)){
        const decodedToken = this.jwtHelper.decodeToken(tokenValue);
        this.currentUserSubject.next(decodedToken);
        this.isLoggedInSubject.next(true);
      };
    };

    ValidateJWT(){
      var tokenValue = localStorage.getItem('token');
      if (tokenValue != null){
        const decodedToken = this.jwtHelper.decodeToken(tokenValue);
        this.isLoggedInSubject.next(true);
        this.currentUserSubject.next(decodedToken);
      };
    }
}
