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
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
var user_service_1 = require("./app/services/user.service");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, [user_service_1.UserService]);
//# sourceMappingURL=main.js.map