import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div style="height: 600px;margin-top: 140px">
      <h1>hello</h1>

      <my-tabs>
        <my-tab tabTitle="NEW RELEASES">
          <div style="color: white">
            Tab 1 content

            <button (click)="toggle()" style="color: white;width: 100px;height: 100px;background-color: green">

              <div *ngIf="state; else xxx">1</div>
              <ng-template #xxx>
              <div>2</div>
              </ng-template>
            </button>
          </div>
        </my-tab>
        <my-tab tabTitle="MOVIES">
          Tab 2 content
        </my-tab>
        <my-tab tabTitle="TV SERIES">
          Tab 3 content
        </my-tab>
        <my-tab tabTitle="CARTOONS">
          Tab 4 content
        </my-tab>
      </my-tabs>
    </div>
  `
})
export class TestComponent implements OnInit {
  constructor() { }

  state = false;

  toggle() {
    this.state = !this.state;
  }

  ngOnInit(): void {
  }

}
