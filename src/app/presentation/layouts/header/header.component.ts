import { Component, HostListener } from '@angular/core';
import { HelperService } from "../../../utils/helper.service";
import { SvgIconEnum } from "../../components/@custom/svg/svg-icon.enum";
import { enterAnimation } from "../../animations/enter-animation";
import { debounceTime, distinctUntilChanged, Observable, Subject } from "rxjs";
import { SearchController } from "../../../data/modules/search/search.controller";
import { Select } from "@ngxs/store";
import { SearchState } from "../../../data/modules/search/search.state";
import { SearchResultsSchema } from "../../../data/schemas/core/search_results.schema";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [enterAnimation]
})
export class HeaderComponent {
  @Select(SearchState.selectSearchResults) searchResults$: Observable<SearchResultsSchema[]>
  private static readonly SHOW_STYLE_ON_SCROLL: number = 50; // 140
  private searchSub$: Subject<string> = new Subject<string>();

  public readonly SvgIcon = SvgIconEnum;
  public shouldShowHeadBackground: boolean = false;
  public searchIsActive: boolean = false;
  public searchInputText: string;

  constructor(
    private readonly searchController: SearchController,
    public readonly helperService: HelperService
  ) {
    this.searchSub$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(text => this.searchController.setSearchResults(text));
  }

  @HostListener("window:scroll", [])
  public onWindowScroll(): void {
    const yScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.shouldShowHeadBackground = yScroll > HeaderComponent.SHOW_STYLE_ON_SCROLL;
  }

  public onSearchInputKeyUp(): void {
    this.searchSub$.next(this.searchInputText);
  }

  public toggleSearch(): void {
    this.searchIsActive = !this.searchIsActive;
  }

  public closeSearch(): void {
    this.searchIsActive = false;
  }
}
