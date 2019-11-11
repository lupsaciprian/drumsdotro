import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { Router } from "@angular/router";

import { ShowModel } from "src/app/global/models/show.model";

import { ResponsiveService } from "src/app/global/services/responsive/responsive.service";

@Component({
  selector: "app-show-individual",
  templateUrl: "./show-individual.component.html",
  styleUrls: ["./show-individual.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowIndividualComponent implements OnInit {
  @Input("showItem") show: ShowModel;
  constructor(
    private router: Router,
    private responsiveService: ResponsiveService
  ) {}

  public viewport: string;

  ngOnInit() {
    this.viewport = this.responsiveService.viewport;
  }

  goToViewShow() {
    this.router.navigate(["/show", this.show.showName]);
  }
}
