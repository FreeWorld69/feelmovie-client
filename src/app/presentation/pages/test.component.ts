import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div style="height: 600px;margin-top: 140px">
      <h1>hello</h1>

      <my-tabs>
        <my-tab tabTitle="NEW RELEASES">
          Tab 1 content
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

  ngOnInit(): void {
  }

}
