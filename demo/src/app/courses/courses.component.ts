import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {Course} from '../class/course';
import {aa} from '../class/aa';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {P} from '@angular/core/src/render3';
import {combineAll, switchMap} from 'rxjs/operators';
import {Kind} from '../class/kind';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseBoxCss = 'col-md-3 col-sm-6 course';

  // 课程数组
  course: Course[];

  // 课程标签列表
  labels: Kind[];

  // 课程的数量
  total: number;

  // 当前分页页面索引
  page: number;

  // 当前标签
  kind: string;

  // 当前标签ID
  kindId: number;

  // 记录本组件的标签
  statu: number;

  constructor(private courseService: CourseService, private routerInfo: ActivatedRoute) {

  }

  ngOnInit() {
    this.routerInfo.queryParams.subscribe(params => {
      this.statu = 1;
      this.page = +params['page'];
      this.kindId = +params['kind'];
      if (!this.page) {
        this.page = 1;
      }
      if (!this.kindId || this.kindId === -1) {
        this.kind = '全部';
        this.kindId = -1;
      }
      this.getlabels();
      this.getCourses(this.page, this.kindId);
    });
  }

  /**
   * 获取所有课程标签
   */
  getlabels() {
    this.courseService.getLables()
      .subscribe((data: Kind[]) => {
          this.labels = data;
      });
  }

  /**
   * 获取指定页面的课程
   * @param {number} p 第几页
   * @param {number} kindId 标签id
   */
  getCourses(p: number, kindId: number) {

    if (this.kindId === -1) {
      this.courseService.getCourses(p, 20)
        .subscribe((data: aa ) => {
          this.course = data.rows;
          this.total = Math.ceil(data.total / 20);
        });
    } else {
      this.courseService.getKindCourse(p, 20, kindId)
        .subscribe((data: aa ) => {
          this.course = data.rows;
          this.total = Math.ceil(data.total / 20);
          console.log(this.course);
        });
    }
  }

}
