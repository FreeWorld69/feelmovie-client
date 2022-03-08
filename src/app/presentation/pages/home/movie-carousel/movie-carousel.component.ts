import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { EventsParams, SwiperComponent } from "swiper/angular";
import { Select } from "@ngxs/store";
import { HomeState } from "../../../../data/modules/home/home.state";
import { Observable } from "rxjs";
import { MovieSchema } from "../../../../data/schemas/core/movie.schema";
import { TempHelper } from "../../tempHelper";
import { Swiper, SwiperEvents } from "swiper/types";
import { HomeController } from "../../../../data/modules/home/home.controller";

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieCarouselComponent implements AfterViewInit {
  @ViewChild('homeHeaderSwiperRef', { static: false }) homeHeaderSwiper?: SwiperComponent;
  @Select(HomeState.selectSuggestedMovies) homeSuggestedMovies$: Observable<MovieSchema[]>;

  constructor(
    public tempHelper: TempHelper,
    public homeController: HomeController
  ) { }

  onSwiper(params: EventsParams['_swiper']) {
    console.log(params);
    // const [swiper] = params;
    // console.log(swiper);
  }

  ngAfterViewInit() {
    this.slideToCenter();
  }

  onSlideChange(event:EventsParams['slideChange']) {
    if (!event?.length) {
      return;
    }

    const swiper = event[0];
    const index = swiper.activeIndex;

    console.log(index)
    this.homeSuggestedMovies$.subscribe(data => {
      console.log(data)
      console.log(data[index]);
      this.homeController.setHeaderSwiperActiveMovie(data[index]);
    })

    // console.log(this.homeSuggestedMovies$)
  }

  private slideToCenter(): void {
    this.homeHeaderSwiper?.swiperRef.slideTo(1, 0);
  }
}
