import { Component } from '@angular/core';
import { Select } from "@ngxs/store";
import { HomeState } from "../../../../data/modules/home/home.state";
import { Observable } from "rxjs";
import { MovieSchema } from "../../../../data/schemas/core/movie.schema";

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent {
  @Select(HomeState.selectActiveHeaderSwiperMovie) activeHeaderSwiperMovie$: Observable<MovieSchema>;

  constructor() {
  }
}
