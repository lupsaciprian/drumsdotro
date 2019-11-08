import { Component, OnInit } from "@angular/core";
import { ShowsService } from "src/app/global/services/shows/shows.service";
// Ant

@Component({
  selector: "app-shows-slider",
  templateUrl: "./shows-slider.component.html",
  styleUrls: ["./shows-slider.component.less"]
})
export class ShowsSliderComponent implements OnInit {
  public showsImages: string[];

  constructor(private showsService: ShowsService) {}

  ngOnInit() {
    this.showsImages = this.showsService.getShowsImages();
  }
}
