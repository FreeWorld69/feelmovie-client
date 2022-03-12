import { Component } from '@angular/core';
import { SvgIconEnum } from "../../../components/@custom/svg/svg-icon.enum";
import { Select, Store } from "@ngxs/store";
import { DetailedMovieState } from "../../../../data/modules/detailed/detailed-movie.state";
import { filter, find, first, Observable } from "rxjs";
import { ExtendedDetails, SeriesObject } from "../../../../data/modules/detailed/detailed-movie.metadata";
import { DetailedMovieController } from "../../../../data/modules/detailed/detailed-movie.controller";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Select(DetailedMovieState.selectMovieDetails) detailedMovieDetails$: Observable<ExtendedDetails>
  @Select(DetailedMovieState.selectSeries) series$: Observable<SeriesObject[]>

  public SvgIconEnum = SvgIconEnum;

  constructor(
    private readonly detailedMovieController: DetailedMovieController,
  ) { }

  public onLanguageClick(season?:number, episode?:number, lang?: string): void {
    this.detailedMovieDetails$
      .pipe(first())
      .subscribe(data => {
        if (!season || !episode || !lang) return;

        this.detailedMovieController.setSeries(season, episode, lang);
      });
  }
}
