import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { UtilityModule } from "../../../data/utils/utility.module";
import { MovieDataModule } from "../../../data/modules/movie-data/movie-data.module";
import { ComponentModule } from "../../component.module";

@NgModule({
  imports: [
    CommonModule,
    ComponentModule
  ],
  declarations: [
    DetailsComponent
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }
