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
            <h2 class="section__title">Top Movies</h2>
          </div>
        </div>

        <!-- card -->
        <ng-content></ng-content>
      </div>
    </section>
  `
})
export class SuggestedMovieCarouselCardComponent {
}
