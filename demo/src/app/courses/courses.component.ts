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

  course: Course[];

  total: number;

  page: number;

  private course_service;

  constructor(private courseService: CourseService, private routerInfo: ActivatedRoute) {
    this.course_service = courseService;

    try {
      this.page = this.routerInfo.snapshot.queryParams['page'];
    } catch (e) {
      this.page = 1;
    }

  }

  ngOnInit() {
    this.courseService.getCourses(this.page, 20)
      .subscribe((data: aa ) => {
        this.course = data.rows;
        this.total = data.total / 20;
        console.log(data);
      });
  }

}
