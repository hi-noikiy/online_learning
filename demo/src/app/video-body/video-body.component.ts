import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../services/course.service';
import {Video} from '../class/Video';

@Component({
  selector: 'app-video-body',
  templateUrl: './video-body.component.html',
  styleUrls: ['./video-body.component.css']
})

export class VideoBodyComponent implements OnInit {

  video: Video;

  chapterId: number;

  userId: number;

  constructor(private routerInfo: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.routerInfo.queryParams.subscribe(params => {
      this.chapterId = +params['chapterId'];
      this.userId = 1;
      console.log(this.chapterId);
      this.getVideo(this.chapterId, this.userId);
    });
  }

  /**
   * 获取视频信息
   * @param {number} chapterId 章节 id
   * @param {number} userId  用户 id
   */
  getVideo(chapterId: number, userId: number) {
    this.courseService.getVideo(chapterId, userId)
      .subscribe((data: Video) => {
        this.video = data;
        console.log(this.video);
      });
  }

  getBack() {
    window.history.back();
  }

}
