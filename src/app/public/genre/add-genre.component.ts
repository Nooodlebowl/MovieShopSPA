import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenresService } from 'src/app/core/services/genres.service';
import { Genre } from 'src/app/shared/models/Genre';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  name:string = '';
  tnc:boolean = false;
  flag:boolean =false;
  genre:Genre = {id:0,name:''}
  constructor(private genreService:GenresService) { }

  ngOnInit(): void {
  }

  addGenre(genreForm:NgForm){
    this.genre.name = genreForm.value.name;
    this.flag = true;
  }

}
