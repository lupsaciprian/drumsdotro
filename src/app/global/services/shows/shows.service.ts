import { Injectable } from "@angular/core";
import { ShowModel, ShowRecurrence } from "src/app/global/models/show.model";
import { DateService } from "../date/date.service";

@Injectable({
  providedIn: "root"
})
export class ShowsService {
  private allShows: ShowModel[] = [
    new ShowModel(
      "Transients",
      "Cips",
      "00:00",
      "Drum&Bass",
      "https://thumbnailer.mixcloud.com/unsafe/500x500/extaudio/e/6/a/6/51c2-808d-4160-ba5b-62eff4872c07",
      new Date(),
      false,
      [
        {
          day: "Wednesday",
          week: 2
        }
      ]
    ),
    new ShowModel(
      "Nomad Audio Radio Show",
      "Nomad Audio",
      "21:00",
      "Drum&Bass",
      "https://thumbnailer.mixcloud.com/unsafe/1200x628/filters:watermark(graphics/play-button-scaled.png,300,14,0)/extaudio/e/6/0/9/45d6-b51e-4206-9f10-f69ba173c139",
      new Date(),
      false,
      [
        {
          day: "Wednesday",
          week: 2
        }
      ]
    ),
    new ShowModel(
      "Nomad Audio Radio Show",
      "Nomad Audio",
      "21:00",
      "Drum&Bass",
      "https://thumbnailer.mixcloud.com/unsafe/1200x628/filters:watermark(graphics/play-button-scaled.png,300,14,0)/extaudio/e/6/0/9/45d6-b51e-4206-9f10-f69ba173c139",
      new Date(),
      false,
      [
        {
          day: "Wednesday",
          week: 4
        }
      ]
    )
  ];
  private futureShows: ShowModel[];

  constructor(private dateService: DateService) {
    this.setShowsSchedule();
  }

  setShowsSchedule() {
    for (let show of this.allShows) {
      if (!show.scheduled) this.dateService.calculateShowFutureSchedule(show);
    }
  }

  getShows(): ShowModel[] {
    return this.allShows.slice();
  }

  getFutureShows(): ShowModel[] {
    return this.getShows();
  }

  getShowsImages(): string[] {
    return this.allShows.map(show => show.imageAdress);
  }
}
