import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-svg',
  templateUrl: './star-svg.component.svg',
  styleUrls: ['./star-svg.component.scss']
})
export class StarSvgComponent {
  @Input() public fill: string = '#fece50';
  @Input() public width: number = 14;
  @Input() public height: number = 14;
  @Input() public filled: boolean = true;

  constructor() { }
}
