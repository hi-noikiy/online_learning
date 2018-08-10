import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Callback} from '../class/Callback';
import {FormBuilder} from '@angular/forms';
import {User} from '../class/user';
import {Router} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8',
    'Authorization': 'my-auth-token'
  })
};

// const http_options = {
//   headers: new HttpHeaders({
//     'Access-Control-Allow-Origin': '*',
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private http: HttpClient;

  constructor(private httpClient: HttpClient, private fb: FormBuilder, private router: Router) {
    this.http = httpClient;
  }

  /**
   * 获取验证码
   * @param {string} phone
   * @returns {Observable<Object>}
   */
  sendCode(phone: string) {
    console.log(phone);
    return this.http.post('/user/sendCode.do', phone);
  }

  register(username: string, password: string, code: string) {
    return this.http.post('/user/add.do', {
      'code': code,
      'userphone': username,
      'userpassword': password
    });
  }

  getQRcode(phone: string) {
    console.log(phone);
    return this.http.post('/user/give.do', phone);
  }

  login(user: string, pwd: string) {
    this.http.get('/cas/login?action=getlt&callback=?service=http%3A%2F%2F10.0.0.30%3A9102%2Flogin%2Fcas')
      .subscribe((data: Callback) => {
        localStorage.setItem('lt', data.lt);
        localStorage.setItem('execution', data.execution);
        localStorage.setItem('session', data.sessionid);
        console.log(localStorage.getItem('session'));
        console.log(localStorage.getItem('lt'));
        console.log(localStorage.getItem('execution'));
      });

    // http_options.headers.append('Cookie', 'JSESSIONID=' + localStorage.getItem('session'));

    // console.log(http_options.headers);

    const gg = 'username=' + user +
      '&password=' + pwd +
      '&lt=' + localStorage.getItem('lt') +
      '&execution=' + localStorage.getItem('execution') +
      '&_eventId=' + 'submit' +
      '&submit=' + 'LOGIN';

    this.http.post('/cas/login?service=http%3A%2F%2F10.0.0.30%3A9102%2Flogin%2Fcas', gg, httpOptions).subscribe((data: any) => {
      console.log(data);
    });

    this.http.get('personal/login.do')
      .subscribe(
        (data: User) => {
        localStorage.setItem('userId', data.id.toString());
        localStorage.setItem('userName', data.pname);
        localStorage.setItem('userUrl', data.purl);
        localStorage.setItem('isLogin', '1');
        console.log(localStorage.setItem('userName', data.pname));
      },
        error1 => {
          console.log('真是日了够了, 居然报错了');
          this.router.navigate(['/login']);
          return ;
        }
      );
    this.router.navigate(['/main']);
  }
}


