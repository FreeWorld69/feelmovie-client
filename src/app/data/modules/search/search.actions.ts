import { SearchResultsSchema } from "../../schemas/core/search_results.schema";

export namespace SearchActions {
  export class SetSearchResults {
    public static readonly type: string = '[Search] set search results';

    constructor(public searchResults: SearchResultsSchema[]) {}
  }
}
