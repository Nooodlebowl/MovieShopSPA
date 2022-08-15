import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/shared/models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies!:Movie[];

  //x:string = 'This is our example';
  //variblename:varible data type
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.getTopGrossingMovies().subscribe(m =>{
      this.movies = m;
      console.log(this.movies)
    })
  }

}
