import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-mixcloud-item",
  templateUrl: "./mixcloud-item.component.html",
  styleUrls: ["./mixcloud-item.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MixcloudItemComponent implements OnInit {
  @Input("mixcloudItem") item;

  constructor() {}

  ngOnInit() {}
}
