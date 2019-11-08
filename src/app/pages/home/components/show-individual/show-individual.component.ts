import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { ShowModel } from "src/app/global/models/show.model";

@Component({
  selector: "app-show-individual",
  templateUrl: "./show-individual.component.html",
  styleUrls: ["./show-individual.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowIndividualComponent implements OnInit {
  @Input("showItem") show: ShowModel;
  constructor() {}

  ngOnInit() {}
}
