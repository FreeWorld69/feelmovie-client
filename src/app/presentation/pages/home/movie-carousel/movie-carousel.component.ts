import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MovieSchema } from "../../../../data/schemas/core/movie.schema";
import { EventsParams, SwiperComponent } from "swiper/angular";
import { HomeActions } from "../../../../data/modules/home/home.actions";
import { Actions, ofActionDispatched, Select } from "@ngxs/store";
import { HomeState } from "../../../../data/modules/home/home.state";
import { first, Observable, tap } from "rxjs";
import { TempHelper } from "../../tempHelper";
import { HelperService } from "../../../../utils/helper.service";
import { HomeController } from "../../../../data/modules/home/home.controller";

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieCarouselComponent implements AfterViewInit {
  @ViewChild('homeHeaderSwiperRef', {static: false}) homeHeaderSwiper?: SwiperComponent;
  @Select(HomeState.selectPopularMovies) homePopularMovies$: Observable<MovieSchema[]>;

  constructor(
    public tempHelper: TempHelper,
    public helperService: HelperService,
    private readonly homeController: HomeController,
    private readonly actions: Actions
  ) {
    this.actions
      .pipe(
        ofActionDispatched(HomeActions.SetPopularMovies),
        tap(() => this.setImage(1))
      )
      .subscribe()
  }

  ngAfterViewInit() {
    this.slideToCenter();
  }

  public onSwiper(params: EventsParams['activeIndexChange']) {
    const [swiper] = params;
    this.setImage(swiper.activeIndex);
  }

  private setImage(index: number) {
    this.homePopularMovies$
      .pipe(first())
      .subscribe(homePopularMovies => {
        const element = homePopularMovies[index];
        const covers = element?.covers;
        const imageSrc = covers?.s1920 ?? covers?.s1050 ?? covers?.s510 ?? covers?.s367 ?? element?.poster;

        if (!imageSrc) return;

        this.homeController.setActiveHeadImage(imageSrc)
      })
  }

  private slideToCenter(): void {
    const index = 1;
    this.homeHeaderSwiper?.swiperRef.slideTo(index, 0);
  }
}
