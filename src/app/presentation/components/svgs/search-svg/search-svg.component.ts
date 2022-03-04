import { Component, Directive, Input } from '@angular/core';
import { NgClass, NgStyle } from "@angular/common";
import { CssRule } from "@angular/compiler/src/shadow_css";

@Component({
  selector: 'app-search-svg',
  templateUrl: './search-svg.component.svg',
  styleUrls: ['./search-svg.component.scss']
})
export class SearchSvgComponent {
  @Input() public fill: string = '#ffffff';
  @Input() public width: number = 14;
  @Input() public height: number = 14;

  constructor() { }
}
