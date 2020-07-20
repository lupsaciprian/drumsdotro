// Angular
import { NgModule } from "@angular/core";

// Modules
import { GlobalModule } from "src/app/global/global.module";

// Route
import { HomeRoutingModule } from "./home-routing.module";

// Components
import { HomeComponent } from "./home.component";
import { FacebookWidgetComponent } from "./components/facebook-widget/facebook-widget.component";

// Zorro
import { NzDividerModule } from "ng-zorro-antd/divider";

import {
  NzSliderModule,
  NzToolTipModule,
  NzAlertModule,
  NzNotificationModule,
  NzSkeletonModule
} from "ng-zorro-antd";

@NgModule({
  imports: [
    GlobalModule,

    HomeRoutingModule,
    NzDividerModule,
    NzSliderModule,
    NzToolTipModule,
    NzAlertModule,
    NzNotificationModule,
    NzSkeletonModule
  ],
  declarations: [HomeComponent, FacebookWidgetComponent],
  exports: [],
  entryComponents: []
})
export class HomeModule {}
