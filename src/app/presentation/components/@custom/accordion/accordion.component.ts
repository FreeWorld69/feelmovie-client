import { Component, Input } from '@angular/core';
import { SvgIconEnum } from "../svg/svg-icon.enum";
import { enterAnimation } from "../../../animations/enter-animation";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [enterAnimation],
})
export class AccordionComponent {
  @Input() public title: string;
  @Input() public subtitle: string;

  public opened: boolean = false;
  public SvgIconEnum = SvgIconEnum;

  constructor() { }

  onClick() {
    this.opened = !this.opened;
    console.log(123)
  }
}
