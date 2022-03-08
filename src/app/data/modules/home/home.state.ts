import { Action, Selector, State, StateContext } from "@ngxs/store";
import { HOME_STATE_TOKEN, HomeStateModel } from "./home.metadata";
import { HomeActions } from "./home.actions";
import { Injectable } from "@angular/core";
import { MovieSchema } from "../../schemas/core/movie.schema";

@State({
  name: HOME_STATE_TOKEN,
  defaults: {
    activeHeaderSwiperMovie: {},
    movies: [],
    topMovies: [],
    suggestedMovies: []
  }
})
@Injectable()
export class HomeState {
  @Action(HomeActions.SetMovies)
  public setMovies(ctx: StateContext<HomeStateModel>, action: HomeActions.SetMovies): void {
    ctx.patchState({movies: action.movies});
  }

  @Action(HomeActions.SetSuggestedMovies)
  public setSuggestedMovies(ctx: StateContext<HomeStateModel>, action: HomeActions.SetSuggestedMovies): void {
    ctx.patchState({suggestedMovies: action.movies});
  }

  @Action(HomeActions.SetTopMovies)
  public setTopMovies(ctx: StateContext<HomeStateModel>, action: HomeActions.SetTopMovies): void {
    ctx.patchState({topMovies: action.movies});
  }

  @Action(HomeActions.SetHeaderSwiperActiveMovie)
  public setHeaderSwiperActiveMovie(ctx: StateContext<HomeStateModel>, action: HomeActions.SetHeaderSwiperActiveMovie): void {
    console.log('------------')
    console.log(action.movie)
    ctx.patchState({activeHeaderSwiperMovie: action.movie});
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
  public static selectSuggestedMovies(state: HomeStateModel): MovieSchema[] {
    return state.suggestedMovies;
  }
  @Selector([HOME_STATE_TOKEN])
  public static selectActiveHeaderSwiperMovie(state: HomeStateModel): MovieSchema {
    return state.activeHeaderSwiperMovie;
  }
}
