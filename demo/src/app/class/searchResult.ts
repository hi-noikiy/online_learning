import {Course} from './course';

export class  SearchResult {
  total: number;
  kindList: string[];
  totalPages: number;
  rows: Course[];
}