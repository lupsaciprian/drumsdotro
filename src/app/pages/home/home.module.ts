// Angular
import { NgModule } from "@angular/core";

// Modules
import { GlobalModule } from "src/app/global/global.module";

// Route
import { HomeRoutingModule } from "./home-routing.module";

// Components
import { HomeComponent } from "./home.component";
import { ShowsSliderComponent } from "./components/shows-slider/shows-slider.component";
import { ShowIndividualComponent } from "./components/show-individual/show-individual.component";
import { MixcloudComponent } from "./components/mixcloud/mixcloud.component";
import { PlayerComponent } from "./components/player/player.component";

import { AuthenticateComponent } from "src/app/global/components/authenticate/authenticate.component";

// Zorro
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzListModule } from "ng-zorro-antd/list";
import {
  NzPaginationModule,
  NzSliderModule,
  NzToolTipModule,
  NzAlertModule,
  NzNotificationModule
} from "ng-zorro-antd";
import { NzTagModule } from "ng-zorro-antd/tag";
import { FooterComponent } from "./components/footer/footer.component";
import { MixcloudItemComponent } from "./components/mixcloud-item/mixcloud-item.component";
import { ShowsComponent } from "./components/shows/shows.component";

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
    NzTagModule
  ],
  declarations: [
    HomeComponent,
    ShowsSliderComponent,
    ShowIndividualComponent,
    MixcloudComponent,
    PlayerComponent,
    ShowsComponent,
    FooterComponent,
    AuthenticateComponent,
    MixcloudItemComponent
  ],
  exports: [],
  entryComponents: [AuthenticateComponent]
})
export class HomeModule {}
