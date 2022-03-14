import { SearchActions } from "./search.actions";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SEARCH_STATE_TOKEN, SearchStateModel } from "./search.metadata";
import { Injectable } from "@angular/core";
import { SearchResultsSchema } from "../../schemas/core/search_results.schema";

type CurrentCtx = StateContext<SearchStateModel>;

@State({
  name: SEARCH_STATE_TOKEN,
  defaults: {
    searchResults: []
  }
})
@Injectable()
export class SearchState {
  @Selector([SEARCH_STATE_TOKEN])
  public static selectSearchResults(state: SearchStateModel): SearchResultsSchema[] {
    return state.searchResults;
  }

  @Action(SearchActions.SetSearchResults)
  public setSearchResults(ctx: CurrentCtx, action: SearchActions.SetSearchResults): void {
    ctx.patchState({
      searchResults: action.searchResults
    })
  }
}
