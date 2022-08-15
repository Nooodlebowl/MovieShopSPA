import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { PagedResultSet } from 'src/app/shared/models/PagedResultSet';

@Component({
  selector: 'app-genre-movies',
  templateUrl: './genre-movies.component.html',
  styleUrls: ['./genre-movies.component.css']
})
export class GenreMoviesComponent implements OnInit {
  
  movies!:PagedResultSet;
  genreId:number;
  pageSize:number;
  page:number;
  prevPage:boolean;
  nextPage:boolean;


  constructor(private moviesService:MoviesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.genreId = params["genreId"];
    });
    this.moviesService.getMoviesByGenre(this.genreId, this.pageSize, this.page).subscribe(data =>{
      this.movies = data;
      this.prevPage = data.hasPreviousPage;
      this.nextPage = data.hasNextPage;
      console.log(this.movies);
    });
  }

  getNextPage(newPage:number){
    this.moviesService.getMoviesByGenre(this.genreId, this.pageSize, newPage).subscribe(data =>{
      this.movies = data;
      this.prevPage = data.hasPreviousPage;
      this.nextPage = data.hasNextPage;
      console.log(this.movies);
    });
  }

  getPreviousPage(newPage:number){
    this.moviesService.getMoviesByGenre(this.genreId, this.pageSize, newPage).subscribe(data =>{
      this.movies = data;
      this.prevPage = data.hasPreviousPage;
      this.nextPage = data.hasNextPage;
      console.log(this.movies);
    });
  }

}
