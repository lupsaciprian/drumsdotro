import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectionStrategy
} from "@angular/core";

export interface AlertInterface {
  type: string;
  title: string;
  description: string;
  class?: string;
  icon?: string;
  showRetry?: boolean;
}

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit, OnChanges {
  @Input("alertinfo") alert: AlertInterface;
  @Input() loading: boolean;

  @Output() closeAlert = new EventEmitter<boolean>();
  @Output() retryLoading = new EventEmitter<boolean>();

  public timesTriedReload: number = 0;
  public disableReload: boolean = false;

  private retryLimit: number = 4;

  constructor() {}

  close(): void {
    this.closeAlert.emit(true);
  }

  retryLoad(): void {
    this.timesTriedReload++;
    if (this.timesTriedReload >= this.retryLimit) {
      this.disableReload = true;
      return;
    }

    this.close();
    this.retryLoading.emit(true);
  }

  setAlert(): void {
    if (!this.alert) return;

    switch (this.alert.type) {
      case "danger":
        this.alert.class = "danger-alert";
        this.alert.icon = "exclamation-circle";
        break;
      case "success":
        this.alert.class = "success-alert";
        this.alert.icon = "check-circle";
        break;
      case "warning":
        this.alert.class = "warning-alert";
        this.alert.icon = "warning";
        break;

      default:
        this.alert.class = "info-alert";
        this.alert.icon = "info-circle";
    }
  }

  ngOnChanges() {
    this.setAlert();
  }

  ngOnInit() {
    this.setAlert();
  }
}
