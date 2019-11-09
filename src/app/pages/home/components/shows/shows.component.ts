import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { tap, takeUntil, takeWhile } from "rxjs/operators";

import { ShowModel } from "src/app/global/models/show.model";
import { DateService } from "src/app/global/services/date/date.service";
import { ResponsiveService } from "src/app/global/services/responsive/responsive.service";
import { AlertInterface } from "src/app/global/components/alert/alert.component";
import { ShowsService } from "src/app/global/services/shows/shows.service";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.less"]
})
export class ShowsComponent implements OnInit, OnDestroy {
  public shows: ShowModel[] = null;
  public showsObservable: Observable<any>;
  public loadingShows: boolean = false;

  public viewport: string;
  public showAlert: boolean = true;
  public alertMock: AlertInterface = {
    type: "danger",
    title: "Error loading the shows...",
    description: "An error occured with the server."
  };

  private updateShowAiringInterval: Subscription;

  constructor(
    private showsService: ShowsService,
    private dateService: DateService,
    private responsiveService: ResponsiveService
  ) {}

  // calculateShowAirTimes() {
  //   for (let show of this.shows) {
  //     this.dateService.calculateShowFutureSchedule(show);
  //     if (!show.dateDifference)
  //       show.dateDifference = this.dateService.fromNow(show.scheduled[0]);

  //     show.showIsToday = this.dateService.isLiveOrToday(
  //       show.recurrence[0],
  //       show.airHour
  //     );

  //     if (show.showIsToday.isToday) {
  //       this.anyShowsToday = true;
  //     }
  //   }
  // }

  closeAlert($event) {
    this.showAlert = !this.showAlert;
  }
  retryLoadShows($event) {
    // this.shows = this.showsService.getShows();
  }

  ngOnInit() {
    this.viewport = this.responsiveService.viewport;

    this.showsObservable = this.showsService.getShowsObservable();

    this.loadingShows = true;
    this.showsObservable.subscribe((shows: ShowModel[]) => {
      this.shows = shows;
      this.loadingShows = false;

      if (this.updateShowAiringInterval)
        this.updateShowAiringInterval.unsubscribe();

      this.updateShowAiringInterval = this.showsService
        .checkAirtimeInterval(shows)
        .subscribe(() => {
          for (let show of shows) {
            if (show.showIsToday && show.showIsToday.isToday) {
              show.showIsToday = this.dateService.isLiveOrToday(
                show.recurrence[0],
                show.airHour
              );
            }
          }
        });
    });
  }

  ngOnDestroy() {
    this.updateShowAiringInterval.unsubscribe();
  }
}
