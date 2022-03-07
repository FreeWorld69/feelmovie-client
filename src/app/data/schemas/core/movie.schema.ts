import { GenresSchema } from "./basics/genre.schema";
import { CoversSchema } from "./basics/covers.schema";
import { CoverSchema } from "./basics/cover.schema";
import { SeasonSchema } from "./basics/season.schema";
import { PlotSchema } from "./basics/plot.schema";


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
