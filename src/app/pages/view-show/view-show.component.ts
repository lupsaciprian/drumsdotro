import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { ShowsService } from "src/app/global/services/shows/shows.service";
import { ShowModel } from "src/app/global/models/show.model";
import { BannerInterface } from "src/app/global/models/banner.model";
import { ResponsiveService } from "src/app/global/services/responsive/responsive.service";

@Component({
  selector: "app-view-show",
  templateUrl: "./view-show.component.html",
  styleUrls: ["./view-show.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewShowComponent implements OnInit, OnDestroy {
  private showsSubscription: Subscription;

  public show: ShowModel;
  public banner: BannerInterface;
  public viewport: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private showsService: ShowsService,
    private responsiveService: ResponsiveService
  ) {}

  goHome() {
    this.router.navigate(["/"]);
  }

  ngOnInit() {
    this.viewport = this.responsiveService.viewport;

    this.route.params.subscribe(params => {
      console.log(this.showsService.shows);
      this.show = this.showsService.shows.find(
        show => show.showName === params.showName
      );

      this.banner = {
        heading: this.show.showName,
        imageAdress: this.show.imageAdress,
        description: " A show",
        classes: {
          imageClasses: ["animated", "bounceInLeft"],
          headingClasses: ["animated", "infinite", "pulse"]
        }
      };
      console.log(this.show);
    });
  }

  ngOnDestroy() {
    // this.showsSubscription.unsubscribe();
  }
}
