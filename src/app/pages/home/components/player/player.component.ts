import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { PlayerService, StreamStatusInterface } from "./service/player.service";
import { AlertInterface } from "src/app/global/components/alert/alert.component";
import { NzNotificationService } from "ng-zorro-antd";
import { ResponsiveService } from "src/app/global/services/responsive/responsive.service";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.less"]
})
export class PlayerComponent implements OnInit, OnDestroy {
  // @ViewChild("volumeSlider", { static: false }) volumeControlRef;

  public streamStatus: StreamStatusInterface = {
    isPlaying: false,
    isLoading: true,
    loaded: false
  };
  public viewport: string;
  public volumeValue: number;

  private volumeDebouncerSub: Subscription;
  private nextPlayIsReset: boolean = false;

  constructor(
    private playerService: PlayerService,
    private notification: NzNotificationService,
    private responsiveService: ResponsiveService
  ) {}

  playRadio() {
    if (this.nextPlayIsReset) {
      this.playerService.play(true);
      this.nextPlayIsReset = false;
    } else {
      this.playerService.play();
    }
  }

  pauseRadio() {
    this.playerService.pause();
  }

  stopRadio() {
    this.playerService.stop();
    this.nextPlayIsReset = true;
  }

  setVolume($event: number) {
    this.playerService.setVolume($event);
    this.volumeValue = $event;
  }

  ngOnInit() {
    this.volumeValue = this.playerService.getVolume * 100;
    this.playerService.play(true);

    this.playerService.isPlaying.subscribe(status => {
      this.streamStatus = status;

      if (this.streamStatus.hadError) {
        this.notification.config({
          nzPlacement: "topLeft"
        });

        this.notification.error(
          "The player cannot be loaded...",
          "Please press the Play button to try again or contact Drums.ro on Facebook.",
          {
            nzPauseOnHover: true
          }
        );
      }
    });

    this.viewport = this.responsiveService.viewport;

    this.volumeDebouncerSub = this.playerService
      .getVolumeDebouncer()
      .subscribe(newVolume => {
        this.playerService.setVolume(newVolume);
        this.playerService.cacheVolume(newVolume);
      });
  }

  ngOnDestroy() {
    this.playerService.isPlaying.unsubscribe();
    this.volumeDebouncerSub.unsubscribe();
  }
}
