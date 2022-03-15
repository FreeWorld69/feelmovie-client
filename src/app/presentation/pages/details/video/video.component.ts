import * as Plyr from "plyr";
import { MovieSchema } from "../../../../data/schemas/core/movie.schema";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Select } from "@ngxs/store";
import { DetailedMovieState } from "../../../../data/modules/detailed/detailed-movie.state";
import { Observable } from "rxjs";
import { Helper } from "../../../../utils/helper";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  @Select(DetailedMovieState.selectMovieDetails) movieDetails$: Observable<MovieSchema>;
  @Select(DetailedMovieState.selectVideoSources) videoSources$: Observable<Plyr.Source[]>;
  public player: Plyr;

  constructor(
    public tempHelper: Helper
  ) {}

  public played(event: Plyr.PlyrEvent): void {}

  initPlyr(event: Plyr) {
    this.player = event;
  }
}
