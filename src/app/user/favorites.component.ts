import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Movie } from '../shared/models/Movie';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FavoriteRequest } from '../shared/models/FavoriteRequest';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  movies!:FavoriteRequest[];
  id:number;
  jwtHelper = new JwtHelperService();

  constructor(private userServices:UserService) { }

  ngOnInit(): void {
    var tokenValue = localStorage.getItem('token')
    if(tokenValue){
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
      this.id = decodedToken.nameid;
    }
    this.userServices.getFavoritedMovies(this.id).subscribe(data =>{
      this.movies = data;
    })
  }

}
