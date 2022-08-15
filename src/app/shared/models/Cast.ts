import { Movie } from "./Movie";

export interface Cast{
    gender:number;
    id:number;
    name:string;
    tmdbUrl:string;
    profilePath:string;
    movies:Movie[];
}