import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  /**
   * 获取用户信息
   * @param {number} id
   * @returns {Observable<Object>}
   */
  getUser(id: number) {
    return this.http.get('/personal/findByParentId.do?id=' + id);
  }

}
