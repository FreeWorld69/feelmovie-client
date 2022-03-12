import Plyr from "plyr";
import { MovieSchema } from "../../schemas/core/movie.schema";
import { SeasonFileSchema } from "../../schemas/core/season_file.schema";
import { SeriesObject } from "./detailed-movie.metadata";

export namespace DetailedMovieActions {
  export class SetMovieDetails {
    public static readonly type: string = '[Detailed] set movie details';

    constructor(public movie: MovieSchema) {}
  }

  export class SetMovieFile {
    public static readonly type: string = '[Detailed] set movie files';

    constructor(public seasonFile: SeasonFileSchema) {}
  }

  export class SetSeries {
    public static readonly type: string = '[Detailed] set series data';

    constructor(public emptySeasonData: SeriesObject[]) {}
  }

  export class UpdateSeries {
    public static readonly type: string = '[Detailed] update series data';

    constructor(public seasonData: SeasonFileSchema[], public season: number) {}
  }

  export class SetActiveLanguage {
    public static readonly type: string = '[Detailed] set default language';

    constructor(public lang?: string) {}
  }

  export class SetVideoSources {
    public static readonly type: string = '[Detailed] set video sources';

    constructor(public videoSources?: Plyr.Source[]) {}
  }

  export class SetActiveSeason {
    public static readonly type: string = '[Detailed] set active season';

    constructor(public season: number) {}
  }

  export class SetActiveEpisode {
    public static readonly type: string = '[Detailed] set active episode';

    constructor(public episode: number) {}
  }
}

