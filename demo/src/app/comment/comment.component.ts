import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../class/comment';
import {User} from '../class/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comments: Comment[];

  @Input()
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }

  /**
   * 获取用户信息
   */
  getUsers() {
    this.users = [];
    for (const comment of this.comments) {
      this.userService.getUser(comment.uid)
        .subscribe((data: User) => {
          this.users.push(data);
        });
    }
  }

}
