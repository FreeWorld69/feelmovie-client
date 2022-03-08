import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { Select } from "@ngxs/store";
import { HomeState } from "../../../../data/modules/home/home.state";
import { Observable } from "rxjs";
import { MovieSchema } from "../../../../data/schemas/core/movie.schema";
import { TempHelper } from "../../tempHelper";

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieCarouselComponent implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiper?: SwiperComponent;
  @Select(HomeState.selectSuggestedMovies) homeSuggestedMovies$: Observable<MovieSchema[]>;

  constructor(
    public tempHelper: TempHelper
  ) { }

  ngAfterViewInit() {
    this.slideToCenter();
  }

  onSlideChange() {
    console.log('slide change');
  }

  private slideToCenter(): void {
    this.swiper?.swiperRef.slideTo(4, 0);
  }
}
