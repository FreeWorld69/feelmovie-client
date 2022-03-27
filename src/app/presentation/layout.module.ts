import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { ComponentModule } from "./component.module";
import { RoutingModule } from "./routing.module";
import { UtilityModule } from "../utils/utility.module";
import { DirectiveModule } from "./directive.module";
import { PipeModule } from "./pipe.module";
import { FormsModule } from "@angular/forms";
import { TopbarComponent } from "./layouts/topbar/topbar.component";
import { ElectronService } from "../utils/electron.service";

@NgModule({
  imports: [CommonModule, RoutingModule, ComponentModule, DirectiveModule, UtilityModule, PipeModule, FormsModule],
  providers: [
    ElectronService
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopbarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TopbarComponent
  ]
})
export class LayoutModule { }
