import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CatalogComponent } from "./catalog.component";
import { ComponentModule } from "../../component.module";
import { PipeModule } from "../../pipe.module";

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    PipeModule
  ],
  declarations: [
    CatalogComponent,
  ],
  exports: [
    CatalogComponent,
  ]
})
export class CatalogModule { }
