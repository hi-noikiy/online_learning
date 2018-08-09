import { Component, OnInit } from '@angular/core';
import {SignService} from '../services/sign.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public login: SignService;

  public formModel: FormGroup;

  public email_error: string;

  public password_error: string;

  constructor(private signService: SignService, fb: FormBuilder, private router: Router) {
    this.login = signService;

    this.formModel = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmitTest() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
      const login_name = this.formModel.get('username').value;
      const login_pwd =  this.formModel.get('password').value;
      if (login_name === '123@qq.com' && login_pwd === '123456') {
        localStorage.setItem('isLogin', '1');
        window.history.back();
      }
    }
  }

  onSubmit() {
    // 当表单所有匹配规则都符合时,才提交
    if (this.formModel.valid) {
      const login_name = this.formModel.get('username').value;
      const login_pwd =  this.formModel.get('password').value;
      this.signService.login(login_name, login_pwd);
    }
  }

  emailError() {
    if (!(this.formModel.get('username').valid || this.formModel.get('username').untouched)) {
      if (this.formModel.hasError('required', ['username'])) {
        this.email_error = '用户不能为空!';
        return false;
      }
    }
    return true;
  }

  passwordError() {
    if (this.formModel.get('password').touched) {
      if (this.formModel.hasError('required', ['password'])) {
        this.password_error = '密码不能为空';
        return false;
      }
    }
    return true;
  }
}
