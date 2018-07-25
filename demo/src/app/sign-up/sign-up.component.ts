import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
import {emailValidator, equalVaidator} from '../validators/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email_error: string;

  password_error: string;

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, emailValidator]],
      passwordsGroup: fb.group({
        password1: ['', [Validators.required]],
        password2: ['', ]
      }, {validator: equalVaidator})
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  emailError() {
    if (!(this.formModel.get('username').valid || this.formModel.get('username').untouched)) {
      if (this.formModel.hasError('required', ['username'])) {
        this.email_error = '邮箱不能为空!';
        return false;
      }
      if (this.formModel.hasError('my_email', ['username'])) {
        this.email_error = '邮箱格式不正确!';
        return false;
      }
    }
    return true;
  }

  passwordError() {
    if (this.formModel.get('passwordsGroup').get('password1').touched) {
      if (this.formModel.hasError('required', ['passwordsGroup', 'password1'])) {
        this.password_error = '密码不能为空';
        return false;
      }
    }
    return true;
  }
}
