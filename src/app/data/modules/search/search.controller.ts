import { Injectable } from "@angular/core";
import { SearchService } from "./services/search.service";
import { MovieApiService } from "../../network/services/movie_api.service";

@Injectable()
export class SearchController {
  constructor(
    private readonly searchService: SearchService,
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
