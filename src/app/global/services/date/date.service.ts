import { Injectable } from "@angular/core";

import * as moment from "moment";
import "moment-recur-ts";
import { Moment } from "moment-recur-ts";

import {
  ShowRecurrence,
  ShowModel,
  ShowIsToday
} from "../../models/show.model";

@Injectable({
  providedIn: "root"
})
export class DateService {
  private numOfScheduledDates: number = 1;
  constructor() {}

  private nextShowsFromReccurence(recurrence: ShowRecurrence): string[] {
    function getNextEvents(numEvents, dayOfWeek, weekIndex) {
      const events = moment()
        .recur()
        .every(dayOfWeek)
        .daysOfWeek()
        .every(weekIndex - 1)
        .weeksOfMonth();

      return events.next(numEvents, "YYYY-MM-DD");
    }

    return getNextEvents(
      this.numOfScheduledDates,
      recurrence.day,
      recurrence.week
    );
  }

  public calculateShowFutureSchedule(show: ShowModel) {
    let scheduledDate = [];
    for (let rec of show.recurrence) {
      scheduledDate.push(this.nextShowsFromReccurence(rec));
    }
    show.scheduled = scheduledDate[0];
  }

  public isInFuture(recurrence: ShowRecurrence[]): boolean {
    // let datethis.calculateDateFromReccurence()
    for (let rec of recurrence) {
      this.nextShowsFromReccurence(rec);
    }

    return true;
  }

  public fromNow(date): string {
    const now = moment(new Date()), //todays date
      toCompare = moment(date), // another date
      duration = moment.duration(now.diff(toCompare)),
      days = duration.asDays();
    // console.log(days);

    const dayDuration = Math.abs(Math.floor(days));
    if (dayDuration > 0) return dayDuration + " days from now";
  }

  public isLiveOrToday(
    reccurence: ShowRecurrence,
    airHour: string
  ): ShowIsToday {
    let showIsToday: ShowIsToday = {
      isToday: false,
      isLive: false
    };
    const currentWeekIndex = this.currentWeekOfMonth(moment());
    const now = moment();
    const currentDay = now.format("dddd"); // returns Monday, Friday

    if (currentWeekIndex === reccurence.week && currentDay === reccurence.day) {
      showIsToday.isToday = true;

      const nowInHours = now.format("HH:mm");
      const differenceInMinutes = this.differenceBetweenHours(
        nowInHours,
        airHour
      );

      if (differenceInMinutes >= 0 && differenceInMinutes <= 90)
        showIsToday.isLive = true;
    }

    return showIsToday;
  }

  public prettyPipe(date) {
    console.log(date);
    return moment(date, "YYYY-MM-DD").format("MMMM Do YYYY");
  }

  private currentWeekOfMonth(date) {
    let weekInYearIndex = date.week();
    if (date.year() !== date.weekYear()) {
      weekInYearIndex =
        date
          .clone()
          .subtract(1, "week")
          .week() + 1;
    }
    return (
      weekInYearIndex -
      moment(date)
        .startOf("month")
        .week() +
      1
    );
  }

  private differenceBetweenHours(
    firstHourStamp: string,
    secondHourStamp: string
  ): number {
    // return moment.minutes() + moment.hours() * 60;
    const firstHourStampInHours = moment(firstHourStamp, "HH:mm");
    const secondHourStampInHours = moment(secondHourStamp, "HH:mm");

    const difference = moment.duration(
      firstHourStampInHours.diff(secondHourStampInHours)
    );
    return difference.asMinutes();
  }
}
