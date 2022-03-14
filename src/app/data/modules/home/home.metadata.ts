import { StateToken } from "@ngxs/store";
import { MovieSchema } from "../../schemas/core/movie.schema";

export interface HomeStateExtras {
  activeHeadImage?: string
}

export interface HomeStateModel {
  movies: MovieSchema[],
  topMovies: MovieSchema[]
  popularMovies: MovieSchema[],
  extras: HomeStateExtras
}

export const HOME_STATE_TOKEN = new StateToken<HomeStateModel>('home_state_token')
