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
      let j=0;
      for (let index = 0; index < response.length; index++) {
          // console.log(response[index].message)
          if ((response[index].message=='/help' || response[index].message=='/session_start') && response[index].EventType == 'user') {
            j=+1
            response.splice(index,1);
          }
          if (j>=2){
            break;
          }
      }
      this.chatHistory = response;
    } 
    )}

}
