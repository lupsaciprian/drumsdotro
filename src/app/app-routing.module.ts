import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "admin",
    data: {
      animation: "isRight"
    },
    loadChildren: () =>
      import("./pages/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "show/:showName",
    data: {
      animation: "isRight"
    },
    loadChildren: () =>
      import("./pages/view-show/view-show.module").then(m => m.ViewShowModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
