import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader-1" *ngIf="type === 1">
    </div>
    <div class="loader-2" *ngIf="type === 2">
      <span class="loader-inner-1"></span>
      <span class="loader-inner-2"></span>
      <span class="loader-inner-3"></span>
    </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() type: 1 | 2
}
