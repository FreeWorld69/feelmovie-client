import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { NgModule } from '@angular/core';
import { SwiperModule } from "swiper/angular";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@NgModule({
  imports: [
    SwiperModule
  ],
  exports: [
    SwiperModule
  ]
})
export class SwiperAppModule { }
