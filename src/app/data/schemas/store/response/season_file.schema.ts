import { CoversSchema } from "./core/covers.schema";
import { MovieFilesSchema } from "./core/movie_files.schema";

export interface SeasonFileSchema {
    episode?: number;
    title?: string;
    poster?: string;
    rating?: any;
    covers?: CoversSchema;
    movieFiles?: Array<MovieFilesSchema>;
}
