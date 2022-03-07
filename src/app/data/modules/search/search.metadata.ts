import { StateToken } from "@ngxs/store";
import { SearchResultsSchema } from "../../schemas/core/search_results.schema";

export interface SearchStateModel {
  searchResults: SearchResultsSchema[]
}

export const SEARCH_STATE_TOKEN = new StateToken<SearchStateModel>('search_state_token')
