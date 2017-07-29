import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardfilter'
})
export class CardfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filteredArray =  value.filter(v => {
      return v.title.indexOf(args) != -1
    });
    return filteredArray;
  }

}
