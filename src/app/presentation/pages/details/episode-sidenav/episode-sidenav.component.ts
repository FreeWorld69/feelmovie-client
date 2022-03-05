import { Component } from '@angular/core';
import { SvgIconEnum } from "../../../components/@custom/svg/svg-icon.enum";

@Component({
  selector: 'app-episode-sidenav',
  templateUrl: './episode-sidenav.component.html',
  styleUrls: ['./episode-sidenav.component.scss']
})
export class EpisodeSidenavComponent {
  public SvgIconEnum = SvgIconEnum;

  constructor() { }
}
