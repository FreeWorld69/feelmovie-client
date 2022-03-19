import { Injectable } from "@angular/core";
import { HomeActions } from "./home.actions";
import { Store } from "@ngxs/store";
import { MovieApiService } from "../../network/services/movie_api.service";

@Injectable()
export class HomeController {
  constructor(
    private readonly movieApiService: MovieApiService,
    private readonly store: Store
  ) {}

  public async initHomeData() {
    const [popularMovies, topMovies, movies] = await Promise.all([
      this.movieApiService.getPopularMovies(),
      this.movieApiService.getTopMovies(),
      this.movieApiService.getMovies(1, null),
    ]);

    this.store.dispatch([
      new HomeActions.SetPopularMovies(popularMovies),
      new HomeActions.SetTopMovies(topMovies),
      new HomeActions.SetMovies(movies)
    ]);
  }

  public setActiveHeadImage(src: string): void {
    this.store.dispatch(new HomeActions.SetActiveHeadImage(src));
  }
}
