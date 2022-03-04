import { NgModule } from '@angular/core';
import { NumberIteratePipe } from "./pipes/number-iterate.pipe";
import { PascalCasePipe } from "./pipes/pascal-case.pipe";

@NgModule({
  declarations: [
    NumberIteratePipe,
    PascalCasePipe
  ],
  exports: [
    NumberIteratePipe,
    PascalCasePipe
  ]
})
export class PipeModule { }
