import * as Plyr from "plyr";
import { StateToken } from "@ngxs/store";
import { MovieSchema } from "../../schemas/core/movie.schema";
import { SeasonFileSchema } from "../../schemas/core/season_file.schema";
import { SeasonSchema } from "../../schemas/core/basics/season.schema";


export interface SeriesObject extends SeasonSchema {
  data: SeasonFileSchema[];

  // extras
  screenLoading?: boolean;
  opened?: boolean;
}

export interface ExtendedDetails extends MovieSchema {
  activeSeason?: number,
  activeEpisode?: number,
  activeLanguage?: string,
}

export interface DetailedMovieStateModel {
  details: ExtendedDetails,

  movie: SeasonFileSchema,
  series: SeriesObject[],

  videoSources: Plyr.Source[],
  suggested: MovieSchema[],
}

export const DM_STATE_TOKEN = new StateToken<DetailedMovieStateModel>('detailed_movie_state_token');
