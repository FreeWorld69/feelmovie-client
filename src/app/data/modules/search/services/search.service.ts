import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { SearchActions } from "../search.actions";
import { SearchResultsSchema } from "../../../schemas/core/search_results.schema";

@Injectable()
export class SearchService {
  constructor(
    private readonly store: Store
  ) {}

  setSearchResults(data: SearchResultsSchema[]) {
    this.store.dispatch(new SearchActions.SetSearchResults(data));
  }
}
