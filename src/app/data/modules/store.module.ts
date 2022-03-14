import { NgModule } from "@angular/core";
import { HomeController } from "./home/home.controller";
import { NetworkModule } from "../network/network.module";
import { NgxsModule } from "@ngxs/store";
import { HomeState } from "./home/home.state";
import { SearchState } from "./search/search.state";
import { DetailedMovieState } from "./detailed/detailed-movie.state";
import { DetailedMovieController } from "./detailed/detailed-movie.controller";
import { DetailedService } from "./detailed/services/detailed.service";
import { SearchController } from "./search/search.controller";
import { SearchService } from "./search/services/search.service";

@NgModule({
  imports: [
    NetworkModule,
    NgxsModule.forFeature([HomeState, DetailedMovieState, SearchState])
  ],
  providers: [
    HomeController,
    DetailedMovieController,
    SearchController,

    DetailedService,
    SearchService
  ]
})
export class StoreModule {
}

