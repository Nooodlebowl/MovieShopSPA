import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../core/services/user.service';
import { Movie } from '../shared/models/Movie';
import { PurchaseRequest } from '../shared/models/PurchaseRequest';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  movies!:PurchaseRequest[];
  id:number;
  jwtHelper = new JwtHelperService();

  constructor(private userServices:UserService) { }

  ngOnInit(): void {
    var tokenValue = localStorage.getItem('token')
    if(tokenValue){
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
      this.id = decodedToken.nameid;
    }
    this.userServices.getPurchasedMovies(this.id).subscribe(data =>{
      this.movies = data;
    })
  }

}
