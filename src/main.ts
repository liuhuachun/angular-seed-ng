import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { WebModule } from './web.module';
import { SeedConfig } from '../tools/config/seed.config';

if (SeedConfig.BUILD_TYPE === 'prod') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(WebModule);
