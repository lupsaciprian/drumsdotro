import { Injectable } from "@angular/core";
import { interval } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GifBackgroundService {
  private gifs: string[] = [
    "https://media.giphy.com/media/YqXRkTZQXA092/giphy.gif",
    "http://giphygifs.s3.amazonaws.com/media/8iiUNIX5fw0c8/giphy.gif",
    "http://25.media.tumblr.com/ce3be227e1a5aa8abcc977895d7c202f/tumblr_ml8i0k56sj1qb21tjo2_500.gif",
    "https://media3.giphy.com/media/1ULCgkWc2IiXJyxp5o/giphy.gif",
    "https://media1.giphy.com/media/Q76vhoFy1XvGw/giphy.gif"
  ];
  private activeGif = 0;

  public interval = interval(10000);

  constructor() {}

  getActiveGif(): string {
    this.activeGif++;
    if (this.activeGif >= this.gifs.length) {
      this.activeGif = 0;
    }

    return this.gifs[this.activeGif];
  }

  getFirstGif(): string {
    return this.gifs[this.activeGif];
  }
}
