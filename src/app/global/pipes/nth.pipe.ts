import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nth"
})
export class NthPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(value, typeof value);
    if (value === 1) return value + "st";
    else if (value === 2) return value + "nd";
    else return value + "th";
  }
}
