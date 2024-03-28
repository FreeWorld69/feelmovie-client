import { Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { MovieSchema } from '../schemas/core/movie.schema';
import { SearchResultsSchema } from '../schemas/core/search_results.schema';
import { SeasonFileSchema } from '../schemas/core/season_file.schema';

interface ElectronIpcInterface {
  electronGetMovies: () => Promise<{ data: any }>;
  electronGetTopMovies: () => Promise<{ data: any }>;
  electronGetPopularMovies: () => Promise<{ data: any }>;
  electronGetGeneralDetails: (movieDetailsId: string) => Promise<{ data: any }>;
  electronGetFoundMovie: (text: string) => Promise<{ data: any }>;
  electronGetMovie: (id: string) => Promise<{ data: any }>;
  electronGetSeries: (id: string, season: string) => Promise<{ data: any }>;
}

@Injectable({
  providedIn: 'root',
})
export class ApiServiceRoot {
  private electronAPi: ElectronIpcInterface;

  constructor() {
    this.electronAPi = (<any>window).electronAPI;
  }

  async getMovies(): Promise<MovieSchema[]> {
    const topMovies = await this.electronAPi.electronGetMovies();

    return plainToInstance(MovieSchema, (topMovies.data as object[]) || [], {
      enableCircularCheck: true,
    });
  }

  async getTopMovies(): Promise<MovieSchema[]> {
    const topMovies = await this.electronAPi.electronGetTopMovies();

    return plainToInstance(MovieSchema, (topMovies.data as object[]) || [], {
      enableCircularCheck: true,
    });
  }

  async getPopularMovies(): Promise<MovieSchema[]> {
    const topMovies = await this.electronAPi.electronGetPopularMovies();

    return plainToInstance(MovieSchema, (topMovies.data as object[]) || [], {
      enableCircularCheck: true,
    });
  }

  async getGeneralDetails(movieDetailsId: number): Promise<MovieSchema> {
    const topMovies = await this.electronAPi.electronGetGeneralDetails(
      movieDetailsId.toString()
    );

    return plainToInstance(MovieSchema, topMovies.data, {
      enableCircularCheck: true,
    });
  }

  async getFoundMovie(text: string): Promise<SearchResultsSchema[]> {
    const topMovies = await this.electronAPi.electronGetFoundMovie(text);

    return plainToInstance(
      SearchResultsSchema,
      (topMovies.data as object[]) || [],
      { enableCircularCheck: true }
    );
  }
  async getMovie(id: number): Promise<SeasonFileSchema[]> {
    const movie = await this.electronAPi.electronGetMovie(id.toString());

    return plainToInstance(SeasonFileSchema, (movie.data as object[]) || [], {
      enableCircularCheck: true,
    });
  }

  async getSeries(id: number, season: number): Promise<SeasonFileSchema[]> {
    const topMovies = await this.electronAPi.electronGetSeries(
      id.toString(),
      season.toString()
    );

    return plainToInstance(
      SeasonFileSchema,
      (topMovies.data as object[]) || [],
      { enableCircularCheck: true }
    );
  }
}
