import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-box',
  templateUrl: './course-box.component.html',
  styleUrls: ['./course-box.component.css']
})
export class CourseBoxComponent implements OnInit {

  public courses: Array<Course>;

  constructor() { }

  ngOnInit() {
    this.courses = [
      new Course(1, 'https://dn-simplecloud.shiyanlou.com/1471330679327.png',
        'Python3 实现键值数据库', '本课程将通过理解一个操作类似于 Redis，存储理念来自于 CouchDB ' +
        '的键值数据库的源代码来学习如何做数据库的数据存储，体会使用不可变数据结构的优点' ,
        1, true),
      new Course(2, 'https://dn-simplecloud.shiyanlou.com/1471330679327.png',
        'Python3 实现键值数据库', '本课程将通过理解一个操作类似于 Redis，存储理念来自于 CouchDB ' +
        '的键值数据库的源代码来学习如何做数据库的数据存储，体会使用不可变数据结构的优点' ,
        2, true),
      new Course(3, 'https://dn-simplecloud.shiyanlou.com/1471330679327.png',
        'Python3 实现键值数据库', '本课程将通过理解一个操作类似于 Redis，存储理念来自于 CouchDB ' +
        '的键值数据库的源代码来学习如何做数据库的数据存储，体会使用不可变数据结构的优点' ,
        3, true),
      new Course(4, 'https://dn-simplecloud.shiyanlou.com/1471330679327.png',
        'Python3 实现键值数据库', '本课程将通过理解一个操作类似于 Redis，存储理念来自于 CouchDB ' +
        '的键值数据库的源代码来学习如何做数据库的数据存储，体会使用不可变数据结构的优点' ,
        4, true),
      new Course(5, 'https://dn-simplecloud.shiyanlou.com/1471330679327.png',
        'Python', '本课程将通过理解一个操作类似于 Redis，存储理念来自于 CouchDB ' +
        '的键值数据库的源代码来学习如何做数据库的数据存储，体会使用不可变数据结构的优点' ,
        5, true),
      new Course(6, 'https://dn-simplecloud.shiyanlou.com/1471330679327.png',
        'Python3 实现键值数据库', '本课程将通过理解一个操作类似于 Redis，存储理念来自于 CouchDB ' +
        '的键值数据库的源代码来学习如何做数据库的数据存储，体会使用不可变数据结构的优点' ,
        6, true),
      new Course(7, 'https://dn-simplecloud.shiyanlou.com/1471330679327.png',
        'Python3 实现键值数据库', '本课程将通过理解一个操作类似于 Redis，存储理念来自于 CouchDB ' +
        '的键值数据库的源代码来学习如何做数据库的数据存储，体会使用不可变数据结构的优点' ,
        7, true),
      new Course(8, 'https://dn-simplecloud.shiyanlou.com/1471330679327.png',
        'Python3 实现键值数据库', '本课程将通过理解一个操作类似于 Redis，存储理念来自于 CouchDB ' +
        '的键值数据库的源代码来学习如何做数据库的数据存储，体会使用不可变数据结构的优点' ,
        8, true),
    ];
  }
}


export class Course {

  constructor(
    public id: number,
    public img: string,
    public title: string,
    public desc: string,
    public per_num: number,
    public free: boolean
  ) {

  }

}
