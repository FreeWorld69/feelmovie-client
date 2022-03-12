import { Action, Selector, State, StateContext } from "@ngxs/store";
import { HOME_STATE_TOKEN, HomeStateModel } from "./home.metadata";
import { Injectable } from "@angular/core";
import { HomeActions } from "./home.actions";
import { MovieSchema } from "../../schemas/core/movie.schema";

@State({
  name: HOME_STATE_TOKEN,
  defaults: {
    movies: [],
    topMovies: [],
    popularMovies: []
  }
})
@Injectable()
export class HomeState {
  @Action(HomeActions.SetMovies)
  public setMovies(ctx: StateContext<HomeStateModel>, action: HomeActions.SetMovies): void {
    ctx.patchState({movies: action.movies});
  }

  @Action(HomeActions.SetPopularMovies)
  public setPopularMovies(ctx: StateContext<HomeStateModel>, action: HomeActions.SetPopularMovies): void {
    ctx.patchState({popularMovies: action.movies});
  }

  @Action(HomeActions.SetTopMovies)
  public setTopMovies(ctx: StateContext<HomeStateModel>, action: HomeActions.SetTopMovies): void {
    ctx.patchState({topMovies: action.movies});
  }

  @Selector([HOME_STATE_TOKEN])
  public static selectMovies(state: HomeStateModel): MovieSchema[] {
    return state.movies;
  }
  @Selector([HOME_STATE_TOKEN])
  public static selectTopMovies(state: HomeStateModel): MovieSchema[] {
    return state.topMovies;
  }
  @Selector([HOME_STATE_TOKEN])
  public static selectPopularMovies(state: HomeStateModel): MovieSchema[] {
    return state.popularMovies;
  }
}
