import { NgModule } from "@angular/core";
import { MoviesApiTransform } from "./declares/movie_api.transform";
import { MovieApiService } from "./services/movie_api.service";

@NgModule({
    providers: [MoviesApiTransform, MovieApiService],
})
export class NetworkModule {}
