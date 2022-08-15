import { Movie } from "./Movie";

export interface PagedResultSet{
    pageIndex: number;
    pageSize: number;
    totalPages: number;
    totalRowCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    data: Movie[];
}