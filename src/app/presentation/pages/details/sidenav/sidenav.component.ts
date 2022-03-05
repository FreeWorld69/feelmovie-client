import { Component } from '@angular/core';
import { SvgIconEnum } from "../../../components/@custom/svg/svg-icon.enum";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  public SvgIconEnum = SvgIconEnum;


  constructor() { }
}
