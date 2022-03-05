import { Component, Input, OnInit } from '@angular/core';
import { SvgIconEnum } from 'src/app/presentation/components/@custom/svg/svg-icon.enum';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent {
  public readonly SvgIconEnum = SvgIconEnum;

  @Input() imgSrc: string;
  @Input() releaseYear: string;
  @Input() duration: string;
  @Input() title: string;
  @Input() rating: number;
  @Input() description: string;
  @Input() categories: Array<string>;

  constructor() { }
}
