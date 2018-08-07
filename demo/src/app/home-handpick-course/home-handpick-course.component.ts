import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../class/course';

@Component({
  selector: 'app-home-handpick-course',
  templateUrl: './home-handpick-course.component.html',
  styleUrls: ['./home-handpick-course.component.css']
})
export class HomeHandpickCourseComponent implements OnInit {

  @Input()
  courses: Course[];

  courseBoxCss = 'col-md-3 col-sm-6 course';

  constructor() { }

  ngOnInit() {
  }

}
