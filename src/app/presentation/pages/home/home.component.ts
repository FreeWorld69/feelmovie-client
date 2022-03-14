import { HomeController } from "../../../data/modules/home/home.controller";
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { Select } from "@ngxs/store";
import { HomeState } from "../../../data/modules/home/home.state";
import { MovieSchema } from "../../../data/schemas/core/movie.schema";
import { TempHelper } from "../tempHelper";
import { SwiperComponent } from "swiper/angular";
import { HelperService } from "../../../utils/helper.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('topMovieSwiperRef', { static: false }) topMovieSwiper?: SwiperComponent;
  @Select(HomeState.selectMovies) homeMovies$: Observable<MovieSchema[]>;
  @Select(HomeState.selectTopMovies) homeTopMovies$: Observable<MovieSchema[]>;

  constructor(
    private readonly homeController: HomeController,
    public tempHelper: TempHelper,
    public helperService: HelperService
  ) { }

  ngOnInit(): void {
    // this.homeController.initHomeData();
  }

  ngAfterViewInit(): void {
    this.topMovieSwiper?.swiperRef.slideTo(2, 0);
  }
}
