import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
/**
 *
 *
 * @param {any[]} value
 * @param {string} searchTerm
 * @returns {any[]}
 * @memberof SearchPipe
 */
transform(value: any[], searchTerm: string): any[] {
    if (value !== [] && value !== undefined && value !== null){
      if (searchTerm.length >= 3) {
        return value.filter( item => {
          return (JSON.stringify(item)).toLowerCase().includes(searchTerm.toLowerCase());
        });
      } else {
        return value;
      }
    } else {
      return value;
    }
  }

}
