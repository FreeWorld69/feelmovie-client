import { NgModule } from "@angular/core";
import { HomeController } from "./home/home.controller";
import { NetworkModule } from "../network/network.module";
import { NgxsModule } from "@ngxs/store";
import { HomeState } from "./home/home.state";
import { SearchState } from "./search/search.state";
import { DetailedMovieState } from "./detailed/detailed-movie.state";
import { DetailedMovieController } from "./detailed/detailed-movie.controller";
import { DetailedService } from "./detailed/services/detailed.service";

@NgModule({
  imports: [
    NetworkModule,
    NgxsModule.forFeature([HomeState, DetailedMovieState, SearchState])
  ],
  providers: [
    HomeController,
    DetailedMovieController,

    DetailedService
  ]
})
export class StoreModule {
}

