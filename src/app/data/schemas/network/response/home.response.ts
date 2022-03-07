import { MovieSchema } from "../../core/movie.schema";

export interface HomeResponse {
  popularMovies: MovieSchema[],
  topMovies: MovieSchema[]
  movies: MovieSchema[]
}
