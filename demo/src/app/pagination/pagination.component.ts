import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  total: number;

  // 当前页面
  currentPage: number;

  // 存储页页面索引的数组
  page: Array<any>;

  constructor(private router: Router) {
  }

  /**
   * 初始化页面索引
   */
  ngOnInit() {
    this.currentPage = 1;
    console.log(this.total);
    this.total = Math.ceil(this.total / 20);
    console.log(this.total);
    this.page = [];
    if (this.total <= 13) {
      for (let i = 1; i <= this.total; i++) {
        this.page.push(i);
      }
    } else {
      for (let i = 1; i < 6; i++) {
        this.page.push(i);
      }
      this.page.push('...');
      this.page.push(this.total - 1);
      this.page.push(this.total);
    }
  }

  /**
   * 判断数字是相等,主要用于判断是否在一页
   * 或者最后一页从而使按钮的点击效果失效
   * @param {number} a
   * @param {number} b
   * @returns {boolean}
   */
  theSame(a: number, b: number) {
    return a === b;
  }

  /**
   * 当点击页面索引的时候,重新布局索引
   * 并且转到指定的页面上去
   * @param index
   */
  getPage(index: any) {

    if (index === -1) {
      this.currentPage -= 1;
      index = this.currentPage;
    } else if (index === 0) {
      this.currentPage += 1;
      index = this.currentPage;
    }

    if (index === '...') {
      return ;
    } else if (this.total <= 13) {
      this.currentPage = index;

    } else {
      this.currentPage = index;
      this.page = [];
      if (index <= 5) {
        for (let i = 1; i <= index + 4; i++) {
          this.page.push(i);
        }
        this.page.push('...');
        this.page.push(this.total - 1);
        this.page.push(this.total);

      } else if (index >= this.total - 5) {
        this.page.push(1);
        this.page.push(2);
        this.page.push('...');
        for (let i = this.total - 7; i <= this.total; i++) {
          this.page.push(i);
        }

      } else {
        this.page.push(1);
        this.page.push(2);
        this.page.push('...');
        for (let i = index - 2; i < index + 4; i++) {
          this.page.push(i);
        }
        this.page.push('...');
        this.page.push(this.total - 1);
        this.page.push(this.total);
      }

    }

    this.router.navigate(
      ['/main/courses'],
      {
        queryParams: {
          page : this.currentPage
        }
      });

  }

}
