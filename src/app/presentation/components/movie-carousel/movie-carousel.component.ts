import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieCarouselComponent implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiper?: SwiperComponent;

  constructor() { }

  ngAfterViewInit() {
    this.slideToCenter();
  }

  onSlideChange() {
    console.log('slide change');
  }

  private slideToCenter(): void {
    this.swiper?.swiperRef.slideTo(4, 0);
  }
}
