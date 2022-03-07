import { NgModule } from "@angular/core";
import { HomeController } from "./home/home.controller";
import { NetworkModule } from "../network/network.module";
import { NgxsModule } from "@ngxs/store";
import { HomeState } from "./home/home.state";
import { SearchState } from "./search/search.state";
import { DetailedMovieState } from "./detailed/detailed-movie.state";

@NgModule({
  imports: [
    NetworkModule,
    NgxsModule.forFeature([HomeState, DetailedMovieState, SearchState])
  ],
  providers: [
    HomeController
  ]
})
export class StoreModule {
}

