import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  /**
   * 获取搜索结果
   * @param {string} keywords
   * @param {string} kind
   * @param {number} pageNo
   * @param {number} pageSize
   * @returns {Observable<Object>}
   */
  getSearchResult(keywords: string, kind: string, pageNo: number, pageSize: number) {
    if (kind === '') {
      return this.http.post('/CourseSearch/search.do', {
          'keywords' : keywords,
          'pageNo': pageNo,
          'pageSize': pageSize
        }
      );
    } else {
        return this.http.post('/CourseSearch/search.do', {
            'keywords' : keywords,
            'kind' : kind,
            'pageNo': pageNo,
            'pageSize': pageSize
          }
        );
    }
  }
}
