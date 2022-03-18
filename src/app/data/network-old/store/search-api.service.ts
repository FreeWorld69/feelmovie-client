import { Injectable } from "@angular/core";
import { Configs } from "../../../shared/config";
import { NetworkProvider } from "../network.provider";
import { Observable } from "rxjs";
import { SearchResultsSchema } from "../../schemas/core/search_results.schema";

@Injectable()
export class SearchApiService {
  constructor(public networkProvider: NetworkProvider) {}

  public fetchSearchResults(keyword: string): Observable<SearchResultsSchema[]> {
    const route = Configs.backendRoutes.search(keyword);
    return this.networkProvider.get<SearchResultsSchema[]>(route);
  }
}
