import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
import {emailValidator, equalVaidator} from '../validators/validators';
import {SignService} from '../services/sign.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email_error: string;

  password_error: string;

  formModel: FormGroup;

  status: number;

  imgurl: string;

  imgHidden: boolean;

  constructor(fb: FormBuilder, private signService: SignService) {
    this.formModel = fb.group({
      username: ['', [Validators.required]],
      code: ['', [Validators.required]],
      passwordsGroup: fb.group({
        password1: ['', [Validators.required]],
        password2: ['', ]
      }, {validator: equalVaidator})
    });
  }

  ngOnInit() {
    this.status = 0;
    this.imgHidden = true;
  }

  onSubmit() {
    if (this.formModel.valid) {
      this.signService.register(this.formModel.get('username').value,
        this.formModel.get('passwordsGroup').get('password1').value,
        this.formModel.get('code').value)
        .subscribe(data => {
          console.log(data);
        });
    }
  }

  sendCode(stat: number) {

    if (stat === 0) {
      this.signService.getQRcode(this.formModel.get('username').value)
        .subscribe((data: any) => {
         this.imgurl = data.massage;
         this.imgHidden = false;
         this.status += 1;
        });
    } else if (stat === 1) {
      this.signService.sendCode(this.formModel.get('username').value)
        .subscribe(data => {
          console.log(data);
        });
    }
  }

  emailError() {
    if (!(this.formModel.get('username').valid || this.formModel.get('username').untouched)) {
      if (this.formModel.hasError('required', ['username'])) {
        this.email_error = '账号不能为空!';
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
