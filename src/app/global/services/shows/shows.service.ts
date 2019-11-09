import { Injectable } from "@angular/core";

import { ShowModel, ShowRecurrence } from "src/app/global/models/show.model";

import { DateService } from "../date/date.service";

import { Observable, interval } from "rxjs";
import { take, map, takeWhile } from "rxjs/operators";

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ShowsService {
  private allShows: ShowModel[] = [];
  private shows$: Observable<any>;

  constructor(
    private dateService: DateService,
    private firebase: AngularFirestore
  ) {
    this.shows$ = this.firebase.collection("shows").valueChanges();
    // .this.setShowsSchedule();
  }

  getShowsObservable() {
    return this.shows$.pipe(
      take(1),
      map(shows => {
        for (let show of shows) {
          show.showIsToday = this.dateService.isLiveOrToday(
            show.recurrence[0],
            show.airHour
          );

          if (show.showIsToday.isToday) {
            // this.anyShowsToday = true;
          } else {
            this.dateService.calculateShowFutureSchedule(show);
            if (!show.dateDifference)
              show.dateDifference = this.dateService.fromNow(show.scheduled[0]);
          }
        }

        return shows;
      })
    );
  }

  checkAirtimeInterval(shows: ShowModel[]) {
    return interval(5000 * 1).pipe(
      takeWhile(() => {
        const anyShowToday = shows.find(show => show.showIsToday.isToday);
        if (anyShowToday) return true;
        else return false;
      })
    );
  }
}
