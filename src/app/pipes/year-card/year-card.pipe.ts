import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearCard'
})
export class YearCardPipe implements PipeTransform {

  transform(value: string): unknown {
    return value[value.length - 2] + value[value.length - 1];
  }

}
