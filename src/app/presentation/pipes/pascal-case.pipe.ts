import { Pipe, PipeTransform } from '@angular/core';
import { HelperService } from "../../data/utils/helper.service";

@Pipe({
  name: 'pascalCase'
})
export class PascalCasePipe implements PipeTransform {
  constructor(private readonly helperService: HelperService) {}

  public transform(value: string): string {
    return value
      .split(' ')
      .map(stringValue => this.helperService.capitalizeFirstLetter(stringValue))
      .join(' ');
  }
}
