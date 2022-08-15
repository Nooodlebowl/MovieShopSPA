import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CastDetailsComponent } from './public/cast/cast-details.component';
import { MovieDetailsComponent } from './public/movie/movie-details.component';
import { MovieComponent } from './public/movie/movie.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CastComponent } from './public/cast/cast.component';
import { GenreComponent } from './public/genre/genre.component';
import { AddGenreComponent } from './public/genre/add-genre.component';
import { AddMovieComponent } from './public/genre/add-movie.component';
import { JwtAdderInterceptor } from './core/Interceptors/jwt-adder.interceptor';
import { CommonModule } from '@angular/common';
import { AdminGuard } from './core/Guards/admin.guard';
import { AuthGuard } from './core/Guards/auth.guard';
import { FavoritesComponent } from './user/favorites.component';
import { GenreMoviesComponent } from './public/movie/genre-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailsComponent,
    CastDetailsComponent,
    CastComponent,
    GenreComponent,
    AddGenreComponent,
    AddMovieComponent,
    GenreMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS, useClass:JwtAdderInterceptor, multi: true},
  AdminGuard,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
