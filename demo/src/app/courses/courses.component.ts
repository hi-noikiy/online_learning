import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private course_service;

  constructor(private courseService: CourseService) {
    this.course_service = courseService;
  }

  ngOnInit() {
    this.courseService.getCourses()
      .subscribe(data => {
        console.log(data);
      });
  }

}
