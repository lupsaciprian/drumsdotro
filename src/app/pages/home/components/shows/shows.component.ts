import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { tap, takeUntil, takeWhile } from "rxjs/operators";

import { ShowModel } from "src/app/global/models/show.model";
import { DateService } from "src/app/global/services/date/date.service";
import { ResponsiveService } from "src/app/global/services/responsive/responsive.service";
import { AlertInterface } from "src/app/global/components/alert/alert.component";
import { ShowsService } from "src/app/global/services/shows/shows.service";
import { TouchSequence } from "selenium-webdriver";

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

  public closeAlert($event) {
    this.showAlert = !this.showAlert;
  }
  public retryLoadShows($event) {
    this.getShows();
  }

  private getShows() {
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

  ngOnInit() {
    this.viewport = this.responsiveService.viewport;

    if (!this.showsService.shows) {
      this.getShows();
    } else {
      this.shows = this.showsService.shows;
    }
  }

  ngOnDestroy() {
    if (this.updateShowAiringInterval)
      this.updateShowAiringInterval.unsubscribe();
  }
}
