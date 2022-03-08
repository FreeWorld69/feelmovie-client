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
  styles: [`
    .image {
      width: 222px;
      height: auto;
    }
  `],
  template: `
    <div class="card">
      <div class="card__cover pointer">
        <img [src]="imgSrc" class="image" alt="">

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
            <ng-container *ngFor="let category of categories; let i = index">
              <span *ngIf="i <= 2">
                {{category}}
              </span>
            </ng-container>
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
