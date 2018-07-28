import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {Course} from '../class/course';
import {aa} from '../class/aa';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseBoxCss = 'col-md-3 col-sm-6 course';

  course: Course[];

  total: number;

  private course_service;

  constructor(private courseService: CourseService) {
    this.course_service = courseService;
  }

  ngOnInit() {
    this.courseService.getCourses(1, 20)
      .subscribe((data: aa ) => {
        this.course = data.rows;
        this.total = data.total / 20;
        console.log(this.total);
      });
  }
}
