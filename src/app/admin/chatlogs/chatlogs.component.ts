import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { ScrollToBottomDirective } from '../../scroll-to-bottom.directive';
import { interval } from 'rxjs';
@Component({
  selector: 'app-chatlogs',
  templateUrl: './chatlogs.component.html',
  styleUrls: ['./chatlogs.component.scss']
})
export class ChatlogsComponent implements OnInit {
  search = '';
  title = 'Soft Bot';
  userId = "";
  @ViewChild(ScrollToBottomDirective)
  scroll: ScrollToBottomDirective;
  public scopes: Array<{}> = [];
  public chatHistory: Array<{}> = [];
  public userName: string;  
  constructor(
    private apiService: AppService
  ) {

  }

  ngOnInit(): void {
    this.apiService.getAllChats().subscribe(response => {
      // console.log("response is", JSON.stringify(response));
      this.scopes = response;

    })

    interval(5000 * 1).subscribe(x => {
      this.apiService.getAllChats().subscribe(response => {
        // console.log("response is", JSON.stringify(response));
        this.scopes = response;

      })
    })

    interval(1000 * 1).subscribe(x => {
      this.getChatHistory(this.userId, this.userName)
    })
  }

  getChatHistory(userId, name) {
    this.userId = userId
    this.userName = name;
    this.apiService.getUserChatHistory(userId).subscribe(response => {
      // console.log("response is", JSON.stringify(response));
      this.chatHistory = response;
    })
  }

}
