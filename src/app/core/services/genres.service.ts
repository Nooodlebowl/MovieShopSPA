import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient:HttpClient) { }
  getAllGenres():Observable<Genre[]>{
    return this.httpClient.get<Genre[]>("https://localhost:7287/api/Genres/Genres");
  }
  addGenre(genre:Genre):Observable<Genre>{
    return this.httpClient.post<Genre>("https://localhost:7287/api/Genres/Genres", genre);
  }

}
