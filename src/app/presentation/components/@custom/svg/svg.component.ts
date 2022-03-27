import { Component, Input, OnInit } from '@angular/core';
import { SvgIconEnum } from "./svg-icon.enum";

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent {
  public SvgIcon = SvgIconEnum;
  @Input() public fill: string = '#ffffff';
  @Input() public width: number = 14;
  @Input() public height: number = 14;
  @Input() public filled: boolean = false;
  @Input() public svgClass: string = '';
  @Input() public type: SvgIconEnum;

  constructor() { }
}
