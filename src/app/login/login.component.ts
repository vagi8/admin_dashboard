import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AppService} from '../app.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public LoginForm: FormGroup;
  constructor(private _FormBuilder:FormBuilder,private _Router:Router,public _AppService:AppService) { }
  submitted:boolean=false;
  ngOnInit(): void {
    this.LoginForm=this._FormBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })


    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });
    
    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
  }
  get f() { return this.LoginForm.controls; }
  onSubmit(value){
    this.submitted=true;
    if (this.LoginForm.invalid) {
      return;
    }
    // this._AppService.login(value.username,value.password)
    this._Router.navigate(['/admin']);
    console.log(value)

  }

}
