import { NgModule } from "@angular/core";
import { HomeApiService } from "./store/home-api.service";
import { DetailsApiService } from "./store/details-api.service";
import { SearchApiService } from "./store/search-api.service";

@NgModule({
  providers: [
    DetailsApiService,
    HomeApiService,
    SearchApiService
  ]
})
export class NetworkModule {

}
