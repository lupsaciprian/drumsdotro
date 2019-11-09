import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";

export interface AlertInterface {
  type: string;
  title: string;
  description: string;
  class?: string;
  icon?: string;
}

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {
  @Input("alertinfo") alert: AlertInterface;

  @Output() closeAlert = new EventEmitter<boolean>();
  @Output() retryLoading = new EventEmitter<boolean>();

  constructor() {}

  close() {
    this.closeAlert.emit(true);
  }

  retryLoad() {
    this.closeAlert.emit(true);
    this.retryLoading.emit(true);
  }

  setAlert(): string {
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

  ngOnInit() {
    this.setAlert();
  }
}
