import { NgModule } from "@angular/core";
import { DetailsApiService } from "./store/details-api.service";
import { SearchApiService } from "./store/search-api.service";

@NgModule({
  providers: [
    DetailsApiService,
    SearchApiService
  ]
})
export class NetworkOldModule {
}
