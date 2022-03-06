import { CoversSchema } from "./core/covers.schema";
import { CoverSchema } from "./core/cover.schema";
import { PlotSchema } from "./core/plot.schema";
import { GenresSchema } from "./core/genre.schema";
import { SeasonSchema } from "./core/season.schema";

export interface MovieSchema {
    id?: number;
    movieDetailsId?: number;
    geoTitle?: string;
    engTitle?: string;
    rusTitle?: string;
    originalTitle?: string;
    isSeries?: boolean;
    duration?: number;
    imdb?: number;
    releaseDate?: string;
    releaseYear?: string;
    poster?: string;
    posterS240?: string;
    cover?: CoverSchema;
    covers?: CoversSchema;
    plots?: Array<PlotSchema>;
    genres?: Array<GenresSchema>;
    seasons?: Array<SeasonSchema>;
}
