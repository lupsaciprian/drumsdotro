// Angular
import { NgModule } from "@angular/core";

// Modules
import { GlobalModule } from "src/app/global/global.module";

// Route
import { HomeRoutingModule } from "./home-routing.module";

// Components
import { HomeComponent } from "./home.component";
import { ShowIndividualComponent } from "./components/show-individual/show-individual.component";
import { MixcloudComponent } from "./components/mixcloud/mixcloud.component";
import { ShowsComponent } from "./components/shows/shows.component";
import { FacebookWidgetComponent } from "./components/facebook-widget/facebook-widget.component";

// Zorro
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { NzDividerModule } from "ng-zorro-antd/divider";

import {
  NzPaginationModule,
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

    NzCarouselModule,
    NzDividerModule,
    NzPaginationModule,
    NzSliderModule,
    NzToolTipModule,
    NzAlertModule,
    NzNotificationModule,
    NzSkeletonModule
  ],
  declarations: [
    HomeComponent,
    ShowIndividualComponent,
    MixcloudComponent,
    ShowsComponent,
    FacebookWidgetComponent
  ],
  exports: [],
  entryComponents: []
})
export class HomeModule {}
