import { Component, OnInit } from "@angular/core";
import { BannerInterface } from "src/app/global/models/banner.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.less"]
})
export class AdminComponent implements OnInit {
  public banner: BannerInterface = {
    heading: "24/7 Drums.ro - Drum&Bass Online Radio Station.ro",
    imageAdress:
      "https://thumbnail.imgbin.com/1/24/16/imgbin-internet-radio-drums-ro-radio-fm-broadcasting-breakbeat-radio-w55CaMLsLiU8vM46z5aMZpxeT_t.jpg",
    description:
      "drum&bass / jungle / breakbeat / dubstep / oldskool / hardcore",
    classes: {
      imageClasses: ["animated", "infinite", "tada", "slower"]
    }
  };
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(["/"]);
  }

  ngOnInit() {}
}
