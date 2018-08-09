import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Chapter} from '../class/Chapter';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-video-body',
  templateUrl: './video-body.component.html',
  styleUrls: ['./video-body.component.css']
})
export class VideoBodyComponent implements OnInit {

  chapter: Chapter;

  chapterId: number;

  constructor(private routerInfo: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.routerInfo.queryParams.subscribe(params => {
      this.chapterId = +params['chapterId'];
      console.log(this.chapterId);
      this.getVideo(this.chapterId);
    });
  }

  getVideo(chapterId: number) {
    this.courseService.getVideo(chapterId)
      .subscribe((data) => {
        console.log(data);
      });
  }

}
