import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MovieSchema } from "../../../../data/schemas/core/movie.schema";
import { SwiperComponent } from "swiper/angular";
import { Select } from "@ngxs/store";
import { HomeState } from "../../../../data/modules/home/home.state";
import { Observable } from "rxjs";
import { TempHelper } from "../../tempHelper";
import { HelperService } from "../../../../utils/helper.service";

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieCarouselComponent implements AfterViewInit {
  @ViewChild('homeHeaderSwiperRef', { static: false }) homeHeaderSwiper?: SwiperComponent;
  @Select(HomeState.selectPopularMovies) homePopularMovies$: Observable<MovieSchema[]>;

  constructor(
    public tempHelper: TempHelper,
    public helperService: HelperService
  ) { }

  ngAfterViewInit() {
    this.slideToCenter();
  }

  private slideToCenter(): void {
    this.homeHeaderSwiper?.swiperRef.slideTo(1, 0);
  }
}
