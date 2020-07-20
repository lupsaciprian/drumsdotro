import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { AddEditShowComponent } from "./child-pages/add-edit-show/add-edit-show.component";
import { ShowResolve } from "src/app/global/resolvers/show-resolve.service";
import { AllShowsComponent } from "./child-pages/all-shows/all-shows.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    pathMatch: "prefix",
    children: [
      {
        path: "all-shows",
        component: AllShowsComponent
      },
      {
        path: "show",
        component: AddEditShowComponent,
        resolve: {
          shows: ShowResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
