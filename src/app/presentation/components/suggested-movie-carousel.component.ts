import { Component, Input} from '@angular/core';
import { BasicMovieCardProps } from "./basic-movie-card.component";

@Component({
  selector: 'app-suggested-movie-carousel',
  template: `
    <!-- expected premiere -->
    <section class="section">
      <div class="container">
        <div class="row">
          <!-- section title -->
          <div class="col-12">
            <h2 class="section__title">Expected premiere</h2>
          </div>

          <!-- card -->
          <div class="col-6 col-sm-4 col-lg-3 col-xl-2" *ngFor="let suggestedMovie of data">
            <app-basic-movie-card
              [imgSrc]="suggestedMovie.imgSrc"
              [link]="suggestedMovie.link"
              [rating]="suggestedMovie.rating"
              [title]="suggestedMovie.title"
              [categories]="suggestedMovie.categories"
            >
            </app-basic-movie-card>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SuggestedMovieCarouselComponent {
  @Input() public data: Array<BasicMovieCardProps>;

  constructor() { }
}
