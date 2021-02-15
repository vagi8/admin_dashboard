import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { interval } from 'rxjs';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoggedIn:Boolean;
  constructor(
    private apiService: AppService,
    private _Router:Router
  ) {

  }
  ngOnInit(): void {
    // this.isLoggedIn=false;
    // if(sessionStorage.getItem('currentuser')){
    //   console.log(sessionStorage.getItem('currentuser'))
    //   this.isLoggedIn=true;
    // }else{
    //   this._Router.navigate(['login'])
    // }
  }

}
