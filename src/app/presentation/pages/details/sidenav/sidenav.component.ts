import { ExtendedDetails, SeriesObject } from "../../../../data/modules/detailed/detailed-movie.metadata";
import { DetailedMovieActions } from "../../../../data/modules/detailed/detailed-movie.actions";
import { ActionCompletion, Actions, ofActionCompleted, Select, Store } from "@ngxs/store";
import { Component } from '@angular/core';
import { SvgIconEnum } from "../../../components/@custom/svg/svg-icon.enum";
import { DetailedMovieState } from "../../../../data/modules/detailed/detailed-movie.state";
import { DetailedMovieController } from "../../../../data/modules/detailed/detailed-movie.controller";
import { first, mergeMap, Observable, } from "rxjs";

type CompletedAction = ActionCompletion<DetailedMovieActions.UpdateSeries>;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Select(DetailedMovieState.selectMovieDetails) detailedMovieDetails$: Observable<ExtendedDetails>
  @Select(DetailedMovieState.selectSeries) series$: Observable<SeriesObject[]>
  public SvgIconEnum = SvgIconEnum;

  constructor(
    private readonly detailedMovieController: DetailedMovieController,
    private readonly store: Store,
    private readonly actions$: Actions,
  ) {
    this.actions$
      .pipe(ofActionCompleted(DetailedMovieActions.UpdateSeries))
      .subscribe((data: CompletedAction) => {
        // series is set, remove loading
        this.getCurrentSeriesObject(data.action.season, currentSeasonObject => {
          if (currentSeasonObject.screenLoading) {
            this.detailedMovieController.toggleLoading(data.action.season, false)
          }
        });
      })
  }

  public onLanguageClick(season?:number, episode?:number, lang?: string): void {
    this.detailedMovieDetails$.pipe(first()).subscribe(() => {
        if (!season || !episode || !lang) {
          return;
        }

        this.detailedMovieController.setSeries(season, episode, lang);
      });
  }

  public toggleAccordion(opened?: boolean, season?: number): void {
    if (opened === undefined || season === undefined) return;

    const newOpened = !opened;

    // always
    this.store.dispatch(new DetailedMovieActions.ToggleAccordion(season, newOpened));

    this.getCurrentSeriesObject(season, currentSeasonObject => {
      // fetch data
      if (newOpened) {
        if (!currentSeasonObject.data.length) {
          // start loading
          this.detailedMovieController.toggleLoading(season, true);

          // fetch and set data
          this.detailedMovieController.fetchAndSetSeries(currentSeasonObject.movieId ?? 0, season);
          console.log('from api')
        }else {
          console.log('from store')
        }

        return;
      }

      // check if screen is loading
      // if it's loading after accordion then force remove it
      if (currentSeasonObject.screenLoading) {
        this.detailedMovieController.toggleLoading(season, false)
      }
    });
  }

  private getCurrentSeriesObject(season: number, clbck?: (val: SeriesObject) => void) {
    this.series$
      .pipe(
        mergeMap(seriesArr => seriesArr.filter(ep => ep?.number ? ep.number === season : false)),
        first(),
      )
      .subscribe(obj => { if (clbck) clbck(obj) })
  }
}
