import { MovieSchema } from "../../schemas/core/movie.schema";

export namespace HomeActions {
  export class SetMovies {
    public static readonly type: string = '[Home] set movies';

    constructor(public movies: MovieSchema[]) {}
  }

  export class SetTopMovies {
    public static readonly type: string = '[Home] set top movies';

    constructor(public movies: MovieSchema[]) {}
  }

  export class SetSuggestedMovies {
    public static readonly type: string = '[Home] set suggested movies';

    constructor(public movies: MovieSchema[]) {}
  }
}

