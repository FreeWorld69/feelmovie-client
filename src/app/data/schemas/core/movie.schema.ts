import {
  Exclude,
  Expose,
  plainToInstance,
  Transform,
  Type,
} from 'class-transformer';
import { CoverSchema } from './basics/cover.schema';
import { CoversSchema } from './basics/covers.schema';
import { PlotSchema } from './basics/plot.schema';
import { GenresSchema } from './basics/genre.schema';
import { SeasonSchema } from './basics/season.schema';

@Exclude()
export class MovieSchema {
  @Expose()
  public readonly id?: number;

  @Expose({ name: 'adjaraId' })
  public readonly movieDetailsId?: number;

  @Expose({ name: 'primaryName' })
  public readonly geoTitle?: string;

  @Expose({ name: 'secondaryName' })
  public readonly engTitle?: string;

  @Expose({ name: 'tertiaryName' })
  public readonly rusTitle?: string;

  @Expose({ name: 'originalName' })
  public readonly originalTitle?: string;

  @Expose({ name: 'isTvShow' })
  public readonly isSeries?: boolean;

  @Expose()
  public readonly duration?: number;

  @Expose({ name: 'rating' })
  @Transform(({ obj }) => obj?.rating?.imdb?.score ?? 0)
  public readonly imdb?: number;

  @Expose()
  public readonly releaseDate?: string;

  @Expose({ name: 'year' })
  @Transform((obj) => String(obj?.value ?? ''))
  public readonly releaseYear?: string;

  @Expose()
  public readonly poster?: string;

  @Expose({ name: 'posters' })
  @Transform(({ obj }) => obj?.posters?.data?.s240)
  public readonly posterS240?: string;

  @Expose()
  @Type(() => CoverSchema)
  public readonly cover?: CoverSchema;

  @Expose()
  @Transform(({ obj }) => plainToInstance(CoversSchema, obj?.covers?.data))
  public readonly covers?: CoversSchema;

  @Expose()
  @Transform(({ obj }) => plainToInstance(PlotSchema, obj?.plots?.data ?? null))
  public readonly plots?: Array<PlotSchema>;

  @Expose()
  @Transform(({ obj }) =>
    plainToInstance(GenresSchema, obj?.genres?.data ?? null)
  )
  public readonly genres?: Array<GenresSchema>;

  @Expose()
  @Transform(({ obj }) =>
    plainToInstance(SeasonSchema, obj?.seasons?.data ?? null)
  )
  public readonly seasons?: Array<SeasonSchema>;
}
