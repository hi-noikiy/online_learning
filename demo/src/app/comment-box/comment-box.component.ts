import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../class/comment';
import {User} from '../class/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

  @Input()
  comments: Comment[];

  @Input()
  users: User[];

  constructor() {

  }

  ngOnInit() {
  }

  /**
   * 更据评论获取所有用户信息
   */
  getUser(id: number): User {
    for (const user of this.users) {
      if (user.uid === id) {
        return user;
      }
    }
  }

}
