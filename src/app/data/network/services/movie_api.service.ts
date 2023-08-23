import { Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { MoviesApiTransform } from '../declares/movie_api.transform';
import { MovieGenres } from 'src/app/shared/enums/movie_genres.enum';
import { MovieSchema } from '../../schemas/core/movie.schema';
import { SearchResultsSchema } from '../../schemas/core/search_results.schema';
import { SeasonFileSchema } from '../../schemas/core/season_file.schema';

@Injectable()
export class MovieApiService {
  private static SOURCE = process.env['NG_APP_MOVIE_API_SOURCE_PARAM'];
  private static PER_PAGE = 20;
  private static TYPE = 'movie';
  private static PERIOD = 'month';

  constructor(private readonly moviesApiTransform: MoviesApiTransform) {}

  async getMovies(
    page: number,
    genre: MovieGenres | null
  ): Promise<MovieSchema[]> {
    const sortParam = '-upload_date';
    const filterInit = true;
    const filterSort = '-upload_date';
    const filterWithFiles = 'yes';
    const filterWithActors = 3;
    const filterWithDirectors = 1;
    const filterWithGenre = genre?.toString();

    const { data } = await this.moviesApiTransform.getMovies(
      String(page),
      String(MovieApiService.PER_PAGE),
      String(sortParam),
      String(MovieApiService.SOURCE),
      String(filterInit),
      String(filterSort),
      undefined,
      filterWithGenre,
      undefined,
      String(filterWithFiles),
      undefined,
      String(filterWithActors),
      String(filterWithDirectors),
      undefined
    );

    return plainToInstance(MovieSchema, data || [], {
      enableCircularCheck: true,
    });
  }

  async getTopMovies(): Promise<MovieSchema[]> {
    const page = 1;
    const perPage = 20;
    const filterWithActors = 3;
    const filterWithDirectors = 1;

    const { data } = await this.moviesApiTransform.getTopMovies(
      String(page),
      String(perPage),
      String(MovieApiService.TYPE),
      String(MovieApiService.SOURCE),
      String(MovieApiService.PERIOD),
      String(filterWithActors),
      String(filterWithDirectors)
    );

    return plainToInstance(MovieSchema, data || [], {
      enableCircularCheck: true,
    });
  }

  async getPopularMovies(): Promise<MovieSchema[]> {
    const { data } = await this.moviesApiTransform.getPopularMovies(
      String(MovieApiService.SOURCE)
    );

    return plainToInstance(MovieSchema, data || [], {
      enableCircularCheck: true,
    });
  }

  async getGeneralDetails(movieDetailsId: number): Promise<MovieSchema> {
    const { data } = await this.moviesApiTransform.getGenericMovieDetails(
      movieDetailsId,
      MovieApiService.SOURCE,
      '1'
    );

    return plainToInstance(MovieSchema, data, { enableCircularCheck: true });
  }

  async getFoundMovie(
    keywords: string,
    page: number,
    perPage: number
  ): Promise<SearchResultsSchema[]> {
    const { data } = await this.moviesApiTransform.search(
      String(page),
      String(perPage),
      MovieApiService.SOURCE,
      keywords
    );

    return plainToInstance(SearchResultsSchema, data || [], {
      enableCircularCheck: true,
    });
  }

  async getMovie(id: number): Promise<SeasonFileSchema> {
    const defaultForMovie = 1;

    const { data } = await this.moviesApiTransform.getSeasonFiles(
      id,
      defaultForMovie,
      MovieApiService.SOURCE
    );

    if (!data || !data.length) {
      return {};
    }

    return plainToInstance(SeasonFileSchema, data[0], {
      enableCircularCheck: true,
    });
  }

  async getSeries(id: number, season: number): Promise<SeasonFileSchema[]> {
    const { data } = await this.moviesApiTransform.getSeasonFiles(
      id,
      season,
      MovieApiService.SOURCE
    );

    return plainToInstance(SeasonFileSchema, data || [], {
      enableCircularCheck: true,
    });
  }
}
