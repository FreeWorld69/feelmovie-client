import { Injectable } from '@angular/core';
import { DetailedMovieActions } from './detailed-movie.actions';
import { Store } from '@ngxs/store';
import { DetailedService } from './services/detailed.service';
import { DetailedMovieState } from './detailed-movie.state';
import { ApiServiceRoot } from '../../network/api.service';
import { MovieFilesSchema } from '../../schemas/core/basics/movie_files.schema';

@Injectable()
export class DetailedMovieController {
  constructor(
    private readonly detailedService: DetailedService,
    private readonly store: Store,
    private readonly apiServiceRoot: ApiServiceRoot
  ) {}
  public async initDetailedData(movieDetailsId: number) {
    const data = await this.apiServiceRoot.getGeneralDetails(movieDetailsId);
    this.store.dispatch(new DetailedMovieActions.SetMovieDetails(data));

    console.log('*'.repeat(20));
    console.log(data);

    if (!data?.id) {
      return;
    }

    if (data?.isSeries) {
      return this.detailedService.fetchAndSetDetailedMovieFiles(
        data.id,
        true,
        1
      );
    }

    return this.detailedService.fetchAndSetDetailedMovieFiles(data.id, false);
  }

  public setMovie(params?: {
    lang?: string;
    movieFiles?: MovieFilesSchema[];
  }): void {
    const movieFiles =
      this.store.selectSnapshot(DetailedMovieState.selectMovie)?.movieFiles ??
      params?.movieFiles ??
      []; // get movie from store

    if (!movieFiles?.length) return;

    // find by language or any
    const langFirst = params?.lang ?? 'ENG';
    const movieFile =
      movieFiles?.find((el) => el.lang === langFirst) || movieFiles[0];
    const movieLang = movieFile.lang ?? langFirst;

    // set store data
    this.detailedService.setActiveLanguage(movieLang); // set active language
    this.detailedService.setVideoSources(movieFile); // set active video source
  }

  public setSeries(season: number, episode: number, lang?: string): void {
    const series = this.store.selectSnapshot(DetailedMovieState.selectSeries);
    const movieFiles = series
      ?.find((el) => el.number === season)
      ?.data?.find((el) => el.episode === episode)?.movieFiles;

    if (!movieFiles?.length) return;

    const langFirst = lang ?? 'ENG';
    const movieFile =
      movieFiles?.find((el) => el.lang === langFirst) || movieFiles[0];
    const movieLang = movieFile.lang ?? langFirst;

    this.detailedService.setActiveSeason(season);
    this.detailedService.setActiveEpisode(episode);
    this.detailedService.setActiveLanguage(movieLang); // set active language
    this.detailedService.setVideoSources(movieFile); // set active video source
  }

  public toggleLoading(season: number, payload: boolean): void {
    this.store.dispatch(
      new DetailedMovieActions.UpdateSeriesLoading(season, payload)
    );
  }

  public async fetchAndSetSeries(id: number, season: number) {
    const seriesDataResponse = await this.apiServiceRoot.getSeries(id, season);

    this.store.dispatch(
      new DetailedMovieActions.UpdateSeries(seriesDataResponse, season)
    );
  }
}
