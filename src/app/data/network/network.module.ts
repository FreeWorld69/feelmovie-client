import { NgModule } from "@angular/core";
import { HomeApiService } from "./store/home-api.service";
import { DetailsApiService } from "./store/details-api.service";

@NgModule({
  providers: [
    DetailsApiService,
    HomeApiService
  ]
})
export class NetworkModule {

}
