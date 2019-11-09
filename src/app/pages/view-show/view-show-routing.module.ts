import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ViewShowComponent } from "./view-show.component";

const routes: Routes = [
  {
    path: "",
    component: ViewShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewShowRoutingModule {}
