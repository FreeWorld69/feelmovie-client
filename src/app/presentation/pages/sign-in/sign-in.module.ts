import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in.component";
import { RoutingModule } from "../../routing.module";

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    SignInComponent
  ],
  exports: [
    SignInComponent
  ]
})
export class SignInModule { }
