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

  export class SetPopularMovies {
    public static readonly type: string = '[Home] set popular movies';

    constructor(public movies: MovieSchema[]) {}
  }

  export class SetActiveHeadImage {
    public static readonly type: string = '[Home] set home state extras';

    constructor(public image: string) {}
  }
}

