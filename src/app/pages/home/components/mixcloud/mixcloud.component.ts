import { Component, OnInit } from "@angular/core";

import { AlertInterface } from "src/app/global/components/alert/alert.component";
import { MixcloudProviderService } from "./service/mixcloud-provider.service";

@Component({
  selector: "app-mixcloud",
  templateUrl: "./mixcloud.component.html",
  styleUrls: ["./mixcloud.component.less"]
})
export class MixcloudComponent implements OnInit {
  public mixcloudMixes: any = [];
  public mixcloudPage: number = 1;
  public mixcloudFeedbackAlert: AlertInterface;
  public mixesLoading: boolean = false;
  public showAlert: boolean = false;

  get totalMixcloudMixes() {
    return this.mixcloudService.totalMixcloudMixesLength();
  }

  constructor(private mixcloudService: MixcloudProviderService) {}

  public pageLimit = this.mixcloudService.pageLimit;

  loadMixcloud(pageNumber: number = 1) {
    if (!this.mixcloudService.canLoadNextPage()) return;

    this.mixesLoading = true;
    this.mixcloudService.getMixcloudMixes(pageNumber).subscribe(
      mixcloudResponse => {
        this.mixesLoading = false;
        this.showAlert = false;
        this.mixcloudMixes = mixcloudResponse.data;
        // if (pageNumber === 4)
        //   this.mixcloudMixes = this.mixcloudMixes.slice(
        //     2,
        //     mixcloudResponse.data.length
        //   );
        // console.log(this.mixcloudMixes);

        // this.mixcloudService.appendMixes(this.mixcloudMixes);
      },
      error => {
        this.mixesLoading = false;
        this.showAlert = true;

        let message;
        if (error.error && error.error.error && error.error.error.message)
          message = error.error.error.message;

        this.mixcloudFeedbackAlert = {
          type: "danger",
          title: "Error loading Mixcloud tab...",
          description: message ? message : "Could not load Mixcloud tab."
        };
      }
    );
  }

  // paginateMixcloud(fromPage: number) {
  //   if (
  //     this.mixcloudPage < fromPage &&
  //     this.mixcloudService.checkIfPageExists(fromPage)
  //   )
  //     this.loadMixcloud(fromPage);
  //   else {
  //     console.log("GET EXISITNG");
  //     this.mixcloudMixes = this.mixcloudService.getExistingMixcloudMixes(
  //       fromPage
  //     );
  //   }

  //   this.mixcloudPage = fromPage;
  //   // this.
  // }

  onScroll($event) {
    console.log($event.target.scrollTop);
  }

  closeAlert($event: boolean) {
    this.showAlert = false;
  }
  retryLoadMixcloud($event: boolean) {
    this.loadMixcloud(this.mixcloudPage);
  }

  ngOnInit() {
    this.loadMixcloud(this.mixcloudPage);
  }
}
