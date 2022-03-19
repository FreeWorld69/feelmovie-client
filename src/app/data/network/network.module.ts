import { MoviesApiTransform } from "./services/movie_api.transform";
import { NgModule } from "@angular/core";

@NgModule({
    providers: [MoviesApiTransform],
})
export class NetworkModule {}
