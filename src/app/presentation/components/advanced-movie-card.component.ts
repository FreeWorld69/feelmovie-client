import { Component, Input } from '@angular/core';

export interface AdvancedMovieCardProps {
  imgSrc: string;
  link: string;
  title: string;
  rating: number;
  description: string;
  categories: Array<string>;
}

@Component({
  selector: 'app-advanced-movie-card',
  template: `
    <div class="card card--list">
      <div class="row">
        <div class="col-12 col-sm-4">
          <div class="card__cover">
            <img [src]="imgSrc" alt="">

            <a [href]="link" class="card__play">
              <i class="icon ion-ios-play"></i>
            </a>
          </div>
        </div>

        <div class="col-12 col-sm-8">
          <div class="card__content">
            <h3 class="card__title">
              <a href="#">
                {{title}}
              </a>
            </h3>

            <span class="card__category">
              <span href="#" *ngFor="let category of categories">{{category}}</span>
            </span>

            <div class="card__wrap">
              <span class="card__rate">
                <i class="icon ion-ios-star"></i>
                {{rating}}
              </span>

              <ul class="card__list">
                <li>HD</li>
              </ul>
            </div>

            <div class="card__description">
              <p>{{description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdvancedMovieCardComponent implements AdvancedMovieCardProps {
  @Input() imgSrc: string;
  @Input() link: string;
  @Input() title: string;
  @Input() rating: number;
  @Input() description: string;
  @Input() categories: Array<string>;

  constructor() { }
}

