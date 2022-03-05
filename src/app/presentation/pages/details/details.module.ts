import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { ComponentModule } from "../../component.module";
import { EpisodeSidenavComponent } from './episode-sidenav/episode-sidenav.component';
import { VideoComponent } from './video/video.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
  ],
  declarations: [
    DetailsComponent,
    EpisodeSidenavComponent,
    VideoComponent,
    EpisodeDetailsComponent
  ],
  exports: [
    DetailsComponent,
  ]
})
export class DetailsModule { }
