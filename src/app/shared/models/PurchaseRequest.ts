import { Movie } from "./Movie";

export interface PurchaseRequest{
    purchaseNumber: string,
    purchaseDateTime: Date,
    movieId: number,
    userId: number,
    price: number,
    movie: Movie
}