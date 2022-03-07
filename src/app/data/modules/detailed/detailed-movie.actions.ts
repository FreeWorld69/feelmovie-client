import { MovieSchema } from "../../schemas/core/movie.schema";

export class SetMovie {
  public static readonly type: string = '[Detailed] set movie';

  constructor(public movie: MovieSchema) {}
}
