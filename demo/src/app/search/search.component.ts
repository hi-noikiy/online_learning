import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../services/search.service';
import {ActivatedRoute} from '@angular/router';
import {SearchResult} from '../class/searchResult';
import {Course} from '../class/course';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyWords: string;

  total: number;

  totalPages: number;

  page: number;

  courses: Course[];

  constructor(private searchService: SearchService, private routerInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.routerInfo.queryParams.subscribe(params => {
      this.keyWords = params['keywords'];
      this.page = +params['page'];
      if (!this.page) {
        this.page = 1;
      }
      console.log('value = ' + this.keyWords + ' ' + typeof this.keyWords);
      this.getSearchResult();
    });
  }

  getSearchResult() {
    this.searchService.getSearchResult(this.keyWords, '', this.page, 15)
      .subscribe((data: SearchResult) => {
        console.log(data);
        this.total = data.total;
        this.totalPages = data.totalPages;
        this.courses = data.rows;
      });
  }

}
