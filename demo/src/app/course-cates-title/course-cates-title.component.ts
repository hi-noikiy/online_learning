import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-cates-title',
  templateUrl: './course-cates-title.component.html',
  styleUrls: ['./course-cates-title.component.css']
})
export class CourseCatesTitleComponent implements OnInit {

  course_tags: boolean;

  text_tags: string;

  @Input()
  labels: string[];

  constructor() { }

  ngOnInit() {
    this.course_tags = true;
    this.text_tags = '更多';
  }

  changeTags(value: string) {
    if (value === '收起') {
      this.text_tags = '更多';
      this.course_tags = true;
    } else {
      this.text_tags = '收起';
      this.course_tags = false;
    }
  }

}
