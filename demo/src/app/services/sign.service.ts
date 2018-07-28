import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SignService {

  private http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  login(user_info: any): Observable<any> {
    console.log(user_info);
    return this.http.post('/login', user_info);
  }

  loginTest(user_info: any) {

  }

}


