import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'my-tabs',
  template: `
    <ul class="content__tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)">
        <a [class.active]="tab.active">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: [`
    .tab-close {
      color: gray;
      text-align: right;
      cursor: pointer;
    }
  `],
  styleUrls: ['./tabs.scss']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
