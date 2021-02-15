import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-admin',
  template: `
  <div class="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="javascript:void(0)">
      <i class="fas fa-bars"></i>
  </a>
  <nav id="sidebar" class="sidebar-wrapper">
      <app-sidenav></app-sidenav>
      <!-- sidebar-content  -->
  </nav>
  <!-- sidebar-wrapper  -->
  <app-header></app-header>
  <router-outlet></router-outlet>
  <!-- page-content" -->
  </div>
  `,
  styles: [
  ]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      // Create two variable with the names of the months and days in an array
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

      // Create a newDate() object
      var newDate = new Date();
      // Extract the current date from Date object
      newDate.setDate(newDate.getDate());
      // Output the day, date, month and year    
      $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

      setInterval(function () {
        // Create a newDate() object and extract the seconds of the current time on the visitor's
        var seconds = new Date().getSeconds();
        // Add a leading zero to seconds value
        $("#sec").html((seconds < 10 ? "0" : "") + seconds);
      }, 1000);

      setInterval(function () {
        // Create a newDate() object and extract the minutes of the current time on the visitor's
        var minutes = new Date().getMinutes();
        // Add a leading zero to the minutes value
        $("#min").html((minutes < 10 ? "0" : "") + minutes);
      }, 1000);

      setInterval(function () {
        // Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = new Date().getHours();
        // Add a leading zero to the hours value
        $("#hours").html((hours < 10 ? "0" : "") + hours);
      }, 1000);

    });


    $(".sidebar-dropdown > a").click(function () {
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

    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });

    // $(document).ready(function () {
    //   $('body').bootstrapMaterialDesign();


    // });

    $(document).ready(function () {
      $('#action_menu_btn').click(function () {
        $('.action_menu').toggle();
      });
    });

  }

}
