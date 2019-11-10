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
import { MixcloudItemComponent } from "./components/mixcloud-item/mixcloud-item.component";
import { ShowsComponent } from "./components/shows/shows.component";

// Zorro
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzListModule } from "ng-zorro-antd/list";
import {
  NzPaginationModule,
  NzSliderModule,
  NzToolTipModule,
  NzAlertModule,
  NzNotificationModule,
  NzSkeletonModule
} from "ng-zorro-antd";
import { FacebookWidgetComponent } from './components/facebook-widget/facebook-widget.component';

@NgModule({
  imports: [
    GlobalModule,

    HomeRoutingModule,

    NzCarouselModule,
    NzDividerModule,
    NzListModule,
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
    MixcloudItemComponent,
    FacebookWidgetComponent
  ],
  exports: [],
  entryComponents: []
})
export class HomeModule {}
