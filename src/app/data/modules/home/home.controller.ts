import { inject, Injectable } from "@angular/core";
import { HomeActions } from "./home.actions";
import { HomeApiService } from "../../network-old/store/home-api.service";
import { Store } from "@ngxs/store";
import { MovieSchema } from "../../schemas/core/movie.schema";

@Injectable()
export class HomeController {
  constructor(
    private readonly homeApiService: HomeApiService,
    private readonly store: Store
  ) {}

  public initHomeData(): void {
    const homeDataResponse = this.homeApiService.fetchHomeData();

    homeDataResponse.subscribe(data => {
      this.store.dispatch([
        new HomeActions.SetMovies(data.movies),
        new HomeActions.SetTopMovies(data.topMovies),
        new HomeActions.SetPopularMovies(data.popularMovies)
      ])
    });
  }

  public setActiveHeadImage(src: string): void {
    this.store.dispatch(new HomeActions.SetActiveHeadImage(src));
  }
}
