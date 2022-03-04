import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ErrorComponent } from "./error.component";
import { RoutingModule } from "../../routing.module";

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    ErrorComponent
  ],
  exports: [
    ErrorComponent
  ]
})
export class ErrorModule { }
