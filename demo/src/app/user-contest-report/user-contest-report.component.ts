import { Component, OnInit } from '@angular/core';
import {ContestService} from '../services/contest.service';
import {ActivatedRoute} from '@angular/router';
import {Kind} from '../class/kind';
import {Gg} from '../class/gg';
import {Result} from '../class/result';
import {collectExternalReferences} from '@angular/compiler';

@Component({
  selector: 'app-user-contest-report',
  templateUrl: './user-contest-report.component.html',
  styleUrls: ['./user-contest-report.component.css']
})
export class UserContestReportComponent implements OnInit {

  pid: number;

  grade: number;

  option: any;

  count: number[];

  kinds: Gg[];

  knames: Array<string>;

  constructor(private contestService: ContestService, private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routerInfo.queryParams.subscribe(params => {
      this.pid = +params['pid'];
      console.log(this.pid);
      this.getReport();
    });


  }

  getReport() {
    this.knames = [];
    console.log(this.knames);
    this.contestService.getReport(this.pid, 1)
      .subscribe((data: any) => {
        this.grade = +data.score;
        this.kinds = data.kind;
        console.log(this.kinds);
        for (const kind of this.kinds) {
          this.contestService.getKind(+kind.kid)
            .subscribe( (result: Result) => {
              this.knames.push(result.kname);
              console.log(this.knames[0]);
              this.option = {
                tooltip : {
                  trigger: 'axis'
                },
                toolbox: {
                  show : true,
                },
                calculable : true,
                polar : [
                  {
                    indicator : [
                      {text : this.knames[0], max  : 10},
                      {text : this.knames[1], max  : 10},
                      {text : this.knames[2], max  : 10},
                      {text : this.knames[3], max  : 10},
                      {text : this.knames[4], max  : 10},
                    ],
                    radius : 130
                  }
                ],
                series : [
                  {
                    name: '专业技能图谱',
                    type: 'radar',
                    itemStyle: {
                      normal: {
                        areaStyle: {
                          type: 'default'
                        }
                      }
                    },
                    data : [
                      {
                        value : [this.kinds[0].count, this.kinds[1].count, this.kinds[2].count, this.kinds[3].count, this.kinds[4].count]
                      }
                    ]
                  }
                ]
              };
            });
        }
      });
  }

}
