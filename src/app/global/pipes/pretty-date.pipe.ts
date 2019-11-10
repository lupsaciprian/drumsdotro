import { Pipe, PipeTransform } from "@angular/core";
import { DateService } from "../services/date/date.service";

@Pipe({
  name: "prettyDate"
})
export class PrettyDatePipe implements PipeTransform {
  constructor(private dateService: DateService) {}

  transform(value: any, ...args: any[]): any {
    console.log(value);
    return this.dateService.prettyPipe(value);
  }
}
