import { Injectable } from '@angular/core';
import { SearchService } from './services/search.service';
import { ApiServiceRoot } from '../../network/api.service';

@Injectable()
export class SearchController {
  constructor(
    private readonly searchService: SearchService,
    private readonly apiServiceRoot: ApiServiceRoot
  ) {}

  public async setSearchResults(text: string) {
    const searchResultsResponse = await this.apiServiceRoot.getFoundMovie(text);
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
