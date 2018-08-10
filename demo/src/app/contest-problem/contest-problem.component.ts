import { Component, OnInit } from '@angular/core';
import {ContestService} from '../services/contest.service';
import {Problem} from '../class/Problem';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contest-problem',
  templateUrl: './contest-problem.component.html',
  styleUrls: ['./contest-problem.component.css']
})
export class ContestProblemComponent implements OnInit {

  problems: Problem[];

  x: number[];

  c: number[];

  grade: number;

  constructor(private contestService: ContestService, private router: Router) { }

  ngOnInit() {
    this.getTest();
    this.x = [1, 2, 3, 4];
  }

  getTest() {
    this.contestService.getTest(1, 5)
      .subscribe((data: Problem[]) => {
        console.log(data);
        this.problems = data;
        this.c  = [];
        for (let i = 0; i < this.problems.length; i++) {
          this.c.push(0);
        }
        console.log(this.c);
        console.log(typeof this.problems[1].choice[1]);
      });
  }

  theSame(a: number, b: number, c: number) {
    return a === b;
  }

  change(a: number, b: number) {
    this.c[a] = b;
  }

  getGrade() {
    this.grade = 0;
    for (let i = 0; i < 10; i++) {
      if (this.c[i] === +this.problems[i].answer) {
        this.grade += 10;
      }
    }
    console.log(this.grade);
    this.contestService.toGrade(1, 5, this.grade)
      .subscribe((data: any) => {
        if (data.success) {
          this.router.navigate(['/main/report'],
            {
              queryParams: {
                pid: 1,
              }
            });
        }
      });
  }
}
