import { Component, HostListener, OnInit } from '@angular/core';
import { HelperService } from "../../../data/utils/helper.service";
import { SvgIconEnum } from "../../components/@custom/svg/svg-icon.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private static readonly SHOW_STYLE_ON_SCROLL: number = 140;
  public shouldShowHeadBackground: boolean = false;
  public SvgIcon = SvgIconEnum;
  public searchIsActive: boolean = false;

  constructor(
    public readonly helperService: HelperService
  ) {}

  @HostListener("window:scroll", [])
  public onWindowScroll(): void {
    const yScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.shouldShowHeadBackground = yScroll > HeaderComponent.SHOW_STYLE_ON_SCROLL;
  }

  public toggleSearch(): void {
    this.searchIsActive = !this.searchIsActive;
  }

  public closeSearch(): void {
    this.searchIsActive = false;
  }
}
