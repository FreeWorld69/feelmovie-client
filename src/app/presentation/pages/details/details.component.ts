import { DetailedMovieActions } from "../../../data/modules/detailed/detailed-movie.actions";
import { SeasonFileSchema } from "../../../data/schemas/core/season_file.schema";
import { ExtendedDetails } from "../../../data/modules/detailed/detailed-movie.metadata";
import { Actions, ofActionDispatched, Select, Store } from "@ngxs/store";
import { DetailedMovieController } from "../../../data/modules/detailed/detailed-movie.controller";
import { DetailedMovieState } from "../../../data/modules/detailed/detailed-movie.state";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Component, ViewChild } from '@angular/core';
import { first, Observable } from "rxjs";
import { VideoComponent } from "./video/video.component";
import { Helper } from "../../../utils/helper";
import { SharedService } from "../../../utils/shared-servcie.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Select(DetailedMovieState.selectMovieDetails) detailedMovieDetails$: Observable<ExtendedDetails>
  @Select(DetailedMovieState.selectMovie) detailedMovie$: Observable<SeasonFileSchema>
  @ViewChild(VideoComponent) video: VideoComponent;

  constructor(
    public tempHelper: Helper,
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly route: ActivatedRoute,
    private readonly detailedMovieController: DetailedMovieController,
    private readonly sharedService: SharedService,
    router:Router
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');

        if (!id) return;

        // load movie details
        this.detailedMovieController.initDetailedData(id);

        // load movie files according to action
        this.loadMovieData();

        // load first season series files according to action
        this.loadSeriesData();

        this.actions$
          .pipe(ofActionDispatched(DetailedMovieActions.SetVideoSources))
          .subscribe(elo => {
            // this.video.player.play();
          })
      }
    });

    // play video from other sources
    this.sharedService.videoPlayCalled$.subscribe(() => this.playVideo());
  }

  public onLanguageClick(lang?: string): void {
    this.detailedMovieDetails$
      .pipe(first())
      .subscribe(data => {
        if (lang && data.activeLanguage !== lang) {
          this.detailedMovieController.setMovie(lang);
          this.playVideo();
        }
      });
  }

  private playVideo() {
    // autoplay on click
    this.video.player.currentTime = 0;
    this.video.player.autoplay = true;
    this.video.player.play();
  }

  private loadMovieData(): void {
    this.actions$
      .pipe(ofActionDispatched(DetailedMovieActions.SetMovieFile))
      .subscribe((data: DetailedMovieActions.SetMovieFile) => {
        this.detailedMovieController.setMovie();
      });
  }

  private loadSeriesData(): void {
    this.actions$
      .pipe(ofActionDispatched(DetailedMovieActions.SetSeries))
      .subscribe((data: DetailedMovieActions.SetSeries) => {
        if (!data.emptySeasonData.length) return;
        this.detailedMovieController.setSeries(1, 1);
      });
  }
}
