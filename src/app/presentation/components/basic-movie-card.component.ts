import { Component, Input, OnInit } from '@angular/core';

export interface BasicMovieCardProps {
  imgSrc: string;
  link: string;
  title: string;
  categories: Array<string>;
  rating: number;
}

@Component({
  selector: 'app-basic-movie-card',
  template: `
    <div class="card">
      <div class="card__cover">
        <img [src]="imgSrc" alt="">
        <a [href]="link" class="card__play">
          <i class="icon ion-ios-play"></i>
        </a>
      </div>

      <div class="card__content">
        <h3 class="card__title">
          <a [href]="link">
            {{title}}
          </a>
        </h3>

        <span class="card__category">
            <span *ngFor="let category of categories">{{category}}</span>
        </span>

        <span class="card__rate">
          <i class="icon ion-ios-star"></i>
          {{rating}}
        </span>
      </div>
    </div>
  `
})
export class BasicMovieCardComponent implements BasicMovieCardProps {
  @Input() imgSrc:string;
  @Input() link:string;
  @Input() title:string;
  @Input() categories:Array<string>;
  @Input() rating:number;

  constructor() { }
}
