import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  createProblem() {
    this.http.post('question/add.do', {
      'question': '这是一个问题',
      'kid': 1,
      'choice': '',
      'answer': '',
      'uid': '',
      'grade': 100
    });
  }

}
