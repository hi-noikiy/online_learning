import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {aa} from '../class/aa';
import {Kind} from '../class/kind';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  /**
   * 获取指定页面所有课程
   * @param {number} page 第几页
   * @param {number} num  需要多少课程
   * @returns {Observable<any>}
   */
  getCourses(page: number, num: number): Observable<aa> {
    return this.http.get<aa>('/course/findPage.do?page=' + page + '&rows=' + num);
  }

  getKindCourse(page: number, num: number, kind: number): Observable<aa> {
    return this.http.get<aa>('/course/findByKindId.do?kid=' + kind + '&page=' + page + '&rows=' + num);
  }

  /**
   * 获取所有的课程标签
   * @returns {Observable<Object>}
   */
  getLables(): Observable<Kind[]> {
    return this.http.get<Kind[]>('/kind/findAll.do');
  }

}
