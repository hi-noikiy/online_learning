import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean;

  forModel: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.isLogin = false;
    this.forModel = fb.group({
      search: ['']
    });
  }

  ngOnInit() {
    this.isLogin = false;
    if (localStorage.getItem('isLogin') === '1') {
      this.isLogin = true;
    }
  }


  loginOut() {
    this.isLogin = false;
    localStorage.setItem('isLogin', '0');
  }

  onSubmitSearch() {
    if (this.forModel.get('search').value !== '') {
      this.router.navigate(['/main/search'], {
        queryParams: {
          keywords: this.forModel.get('search').value
        }
      });
    }
  }

}
