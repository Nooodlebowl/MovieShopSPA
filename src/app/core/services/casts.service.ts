import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cast } from 'src/app/shared/models/Cast';


@Injectable({
  providedIn: 'root'
})
export class CastsService {

  constructor(private httpClient:HttpClient) { }

  getCastDetails(castid:number):Observable<Cast>{
    return this.httpClient.get<Cast>('https://localhost:7287/api/Cast/Cast/'+castid);
  }
}
