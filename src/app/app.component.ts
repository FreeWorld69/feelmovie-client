import { Configs } from "./configs/config";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HelperService } from "./utils/helper.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  public title: string = 'cimon-client';

  constructor(
    private readonly router: Router,
    private readonly helper:HelperService,
  ) {}

  get dontShowHeaderAndFooter(): boolean {
    return  this.router.url !== this.helper.routeCheckFormat(Configs.routeRootNames.signIn) &&
            this.router.url !== this.helper.routeCheckFormat(Configs.routeRootNames.signUp) &&
            this.router.url !== this.helper.routeCheckFormat(Configs.routeRootNames.error);
  }
}
