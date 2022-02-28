import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Configs } from "./configs/config";
import { Helper } from "./utils/helper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'cimon-client';

  constructor(
    private readonly router: Router,
    private readonly helper:Helper
  ) {}

  get dontShowHeaderAndFooter(): boolean {
    return  this.router.url !== this.helper.routeCheckFormat(Configs.routeRootNames.signIn) &&
            this.router.url !== this.helper.routeCheckFormat(Configs.routeRootNames.signUp);
  }
}
