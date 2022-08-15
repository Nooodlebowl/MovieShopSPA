import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  addMovieForm: FormGroup;
  submitted:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addMovieForm = this.fb.group({
      title: ['', Validators.required],
      overview: ['', Validators.required],
      tagline: ['', Validators.required],
      budget: ['', Validators.required],
      revenue: ['', Validators.required],
      runtime: ['', Validators.required],
      price: ['', Validators.required]
    });
  }
}
