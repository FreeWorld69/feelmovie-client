import { Injectable } from "@angular/core";
import { Configs } from "../configs/config";

@Injectable()
export class HelperService {
  public configs = Configs;

  public routeCheckFormat(route: string): string {
    return '/' + route;
  }
}
