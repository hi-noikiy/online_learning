import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../class/course';

@Component({
  selector: 'app-course-infobox',
  templateUrl: './course-infobox.component.html',
  styleUrls: ['./course-infobox.component.css']
})
export class CourseInfoboxComponent implements OnInit {

  @Input()
  course: Course;

  star = 'fa fa-star-o';

  constructor() { }

  ngOnInit() {
  }

  changeStar() {
    if (this.star === 'fa fa-star-o') {
      this.star = 'fa fa-star';
    } else {
      this.star = 'fa fa-star-o';
    }
  }

}
