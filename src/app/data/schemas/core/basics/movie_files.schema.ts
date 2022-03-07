import { MovieFileSchema } from "./movie_file.schema";

export interface MovieFilesSchema {
    lang?: string;
    movies?: Array<MovieFileSchema>;
}
