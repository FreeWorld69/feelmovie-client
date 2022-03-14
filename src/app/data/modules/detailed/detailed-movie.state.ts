import Plyr from "plyr";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { patch, updateItem } from "@ngxs/store/operators";
import { Injectable } from "@angular/core";
import { DetailedMovieStateModel, DM_STATE_TOKEN, ExtendedDetails, SeriesObject } from "./detailed-movie.metadata";
import { DetailedMovieActions } from "./detailed-movie.actions";
import { SeasonFileSchema } from "../../schemas/core/season_file.schema";


type CurrentCtx = StateContext<DetailedMovieStateModel>;

@State({
  name: DM_STATE_TOKEN,
  defaults: {
    movie: {},
    series: [],
    details: {},
    suggested: [],
    videoSources: []
  }
})
@Injectable()
export class DetailedMovieState {
  @Selector([DM_STATE_TOKEN])
  public static selectMovieDetails(state: DetailedMovieStateModel): ExtendedDetails {
    return state.details;
  }

  @Selector([DM_STATE_TOKEN])
  public static selectMovie(state: DetailedMovieStateModel): SeasonFileSchema {
    return state.movie;
  }

  @Selector([DM_STATE_TOKEN])
  public static selectSeries(state: DetailedMovieStateModel): SeriesObject[] {
    return state.series;
  }

  @Selector([DM_STATE_TOKEN])
  public static selectVideoSources(state: DetailedMovieStateModel): Plyr.Source[] {
    return state.videoSources;
  }

  @Action(DetailedMovieActions.SetMovieDetails)
  public setMovieDetails(ctx: CurrentCtx, action: DetailedMovieActions.SetMovieDetails): void {
    ctx.patchState({details: action.movie})
  }

  @Action(DetailedMovieActions.SetMovieFile)
  public setMovieFile(ctx: CurrentCtx, action: DetailedMovieActions.SetMovieFile): void {
    ctx.patchState({movie: action.seasonFile})
  }

  @Action(DetailedMovieActions.SetSeries)
  public setSeries(ctx: CurrentCtx, action: DetailedMovieActions.SetSeries): void {
    ctx.patchState({series: action.emptySeasonData});
  }

  @Action(DetailedMovieActions.UpdateSeries)
  public updateSeries(ctx: CurrentCtx, action: DetailedMovieActions.UpdateSeries): void {
    ctx.setState(
      patch({
        series: updateItem<SeriesObject>(
          el => el?.number === action.season,
          patch({data: action.seasonData})
        )
      })
    )
  }

  @Action(DetailedMovieActions.SetActiveLanguage)
  public setActiveLanguage(ctx: CurrentCtx, action: DetailedMovieActions.SetActiveLanguage): void {
    const currentDetails = ctx.getState().details;
    const updatedDetails = {...currentDetails, activeLanguage: action.lang }

    ctx.patchState({details: updatedDetails})
  }

  @Action(DetailedMovieActions.SetVideoSources)
  public setVideoSources(ctx: CurrentCtx, action: DetailedMovieActions.SetVideoSources): void {
    ctx.patchState({videoSources: action.videoSources})
  }

  @Action(DetailedMovieActions.SetActiveSeason)
  public setActiveSeason(ctx: CurrentCtx, action: DetailedMovieActions.SetActiveSeason): void {
    const currentDetails = ctx.getState().details;
    const updatedDetails = {...currentDetails, activeSeason: action.season }

    ctx.patchState({details: updatedDetails})
  }

  @Action(DetailedMovieActions.SetActiveEpisode)
  public setActiveEpisode(ctx: CurrentCtx, action: DetailedMovieActions.SetActiveEpisode): void {
    const currentDetails = ctx.getState().details;
    const updatedDetails = {...currentDetails, activeEpisode: action.episode }

    ctx.patchState({details: updatedDetails})
  }

  @Action(DetailedMovieActions.UpdateSeriesLoading)
  public updateSeriesLoading(ctx: CurrentCtx, action: DetailedMovieActions.UpdateSeriesLoading): void {
    ctx.setState(
      patch({
        series: updateItem<SeriesObject>(
          el => el?.number === action.season,
          patch({screenLoading: action.screenLoading})
        )
      })
    )
  }

  @Action(DetailedMovieActions.ToggleAccordion)
  public toggleAccordion(ctx: CurrentCtx, action: DetailedMovieActions.ToggleAccordion): void {
    ctx.setState(
      patch({
        series: updateItem<SeriesObject>(
          el => el?.number === action.season,
          patch({opened: action.opened})
        )
      })
    )
  }
}
