import {Component, Input, OnInit} from '@angular/core';
import {Kind} from '../class/kind';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-cates-title',
  templateUrl: './course-cates-title.component.html',
  styleUrls: ['./course-cates-title.component.css']
})
export class CourseCatesTitleComponent implements OnInit {

  course_tags: boolean;

  text_tags: string;

  @Input()
  labels: Kind[];

  @Input()
  currentKind: string;

  /**
   * 记录父组件标记
   * 1 表示 父组件为 Courses 课程组件
   */
  @Input()
  kind_status: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.course_tags = true;
    this.text_tags = '更多';
  }

  // 判断标签是否激活
  kindActive(kind: string) {
    return kind === this.currentKind;
  }

  // 点击全部标签时的页面
  changeAllKind(k_name: string) {
    if (this.currentKind === k_name) {
      return ;
    }

    this.currentKind = k_name;

    this.toAllPage();
  }

  // 点击标签时改变标签
  changeKind(kind: Kind) {

    if (this.currentKind === kind.kname) {
      return ;
    }

    this.currentKind = kind.kname;

    this.toPage(kind.id);
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

  // 转页面
  toPage(id: number) {
    if (this.kind_status === 1) {
      this.router.navigate(
        ['/main/courses'],
        {
          queryParams: {
            page : 1,
            kind : id
          }
        });
    }
  }

  // 点击全部转的页面
  toAllPage() {
    if (this.kind_status === 1) {
      this.router.navigate(
        ['/main/courses'],
        {
          queryParams: {
            page : 1,
          }
        });
    }
  }

}
