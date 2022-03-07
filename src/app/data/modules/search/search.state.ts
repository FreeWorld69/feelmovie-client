import { Action, State, StateContext } from "@ngxs/store";
import { SEARCH_STATE_TOKEN, SearchStateModel } from "./search.metadata";
import { SetSearchResults } from "./search.actions";
import { Injectable } from "@angular/core";

@State({
  name: SEARCH_STATE_TOKEN,
  defaults: {
    searchResults: []
  }
})
@Injectable()
export class SearchState {
  @Action(SetSearchResults)
  public setSearchResults(ctx: StateContext<SearchStateModel>, action: SetSearchResults): void {
  }
}
