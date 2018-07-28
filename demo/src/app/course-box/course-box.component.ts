import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../class/course';
import {aa} from '../class/aa';

@Component({
  selector: 'app-course-box',
  templateUrl: './course-box.component.html',
  styleUrls: ['./course-box.component.css']
})
export class CourseBoxComponent implements OnInit {

  @Input()
  courseCss: string;

  @Input()
  courses: Course[];

  constructor() {
  }

  ngOnInit() {
    if (this.courseCss !== 'col-md-3 col-sm-6 course') {
      this.courseCss = 'col-md-4 col-sm-6 course';
    }
  }
}
