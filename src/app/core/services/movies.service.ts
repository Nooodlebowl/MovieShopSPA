import { Injectable } from '@angular/core';
import { Movie } from 'src/app/shared/models/Movie';
import { HttpClient} from '@angular/common/http';
import { MovieDetails } from 'src/app/shared/models/MovieDetails';
import { Observable } from 'rxjs';
import { PagedResultSet } from 'src/app/shared/models/PagedResultSet';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getTopGrossingMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>("https://localhost:7287/api/Movies/top-grossing");
  }

  getMovieDetails(id:number):Observable<MovieDetails>{
    return this.http.get<MovieDetails>("https://localhost:7287/api/Movies/" + id);
  }

  getMoviesByGenre(genreId:number, pageSize:number = 30, page:number =1):Observable<PagedResultSet>{
    return this.http.get<PagedResultSet>("https://localhost:7287/api/Movies/genre/" + genreId + "?pageSize="+ pageSize+"&page="+page);
  }
}
