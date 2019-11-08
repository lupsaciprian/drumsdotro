import { Component, OnDestroy, AfterViewInit, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { GifBackgroundService } from "./global/services/gif-background/gif-background.service";
import { ResponsiveService } from "./global/services/responsive/responsive.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  public isCollapsed = true;
  public viewport: string;
  public activeGif: string;
  private intervalSub: Subscription;

  constructor(
    private gifBackgroundService: GifBackgroundService,
    private responsiveService: ResponsiveService
  ) {}

  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }

  ngOnInit() {
    const { innerWidth } = window;
    this.responsiveService.setWidth(innerWidth);

    this.viewport = this.responsiveService.viewport;

    if (this.viewport === "desktop") {
      console.log(this.responsiveService.viewport, "!!!!!!!!!!!!!!");
      this.activeGif = this.gifBackgroundService.getFirstGif();

      this.intervalSub = this.gifBackgroundService.interval.subscribe(() => {
        this.activeGif = this.gifBackgroundService.getActiveGif();
      });
    }
  }

  ngAfterViewInit() {}
}
