import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SvgIconEnum } from "../svg/svg-icon.enum";
import { enterAnimation } from "../../../animations/enter-animation";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [enterAnimation],
})
export class AccordionComponent {

  public SvgIconEnum = SvgIconEnum;

  @Input() public title: string;
  @Input() public subtitle: string;
  @Output() public accordionToggle = new EventEmitter();
  @Input() public opened: boolean;

  onClick() {
    this.accordionToggle.emit();
  }
}
