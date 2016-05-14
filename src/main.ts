import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Object2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Object2AppComponent);
