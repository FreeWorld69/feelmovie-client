import * as Plyr from 'plyr';
import { Injectable } from '@angular/core';
import { MovieFilesSchema } from '../../../schemas/core/basics/movie_files.schema';
import { DetailedMovieActions } from '../detailed-movie.actions';
import { SeriesObject } from '../detailed-movie.metadata';
import { Store } from '@ngxs/store';
import { PlyrQualities } from '../../../../shared/enums/plyr.enum';
import { DetailedMovieState } from '../detailed-movie.state';
import { ApiServiceRoot } from '../../../network/api.service';

@Injectable()
export class DetailedService {
  constructor(
    private readonly store: Store,
    private readonly apiServiceRoot: ApiServiceRoot
  ) {}

  public fetchAndSetDetailedMovieFiles(
    id: number,
    isSeries: boolean,
    season: number = 1
  ) {
    console.log('='.repeat(20));
    console.log({ isSeries });
    if (isSeries) {
      return this.apiServiceRoot.getSeries(id, season).then((seriesData) => {
        console.log('='.repeat(20));
        console.log(seriesData);
        console.log('='.repeat(20));
        console.log(id, season);

        const seasonsData = this.store.selectSnapshot(
          DetailedMovieState.selectMovieDetails
        )?.seasons;

        // adding data field overriding intellisense and filling first season with seriesData
        const series = seasonsData?.slice()?.map((el) => {
          const temp = Object.assign({}, el) as SeriesObject;

          // add required fields
          temp.data = el.number === season ? seriesData : [];
          temp.screenLoading = false;
          temp.opened = false;

          return temp;
        }) as SeriesObject[];

        this.store.dispatch(new DetailedMovieActions.SetSeries(series));
      });
    }

    return this.apiServiceRoot.getMovie(id).then((res) => {
      this.store.dispatch(new DetailedMovieActions.SetMovieFile(res?.[0]));
    });
  }

  public setActiveLanguage(lang: string): void {
    this.store.dispatch(new DetailedMovieActions.SetActiveLanguage(lang));
  }

  public setVideoSources(file: MovieFilesSchema): void {
    const videoSources = file?.movies?.map((el) => {
      let size: PlyrQualities;

      switch (el?.quality) {
        case 'HIGH':
          size = PlyrQualities.HIGH;
          break;
        case 'MEDIUM':
          size = PlyrQualities.MEDIUM;
          break;
        case 'LOW':
          size = PlyrQualities.LOW;
          break;
        default:
          size = PlyrQualities.LOW;
      }

      const videoSource: Plyr.Source = {
        src: el.src ?? '',
        type: 'video/mp4',
        provider: 'html5',
        size,
      };

      return videoSource;
    });

    this.store.dispatch(new DetailedMovieActions.SetVideoSources(videoSources));
  }

  public setActiveSeason(season: number): void {
    this.store.dispatch(new DetailedMovieActions.SetActiveSeason(season));
  }

  public setActiveEpisode(episode: number): void {
    this.store.dispatch(new DetailedMovieActions.SetActiveEpisode(episode));
  }
}
