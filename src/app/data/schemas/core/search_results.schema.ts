import { CoversSchema } from "./basics/covers.schema";

export interface SearchResultsSchema {
    id?: number;
    movieDetailsId?: number;
    geoTitle?: string;
    engTitle?: string;
    rusTitle?: string;
    originalTitle?: string;
    geoDescription?: string;
    engDescription?: string;
    rusDescription?: string;
    poster?: string;
    posterS240?: string;
    isSeries?: boolean;
    releaseYear?: string;
    imdb?: number;
    covers?: CoversSchema;
}
