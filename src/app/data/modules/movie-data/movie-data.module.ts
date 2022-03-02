import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDataService } from "./services/movie-data.service";


@NgModule({
  declarations: [],
  providers: [MovieDataService],
  imports: [
    CommonModule
  ],
  exports: []
})
export class MovieDataModule { }
