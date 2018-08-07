import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {

  textValue = '这是一个单选题的样例。答案为C，分值为2分。   @[C](2)\n' +
    '\n' +
    'A. 替换为错误项\n' +
    'B. 替换为错误项\n' +
    'C. 替换为正确项\n' +
    'D. 替换为错误项';

  problemForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.problemForm = fb.group({
      hard: [''],
      label: [''],
      text: [this.textValue]
    });
  }

  ngOnInit() {
    console.log(this.problemForm.get('text').value);
  }



}
