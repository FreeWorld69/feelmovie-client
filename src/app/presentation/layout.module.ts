import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { ComponentModule } from "./component.module";
import { RoutingModule } from "./routing.module";
import { UtilityModule } from "../data/utils/utility.module";
import { DirectiveModule } from "./directive.module";

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ComponentModule,
    DirectiveModule,
    UtilityModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
