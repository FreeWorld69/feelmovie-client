import { Injectable } from "@angular/core";
import { NetworkProvider } from "../network.provider";
import { HomeResponse } from "../../schemas/network/response/home.response";
import { Configs } from "../../../configs/config";
import { Observable } from "rxjs";

@Injectable()
export class HomeApiService {
  constructor(public networkProvider: NetworkProvider) {}

  public fetchHomeData(): Observable<HomeResponse> {
    return this.networkProvider.get<HomeResponse>(Configs.backendRoutes.home);
  }
}
