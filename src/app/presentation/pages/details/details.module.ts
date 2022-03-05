import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { ComponentModule } from "../../component.module";
import { EpisodeSidenavComponent } from './episode-sidenav/episode-sidenav.component';
import { VideoComponent } from './video/video.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { PlyrModule } from "ngx-plyr";
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    PlyrModule
  ],
  declarations: [
    DetailsComponent,
    VideoComponent,
    SidenavComponent,
    EpisodeSidenavComponent,
    EpisodeDetailsComponent,
  ],
  exports: [
    DetailsComponent,
  ]
})
export class DetailsModule { }
