import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteRequest } from 'src/app/shared/models/FavoriteRequest';
import { Movie } from 'src/app/shared/models/Movie';
import { PurchaseRequest } from 'src/app/shared/models/PurchaseRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getFavoritedMovies(id:number):Observable<FavoriteRequest[]>{
    return this.httpClient.get<FavoriteRequest[]>('https://localhost:7287/api/User/favorites?userId=' + id);
  }

  getPurchasedMovies(id:number):Observable<PurchaseRequest[]>{
    return this.httpClient.get<PurchaseRequest[]>('https://localhost:7287/api/User/purchases?userId=' + id);
  }
}
