import { Injectable } from "@angular/core";

@Injectable()
export class Helper {
  public routeCheckFormat(route: string): string {
    return '/' + route;
  }
}
