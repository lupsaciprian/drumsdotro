import { Injectable } from "@angular/core";

import { Howl } from "howler";

import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

export interface StreamStatusInterface {
  isPlaying: boolean;
  isLoading: boolean;
  loaded: boolean;
  hadError?: boolean;
}

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  private url: string = "http://radio.drums.ro:8000/;";
  // private url: string = "http://radio.drufsams.ro:8000/;";
  private stream: Howl;
  private volumeConstant: number = 0.5;
  private volumeDebouncer$ = new Subject<number>();
  private volume: number;

  public isPlaying = new Subject<StreamStatusInterface>();

  get getVolume() {
    return this.volume;
  }

  constructor() {
    this.loadCachedVolume();
  }

  initializeStream() {
    this.stream = new Howl({
      src: [this.url],
      format: ["mp3"],
      volume: this.volume,
      html5: true,
      onloaderror: () => {
        this.isPlaying.next({
          isPlaying: false,
          isLoading: false,
          loaded: false,
          hadError: true
        });

        this.stream = undefined;
      }
    });

    this.stream.once("load", () => {
      this.isPlaying.next({
        isPlaying: true,
        isLoading: false,
        loaded: true
      });
      this.stream.play();
    });
  }

  play(firstTime?: boolean): void {
    if (firstTime) {
      this.isPlaying.next({
        isPlaying: false,
        isLoading: true,
        loaded: false
      });
    } else {
      this.isPlaying.next({
        isPlaying: true,
        isLoading: false,
        loaded: true
      });
    }

    if (!this.stream) {
      this.initializeStream();
    } else {
      this.stream.fade(0, this.volume, 1000);
    }
  }

  pause() {
    this.stream.fade(this.volume, 0, 1000);

    this.isPlaying.next({
      isPlaying: false,
      isLoading: false,
      loaded: true
    });
  }

  stop() {
    this.stream.stop();

    this.isPlaying.next({
      isPlaying: false,
      isLoading: false,
      loaded: false
    });

    this.stream = undefined;
  }

  getVolumeDebouncer() {
    return this.volumeDebouncer$.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    );
  }

  setVolume(newValue: number): void {
    this.volumeDebouncer$.next(newValue);
    this.volume = newValue / 100;
    if (this.stream) this.stream.volume(this.volume);
  }

  loadCachedVolume() {
    const cachedVolume = localStorage.getItem("volume");
    if (cachedVolume) this.volume = parseFloat(cachedVolume);
    else this.volume = this.volumeConstant;
  }

  cacheVolume(volume: number): void {
    localStorage.setItem("volume", JSON.stringify(volume / 100));
  }
}
