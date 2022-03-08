import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-movie-carousel-card',
  template: `
    <!-- expected premiere -->
    <section class="section" style="margin-top: 100px">
      <div class="container">
        <h2 class="section__title">Top Movies</h2>

        <ng-content></ng-content>
      </div>
    </section>
  `
})
export class BasicMovieCarouselCardComponent {
}
