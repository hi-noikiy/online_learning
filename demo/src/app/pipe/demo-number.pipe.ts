import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoNumber'
})
export class DemoNumberPipe implements PipeTransform {

  transform(value, args: number): any {
    const res = [];
    for (let i = args; i < value; i++) {
      res.push(i);
    }
    return res;
  }

}
