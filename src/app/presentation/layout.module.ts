import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { ComponentModule } from "./component.module";
import { RoutingModule } from "./routing.module";
import { UtilityModule } from "../utils/utility.module";
import { DirectiveModule } from "./directive.module";
import { PipeModule } from "./pipe.module";

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ComponentModule,
    DirectiveModule,
    UtilityModule,
    PipeModule
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
