import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../class/course';
import {Chapter} from '../class/Chapter';

@Component({
  selector: 'app-course-chapter',
  templateUrl: './course-chapter.component.html',
  styleUrls: ['./course-chapter.component.css']
})
export class CourseChapterComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  chapters: Chapter[];

  constructor() { }

  ngOnInit() {
  }

}
