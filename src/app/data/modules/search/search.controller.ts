import { Injectable } from "@angular/core";
import { SearchApiService } from "../../network-old/store/search-api.service";
import { SearchService } from "./services/search.service";

@Injectable()
export class SearchController {
  constructor(
    private readonly searchService: SearchService,
    private readonly searchApiService: SearchApiService
  ) {}

  setSearchResults(text: string) {
    const searchResultsResponse = this.searchApiService.fetchSearchResults(text);

    searchResultsResponse.subscribe(data => {
      // console.log('+++++++++++++++++++')
      // console.log(data);

      // clear and set data in searched
      this.searchService.setSearchResults(data);
    })
  }
}
