import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//TODO links broken
// http://localhost:4200/details/878561310
// http://localhost:4200/details/878442668


/**
 * @important
 *
 * @electron
 * https://buddy.works/tutorials/building-a-desktop-app-with-electron-and-angular
 *
 * @dropdown
 * https://ng-select.github.io/ng-select#/data-sources
 *
 * @video-players
 * https://smnbbrv.github.io/ngx-plyr, https://vimejs.com/demo
 *
 * @icons
 * https://akveo.github.io/eva-icons/#/
 */
