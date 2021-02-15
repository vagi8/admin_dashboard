import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../environments/environment';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url: string;
  constructor(
    private httpClient: HttpClient) {
    this.url = environment.apiUrl;
  }



  getAllChats() {
    // console.log("api call")
    // let options = this.getOptions('getAllChats', 'POST');
    // return this.apiCall(options);
    return this.httpClient.get<any>('http://104.199.125.59:8081/get_conversation', {});
  }
  getUserChatHistory(usersId) {
    return this.httpClient.get<any>('http://104.199.125.59:8081/get_conversation/' + usersId, {});
  }

  login(userName, password) {
    let currentuser={
      "username":userName,
      "password":password
    }
    sessionStorage.setItem('currentuser',JSON.stringify(currentuser))
  }
}
