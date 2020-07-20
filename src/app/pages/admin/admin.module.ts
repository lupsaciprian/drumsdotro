import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

// Routes
import { AdminRoutingModule } from "./admin-routing.module";

// Modules
import { GlobalModule } from "../../global/global.module";

// Ng Zorro
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzSelectModule, NzStepsModule } from "ng-zorro-antd";

// Components
import { AdminComponent } from "./admin.component";
import { AddEditShowComponent } from "./child-pages/add-edit-show/add-edit-show.component";
import { AllShowsComponent } from "./child-pages/all-shows/all-shows.component";
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [AdminComponent, AddEditShowComponent, AllShowsComponent, FormComponent],
  imports: [
    ReactiveFormsModule,
    GlobalModule,
    AdminRoutingModule,

    NzTabsModule,
    NzSelectModule,
    NzStepsModule
  ],
  exports: []
})
export class AdminModule {}
