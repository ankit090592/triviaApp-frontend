import { Injectable } from '@angular/core';
//importing http client to make requests
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = "http://localhost:3000/api/v1";
  constructor(public http: HttpClient) { }

  //getter function for getting any local user info if it is already saved
  public getUserInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('userInfo'))
  }

  //setter function for setting any user info in local Storage for session management
  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  // way to send data parameters is using HttpParams() and sending it as 1 param
  public saveQuiz(data): Observable<any> {
    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('quest1', data.quest1)
      .set('quest2', data.quest2)

    return this.http.post(`${this.baseUrl}/users/saveQuiz`, params)
  }

  public getAllQuizzes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/getAllQuizzes`)
  }
}