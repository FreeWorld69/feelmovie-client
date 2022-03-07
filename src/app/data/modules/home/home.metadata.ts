import { StateToken } from "@ngxs/store";
import { MovieSchema } from "../../schemas/core/movie.schema";

export interface HomeStateModel {
  movies: MovieSchema[],
  suggestedMovies: MovieSchema[],
  topMovies: MovieSchema[]
}

export const HOME_STATE_TOKEN = new StateToken<HomeStateModel>('home_state_token')
