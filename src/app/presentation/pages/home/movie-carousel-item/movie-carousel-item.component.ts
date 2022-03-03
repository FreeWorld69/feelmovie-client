import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-carousel-item',
  templateUrl: './movie-carousel-item.component.html',
  styleUrls: ['./movie-carousel-item.component.scss']
})
export class MovieCarouselItemComponent {
  @Input() public imgUrl: string;
  @Input() public title: string;
  @Input() public reviewCount: number;
  @Input() public description: string;
  @Input() public link: string;
  @Input() public rating: number;

  constructor() { }
}
