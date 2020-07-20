import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutter'
})
export class CutterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    const find = args[0], type = args[1];

    if (value.indexOf(find) < 0 || typeof find !== 'string')
      return value;

    if (type === 'all')
      return value.slice(0, value.indexOf(find));
    else
      return value.replace(find, '');
  }

}
