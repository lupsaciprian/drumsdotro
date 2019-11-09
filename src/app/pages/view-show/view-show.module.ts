import { NgModule } from "@angular/core";
import { ViewShowComponent } from "./view-show.component";

import { ViewShowRoutingModule } from "./view-show-routing.module";
import { GlobalModule } from "src/app/global/global.module";

@NgModule({
  declarations: [ViewShowComponent],
  imports: [GlobalModule, ViewShowRoutingModule]
})
export class ViewShowModule {}
