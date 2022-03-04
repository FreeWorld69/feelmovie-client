import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SignUpComponent } from "./sign-up.component";
import { RoutingModule } from "../../routing.module";

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    SignUpComponent
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }
