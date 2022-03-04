import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from "./directives/click-outside.directive";
import { StopPropagationDirective } from "./directives/stop-propagation.directive";

@NgModule({
  declarations: [
    ClickOutsideDirective,
    StopPropagationDirective
  ],
  exports: [
    ClickOutsideDirective,
    StopPropagationDirective
  ]
})
export class DirectiveModule { }
