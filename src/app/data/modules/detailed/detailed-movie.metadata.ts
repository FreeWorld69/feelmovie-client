import { StateToken } from "@ngxs/store";
import { MovieSchema } from "../../schemas/core/movie.schema";

export interface DetailedMovieStateModel {
  movie: MovieSchema,
  suggested: MovieSchema[]
}

export const DM_STATE_TOKEN = new StateToken<DetailedMovieStateModel>('detailed_movie_state_token');
