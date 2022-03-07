import { MovieDataService } from "../../../movie-data/services/movie-data.service";
import { HomeController } from "../../../data/modules/home/home.controller";
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Select } from "@ngxs/store";
import { HomeState } from "../../../data/modules/home/home.state";
import { MovieSchema } from "../../../data/schemas/core/movie.schema";
import { GenresSchema } from "../../../data/schemas/core/basics/genre.schema";
import { PlotSchema } from "../../../data/schemas/core/basics/plot.schema";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Select(HomeState.selectMovies) homeMovies$: Observable<MovieSchema[]>;
  @Select(HomeState.selectTopMovies) homeTopMovies$: Observable<MovieSchema[]>;
  @Select(HomeState.selectSuggestedMovies) homeSuggestedMovies$: Observable<MovieSchema[]>;

  constructor(
    public readonly movieDataService: MovieDataService,
    private readonly homeController: HomeController,
  ) { }

  ngOnInit(): void {
    this.homeController.initHomeData();
  }

  public getGenres(genresArr?: GenresSchema[]) {
    return genresArr?.map(genre => genre?.engTitle ?? '') ?? [];
  }

  public getDescription(plotsArr?: PlotSchema[]) {
    const plotDescription = plotsArr?.find(el => el.language === 'ENG')?.description;

    if (!plotDescription) {
      return plotsArr?.find(el => el.language === 'GEO' || el.language === 'RUS')?.description ?? '';
    }

    return plotDescription
  }
}
