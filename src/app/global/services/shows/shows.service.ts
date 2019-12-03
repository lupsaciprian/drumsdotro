import { Injectable } from "@angular/core";

import { ShowModel, ShowRecurrence } from "src/app/global/models/show.model";

import { DateService } from "../date/date.service";

import { Observable, interval, BehaviorSubject } from "rxjs";
import { take, map, takeWhile, tap } from "rxjs/operators";

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ShowsService {
  private shows$: Observable<any>;
  private _shows: ShowModel[];
  public showsStream: BehaviorSubject<ShowModel[]> = new BehaviorSubject([]);

  constructor(
    private dateService: DateService,
    private firebase: AngularFirestore
  ) {}

  public get shows(): ShowModel[] {
    if (!this._shows) return null;

    return this._shows.slice();
  }

  setShows(shows: ShowModel[]) {
    this.showsStream.next(shows);
  }

  getIndividualShow(name: string): ShowModel {
    if (!this._shows) return null;

    const showExisting = this._shows
      .slice()
      .find(show => show.showName === name);

    return showExisting;
  }

  private showsMapper(shows: ShowModel[]) {
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

    this._shows = shows;
    return shows;
  }

  public getShowsObservable(): Observable<ShowModel[]> {
    this.shows$ = this.firebase.collection("shows").valueChanges();

    return this.shows$.pipe(
      take(1),
      map((shows: ShowModel[]) => this.showsMapper(shows))
    );
  }

  public checkAirtimeInterval(shows: ShowModel[]) {
    return interval(5000 * 1).pipe(
      takeWhile(() => {
        const anyShowToday = shows.find(show => show.showIsToday.isToday);
        if (anyShowToday) return true;
        else return false;
      })
    );
  }
}
