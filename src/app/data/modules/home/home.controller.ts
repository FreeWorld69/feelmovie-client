import { Injectable } from '@angular/core';
import { HomeActions } from './home.actions';
import { Store } from '@ngxs/store';
import { ApiServiceRoot } from '../../network/api.service';

@Injectable()
export class HomeController {
  constructor(
    private readonly store: Store,
    private readonly apiServiceRoot: ApiServiceRoot
  ) {}

  public async initHomeData() {
    const [popularMovies, topMovies, movies] = await Promise.all([
      this.apiServiceRoot.getPopularMovies(),
      this.apiServiceRoot.getTopMovies(),
      this.apiServiceRoot.getMovies(),
    ]);

    this.store.dispatch([
      new HomeActions.SetPopularMovies(popularMovies),
      new HomeActions.SetTopMovies(topMovies),
      new HomeActions.SetMovies(movies),
    ]);
  }

  public setActiveHeadImage(src: string): void {
    this.store.dispatch(new HomeActions.SetActiveHeadImage(src));
  }
}
