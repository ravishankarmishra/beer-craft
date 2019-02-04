import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, beerStyle:string): any[] {
    if(!items) return [];
    if(!searchText && !beerStyle) return items;


    if(searchText){
      if(beerStyle){
          return items.filter( it => {
            return it['name'].toLowerCase().includes(searchText.toLowerCase())
            && it['style'].toLowerCase().includes(beerStyle.toLowerCase());
          });
      }
      return items.filter( it => {
        return it['name'].toLowerCase().includes(searchText.toLowerCase());
      });
    }
    if(beerStyle){
      return items.filter( it => {
        return it['style'].toLowerCase().includes(beerStyle.toLowerCase());
      });
    }
  }
}