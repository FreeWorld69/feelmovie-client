import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HeadSectionComponent } from "./head-section/head-section.component";
import { MovieCarouselComponent } from "./movie-carousel/movie-carousel.component";
import { HomeComponent } from "./home.component";
import { ComponentModule } from "../../component.module";
import { PipeModule } from "../../pipe.module";
import { RoutingModule } from "../../routing.module";
import { SwiperAppModule } from "../../swiper-app.module";
import { MovieCarouselItemComponent } from "./movie-carousel/movie-carousel-item/movie-carousel-item.component";


@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    RoutingModule,
    ComponentModule,
    SwiperAppModule
  ],
  declarations: [
    HomeComponent,
    HeadSectionComponent,
    MovieCarouselComponent,
    MovieCarouselItemComponent,
  ],
  exports: [
    HomeComponent,
    HeadSectionComponent,
    MovieCarouselComponent,
    MovieCarouselItemComponent
  ]
})
export class HomeModule { }
