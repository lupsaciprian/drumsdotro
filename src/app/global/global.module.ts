import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// NgZorro
import {
  NzIconModule,
  NzButtonModule,
  NzPopoverModule,
  NzInputModule,
  NzCheckboxModule,
  NzDividerModule,
  NzSliderModule
} from "ng-zorro-antd";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzFormModule } from "ng-zorro-antd/form";

// Components
import { AlertComponent } from "./components/alert/alert.component";
import { PlayerComponent } from "./components/player/player.component";
import { BannerComponent } from "./components/banner/banner.component";
import { SocialLinksComponent } from "./components/social-links/social-links.component";

@NgModule({
  declarations: [
    AlertComponent,
    PlayerComponent,
    BannerComponent,
    SocialLinksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NzIconModule,
    NzButtonModule,
    NzPopoverModule,
    NzGridModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzSliderModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NzIconModule,
    NzButtonModule,
    NzPopoverModule,
    NzGridModule,
    NzDividerModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzSliderModule,

    AlertComponent,
    BannerComponent,
    SocialLinksComponent,
    PlayerComponent
  ]
})
export class GlobalModule {}
