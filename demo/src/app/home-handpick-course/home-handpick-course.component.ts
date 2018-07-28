import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-handpick-course',
  templateUrl: './home-handpick-course.component.html',
  styleUrls: ['./home-handpick-course.component.css']
})
export class HomeHandpickCourseComponent implements OnInit {

  courseBoxCss = 'col-md-3 col-sm-6 course';

  constructor() { }

  ngOnInit() {
  }

}
