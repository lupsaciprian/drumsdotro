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
  NzSliderModule,
  NzTagModule,
  NzListModule,
  NzPaginationModule,
  NzSkeletonComponent,
  NzSkeletonModule,
  NzSpinModule
} from "ng-zorro-antd";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzFormModule } from "ng-zorro-antd/form";

// Pipes
import { SafePipe } from "./pipes/safe.pipe";
import { PrettyDatePipe } from "./pipes/pretty-date.pipe";
import { NthPipe } from "./pipes/nth.pipe";

// Components
import { AlertComponent } from "./components/alert/alert.component";
import { PlayerComponent } from "./components/player/player.component";
import { SocialLinksComponent } from "./components/social-links/social-links.component";
import { BannerComponent } from "./components/banner/banner.component";
import { FooterComponent } from "../pages/home/components/footer/footer.component";
import { MixcloudItemComponent } from "./components/mixcloud-item/mixcloud-item.component";
import { MixcloudComponent } from "./components/mixcloud/mixcloud.component";
import { ShowsComponent } from "./components/shows/shows.component";
import { ShowIndividualComponent } from "./components/show-individual/show-individual.component";

@NgModule({
  declarations: [
    AlertComponent,
    PlayerComponent,
    SocialLinksComponent,
    BannerComponent,
    FooterComponent,
    MixcloudItemComponent,
    MixcloudComponent,
    ShowsComponent,
    ShowIndividualComponent,

    SafePipe,
    PrettyDatePipe,
    NthPipe,
    CutterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NzIconModule,
    NzButtonModule,
    NzPopoverModule,
    NzCardModule,
    NzPaginationModule,
    NzGridModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzSliderModule,
    NzTagModule,
    NzListModule,
    NzSkeletonModule,
    NzSpinModule
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
    NzPaginationModule,
    NzFormModule,
    NzInputModule,
    NzSliderModule,
    NzTagModule,
    NzListModule,
    NzSkeletonComponent,
    NzSpinModule,

    AlertComponent,
    SocialLinksComponent,
    PlayerComponent,
    BannerComponent,
    FooterComponent,
    MixcloudItemComponent,
    MixcloudComponent,
    ShowsComponent,
    ShowIndividualComponent,

    SafePipe,
    PrettyDatePipe,
    NthPipe,
    CutterPipe
  ]
})
export class GlobalModule { }
