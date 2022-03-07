import { Action, State, StateContext } from "@ngxs/store";
import { DetailedMovieStateModel, DM_STATE_TOKEN } from "./detailed-movie.metadata";
import { SetMovie } from "./detailed-movie.actions";
import { Injectable } from "@angular/core";


@State({
  name: DM_STATE_TOKEN,
  defaults: {
    movie: {},
    suggested: []
  }
})
@Injectable()
export class DetailedMovieState {
  @Action(SetMovie)
  public setMovie(ctx: StateContext<DetailedMovieStateModel>, action: SetMovie): void {
  }
}
