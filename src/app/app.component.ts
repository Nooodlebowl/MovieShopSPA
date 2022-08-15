import { Component, OnInit } from '@angular/core';
import { AccountService } from './core/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularSPA';

  constructor(private accountServie:AccountService){}

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.accountServie.ValidateJWT();
    }
  }
}
