import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {aa} from '../class/aa';
import {Kind} from '../class/kind';
import {Course} from '../class/course';
import {Chapter} from '../class/Chapter';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  /**
   * 根据课程的id获取课程内容
   * @param {number} id 课程的id
   */
  getCourse(id: number) {
    return this.http.get<Course>('/course/findOne.do?id=' + id);
  }

  /**
   * 获取课程的章节
   * @param {number} id 课程的id
   * @returns {Observable<Object>}
   */
  getChapter(id: number) {
    return this.http.get<Chapter[]>('/category/findByParentId.do?cid=' + id);
  }

  /**
   * 获取课程的评论
   * @param {number} id 课程的id
   * @returns {Observable<Object>}
   */
  getComment(id: number) {
    return this.http.get('/commentary/findByCourseId.do?id=' + id);
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

  /**
   * 获取视频信息
   * @param {number} chapterId 视频所在章节的章节 ip
   * @returns {Observable<Object>}
   */
  getVideo(chapterId: number) {
    return this.http.get('vidio/findByCategoryId.do?id=' + chapterId);
  }

}
