import { Component, Input } from '@angular/core';
import { SvgIconEnum } from "./@custom/svg/svg-icon.enum";

interface SearchMovieCardProps {
  imgSrc: string;
  link: string;
  title: string;
}

@Component({
  selector: 'app-search-movie-card',
  styles: [`
    .search-movie-card {
      width: 190px;
      height: 190px;
      position: relative;

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }

      .title {
        position: absolute;
        bottom: 5px;
        left: 8px;
        color: white;
        font-weight: bold;
      }

      .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  `],
  template: `
    <div class="search-movie-card">
      <img [src]="imgSrc" alt="">
      <div class="overlay"></div>
      <div class="title">
        {{title}}
      </div>
<!--      <a [href]="link" class="">-->
<!--        <app-svg-->
<!--          [filled]="true"-->
<!--          [type]="SvgIconEnum.PLAY_RIGHT"-->
<!--          [width]="50"-->
<!--          [height]="50">-->
<!--        </app-svg>-->
<!--      </a>-->
    </div>
  `
})
export class SearchMovieCardComponent implements SearchMovieCardProps {
  @Input() imgSrc: string;
  @Input() link: string;
  @Input() title: string;

  public SvgIconEnum = SvgIconEnum;

  constructor() { }
}

