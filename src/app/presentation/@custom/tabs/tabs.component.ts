import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'my-tabs',
  template: `
    <div [ngClass]="classNames">
      <ul class="content__tabs container">
        <li *ngFor="let tab of tabs" (click)="selectTab(tab)">
          <a [class.active]="tab.active">{{tab.title}}</a>
        </li>
      </ul>
    </div>

    <div class="container">
        <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tabs.scss']
})
export class TabsComponent implements AfterContentInit {
  @Input() classNames: Array<string>;
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
