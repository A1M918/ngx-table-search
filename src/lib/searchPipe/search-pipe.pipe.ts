import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export default class NgxTableSearch implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if (value !== "" && value !== undefined && value !== null){
      if (searchTerm.length >= 3) {
        return value.filter( item => {
          return (JSON.stringify(item)).toLowerCase().includes(searchTerm.toLowerCase());
        });
      } else {
        return value;
      }
      // return value;
    } else {
      return value;
    }
  }

}
