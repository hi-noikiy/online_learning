import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {Course} from '../class/course';
import {aa} from '../class/aa';
import {ActivatedRoute} from '@angular/router';

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
  labels: string[];

  // 课程的数量
  total: number;

  // 当前分页页面索引
  page: number;

  constructor(private courseService: CourseService, private routerInfo: ActivatedRoute) {

    try {
      this.page = this.routerInfo.snapshot.queryParams['page'];
    } catch (e) {
      this.page = 1;
    }

  }

  ngOnInit() {
    this.getCourses(this.page);
  }

  /**
   * 获取所有课程标签
   */
  getlabels() {
    this.courseService.getLables()
      .subscribe((data: string[]) => {
          this.labels = data;
      });
  }

  /**
   * 获取指定页面的课程
   * @param {number} page 第几页
   */
  getCourses(page: number) {
    this.courseService.getCourses(page, 20)
      .subscribe((data: aa ) => {
        this.course = data.rows;
        this.total = data.total / 20;
        console.log(data);
      });
  }

}
