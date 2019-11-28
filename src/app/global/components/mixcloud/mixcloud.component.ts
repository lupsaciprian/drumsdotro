import { Component, OnInit, Input } from "@angular/core";

import { AlertInterface } from "src/app/global/components/alert/alert.component";
import { MixcloudProviderService } from "./service/mixcloud-provider.service";

@Component({
  selector: "app-mixcloud",
  templateUrl: "./mixcloud.component.html",
  styleUrls: ["./mixcloud.component.less"]
})
export class MixcloudComponent implements OnInit {
  @Input() profile: string;

  public mixcloudMixes: any = [];
  public mixcloudPage: number = 1;

  public mixcloudFeedbackAlert: AlertInterface;
  public mixesLoading: boolean = false;
  public showAlert: boolean = false;

  public pageLimit: number = 5;

  constructor(private mixcloudService: MixcloudProviderService) {}

  loadMixcloud(pageNumber: number = 1) {
    this.mixesLoading = true;

    this.mixcloudService.getMixcloudMixes(pageNumber, this.profile).subscribe(
      mixcloudResponse => {
        this.mixesLoading = false;
        this.showAlert = false;

        this.mixcloudMixes = this.mixcloudMixes.concat(mixcloudResponse.data);
      },
      error => {
        this.mixesLoading = false;
        if (!this.showAlert) this.showAlert = true;

        this.mixcloudFeedbackAlert = {
          type: "danger",
          title: "Error loading Mixcloud tab...",
          description: error,
          showRetry: true
        };
      }
    );
  }

  onLoadMore() {
    this.mixcloudPage++;
    this.loadMixcloud(this.mixcloudPage);
  }

  closeAlert($event: boolean) {
    this.showAlert = false;
  }
  retryLoadMixcloud($event: boolean) {
    this.mixesLoading = true;
    this.showAlert = true;
    setTimeout(() => {
      this.loadMixcloud(this.mixcloudPage);
    }, 2000);
  }

  ngOnInit() {
    this.loadMixcloud();
  }
}
