import { CoversSchema } from "./basics/covers.schema";
import { MovieFilesSchema } from "./basics/movie_files.schema";

export interface SeasonFileSchema {
    episode?: number;
    title?: string;
    poster?: string;
    rating?: any;
    covers?: CoversSchema;
    movieFiles?: Array<MovieFilesSchema>;
}
