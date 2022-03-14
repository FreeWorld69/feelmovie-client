import { Injectable } from "@angular/core";
import { DetailedMovieActions } from "./detailed-movie.actions";
import { Store } from "@ngxs/store";
import { DetailsApiService } from "../../network/store/details-api.service";
import { DetailedService } from "./services/detailed.service";
import { DetailedMovieState } from "./detailed-movie.state";
import { SeriesObject } from "./detailed-movie.metadata";

@Injectable()
export class DetailedMovieController {
  constructor(
    private readonly detailsApiService: DetailsApiService,
    private readonly detailedService: DetailedService,
    private readonly store: Store,
  ) {}
  public initDetailedData(movieDetailsId: number): void {
    const detailedMovieResponse = this.detailsApiService.fetchDetails(movieDetailsId);

    detailedMovieResponse.subscribe(data => {
      this.store.dispatch([
        new DetailedMovieActions.SetMovieDetails(data)
      ])

      if (!data?.id) {
        return;
      }

      if (data?.isSeries) {
        return this.detailedService.fetchAndSetDetailedMovieFiles(data.id, true, 1);
      }

      return this.detailedService.fetchAndSetDetailedMovieFiles(data.id, false)
    });
  }

  public setMovie(lang?: string): void {
    const movieFiles = this.store.selectSnapshot(DetailedMovieState.selectMovie)?.movieFiles // get movie from store

    if (!movieFiles?.length) return;

    // find by language or any
    const langFirst = lang ?? 'ENG';
    const movieFile = movieFiles?.find(el => el.lang === langFirst) || movieFiles[0];
    const movieLang = movieFile.lang ?? langFirst;

    // set store data
    this.detailedService.setActiveLanguage(movieLang); // set active language
    this.detailedService.setVideoSources(movieFile); // set active video source
  }

  public setSeries(season: number, episode: number, lang?: string): void {
    const series = this.store.selectSnapshot(DetailedMovieState.selectSeries);
    const movieFiles = series
      ?.find(el => el.number === season)
      ?.data
      ?.find(el => el.episode === episode)
      ?.movieFiles

    if (!movieFiles?.length) return;

    const langFirst = lang ?? 'ENG';
    const movieFile = movieFiles?.find(el => el.lang === langFirst) || movieFiles[0];
    const movieLang = movieFile.lang ?? langFirst;

    this.detailedService.setActiveSeason(season);
    this.detailedService.setActiveEpisode(episode);
    this.detailedService.setActiveLanguage(movieLang); // set active language
    this.detailedService.setVideoSources(movieFile); // set active video source
  }

  public toggleLoading(season: number, payload: boolean): void {
    console.log('toggled')
    this.store.dispatch(new DetailedMovieActions.UpdateSeriesLoading(season, payload));
  }

  public fetchAndSetSeries(id: number, season: number) {
    const seriesDataResponse = this.detailsApiService.fetchSeries(id, season)

    seriesDataResponse.subscribe(seriesData => {
      this.store.dispatch(new DetailedMovieActions.UpdateSeries(seriesData, season));
    })
  }
}
