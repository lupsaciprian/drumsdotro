import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

// Routes
import { AdminRoutingModule } from "./admin-routing.module";

// Modules
import { GlobalModule } from "../../global/global.module";

// Ng Zorro
import { NzTabsModule } from "ng-zorro-antd/tabs";

// Components
import { AdminComponent } from "./admin.component";

@NgModule({
  declarations: [AdminComponent],
  imports: [
    ReactiveFormsModule,
    GlobalModule,
    AdminRoutingModule,
    NzTabsModule
  ],
  exports: []
})
export class AdminModule {}
