import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastsService } from 'src/app/core/services/casts.service';
import { Cast } from 'src/app/shared/models/Cast';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {
  
  cast!:Cast;
  castId:number;
  
  constructor(private castService:CastsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.castId = params["castId"];
      console.log(params["castId"]);
    });
    this.castService.getCastDetails(this.castId).subscribe(data =>{
      console.log(data);
      this.cast = data;
    })
  }

}
