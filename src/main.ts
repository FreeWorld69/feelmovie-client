import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



/**
 * @important
 *
 * @video-players
 * https://smnbbrv.github.io/ngx-plyr, https://vimejs.com/demo
 *
 * @icons
 * https://akveo.github.io/eva-icons/#/
 */
