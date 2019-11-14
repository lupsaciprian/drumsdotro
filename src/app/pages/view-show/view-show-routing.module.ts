import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ViewShowComponent } from "./view-show.component";
import { ShowResolve } from "../../global/resolvers/show-resolve.service";

const routes: Routes = [
  {
    path: "",
    component: ViewShowComponent,
    resolve: [ShowResolve]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewShowRoutingModule {}
