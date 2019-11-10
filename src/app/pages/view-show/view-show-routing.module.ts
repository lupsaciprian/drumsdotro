import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ViewShowComponent } from "./view-show.component";
import { ShowResolve } from "./resolver/show-resolve.service";

const routes: Routes = [
  {
    path: "",
    component: ViewShowComponent,
    resolve: {
      show: ShowResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewShowRoutingModule {}
