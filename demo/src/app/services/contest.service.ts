import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  private http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  /**
   * 获取试卷
   * @param {number} pid
   * @param {number} uid 用户id
   * @returns {Observable<Object>}
   */
  getTest(pid: number, uid: number) {
    return this.http.get('/problem/findByPaperId.do?pid=' + pid + '&uid=' + uid);
  }

  /**
   * 发送成绩
   * @param {number} pid
   * @param {number} uid
   * @param {number} grade
   * @returns {Observable<Object>}
   */
  toGrade(pid: number, uid: number, grade: number) {
    return this.http.get('/usertestrecord/submit.do?score=' + grade + '&uid=' + uid + '&pid=' + pid);
  }

  /**
   * 获取报告
   * @param {number} pid
   * @param {number} uid
   * @returns {Observable<Object>}
   */
  getReport(pid: number, uid: number) {
    return this.http.get('/usertestrecord/testOne.do?uid=' + 5 + '&pid=' + 1);
  }

  /**
   * 获取图谱标签
   * @param {number} kid
   * @returns
   */
  getKind(kid: number) {
    return this.http.get('/kind/findOne.do?id=' + kid);
  }

}
