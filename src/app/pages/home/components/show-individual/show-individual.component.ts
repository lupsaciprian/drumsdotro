import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { ShowModel } from "src/app/global/models/show.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-show-individual",
  templateUrl: "./show-individual.component.html",
  styleUrls: ["./show-individual.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowIndividualComponent implements OnInit {
  @Input("showItem") show: ShowModel;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToViewShow() {
    this.router.navigate(["/show", this.show.showName]);
  }
}
