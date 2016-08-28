// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { AppComponent, environment } from './app/';
// import {LogService} from "./app/services/log.service";
//
// if (environment.production) {
//   enableProdMode();
// }
//
// bootstrap(AppComponent, [LogService]);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';
import {UserService} from "./app/services/user.service";

platformBrowserDynamic().bootstrapModule(AppModule, [UserService]);

