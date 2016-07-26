import { bootstrap                           } from '@angular/platform-browser-dynamic';
import { enableProdMode                      } from '@angular/core';
import { ServicesDiAppComponent, environment } from './app/';
import { LogService                          } from './app/service';

if (environment.production) {
  enableProdMode();
}

bootstrap(ServicesDiAppComponent, [LogService]);

