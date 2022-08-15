import { Movie } from "./Movie";

export interface FavoriteRequest{
    movieId:number;
    userId:string;
    movie: Movie;
}