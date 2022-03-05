import { Component, Input, OnInit } from '@angular/core';
import { SvgIconEnum } from "./@custom/svg/svg-icon.enum";

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
      <div class="card__cover pointer">
        <img [src]="imgSrc" alt="">
        <a [href]="link" class="card__play">
          <app-svg
            [filled]="true"
            [type]="SvgIconEnum.PLAY_RIGHT"
            [width]="50"
            [height]="50">
          </app-svg>
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
            <app-svg
              [filled]="true"
              [type]="SvgIconEnum.STAR"
              fill="#ff55a5"
              class="d-flex align-items-center mr-1">
            </app-svg>
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

  public SvgIconEnum = SvgIconEnum;

  constructor() { }
}
