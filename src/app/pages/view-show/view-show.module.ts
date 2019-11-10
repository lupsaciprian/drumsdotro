import { NgModule } from "@angular/core";
import { ViewShowComponent } from "./view-show.component";

import { ViewShowRoutingModule } from "./view-show-routing.module";
import { GlobalModule } from "src/app/global/global.module";

import { NzPageHeaderModule } from "ng-zorro-antd";
import { NzTimelineModule } from "ng-zorro-antd/timeline";

@NgModule({
  declarations: [ViewShowComponent],
  imports: [
    GlobalModule,
    ViewShowRoutingModule,
    NzPageHeaderModule,
    NzTimelineModule
  ]
})
export class ViewShowModule {}
