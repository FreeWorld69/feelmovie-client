import * as Plyr from "plyr";
import { MovieSchema } from "../../../../data/schemas/core/movie.schema";
import { Component } from '@angular/core';
import { Select } from "@ngxs/store";
import { DetailedMovieState } from "../../../../data/modules/detailed/detailed-movie.state";
import { Observable } from "rxjs";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  @Select(DetailedMovieState.selectMovieDetails) movieDetails$: Observable<MovieSchema>;
  @Select(DetailedMovieState.selectVideoSources) videoSources$: Observable<Plyr.Source[]>;
  public player: Plyr;

  public played(event: Plyr.PlyrEvent): void {
    console.log('played', event);
  }
}
