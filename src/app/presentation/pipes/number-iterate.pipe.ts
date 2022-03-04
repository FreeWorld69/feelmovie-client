import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'numberIterate'})
export class NumberIteratePipe implements PipeTransform {
  public transform(value: number): any[] {
    return Array(Math.round(value)).fill(0)
  }
}
