import { MovieSchema } from "../../schemas/core/movie.schema";
import { Configs } from "../../../shared/config";
import { Injectable } from "@angular/core";
import { NetworkProvider } from "../network.provider";
import { Observable } from "rxjs";
import { SeasonFileSchema } from "../../schemas/core/season_file.schema";

@Injectable()
export class DetailsApiService {
  constructor(public networkProvider: NetworkProvider) {}

  public fetchDetails(movieDetailsId: number): Observable<MovieSchema> {
    const route = Configs.backendRoutes.details(movieDetailsId);
    return this.networkProvider.get<MovieSchema>(route);
  }

  public fetchMovie(id: number): Observable<SeasonFileSchema> {
    const route = Configs.backendRoutes.movie(id);
    return this.networkProvider.get<SeasonFileSchema>(route);
  }

  public fetchSeries(id: number, season: number = 1): Observable<SeasonFileSchema[]> {
    const route = Configs.backendRoutes.series(id, season);
    return this.networkProvider.get<SeasonFileSchema[]>(route);
  }
}
