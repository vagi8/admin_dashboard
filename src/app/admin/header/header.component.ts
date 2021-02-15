import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public current_date;
  ngOnInit(): void {
    this.current_date = new Date().toLocaleString('en-US',{ weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
  }

}
