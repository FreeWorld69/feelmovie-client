import { routes } from "./routes";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
