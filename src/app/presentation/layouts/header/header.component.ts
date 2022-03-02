import { Component, HostListener, OnInit } from '@angular/core';
import { HelperService } from "../../../data/utils/helper.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private static readonly SHOW_STYLE_ON_SCROLL: number = 140;
  public shouldShowHeadBackground: boolean = false;

  constructor(
    public readonly helperService: HelperService
  ) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const yScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.shouldShowHeadBackground = yScroll > HeaderComponent.SHOW_STYLE_ON_SCROLL;
  }
}
