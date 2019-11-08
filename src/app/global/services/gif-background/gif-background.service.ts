import { Injectable } from "@angular/core";
import { interval } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GifBackgroundService {
  private gifs: string[] = [
    "https://media.giphy.com/media/YqXRkTZQXA092/giphy.gif",
    "http://giphygifs.s3.amazonaws.com/media/8iiUNIX5fw0c8/giphy.gif",
    "http://blog.dubspot.com/files/2016/02/DJ-Shiftee-Scratching.gif",
    "https://www.prodjschool.nl/wp-content/uploads/2019/07/tumblr_m1zmeccmQy1r6b9rbo1_500.gif",
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
