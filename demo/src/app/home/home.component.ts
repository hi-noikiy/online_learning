import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';
import {Course} from '../class/course';
import {aa} from '../class/aa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // 课程数组
  courses: Course[];

  constructor(private courseService: CourseService ) {
  }

  ngOnInit() {
    this.getCourse();
  }

  getCourse() {
    this.courseService.getCourses(4, 20)
      .subscribe((data: aa ) => {
        this.courses = data.rows;
      });
  }
}
