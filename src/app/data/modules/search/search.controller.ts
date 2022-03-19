import { Injectable } from "@angular/core";
import { SearchApiService } from "../../network-old/store/search-api.service";
import { SearchService } from "./services/search.service";
import { MovieApiService } from "../../network/services/movie_api.service";

@Injectable()
export class SearchController {
  constructor(
    private readonly searchService: SearchService,
    private readonly searchApiService: SearchApiService,
    private readonly movieApiService: MovieApiService
  ) {}

  public async setSearchResults(text: string) {
    const searchResultsResponse = await this.movieApiService.getFoundMovie(text, 1, 10);

    this.searchService.setSearchResults(searchResultsResponse);

    // const searchResultsResponse = this.searchApiService.fetchSearchResults(text);
    //
    // searchResultsResponse.subscribe(data => {
    //   // console.log('+++++++++++++++++++')
    //   // console.log(data);
    //
    //   // clear and set data in searched
    //   this.searchService.setSearchResults(data);
    // })
  }
}
