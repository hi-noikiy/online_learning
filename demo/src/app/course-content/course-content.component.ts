import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../class/course';
import {CourseService} from '../services/course.service';
import {Chapter} from '../class/Chapter';
import {Comment} from '../class/comment';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {

  // 接受链接传过来的课程id
  courseId: number;

  // 定义一个课程变量
  course: Course;

  // 章节
  chapters: Chapter[];

  // 评论
  comments: Comment[];

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.courseId = +this.route.snapshot.paramMap.get('id');
    this.getChapter(this.courseId);
    this.getCourse(this.courseId);
    this.getComment(this.courseId);
  }

  /**
   * 获取课程的内容
   * @param {number} id 获取该课程的id
   */
  getCourse(id: number) {
    this.courseService.getCourse(id)
      .subscribe((data: Course) => {
        this.course = data;
        console.log(data);
      });
  }

  /**
   * 获取课程的章节
   * @param {number} id
   */
  getChapter(id: number) {
    this.courseService.getChapter(id)
      .subscribe((data: Chapter[]) => {
        this.chapters = data;
        console.log(this.chapters);
      });
  }

  /**
   * 获取课程的评论
   * @param {number} id
   */
  getComment(id: number) {
    this.courseService.getComment(id)
      .subscribe((data: Comment[]) => {
        this.comments = data;
        console.log(data);
      });
  }

}
