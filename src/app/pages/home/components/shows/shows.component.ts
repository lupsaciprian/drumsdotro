import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { tap } from "rxjs/operators";

import { ShowModel } from "src/app/global/models/show.model";
import { DateService } from "src/app/global/services/date/date.service";
import { ShowsService } from "src/app/global/services/shows/shows.service";
import { ResponsiveService } from "src/app/global/services/responsive/responsive.service";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.less"]
})
export class ShowsComponent implements OnInit, OnDestroy {
  public futureShows: ShowModel[];
  public viewport: string;

  private updateShowAiringInterval: Subscription;

  constructor(
    private showsService: ShowsService,
    private dateService: DateService,
    private responsiveService: ResponsiveService
  ) {}

  calculateShowAirTimes() {
    for (let show of this.futureShows) {
      if (!show.dateDifference)
        show.dateDifference = this.dateService.fromNow(show.scheduled[0]);

      show.showIsToday = this.dateService.isLiveOrToday(
        show.recurrence[0],
        show.airHour
      );
    }
  }

  ngOnInit() {
    this.viewport = this.responsiveService.viewport;

    this.futureShows = this.showsService.getFutureShows();
    this.calculateShowAirTimes();

    this.updateShowAiringInterval = interval(5000 * 60)
      .pipe(tap($event => console.log($event)))
      .subscribe(newTime => {
        this.calculateShowAirTimes();
      });
  }

  ngOnDestroy() {
    this.updateShowAiringInterval.unsubscribe();
  }
}
